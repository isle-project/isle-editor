// MODULES //

import qs from 'querystring';
import logger from 'debug';
import localforage from 'localforage';
import contains from '@stdlib/assert/contains';
import isNull from '@stdlib/assert/is-null';
import { isPrimitive as isString } from '@stdlib/assert/is-string';
import isFunction from '@stdlib/assert/is-function';
import isEmptyArray from '@stdlib/assert/is-empty-array';
import isEmptyObject from '@stdlib/assert/is-empty-object';
import hasOwnProp from '@stdlib/assert/has-own-property';
import objectKeys from '@stdlib/utils/keys';
import countBy from '@stdlib/utils/count-by';
import pluck from '@stdlib/utils/pluck';
import identity from '@stdlib/utils/identity-function';
import copy from '@stdlib/utils/copy';
import { OPEN_CPU_DEFAULT_SERVER, OPEN_CPU_IDENTITY } from 'constants/opencpu';
import isElectron from 'utils/is-electron';
import randomstring from 'utils/randomstring/alphanumeric';
import io from 'socket.io-client';
import SpeechInterface from 'speech-interface';


// VARIABLES //

const debug = logger( 'isle:session' );
const PATH_REGEXP = /^\/([^/]*)\/([^/]*)\//i;
const STDOUT_REGEX = /stdout/;
const GRAPHICS_REGEX = /graphics/;
const ERR_REGEX = /\nIn call:[\s\S]*$/gm;
const HELP_PATH_REGEX = /\/(?:site-)?library\/([^/]*)\/help\/([^/"]*)/;
let userRights = null;

let updateTime = new Date().getTime();
let addedScore = 0;

const PRIVATE_VARS = {
	progress: null,
	score: null,
	elapsed: 0,
	feedbacks: 0,
	addedChatMessages: 0,
	addedActionTypes: []
};

// FUNCTIONS //

function titleCompare( a, b ) {
	return ( '' + a.title ).localeCompare( b.title );
}

function arrayBufferToBase64(buffer) {
	let binary = '';
	const bytes = [].slice.call( new Uint8Array( buffer ) );
	bytes.forEach( ( b ) => {
		binary += String.fromCharCode( b );
	});
	return window.btoa( binary );
}


// MAIN //

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

		// Boolean indicating whether user is logged in or not:
		this.anonymous = true;
		this.anonymousIdentifier = 'anonymous_'+randomstring( 8 );

		// User object container:
		this.user = {};

		// If user token is available in local storage, login to server:
		let item = localStorage.getItem( this.userVal );
		if ( item ) {
			item = JSON.parse( item );
			this.handleLogin( item, true );
		}

		// Boolean whether lesson is finished:
		this.finished = false;

		// Boolean indicating whether the server is responding:
		this.live = false;

		// Actions for the current user:
		this.actions = [];
		this.currentUserActions = null;

		// Cohort of logged-in user:
		this.cohort = null;

		// Array of available cohorts (only filled for owners):
		this.cohorts = null;

		// Actions received from other users via socket communication:
		this.socketActions = [];

		// Registered response visualizers:
		this.responseVisualizers = {};

		// Presentation mode for the owners (hiding owner elements)
		this.presentationMode = false;

		// List of currently logged-in users:
		this.userList = [];
		this.userFocuses = {};

		// Keep track of whether an owner is present in the session:
		this.hasOwner = false;

		// Array of open chats:
		this.chats = [];

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

		if ( !this._offline ) {
			// Ping server to check status:
			this.startPingServer();
		}

		if ( !this.lessonID && !this.namespaceID && !this._offline ) {
			debug( '[1] Retrieve lesson information:' );
			this.getLessonInfo();
		}

		if ( !isElectron ) {
			document.addEventListener( 'focusin', this.focusInListener );
			document.addEventListener( 'focusout', this.focusOutListener );
			document.addEventListener( 'beforeunload', this.beforeUnloadListener );
			document.addEventListener( 'visibilitychange', this.visibilityChangeListener );

			// Log session data to database in regular interval:
			setInterval( this.logSession, 5*60000 );
		}
	}

	beforeUnloadListener = () => {
		this.logSession();
	}

	visibilityChangeListener = () => {
		if ( document.hidden ) {
			this.stopPingServer();
		} else {
			this.startPingServer();
		}
		this.logSession();
	}

	focusInListener = ( event ) => {
		let activeElement = document.activeElement;
		let id;
		if ( activeElement ) {
			id = activeElement.id;
			while ( !id && activeElement ) {
				activeElement = activeElement.parentElement;
				if ( activeElement ) {
					id = activeElement.id;
				}
			}
		}
		debug( `Focused element with id ${id}` );
		this.log({
			type: 'FOCUS_ELEMENT',
			value: this.user.email,
			id: id,
			noSave: true
		}, 'owners' );
	}

	focusOutListener = ( event ) => {
		debug( `Users ${this.user.email} lost focus...` );
		this.log({
			type: 'LOSE_FOCUS_ELEMENT',
			id: this.userFocuses[ this.user.email ],
			value: this.user.email,
			noSave: true
		}, 'owners' );
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
		this.pingInterval = setInterval( this.pingServer, 10000 );
	}

	/**
	* Stops pinging the server once socket connection is established.
	*
	* @returns {void}
	*/
	stopPingServer = () => {
		debug( 'Should clear the interval pinging the server' );
		clearInterval( this.pingInterval );
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
			fetch( imgURL )
				.then( res => {
					if ( filetype === 'png' ) {
						res.arrayBuffer().then( buffer => {
							const mimeType = res.headers.get( 'Content-Type' );
							const base64String = `data:${mimeType};base64,${arrayBufferToBase64( buffer )}`;
							clbk( null, imgURL, base64String );
						});
					} else {
						res.text().then( body => {
							clbk( null, imgURL, body );
						});
					}
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
	* Send data packet to specified group of users or a single user.
	*
	* @param {Object} data - message data
	* @param {string} [to='owners] - group of people to send message to. Can be either of `owners`, `members`, or an email address of a single user
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
			debug( 'Retrieve user rights...' );
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
				this.cohort = userRights.cohort;
				if ( userRights.owner && isEmptyArray( this.socketActions ) ) {
					debug( '[3a] Retrieve all user actions for owners:' );
					this.getUserActions();
				} else if ( !this.currentUserActions ) {
					debug( '[3b] Retrieve only own actions otherwise:' );
					this.getCurrentUserActions();
				}
				// Send message to subscribed components:
				this.update( 'RECEIVED_USER_RIGHTS', userRights );
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
		debug( 'Check whether user is enrolled...' );
		if ( !userRights ) {
			debug( 'Need to retrieve user rights from server' );
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
		debug( 'Check whether user is an owner...' );
		if ( !userRights ) {
			debug( 'Need to retrieve user rights from server...' );
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
			let found = false;
			for ( let i = 0; i < this.chats.length; i++ ) {
				if ( this.chats[ i ].name === name ) {
					found = true;
				}
			}
			if ( !found ) {
				this.chats.push({ name: name, messages: [], members: []});
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
		PRIVATE_VARS['addedChatMessages'] += 1;
		if ( this.socket ) {
			const msgObj = {
				time: new Date().getTime(),
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
		name = this.stripChatName( name );
		for ( let i = 0; i < this.chats.length; i++ ) {
			let chat = this.chats[ i ];
			if ( chat.name === name ) {
				return chat;
			}
		}
		return null;
	}

	stripChatName( name ) {
		let idx = name.indexOf( ':' );
		if ( idx !== -1 ) {
			name = name.substr( idx+1 );
		}
		return name;
	}

	removeChat = ( name ) => {
		name = this.stripChatName( name );
		debug( `Remove the "${name}" chat from the list of chats` );
		for ( let i = this.chats.length - 1; i >= 0; i-- ) {
			if ( this.chats[ i ].name === name ) {
				this.chats.splice( i, 1 );
			}
		}
		this.update( 'removed_chat', name );
	}

	/**
	* Leaves chat with the given name and removes it from the current list of chats.
	*
	* @param {string} name - chat room name
	* @returns {void}
	*/
	leaveChat( name ) {
		this.removeChat( name );
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
		const socket = io.connect( this.server, {
			transports: [ 'websocket' ]
		});

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
			for ( let i = 0; i < this.userList.length; i++ ) {
				const user = this.userList[ i ];
				if ( user.owner ) {
					this.hasOwner = true;
					break;
				}
			}
			this.update( 'received_users' );
		});

		socket.on( 'user_joins', ( data ) => {
			debug( 'A user has joined and should be added to the user list: ' + data );
			data = JSON.parse( data );
			if ( data.owner ) {
				this.hasOwner = true;
			}
			this.userList = this.userList.filter( user => user.email !== data.email );
			this.userList.push( data );
			const isUser = data.email === this.user.email;
			if ( this.config.joinNotifications && !isUser ) {
				this.addNotification({
					title: 'User has joined',
					message: `User ${data.name} (${data.email}) has joined us.`,
					level: 'success',
					position: 'tl'
				});
			}
			this.update( 'user_joined', data );
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
				this.update( 'user_left' );
				if ( this.config.joinNotifications && !isUser ) {
					this.addNotification({
						title: 'User has left',
						message: `User ${data.name} (${data.email}) has left us.`,
						level: 'success',
						position: 'tl'
					});
				} else if ( isUser ) {
					// Case: Oneself has logged off on another browser tab
					this.forcedLogout();
				}
			}
		});

		socket.on( 'chat_history', ({ name, messages, members }) => {
			debug( 'Received chat history: ' + JSON.stringify( messages ) );
			let chat = this.getChat( name );
			if ( !chat ) {
				name = this.stripChatName( name );
				chat = { name, messages, members };
				this.chats.push( chat );
			} else {
				chat.messages = messages;
				chat.members = members;
			}
			this.update();
		});

		socket.on( 'member_has_joined_chat', ({ name, member }) => {
			debug( `Member ${member.name} has joined chat ${name}` );
			const chat = this.getChat( name );
			name = this.stripChatName( name );
			if ( chat ) {
				chat.members.push( member );
				this.update( 'member_has_joined_chat', name );
			} else if ( member.email === this.user.email ) {
				this.chats.push({ name: name, messages: [], members: []});
				this.socket.emit( 'join_chat', name );
				this.update( 'self_has_joined_chat', name );
			}
		});

		socket.on( 'member_has_left_chat', ({ name, member }) => {
			const chat = this.getChat( name );
			name = this.stripChatName( name );
			chat.members = chat.members.filter( m => m.email !== member.email );
			if ( this.user.email === member.email ) {
				debug( 'I have left the chat...' );
				this.removeChat( name );
				this.update( 'self_has_left_chat', name );
			} else {
				debug( 'Somebody else has left the chat' );
				this.update( 'member_has_left_chat', name );
			}
		});

		socket.on( 'chat_message', ( data ) => {
			const chat = this.getChat( data.chatroom );
			if ( chat ) {
				data.msg.unread = true;
				chat.messages.push( data.msg );
			}
			this.update( 'chat_message' );
		});

		socket.on( 'memberAction', this.saveAction );

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
					debug( `Received ${json.actions.length} actions for lesson ${this.lessonName} (id: ${this.lessonID})...` );
					this.socketActions = json.actions;
					this.update( 'retrieved_user_actions', json.actions );
					debug( '[4] Retrieve cohort information...' );
					this.getCohorts();
				});
			}
		})
		.catch( error => debug( 'Encountered an error: '+error.message ) );
	}

	/**
	* Retrieves cohort information for course owners.
	*/
	getCohorts = () => {
		fetch( this.server+'/get_cohorts?'+qs.stringify({ namespaceID: this.namespaceID, memberFields: 'email' }), {
			headers: {
				'Authorization': 'JWT ' + this.user.token
			}
		})
		.then( response => {
			if ( response.status === 200 ) {
				response.json().then( body => {
					const cohorts = body.cohorts;
					cohorts.forEach( cohort => {
						cohort.members = pluck( cohort.members, 'email' );
					});
					this.cohorts = cohorts.sort( titleCompare );
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
					this.setProgress();
					this.update( 'retrieved_current_user_actions', this.currentUserActions );
				});
			}
		})
		.catch( error => debug( 'Encountered an error: '+error.message ) );
	}

	/**
	* Sends action to listening components and saves it to array of socket actions, if not silenced.
	*
	* @param {Object} action - user action object
	* @returns {void}
	*/
	saveAction = ( action ) => {
		debug( 'Received a member action...' );
		if ( !action.noSave ) {
			let newArray = this.socketActions;
			newArray.unshift( action );
			this.socketActions = newArray;
			debug( 'Number of actions: ' + this.socketActions.length );
		}
		if ( action.type === 'FOCUS_ELEMENT' ) {
			debug( `Received focus for element with ID ${action.id} by ${action.email}` );
			this.userFocuses[ action.email ] = action.id;
		}
		else if ( action.type === 'LOSE_FOCUS_ELEMENT' ) {
			debug( `Remove focus for user ${action.email}` );
			delete this.userFocuses[ action.email ];
		}
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
		this.user = {};
		this.anonymous = true;
		this.userRightsQuestionPosed = false;
		this.reset();
		this.addNotification({
			title: 'Logged out',
			message: 'You have successfully logged out.',
			level: 'success',
			position: 'tl'
		});
		this.update( 'LOGGED_OUT' );
	}

	/**
	* Re-establish connection if user has logged out in another tab.
	*
	* @returns {void}
	*/
	forcedLogout() {
		debug( `Forced logout of user ${this.user.name} by server, connect again` );
		let item = localStorage.getItem( this.userVal );
		this.reset();
		if ( item ) {
			item = JSON.parse( item );
			this.handleLogin( item, true );
		}
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
			if ( response.status === 404 ) {
				return this.addNotification({
					title: response.statusText,
					message: 'A user with the supplied email address does not exist',
					level: 'error',
					position: 'tl'
				});
			}
			if ( response.status === 401 ) {
				return this.addNotification({
					title: response.statusText,
					message: 'Please make sure that you enter the correct password. You can set a new password by clicking on the "Forgot password?" link',
					level: 'error',
					position: 'tl'
				});
			}
			response.json().then( body => {
				const { token, id, message } = body;

				// Save user token to local storage:
				localStorage.setItem( this.userVal, JSON.stringify({
					token,
					id
				}) );
				if ( message === 'ok' ) {
					this.update( 'LOGGED_IN' );
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
	* @param silent - controls whether to display notification or not
	* @returns {void}
	*/
	handleLogin = ( obj, silent = false ) => {
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
			if ( !silent ) {
				this.addNotification({
					title: 'Logged in',
					message: 'You have successfully logged in.',
					level: 'success',
					position: 'tl'
				});
			}
			const user = {
				...obj,
				...json
			};
			this.user = user;
			if ( this.user && this.user.picture ) {
				this.user.picture = this.server + '/avatar/' + this.user.picture;
			}
			PRIVATE_VARS['score'] = user.score;
			this.anonymous = false;
			this.socketConnect();
			if ( !userRights ) {
				this.getUserRights();
			}
			this.update();
		})
		.catch( ( err ) => {
			debug( 'Encountered an error: '+err.message );
		});
	}

	/**
	* Retrieves the value of a session variable.
	*
	* @param {string} name - variable name
	* @returns {*} variable value
	*/
	get( name ) {
		return PRIVATE_VARS[ name ];
	}

	/**
	* Finalizes session once user clicks on "Submit Lesson" button.
	*
	* @returns {void}
	*/
	finalize() {
		this.endTime = new Date().getTime();
		this.duration = this.endTime - this.startTime;
		this.finished = true;
		if ( this.anonymous === false ) {
			this.updateDatabase();
		}
	}

	/**
	* Sets the user's progress for the lesson.
	*
	* @param {string} id - action id
	*/
	setProgress( id ) {
		if ( this.anonymous || isNull( this.currentUserActions ) ) {
			return;
		}
		const ids = objectKeys( this.responseVisualizers );
		if ( !id ) {
			let progress = 0;
			for ( let i = 0; i < ids.length; i++ ) {
				const key = ids[ i ];
				const actions = this.currentUserActions[ key ];
				const ref = this.responseVisualizers[ key ];
				if ( !ref ) {
					continue;
				}
				const type = ref.type;
				if ( actions ) {
					for ( let j = 0; j < actions.length; j++ ) {
						if ( actions[ j ].type === type ) {
							progress += 1.0 / ids.length;
							break;
						}
					}
				}
			}
			PRIVATE_VARS['progress'] = progress;
			this.update( 'self_initial_progress', progress );
		}
		else {
			const actions = this.currentUserActions[ id ];
			const ref = this.responseVisualizers[ id ];
			if ( ref ) {
				const type = ref.type;
				for ( let j = 0; j < actions.length; j++ ) {
					if ( actions[ j ].type === type ) {
						if ( j < actions.length - 1 ) {
							break;
						}
						else if ( j === actions.length - 1 ) {
							PRIVATE_VARS['progress'] = this.get( 'progress' ) + 1.0 / ids.length;
							this.update( 'self_updated_progress', this.get( 'progress' ) );
						}
					}
				}
			}
		}
	}

	setScore( action ) {
		if ( this.anonymous || isNull( this.currentUserActions ) ) {
			return;
		}
		const actions = this.currentUserActions;
		if ( actions ) {
			const arr = actions[ action.id ];
			if ( !arr ) {
				addedScore += 4;
				PRIVATE_VARS['score'] = this.get( 'score' ) + 4;
				this.update( 'self_updated_score', 4 );
			}
			else {
				const types = arr.map( x => x.type );
				if ( !contains( types, action.type ) ) {
					addedScore += 4;
					PRIVATE_VARS['score'] = this.get( 'score' ) + 4;
					this.update( 'self_updated_score', 4 );
				}
			}
		}
	}

	togglePresentationView() {
		this.presentationMode = !this.presentationMode;
		this.update( 'TOGGLE_PRESENTATION_MODE' );

		let msg = 'You have started the presentation mode which hides the status bar, the instructorView and all owner elements.';
		let title = 'Started presentation mode';

		if ( this.presentationMode === false) {
			msg = 'You have finished the presentation mode. Type F7 to start it again.';
			title = 'Finished presentation mode';
		}

		this.addNotification({
			title: title,
			message: msg,
			level: 'success',
			position: 'tl'
		});
	}

	/**
	* Updates session instance in the remote database.
	*
	* @returns {void}
	*/
	updateDatabase() {
		let now = new Date().getTime();
		let timeDiff = now - updateTime;
		updateTime = now;

		const currentSession = {
			elapsed: timeDiff,
			addedScore: addedScore,
			addedChatMessages: this.get('addedChatMessages'),
			vars: this.vars,
			lessonID: this.lessonID,
			progress: this.get('progress'),
			addedActionTypes: countBy( this.get('addedActionTypes'), identity)
		};
		addedScore = 0;
		PRIVATE_VARS['addedChatMessages'] = 0;
		PRIVATE_VARS['addedActionTypes'] = [];

		if ( !this._offline ) {
			fetch( this.server+'/update_user_session', {
				method: 'POST',
				body: JSON.stringify(currentSession),
				headers: {
					'Authorization': 'JWT ' + this.user.token,
					'Content-Type': 'application/json'
				}
			})
			.catch( err => debug( 'Encountered an error: '+err.message ) )
			.then( ( res ) => {
				debug( '/update_user_session returns: '+res.status );
			});
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
		debug( `Logging ${type} to database...` );
		if ( this.anonymous ) {
			data.email = this.anonymousIdentifier;
			data.name = this.anonymousIdentifier;
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
			PRIVATE_VARS['addedActionTypes'].push( data.type );
			const body = JSON.stringify( obj );
			debug( 'Storing session element: '+body );
			fetch( this.server+'/store_session_element', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: body
			})
				.then( ( res ) => {
					debug( '/store_session_element status code: '+res.status );
				})
				.catch( err => debug( 'Encountered an error: '+err.message ) );
		}
	}

	removeSessionElementFromDB( sessionElementID, clbk ) {
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
	* Logs session action to database and sends it via socket connection to specified user(s).
	*
	* @param {Object} action - action object
	* @param {string} to - group to send log message to (either `owners`, `members`, or email address of an individual user)
	* @returns {void}
	*/
	log( action, to ) {
		if ( action && action.id ) {
			action.absoluteTime = new Date().getTime();
			action.time = action.absoluteTime - this.startTime;
			action.owner = this.isOwner();
			this.sendSocketMessage( action, to );
			if ( !action.noSave ) {
				debug( 'Save action...' );
				this.actions.push( action );
				this.logToDatabase( 'action', action );

				// Push to respective array of currentUserActions hash table:
				const actions = this.currentUserActions;
				this.setScore( action );
				if ( actions ) {
					if ( !actions[ action.id ]) {
						actions[ action.id ] = [ action ];
					} else {
						actions[ action.id ].push( action );
					}
				}
				this.setProgress( action.id );

				// If first action, create session on server:
				if ( this.actions.length === 1 ) {
					this.updateDatabase();
				}
			}
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
				let body;
				let err;

				err = null;
				if ( xhr.status === 200 ) {
					body = JSON.parse( xhr.responseText );
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
				return clbk( err, body );
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
	* @returns {(null|Notification)}
	*/
	addNotification( config ) {
		if ( global.lesson.notificationSystem ) {
			return global.lesson.notificationSystem.addNotification( config );
		}
		return null;
	}

	/**
	* Removes a notification.
	*
	* @param {(Object|string)} notification - notification or `uid`
	* @returns {void}
	*/
	removeNotification( notification ) {
		if ( global.lesson.notificationSystem ) {
			global.lesson.notificationSystem.removeNotification( notification );
		}
	}
}


// EXPORTS //

export default Session;
