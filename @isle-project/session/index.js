/**
* Copyright (C) 2016-present The ISLE Authors
*
* The isle-session program is free software: you can redistribute it and/or modify
* it under the terms of the GNU Affero General Public License as
* published by the Free Software Foundation, either version 3 of the
* License, or (at your option) any later version.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU Affero General Public License for more details.
*
* You should have received a copy of the GNU Affero General Public License
* along with this program. If not, see <https://www.gnu.org/licenses/>.
*/

/* eslint-disable class-methods-use-this, max-lines */

// MODULES //

import qs from 'querystring';
import logger from 'debug';
import axios from 'axios';
import localforage from 'localforage';
import { basename } from 'path';
import io from 'socket.io-client';
import debounce from 'lodash.debounce';
import contains from '@stdlib/assert/contains';
import { isPrimitive as isString } from '@stdlib/assert/is-string';
import startsWith from '@stdlib/string/starts-with';
import isFunction from '@stdlib/assert/is-function';
import isEmptyArray from '@stdlib/assert/is-empty-array';
import isArray from '@stdlib/assert/is-array';
import isEmptyObject from '@stdlib/assert/is-empty-object';
import isNull from '@stdlib/assert/is-null';
import hasOwnProp from '@stdlib/assert/has-own-property';
import countBy from '@stdlib/utils/count-by';
import identity from '@stdlib/utils/identity-function';
import clamp from '@stdlib/math/base/special/clamp';
import sample from '@stdlib/random/sample';
import isElectron from '@isle-project/utils/is-electron';
import randomstring from '@isle-project/utils/randomstring/alphanumeric';
import retrieveUserGroup from '@isle-project/utils/retrieve-user-group';
import beforeUnload from '@isle-project/utils/before-unload';
import SpeechInterface from './speech_interface.js';
import { OPEN_CPU_DEFAULT_SERVER, OPEN_CPU_IDENTITY } from '@isle-project/constants/opencpu';
import { LESSON_CONNECTED, TOGGLE_PRESENTATION_MODE } from '@isle-project/constants/actions.js';
import { CHAT_MESSAGE, CHAT_STATISTICS, COLLABORATIVE_EDITING_EVENTS, CONNECTED_TO_SERVER,
	CREATED_GROUPS, DELETED_GROUPS, DISCONNECTED_FROM_SERVER, FOCUS_ELEMENT, LOSE_FOCUS_ELEMENT, JOINED_COLLABORATIVE_EDITING,
	LOGGED_IN, LOGGED_OUT, MARK_MESSAGES, MEMBER_ACTION, MEMBER_HAS_JOINED_CHAT, MEMBER_HAS_LEFT_CHAT,
	OWN_CHAT_MESSAGE, POLLED_COLLABORATIVE_EDITING_EVENTS, RECEIVED_CHAT_HISTORY,
	RECEIVED_JITSI_TOKEN, RECEIVED_LESSON_INFO, RECEIVED_QUEUE_QUESTIONS, RECEIVED_USERS, RETRIEVED_CURRENT_USER_ACTIONS,
	RETRIEVED_USER_ACTIONS, RECEIVED_USER_RIGHTS, REMOVED_CHAT, RETRIEVED_COHORTS, SELF_HAS_JOINED_CHAT,
	SELF_HAS_LEFT_CHAT, SELECTED_COHORT, SELF_INITIAL_PROGRESS, SELF_UPDATED_PROGRESS, SELF_UPDATED_SCORE,
	SENT_COLLABORATIVE_EDITING_EVENTS, SERVER_IS_LIVE, STICKY_NOTES_UPDATED, TEXT_EDITOR_DOCUMENTS_UPDATED, USER_FINALLY_REMOVED, USER_JOINED, USER_LEFT, USER_PROGRESS,
	VIDEO_CHAT_STARTED, VIDEO_CHAT_ENDED, VOICE_RECORDING_STATUS } from '@isle-project/constants/events.js';
import POINTS from '@isle-project/constants/points.js';
import ANIMALS from '@isle-project/constants/animals.js';
import { i18n } from '@isle-project/locales';


// VARIABLES //

