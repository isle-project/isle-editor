// MODULES //

import request from 'request';
import inEditor from 'utils/is-electron';


// SESSION //

class Session {

	constructor( config ) {
		this.userVal = 'ISLE_USER_' + config.server;
		let item = localStorage.getItem( this.userVal );
		this.user = item ? JSON.parse( item ) : null;
		this.anonymous = item ? false : true;
		this.finished = false;
		this.actions = [];
		this.vars = {};
		this.startTime = new Date().getTime();
		this.endTime = null;
		this.duration = 0;
		this.lesson = config;
		this.server = config.server;
		this.lessonID = this.lesson.title + '_' + this.lesson.author;
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
