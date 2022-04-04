/* eslint-disable max-lines */

// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
const pdfjsLib = require( 'pdfjs-dist/build/pdf.min.js' );
import pdfMake from 'pdfmake/build/pdfmake';
import logger from 'debug';
import Pressure from 'pressure';
import debounce from 'lodash.debounce';
import { ContextMenuTrigger } from '@isle-project/components/internal/contextmenu';
import Card from 'react-bootstrap/Card';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import PopoverBody from 'react-bootstrap/PopoverBody';
import PopoverHeader from 'react-bootstrap/PopoverHeader';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Select from 'react-select';
import IS_TOUCH_DEVICE from '@stdlib/assert/is-touch-device';
import IS_MOBILE from '@stdlib/assert/is-mobile';
import Checkbox from '@isle-project/components/input/checkbox';
import Tooltip from '@isle-project/components/tooltip';
import FeedbackButtons from '@isle-project/components/feedback';
import { isPrimitive as isNumber } from '@stdlib/assert/is-number';
import isArray from '@stdlib/assert/is-array';
import contains from '@stdlib/assert/contains';
import isObject from '@stdlib/assert/is-object';
import isNull from '@stdlib/assert/is-null';
import round from '@stdlib/math/base/special/round';
import abs from '@stdlib/math/base/special/abs';
import max from '@stdlib/math/base/special/max';
import min from '@stdlib/math/base/special/min';
import sqrt from '@stdlib/math/base/special/sqrt';
import noop from '@stdlib/utils/noop';
import omit from '@stdlib/utils/omit';
import objectKeys from '@stdlib/utils/keys';
import replace from '@stdlib/string/replace';
import generateUID from '@isle-project/utils/uid';
import saveAs from '@isle-project/utils/file-saver';
import base64toBlob from '@isle-project/utils/base64-to-blob';
import Joyride from '@isle-project/components/joyride';
import Gate from '@isle-project/components/gate';
import KeyControls from '@isle-project/components/key-controls';
import randomstring from '@isle-project/utils/randomstring/ascii';
import SessionContext from '@isle-project/session/context.js';
import curve from './curve.js';
import TooltipButton from './tooltip_button.js';
import InputButtons from './input_buttons.js';
import harmonizeSketchpadElements from './harmonize_sketchpad_elements.js';
import Loadable from '@isle-project/components/internal/loadable';
import closeHintButtons from '@isle-project/utils/close-hint-buttons';
import isElectron from '@isle-project/utils/is-electron';
import stopPropagation from '@isle-project/utils/stop-propagation';
import {
	SKETCHPAD_SAVE_PDF, SKETCHPAD_SAVE_PNG, SKETCHPAD_HIDE_POINTER,
	SKETCHPAD_HIDE_ZOOM, SKETCHPAD_CLEAR_PAGE, SKETCHPAD_CLEAR_ALL_PAGES,
	SKETCHPAD_DRAW_CURVE, SKETCHPAD_DRAW_TEXT, SKETCHPAD_DRAG_ELEMENTS,
	SKETCHPAD_INSERT_PAGE, SKETCHPAD_DELETE_ELEMENT, SKETCHPAD_FIRST_PAGE,
	SKETCHPAD_LAST_PAGE, SKETCHPAD_NEXT_PAGE, SKETCHPAD_PREVIOUS_PAGE,
	SKETCHPAD_GOTO_PAGE, SKETCHPAD_VERTICAL_SCROLL, SKETCHPAD_MOVE_POINTER,
	SKETCHPAD_MOVE_ZOOM, TOGGLE_PRESENTATION_MODE
} from '@isle-project/constants/actions.js';
import { LOGGED_IN, LOGGED_OUT, MEMBER_ACTION, RECEIVED_LESSON_INFO } from '@isle-project/constants/events.js';
import { withPropCheck } from '@isle-project/utils/prop-check';
const ResetModal = Loadable( () => import( /* webpackChunkName: "SketchpadResetModal" */ './reset_modal.js' ) );
const DeletePageModal = Loadable( () => import( /* webpackChunkName: "SketchpadDeleteModal" */ './delete_page_modal.js' ) );
const NavigationModal = Loadable( () => import( /* webpackChunkName: "SketchpadNavigationModal" */ './navigation_modal.js' ) );
const FeedbackModal = Loadable( () => import( /* webpackChunkName: "SketchpadFeedbackModal" */ './feedback_modal.js' ) );
const SaveModal = Loadable( () => import( /* webpackChunkName: "SketchpadSaveModal" */ './save_modal.js' ) );
import SketchpadContextMenu from './contextmenu.js';
import guide from './guide.json';
import './sketchpad.css';
import './pdf_viewer.css';


// VARIABLES //