const debug = logger( 'isle:session' );
const PATH_REGEXP = /^\/([^/]*)\/([^/]*)\//i;
const STDOUT_REGEX = /\/ocpu\/tmp\/[^/]+\/stdout/;
const GRAPHICS_REGEX = /\/ocpu\/tmp\/[^/]+\/graphics\/[^\n]*/g;
const ERR_REGEX = /\nIn call:[\s\S]*$/gm;
const HELP_PATH_REGEX = /\/(?:site-)?library\/([^/]*)\/help\/([^/"]*)/;
const LOG_SESSION_INTERVAL = 5 * 60000; // every five minutes
let userRights = null;
const currentTime = new Date().getTime();
let updateTime = currentTime;
let addedScore = 0;

const PRIVATE_VARS = {
	progress: null,
	score: null,
	elapsed: 0,
	feedbacks: 0,
	addedChatMessages: 0,
	addedActionTypes: [],
	active: true,
	startTime: currentTime,
	endTime: null,
	duration: null
};
let LISTENERS = null;
let VIDEO_CHATS = null;
let TEXT_CHATS = null;
let ALL_GROUPS = null;
let ASSIGNED_GROUP = null;
let QUESTIONS = null;


// JSON Web Token for user authentication:
let JWT = null;

// Jitsi web token + server address:
let JITSI = null;


// FUNCTIONS //

function titleCompare( a, b ) {
	return ( '' + a.title ).localeCompare( b.title );
}


// MAIN //

class Session {
	constructor( config = {}, offline ) {
		debug( 'Should create session...' );

		// Address where ISLE server is running:
		this.server = offline ? null : ( isElectron ? config.server : window.location.origin );

		// Set whether the session tries to communicate with the server
		this._offline = offline || false;

		// Array of subscribed components listening for session updates:
		LISTENERS = [];

		// Address in local storage for user information:
		this.userVal = 'ISLE_USER_' + this.server;

		// Boolean indicating whether user is logged in or not:
		this.anonymous = true;

		// Assign unique ID to anonymous user:
		const anonStorageID = 'ISLE_ANONYMOUS_' + this.server;
		let item;
		if ( localStorage ) {
			item = localStorage.getItem( anonStorageID );
			if ( item ) {
				this.anonymousIdentifier = item;
			} else {
				this.anonymousIdentifier = sample( ANIMALS, { size: 1 }) + ' ' + randomstring( 4 );
				localStorage.setItem( anonStorageID, this.anonymousIdentifier );
			}
		}

		// String for distinguishing multiple browser windows from each other:
		this.sessionID = randomstring( 3 );

		// User object:
		this.user = {};

		// Authenticate requests:
		axios.interceptors.request.use( ( config ) => {
			config.headers[ 'Accept-Language' ] = i18n.language;
			const token = JWT.token;
			if ( token && startsWith( config.url, this.server ) ) {
				config.headers.Authorization = `JWT ${token}`; // eslint-disable-line i18next/no-literal-string
			}
			return config;
		});

		if ( localStorage ) {
			// If user object is available in local storage, login to server:
			item = localStorage.getItem( this.userVal );
			if ( item ) {
				JWT = JSON.parse( item );
				this.handleLogin( JWT, true );
			} else {
				JWT = {};
				axios.get( this.server+'/saml-xmw/session' )
					.then( ( response ) => {
						JWT = response.data || {};
						this.handleLogin( JWT, true );
					})
					.catch( ( error ) => {
						debug( 'Could not get SAML token: %o', error );
					});
				// Connect via WebSockets to other users as an anonymous user...
				if ( this.server && !this._offline && !this.socket ) {
					this.socketConnect();
				}
			}
		}

		// Boolean whether lesson is finished:
		this.finished = false;

		// Boolean indicating whether the server is responding:
		this.live = false;

		// Actions for the current user:
		this.actions = [];
		this.currentUserActions = {};

		// Cohort of logged-in user:
		this.cohort = null;

		// Array of available cohorts (only filled for owners):
		this.cohorts = null;

		// Actions received from other users via socket communication:
		this.socketActions = [];

		// Registered response visualizers:
		this.responseVisualizers = {};
		this.responseVisualizerIds = [];

		// Presentation mode for the owners (hiding owner elements)
		this.presentationMode = false;

		// List of currently logged-in users:
		this.userList = [];
		this.userFocuses = {};
		this.userProgress = {};

		// Assigned user group:
		ASSIGNED_GROUP = null;

		// Available user groups:
		ALL_GROUPS = [];

		// Queue questions:
		QUESTIONS = [];

		this.selectedCohort = null;
		this.activeCohortMembers = null;

		// Keep track of whether an owner is present in the session:
		this.hasOwner = false;

		// Arrays of open text and video chats:
		TEXT_CHATS = [];
		VIDEO_CHATS = [];

		// State variables of the given lesson:
		this.state = config.state;

		// Register speech interface:
		this.speechInterface = new SpeechInterface();

		// YAML configuration object:
		this.config = config;

		// Whether voice control is active or not:
		this.VoiceRecordingStatus = false;

		// IDs in the database:
		this.lessonID = null;
		this.namespaceID = null;
		this.enableTicketing = false;

		// Lesson metadata:
		this.metadata = {
			revealer: {},
			grades: {},
			store: {}
		};

		// Lesson grades for students:
		this.lessonGrades = {};

		// Instructor-student communication regarding grades:
		this.lessonGradeMessages = {};

		// Instructor, student, and public sticky notes for the lesson:
		this.stickyNotes = [];

		// List of text editor document identifiers:
		this.textEditorDocuments = [];

		// Extract namespace and lesson name from URL:
		this.namespaceName = null;
		this.lessonName = null;
		if ( !isElectron && !offline ) {
			const url = window.location.pathname;
			if ( isString( url ) ) {
				const matches = url.match( PATH_REGEXP );
				if ( matches && matches.length >= 2 && url.endsWith( '/' ) ) {
					this.namespaceName = decodeURIComponent( matches[ 1 ]);
					this.lessonName = decodeURIComponent( matches[ 2 ]);
				}
			}
		} else {
			this.lessonName = config.lesson;
			this.namespaceName = config.namespace;
		}

		// Create instance of indexedDB database:
		this.store = localforage.createInstance({
			driver: localforage.INDEXEDDB,
			name: `ISLE_${this.namespaceName}_${this.lessonName}`,
			description: 'Persistent data storage for ISLE lesson'
		});

		if ( !this._offline ) {
			// Ping server to check status:
			this.startPingServer();
		}

		if ( !this.lessonID && !this.namespaceID && !this._offline ) {
			debug( '[1] Retrieve lesson information:' );
			this.getLessonInfo();
		}

		// Initialize progress after a response visualizer hasn't registered for at least three seconds:
		this.debouncedInitializeProgress = debounce( this.initializeProgress, 3000 );

		if ( !isElectron && !offline ) {
			document.addEventListener( 'focusin', this.focusInListener );
			document.addEventListener( 'focusout', this.focusOutListener );
			document.addEventListener( 'visibilitychange', this.visibilityChangeListener );
			window.addEventListener( 'online', this.onlineListener );
			window.addEventListener( 'offline', this.offlineListener );
		}

		if ( this.server ) {
			axios.get( this.server+'/get_lesson_settings' )
				.then( result => {
					PRIVATE_VARS[ 'settings' ] = result.data;
				})
				.catch( err => {
					debug( 'Encountered an error: '+err.message );
				});
			axios.get( this.server+'/get_translations' )
				.then( ( result ) => {
					const translations = result.data || {};
					i18n.store.on( 'added', function onLoaded( lng, ns ) {
						if ( translations[ lng ] && translations[ lng ][ ns ] ) {
							const custom = translations[ lng ][ ns ];
							const keys = Object.keys( custom );
							for ( let i = 0; i < keys.length; i++ ) {
								i18n.store.data[ lng ][ ns ][ keys[ i ] ] = custom[ keys[ i ] ];
							}
						}
					});
				})
				.catch( err => {
					debug( 'Encountered an error: '+err.message );
				});
		}
	}

	get startTime() {
		return PRIVATE_VARS[ 'startTime' ];
	}

	get endTime() {
		return PRIVATE_VARS[ 'endTime' ];
	}

	get duration() {
		return PRIVATE_VARS[ 'duration' ];
	}

	get videoChats() {
		return VIDEO_CHATS;
	}

	get chats() {
		return TEXT_CHATS;
	}

	get group() {
		return ASSIGNED_GROUP;
	}

	get allGroups() {
		return ALL_GROUPS;
	}

	get questions() {
		return QUESTIONS;
	}

	get settings() {
		return PRIVATE_VARS[ 'settings' ] || {};
	}

	get jitsi() {
		return {
			...JITSI
		};
	}

	/**
	* Invoked when the main lesson component has mounted.
	*/
	onLessonMount = () => {
		debug( 'Lesson has mounted...' );
		if ( !this.anonymous && !isEmptyObject( this.currentUserActions ) ) {
			// Log session data to database in regular interval:
			this.logSessionInterval = setInterval( this.interval, LOG_SESSION_INTERVAL );
		}
	};

	/**
	* Invoked when the browser fires `online` event.
	*/
	onlineListener = () => {
		debug( 'Browser switched to being online...' );
		this.startPingServer();
	};

	/**
	* Invoked when the browser fires `offline` event.
	*/
	offlineListener = () => {
		debug( 'Browser switched to being offline...' );
		this.live = false;
		if ( this.socket ) {
			this.socket.close();
			this.socket = null;
		}
		this.update( DISCONNECTED_FROM_SERVER );
	};

	/**
	* Invoked when the content of the document tab becomes visible or has been hidden.
	*/
	visibilityChangeListener = () => {
		if ( document.hidden ) {
			this.logSession();
			this.stopPingServer();
			clearInterval( this.logSessionInterval );
		} else {
			this.startPingServer();
			updateTime = new Date().getTime();
			this.logSessionInterval = setInterval( this.logSession, LOG_SESSION_INTERVAL );
		}
	};

	/**
	* Invoked when a user has focused on a new element.
	*/
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
			type: FOCUS_ELEMENT,
			value: this.user.email,
			id: id,
			noSave: true
		}, 'owners' );
	};

	/**
	* Invoked when a user ceased to focus on an element.
	*/
	focusOutListener = ( event ) => {
		debug( `Users ${this.user.email} lost focus...` );
		this.log({
			type: LOSE_FOCUS_ELEMENT,
			id: this.userFocuses[ this.user.email ],
			value: this.user.email,
			noSave: true
		}, 'owners' );
	};

	/**
	* Logs session object to database if logged-in.
	*
	* @returns {void}
	*/
	logSession = () => {
		debug( 'Logging current session object to database...' );
		if ( !this.anonymous && this.live ) {
			this.updateDatabase();
		}
	};

	/**
	* Registers a listener by pushing it to the array of listeners and returns a function to unsubscribe the listener.
	*
	* @param {Function} listener - function invoked with session updates
	* @returns {Function} unsubscribe function to remove the `listener`
	*/
	subscribe = ( listener ) => {
		LISTENERS.push( listener );
		return () => {
			LISTENERS = LISTENERS.filter( l => l !== listener );
		};
	};

	/**
	* Pings the server and starts retrieving lesson info if server is live.
	*
	* @returns {void}
	*/
	pingServer = () => {
		debug( `Should ping the server at ${this.server}...` );
		axios.get( this.server + '/ping' ).then( ( res ) => {
			if ( res.data === 'live' ) {
				this.live = true;

				// Connect via WebSockets to other users...
				if ( !this.socket || this.socket.disconnected ) {
					this.socketConnect();
				}

				this.update( CONNECTED_TO_SERVER );
				if ( !this.lessonID && !this.namespaceID ) {
					// [1] Retrieve lesson information:
					this.getLessonInfo();
				}
			} else {
				this.live = false;

				// Override server property with value from preamble:
				if ( this.config.server ) {
					this.server = this.config.server;
				}
			}
			this.update( SERVER_IS_LIVE );
		})
		.catch( err => {
			debug( 'Encountered an error: '+err.message );

			// Override server property with value from preamble:
			if ( this.config.server ) {
				this.server = this.config.server;
			}
		});
	};

	/**
	* Pings the server in a regular interval when lesson is deployed.
	*
	* @returns {void}
	*/
	startPingServer = () => {
		this.pingServer();
		this.pingInterval = setInterval( this.pingServer, 10000 );
	};

	/**
	* Stops pinging the server once socket connection is established.
	*
	* @returns {void}
	*/
	stopPingServer = () => {
		debug( 'Should clear the interval pinging the server' );
		clearInterval( this.pingInterval );
	};

	/**
	* Executes R code via OpenCPU.
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
			axios.get( OPEN_CPU + elem )
				.then( res => {
					onResult( null, res, res.data );
				})
				.catch( err => onResult( err ) );
		};
		const formData = new FormData();
		formData.append( 'x', code );
		axios.post( OPEN_CPU + OPEN_CPU_IDENTITY, formData )
		.then( response => {
			const body = response.data;
			debug( 'Received body:\n '+body );
			debug( 'Response status: '+response.status );
			const plots = [];
			const stdout = body.match( STDOUT_REGEX );
			if ( stdout && stdout[ 0 ] ) {
				getElem( stdout[ 0 ] );
			}
			const matches = body.matchAll( GRAPHICS_REGEX );
			for ( const match of matches ) {
				const imgURL = OPEN_CPU + match[ 0 ] + '/svg';
				plots.push( imgURL );
			}
			if ( isFunction( onPlots ) ) {
				onPlots( plots );
			}
		})
		.catch( error => {
			debug( 'Encountered an error: '+error.message );
			if ( error.response.data ) {
				onError( error.response.data.replace( ERR_REGEX, '' ) );
			}
		});
	};

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
			axios.get( OPEN_CPU + elem ).then( res => {
				const [ , lib, topic ] = res.data.match( HELP_PATH_REGEX );
				axios.get( `https://public.opencpu.org/ocpu/library/${lib}/man/${topic}/html` ).then( res => {
					clbk( null, res, res.data );
				})
				.catch( err => clbk( err ) );
			});
		};
		const formData = new FormData();
		formData.append( 'x', 'y = ' + helpCommand + '; y[1]' );
		axios.post( OPEN_CPU + OPEN_CPU_IDENTITY, formData )
		.then( res => {
			const arr = res.data.split( '\n' );
			arr.forEach( elem => {
				if ( STDOUT_REGEX.test( elem ) === true ) {
					fetchElem( elem );
				}
			});
		})
		.catch( error => debug( 'Encountered an error: '+error.message ) );
	};

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
		axios.get( OPEN_CPU + `/ocpu/library/${library}/man/${functionName}/html` )
			.then( res => {
				clbk( null, res, res.data );
			})
			.catch( err => clbk( err ) );
	};

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
			axios.get( imgURL, { responseType: 'arraybuffer' }).then( res => {
				const mimeType = res.headers[ 'content-type' ];
				const imageData = btoa(
					new Uint8Array( res.data )
					.reduce((data, byte) => data + String.fromCharCode(byte), '')
				);
				const base64String = `data:${mimeType};base64,${imageData}`;
				return clbk( null, imgURL, base64String );
			})
			.catch( err => clbk( err ) );
		};
		const formData = new FormData();
		formData.append( 'x', code );
		axios.post( OPEN_CPU + OPEN_CPU_IDENTITY, formData )
			.then( response => {
				const arr = response.data.split( '\n' );
				arr.forEach( elem => {
					if ( GRAPHICS_REGEX.test( elem ) === true ) {
						const imgURL = OPEN_CPU + elem + '/' + filetype;
						fetchImage( imgURL );
					}
				});
			})
			.catch( error => clbk( error ) );
	};

	/**
	* Retrieves and stores Jitsi Meet token for the current user and namespace.
	*/
	getJitsiToken = () => {
		let url = this.server+'/get_jitsi_token';
		url += '?';
		url += qs.stringify({ namespaceID: this.namespaceID });
		axios.get( url )
		.then( response => {
			debug( 'Retrieved JITSI token: '+JSON.stringify( response.data ) );
			JITSI = response.data;
			this.update( RECEIVED_JITSI_TOKEN );
		})
		.catch( err => {
			JITSI = null;
			debug( 'Encountered an error '+err.message );
		});
	};

	/**
	* Send data packet to specified group of users or a single user.
	*
	* @param {Object} data - message data
	* @param {string} [to='owners'] - group of people to send message to. Can be either of `owners`, `members`, or an email address of a single user
	* @returns {void}
	*/
	sendSocketMessage = ( data, to ) => {
		if ( !to ) {
			to = 'owners';
		}
		if ( this.socket ) {
			this.socket.emit( 'event', data, to );
		} else {
			// Send data to self for components to update properly:
			data.email = 'anonymous';
			data.name = 'anonymous';
			this.saveAction( data );
		}
	};

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
			!userRights &&
			this.lessonID &&
			this.namespaceID
		) {
			debug( 'Retrieve user rights...' );
			this.userRightsQuestionPosed = true;
			axios.post( this.server+'/get_user_rights', {
				namespaceName: this.namespaceName,
				lessonName: this.lessonName
			})
			.then( res => {
				userRights = res.data;
				this.cohort = userRights.cohort;
				if ( userRights.owner && isEmptyArray( this.socketActions ) ) {
					debug( '[3a] Retrieve all user actions for owners:' );
					this.getUserActions();
				} else {
					debug( '[3b] Retrieve only own actions otherwise:' );
					this.getCurrentUserActions();
				}
				// Send message to subscribed components:
				this.update( RECEIVED_USER_RIGHTS, userRights );

				// Retrieve Jitsi token for video chat:
				if ( !JITSI ) {
					this.getJitsiToken();
				}

				this.getStickyNotes();
				this.getTextEditorDocuments();
			})
			.catch( err => {
				this.userRightsQuestionPosed = false;
				debug( 'Encountered an error '+err.message );
			});
		}
	};

	/**
	* Sets the userRights variable to null.
	*/
	removeUserRights = () => {
		userRights = null;
		this.userRightsQuestionPosed = false;
	};

	/**
	* Checks whether user is enrolled in the course.
	*
	* @returns {boolean} boolean indicating whether user is enrolled
	*/
	isEnrolled = () => {
		if ( !userRights ) {
			return false;
		}
		return userRights.enrolled;
	};

	/**
	* Checks whether user is an owner of the course.
	*
	* @returns {boolean} boolean indicating whether user is course owner
	*/
	isOwner = () => {
		if ( !userRights ) {
			return false;
		}
		return userRights.owner;
	};

	/**
	* Checks whether the lesson is active.
	*
	* @returns {boolean} boolean indicating whether lesson is active
	*/
	isActive = () => {
		return PRIVATE_VARS[ 'active' ];
	};

	/**
	* Joins the specified chat in case of an existing socket connection.
	*
	* @param {Object} config - chat information
	* @param {string} config.name - chat room name
	* @param {boolean} [config.canLeave=true] - whether invited user can leave chat
	* @param {boolean} [config.anonymousSubmissions=false] - whether users can post anonymously to the chat
	*/
	joinChat({ name, canLeave = true, anonymousSubmissions = false }) {
		if ( this.socket ) {
			let found = false;
			for ( let i = 0; i < TEXT_CHATS.length; i++ ) {
				if ( TEXT_CHATS[ i ].name === name ) {
					found = true;
				}
			}
			if ( !found ) {
				TEXT_CHATS.push({
					name, messages: [], members: [], canLeave, anonymousSubmissions
				});
				this.socket.emit( 'join_chat', name );
			}
		}
	}

	/**
	* Joins the specified video chat
	*
	* @param {Object} opts - options
	* @param {string} opts.name - chat name
	* @param {string} opts.subject - displayed subject line
	*/
	joinVideoChat({ name, subject }) {
		let found = false;
		for ( let i = 0; i < VIDEO_CHATS.length; i++ ) {
			if ( VIDEO_CHATS[ i ].name === name ) {
				found = true;
			}
		}
		if ( !found ) {
			VIDEO_CHATS.push({
				name,
				subject
			});
			this.update( VIDEO_CHAT_STARTED, name );
		}
	}

	/**
	* Invites a user to a text chat with the supplied information.
	*
	* @param {Object} data - chat information object with at least a `name`
	* @param {string} email - email of user to invite
	*/
	inviteToChat( data, email ) {
		this.socket.emit( 'chat_invitation', data, email );
	}

	/**
	* Invites a user to a video chat with the supplied information.
	*
	* @param {Object} data - chat information object with at least a `name`
	* @param {string} email - email of user to invite
	*/
	inviteToVideo( data, email ) {
		this.socket.emit( 'video_invitation', data, email );
	}

	/**
	* Closes the given chat for all members.
	*
	* @param {string} name - chat name
	*/
	closeChatForAll( name ) {
		debug( 'Closing chat '+name+' for all users...' );
		this.socket.emit( 'close_chat', name );
	}

	/**
	* Joins collaborative editing of document.
	*
	* @param {string} name - document identifier
	* @param {string} [doc] - default document
	*/
	joinCollaborativeEditing( name, doc ) {
		name = `${this.namespaceID}-${this.lessonID}-${name}`;
		if ( this.socket ) {
			debug( 'Join collaborative editing for '+name );
			if ( doc ) {
				this.socket.emit( 'join_collaborative_editing', name, doc );
			} else {
				this.socket.emit( 'join_collaborative_editing', name );
			}
		}
	}

	/**
	* Send document edits.
	*
	* @param {string} name - document identifier
	* @param {Object} data - document edit events
	*/
	sendCollaborativeEvents( name, data ) {
		if ( this.socket ) {
			name = `${this.namespaceID}-${this.lessonID}-${name}`;
			this.socket.emit( 'send_collaborative_editing_events', {
				docID: name,
				data: data
			});
		}
	}

	/**
	* Poll server for collaborative editing events.
	*
	* @param {string} name - document identifier
	* @param {Object} data - object with `version` and `commentVersion`
	*/
	pollCollaborativeEditingEvents( name, data ) {
		if ( this.socket ) {
			name = `${this.namespaceID}-${this.lessonID}-${name}`;
			this.socket.emit( 'poll_collaborative_editing_events', {
				docID: name,
				data
			});
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
		this.update( MARK_MESSAGES );
	}

	/**
	* Sends the supplied message to all members in the given chat room.
	*
	* @param {string} name - chat room name
	* @param {string} msg - chat message
	* @param {boolean} anonymous - whether the message should be send anonymously to all other users (aside from owners)
	*/
	sendChatMessage( name, msg, anonymous ) {
		PRIVATE_VARS[ 'addedChatMessages' ] += 1;
		if ( this.socket ) {
			const msgObj = {
				time: new Date().getTime(),
				user: this.user.name,
				picture: basename( this.user.picture ),
				content: msg
			};
			if ( anonymous ) {
				msgObj.anonymous = true;
			}
			const chat = this.getChat( name );
			if ( chat ) {
				chat.messages.push( msgObj );
				this.markChatMessagesAsRead( name );
			}
			debug( 'Should emit message to room '+name+': ' + JSON.stringify( msgObj ) );
			this.socket.emit( 'chat_message', {
				msg: msgObj,
				namespaceName: this.namespaceName,
				lessonName: this.lessonName,
				chatroom: name
			});
			this.update( OWN_CHAT_MESSAGE, name );
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
		for ( let i = 0; i < TEXT_CHATS.length; i++ ) {
			let chat = TEXT_CHATS[ i ];
			if ( chat.name === name ) {
				return chat;
			}
		}
		return null;
	}

	/**
	* Removes leading namespace and lesson identifiers from chat name.
	*
	* @param {string} name - full chat name
	* @returns {string} stripped chat name
	*/
	stripChatName( name ) {
		let idx = name.indexOf( ':' );
		if ( idx !== -1 ) {
			name = name.substr( idx+1 );
		}
		return name;
	}

	/**
	* Removes specified chat from list of chats
	*
	* @param {string} name - full chat name
	*/
	removeChat = ( name ) => {
		name = this.stripChatName( name );
		debug( `Remove the "${name}" chat from the list of chats` );
		for ( let i = TEXT_CHATS.length - 1; i >= 0; i-- ) {
			if ( TEXT_CHATS[ i ].name === name ) {
				TEXT_CHATS.splice( i, 1 );
			}
		}
		this.update( REMOVED_CHAT, name );
	};

	/**
	* Leaves chat with the given name and removes it from the current list of chats.
	*
	* @param {string} name - chat room name
	* @returns {void}
	*/
	leaveChat( name ) {
		this.removeChat( name );
		if ( this.socket ) {
			this.socket.emit( 'leave_chat', name );
		}
	}

	/**
	* Leaves video chat with the given name and removes it from the current list of chats.
	*
	* @param {string} name - video chat room name
	* @returns {void}
	*/
	leaveVideoChat( name ) {
		debug( `Closing video chat with name ${name}` );
		for ( let i = VIDEO_CHATS.length - 1; i >= 0; i-- ) {
			if ( VIDEO_CHATS[ i ].name === name ) {
				VIDEO_CHATS.splice( i, 1 );
			}
		}
		this.update( VIDEO_CHAT_ENDED, name );
	}

	/**
	* Emits the `create_groups` event with the newly generated group assignments.
	*
	* @param {Object} groups - group assignments
	*/
	createGroups( groups ) {
		this.socket.emit( 'create_groups', groups );
	}

	/**
	* Emits the `add_question` event with a new question from a student.
	*
	* @param {Object} question - question object
	*/
	addQuestionToQueue( question ) {
		this.socket.emit( 'add_question', question );
	}

	/**
	* Emits the `remove_question` event to remove the specified question from the queue.
	*
	* @param {Object} question - question object
	*/
	removeQuestionFromQueue( question ) {
		this.socket.emit( 'remove_question', question );
	}

	/**
	* Emits the `delete_groups` event and closes all group chats upon finishing group mode.
	*/
	deleteGroups = () => {
		for ( let i = 0; i < ALL_GROUPS.length; i++ ) {
			this.closeChatForAll( ALL_GROUPS[ i ].name );
		}
		this.socket.emit( 'delete_groups' );
	};

	/**
	* Saves sketchpad data (lines, annotations, etc.) on the server.
	*
	* @param {string} id - sketchpad identifier
	* @param {Object} data - sketchpad data
	* @returns {Promise} server response
	*/
	saveSketchpadData( id, data ) {
		return axios.post( this.server+'/save_sketchpad_data', {
			namespaceID: this.namespaceID,
			lessonID: this.lessonID,
			sketchpadID: id,
			data: data
		})
		.catch( error => {
			this.addNotification({
				title: i18n.t( 'session:error-encountered' ),
				message: error.message,
				level: 'error',
				position: 'tl'
			});
		});
	}

	/**
	* Retrieves instructor sketchpad data for logged-in users and anonymous visitors.
	*
	* @param {string} id - sketchpad identifier
	* @returns {Promise} sketchpad data
	*/
	getSketchpadVisitorData( id ) {
		if ( this._offline ) {
			return new Promise( ( resolve, reject ) => {
				resolve( null );
			});
		}
		return this.store.getItem( id ).then( ( visitorData ) => {
			let url = this.server+'/get_sketchpad_shared_data';
			url += '?'+qs.stringify({
				lessonID: this.lessonID,
				sketchpadID: id
			});
			return axios.get( url )
				.then( response => {
					const ownerData = response.data;
					if ( !visitorData ) {
						return ownerData;
					}
					return { ...visitorData, ...ownerData };
				});
		});
	}

	/**
	* Retrieves sketchpad data for the currently logged-in user.
	*
	* @param {string} id - sketchpad identifier
	* @returns {Promise} sketchpad data
	*/
	getSketchpadUserData( id ) {
		if ( this._offline ) {
			return new Promise( ( resolve, reject ) => {
				resolve( null );
			});
		}
		let url = this.server+'/get_sketchpad_user_data';
		url += '?'+qs.stringify({
			namespaceID: this.namespaceID,
			lessonID: this.lessonID,
			sketchpadID: id
		});
		return axios.get( url ).then( res => res.data );
	}

	/**
	* Saves sticky note.
	*
	* @param {Object} note - sticky note data
	* @returns {Promise} server response
	*/
	saveStickyNote({ title, body, left, top, visibility }) {
		return axios.post( this.server+'/save_sticky_note', {
			namespaceID: this.namespaceID,
			lessonID: this.lessonID,
			title,
			body,
			left,
			top,
			visibility
		})
		.then( res => {
			if ( res.data.message === 'ok' ) {
				this.stickyNotes.push( res.data.note );
				this.update( STICKY_NOTES_UPDATED );
			}
		})
		.catch( error => {
			this.addNotification({
				title: i18n.t( 'session:error-encountered' ),
				message: error.message,
				level: 'error',
				position: 'tl'
			});
		});
	}

	/**
	* Retrieves sticky notes for the lesson.
	*/
	getStickyNotes = () => {
		axios.get( this.server+'/get_sticky_notes?'+qs.stringify({
			lessonID: this.lessonID,
			namespaceID: this.namespaceID
		}) )
			.then( res => {
				if ( res.data.message === 'ok' && res.data.notes.length > 0 ) {
					this.stickyNotes = res.data.notes;
					this.update( STICKY_NOTES_UPDATED );
				}
			})
			.catch( error => {
				this.addNotification({
					title: i18n.t( 'session:error-encountered' ),
					message: error.message,
					level: 'error',
					position: 'tl'
				});
			});
	};

	/**
	* Updates a sticky note.
	*
	* @param {Object} note - sticky note
	* @returns {Promise} server response
	*/
	updateStickyNote = ( note ) => {
		return axios.post( this.server+'/update_sticky_note', {
			...note,
			namespaceID: this.namespaceID
		})
			.then( res => {
				if ( res.data.message === 'ok' ) {
					const newNote = res.data.note;
					for ( let i = 0; i < this.stickyNotes.length; i++ ) {
						if ( this.stickyNotes[ i ]._id === newNote._id ) {
							this.stickyNotes[ i ] = newNote;
						}
						this.update( STICKY_NOTES_UPDATED );
					}
				}
			})
			.catch( error => debug( 'Encountered an error: '+error.message ) );
	};

	/**
	* Deletes a sticky note.
	*
	* @param {string} id - sticky note identifier
	* @returns {Promise} server response
	*/
	deleteStickyNote = ( id ) => {
		debug( 'Deleting sticky note...' );
		return axios.post( this.server+'/delete_sticky_note', {
			noteID: id,
			namespaceID: this.namespaceID
		})
			.then( res => {
				if ( res.data.message === 'ok' ) {
					let foundPos = null;
					for ( let i = 0; i < this.stickyNotes.length; i++ ) {
						if ( this.stickyNotes[ i ]._id === id ) {
							foundPos = i;
						}
					}
					if ( foundPos !== null ) {
						debug( 'Remove note at position '+foundPos );
						this.stickyNotes.splice( foundPos, 1 );
						setTimeout( () => {
							this.update( STICKY_NOTES_UPDATED );
						}, 1100 );
					}
				}
			})
			.catch( error => debug( 'Encountered an error: '+error.message ) );
	};

	/**
	* Retrieves text document identifiers for the lesson.
	*/
	getTextEditorDocuments = () => {
		if ( !userRights || !userRights.owner ) {
			return;
		}
		axios.get( this.server+'/text_editor_document_list?'+qs.stringify({
			lessonID: this.lessonID,
			namespaceID: this.namespaceID
		}) )
			.then( res => {
				if ( res.data.message === 'ok' && res.data.documents.length > 0 ) {
					this.textEditorDocuments = res.data.documents.map( x => x.id );
					this.update( TEXT_EDITOR_DOCUMENTS_UPDATED );
				}
			})
			.catch( error => {
				this.addNotification({
					title: i18n.t( 'session:error-encountered' ),
					message: error.message,
					level: 'error',
					position: 'tl'
				});
			});
	};

	/**
	* Retrieves contents and history of a text document.
	*
	* @returns {Promise} request result
	*/
	getTextEditorDocument = ( id ) => {
		const url = this.server+'/text_editor_document?'+qs.stringify({
			id: id,
			lessonID: this.lessonID,
			namespaceID: this.namespaceID
		});
		return axios.get( url ).catch( error =>
			debug( 'Encountered an error: '+error.message )
		);
	};

	updateMetadata = ( type, key, value ) => {
		if ( !this.isOwner() ) {
			return null;
		}
		if ( !this.metadata[ type ] ) {
			this.metadata[ type ] = {};
		}
		this.metadata[ type ][ key ] = value;
		const query = {
			namespaceID: this.namespaceID,
			lessonID: this.lessonID,
			type,
			key,
			value
		};
		axios.post( this.server+'/update_metadata', query )
			.then( res => {
				if ( res.data.metadata ) {
					this.metadata = {
						...this.metadata,
						...res.data.metadata
					};
				}
			})
			.catch( error => {
				this.addNotification({
					title: i18n.t( 'session:error-encountered' ),
					message: error.message,
					level: 'error',
					position: 'tl'
				});
			});
	};

	/**
	* Establishes socket connection with other users.
	*
	* @returns {void}
	*/
	socketConnect() {
		debug( 'Connecting via socket to server...' );
		if ( this.socket ) {
			if ( !this.socket.disconnected ) {
				debug( 'Socket connection is still working, no need to create new one...' );
				return;
			}
			debug( 'Close existing connection before creating new socket connection...' );
			this.socket.close();
			this.socket = null;
		}

		const socket = io.connect( this.server, {
			transports: [ 'polling', 'websocket' ]
		});

		socket.on( 'connect', () => {
			debug( 'I am connected...' );

			// Log action for loading lesson:
			setTimeout( () => {
				this.log({
					type: LESSON_CONNECTED,
					value: socket.id,
					id: this.lessonName
				});
			}, 1000 );
			this.stopPingServer();
		});

		socket.on( 'connect_error', ( err ) => {
			console.log( 'Encountered an error while connecting:' );
			console.error( err );
		});

		const config = {
			namespaceName: this.namespaceName,
			lessonName: this.lessonName,
			userID: this.user.id,
			userName: this.user.name || this.anonymousIdentifier,
			userEmail: this.user.email || this.anonymousIdentifier
		};
		socket.emit( 'join', config );

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
			this.update( RECEIVED_USERS );
		});

		socket.on( 'progress', ( data ) => {
			debug( `Receiving progress ${data.progress} from user ${data.email}` );
			this.userProgress[ data.email ] = data.progress;
			this.update( USER_PROGRESS );
		});

		socket.on( 'user_joins', ( data ) => {
			debug( 'A user has joined and should be added to the user list: ' + data );
			data = JSON.parse( data );
			if ( data.owner ) {
				this.hasOwner = true;
			}
			this.userList = this.userList.filter( user => user.email !== data.email );
			this.userList.push( data );
			this.update( USER_JOINED, data );
		});

		socket.on( 'user_leaves', ( data ) => {
			debug( 'A user has disconnected and should be removed: ' + data );
			data = JSON.parse( data );
			this.userList = this.userList.map( user => {
				if ( user.email === data.email ) {
					user.inactive = true;
					user.exitTime = data.exitTime;
				}
				return user;
			});
			setTimeout( () => {
				// Remove user after three minutes:
				this.userList = this.userList.filter( user => {
					if ( user.email === data.email ) {
						return !user.inactive;
					}
					return true;
				});
				this.update( USER_FINALLY_REMOVED, data.email );
			}, 3 * 60000 );
			const isUser = data.email === this.user.email;
			this.update( USER_LEFT, data.email );
			if ( isUser ) {
				// Case: Oneself has logged off on another browser tab
				this.forcedLogout();
			}
		});

		socket.on( 'chat_history', ({ name, messages, members }) => {
			debug( 'Received chat history: ' + JSON.stringify( messages ) );
			let chat = this.getChat( name );
			if ( !chat ) {
				name = this.stripChatName( name );
				chat = { name, messages, members };
				TEXT_CHATS.push( chat );
			} else {
				chat.messages = messages;
				chat.members = members;
			}
			this.update( RECEIVED_CHAT_HISTORY, chat );
		});

		socket.on( 'member_has_joined_chat', ({ name, member }) => {
			debug( `Member ${member.name} has joined chat ${name}` );
			let chat = this.getChat( name );
			name = this.stripChatName( name );
			if ( chat ) {
				chat.members.push( member );
				this.update( MEMBER_HAS_JOINED_CHAT, chat );
			} else if ( member.email === this.user.email ) {
				chat = { name: name, messages: [], members: []};
				TEXT_CHATS.push( chat );
				this.socket.emit( 'join_chat', name );
				this.update( SELF_HAS_JOINED_CHAT, chat );
			}
		});

		socket.on( 'member_has_left_chat', ({ name, member }) => {
			debug( `Member ${member.name} has left chat ${name}` );
			const chat = this.getChat( name );
			name = this.stripChatName( name );
			chat.members = chat.members.filter( m => m.email !== member.email );
			if ( this.user.email === member.email ) {
				debug( 'I have left the chat...' );
				this.removeChat( name );
				this.update( SELF_HAS_LEFT_CHAT, name );
			} else {
				debug( 'Somebody else has left the chat' );
				this.update( MEMBER_HAS_LEFT_CHAT, name );
			}
		});

		socket.on( 'joined_collaborative_editing', ( id, data ) => {
			this.update( JOINED_COLLABORATIVE_EDITING, { id, data });
		});

		socket.on( 'sent_collaborative_editing_events', ( id, data ) => {
			this.update( SENT_COLLABORATIVE_EDITING_EVENTS, { id, data });
		});

		socket.on( 'polled_collaborative_editing_events', ( id, data ) => {
			this.update( POLLED_COLLABORATIVE_EDITING_EVENTS, { id, data });
		});

		socket.on( 'collaborative_editing_events', ( id, data ) => {
			this.update( COLLABORATIVE_EDITING_EVENTS, { id, data });
		});

		socket.on( 'chat_message', ( data ) => {
			const chat = this.getChat( data.chatroom );
			if ( chat ) {
				data.msg.unread = true;
				chat.messages.push( data.msg );
			}
			this.update( CHAT_MESSAGE, data.chatroom );
		});

		socket.on( 'chat_invitation', ( data ) => {
			this.joinChat( data );
		});

		socket.on( 'video_invitation', ( data ) => {
			this.joinVideoChat( data );
		});

		socket.on( 'closed_chat', ( name ) => {
			debug( 'Should close chat with name '+name );
			this.removeChat( name );
		});

		socket.on( 'chat_statistics', ( data ) => {
			data.name = this.stripChatName( data.name );
			this.update( CHAT_STATISTICS, data );
		});

		socket.on( 'created_groups', ( groups ) => {
			ALL_GROUPS = groups;
			ASSIGNED_GROUP = retrieveUserGroup( groups, this.user );
			this.update( CREATED_GROUPS, ASSIGNED_GROUP );
			if ( ASSIGNED_GROUP && !this.isOwner() ) {
				this.joinChat({
					name: this.group.name,
					canLeave: false
				});
			}
		});

		socket.on( 'deleted_groups', () => {
			ASSIGNED_GROUP = null;
			const lastGroups = ALL_GROUPS;
			ALL_GROUPS = [];
			this.update( DELETED_GROUPS, lastGroups );
		});

		socket.on( 'queue_questions', ( questions ) => {
			QUESTIONS = questions;
			this.update( RECEIVED_QUEUE_QUESTIONS, QUESTIONS );
		});

		socket.on( 'memberAction', this.saveAction );

		socket.on( 'error', ( err ) => {
			debug( 'Encountered an error: '+err.message );
		});

		socket.on( 'disconnect', ( reason ) => {
			debug( 'Socket is disconnected from the server. Reason: '+reason );
			this.live = false;
			if ( this.socket ) {
				this.socket.close();
				this.socket = null;
			}
			this.startPingServer();
			this.update( DISCONNECTED_FROM_SERVER );
		});

		this.socket = socket;
	}

	/**
	* Retrieves all fake users.
	*/
	getFakeUsers = () => {
		let url = this.server+'/get_fake_users?';
		url += qs.stringify({ namespaceID: this.namespaceID });
		return axios.get( url )
			.then( res => {
				return res.data;
			})
			.catch( err => {
				return this.addNotification({
					title: i18n.t( 'session:request-failed' ),
					message: err.message,
					level: 'error',
					position: 'tl'
				});
			});
	};

	/**
	* Retrieves all actions by users for the current lesson for course owners.
	*
	* @returns {void}
	*/
	getUserActions = () => {
		debug( 'Retrieve user actions...' );
		axios.post( this.server+'/get_user_actions', {
			lessonID: this.lessonID,
			anonymous: true
		})
		.then( ( response ) => {
			debug( '/get_user_actions response status: '+response.status );
			const { actions } = response.data;
			debug( `Received ${actions.length} actions for lesson ${this.lessonName} (id: ${this.lessonID})...` );
			this.socketActions = actions;
			this.update( RETRIEVED_USER_ACTIONS, actions );
			debug( '[4] Retrieve cohort information...' );
			this.getCohorts();
		})
		.catch( error => debug( 'Encountered an error: '+error.message ) );
	};

	/**
	* Retrieves cohort information for course owners.
	*/
	getCohorts = () => {
		const url = this.server+'/get_cohorts?'+qs.stringify({ namespaceID: this.namespaceID, memberFields: 'email name picture' });
		axios.get( url ).then( response => {
			const data = response.data;
			const cohorts = data.cohorts;
			this.cohorts = cohorts.sort( titleCompare );
			this.update( RETRIEVED_COHORTS, this.cohorts );
		})
		.catch( error => debug( 'Encountered an error: '+error.message ) );
	};

	selectCohort = ( title ) => {
		if (
			!this.cohorts ||
			( this.selectedCohort && title === this.selectedCohort.title )
		) {
			return debug( 'No cohorts available or already changed to the requested cohort...' );
		}
		const cohorts = this.cohorts;
		let cohort;
		let activeCohortMembers;
		for ( let i = 0; i < cohorts.length; i++ ) {
			if ( cohorts[ i ].title === title ) {
				cohort = cohorts[ i ];
				const emails = this.userList.map( x => x.email );
				activeCohortMembers = cohort.members.filter( x => contains( emails, x.email ) );
				break;
			}
		}
		this.selectedCohort = cohort;
		this.activeCohortMembers = activeCohortMembers;
		this.update( SELECTED_COHORT, this.selectedCohort );
	};

	/**
	* Retrieves all actions by the current user for the active lesson.
	*
	* @returns {void}
	*/
	getCurrentUserActions = () => {
		axios.post( this.server+'/get_current_user_actions', {
			lessonID: this.lessonID
		})
		.then( ( response ) => {
			debug( 'Received current user actions...' );
			this.currentUserActions = response.data.actions;
			this.update( RETRIEVED_CURRENT_USER_ACTIONS, this.currentUserActions );
		})
		.catch( error => debug( 'Encountered an error: '+error.message ) );
	};

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
		if ( action.type === FOCUS_ELEMENT ) {
			debug( `Received focus for element with ID ${action.id} by ${action.email}` );
			this.userFocuses[ action.email ] = action.id;
		}
		else if ( action.type === LOSE_FOCUS_ELEMENT ) {
			debug( `Remove focus for user ${action.email}` );
			delete this.userFocuses[ action.email ];
		}
		this.update( MEMBER_ACTION, action );
	};

	/**
	* Update all lesson components that have subscribed to session updates.
	*
	* @param {string} type - event type
	* @param {*} data - event data
	*/
	update( type, data ) {
		LISTENERS.forEach( listener => listener( type, data ) );
	}

	/**
	* Creates an account for a new user.
	*
	* @param {Object} data - registration data (`email`, `name`, `password`)
	* @param {Function} clbk - callback invoked after successful login or when encountering an error
	*/
	registerUser( data, clbk ) {
		axios.post( this.server+'/create_user', data )
		.then( () => {
			this.addNotification({
				title: i18n.t( 'session:user-created' ),
				message: i18n.t( 'session:user-created-message' ),
				level: 'success',
				position: 'tl'
			});
			this.login({ email: data.email, password: data.password }, clbk );
		})
		.catch( ( err ) => {
			this.addNotification({
				title: i18n.t( 'session:user-not-created' ),
				message: err.response.data,
				level: 'error',
				position: 'tl'
			});
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
		this.socket.close();
		this.user = {};
		this.anonymous = true;
		this.userRightsQuestionPosed = false;
		this.reset();
		this.addNotification({
			title: i18n.t( 'session:logout-title' ),
			message: i18n.t( 'session:logout-message' ),
			level: 'success',
			position: 'tl'
		});
		this.update( LOGGED_OUT );
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
		TEXT_CHATS = [];
		VIDEO_CHATS = [];
		this.actions = [];
		this.socketActions = [];
		this.currentUserActions = {};
		this.userList = [];
		this.removeUserRights();
	}

	/**
	* Logs user in.
	*
	* @param {Object} form - form data
	* @param {string} form.email - email address
	* @param {string} form.password - user password
	* @param {string} form.token - two-factor authentication token
	* @param {Function} clbk - callback function
	* @returns {void}
	*/
	login = ( form, clbk ) => {
		let url;
		if ( form.token ) {
			url = this.server+'/login_tfa';
		} else {
			url = this.server+'/login';
		}
		axios.post( url, form )
		.then( response => {
			const { token, id, message } = response.data;
			JWT = {
				token,
				id
			};

			// Save user token to local storage:
			localStorage.setItem( this.userVal, JSON.stringify( JWT ) );
			if ( message === 'ok' ) {
				this.handleLogin({ token, id });
			}
			clbk( null, response, response.data );
		})
		.catch( ( err ) => {
			if ( err.response.status === 404 ) {
				return this.addNotification({
					title: err.response.statusText,
					message: err.response.data,
					level: 'error',
					position: 'tl'
				});
			}
			else if ( err.response.status === 401 ) {
				return this.addNotification({
					title: err.response.statusText,
					message: err.response.data,
					level: 'error',
					position: 'tl'
				});
			}
			clbk( err );
		});
	};

	/**
	* Sends a "Reset Password" link to the supplied email address.
	*
	* @param {string} email - email address
	* @returns {void}
	*/
	forgotPassword( email ) {
		axios.get( this.server+'/forgot_password?'+qs.stringify({ email }) )
			.then( () => {
				debug( 'GET: /forgot_password' );
				this.addNotification({
					title: i18n.t( 'session:new-password-title' ),
					message: i18n.t( 'session:new-password-message' ),
					level: 'success',
					position: 'tl'
				});
			})
			.catch( ( error ) => {
				this.addNotification({
					title: i18n.t( 'session:new-password-title' ),
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
			axios.get( this.server+'/get_lesson_info?'+qs.stringify({ lessonName, namespaceName }) )
			.then( ( response ) => {
				const data = response.data;
				this.lessonID = data.lessonID;
				this.namespaceID = data.namespaceID;
				if ( data.enableTicketing ) {
					this.enableTicketing = data.enableTicketing;
				}
				PRIVATE_VARS[ 'active' ] = ( data.active === void 0 ) ? true : data.active;
				if ( data.time ) {
					PRIVATE_VARS[ 'startTime' ] = data.time;
				}
				if ( data.metadata ) {
					this.metadata = {
						...this.metadata,
						...data.metadata
					};
				}
				debug( '[2] Retrieve user rights and data for said lesson and its namespace' );
				debug( JSON.stringify( data ) );
				this.update( RECEIVED_LESSON_INFO, data );
				this.getUserRights();
			})
			.catch( ( err ) => {
				debug( 'Encountered an error: '+err.message );
			});
		}
	};

	/**
	* Retrieves data from database.
	*
	* @param {Object} query - query for actions to obtain from database
	* @param {Function} onData - callback invoked with error or retrieved data
	* @returns {void}
	*/
	retrieveData( query, onData ) {
		axios.post( this.server + '/retrieve_data', {
			query,
			user: this.user
		})
			.then( response => onData( null, response.data ) )
			.catch( error => onData( error ) );
	}

	/**
	* Verifies user credentials via JSON Web Token to finish login process.
	*
	* @param {Object} obj - user object with `token` and `id` fields
	* @param {boolean} silent - controls whether to display notification or not
	* @returns {void}
	*/
	handleLogin = ( obj, silent = false ) => {
		axios.post( this.server+'/credentials', {
			id: obj.id
		})
		.then( ( response ) => {
			debug( 'Received credentials for login...' );
			if ( !silent ) {
				this.addNotification({
					title: i18n.t( 'session:loggedin' ),
					message: i18n.t( 'session:loggedin-message' ),
					level: 'success',
					position: 'tl'
				});
			}
			this.user = response.data;
			if ( this.user && this.user.picture ) {
				this.user.picture = this.server + '/avatar/' + this.user.picture;
			}
			PRIVATE_VARS[ 'score' ] = this.user.score;
			this.anonymous = false;
			this.socket.close();
			this.socketConnect();
			if ( !userRights ) {
				this.getUserRights();
			}
			this.update( LOGGED_IN );
		})
		.catch( ( err ) => {
			debug( 'Encountered an error: '+err.message );
		});
	};

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
		PRIVATE_VARS[ 'endTime' ] = new Date().getTime();
		PRIVATE_VARS[ 'duration' ] = PRIVATE_VARS[ 'endTime' ] - PRIVATE_VARS[ 'startTime' ];
		this.finished = true;
		if ( this.anonymous === false ) {
			this.updateDatabase();
		}
	}

	/**
	* Initialize progress after response visualizer has mounted.
	*/
	initializeProgress() {
		if (
			this.anonymous ||
			isEmptyObject( this.currentUserActions ) ||
			( userRights && userRights.owner )
		) {
			return;
		}
		debug( 'Set initial progress...' );
		let progress = 0;
		const ids = this.responseVisualizerIds;
		this.unfinished = ids.slice();
		for ( let i = ids.length - 1; i >= 0; i-- ) {
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
						this.unfinished.splice( i, 1 );
						progress += 1.0 / ids.length;
						break;
					}
				}
			}
		}
		PRIVATE_VARS[ 'progress' ] = clamp( progress, 0, 1 );
		debug( 'Initial progress: '+progress );
		this.update( SELF_INITIAL_PROGRESS, progress );
		this.socket.emit( 'progress', progress );
		this.logSession();
	}

	/**
	* Sets the user's progress for the lesson.
	*
	* @param {string} [id] - action id
	*/
	setProgress( id ) {
		if (
			this.anonymous ||
			isEmptyObject( this.currentUserActions ) ||
			( userRights && userRights.owner )
		) {
			return;
		}
		const ids = this.responseVisualizerIds;
		if ( id ) {
			// Received a new action, check whether we need to increment progress...
			const actions = this.currentUserActions[ id ];
			const ref = this.responseVisualizers[ id ];
			if ( actions && ref ) {
				const type = ref.type;
				for ( let j = 0; j < actions.length; j++ ) {
					if ( actions[ j ].type === type ) {
						if ( j < actions.length - 1 ) {
							break;
						}
						else if ( j === actions.length - 1 ) {
							const progress = clamp( this.get( 'progress' ) + 1.0 / ids.length, 0, 1 );
							PRIVATE_VARS[ 'progress' ] = progress;
							this.update( SELF_UPDATED_PROGRESS, progress );
							if ( !this.unfinished ) {
								this.initializeProgress();
							}
							this.unfinished = this.unfinished.filter( x => x !== id );
							this.socket.emit( 'progress', progress );
							this.logSession();
						}
					}
				}
			}
		}
	}

	adjustGrades = ( email, grades ) => {
		let sumPoints = 0;
		for ( let key in grades ) {
			if ( hasOwnProp( grades, key ) && key !== '_sumPoints' ) {
				sumPoints += grades[ key ];
			}
		}
		grades[ '_sumPoints' ] = sumPoints;
		this.lessonGrades[ email ] = grades;
		axios.post( this.server+'/user_adjust_grades', {
			email,
			grades,
			lessonID: this.lessonID,
			namespaceID: this.namespaceID
		}).then( ( res ) => {
			this.addNotification({
				title: i18n.t( 'session:grades-saved' ),
				message: res.data.message,
				level: 'success',
				position: 'tl'
			});
		});
	};

	appendGradeMessage = ( email, componentID, text ) => {
		const message = {
			time: new Date().getTime(),
			user: this.user.name,
			picture: basename( this.user.picture ),
			content: text
		};
		if ( !this.lessonGradeMessages[ email ] ) {
			this.lessonGradeMessages[ email ] = {};
		}
		if ( isArray( this.lessonGradeMessages[ email ][ componentID ] ) ) {
			this.lessonGradeMessages[ email ][ componentID ].push( message );
		} else {
			this.lessonGradeMessages[ email ][ componentID ] = [ message ];
		}
		axios.post( this.server+'/user_append_grade_message', {
			lessonID: this.lessonID,
			namespaceID: this.namespaceID,
			email,
			componentID,
			message
		}).then( ( res ) => {
			this.addNotification({
				title: i18n.t( 'session:message-saved' ),
				message: res.data.message,
				level: 'success',
				position: 'tl'
			});
		});
	};

	getLessonGrades = () => {
		const ids = this.responseVisualizerIds;
		let maxPoints = 0;
		for ( let i = ids.length - 1; i >= 0; i-- ) {
			const key = ids[ i ];
			const { ref } = this.responseVisualizers[ key ];
			if ( ref && ref.props && ref.props.points ) {
				maxPoints += ref.props.points;
			}
		}
		if ( this.metadata.grades && this.metadata.grades.maxPoints !== maxPoints ) {
			this.metadata.grades.maxPoints = maxPoints;
			this.updateMetadata( 'grades', 'maxPoints', maxPoints );
		}
		axios.get( this.server+'/get_lesson_grades?' + qs.stringify({
			lessonID: this.lessonID,
			namespaceID: this.namespaceID
		}) )
			.then( res => {
				this.lessonGrades = res.data.grades;
			})
			.catch( err => {
				debug( 'Encountered an error: '+err.message );
			});
	};

	getLessonGradeMessages = () => {
		axios.get( this.server+'/get_lesson_grade_messages?' + qs.stringify({
			lessonID: this.lessonID,
			namespaceID: this.namespaceID
		}) )
			.then( res => {
				this.lessonGradeMessages = res.data.gradeMessages;
			})
			.catch( err => {
				debug( 'Encountered an error: '+err.message );
			});
	};

	/**
	* Updates the user's score based on his latest action.
	*
	* @param {Object} action - user action
	* @returns {void}
	*/
	setScore( action ) {
		if (
			this.anonymous ||
			isEmptyObject( this.currentUserActions ) ||
			( userRights && userRights.owner )
		) {
			return;
		}
		const actions = this.currentUserActions;
		if ( actions ) {
			const arr = actions[ action.id ];
			const pts = POINTS[ action.type ] || 1;
			if ( !arr ) {
				addedScore += pts;
				PRIVATE_VARS[ 'score' ] = this.get( 'score' ) + pts;
				this.update( SELF_UPDATED_SCORE, pts );
			}
			else {
				const types = arr.map( x => x.type );
				if ( !contains( types, action.type ) ) {
					addedScore += pts;
					PRIVATE_VARS[ 'score' ] = this.get( 'score' ) + pts;
					this.update( SELF_UPDATED_SCORE, pts );
				}
			}
		}
	}

	togglePresentationView() {
		this.presentationMode = !this.presentationMode;
		this.update( TOGGLE_PRESENTATION_MODE, this.presentationMode );

		let msg = 'You have started the presentation mode which hides the status bar, the instructorView and all owner elements. Hit F7 to leave the it.';
		let title = 'Started presentation mode';

		if ( this.presentationMode === false ) {
			msg = 'You have finished the presentation mode. Hit F7 to start it again.';
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

		const addedActionTypes = this.get( 'addedActionTypes' );
		if ( addedActionTypes.length === 0 ) {
			return debug( 'Do not update user session when user is idle...' );
		}
		debug( 'Updates session object in database...' );
		const currentSession = {
			elapsed: timeDiff,
			addedScore: addedScore,
			addedChatMessages: this.get( 'addedChatMessages' ),
			vars: this.vars,
			lessonID: this.lessonID,
			progress: this.get( 'progress' ),
			addedActionTypes: countBy( addedActionTypes, identity )
		};
		addedScore = 0;
		PRIVATE_VARS[ 'addedChatMessages' ] = 0;
		PRIVATE_VARS[ 'addedActionTypes' ] = [];

		if ( !this._offline && !this.anonymous ) {
			axios.post( this.server+'/update_user_session', currentSession )
			.then( ( res ) => {
				debug( '/update_user_session returns: '+res.status );
			})
			.catch( err => {
				debug( 'Encountered an error: '+err.message );
			});
		}
	}

	/**
	* Logs data to database.
	*
	* @param {string} type - type of data to log (`vars` or `action`)
	* @param {Object} data - data to log
	* @param {Function} clbk - callback invoked with `err` and `res` arguments
	* @returns {void}
	*/
	logToDatabase( type, data, clbk ) {
		debug( `Logging ${type} to database...` );
		const obj = {
			startTime: PRIVATE_VARS[ 'startTime' ],
			userID: this.user.id,
			lessonID: this.lessonID,
			type,
			data
		};
		if ( !this._offline ) {
			PRIVATE_VARS[ 'addedActionTypes' ].push( data.type );
			debug( 'Storing session element...' );
			axios.post( this.server+'/store_session_element', obj )
				.then( ( res ) => {
					debug( '/store_session_element status code: '+res.status );
					clbk( null, res.data );
				})
				.catch( err => {
					debug( `Encountered an error: ${err.message}.` );
					clbk( err );
				});
		}
	}

	/**
	* Removes a session object from the remote data store.
	*
	* @param {string} sessionElementID - id of session
	* @param {Function} clbk - callback invoked upon removal or error
	*/
	removeSessionElementFromDB( sessionElementID, clbk ) {
		axios.get( this.server+'/delete_session_element?' + qs.stringify({
			_id: sessionElementID
		}))
		.then( () => {
			for ( let i = 0; i < this.socketActions.length; i++ ) {
				if ( this.socketActions[ i ].sessiondataID === sessionElementID ) {
					this.socketActions.splice( i, 1 );
					break;
				}
			}
			this.addNotification({
				title: i18n.t( 'session:deleted' ),
				message: i18n.t( 'session:deleted-message' ),
				level: 'success',
				position: 'tl'
			});
			clbk( null );
		})
		.catch( error => {
			this.addNotification({
				title: i18n.t( 'session:error-encountered' ),
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
		const onLogged = ( err, res ) => {
			if ( err ) {
				return this.addNotification({
					title: i18n.t( 'session:error-encountered' ),
					message: err.message,
					level: 'error',
					position: 'tl'
				});
			}
			// Attach received action ID:
			action.sessiondataID = res.id;

			// Add to the beginning of the respective array of the `currentUserActions` hash table:
			const actions = this.currentUserActions;
			this.setScore( action );
			if ( actions ) {
				if ( !actions[ action.id ]) {
					actions[ action.id ] = [ action ];
				} else {
					actions[ action.id ].unshift( action );
				}
			}
			this.setProgress( action.id );

			debug( 'Send to socket connections after ID is attached...' );
			if ( !isNull( to ) ) {
				this.sendSocketMessage( action, to );
			}

			// If first action, create session on server:
			if ( this.actions.length === 1 ) {
				this.updateDatabase();
			}
		};

		if ( action && action.id ) {
			action.absoluteTime = new Date().getTime();
			action.time = action.absoluteTime - this.startTime;
			action.owner = this.isOwner();
			if ( this.anonymous ) {
				action.email = this.anonymousIdentifier;
				action.name = this.anonymousIdentifier;
			} else {
				action.email = this.user.email;
				action.name = this.user.name;
			}
			if ( !action.noSave ) {
				debug( 'Save action...' );
				this.actions.push( action );
				this.logToDatabase( 'action', action, onLogged );
			} else {
				// Send only to socket connections and do not save to database:
				this.sendSocketMessage( action, to );
			}
		}
	}

	/**
	* Retrieves all owner files for the current lesson.
	*
	* @param {Function} clbk - callback invoked with error as first (`null` if successful) and files as second argument
	*/
	getLessonOwnerFiles = ( clbk ) => {
		if ( this.lessonName && this.namespaceName ) {
			let url = this.server + '/get_files';
			url += '?'+qs.stringify({ namespaceName: this.namespaceName, lessonName: this.lessonName, owner: true });
			axios.get( url ).then( response => {
				clbk( null, response.data.files );
			})
			.catch( err => {
				debug( 'Encountered an error: '+err.message );
				clbk( err );
			});
		}
	};

	/**
	* Uploads a file.
	*
	* @param {Object} options - options object
	* @param {Object} options.formData - form data object
	* @param {Function} [options.callback] - callback function
	* @param {boolean} [options.showNotification] - controls whether to show upload notification
	* @returns {void}
	*/
	uploadFile = ({ formData, callback = () => {}, showNotification = true }) => {
		if ( this.lessonName ) {
			formData.append( 'lessonName', this.lessonName );
		}
		if ( this.namespaceName ) {
			formData.append( 'namespaceName', this.namespaceName );
		}
		if ( this.isOwner() ) {
			formData.append( 'owner', true );
		}
		if ( isEmptyObject( this.user ) ) {
			this.addNotification({
				title: i18n.t( 'session:file-upload' ),
				message: i18n.t( 'session:file-upload-signin-required' ),
				level: 'warning',
				position: 'tl'
			});
			return callback( new Error( i18n.t( 'session:file-upload-signin-required' ) ) );
		}
		const xhr = new XMLHttpRequest();
		xhr.open( 'POST', this.server+'/upload_file', true );
		xhr.setRequestHeader( 'Authorization', 'JWT ' + JWT.token );
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
				if ( showNotification ) {
					this.addNotification({
						title: i18n.t( 'session:file-upload' ),
						message,
						level,
						position: 'tl'
					});
				}
				return callback( err, body );
			}
		};
		xhr.send( formData );
	};

	createTicket({ title, description, component, platform, files = []}) {
		if ( files.length === 0 ) {
			return axios.post( this.server + '/create_ticket', {
				title,
				description,
				platform,
				component,
				namespaceID: this.namespaceID,
				lessonID: this.lessonID
			}).catch( error =>
				debug( 'Encountered an error: '+error.message )
			);
		}
		const formData = new FormData();
		for ( let i = 0; i < files.length; i++ ) {
			formData.append( 'attachment', files[ i ] );
		}
		formData.append( 'title', title );
		formData.append( 'description', description );
		formData.append( 'platform', JSON.stringify( platform ) );
		formData.append( 'namespaceID', this.namespaceID );
		formData.append( 'lessonID', this.lessonID );
		return axios.post( this.server + '/create_ticket', formData ).catch( error =>
			debug( 'Encountered an error: '+error.message )
		);
	}

	/**
	* Sends an email.
	*
	* @param {Object} mail - email object
	* @param {string} to - email address of receiver
	* @returns {void}
	*/
	sendMail = ( mail, to ) => {
		const mailOptions = { ...mail };
		if ( !hasOwnProp( mailOptions, 'from' ) ) {
			mailOptions.from = this.config.email || `notifications@${window.location.host}`; // eslint-disable-line i18next/no-literal-string
		}
		if ( !hasOwnProp( mailOptions, 'to' ) ) {
			mailOptions.to = to;
		}
		axios.post( this.server + '/send_mail', mailOptions ).catch( error =>
			debug( 'Encountered an error: '+error.message )
		);
	};

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
	* Updates whether voice recording is currently active.
	*
	* @param {boolean} value - voice recording status
	*/
	setVoiceRecordingStatus( value ) {
		this.voiceRecordingStatus = value;
		this.update( VOICE_RECORDING_STATUS, value );
	}

	/**
	* Displays a notification.
	*
	* @param {Object} notification configuration
	* @returns {(null|Notification)}
	*/
	addNotification( config ) {
		if ( !config.onAdd && !config.onRemove ) {
			config.onAdd = () => {
				window.addEventListener( 'beforeunload', beforeUnload );
			};
			config.onRemove = () => {
				window.removeEventListener( 'beforeunload', beforeUnload );
			};
		}
		if ( !config.position ) {
			config.position = 'tc';
		}
		if ( global.notificationSystemISLE ) {
			return global.notificationSystemISLE.addNotification( config );
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
		if ( global.notificationSystemISLE ) {
			global.notificationSystemISLE.removeNotification( notification );
		}
	}
}


// EXPORTS //

export default Session;
