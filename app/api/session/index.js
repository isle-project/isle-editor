// MODULES //

import request from 'request';
import isString from '@stdlib/assert/is-string';
import inEditor from 'utils/is-electron';


// VARIABLES //

var PATH_REGEXP = /^\/([^\/]*)\/([^\/]*)\//i;


// SESSION //

class Session {

	constructor( config ) {

		this.listeners = [];

		this.userVal = 'ISLE_USER_' + config.server;
		this.user = this.loadUser();
		this.anonymous = this.user ? false : true;
		this.finished = false;
		this.live = false;
		this.actions = [];
		this.vars = {};
		this.startTime = new Date().getTime();
		this.endTime = null;
		this.duration = 0;
		this.lesson = config;
		this.server = config.server;
		this.lessonID = this.lesson.title + '_' + this.lesson.author;

		this.handleLogin = this.handleLogin.bind( this );
		this.login = this.login.bind( this );

		this.pingServer = () => {
			request.get( this.server + '/ping', ( err, res, body ) => {
				if ( !err && body === 'live' && !this.live ) {
					this.live = true;
					this.update();
				}
			});
		};

		const logSession = () => {
			if ( !this.anonymous && this.live ) {
				this.updateDatabase();
			}
		};

		this.pingServer();
		setInterval( this.pingServer, 30000 );
		setInterval( logSession, 5*60000 );

		this.subscribe = ( listener ) => {
			this.listeners.push( listener );
			return () => {
				this.listeners = this.listeners.filter( l => l !== listener );
			};
		};

		let userRights = null;
		this.getUserRights = () => {
			if ( !this.anonymous ) {
				var url = window.location.pathname;
				var namespaceName = null;
				var lessonName = null;		
				if ( isString( url ) ) {
					var matches = url.match( PATH_REGEXP );
					if ( matches && matches.length >= 2 && url.endsWith( '/' ) ) {
						var namespaceName = decodeURIComponent( matches[ 1 ]);
						var lessonName = decodeURIComponent( matches[ 2 ]);
					}
				}
				request.post( this.server+'/get_user_rights', {
					headers: {
						'Authorization': 'JWT ' + this.user.token
					},
					form: {
						namespaceName, 
						lessonName
					}
				}, ( err, res, body ) => {			
					if ( !err ) {
						let obj = JSON.parse( body );
						userRights = obj;
						console.log( userRights )
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
		action.time = new Date().getTime() - this.startTime;
		this.actions.push( action );
		this.logToDatabase( 'action', action );

		// If first action, create session on server:
		if ( this.actions.length === 1 ) {
			this.updateDatabase();
		}
	}

}


// EXPORTS //

export default Session;
