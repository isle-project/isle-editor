// MODULES //

import request from 'request';
import isString from '@stdlib/assert/is-string';
import inEditor from 'utils/is-electron';
const debug = require( 'debug' )( 'isle-editor' );
const io = require( 'socket.io-client' );


// VARIABLES //

var PATH_REGEXP = /^\/([^\/]*)\/([^\/]*)\//i;
var nSessions = 0;
global.sessions = [];


// SESSION //

class Session {

	constructor( config ) {
		nSessions += 1;
		debug( 'Should create session: ' + nSessions );

		this.listeners = [];

		this.userVal = 'ISLE_USER_' + config.server;
		this.user = this.loadUser();
		this.anonymous = this.user ? false : true;
		this.finished = false;
		this.live = false;
		this.actions = [];
		this.socketActions = [];
		this.userList = [];
		this.vars = {};
		this.state = config.state;
		this.startTime = new Date().getTime();
		this.endTime = null;
		this.duration = 0;
		this.lesson = config;
		this.server = config.server;
		this.lessonID = this.lesson.title + '_' + this.lesson.author;

		this.handleLogin = this.handleLogin.bind( this );
		this.login = this.login.bind( this );

		var url = window.location.pathname;
		this.namespaceName = null;
		this.lessonName = null;		
		if ( isString( url ) ) {
			var matches = url.match( PATH_REGEXP );
			if ( matches && matches.length >= 2 && url.endsWith( '/' ) ) {
				this.namespaceName = decodeURIComponent( matches[ 1 ]);
				this.lessonName = decodeURIComponent( matches[ 2 ]);
			}
		}	

		this.sendSocketMessage = ( data ) => {
			if ( this.socket ) {
				this.socket.emit( 'event', data );
			}
		};

		this.pingServer = () => {
			request.get( this.server + '/ping', ( err, res, body ) => {
				if ( !err && body === 'live' ) {
					this.live = true;
				} else {
					this.live = false;
				}
				this.update();
			});
		};

		this.startPingServer = () => {
			this.pingServer();
			this.pingInterval = setInterval( this.pingServer, 10000 );
		};

		this.stopPingServer = () => {
			debug( 'Should clear the interval pinging the server' );
			clearInterval( this.pingInterval );
		};

		const logSession = () => {
			if ( !this.anonymous && this.live ) {
				this.updateDatabase();
			}
		};

		if ( this.user && this.server ) {
			this.socketConnect();
		}
		this.startPingServer();
		setInterval( logSession, 5*60000 );

		this.subscribe = ( listener ) => {
			this.listeners.push( listener );
			return () => {
				this.listeners = this.listeners.filter( l => l !== listener );
			};
		};

		let userRights = null;
		this.getUserRights = () => {
			if ( !this.anonymous && !this.userRightsQuestionPosed ) {
				this.userRightsQuestionPosed = true;
				request.post( this.server+'/get_user_rights', {
					headers: {
						'Authorization': 'JWT ' + this.user.token
					},
					form: {
						namespaceName: this.namespaceName, 
						lessonName: this.lessonName
					}
				}, ( err, res, body ) => {	
					this.userRightsQuestionPosed = false;		
					if ( !err ) {
						let obj = JSON.parse( body );
						userRights = obj;
						this.update();
					}
				});
			}
		};

		this.removeUserRights = () => {
			userRights = null;
		};

		this.isEnrolled = () => {
			if ( !userRights ) {
				this.getUserRights();
				return false;
			}
			return userRights.enrolled;
		};
		this.isOwner = () => {
			if ( !userRights ) {
				this.getUserRights();
				return false;
			}
			return userRights.owner;
		};

		global.sessions.push( this );
	}

	socketConnect() {
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
		socket.on( 'console', function( msg ) {
			console.log( msg );
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
			this.update();
		});

		socket.on( 'user_leaves', ( data ) => {
			debug( 'A user has disconnected and should be removed: ' + data );
			data = JSON.parse( data );
			this.userList = this.userList.map( user => {
				if ( user.email === data.email ) {
					user.inactive = true;
					user.exitTime = data.exitTime;
				};
				return user;
			});
			this.update();
		});

		socket.on( 'memberAction', this.saveAction.bind( this ) );

		socket.on( 'error', console.error.bind( console ) );

		socket.on( 'disconnect', () => {
			debug( 'I am disconnected from the server...' );
			this.live = false;
			this.startPingServer();
			this.update();
		});

		this.socket = socket;
	}

	getSocketActions(){
		return this.socketActions;
	}

	saveAction( action ) {
		debug( 'Received a member action...' );
		let newArray = this.socketActions;
		newArray.unshift( action );
		this.socketActions = newArray;
		debug( 'Number of actions: ' + this.socketActions.length );
		//global.session.socketActions = this.socketActions;
		this.update();
	}

	update() {
		this.listeners.forEach( listener => listener() );
	}

