// MODULES //

import qs from 'querystring';
import logger from 'debug';
import localforage from 'localforage';
import isString from '@stdlib/assert/is-string';
import isFunction from '@stdlib/assert/is-function';
import isEmptyArray from '@stdlib/assert/is-empty-array';
import isEmptyObject from '@stdlib/assert/is-empty-object';
import hasOwnProp from '@stdlib/assert/has-own-property';
import copy from '@stdlib/utils/copy';
import Buffer from '@stdlib/buffer/ctor';
import { OPEN_CPU_DEFAULT_SERVER, OPEN_CPU_IDENTITY } from 'constants/opencpu';
import isElectron from 'utils/is-electron';
import io from 'socket.io-client';
import SpeechInterface from 'speech-interface';


// VARIABLES //

const debug = logger( 'isle-editor:session' );
const PATH_REGEXP = /^\/([^/]*)\/([^/]*)\//i;
const STDOUT_REGEX = /stdout/;
const GRAPHICS_REGEX = /graphics/;
const ERR_REGEX = /\nIn call:[\s\S]*$/gm;
const HELP_PATH_REGEX = /\/(?:site-)?library\/([^/]*)\/help\/([^/"]*)/;
let userRights = null;


// SESSION //

class Session {
	constructor( config, offline ) {
		debug( 'Should create session...' );

		// Create instance of indexedDB database:
		this.store = localforage.createInstance({
			driver: localforage.INDEXEDDB,
			name: 'ISLE',
			description: 'Persistent data storage for ISLE'
		});

		// Address where ISLE server is running:
		this.server = config.server;

		// Set whether the session tries to communicate with the server
		this._offline = offline || false;

		// Array of subscribed components listening for session updates:
		this.listeners = [];

		// Address in local storage for user information:
		this.userVal = 'ISLE_USER_' + config.server;

		// Retrieve user object from localStorage:
		this.user = this.loadUser();

		// Boolean indicating whether user is logged in or not:
		this.anonymous = isEmptyObject( this.user );

		// Boolean whether lesson is finished:
		this.finished = false;

		// Boolean indicating whether the server is responding:
		this.live = false;

		// Actions for the current user:
		this.actions = [];

		// Actions received from other users via socket communication:
		this.socketActions = [];

		// List of currently logged-in users:
		this.userList = [];

		// Array of open chats:
		this.chats = [];

		// Hash table for session variables:
		this.vars = {};

		// State variables of the given lesson:
		this.state = config.state;

		// Register speech interface:
		this.speechInterface = new SpeechInterface();

		// Time variables:
		this.startTime = new Date().getTime();
		this.endTime = null;
		this.duration = 0;

		// YAML configuration object:
		this.config = config;

		// IDs in the database:
		this.lessonID = null;
		this.namespaceID = null;

		// Extract namespace and lesson name from URL:
		this.namespaceName = null;
		this.lessonName = null;
		if ( !isElectron ) {
			const url = window.location.pathname;
			if ( isString( url ) ) {
				var matches = url.match( PATH_REGEXP );
				if ( matches && matches.length >= 2 && url.endsWith( '/' ) ) {
					this.namespaceName = decodeURIComponent( matches[ 1 ]);
					this.lessonName = decodeURIComponent( matches[ 2 ]);
				}
			}
		} else {
			this.lessonName = config.lesson;
			this.namespaceName = config.namespace;
		}

		// Connect via WebSockets to other users...
		if ( !isEmptyObject( this.user ) && this.server && !this._offline ) {
			this.socketConnect();
		}

		// Ping server to check status:
		this.startPingServer();

		if ( !this.lessonID && !this.namespaceID ) {
			debug( '[1] Retrieve lesson information:' );
			this.getLessonInfo();
		}

		// Log session data to database in regular interval:
		setInterval( this.logSession, 5*60000 );
	}

	/**
	* Logs session object to database if logged-in.
	*
	* @returns {void}
	*/
	logSession = () => {
		if ( !this.anonymous && this.live ) {
			this.updateDatabase();
		}
	}

	/**
	* Registers a listener by pushing it to the array of listeners and returns a function to unsubscribe the listener.
	*/
	subscribe = ( listener ) => {
		this.listeners.push( listener );
		return () => {
			this.listeners = this.listeners.filter( l => l !== listener );
		};
	}

	/**
	* Pings the server and starts retrieving lesson info if server is live.
	*
	* @returns {void}
	*/
	pingServer = () => {
		debug( `Should ping the server at ${this.server}...` );
		fetch( this.server + '/ping' )
			.then( ( response ) => {
				return response.text();
			})
			.then( ( body ) => {
				if ( body === 'live' ) {
					this.live = true;
					if ( !this.lessonID && !this.namespaceID ) {
						// [1] Retrieve lesson information:
						this.getLessonInfo();
					}
				} else {
					this.live = false;
				}
				this.update();
			})
			.catch( err => debug( 'Encountered an error: '+err.message ) );
	}

	/**
	* Pings the server in a regular interval when lesson is deployed.
	*
	* @returns {void}
	*/
	startPingServer = () => {
		this.pingServer();
		if ( !this._offline ) {
			this.pingInterval = setInterval( this.pingServer, 10000 );
		}
	}

	/**
	* Stops pinging the server once socket connection is established.
	*
	* @returns {void}
	*/
	stopPingServer = () => {
		debug( 'Should clear the interval pinging the server' );
		if ( !this._offline ) {
			clearInterval( this.pingInterval );
		}
	}

	/**
	*  Executes R code via OpenCPU.
	*
	* @param {Object} opt - options
	* @param {string} opt.code - R code
	* @param {Function} opt.onPlots - callback invoked with array of generated plots
	* @param {Function} opt.onResult - callback invoked with output of code evaluation
	* @param {Function} opt.onError - callback invoked when error is encountered
	* @returns {void}
	*/
	executeRCode = ({ code, onPlots, onResult, onError }) => {
		debug( 'Executing R code...' );
		const OPEN_CPU = this.getOpenCPUServer();
		debug( `Post request at ${OPEN_CPU + OPEN_CPU_IDENTITY} for code "${code}"` );

		const getElem = ( elem ) => {
			fetch( OPEN_CPU + elem )
				.then( res => {
					res.text().then( body => {
						onResult( null, res, body );
					});
				})
				.catch( err => onResult( err ) );
		};
		const formData = new FormData();
		formData.append( 'x', code );
		fetch( OPEN_CPU + OPEN_CPU_IDENTITY, {
			method: 'POST',
			body: formData
		})
		.then( response => {
			response.text().then( body => {
				debug( 'Received body:\n '+body );
				debug( 'Response status: '+response.status );
				const arr = body.split( '\n' );
				const plots = [];
				if ( response.status !== 400 ) {
					arr.forEach( elem => {
						if ( GRAPHICS_REGEX.test( elem ) === true ) {
							const imgURL = OPEN_CPU + elem + '/svg';
							plots.push( imgURL );
						}
						if ( STDOUT_REGEX.test( elem ) === true ) {
							getElem( elem );
						}
					});
					if ( isFunction( onPlots ) ) {
						onPlots( plots );
					}
				} else {
					onError( body.replace( ERR_REGEX, '' ) );
				}
			});
		})
		.catch( error => debug( 'Encountered an error: '+error.message ) );
	}

	/**
	* Retrieves help page for R help command, e.g. `help(mean)`.
	*
	* @param {string} helpCommand - R help command
	* @param {Function} clbk - callback function invoked with retrieved help page
	* @returns {void}
	*/
	getRHelpPage = ( helpCommand, clbk ) => {
		const OPEN_CPU = this.getOpenCPUServer();
		const fetchElem = ( elem ) => {
			fetch( OPEN_CPU + elem )
				.then( res => res.text() )
				.then( helpPath => {
					const [ , lib, topic ] = helpPath.match( HELP_PATH_REGEX );
					fetch( `https://public.opencpu.org/ocpu/library/${lib}/man/${topic}/html` ).then( res => {
						res.text().then( body => {
							clbk( null, res, body );
						})
						.catch( err => clbk( err ) );
					});
				});
		};
		const formData = new FormData();
		formData.append( 'x', 'y = ' + helpCommand + '; y[1]' );
		fetch( OPEN_CPU + OPEN_CPU_IDENTITY, {
			method: 'POST',
			body: formData
		})
		.then( response => {
			if ( response.status !== 400 ) {
				return response.text();
			}
		})
		.then( body => {
			const arr = body.split( '\n' );
			arr.forEach( elem => {
				if ( STDOUT_REGEX.test( elem ) === true ) {
					fetchElem( elem );
				}
			});
		})
		.catch( error => debug( 'Encountered an error: '+error.message ) );
	}

	/**
	* Retrieves help page for the specified function.
	*
	* @param {string} library - R library the function resides in
	* @param {string} functionName - name of function to get help page for
	* @param {Function} clbk - callback function invoked with retrieved page
	* @returns {void}
	*/
	getRHelp = ( library, functionName, clbk ) => {
		const OPEN_CPU = this.getOpenCPUServer();
		fetch( OPEN_CPU + `/ocpu/library/${library}/man/${functionName}/html` )
			.then( res => {
				res.text().then( body => {
					clbk( null, res, body );
				})
				.catch( err => clbk( err ) );
			});
	}

	/**
	* Generates R plot via OpenCPU.
	*
	* @param {string} code - R code to generate plot
	* @param {string} filetype - file extension of generated plot
	* @param {Function} clbk - callback function invoked with `error`, the URL of the image, and the response body (in that order)
	* @returns {void}
	*/
	getRPlot = ( code, filetype, clbk ) => {
		const OPEN_CPU = this.getOpenCPUServer();

		const fetchImage = ( imgURL ) => {
			fetch( imgURL, {
				encoding: null
			})
				.then( res => {
					res.text().then( body => {
						if ( filetype === 'png' ) {
							const buf = new Buffer( body );
							body = 'data:'+res.headers['content-type']+';base64,' + buf.toString( 'base64' );
						}
						clbk( null, imgURL, body );
					});
				})
				.catch( err => clbk( err ) );
		};
		const formData = new FormData();
		formData.append( 'x', code );
		fetch( OPEN_CPU + OPEN_CPU_IDENTITY, {
			method: 'POST',
			body: formData
		})
			.then( res => res.text() )
			.then( body => {
				const arr = body.split( '\n' );
				arr.forEach( elem => {
					if ( GRAPHICS_REGEX.test( elem ) === true ) {
						const imgURL = OPEN_CPU + elem + '/' + filetype;
						fetchImage( imgURL );
					}
				});
			})
			.catch( error => clbk( error ) );
	}

	/**
	* Send data packet to specified group of users.
	*
	* @param {Object} data - message data
	* @param {string} [to='owners] - group of people to send message to. Can be either of `owners` or `members`
	* @returns {void}
	*/
	sendSocketMessage = ( data, to ) => {
		if ( !to ) {
			to = 'owners';
		}
		if ( this.socket ) {
			this.socket.emit( 'event', data, to );
		}
	}

	/**
	* Retrieves information from server on whether user is enrolled or owner of the course of the lesson. Pulls down logged actions in case user is an owner.
	*
	* @returns {void}
	*/
	getUserRights = () => {
		if (
			!this.anonymous &&
			!this.userRightsQuestionPosed &&
			!this._offline &&
			!userRights
		) {
			this.userRightsQuestionPosed = true;
			fetch( this.server+'/get_user_rights', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': 'JWT ' + this.user.token
				},
				body: JSON.stringify({
					namespaceName: this.namespaceName,
					lessonName: this.lessonName
				})
			})
			.then( res => res.json() )
			.then( json => {
				userRights = json;
				if ( userRights.owner && isEmptyArray( this.socketActions ) ) {
					debug( '[3a] Retrieve all user actions for owners:' )
					this.getUserActions();
				} else if ( !this.currentUserActions ) {
					debug( '[3b] Retrieve only own actions otherwise:' );
					this.getCurrentUserActions();
				}
			})
			.catch( err => {
				this.userRightsQuestionPosed = false;
				debug( 'Encountered an error '+err.message );
			});
		}
	}

	/**
	* Sets the userRights variable to null.
	*/
	removeUserRights = () => {
		userRights = null;
	}

	/**
	* Checks whether user is enrolled in the course.
	*
	* @returns {boolean} boolean indicating whether user is enrolled
	*/
	isEnrolled = () => {
		if ( !userRights ) {
			this.getUserRights();
			return false;
		}
		return userRights.enrolled;
	}

	/**
	* Checks whether user is an owner of the course.
	*
	* @returns {boolean} boolean indicating whether user is course owner
	*/
	isOwner = () => {
		if ( !userRights ) {
			this.getUserRights();
			return false;
		}
		return userRights.owner;
	}

	/**
	* Joins the specified chat in case of an existing socket connection.
	*
	* @param {string} name - chat room name
	*/
	joinChat( name ) {
		if ( this.socket ) {
			let chat = { name: name, messages: [], members: []};
			let found = false;
			for ( let i = 0; i < this.chats.length; i++ ) {
				if ( this.chats[ i ].name === chat.name ) {
					found = true;
				}
			}
			if ( !found ) {
				this.chats.push( chat );
				this.update();
				this.socket.emit( 'join_chat', name );
			}
		}
	}

	/**
	* Marks all chat messages in the specified room as read.
	*
	* @param {string} name - name of chat room
	* @returns {void}
	*/
	markChatMessagesAsRead( name ) {
		const chat = this.getChat( name );
		chat.messages = chat.messages.map( m => {
			m.unread = false;
			return m;
		});
		this.update( 'mark_messages' );
	}

	/**
	* Sends the supplied message to all members in the given chat room.
	*
	* @param {string} name - chat room name
	* @param {string} msg - chat message
	*/
	sendChatMessage( name, msg ) {
		if ( this.socket ) {
			const msgObj = {
				time: new Date().toLocaleTimeString(),
				user: this.user.name,
				content: msg
			};
			const chat = this.getChat( name );
			chat.messages.push( msgObj );
			this.markChatMessagesAsRead( name );
			debug( 'Should emit message to room '+name+': ' + JSON.stringify( msgObj ) );
			this.socket.emit( 'chat_message', {
				msg: msgObj,
				namespaceName: this.namespaceName,
				lessonName: this.lessonName,
				chatroom: name
			});
		}
	}

	/**
	* Retrieves chat room object.
	*
	* @param {string} name - chat room name
	* @returns {(Object|null)} chat room if found, null otherwise
	*/
	getChat( name ) {
		let idx = name.indexOf( ':' );
		if ( idx !== -1 ) {
			name = name.substr( idx+1 );
		}
		for ( let i = 0; i < this.chats.length; i++ ) {
			let chat = this.chats[ i ];
			if ( chat.name === name ) {
				return chat;
			}
		}
		return null;
	}

	/**
	* Leaves chat with the given name and removes it from the current list of chats.
	*
	* @param {string} name - chat room name
	* @returns {void}
	*/
	leaveChat( name ) {
		for ( let i = this.chats.length - 1; i >= 0; i-- ) {
			if ( this.chats[ i ].name === name ) {
				this.chats.splice( i, 1 );
			}
		}
		this.update();
		if ( this.socket ) {
			this.socket.emit( 'leave_chat', name );
		}
	}

	/**
	* Establishes socket connection with other users.
	*
	* @returns {void}
	*/
	socketConnect() {
		debug( 'Connecting via socket to server... ' );
		const socket = io.connect( this.server );

		socket.on( 'connect', () => {
			debug( 'I am connected...' );
			this.stopPingServer();
		});

		socket.emit( 'join', {
			namespaceName: this.namespaceName,
			lessonName: this.lessonName,
			userID: this.user.id,
			userName: this.user.name,
			userEmail: this.user.email
		});
		socket.on( 'console', function onConsole( msg ) {
			debug( msg );
		});

		socket.on( 'userlist', ( data ) => {
			debug( 'Received list of users currently in the lesson: ' + data );
			this.userList = JSON.parse( data );
			this.update();
		});

		socket.on( 'user_joins', ( data ) => {
			debug( 'A user has joined and should be added to the user list: ' + data );
			data = JSON.parse( data );
			this.userList.push( data );
			const isUser = data.email === this.user.email;
			if ( this.config.joinNotifications && isUser ) {
				this.addNotification({
					title: 'User has joined',
					message: `User ${data.name} (${data.email}) has joined us.`,
					level: 'success',
					position: 'tl'
				});
			}
			this.update();
		});

		socket.on( 'user_leaves', ( data ) => {
			if ( !isEmptyObject( this.user ) ) {
				debug( 'A user has disconnected and should be removed: ' + data );
				data = JSON.parse( data );
				this.userList = this.userList.map( user => {
					if ( user.email === data.email ) {
						user.inactive = true;
						user.exitTime = data.exitTime;
					}
					return user;
				});
				const isUser = data.email === this.user.email;
				if ( this.config.joinNotifications && !isUser ) {
					this.addNotification({
						title: 'User has left',
						message: `User ${data.name} (${data.email}) has left us.`,
						level: 'success',
						position: 'tl'
					});
					this.update();
				} else if ( isUser ) {
					// Case: Oneself has logged on another browser tab
					this.forcedLogout();
				}
			}
		});

		socket.on( 'chat_history', ({ name, messages, members }) => {
			debug( 'Received chat history: ' + JSON.stringify( messages ) );
			const chat = this.getChat( name );
			chat.messages = messages;
			chat.members = members;
			this.update();
		});

		socket.on( 'member_has_joined_chat', ({ name, member }) => {
			const chat = this.getChat( name );
			chat.members.push( member );
			this.update( 'member_has_joined_chat' );
		});

		socket.on( 'member_has_left_chat', ({ name, member }) => {
			const chat = this.getChat( name );
			chat.members = chat.members.filter( m => m.email !== member.email );
			this.update( 'member_has_left_chat' );
		});

		socket.on( 'chat_message', ( data ) => {
			const chat = this.getChat( data.chatroom );
			if ( chat ) {
				data.msg.unread = true;
				chat.messages.push( data.msg );
			}
			this.update( 'chat_message' );
		});

		socket.on( 'memberAction', this.saveAction.bind( this ) );

		socket.on( 'error', console.error.bind( console ) ); // eslint-disable-line no-console

		socket.on( 'disconnect', () => {
			debug( 'I am disconnected from the server...' );
			this.live = false;
			this.startPingServer();
			this.update();
		});

		this.socket = socket;
	}

	getFakeUsers = ( clbk ) => {
		fetch( this.server+'/get_fake_users', {
			headers: {
				'Authorization': 'JWT ' + this.user.token
			}
		})
		.then( response => {
			if ( response.status === 200 ) {
				response.json().then( body => {
					clbk( null, body );
				});
			}
		})
		.catch( error => clbk( error ) );
	}

	/**
	* Retrieves all actions by users for the current lesson for course owners.
	*
	* @returns {void}
	*/
	getUserActions = () => {
		debug( 'Retrieve user actions...' );

		fetch( this.server+'/get_user_actions', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'JWT ' + this.user.token
			},
			body: JSON.stringify({
				lessonID: this.lessonID,
				anonymous: true
			})
		})
		.then( ( response ) => {
			debug( '/get_user_actions response status: '+response.status );
			if ( response.status === 200 ) {
				response.json().then( json => {
					debug ( `Received ${json.actions.length} actions...` );
					this.socketActions = json.actions;
					this.update( 'retrieved_user_actions', json.actions );
				});
			}
		})
		.catch( error => debug( 'Encountered an error: '+error.message ) );
	}

	/**
	* Retrieves all actions by the current user for the active lesson.
	*
	* @returns {void}
	*/
	getCurrentUserActions = () => {
		fetch( this.server+'/get_current_user_actions', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'JWT ' + this.user.token
			},
			body: JSON.stringify({
				lessonID: this.lessonID
			})
		})
		.then( ( response ) => {
			if ( response.status === 200 ) {
				response.json().then( body => {
					this.currentUserActions = body.actions;
					this.update( 'retrieved_current_user_actions', this.currentUserActions );
				});
			}
		})
		.catch( error => debug( 'Encountered an error: '+error.message ) );
	}

	/**
	* Saves action to array of socket actions and sends it to listening components.
	*
	* @param {Object} action - user action object
	* @returns {void}
	*/
	saveAction( action ) {
		debug( 'Received a member action...' );
		let newArray = this.socketActions;
		newArray.unshift( action );
		this.socketActions = newArray;
		debug( 'Number of actions: ' + this.socketActions.length );
		this.update( 'member_action', action );
	}

	/**
	* Update all lesson components that have subscribed to session updates.
	*
	* @param {string} type - event type
	* @param {*} data - event data
	*/
	update( type, data ) {
		this.listeners.forEach( listener => listener( type, data ) );
	}

	registerUser( data, clbk ) {
		fetch( this.server+'/create_user', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify( data )
		})
		.then( ( response ) => {
			if ( response.status !== 200 ) {
				response.text().then( message => {
					this.addNotification({
						title: 'User not created',
						message: message,
						level: 'error',
						position: 'tl'
					});
				});
			} else {
				this.addNotification({
					title: 'User created',
					message: 'You have successfully signed up.',
					level: 'success',
					position: 'tl'
				});
				this.login({ email: data.email, password: data.password }, clbk );
			}
		})
		.catch( ( err ) => {
			debug( 'Encountered an error: '+err.message );
			clbk( err );
		});
	}

	/**
	* Logs out the currently logged-in user and remove his meta-data from localStorage.
	*
	* @returns {void}
	*/
	logout() {
		debug( `Logout initiated by user ${this.user.name}` );
		localStorage.removeItem( this.userVal );
		this.socket.emit( 'leave' );
		this.user = null;
		this.anonymous = true;
		this.reset();
		this.addNotification({
			title: 'Logged out',
			message: 'You have successfully logged out.',
			level: 'success',
			position: 'tl'
		});
		this.update( 'logout' );
	}

	/**
	* Logs out user in current session if user has logged out in another tab.
	*
	* @returns {void}
	*/
	forcedLogout() {
		debug( `Forced logout of user ${this.user.name} by server` );
		localStorage.removeItem( this.userVal );
		this.user = null;
		this.anonymous = true;
		this.reset();
		this.addNotification({
			title: 'Logged out',
			message: 'You have been logged out by a server command.',
			level: 'success',
			position: 'tl'
		});
		this.update( 'logout' );
	}

	/**
	* Resets session instance variables.
	*
	* @returns {void}
	*/
	reset() {
		this.chats = [];
		this.actions = [];
		this.socketActions = [];
		this.currentUserActions = null;
		this.userList = [];
		this.removeUserRights();
	}

	/**
	* Logs user in.
	*
	* @param {Object} form - form data
	* @param {string} form.email - email address
	* @param {string} form.password - user password
	* @param {Function} clbk - callback function
	* @returns {void}
	*/
	login = ( form, clbk ) => {
		fetch( this.server+'/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify( form )
		})
		.then( response => {
			response.json().then( body => {
				const { token, id, message } = body;
				if ( message === 'ok' ) {
					this.handleLogin({ token, id });
				}
				clbk( null, response, body );
			});
		})
		.catch( ( err ) => {
			clbk( err );
		});
	}

	/**
	* Sends a "Reset Password" link to the supplied email address.
	*
	* @param {string} email - email address
	* @returns {void}
	*/
	forgotPassword( email ) {
		fetch( this.server+'/forgot_password?'+qs.stringify({ email }) )
			.then( ( res ) => {
				debug( 'GET: /forgot_password' );
				if ( res.status < 400 ) {
					this.addNotification({
						title: 'New Password',
						message: 'Check your email inbox for a link to choose a new password.',
						level: 'success',
						position: 'tl'
					});
				} else {
					return res.text();
				}
			})
			.then( ( body ) => {
				if ( body ) {
					this.addNotification({
						title: 'New Password',
						message: body,
						level: 'error',
						position: 'tl'
					});
				}
			})
			.catch( ( error ) => {
				this.addNotification({
					title: 'New Password',
					message: error.message,
					level: 'error',
					position: 'tl'
				});
			});
	}

	/**
	* Retrieves the ID for the lesson and namespace from the database.
	*/
	getLessonInfo = () => {
		const { lessonName, namespaceName, server } = this;
		debug( `Retrieve lesson info for ${namespaceName}/${lessonName} from ${server}` );
		if ( lessonName && namespaceName ) {
			fetch( this.server+'/get_lesson_info?'+qs.stringify({ lessonName, namespaceName }) )
			.then( res => res.json() )
			.then( ( body ) => {
				this.lessonID = body.lessonID;
				this.namespaceID = body.namespaceID;
				debug( '[2] Retrieve user rights for said lesson and its namespace' );
				this.getUserRights();
			})
			.catch( ( err ) => {
				debug( 'Encountered an error: '+err.message );
			});
		}
	}

	/**
	* Retrieves data from database.
	*
	* @param {Object} query - query for actions to obtain from database
	* @param {Function} onData - callback invoked with error or retrieved data
	* @returns {void}
	*/
	retrieveData( query, onData ) {
		fetch( this.server + '/retrieve_data', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				query,
				user: this.user
			})
		})
			.then( res => res.json() )
			.then( body => onData( null, body ) )
			.catch( error => onData( error ) );
	}

	/**
	* Verifies user credentials via JSON Web Token to finish login process.
	*
	* @param {Object} obj - user object with `token` and `id` fields
	* @returns {void}
	*/
	handleLogin = ( obj ) => {
		fetch( this.server+'/credentials', {
			method: 'POST',
			headers: {
				'Authorization': 'JWT ' + obj.token,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				id: obj.id
			})
		})
		.then( ( response ) => {
			return response.json();
		})
		.then( ( json ) => {
			this.addNotification({
				title: 'Logged in',
				message: 'You have successfully logged in.',
				level: 'success',
				position: 'tl'
			});
			const user = {
				...obj,
				...json
			};

			this.user = user;
			this.anonymous = false;
			this.storeUser( user );
			this.socketConnect();
			this.update();
		})
		.catch( ( err ) => {
			debug( 'Encountered an error: '+err.message );
		});
	}

	/**
	* Stores a user object in localStorage.
	*
	* @returns {void}
	*/
	storeUser( user ) {
		localStorage.setItem( this.userVal, JSON.stringify( user ) );
	}

	/**
	* Loads a user object from localStorage.
	*
	* @returns {Object} user object
	*/
	loadUser() {
		const item = localStorage.getItem( this.userVal );
		return item ? JSON.parse( item ) : {};
	}

	/**
	* Updates session user object from localStorage.
	*
	* @returns {void}
	*/
	updateUser() {
		const item = localStorage.getItem( this.userVal );
		this.user = item ? JSON.parse( item ) : null;
		this.anonymous = item ? false : true;
	}

	/**
	* Sets a session variable to a given value.
	*
	* @param {string} name - variable name
	* @param {*} val - value to set
	* @returns {void}
	*/
	set( name, val ) {
		this.vars[ name ] = val;
		this.logToDatabase( 'vars', this.vars );
	}

	/**
	* Retrieves the value of a session variable.
	*
	* @param {string} name - variable name
	* @returns {*} variable value
	*/
	get( name ) {
		return this.vars[ name ];
	}

	/**
	* Finalizes session once user clicks on "Submit Lesson" button.
	*
	* @returns {void}
	*/
	finalize() {
		this.updateUser();
		this.endTime = new Date().getTime();
		this.duration = this.endTime - this.startTime;
		this.finished = true;

		if ( this.anonymous === false ) {
			this.updateDatabase();
		}
	}

	/**
	* Updates session instance in the remote database.
	*
	* @returns {void}
	*/
	updateDatabase() {
		const currentSession = {
			startTime: this.startTime,
			endTime: this.endTime,
			duration: this.duration,
			actions: this.actions,
			finished: this.finished,
			vars: this.vars,
			lessonID: this.lessonID,
			userID: this.user.id
		};
		if ( !this._offline ) {
			fetch( this.server+'/updateSession', {
				method: 'POST',
				body: JSON.stringify({
					stringified: currentSession
				})
			}).catch( err => debug( 'Encountered an error: '+err.message ) );
		}
	}

	/**
	* Logs data to database.
	*
	* @param {string} type - type of data to log (`vars` or `action`)
	* @param {Object} data - data to log
	* @returns {void}
	*/
	logToDatabase( type, data ) {
		if ( this.anonymous ) {
			data.email = 'anonymous';
			data.name = 'anonymous';
		} else {
			data.email = this.user.email;
			data.name = this.user.name;
		}
		const obj = {
			startTime: this.startTime,
			userID: this.user.id,
			lessonID: this.lessonID,
			type,
			data
		};
		if ( !this._offline ) {
			fetch( this.server+'/store_session_element', {
				method: 'POST',
				body: JSON.stringify({
					stringified: obj
				})
			}).catch( err => debug( 'Encountered an error: '+err.message ) );
		}
	}

	removeSessionElementFromDatabase( sessionElementID, clbk ) {
		fetch( this.server+'/delete_session_element?' + qs.stringify({
			_id: sessionElementID
		}), {
			headers: {
				'Authorization': 'JWT ' + this.user.token
			}
		})
		.then( () => {
			for ( let i = 0; i < this.socketActions.length; i++ ) {
				if ( this.socketActions[ i ].sessiondataID === sessionElementID ) {
					this.socketActions.splice( i, 1 );
					break;
				}
			}
			this.addNotification({
				title: 'Deleted',
				message: 'You have successfully deleted the action.',
				level: 'success',
				position: 'tl'
			});
			clbk( null );
		})
		.catch( error => {
			this.addNotification({
				title: 'Error encountered',
				message: error.message,
				level: 'error',
				position: 'tl'
			});
			clbk( error );
		});
	}

	/**
	* Logs session action to database and sends it via socket connection to specified group.
	*
	* @param {Object} action - action object
	* @param {string} to - group to send log message to (either `owners` or `members`)
	* @returns {void}
	*/
	log( action, to ) {
		action.absoluteTime = new Date().getTime();
		action.time = action.absoluteTime - this.startTime;
		this.actions.push( action );
		this.logToDatabase( 'action', action );
		this.sendSocketMessage( action, to );

		// Push to respective array of currentUserActions hash table:
		const actions = this.currentUserActions;
		if ( actions ) {
			if ( !actions[ action.id ]) {
				actions[ action.id ] = [ action ];
			} else {
				actions[ action.id ].push( action );
			}
		}

		// If first action, create session on server:
		if ( this.actions.length === 1 ) {
			this.updateDatabase();
		}
	}

	/**
	* Uploads a file.
	*
	* @param {Object} formData - form data object
	* @param {Function} clbk - callback function
	* @returns {void}
	*/
	uploadFile( formData, clbk = () => {} ) {
		if ( this.lessonName ) {
			formData.append( 'lessonName', this.lessonName );
		}
		if ( this.namespaceName ) {
			formData.append( 'namespaceName', this.namespaceName );
		}
		if ( isEmptyObject( this.user ) ) {
			return this.addNotification({
				title: 'File Upload',
				message: 'You have to be signed in in order to upload files.',
				level: 'warning',
				position: 'tl'
			});
		}
		const xhr = new XMLHttpRequest();
		xhr.open( 'POST', this.server+'/upload_file', true );
		xhr.setRequestHeader( 'Authorization', 'JWT ' + this.user.token );
		xhr.onreadystatechange = () => {
			if ( xhr.readyState === XMLHttpRequest.DONE ) {
				let message;
				let level;
				let err;

				err = null;
				if ( xhr.status === 200 ) {
					const body = JSON.parse( xhr.responseText );
					message = body.message;
					level = 'success';
				} else {
					message = xhr.responseText;
					level = 'error';
					err = new Error( xhr.responseText );
				}
				this.addNotification({
					title: 'File Upload',
					message,
					level,
					position: 'tl'
				});
				return clbk( err );
			}
		};
		xhr.send( formData );
	}

	/**
	* Sends an email.
	*
	* @param {Object} mail - email object
	* @param {string} to - email address of receiver
	* @returns {void}
	*/
	sendMail( mail, to ) {
		const mailOptions = copy( mail );
		if ( !hasOwnProp( mailOptions, 'from' ) ) {
			mailOptions.from = this.config.email || 'robinson@isle.cmu.edu';
		}
		if ( !hasOwnProp( mailOptions, 'to' ) ) {
			mailOptions.to = to;
		}
		fetch( this.config.server + '/send_mail', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify( mailOptions )
		})
		.catch( error => debug( 'Encountered an error: '+error.message ) );
	}

	/**
	* Get the OpenCPU server address.
	*
	* @returns {string} OpenCPU address
	*/
	getOpenCPUServer() {
		return this.config.rshell && this.config.rshell.server ?
			this.config.rshell.server :
			OPEN_CPU_DEFAULT_SERVER;
	}

	/**
	* Displays a notification.
	*
	* @param {Object} notification configuration
	* @returns {void}
	*/
	addNotification( config ) {
		if ( global.lesson.notificationSystem ) {
			global.lesson.notificationSystem.addNotification( config );
		}
	}
}


// EXPORTS //

export default Session;