const debug = logger( 'isle:sketchpad' );
const uid = generateUID( 'sketchpad' );
const OMITTED_KEYS = [
	'isExporting', 'showColorPicker', 'showUploadModal', 'showNavigationModal', 'showResetModal', 'showFeedbackModal', 'showSaveModal',
	'hideInputButtons', 'hideNavigationButtons', 'hideSaveButtons', 'hideTransmitButtons'
];
const RE_URL = /(https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&//=]*))/g;
const RE_EMAIL = /([a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,})/gi;
const MIN_SWIPE_X = 45;
const MAX_SWIPE_Y = 40;
const MIN_SWIPE_Y = 30;
const DPR = window.devicePixelRatio || 1.0;
if ( pdfjsLib && pdfjsLib.GlobalWorkerOptions ) {
	pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.13.216/pdf.worker.min.js';
}


// FUNCTIONS //

function preventGesture( e ) {
	e.preventDefault();
}

function isAlreadyInserted( pos, insertedPages ) {
	let alreadyInserted = false;
	for ( let i = 0; i < insertedPages.length; i++ ) {
		const { page } = insertedPages[ i ];
		if ( page === pos ) {
			alreadyInserted = true;
		}
	}
	return alreadyInserted;
}

function setDashedLines( ctx ) {
	ctx.setLineDash([ 2, 15 ]);
	ctx.lineWidth = 2;
	ctx.strokeStyle = 'orange';
	ctx.lineCap = 'round';
	ctx.lineJoin = 'round';
	ctx.shadowBlur = 0;
}

const Overlays = ( props ) => {
	debug( 'Rendering overlays...' );
	const keys = objectKeys( props.nodes );
	const divs = [];
	const page = props.toOriginalPage( props.currentPage );
	for ( let i = 0; i < keys.length; i++ ) {
		let node = props.nodes[ keys[ i ] ];
		let className = 'invisible-page';
		if ( keys[ i ] === String( page+1 ) ) {
			className = 'sketch-node-container';
		}
		if ( isObject( node ) && node.component ) {
			/* eslint-disable jsx-a11y/no-static-element-interactions */
			if ( node.style ) {
				if ( keys[ i ] === String( page+1 ) ) {
					className = 'sketch-node-container-basic';
				}
				divs.push( <div
					key={i} style={node.style} className={className}
					onKeyDown={stopPropagation}
				>{node.component}</div> );
			} else {
				divs.push( <div
					key={i} className={className}
					onKeyDown={stopPropagation}
				>
					{node.component}
				</div> );
			}
		} else {
			divs.push( <div
				key={i}
				className={className}
				onKeyDown={stopPropagation}
			>{node}</div> );
		}
		// eslint-enable jsx-a11y/no-static-element-interactions
	}
	return <div className="sketchpad-overlays" >{divs}</div>;
};


// MAIN //

/**
* A drawing sketchpad for note taking on lecture slides or empty pages.
*
* @property {boolean} autoSave - controls whether the editor should save the current text to the local storage of the browser at a given time interval
* @property {boolean} feedbackButtons - controls whether to display feedback buttons on each slide
* @property {number} intervalTime - time between auto saves
* @property {boolean} hideInputButtons - controls whether to hide drawing and text input buttons
* @property {boolean} hideNavigationButtons - controls whether to hide buttons for navigating between pages
* @property {boolean} hideSaveButtons - controls whether to hide the save buttons
* @property {boolean} hideTransmitButtons - controls whether to hide buttons for transmitting user actions
* @property {number} brushSize - size of the brush to paint with
* @property {string} color - color of the brush and texts
* @property {number} canvasWidth - width of the canvas element (in px)
* @property {number} canvasHeight - height of the canvas element (in px)
* @property {boolean} dynamicallyHideButtons - controls whether to start hiding buttons when toolbar width is not sufficient (otherwise a new line will be started)
* @property {boolean} fullscreen - controls whether to automatically resize the canvas to the width and height of the browser window
* @property {string} fill - if `horizontal`, fill all available horizontal space when drawing a PDF; if `vertical`, all vertical space is used to prevent y-axis overflow
* @property {boolean} disabled - whether to make the component read-only and forbid drawing on the sketchpad
* @property {string} fontFamily - font family
* @property {number} fontSize - font size
* @property {Object} nodes - components to be rendered on top of specified slides; `keys` should correspond to page numbers, `values` to the components
* @property {number} noPages - initial number of pages
* @property {string} pdf - link to PDF file for baked-in page backgrounds
* @property {boolean} showTutorial - show tutorial for the sketchpad on startup
* @property {boolean} transmitOwner - whether owner actions should be transmitted to other users in real-time
* @property {boolean} groupMode - controls whether all user's actions are transmitted to everyone else
* @property {Object} style - CSS inline styles
* @property {Function} onChange - callback invoked whenever a new line element is drawn
*/
class Sketchpad extends Component {
	constructor( props, context ) {
		super( props );

		this.force = 1.0;
		this.scaleRatio = 1.0;
		this.elements = new Array( props.noPages );
		this.backgrounds = new Array( props.noPages );
		this.sharedElements = new Array( props.noPages );
		this.nUndos = new Array( props.noPages );
		for ( let i = 0; i < props.noPages; i++ ) {
			this.elements[ i ] = [];
			this.backgrounds[ i ] = null;
			this.sharedElements[ i ] = [];
			this.nUndos[ i ] = 0;
		}
		this.hasChangedSinceLastSave = false;

		this.canvas = null;
		this.ctx = null;
		this.id = props.id || uid( props );

		const loc = !isElectron ? this.readURL() : 0;
		this.state = {
			color: props.color,
			brushSize: props.brushSize,
			currentPage: loc,
			fill: props.fill,
			fontFamily: props.fontFamily,
			fontSize: props.fontSize,
			groupMode: props.groupMode,
			hideInputButtons: props.hideInputButtons || context.presentationMode,
			hideNavigationButtons: props.hideNavigationButtons || context.presentationMode,
			hideSaveButtons: props.hideSaveButtons || context.presentationMode,
			hideTransmitButtons: props.hideTransmitButtons || context.presentationMode,
			isExporting: false,
			modalMessage: null,
			noPages: props.noPages,
			insertedPages: [],
			showUploadModal: false,
			mode: 'none',
			showNavigationModal: false,
			transmitOwner: props.transmitOwner,
			showInstructorAnnotations: true,
			receiveFrom: {},
			showDeletePageModal: false,
			showResetModal: false,
			showTutorial: props.showTutorial,
			showFeedbackModal: false,
			showSaveModal: false,
			swiping: true,
			verticalOffset: 60,
			hasRetrievedData: false
		};
		this.isMouseDown = false;
		this.leftMargin = 0;

		this.debouncedRedraw = debounce( this.redraw, 100 );
	}

	static getDerivedStateFromProps( props, state ) {
		if ( props.fullscreen ) {
			return {
				canvasHeight: window.innerHeight - state.verticalOffset,
				canvasWidth: window.innerWidth - 40
			};
		}
		if (
			state.canvasHeight !== props.canvasHeight ||
			state.canvasWidth !== props.canvasWidth
		) {
			return {
				canvasHeight: props.canvasHeight,
				canvasWidth: props.canvasWidth
			};
		}
		return null;
	}

	componentDidMount() {
		const session = this.context;

		// Scale the magnifying glass:
		if ( this.zoomCtx ) {
			this.zoomCtx.setTransform( DPR, 0, 0, DPR, 0, 0 );
		}
		// Scale all drawing operations by the DPR:
		if ( this.ctx ) {
			this.ctx.setTransform( DPR, 0, 0, DPR, 0, 0 );
		}
		if ( this.props.fullscreen ) {
			window.addEventListener( 'resize', this.handleResize );
		}
		window.addEventListener( 'unload', this.save );
		let init;
		if (
			this.props.pdf || session.metadata.store[ this.id ]
		) {
			init = this.initializePDF();
		} else {
			init = Promise.resolve();
		}
		init.then( () => {
			const promise = session.anonymous ?
				session.getSketchpadVisitorData( this.id ):
				session.getSketchpadUserData( this.id );
			promise
			.then( this.retrieveData )
			.catch( ( err ) => {
				debug( err );
			});
		});
		Pressure.set( '.sketch-canvas', {
			change: ( force ) => {
				this.force = force;
			}
		});
		if ( session ) {
			this.unsubscribe = session.subscribe( ( type, action ) => {
				if ( type === LOGGED_IN || type === LOGGED_OUT ) {
					const promise = session.anonymous ?
						session.store.getItem( this.id ):
						session.getSketchpadUserData( this.id );
					promise
						.then( this.retrieveData )
						.catch( ( err ) => {
							debug( err );
						});
				}
				if ( type === RECEIVED_LESSON_INFO ) {
					this.initializePDF();
				}
				if ( type === TOGGLE_PRESENTATION_MODE ) {
					debug( 'Hide control buttons in presentation mode...' );
					const newState = {
						hideInputButtons: session.presentationMode,
						hideNavigationButtons: session.presentationMode,
						hideSaveButtons: session.presentationMode,
						hideTransmitButtons: session.presentationMode
					};
					if ( this.props.fullscreen ) {
						newState.verticalOffset = session.presentationMode ? 30 : 60;
						newState.canvasHeight = window.innerHeight -
						newState.verticalOffset;
						newState.canvasWidth = window.innerWidth - 40;
					}
					this.setState( newState, () => {
						this.debouncedRedraw();
					});
				}
				else if ( type === MEMBER_ACTION ) {
					if ( action.id !== this.id ) {
						return;
					}
					const type = action.type;
					debug( 'Received member action of type: '+type );
					if ( action.email === session.user.email ) {
						if ( type === SKETCHPAD_MOVE_POINTER ) {
							let { x, y, sessionID } = JSON.parse( action.value );
							if ( sessionID !== session.sessionID ) {
								x *= this.canvas.width / DPR;
								y *= this.canvas.height / DPR;
								x = `${x+this.leftMargin}px`; // eslint-disable-line i18next/no-literal-string
								y = `${y}px`; // eslint-disable-line i18next/no-literal-string
								this.pointer.style.left = x;
								this.pointer.style.top = y;
								this.pointer.style.opacity = 0.7;
							}
						} else if ( type === SKETCHPAD_HIDE_POINTER ) {
							this.pointer.style.opacity = 0;
						}
						else if ( type === SKETCHPAD_MOVE_ZOOM ) {
							let { x, y, sessionID } = JSON.parse( action.value );
							if ( sessionID !== session.sessionID ) {
								x *= this.canvas.width / DPR;
								y *= this.canvas.height / DPR;
								const { width, height } = this.zoom;
								let sw = width / ( 2.0*DPR ); // Width of sub-rectangle of source image in the destination context
								let sh = height / ( 2.0*DPR ); // Height of sub-rectangle of source image in the destination context
								this.zoomCtx.clearRect( 0, 0, width, height );
								let dw = width / DPR; // Width of image in destination canvas
								let dh = height / DPR; // Height of image in destination canvas
								let sx = ( x*DPR - (sw/2) ); // x-axis of top left corner of sub-rectangle of source image
								let sy = ( y*DPR - (sh/2) ); // y-axis of top left corner of sub-rectangle of source image
								let dx = 0; // x-axis coordinate in destination canvas at which to place top-left corner of source image
								let dy = 0; // y-axis coordinate in destination canvas at which to place top-left corner of source image
								if ( sx < 0 ) {
									dx -= sx;
									sx = 0;
									dw += ( dw / sw ) * sx;
									sw += sx;
								}
								if ( sy < 0 ) {
									dy -= sy;
									sy = 0;
									dh += ( dh / sh ) * sy;
									sh += sy;
								}
								this.zoomCtx.drawImage( this.canvas, sx, sy, sw, sh, dx, dy, dw, dh );
								const xPos = `${x-sw+this.leftMargin}px`; // eslint-disable-line i18next/no-literal-string
								const yPos = `${y-sh}px`; // eslint-disable-line i18next/no-literal-string
								this.zoom.style.top = yPos;
								this.zoom.style.left = xPos;
								this.zoom.style.display = 'block';
							}
						} else if ( type === SKETCHPAD_HIDE_ZOOM ) {
							this.zoom.style.display = 'none';
						} else if ( type === SKETCHPAD_VERTICAL_SCROLL ) {
							let { diffY, sessionID } = JSON.parse( action.value );
							if ( sessionID !== session.sessionID ) {
								diffY *= this.canvas.height;
								this.canvasWrapper.scrollTop -= 0.1 * diffY;
							}
						}
					}
					// Owners should only process actions from selected users:
					if ( session.isOwner() ) {
						if (
							this.state.receiveFrom.name !== action.name &&
							!action.owner &&
							!this.state.groupMode
						) {
							return;
						}
						if ( action.email === session.user.email ) {
							if (
								type === SKETCHPAD_NEXT_PAGE ||
								type === SKETCHPAD_PREVIOUS_PAGE ||
								type === SKETCHPAD_GOTO_PAGE ||
								type === SKETCHPAD_FIRST_PAGE ||
								type === SKETCHPAD_LAST_PAGE
							) {
								debug( `Go to page ${action.value}...` );
								this.gotoPage( action.value, false );
							}
						}
					}
					if (
						type === SKETCHPAD_DRAW_TEXT ||
						type === SKETCHPAD_DRAW_CURVE
					) {
						let elem = JSON.parse( action.value );
						const elements = this.elements[ elem.page ];
						const sharedElements = this.sharedElements[ elem.page ];
						let present = false;
						if (
							elem.user === session.user.email ||
							elem.user === session.anonymousIdentifier
						) {
							for ( let i = 0; i < elements.length; i++ ) {
								if ( elements[ i ].drawID === elem.drawID ) {
									present = true;
									break;
								}
							}
						}
						if ( !present ) {
							elem.shouldLog = false;
							if (
								elem.page === this.state.currentPage &&
								this.state.showInstructorAnnotations
							) {
								if ( elem.type === 'text' ) {
									this.drawText( elem );
								} else {
									this.drawCurve( elem );
								}
							}
							if ( elem.user === session.user.email ) {
								elements.push( elem );
							} else {
								sharedElements.push( elem );
							}
							this.props.onChange( elements );
						}
					}
					else if ( type === SKETCHPAD_INSERT_PAGE ) {
						let { pos } = JSON.parse( action.value );
						if ( action.email !== session.user.email ) {
							pos = this.toLocalPage( pos, action.email );
						}
						const bool = isAlreadyInserted( pos, this.state.insertedPages );
						if ( !bool ) {
							debug( `Should insert page at ${pos}...` );
							this.insertPage( pos, action.email );
						}
					}
					else if ( type === SKETCHPAD_DELETE_ELEMENT ) {
						const { drawID, page, user, sessionID } = JSON.parse( action.value );
						debug( `Should delete element with id ${drawID} by user ${user}` );
						if ( sessionID !== session.sessionID ) {
							const elems = ( action.email === session.user.email ) ?
								this.elements[ page ] :
								this.sharedElements[ page ];
							let elemPos;
							for ( let i = 0; i < elems.length; i++ ) {
								if (
									elems[ i ].drawID === drawID &&
									elems[ i ].user === user
								) {
									elemPos = i;
									break;
								}
							}
							if ( isNumber( elemPos ) ) {
								elems.splice( elemPos, 1 );
								this.debouncedRedraw();
							}
						}
					}
					else if ( type === SKETCHPAD_DRAG_ELEMENTS ) {
						const { drawIDs, user, page, dx, dy, sessionID } = JSON.parse( action.value );
						debug( `Should drag specified elements by dx: ${dx} and dy: ${dy}...` );
						if ( sessionID !== session.sessionID ) {
							const elems = ( action.email === session.user.email ) ?
								this.elements[ page ] :
								this.sharedElements[ page ];
							for ( let i = 0; i < elems.length; i++ ) {
								const e = elems[ i ];
								if ( contains( drawIDs, e.drawID ) && e.user === user ) {
									if ( e.type === 'curve' ) {
										const points = e.points;

										// eslint-disable-next-line max-depth
										for ( let i = 0; i < points.length; i++ ) {
											points[ i ] += i % 2 === 0 ? dx : dy;
										}
									}
									else if ( e.type === 'text' ) {
										e.x += dx;
										e.y += dy;
									}
								}
							}
							this.debouncedRedraw();
						}
					}
					else if ( type === SKETCHPAD_CLEAR_PAGE ) {
						const { page, sessionID } = JSON.parse( action.value );
						const user = action.email;
						if ( sessionID !== session.sessionID ) {
							if ( user === session.user.email ) {
								// Own action, clear page:
								this.clearPage( page );
							} else {
								// Only remove all elements from the sending user on the page:
								const elems = this.sharedElements[ page ];
								const newElems = [];
								for ( let i = 0; i < elems.length; i++ ) {
									const e = elems[ i ];
									if ( e.user !== user ) {
										newElems.push( e );
									}
								}
								this.sharedElements[ page ] = newElems;
								this.debouncedRedraw();
							}
						}
					}
					else if ( type === SKETCHPAD_CLEAR_ALL_PAGES && action.value !== session.sessionID ) {
						if ( action.email === session.user.email ) {
							this.clearAll( true );
						}
						else {
							const user = action.email;
							for ( let page = 0; page < this.state.noPages; page++ ) {
								const elems = this.sharedElements[ page ];
								const newElems = [];
								for ( let i = 0; i < elems.length; i++ ) {
									const e = elems[ i ];
									if ( e.user !== user ) {
										newElems.push( e );
									}
								}
								this.sharedElements[ page ] = newElems;
							}
							this.debouncedRedraw();
						}
					}
				}
			});
		}

		if ( this.props.autoSave ) {
			this.saveInterval = setInterval( this.save, this.props.intervalTime );
		}

		// Prevent scrolling when touching the canvas on iOS:
		const opts = {
			passive: false,
			capture: true
		};
		document.addEventListener( 'touchstart', this.preventDefaultTouch, opts );
		document.addEventListener( 'touchend', this.preventDefaultTouch, opts );
		document.addEventListener( 'touchmove', this.preventDefaultTouch, opts );
		document.addEventListener( 'visibilitychange', this.handleVisibilityChange );

		if ( this.props.fullscreen ) {
			document.body.addEventListener( 'gesturestart', preventGesture );
		}
		if ( !isElectron ) {
			window.addEventListener( 'hashchange', this.handleHashChange );
		}
	}

	componentDidUpdate( prevProps ) {
		debug( 'Component did update...' );
		if ( prevProps.noPages !== this.props.noPages ) {
			this.elements = new Array( this.props.noPages );
			this.backgrounds = new Array( this.props.noPages );
			this.sharedElements = new Array( this.props.noPages );
			this.nUndos = new Array( this.props.noPages );
			for ( let i = 0; i < this.props.noPages; i++ ) {
				this.elements[ i ] = [];
				this.backgrounds[ i ] = null;
				this.sharedElements[ i ] = [];
				this.nUndos[ i ] = 0;
			}
			this.setState({
				noPages: this.props.noPages
			}, () => {
				this.debouncedRedraw();
			});
		}
		if ( prevProps.pdf !== this.props.pdf ) {
			this.initializePDF();
		}
		if (
			this.props.canvasWidth !== prevProps.canvasWidth ||
			this.props.canvasHeight !== prevProps.canvasHeight
		) {
			this.debouncedRedraw();
		}
		if (
			this.props.fill !== prevProps.fill
		) {
			this.setState({
				fill: this.props.fill
			}, this.redraw );
		}
	}

	componentWillUnmount() {
		this.save();
		if ( this.saveInterval ) {
			clearInterval( this.saveInterval );
		}
		if ( this.unsubscribe ) {
			this.unsubscribe();
		}
		window.removeEventListener( 'resize', this.handleResize );
		if ( !isElectron ) {
			window.removeEventListener( 'hashchange', this.handleHashChange );
		}
		window.removeEventListener( 'unload', this.save );
		const opts = {
			passive: false
		};
		document.removeEventListener( 'touchstart', this.preventDefaultTouch, opts );
		document.removeEventListener( 'touchend', this.preventDefaultTouch, opts );
		document.removeEventListener( 'touchmove', this.preventDefaultTouch, opts );
		document.removeEventListener( 'visibilitychange', this.handleVisibilityChange, opts );
		if ( this.props.fullscreen ) {
			document.removeEventListener( 'gesturestart', preventGesture );
		}
	}

	handleHashChange = () => {
		const page = this.readURL();
		if ( page > 0 ) {
			this.gotoPage( page );
		}
	};

	handleResize = () => {
		this.setState({
			canvasHeight: window.innerHeight - this.state.verticalOffset,
			canvasWidth: window.innerWidth - 40
		}, () => {
			this.debouncedRedraw();
		});
	};

	retrieveData = ( data ) => {
		debug( 'Retrieved data from previous session...' );
		if ( isObject( data ) ) {
			if ( isArray( data.elements ) ) {
				for ( let i = 0; i < data.elements.length; i++ ) {
					this.elements[ i ] = data.elements[ i ];
				}
			}
			if ( isArray( data.nUndos ) ) {
				for ( let i = 0; i < data.nUndos.length; i++ ) {
					this.nUndos[ i ] = data.nUndos[ i ];
				}
			}
			if ( isArray( data.sharedElements ) ) {
				for ( let i = 0; i < data.sharedElements.length; i++ ) {
					this.sharedElements[ i ] = data.sharedElements[ i ];
				}
				const session = this.context;
				if ( session.anonymous ) {
					// Case: Harmonization not already done on server for anonymous users
					harmonizeSketchpadElements(
						this.elements, this.nUndos,
						this.state.insertedPages, data.state.insertedPages
					);
				}
			} else {
				this.sharedElements = new Array( data.elements.length ).fill( [] );
			}
			for ( let i = 0; i < data.state.insertedPages.length; i++ ) {
				// Insert empty pages at the correct locations:
				const { page } = data.state.insertedPages[ i ];
				this.backgrounds.splice( page, 0, null );
			}
			const page = !isElectron ? this.readURL() : 0;
			debug( 'Go to page '+page );
			data.state.currentPage = page;
			data.state.noPages = this.backgrounds.length;
			data.state = omit( data.state, OMITTED_KEYS );
			data.state.hasRetrievedData = true;
			this.setState( data.state, () => {
				this.debouncedRedraw();
			});
		} else {
			this.setState({
				hasRetrievedData: true
			}, () => {
				this.debouncedRedraw();
			});
		}
	};

	toggleGroupMode = () => {
		this.setState({
			groupMode: !this.state.groupMode
		});
	};

	hidePointer = () => {
		const action = {
			id: this.id,
			type: SKETCHPAD_HIDE_POINTER,
			value: true,
			noSave: true
		};
		const session = this.context;
		session.log( action, 'members' );
		this.pointer.style.opacity = 0;
	};

	hideZoom = () => {
		const action = {
			id: this.id,
			type: SKETCHPAD_HIDE_ZOOM,
			value: true,
			noSave: true
		};
		const session = this.context;
		session.log( action, 'members' );
		this.zoom.style.display = 'none';
	};

	preventDefaultTouch = ( e ) => {
		if (
			e.target === this.canvas ||
			e.target === this.textLayer ||
			e.target === this.canvasWrapper
		) {
			e.preventDefault();
		}
	};

	handleVisibilityChange = () => {
		if ( !document.hidden ) {
			this.debouncedRedraw();
		}
	};

	renderBackground = ( pageNumber ) => {
		/* eslint-disable i18next/no-literal-string */
		if ( this.renderingTask ) {
			this.renderingTask.cancel();
		}
		const canvas = this.canvas;
		const ctx = this.ctx;

		const page = this.backgrounds[ pageNumber ];
		if ( page ) {
			debug( `Found background for page ${pageNumber}...` );
			let ratio;
			const vp1 = page.getViewport({ scale: 1.0, rotation: 0, dontFlip: false });
			const fill = this.state.fill || ( vp1.width > vp1.height ? 'vertical' : 'horizontal' );
			if ( fill === 'vertical' ) {
				ratio = this.state.canvasHeight / vp1.height;
			} else {
				ratio = this.state.canvasWidth / vp1.width;
			}
			const viewport = page.getViewport({ scale: ratio, rotation: 0, dontFlip: false });
			const textLayer = this.textLayer;
			while ( textLayer.firstChild ) {
				textLayer.removeChild( textLayer.firstChild );
			}
			if ( fill === 'vertical' ) {
				this.canvas.height = viewport.height * DPR;
				this.canvas.width = viewport.width * DPR;
				this.canvas.style.left = `${( this.state.canvasWidth - viewport.width ) / 2.0}px`;
				this.canvas.style[ 'border-style' ] = 'solid';
				this.canvas.style[ 'border-color' ] = 'black';
				this.canvas.style[ 'border-width' ] = '0px 1px 0px 1px';
				this.canvas.style.width = `${viewport.width}px`;
				this.canvas.style.height = `${viewport.height}px`;
				textLayer.style.width = `${viewport.width}px`;
				textLayer.style.height = `${viewport.height}px`;
				this.leftMargin = ( this.state.canvasWidth - viewport.width ) / 2.0;
				textLayer.style.left = `${this.leftMargin}px`;
			} else {
				this.canvas.height = viewport.height * DPR;
				this.canvas.width = ( viewport.width - 15 ) * DPR; // account for vertical scrollbar
				this.canvas.style.left = '0px';
				this.canvas.style.border = 'none';
				this.canvas.style.height = `${viewport.height}px`;
				this.canvas.style.width = `${viewport.width - 15}px`;
				textLayer.style.width = `${viewport.width-15}px`;
				textLayer.style.height = `${viewport.height}px`;
				this.leftMargin = 0;
				textLayer.style.left = '0px';
			}

			const diagonalRes = sqrt( this.canvas.width * this.canvas.width + this.canvas.height * this.canvas.height );
			this.scaleRatio = diagonalRes / ( DPR * 1768 );

			// Scale all drawing operations by the DPR:
			this.ctx.setTransform( DPR, 0, 0, DPR, 0, 0 );

			// Render PDF page into canvas context
			const renderContext = {
				canvasContext: this.ctx,
				viewport: viewport
			};

			page.getTextContent().then( textContent => {
				pdfjsLib.renderTextLayer({
					textContent,
					container: textLayer,
					viewport,
					textDivs: []
				}).promise.then(() => {
					const innerHTML = textLayer.innerHTML;
					let html = replace( innerHTML, RE_URL, '<a href="$1">$1</a>' );
					html = replace( html, RE_EMAIL, '<a href="mailto:$1">$1</a>' );
					textLayer.innerHTML = html;
				});
			});
			this.renderingTask = page.render( renderContext );
			return this.renderingTask.promise
			.then( () => {
				this.backgroundData = this.ctx.getImageData( 0, 0, this.canvas.width, this.canvas.height );
				debug( `Background rendered for page ${pageNumber}` );
			})
			.catch( ( err ) => {
				debug( 'Encountered error in `renderBackground`: '+err.message );
			});
		}

		// Reset background data for inserted slides:
		this.backgroundData = null;
		if ( ctx ) {
			if ( !this.props.pdf ) {
				// Scale all drawing operations by the DPR when no background is present:
				ctx.setTransform( DPR, 0, 0, DPR, 0, 0 );
			}
			ctx.clearRect( 0, 0, canvas.width, canvas.height );
		}
		// Return promise that immediately resolves as no background needs to be drawn:
		return Promise.resolve();
		/* eslint-enable i18next/no-literal-string */
	};

	redraw = () => {
		const currentPage = this.state.currentPage;

		debug( `Redrawing page ${currentPage+1}` );
		const nUndos = this.nUndos[ currentPage ];
		this.renderBackground( currentPage )
			.then( () => {
				let elems = this.sharedElements[ currentPage ];
				if ( this.state.showInstructorAnnotations ) {
					debug( `Rendering ${elems.length} shared elements on page ${currentPage}...` );
					for ( let i = 0; i < elems.length; i++ ) {
						this.drawElement( elems[ i ] );
					}
				}
				elems = this.elements[ currentPage ];
				debug( `Rendering ${elems.length} own elements on page ${currentPage}...` );
				for ( let i = 0; i < elems.length - nUndos; i++ ) {
					this.drawElement( elems[ i ] );
				}
				this.renderingTask = null;
			})
			.catch( ( err ) => {
				this.renderingTask = null;
			});
	};

	onlyRedrawElements = () => {
		if ( this.backgroundData ) {
			this.ctx.putImageData( this.backgroundData, 0, 0 );
		} else {
			this.ctx.clearRect( 0, 0, this.canvas.width, this.canvas.height );
		}
		const currentPage = this.state.currentPage;
		let elems = this.sharedElements[ currentPage ];
		if ( this.state.showInstructorAnnotations ) {
			debug( `Rendering ${elems.length} shared elements on page ${currentPage}...` );
			for ( let i = 0; i < elems.length; i++ ) {
				this.drawElement( elems[ i ] );
			}
		}

		elems = this.elements[ currentPage ];
		debug( `Rendering ${elems.length} own elements on page ${currentPage}...` );
		const nUndos = this.nUndos[ currentPage ];
		for ( let i = 0; i < elems.length - nUndos; i++ ) {
			this.drawElement( elems[ i ] );
		}
	};

	redrawWhenDragging = () => {
		if ( !this.canvasBuffer ) {
			// Canvas to temporarily store data:
			this.canvasBuffer = document.createElement( 'canvas' );
			this.canvasBuffer.width = this.canvas.width;
			this.canvasBuffer.height = this.canvas.height;
			debug( 'Prepare data for non-dragged elements...' );
			if ( this.backgroundData ) {
				this.ctx.putImageData( this.backgroundData, 0, 0 );
			} else {
				this.ctx.fillStyle = 'white';
				this.ctx.fillRect( 0, 0, this.canvas.width, this.canvas.height );
			}
			const currentPage = this.state.currentPage;
			let elems = this.sharedElements[ currentPage ];
			if ( this.state.showInstructorAnnotations ) {
				debug( `Rendering ${elems.length} shared elements on page ${currentPage}...` );
				for ( let i = 0; i < elems.length; i++ ) {
					this.drawElement( elems[ i ] );
				}
			}

			elems = this.elements[ currentPage ];
			debug( `Rendering ${elems.length} own elements on page ${currentPage}...` );
			const nUndos = this.nUndos[ currentPage ];
			for ( let i = 0; i < elems.length - nUndos; i++ ) {
				if ( !this.selectedElements || !contains( this.selectedElements, elems[ i ] ) ) {
					this.drawElement( elems[ i ] );
				}
			}
			const bufferContext = this.canvasBuffer.getContext( '2d' );
			bufferContext.imageSmoothingEnabled = false;
			bufferContext.drawImage( this.canvas, 0, 0, this.canvas.width / DPR, this.canvas.height / DPR );
		}
		this.ctx.drawImage( this.canvasBuffer, 0, 0 );
		const selected = this.selectedElements;
		if ( selected ) {
			for ( let i = 0; i < selected.length; i++ ) {
				this.drawElement( selected[ i ] );
			}
		}
		const ctx = this.ctx;
		ctx.beginPath();
		setDashedLines( ctx );
		if ( this.dragPoints ) {
			for ( let i = 0; i < this.dragPoints.length; i += 2 ) {
				const x = this.dragPoints[ i ];
				const y = this.dragPoints[ i+1 ];
				this.ctx.lineTo( x, y );
			}
		}
		ctx.stroke();
		ctx.closePath();
		ctx.setLineDash( [] );
	};

	drawPage = ( idx ) => {
		const ctx = this.ctx;
		const canvas = this.canvas;
		if ( ctx ) {
			ctx.clearRect( 0, 0, canvas.width, canvas.height );
		}
		this.renderBackground( idx );
		let elems = this.sharedElements[ idx ];
		if ( this.state.showInstructorAnnotations ) {
			for ( let i = 0; i < elems.length; i++ ) {
				this.drawElement( elems[ i ] );
			}
		}
		elems = this.elements[ idx ];
		const nUndos = this.nUndos[ idx ];
		for ( let i = 0; i < elems.length - nUndos; i++ ) {
			this.drawElement( elems[ i ] );
		}
	};

	mousePosition = ( evt ) => {
		let clientX = evt.clientX;
		let clientY = evt.clientY;

		// Use first touch if available:
		if ( evt.touches && evt.touches.length > 0 ) {
			clientX = evt.touches[ 0 ].clientX;
			clientY = evt.touches[ 0 ].clientY;
		}
		// Return position inside of the canvas element:
		const rect = this.canvas.getBoundingClientRect();
		return {
			x: clientX - rect.left,
			y: clientY - rect.top
		};
	};

	clearPage = ( selectedPage ) => {
		if ( isAlreadyInserted( selectedPage, this.state.insertedPages ) ) {
			debug( 'Clear an inserted page; deleting it completely...' );
			this.elements.splice( selectedPage, 1 );
			this.backgrounds.splice( selectedPage, 1 );
			this.nUndos.splice( selectedPage, 1 );
			this.sharedElements.splice( selectedPage, 1 );
			const newInsertedPages = [];
			for ( let i = 0; i < this.state.insertedPages.length; i++ ) {
				const val = this.state.insertedPages[ i ];
				if ( selectedPage !== val.page ) {
					if ( val.page > selectedPage ) {
						val.page -= 1;
					}
					newInsertedPages.push( val );
				}
			}
			debug( 'New inserted pages are: '+newInsertedPages.join( ', ' ) );
			this.setState({
				noPages: this.state.noPages - 1,
				insertedPages: newInsertedPages,
				selectedPage: this.state.selectedPage - 1
			}, () => {
				this.debouncedRedraw();
			});
		}
		else {
			this.elements[ selectedPage ] = [];
			this.debouncedRedraw();
		}
	};

	clear = () => {
		const currentPage = this.state.currentPage;
		this.clearPage( currentPage );
		const session = this.context;
		const logAction = {
			id: this.id,
			type: SKETCHPAD_CLEAR_PAGE,
			value: JSON.stringify({
				page: currentPage,
				sessionID: session.sessionID
			})
		};
		this.hasChangedSinceLastSave = true;
		if (
			session.isOwner() && this.state.transmitOwner
		) {
			session.log( logAction, 'members' );
		} else {
			session.log( logAction, 'owners' );
		}
	};

	clearAll = ( silent = false ) => {
		const session = this.context;
		const canvas = this.canvas;
		const ctx = this.ctx;
		if ( ctx ) {
			ctx.clearRect( 0, 0, canvas.width, canvas.height );
		}
		session.store.removeItem( this.id + '_sketchpad' );
		if ( this.props.pdf ) {
			this.initializePDF().then( () => {
				this.debouncedRedraw();
				this.setState({
					insertedPages: []
				});
			});
		} else {
			const noPages = this.props.noPages;
			this.elements = new Array( noPages );
			this.backgrounds = new Array( noPages );
			this.sharedElements = new Array( noPages );
			this.nUndos = new Array( noPages );
			for ( let i = 0; i < noPages; i++ ) {
				this.elements[ i ] = [];
				this.sharedElements[ i ] = [];
				this.backgrounds[ i ] = null;
				this.nUndos[ i ] = 0;
			}
			this.setState({
				currentPage: 0,
				noPages: noPages,
				insertedPages: []
			});
		}
		const logAction = {
			id: this.id,
			type: SKETCHPAD_CLEAR_ALL_PAGES,
			value: session.sessionID
		};
		if ( !silent ) {
			this.hasChangedSinceLastSave = true;
			if (
				session.isOwner() && this.state.transmitOwner
			) {
				session.log( logAction, 'members' );
			} else {
				session.log( logAction, 'owners' );
			}
		}
	};

	undo = () => {
		const currentPage = this.state.currentPage;
		const elems = this.elements[ currentPage ];
		const sharedElems = this.sharedElements[ currentPage ];
		let nUndos = this.nUndos[ currentPage ];
		const ctx = this.ctx;
		const canvas = this.canvas;
		if ( ctx ) {
			ctx.clearRect( 0, 0, canvas.width, canvas.height );
		}
		this.renderBackground( currentPage )
			.then( () => {
				nUndos += 1;
				let count = -1;
				let end = elems.length - 1;
				for ( let i = end; i >= 0; i-- ) {
					count += 1;
					if ( count === nUndos ) {
						end = i;
						break;
					} else if ( i === 0 ) {
						nUndos = count + 1;
						end = null;
					}
				}
				debug( 'Current number of undos: '+nUndos );
				this.nUndos[ currentPage ] = nUndos;
				this.hasChangedSinceLastSave = true;
				if ( !isNull( end ) ) {
					debug( `UNDO: Redrawing elements 0 to ${end} out of ${elems.length} elements` );
					for ( let i = 0; i <= end; i++ ) {
						this.drawElement( elems[ i ] );
					}
				}
				for ( let i = 0; i < sharedElems.length; i++ ) {
					this.drawElement( sharedElems[ i ] );
				}
			});
	};

	redo = () => {
		const currentPage = this.state.currentPage;
		const elems = this.elements[ currentPage ];
		const sharedElems = this.sharedElements[ currentPage ];
		let nUndos = this.nUndos[ currentPage ];
		if ( nUndos > 0 ) {
			const idx = min( elems.length - nUndos, 0 );
			debug( 'Line index: '+idx );
			if ( idx >= 0 ) {
				let count = -1;
				let end = elems.length - 1;
				nUndos -= 1;
				for ( let i = end; i >= 0; i-- ) {
					count += 1;
					if ( count === nUndos ) {
						end = i;
						break;
					}
				}
				debug( `REDO: Redrawing elements ${idx} to ${end} out of ${elems.length} elements` );
				for ( let i = idx; i <= end; i++ ) {
					this.drawElement( elems[ i ] );
				}
				this.nUndos[ currentPage ] = nUndos;
				for ( let i = 0; i < sharedElems.length; i++ ) {
					this.drawElement( sharedElems[ i ] );
				}
				this.hasChangedSinceLastSave = true;
			}
		}
	};

	drawElement = ( elem ) => {
		if ( elem ) {
			if ( elem.type === 'line' ) {
				this.drawLine( elem );
			}
			else if ( elem.type === 'text' ) {
				this.drawText( elem );
			}
			else if ( elem.type === 'curve' ) {
				this.drawCurve( elem );
			}
		}
	};

	drawLine = ({ startX, startY, endX, endY, color, lineWidth, selected }) => {
		const ctx = this.ctx;
		if ( ctx ) {
			ctx.lineWidth = lineWidth * this.scaleRatio;
			ctx.lineCap = 'round';
			ctx.lineJoin = 'round';
			ctx.shadowBlur = ctx.lineWidth * 1.5;
			ctx.strokeStyle = selected ? 'orange' : color;
			ctx.beginPath();
			ctx.moveTo( startX, startY );
			ctx.lineTo( endX, endY );
			ctx.stroke();
			ctx.closePath();
		}
	};

	drawCurve = ({ points, color, lineWidth, selected }) => {
		const ctx = this.ctx;
		if ( ctx ) {
			ctx.lineWidth = lineWidth * this.scaleRatio;
			ctx.lineCap = 'round';
			ctx.lineJoin = 'round';
			if ( !selected ) {
				ctx.shadowColor = 'rgba(128, 128, 128, 0.2)';
				ctx.shadowBlur = ctx.lineWidth * 2.0;
				ctx.strokeStyle = color;
				ctx.beginPath();
				curve( ctx, points, this.canvas.width / DPR, this.canvas.height / DPR );
				ctx.stroke();
				ctx.closePath();
			} else {
				ctx.strokeStyle = 'orange';
				ctx.beginPath();
				curve( ctx, points, this.canvas.width / DPR, this.canvas.height / DPR, 0.9, 1 );
				ctx.stroke();
				ctx.closePath();
			}
		}
	};

	drawStart = ( event ) => {
		event.stopPropagation();
		debug( '`onMouseDown` or `onTouchStart` event fired...' );
		if ( event.touches && event.touches.length > 1 ) {
			this.swipeStartX = event.touches[ 0 ].screenX;
			this.swipeStartY = event.touches[ 0 ].screenY;
			return;
		}
		const { x, y } = this.mousePosition( event );
		this.currentPoints = [];
		this.x = x;
		this.y = y;
		this.isMouseDown = true;
		this.imageData = this.ctx.getImageData( 0, 0, this.canvas.width, this.canvas.height );
		if ( this.state.mode === 'drawing' ) {
			const currentPage = this.state.currentPage;
			const nUndos = this.nUndos[ currentPage ];
			if ( nUndos > 0 ) {
				const elems = this.elements[ currentPage ];
				elems.splice( elems.length-nUndos );
				debug( `Page ${currentPage} now has ${elems.length} elements`);
				this.nUndos[ currentPage ] = 0;
				this.hasChangedSinceLastSave = true;
			}
			this.draw( event );
		} else if ( this.state.mode === 'drag' ) {
			const ctx = this.ctx;
			if ( !ctx.isPointInPath( x*DPR, y*DPR ) ) {
				this.deselectElements();
				this.onlyRedrawElements();
			}
			ctx.beginPath();
			this.draw( event );
		} else if ( IS_TOUCH_DEVICE ) {
			this.handleClick( event );
		}
	};

	drawEnd = ( event ) => {
		event.stopPropagation();
		if (
			abs( this.swipeEndX - this.swipeStartX ) > MIN_SWIPE_X &&
			abs( this.swipeEndY - this.swipeStartY ) < MAX_SWIPE_Y
		) {
			if ( this.swipeEndX > this.swipeStartX ) {
				this.previousPage();
			} else {
				this.nextPage();
			}
			this.swipeEndX = 0;
			this.swipeEndY = 0;
			this.swipeStartX = 0;
			this.swipeStartY = 0;
			this.isMouseDown = false;
			return;
		}
		if ( this.state.mode === 'drawing' && this.isMouseDown ) {
			const elems = this.elements[ this.state.currentPage ];

			const session = this.context;
			const username = session.user.email || session.anonymousIdentifier;

			// Save smoothed points & convert to relative coordinates:
			const points = this.currentPoints;
			const { width, height } = this.canvas;
			points[ 0 ] /= ( width / DPR );
			points[ 1 ] /= ( height / DPR );
			for ( let i = 2; i < points.length - 2; i += 2 ) {
				const c = ( points[i] + points[i+2] ) / 2;
				const d = ( points[i+1] + points[i+3] ) / 2;
				points[ i ] = c / ( width / DPR );
				points[ i+1 ] = d / ( height / DPR );
			}
			points[ points.length-2 ] /= ( width / DPR );
			points[ points.length-1 ] /= ( height / DPR );

			const line = {
				points: points,
				color: this.state.color,
				lineWidth: this.state.brushSize * ( 1.0 + this.force ) * 0.5,
				page: this.state.currentPage,
				time: this.time,
				type: 'curve',
				drawID: randomstring( 6 ),
				user: username
			};
			elems.push( line );
			this.props.onChange( elems );

			// Restore image before line and redraw smoothed version:
			this.ctx.putImageData( this.imageData, 0, 0 );
			this.drawCurve( line );

			const logAction = {
				id: this.id,
				type: SKETCHPAD_DRAW_CURVE,
				value: JSON.stringify( line ),
				noSave: true
			};
			this.hasChangedSinceLastSave = true;
			if (
				this.state.groupMode ||
				session.isOwner() && this.state.transmitOwner
			) {
				session.log( logAction, 'members' );
			} else {
				session.log( logAction, 'owners' );
			}
			this.currentPoints = [];
		}
		else if ( this.state.mode === 'drag' && this.isMouseDown ) {
			this.ctx.stroke();
			this.ctx.closePath();
			this.ctx.setLineDash( [] );
			if ( !this.selectedElements ) {
				debug( 'Select elements...' );
				const elems = this.elements[ this.state.currentPage ];
				const nUndos = this.nUndos[ this.state.currentPage ];
				this.selectedElements = null;
				const selected = [];
				for ( let i = 0; i < elems.length - nUndos; i++ ) {
					const elem = elems[ i ];
					elem.selected = false;
					const points = elem.points;
					if ( points ) {
						for ( let j = 0, l = points.length; j < l; j += 2 ) {
							const x = points[ j ] * this.canvas.width;
							const y = points[ j+1 ] * this.canvas.height;
							if ( this.ctx.isPointInPath( x, y ) ) {
								elem.selected = true;
								selected.push( elem );
								break;
							}
						}
					} else if (
						elem.x && elem.y &&
						this.ctx.isPointInPath( elem.x * this.canvas.width, elem.y * this.canvas.height )
					) {
						elem.selected = true;
						selected.push( elem );
					}
				}
				if ( selected.length > 0 ) {
					this.selectedElements = selected;
					this.dragPoints = this.currentPoints;
				}
			}
			this.redrawWhenDragging();
		}
		this.isMouseDown = false;
	};

	draw = ( evt ) => {
		evt.stopPropagation();
		if ( this.state.swiping && evt.touches && evt.touches.length > 1 ) {
			this.swipeEndX = evt.touches[ 0 ].screenX;
			this.swipeEndY = evt.touches[ 0 ].screenY;
			this.isMouseDown = false;
			const diffY = this.swipeEndY - this.swipeStartY;
			this.verticalScroll( diffY );
			return;
		}
		const session = this.context;
		let { x, y } = this.mousePosition( evt );
		if ( this.state.mode === 'drag' && this.selectedElements && this.isMouseDown ) {
			debug( 'Drag elements around...' );
			const dx = ( x - this.x ) / ( this.canvas.width / DPR );
			const dy = ( y - this.y ) / ( this.canvas.height / DPR );
			const selected = this.selectedElements;
			for ( let i = 0; i < selected.length; i++ ) {
				const e = selected[ i ];
				if ( e.type === 'curve' ) {
					const points = e.points;
					for ( let i = 0; i < points.length; i++ ) {
						points[ i ] += i % 2 === 0 ? dx : dy;
					}
				}
				else if ( e.type === 'text' ) {
					e.x += dx;
					e.y += dy;
				}
			}
			for ( let i = 0; i < this.dragPoints.length; i += 2 ) {
				this.dragPoints[ i ] += ( x - this.x );
				this.dragPoints[ i+1 ] += ( y - this.y );
			}
			const username = session.user.email || session.anonymousIdentifier;
			const action = {
				id: this.id,
				type: SKETCHPAD_DRAG_ELEMENTS,
				value: JSON.stringify({
					dx: dx,
					dy: dy,
					page: this.state.currentPage,
					drawIDs: selected.map( x => x.drawID ),
					user: username,
					sessionID: session.sessionID
				}),
				noSave: true
			};
			this.hasChangedSinceLastSave = true;
			if ( session.isOwner() || this.state.groupMode ) {
				session.log( action, 'members' );
			} else {
				session.log( action );
			}
			this.x = x;
			this.y = y;
			return this.redrawWhenDragging();
		}
		if ( this.isMouseDown && !this.props.disabled ) {
			if ( this.state.mode === 'delete' ) {
				debug( 'Check whether to delete element...' );
				return this.checkDeletion( evt );
			}
			this.currentPoints.push( x );
			this.currentPoints.push( y );
			if ( this.state.mode === 'drawing' ) {
				const line = {
					color: this.state.color,
					lineWidth: this.state.brushSize * ( 1.0 + this.force ) * 0.5,
					startX: this.x,
					startY: this.y,
					endX: x,
					endY: y,
					shadow: 0,
					type: 'line'
				};
				this.drawElement( line );
			}
			else if ( this.state.mode === 'drag' && !this.selectedElements ) {
				setDashedLines( this.ctx );
				this.ctx.lineTo( x, y );
				this.ctx.stroke();
			}
			// Set to current coordinates:
			this.x = x;
			this.y = y;
		}
	};

	toggleTransmit = () => {
		this.setState({
			transmitOwner: !this.state.transmitOwner
		});
	};

	deselectElements() {
		// Deselect elements when clicked outside selection path:
		debug( 'Deselect elements...' );
		const elems = this.selectedElements;
		if ( elems ) {
			for ( let i = 0; i < elems.length; i++ ) {
				elems[ i ].selected = false;
			}
		}
		this.selectedElements = null;
		this.dragPoints = null;
		this.canvasBuffer = null;
	}

	uploadSketches = () => {
		this.setState({
			isExporting: true
		}, () => {
			this.preparePDF( ( err, doc ) => {
				const session = this.context;
				doc.getBase64( ( pdf ) => {
					debug( 'Processing base64 string of PDF document' );
					const pdfForm = new FormData();
					const name = this.id;
					const filename = name + '.pdf';
					const pdfBlob = base64toBlob( pdf, 'application/pdf' );
					const pdfFile = new File([ pdfBlob ], filename, {
						type: 'application/pdf'
					});
					pdfForm.append( 'file', pdfFile );
					const onUpload = ( err, res ) => {
						if ( err ) {
							this.setState({
								isExporting: false,
								showUploadModal: true,
								modalMessage: err.message
							});
						} else {
							const filename = res.filename;
							const link = session.server + '/' + filename;
							this.setState({
								isExporting: false,
								showUploadModal: true,
								modalMessage: <span>
									{this.props.t('upload-successful')}: <a href={link} target="_blank" rel="noopener noreferrer" >{link}</a>
								</span>
							});
							const msg = {
								text: `${this.props.t('upload-email', { name: session.user.name })}<a href="${link}">${link}</a>.`,
								subject: this.props.t('pdf-uploaded')
							};
							session.sendMail( msg, session.user.email );
						}
					};
					session.uploadFile({
						formData: pdfForm,
						callback: onUpload
					});
				});
			});
		});
	};

	saveAsPNG = () => {
		const current = this.state.currentPage;
		const name = this.id+'_'+(current+1)+'.png';
		const canvas = this.canvas;
		if ( !this.backgrounds[ current ]) {
			// Set white background if none present:
			this.ctx.fillStyle = 'white';
			this.ctx.fillRect( 0, 0, canvas.width, canvas.height );
		}
		const session = this.context;
		session.log({
			id: this.id,
			type: SKETCHPAD_SAVE_PNG,
			value: current + 1
		});
		canvas.toBlob( function onBlob( blob ) {
			saveAs( blob, name );
		});
	};

	preparePDF = ( clbk = noop ) => {
		debug( 'Assembling PDF document object...' );
		const docDefinition = {
			content: [],
			pageSize: {
				width: this.canvas.width, // peek at first page and assume it's consistent over all pages
				height: this.canvas.height
			},
			pageMargins: [ 0, 0, 0, 0 ]
		};
		let idx = 0;
		const iter = () => {
			debug( `Creating page ${idx+1}` );
			this.renderBackground( idx ).then( () => {
				let elems = this.sharedElements[ idx ];
				if ( elems && elems.length > 0 ) {
					for ( let i = 0; i < elems.length; i++ ) {
						this.drawElement( elems[ i ] );
					}
				}
				elems = this.elements[ idx ];
				const nUndos = this.nUndos[ idx ];
				if ( elems && elems.length > 0 ) {
					const len = elems.length - nUndos;
					debug( `Rendering ${elems.length} elements on page ${idx}...` );
					for ( let i = 0; i < len; i++ ) {
						this.drawElement( elems[ i ] );
					}
				}
				const data = this.canvas.toDataURL();
				docDefinition.content.push({
					image: data,
					width: this.canvas.width
				});
				idx += 1;
				if ( idx < this.state.noPages ) {
					iter();
				} else {
					debug( 'Creating PDF...' );
					return clbk( null, pdfMake.createPdf( docDefinition ) );
				}
			});
		};

		// Start rendering pages one by one:
		iter();
	};

	toggleSaveModal = () => {
		this.setState({ showSaveModal: !this.state.showSaveModal });
	};

	saveAsPDF = () => {
		const session = this.context;
		this.setState({
			isExporting: true
		}, () => {
			this.preparePDF( ( err, doc ) => {
				const name = this.id;
				session.log({
					id: this.id,
					type: SKETCHPAD_SAVE_PDF,
					value: 'all-annotations'
				});
				doc.download( name+'.pdf', () => {
					this.setState({
						isExporting: false
					});
					this.debouncedRedraw();
				});
			});
		});
	};

	insertPage = ( idx, from ) => {
		if ( this.state.mode === 'text' ) {
			this.insertTextFromInput();
		}
		this.elements.splice( idx, 0, []);
		this.backgrounds.splice( idx, 0, null );
		this.sharedElements.splice( idx, 0, 0 );
		this.nUndos.splice( idx, 0, 0 );
		const textLayer = document.querySelector( '.textLayer' );
		while ( textLayer.firstChild ) {
			textLayer.removeChild( textLayer.firstChild );
		}
		const session = this.context;
		const newInsertedPages = this.state.insertedPages;
		newInsertedPages.push({
			page: idx,
			email: from || session.user.email
		});
		this.setState({
			noPages: this.state.noPages + 1,
			currentPage: idx,
			insertedPages: newInsertedPages
		}, () => {
			// Update hash of URL:
			this.updateURL( this.state.currentPage );
			this.debouncedRedraw();
			if ( !from ) {
				this.hasChangedSinceLastSave = true;
				session.log({
					id: this.id,
					type: SKETCHPAD_INSERT_PAGE,
					value: JSON.stringify({
						pos: idx
					})
				}, session.isOwner() ? 'members' : session.user.email );
			}
		});
	};

	insertTextFromInput = () => {
		const x = parseInt( this.textInput.style.left, 10 ) - this.leftMargin;
		const y = parseInt( this.textInput.style.top, 10 ) - ( this.state.fontSize * 1.2 );
		const value = this.textInput.value;
		this.textInput.value = '';
		this.textInput.style.top = String( parseInt( this.textInput.style.top, 10 ) + ( this.state.fontSize * 1.2 ) ) + 'px';
		const session = this.context;
		const username = session.user.email || session.anonymousIdentifier;
		const currentPage = this.state.currentPage;
		const text = {
			value: value,
			x: x / ( this.canvas.width / DPR ),
			y: y / ( this.canvas.height / DPR ),
			color: this.state.color,
			fontSize: this.state.fontSize,
			fontFamily: this.state.fontFamily,
			time: this.time,
			type: 'text',
			page: currentPage,
			user: username,
			drawID: randomstring( 6 )
		};
		this.drawText( text );
		const elems = this.elements[ currentPage ];
		const nUndos = this.nUndos[ currentPage ];
		if ( nUndos > 0 ) {
			elems.splice( elems.length-nUndos );
			debug( `Page ${currentPage} now has ${elems.length} elements` );
			this.nUndos[ currentPage ] = 0;
		}
		// Prevent future logging when redrawing element:
		text.shouldLog = false;
		elems.push( text );
		this.props.onChange( elems );
	};

	handleEnter = ( event ) => {
		debug( 'Check if user hit ENTER...' );
		if ( event.keyCode === 13 ) {
			this.insertTextFromInput();
		}
	};

	drawText = ({ x, y, value, color, drawID, user, fontSize, fontFamily, selected, shouldLog = true }) => {
		const ctx = this.ctx;
		ctx.font = `${fontSize}px ${fontFamily}`; // eslint-disable-line i18next/no-literal-string
		ctx.shadowBlur = 0;
		ctx.fillStyle = selected ? 'orange' : color;
		const xval = round( x*(this.canvas.width/DPR) );
		const yval = round( y*(this.canvas.height/DPR) ) + fontSize;
		debug( `Draw text at x: ${xval} and y: ${yval}` );
		ctx.fillText( value, xval, yval );
		const session = this.context;
		if ( shouldLog ) {
			const logAction = {
				id: this.id,
				type: SKETCHPAD_DRAW_TEXT,
				value: JSON.stringify({
					x: x,
					y: y,
					value,
					color,
					fontSize,
					fontFamily,
					page: this.state.currentPage,
					drawID: drawID,
					user: user,
					type: 'text'
				})
			};
			this.hasChangedSinceLastSave = true;
			if ( session.isOwner() || this.state.groupMode ) {
				session.log( logAction, 'members' );
			} else {
				session.log( logAction );
			}
		}
	};

	handleClick = ( event ) => {
		debug( 'Handle click event...' );
		if ( this.state.mode === 'text' ) {
			const { x, y } = this.mousePosition( event );
			const input = this.textInput;
			input.style.left = String( x + this.leftMargin ) + 'px';
			input.style.width = String( window.innerWidth - ( x + this.leftMargin ) ) + 'px';
			input.style.top = y + 'px';
			const width = max( this.state.canvasWidth - x, 60 );
			debug( `Resize to width ${width}...` );
			input.style.width = `${width}px`; // eslint-disable-line i18next/no-literal-string
			input.focus();
		}
		else if ( this.state.mode === 'deletion' ) {
			debug( 'Checking whether a shape has been selected...' );
			this.checkDeletion( event );
		}
	};

	checkDeletion = ( event ) => {
		const { x, y } = this.mousePosition( event );
		const elems = this.elements[ this.state.currentPage ];
		const nUndos = this.nUndos[ this.state.currentPage ];
		let found = null;
		for ( let i = 0; i < elems.length - nUndos; i++ ) {
			const elem = elems[ i ];
			if ( elem.type === 'curve' ) {
				const points = elem.points;
				this.ctx.beginPath();
				this.ctx.lineCap = 'round';

				// Use a minimum line width to make selecting easier:
				this.ctx.lineWidth = max( elem.lineWidth, 16.0 );
				curve( this.ctx, points, this.canvas.width / DPR, this.canvas.height / DPR, 0.9, 1 );
				this.ctx.closePath();
				if ( this.ctx.isPointInStroke( x*DPR, y*DPR ) ) {
					debug( `Point (${x}, ${y}) is in path of element with ID ${elem.drawID}` );
					found = i;
					break;
				}
			}
			else if ( elem.type === 'text' ) {
				const width = this.ctx.measureText( elem.value ).width;
				const xabs = round( elem.x * ( this.canvas.width / DPR ) );
				const yabs = round( elem.y * ( this.canvas.height / DPR ) );
				if (
					xabs <= x &&
					x <= xabs + width &&
					yabs <= y &&
					y <= yabs + elem.fontSize
				) {
					found = i;
					break;
				}
			}
		}
		if ( !isNull( found ) ) {
			const id = elems[ found ].drawID;
			this.deleteElement( id, found );
			const session = this.context;
			const username = session.user.email || session.anonymousIdentifier;
			const action = {
				id: this.id,
				type: SKETCHPAD_DELETE_ELEMENT,
				value: JSON.stringify({
					drawID: id,
					page: this.state.currentPage,
					user: username,
					sessionID: session.sessionID
				})
			};
			this.hasChangedSinceLastSave = true;
			if (
				( session.isOwner() && this.state.transmitOwner ) ||
				this.state.groupMode
			) {
				session.log( action, 'members' );
			} else {
				session.log( action, 'owners' );
			}
		}
	};

	deleteElement = ( id, foundPos ) => {
		let deleteStart;
		let deleteEnd;
		const elems = this.elements[ this.state.currentPage ];
		const inDeleteMode = this.state.mode === 'delete';
		const nUndos = this.nUndos[ this.state.currentPage ];
		for ( let j = foundPos; j < elems.length - nUndos; j++ ) {
			if ( elems[ j ].drawID === id ) {
				deleteEnd = j;
				elems[ j ].selected = !inDeleteMode;
			} else {
				break;
			}
		}
		for ( let j = foundPos; j >= 0; j-- ) {
			if ( elems[ j ].drawID === id ) {
				deleteStart = j;
				elems[ j ].selected = !inDeleteMode;
			} else {
				break;
			}
		}
		if ( inDeleteMode ) {
			debug( `Delete elements ${deleteStart} to ${deleteEnd}` );
			const deleted = elems.splice( deleteStart, deleteEnd - deleteStart + 1 );
			elems.splice( elems.length - nUndos, 0, ...deleted );
			this.nUndos[ this.state.currentPage ] = nUndos + deleted.length;
			this.onlyRedrawElements();
		}
	};

	firstPage = () => {
		if ( this.state.currentPage === 0 ) {
			return;
		}
		this.canvasWrapper.scrollTop = 0;
		if ( this.selectedElements ) {
			this.deselectElements();
		}
		this.setState({
			currentPage: 0
		}, () => {
			// Update hash of URL:
			this.updateURL( this.state.currentPage );
			this.debouncedRedraw();
			const session = this.context;
			session.log({
				id: this.id,
				type: SKETCHPAD_FIRST_PAGE,
				value: this.state.currentPage
			});
		});
	};

	lastPage = () => {
		if ( this.state.currentPage === this.state.noPages - 1 ) {
			return;
		}
		this.canvasWrapper.scrollTop = 0;
		if ( this.selectedElements ) {
			this.deselectElements();
		}
		this.setState({
			currentPage: this.state.noPages - 1
		}, () => {
			// Update hash of URL:
			this.updateURL( this.state.currentPage );
			this.debouncedRedraw();
			const session = this.context;
			session.log({
				id: this.id,
				type: SKETCHPAD_LAST_PAGE,
				value: this.state.currentPage
			});
		});
	};

	readURL = () => {
		const hash = window.location.hash;
		const id = encodeURI( this.id );
		const RE = new RegExp( id+'=(\\d+)' );
		const match = hash.match( RE );
		if ( match ) {
			return max( Number( match[ 1 ] ) - 1, 0 );
		}
		return 0;
	};

	updateURL = ( pageNo ) => {
		const hash = String( window.location.hash );
		if ( !isElectron ) {
			const id = encodeURI( this.id );
			if ( !hash ) {
				window.location.hash = `#/?${id}=${pageNo+1}`;
			}
			else if ( hash.includes( id ) ) {
				const RE = new RegExp( '('+id+')=\\d+' );
				window.location.hash = replace( hash, RE, `$1=${pageNo+1}` );
			} else {
				window.location.hash += `&${id}=${pageNo+1}`;
			}
		}
	};

	nextPage = () => {
		if ( this.state.currentPage < this.state.noPages-1 ) {
			debug( 'Should go to next page...' );
			this.canvasWrapper.scrollTop = 0;
			const currentPage = this.state.currentPage + 1;
			if ( this.selectedElements ) {
				this.deselectElements();
			}
			if ( this.props.nodes[ this.state.currentPage ] ) {
				closeHintButtons( this.canvasWrapper );
			}
			if ( this.state.mode === 'text' ) {
				this.insertTextFromInput();
			}
			this.setState({
				currentPage
			}, () => {
				// Update hash of URL:
				this.updateURL( this.state.currentPage );
				this.debouncedRedraw();
				const session = this.context;
				session.log({
					id: this.id,
					type: SKETCHPAD_NEXT_PAGE,
					value: this.state.currentPage
				});
			});
		}
	};

	previousPage = () => {
		if ( this.state.currentPage > 0 ) {
			this.canvasWrapper.scrollTop = 0;
			const currentPage = this.state.currentPage - 1;
			if ( this.selectedElements ) {
				this.deselectElements();
			}
			if ( this.props.nodes[ this.state.currentPage ] ) {
				closeHintButtons( this.canvasWrapper );
			}
			if ( this.state.mode === 'text' ) {
				this.insertTextFromInput();
			}
			this.setState({
				currentPage
			}, () => {
				// Update hash of URL:
				this.updateURL( this.state.currentPage );
				this.debouncedRedraw();
				const session = this.context;
				session.log({
					id: this.id,
					type: SKETCHPAD_PREVIOUS_PAGE,
					value: this.state.currentPage
				});
			});
		}
	};

	gotoPage = ( idx, shouldLog = true ) => {
		debug( `Should go to page ${idx}...` );
		idx = parseInt( idx, 10 );
		if ( idx !== this.state.currentPage ) {
			if ( this.canvasWrapper ) {
				this.canvasWrapper.scrollTop = 0;
			}
			if ( this.selectedElements ) {
				this.deselectElements();
			}
			if ( this.props.nodes[ this.state.currentPage ] ) {
				closeHintButtons( this.canvasWrapper );
			}
			if ( this.state.mode === 'text' ) {
				this.insertTextFromInput();
			}
			this.setState({
				currentPage: idx,
				showNavigationModal: false
			}, () => {
				// Update hash of URL:
				this.updateURL( this.state.currentPage );

				this.debouncedRedraw();
				if ( shouldLog ) {
					const session = this.context;
					session.log({
						id: this.id,
						type: SKETCHPAD_GOTO_PAGE,
						value: idx
					});
				}
			});
		} else {
			this.setState({
				showNavigationModal: false
			});
		}
	};

	loadPDF = () => {
		const input = document.createElement( 'input' );
		input.type = 'file';
		input.accept = '.pdf';
		input.addEventListener( 'change', this.handlePDFUpload, false );
		input.click();
	};

	handlePDFUpload = ( evt ) => {
		const session = this.context;
		const files = evt.target.files;
		const formData = new FormData();
		formData.append( 'file', files[ 0 ] );
		session.uploadFile({
			formData,
			callback: ( error, res ) => {
				const filename = res.filename;
				const link = session.server + '/' + filename;
				session.updateMetadata( 'store', this.id, link );
				this.initializePDF();
			}
		});
	};

	initializePDF = () => {
		debug( `Initialize PDF document at ${this.props.pdf}...` );
		const session = this.context;
		return new Promise( ( resolve, reject ) => {
			const metadataPDF = session.metadata.store[ this.id ];
			const loadingTask = pdfjsLib.getDocument({
				url: this.props.pdf || metadataPDF,
				disableFontFace: false
			});
			loadingTask.promise
				.then( ( pdf ) => {
					debug( 'Retrieved PDF document... ' );
					this.processPDF( pdf, ( err ) => {
						if ( err ) {
							debug( `Encountered error in 'processPDF': ${err.message}` );
							reject( err );
						} else {
							resolve();
						}
					});
				})
				.catch( function onError( err ) {
					debug( `Encountered an error in 'initializePDF': ${err.message}` );
				});
		});
	};

	processPDF = ( pdf, clbk = noop ) => {
		debug( 'PDF loaded...' );
		const noPages = pdf.numPages;
		const elems = new Array( noPages );
		const promises = new Array( noPages );
		const sharedElements = new Array( noPages );
		const nUndos = new Array( noPages );
		for ( let i = 0; i < noPages; i++ ) {
			elems[ i ] = [];
			promises[ i ] = pdf.getPage( i + 1 );
			sharedElements[ i ] = [];
			nUndos[ i ] = 0;
		}
		return Promise.all( promises )
			.then( values => {
				debug( 'Retrieved all pages...' );
				this.backgrounds = values;
				this.elements = elems;
				this.sharedElements = sharedElements;
				this.nUndos = nUndos;
				this.setState({
					currentPage: !isElectron ? this.readURL() : 0,
					noPages
				}, () => {
					if ( this.state.hasRetrievedData ) {
						this.drawPage( this.state.currentPage );
					}
				});
				clbk( null );
			})
			.catch( error => {
				debug( error );
				clbk( error );
			});
	};

	save = () => {
		if ( !this.hasChangedSinceLastSave ) {
			return new Promise( ( resolve ) => {
				resolve();
			});
		}
		const session = this.context;

		const state = omit( this.state, OMITTED_KEYS );
		const data = {
			elements: this.elements,
			nUndos: this.nUndos,
			state: state
		};
		this.hasChangedSinceLastSave = false;
		const anonymous = session.anonymous;
		if ( anonymous ) {
			debug( 'Save created elements to local storage...' );
			return session.store.setItem( this.id, data );
		}
		debug( 'Saving data on server...' );
		return session.saveSketchpadData( this.id, data );
	};

	closeResponseModal = () => {
		this.setState({
			showUploadModal: false,
			modalMessage: null
		});
	};

	renderProgressModal() {
		if ( !this.state.isExporting ) {
			return null;
		}
		return (
			<Modal
				show={this.state.isExporting}
				onHide={noop}
			>
				<Modal.Header>
					<Modal.Title>{this.props.t('generate-pdf')}</Modal.Title>
				</Modal.Header>
			</Modal>
		);
	}

	renderUploadModal() {
		if ( !this.state.showUploadModal ) {
			return null;
		}
		return (
			<Modal
				show={this.state.showUploadModal}
				onHide={this.closeResponseModal}
			>
				<Modal.Header closeButton>
					<Modal.Title>{this.props.t('server-response')}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{this.state.modalMessage}
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={this.closeResponseModal}>{this.props.t('close')}</Button>
				</Modal.Footer>
			</Modal>
		);
	}

	toggleNavigationModal = () => {
		this.setState({
			showNavigationModal: !this.state.showNavigationModal
		});
	};

	renderPagination() {
		if ( this.state.hideNavigationButtons ) {
			return null;
		}
		const { t } = this.props;
		const currentPage = this.state.currentPage;
		if ( this.props.dynamicallyHideButtons && this.state.canvasWidth < 600 ) {
			return ( <ButtonGroup size="sm" className="sketch-pages" >
				<Button variant="light" onClick={this.toggleNavigationModal}>{currentPage+1}/{this.state.noPages}</Button>
				<Gate owner banner={null} showOwnerInPresentationMode={false} >
					<TooltipButton tooltip={t('insert-page')} onClick={() => {
						const idx = this.state.currentPage + 1;
						this.insertPage( idx );
					}} glyph="plus" size="sm" />
				</Gate>
			</ButtonGroup> );
		}
		return ( <ButtonGroup size="sm" className="sketch-pages" >
			<Button variant="light" onClick={this.toggleNavigationModal}>{currentPage+1}/{this.state.noPages}</Button>
			<TooltipButton tooltip={t('goto-first')} onClick={this.firstPage} glyph="fast-backward" size="sm" />
			<TooltipButton tooltip={t('goto-previous')} onClick={this.previousPage} glyph="backward" size="sm" />
			<TooltipButton tooltip={t('goto-next')} onClick={this.nextPage} glyph="forward" size="sm" />
			<TooltipButton tooltip={t('goto-last')} onClick={this.lastPage} glyph="fast-forward" size="sm" />
			<Gate owner banner={null} showOwnerInPresentationMode={false} >
				<TooltipButton tooltip={t('insert-page')} onClick={() => {
					const idx = this.state.currentPage + 1;
					this.insertPage( idx );
				}} glyph="plus" size="sm" />
			</Gate>
		</ButtonGroup> );
	}

	renderInputButtons() {
		if ( this.state.hideInputButtons ) {
			return null;
		}
		return ( <InputButtons
			brushSize={this.state.brushSize}
			color={this.state.color}
			mode={this.state.mode}
			fontFamily={this.state.fontFamily}
			fontSize={this.state.fontSize}
			onModeChange={( mode ) => {
				if ( this.state.mode === 'drag' && mode !== 'drag' ) {
					this.deselectElements();
					this.onlyRedrawElements();
				} else if ( this.state.mode === 'text' ) {
					this.insertTextFromInput();
				}
				this.setState({ mode });
				if ( mode !== 'pointer' ) {
					this.pointer.style.opacity = 0.0;
				} else if ( mode === 'pointer' ) {
					this.pointer.style.opacity = 0.7;
				}
			}}
			onColorChange={( color ) => { this.setState({ color }); }}
			onBrushSelect={( value ) => {
				if ( this.state.mode === 'drag' ) {
					this.deselectElements();
					this.onlyRedrawElements();
				}
				if ( this.state.mode === 'text' ) {
					this.insertTextFromInput();
				}
				this.setState({
					brushSize: Number( value ),
					mode: 'drawing'
				});
			}}
			onFontFamilySelect={( val ) => {
				if ( this.state.mode === 'drag' ) {
					this.deselectElements();
					this.onlyRedrawElements();
				}
				this.setState({
					fontFamily: val,
					mode: 'text'
				});
			}}
			onFontSizeSelect={( value ) => {
				if ( this.state.mode === 'drag' ) {
					this.deselectElements();
					this.onlyRedrawElements();
				}
				this.setState({
					fontSize: Number( value ),
					mode: 'text'
				});
			}}
			t={this.props.t}
		/> );
	}

	toggleDeletePageModal = () => {
		this.setState({
			showDeletePageModal: !this.state.showDeletePageModal
		});
	};

	toggleResetModal = () => {
		this.setState({
			showResetModal: !this.state.showResetModal
		});
	};

	toggleTutorial = () => {
		this.setState({
			showTutorial: !this.state.showTutorial
		});
	};

	renderRemoveButtons() {
		if (
			this.state.hideInputButtons ||
			( this.props.dynamicallyHideButtons && this.state.canvasWidth < 900 )
		) {
			return null;
		}
		const { t } = this.props;
		return (
			<ButtonGroup size="sm" className="sketch-undo-redo sketch-button-group">
				<TooltipButton
					tooltip={t('undo')}
					onClick={this.undo}
					glyph="step-backward"
					size="sm"
				/>
				<TooltipButton tooltip={t('redo')} glyph="step-forward" onClick={this.redo} size="sm" />
				<TooltipButton tooltip={t('clear-current')} onClick={this.toggleDeletePageModal} glyph="eraser" size="sm" />
				<TooltipButton tooltip={t('reset-pages')} onClick={this.toggleResetModal} glyph="power-off" size="sm" />
			</ButtonGroup>
		);
	}

	renderSaveButtons() {
		if (
			this.state.hideSaveButtons ||
			( this.props.dynamicallyHideButtons && this.state.canvasWidth < 775 )
		) {
			return null;
		}
		const session = this.context;
		const { t } = this.props;
		return (
			<ButtonGroup size="sm" className="sketch-save-buttons sketch-button-group">
				{ !this.props.pdf ? <TooltipButton tooltip={t('load-pdf')} onClick={this.loadPDF} size="sm" glyph="file" /> : null }
				<TooltipButton tooltip={t('download')} onClick={this.toggleSaveModal} glyph="file-pdf" size="sm" />
				<TooltipButton tooltip={session.anonymous ? t('save-local') : t('save-server')} onClick={() => {
					const promise = this.save();
					promise.then( () => {
						session.addNotification({
							title: t('saved'),
							message: session.anonymous ? t('saved-local') : t('saved-server'),
							level: 'success',
							position: 'tr'
						});
					})
					.catch( ( err ) => {
						session.addNotification({
							title: t('encountered-error'),
							message: err.message,
							level: 'error',
							position: 'tr'
						});
					});
				}} glyph="save" size="sm" />
				<TooltipButton tooltip={t('upload-to-server')} onClick={this.uploadSketches} glyph="upload" size="sm" />
				{ IS_TOUCH_DEVICE ? <TooltipButton tooltip={this.state.swiping ? t('disable-swiping') : t('enable-swiping')} variant={this.state.swiping ? 'success' : 'secondary'} onClick={this.toggleSwiping} glyph="fingerprint" size="sm" /> : null }
			</ButtonGroup>
		);
	}

	toggleSwiping = () => {
		this.setState({
			swiping: !this.state.swiping
		});
	};

	movePointerStart = ( event ) => {
		event.stopPropagation();
		debug( '`onMouseDown` or `onTouchStart` event fired...' );
		if ( event.touches && event.touches.length > 1 ) {
			this.swipeStartX = event.touches[ 0 ].screenX;
			this.swipeStartY = event.touches[ 0 ].screenY;
		}
	};

	movePointerEnd = ( event ) => {
		// Mouse is not clicked anymore...
		event.stopPropagation();
		if (
			abs( this.swipeEndX - this.swipeStartX ) > MIN_SWIPE_X &&
			abs( this.swipeEndY - this.swipeStartY ) < MAX_SWIPE_Y
		) {
			if ( this.swipeEndX > this.swipeStartX ) {
				this.previousPage();
			} else {
				this.nextPage();
			}
			this.swipeEndX = 0;
			this.swipeEndY = 0;
			this.swipeStartX = 0;
			this.swipeStartY = 0;
		}
		this.hideZoom();
		this.hidePointer();
	};

	movePointer = ( event ) => {
		event.stopPropagation();
		if ( this.state.swiping && event.touches && event.touches.length > 1 ) {
			this.swipeEndX = event.touches[ 0 ].screenX;
			this.swipeEndY = event.touches[ 0 ].screenY;
			this.isMouseDown = false;
			const diffY = this.swipeEndY - this.swipeStartY;
			this.verticalScroll( diffY );
			return;
		}
		const session = this.context;
		let { x, y } = this.mousePosition( event );
		if ( this.state.mode === 'pointer' ) {
			this.pointer.style.opacity = 0.7;
			this.pointer.style.left = `${x+this.leftMargin}px`; // eslint-disable-line i18next/no-literal-string
			this.pointer.style.top = `${y}px`; // eslint-disable-line i18next/no-literal-string
		}
		else if ( this.state.mode === 'zoom' ) {
			let { width, height } = this.zoom;
			let sw = width / ( 2.0*DPR ); // Width of sub-rectangle of source image in the destination context
			let sh = height / ( 2.0*DPR ); // Height of sub-rectangle of source image in the destination context
			this.zoomCtx.clearRect( 0, 0, width, height );

			let dw = width / DPR; // Width of image in destination canvas
			let dh = height / DPR; // Height of image in destination canvas
			let sx = ( x*DPR - (sw/2) ); // x-axis of top left corner of sub-rectangle of source image
			let sy = ( y*DPR - (sh/2) ); // y-axis of top left corner of sub-rectangle of source image
			let dx = 0; // x-axis coordinate in destination canvas at which to place top-left corner of source image
			let dy = 0; // y-axis coordinate in destination canvas at which to place top-left corner of source image
			if ( sx < 0 ) {
				dx -= sx;
				sx = 0;
				dw += ( dw / sw ) * sx;
				sw += sx;
			}
			if ( sy < 0 ) {
				dy -= sy;
				sy = 0;
				dh += ( dh / sh ) * sy;
				sh += sy;
			}
			this.zoomCtx.drawImage( this.canvas, sx, sy, sw, sh, dx, dy, dw, dh );
			this.zoom.style.display = 'block';
			this.zoom.style.left = `${x-sw+this.leftMargin}px`; // eslint-disable-line i18next/no-literal-string
			this.zoom.style.top = `${y-sh}px`; // eslint-disable-line i18next/no-literal-string
		}
		const action = {
			id: this.id,
			type: this.state.mode === 'pointer' ? SKETCHPAD_MOVE_POINTER : SKETCHPAD_MOVE_ZOOM,
			value: JSON.stringify({
				x: x / ( this.canvas.width / DPR ),
				y: y / ( this.canvas.height / DPR ),
				sessionID: session.sessionID
			}),
			noSave: true
		};
		session.log( action, 'members' );
	};

	renderTransmitButtons() {
		if ( this.state.hideTransmitButtons || this.state.canvasWidth < 650 ) {
			return null;
		}
		const session = this.context;
		const users = session.userList
			.filter( user => isNull( user.exitTime ) )
			.map( user => {
				return { value: user.name, label: user.name };
			});
		const popover = <Popover id="popover-positioned-right" >
			<PopoverHeader>{this.props.t('remote-control-by')}</PopoverHeader>
			<PopoverBody>
				<Select isClearable inline options={users} onChange={( newValue ) => {
					this.setState({
						receiveFrom: newValue
					});
				}} />
				<Checkbox defaultValue={this.state.groupMode} onChange={this.toggleGroupMode} legend={this.props.t('group-mode')} />
			</PopoverBody>
		</Popover>;
		let toggleFillButton;
		if ( this.props.pdf ) {
			toggleFillButton = <TooltipButton
				size="sm"
				tooltip={this.state.fill === 'vertical' ? this.props.t('fill-entire-width') : this.props.t('fit-page')}
				onClick={() => {
					let fill;
					if ( this.state.fill === 'vertical' ) {
						fill = 'horizontal';
					} else {
						fill = 'vertical';
					}
					this.setState({
						fill
					}, this.redraw );
				}}
				glyph={this.state.fill === 'vertical' ? 'fas fa-grip-lines' : 'fas fa-grip-lines-vertical'}
			/>;
		}
		const { t } = this.props;
		return (
			<Fragment>
				<Gate owner banner={null} showOwnerInPresentationMode={false} >
					<ButtonGroup size="sm" className="sketch-button-group" >
						<TooltipButton size="sm" tooltip={this.state.transmitOwner ? t('disable-transmissions') : t('enable-transmissions')} variant={this.state.transmitOwner ? 'success' : 'light'} onClick={this.toggleTransmit} glyph="bullhorn" />
						<OverlayTrigger trigger="click" placement="bottom" rootClose overlay={popover}>
							<Button size="sm" variant="light" >
								<div className="fa fa-eye" />
							</Button>
						</OverlayTrigger>
						{toggleFillButton}
					</ButtonGroup>
				</Gate>
				<Gate notOwner banner={null} >
					<ButtonGroup size="sm" className="sketch-button-group" >
						<TooltipButton
							size="sm"
							tooltip={this.state.showInstructorAnnotations ? t('show-only-own-annotations') : t('show-all-annotations')}
							variant={this.state.showInstructorAnnotations ? 'success' : 'light'}
							onClick={() => {
								this.setState({
									showInstructorAnnotations: !this.state.showInstructorAnnotations
								}, () => {
									this.debouncedRedraw();
								});
							}}
							glyph={this.state.showInstructorAnnotations ? 'fa fa-toggle-on' : 'fa fa-toggle-off'}
						/>
						{toggleFillButton}
					</ButtonGroup>
				</Gate>
			</Fragment>
		);
	}

	toLocalPage = ( idx, ownerEmail ) => {
		const addedPages = this.state.insertedPages;
		let out = idx;
		for ( let i = 0; i < addedPages.length; i++ ) {
			const { page, email } = addedPages[ i ];
			if ( page < idx && email !== ownerEmail ) {
				out += 1;
			}
		}
		return out;
	};

	toOriginalPage = ( idx ) => {
		const addedPages = this.state.insertedPages;
		let out = idx;
		for ( let i = 0; i < addedPages.length; i++ ) {
			const { page } = addedPages[ i ];
			if ( page === idx ) {
				return null;
			}
			else if ( page < idx ) {
				out -= 1;
			}
		}
		debug( `Page with index ${idx} corresponds to original page number ${out}...` );
		return out;
	};

	verticalScroll( diffY ) {
		if (
			diffY > MIN_SWIPE_Y ||
			diffY < -MIN_SWIPE_Y
		) {
			const session = this.context;
			const action = {
				id: this.id,
				type: SKETCHPAD_VERTICAL_SCROLL,
				value: JSON.stringify({
					diffY: diffY / this.canvas.height,
					sessionID: session.sessionID
				}),
				noSave: true
			};
			session.log( action, 'members' );
			this.canvasWrapper.scrollTop -= 0.1 * diffY;
		}
	}

	renderFeedbackButtons() {
		const page = this.toOriginalPage( this.state.currentPage );
		if ( !this.props.feedbackButtons || isNull( page ) ) {
			return null;
		}
		return (
			<Fragment>
				<FeedbackButtons
					key={`${this.id}-slide-${page}`} id={`${this.id}-slide-${page}`}
					customFeedback={false} vertical
					style={{ zIndex: 3, position: 'absolute', top: 35, right: 20 }}
				/>
				<Gate owner>
					<Tooltip tooltip={this.props.t('open-slide-feedback')} placement="left" >
						<Button
							onClick={() => this.setState({
								showFeedbackModal: !this.state.showFeedbackModal
							})}
							variant="secondary"
							size="sm"
							style={{ right: 20, top: 175, position: 'absolute', zIndex: 3 }}
						>
							{this.props.t('show')}
						</Button>
					</Tooltip>
				</Gate>
			</Fragment>
		);
	}

	render() {
		debug( `Render sketchpad with height ${this.props.canvasHeight} and width ${this.props.canvasWidth}` );
		let cursor;
		switch ( this.state.mode ) {
		case 'drawing':
			cursor = 'crosshair';
		break;
		case 'text':
			cursor = 'text';
		break;
		case 'drag':
			cursor = 'move';
		break;
		case 'delete':
			cursor = 'not-allowed';
		break;
		default:
			cursor = 'default';
		}
		let eventListeners;
		if ( this.state.mode === 'pointer' || this.state.mode === 'zoom' ) {
			eventListeners = {
				onMouseDown: this.movePointerStart,
				onMouseMove: this.movePointer,
				onMouseOut: this.movePointerEnd,
				onMouseUp: this.movePointerEnd,
				onTouchCancel: this.movePointerEnd,
				onTouchEnd: this.movePointerEnd,
				onTouchMove: this.movePointer,
				onTouchStart: this.movePointerStart
			};
		} else if ( this.state.mode === 'none' ) {
			const onTouchStart = ( event ) => {
				event.stopPropagation();
				if ( event.touches && event.touches.length > 1 ) {
					this.swipeStartX = event.touches[ 0 ].screenX;
					this.swipeStartY = event.touches[ 0 ].screenY;
				}
			};
			const onTouchMove = ( event ) => {
				event.stopPropagation();
				if ( this.state.swiping && event.touches && event.touches.length > 1 ) {
					this.swipeEndX = event.touches[ 0 ].screenX;
					this.swipeEndY = event.touches[ 0 ].screenY;
					this.isMouseDown = false;
					const diffY = this.swipeEndY - this.swipeStartY;
					this.verticalScroll( diffY );
				}
			};
			const onTouchEnd = ( event ) => {
				event.stopPropagation();
				if (
					abs( this.swipeEndX - this.swipeStartX ) > MIN_SWIPE_X &&
					abs( this.swipeEndY - this.swipeStartY ) < MAX_SWIPE_Y
				) {
					if ( this.swipeEndX > this.swipeStartX ) {
						this.previousPage();
					} else {
						this.nextPage();
					}
					this.swipeEndX = 0;
					this.swipeEndY = 0;
					this.swipeStartX = 0;
					this.swipeStartY = 0;
				}
			};
			eventListeners = {
				onTouchCancel: onTouchEnd,
				onTouchEnd: onTouchEnd,
				onTouchMove: onTouchMove,
				onTouchStart: onTouchStart
			};
		} else {
			eventListeners = {
				onClick: this.handleClick,
				onMouseDown: this.drawStart,
				onMouseMove: this.draw,
				onMouseOut: this.drawEnd,
				onMouseUp: this.drawEnd,
				onTouchCancel: this.drawEnd,
				onTouchEnd: this.drawEnd,
				onTouchMove: this.draw,
				onTouchStart: this.drawStart
			};
		}
		const canvas = <canvas
			id={`${this.id}-canvas`}
			key={`${this.id}-canvas-${this.state.canvasWidth}x${this.state.canvasHeight}`}
			className="sketch-canvas"
			width={this.state.canvasWidth * DPR}
			height={this.state.canvasHeight * DPR}
			style={{
				cursor: cursor,
				width: this.state.canvasWidth,
				height: this.state.canvasHeight,
				...this.props.style
			}}
			ref={( canvas ) => {
				if ( canvas ) {
					this.canvas = canvas;
					this.ctx = canvas.getContext( '2d' );
				}
			}}
			{...eventListeners}
		/>;
		const mangnifyingGlass = <canvas
			className="sketchpad-magnifying-glass"
			width={( this.state.canvasWidth * DPR ) / 4.0}
			height={( this.state.canvasHeight * DPR ) / 4.0}
			style={{
				width: this.state.canvasWidth / 4.0,
				height: this.state.canvasHeight / 4.0
			}}
			ref={( canvas ) => {
				if ( canvas ) {
					this.zoom = canvas;
					this.zoomCtx = canvas.getContext( '2d' );
					this.zoomCtx.imageSmoothingQuality = 'high';
				}
			}}
		/>;
		return (
			<Fragment>
				<Card
					id={this.id}
					ref={( div ) => {
						this.sketchpadPanel = div;
					}}
					className="modal-container"
					style={{
						width: this.state.canvasWidth+2,
						position: 'relative',
						marginBottom: this.props.fullscreen ? '0px' : '20px',
						marginLeft: 'auto',
						marginRight: 'auto'
					}}
					tabIndex="0"
				>
					<div className="sketch-panel-heading clearfix unselectable">
						{this.renderPagination()}
						{this.renderInputButtons()}
						{this.renderRemoveButtons()}
						{this.renderTransmitButtons()}
						{this.renderSaveButtons()}
						{!this.context.presentationMode ? <TooltipButton tooltip={this.state.showTutorial ? this.props.t('stop-tutorial') : this.props.t('start-tutorial')} onClick={this.toggleTutorial} glyph="question" size="sm" /> : null}
					</div>
					{this.renderFeedbackButtons()}
					<Overlays
						nodes={this.props.nodes}
						currentPage={this.state.currentPage}
						toOriginalPage={this.toOriginalPage}
						key="overlays"
					/>
					<div className="canvas-wrapper"
						style={{
							width: this.state.canvasWidth,
							height: this.state.canvasHeight
						}}
						key={`${this.state.canvasWidth}-${this.state.canvasHeight}`}
						ref={( div ) => { this.canvasWrapper = div; }}
					>
						<ContextMenuTrigger id="sketchpadWindow" disabled={IS_MOBILE} >
							{canvas}
						</ContextMenuTrigger>
						{mangnifyingGlass}
						<div
							className="textLayer"
							ref={( div ) => { this.textLayer = div; }}
							style={{
								pointerEvents: ( this.state.mode !== 'none' ) ? 'none' : 'auto'
							}}
							{...eventListeners}
						/>
						<div
							ref={(div) => { this.pointer = div; }}
							className="sketch-pointer"
						/>
					</div>
					<input type="text" className="sketch-text-input" style={{
						display: this.state.mode === 'text' ? 'inline-block' : 'none',
						fontSize: this.state.fontSize,
						fontFamily: this.state.fontFamily,
						color: this.state.color,
						width: this.state.canvasWidth
					}} onKeyDown={this.handleEnter} ref={( div ) => {
						this.textInput = div;
					}} />
					{this.renderUploadModal()}
					{this.state.showNavigationModal ? <NavigationModal
						show={this.state.showNavigationModal}
						onSelect={this.gotoPage}
						noPages={this.state.noPages}
						onHide={this.toggleNavigationModal}
						t={this.props.t}
					/> : null}
					{this.renderProgressModal()}
					{this.state.showResetModal ? <ResetModal
						show={this.state.showResetModal}
						onSubmit={this.clearAll}
						onHide={() => {
							this.setState({ showResetModal: false });
						}}
						t={this.props.t}
					/> : null}
					{this.state.showDeletePageModal ? <DeletePageModal
						show={this.state.showDeletePageModal}
						onSubmit={this.clear}
						onHide={() => {
							this.setState({ showDeletePageModal: false });
						}}
						t={this.props.t}
					/> : null }
					{this.state.showSaveModal ? <SaveModal
						show={this.state.showSaveModal}
						saveAsPDF={this.saveAsPDF}
						saveAsPNG={this.saveAsPNG}
						onHide={this.toggleSaveModal}
						pdf={this.props.pdf}
						session={this.context}
						id={this.id}
						t={this.props.t}
					/> : null}
					{this.state.showFeedbackModal ? <FeedbackModal
						session={this.context}
						show={this.state.showFeedbackModal}
						onHide={() => {
							this.setState({
								showFeedbackModal: !this.state.showFeedbackModal
							});
						}}
						id={this.id}
						noPages={this.state.noPages}
						toOriginalPage={this.toOriginalPage}
						gotoPage={this.gotoPage}
						t={this.props.t}
					/> : null}
					{ this.state.showTutorial ?
						<Joyride
							steps={guide}
							showProgress
							run={true}
						/> : null
					}
				</Card>
				{ this.sketchpadPanel ? <KeyControls
					container={this.sketchpadPanel}
					actions={{
						'ArrowDown': this.nextPage,
						'ArrowUp': this.previousPage
					}}
				/> : null }
				<SketchpadContextMenu
					canvas={this.canvas}
				/>
			</Fragment>
		);
	}
}


// PROPERTIES //

Sketchpad.defaultProps = {
	autoSave: true,
	feedbackButtons: false,
	intervalTime: 10000,
	hideInputButtons: false,
	hideNavigationButtons: false,
	hideSaveButtons: false,
	hideTransmitButtons: false,
	brushSize: 4,
	color: '#444444',
	canvasWidth: 1200,
	canvasHeight: 700,
	fullscreen: false,
	fill: 'vertical',
	disabled: false,
	fontFamily: 'Arial',
	fontSize: 24,
	nodes: {},
	noPages: 1,
	pdf: null,
	showTutorial: false,
	dynamicallyHideButtons: false,
	transmitOwner: true,
	groupMode: false,
	style: {},
	onChange() {}
};

Sketchpad.propTypes = {
	autoSave: PropTypes.bool,
	feedbackButtons: PropTypes.bool,
	intervalTime: PropTypes.number,
	hideInputButtons: PropTypes.bool,
	hideNavigationButtons: PropTypes.bool,
	hideSaveButtons: PropTypes.bool,
	hideTransmitButtons: PropTypes.bool,
	brushSize: PropTypes.number,
	color: PropTypes.string,
	canvasWidth: PropTypes.number,
	canvasHeight: PropTypes.number,
	fullscreen: PropTypes.bool,
	fill: PropTypes.oneOf(['vertical', 'horizontal']),
	disabled: PropTypes.bool,
	fontFamily: PropTypes.string,
	fontSize: PropTypes.number,
	nodes: PropTypes.object,
	noPages: PropTypes.number,
	pdf: PropTypes.string,
	showTutorial: PropTypes.bool,
	dynamicallyHideButtons: PropTypes.bool,
	transmitOwner: PropTypes.bool,
	groupMode: PropTypes.bool,
	style: PropTypes.object,
	onChange: PropTypes.func
};

Sketchpad.contextType = SessionContext;


// EXPORTS //

export default withTranslation( 'sketchpad' )( withPropCheck( Sketchpad ) );