	registerUser( data, clbk ) {
		request.post( this.server+'/create_user', {
			form: data
		}, ( err, res ) => {
			if ( !err ) {
				global.lesson.addNotification({
					title: 'User created',
					message: 'You have successfully signed up.',
					level: 'success',
					position: 'tl'
				});
				console.log( data );
				console.log( res );
				this.login({ email: data.email, password: data.password }, clbk );
			}
		});
	}

	logout() {
		localStorage.removeItem( this.userVal );
		this.socket.emit( 'leave' );
		this.user = null;
		this.anonymous = true;
		this.removeUserRights();
		global.lesson.addNotification({
			title: 'Logged out',
			message: 'You have successfully logged out.',
			level: 'success',
			position: 'tl'
		});
		this.update();
	}

	login( form, clbk ) {
		request.post( this.server+'/login', {
			form
		}, ( err, res ) => {
			const { token, id, message } = JSON.parse( res.body );
			if ( !err && message === 'ok' ) {
				this.handleLogin({ token, id });
			}
			clbk( err, res );
		});
	}

	forgotPassword( email ) {
		request.get( this.server+'/forgot_password', {
			qs: {
				email
			}
		}, ( error ) => {
			if ( error ) {
				global.lesson.addNotification({
					title: 'New Password',
					message: error.message,
					level: 'error',
					position: 'tl'
				});
			} else {
				global.lesson.addNotification({
					title: 'New Password',
					message: 'Check your email inbox for a link to choose a new password.',
					level: 'success',
					position: 'tl'
				});
			}
		});
	}

	handleLogin( obj ) {
		
		request.post( this.server+'/credentials', {
			headers: {
				'Authorization': 'JWT ' + obj.token
			},
			form: {
				id: obj.id
			}
		}, ( error, response, body ) => {
			if ( error ) {
				return error;
			}
			global.lesson.addNotification({
				title: 'Logged in',
				message: 'You have successfully logged in.',
				level: 'success',
				position: 'tl'
			});
			let user = {
				...obj,
				...JSON.parse( body )
			};
			this.user = user;
			this.anonymous = false;
			this.storeUser( user );
			this.socketConnect();
			this.update();
		});
	}

	storeUser( user ) {
		localStorage.setItem( this.userVal, JSON.stringify( user ) );
	}

	loadUser() {
		const item = localStorage.getItem( this.userVal );
		const user = item ? JSON.parse( item ) : null;
		return user;
	}

	updateUser() {
		let item = localStorage.getItem( this.userVal );
		this.user = item ? JSON.parse( item ) : null;
		this.anonymous = item ? false : true;
	}

	set( name, val ) {
		this.vars[ name ] = val;
		this.logToDatabase( 'vars', this.vars );
	}

	get( name ) {
		return this.vars[ name ];
	}

	finalize() {
		this.updateUser();
		this.endTime = new Date().getTime();
		this.duration = this.endTime - this.startTime;
		this.finished = true;

		if ( this.anonymous === false ) {
			this.updateDatabase();
		}
	}

	updateDatabase() {
		const currentSession = {
			startTime: this.startTime,
			endTime: this.endTime,
			duration: this.duration,
			actions: this.actions,
			finished: this.finished,
			vars: this.vars,
			lessonID: this.lessonID,
			userID: this.user ? this.user._id : null
		};
		if ( !inEditor ) {
			request.post( this.server + '/updateSession', {
				form: {
					stringified: JSON.stringify( currentSession )
				}
			}, ( error, response, body ) => {
				console.log( error );
			});
		}
	}

	logToDatabase( type, data ) {
		const obj = {
			startTime: this.startTime,
			userID: this.user ? this.user._id : null,
			lessonID: this.lessonID,
			type,
			data
		};
		if ( !inEditor ) {
			request.post( this.server + '/store_session_element', {
				form: {
					stringified: JSON.stringify( obj )
				}
			}, ( error, response, body ) => {
				console.log( error );
			});
		}
	}

	log( action ) {
		action.absoluteTime = new Date().getTime();
		action.time = action.absoluteTime - this.startTime;
		this.actions.push( action );
		this.logToDatabase( 'action', action );
		this.sendSocketMessage( action );

		// If first action, create session on server:
		if ( this.actions.length === 1 ) {
			this.updateDatabase();
		}
	}

	uploadFile( formData ) {

		if ( this.lessonName ) {
			formData.append( 'lessonName', this.lessonName );
		}
		if ( this.namespaceName ) {
			formData.append( 'namespaceName', this.namespaceName );
		}

		let xhr = new XMLHttpRequest();
		xhr.open( 'POST', this.server+'/upload_file', true );
		xhr.setRequestHeader( 'Authorization', 'JWT ' + this.user.token );
		xhr.onreadystatechange = function() {	
			if ( xhr.readyState === XMLHttpRequest.DONE ) {
				let message;
				let level;
				if ( xhr.status === 200 ) {
					let body = JSON.parse( xhr.responseText );
					message = body.message;
					level = 'success';
				} else {
					message = xhr.responseText;
					level = 'error';
				}
				
				global.lesson.addNotification({
					title: 'File Upload',
					message,
					level,
					position: 'tl'
				});
			}
		};
		xhr.send( formData );

	}

}


// EXPORTS //

export default Session;
