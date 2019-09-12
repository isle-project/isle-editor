/* eslint-disable max-lines */

// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import pdfjs from 'pdfjs-dist/webpack';
import pdfMake from 'pdfmake/build/pdfmake';
import logger from 'debug';
import Pressure from 'pressure';
import Card from 'react-bootstrap/Card';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Select from 'react-select';
import isTouchDevice from 'is-touch-device';
import Checkbox from 'components/input/checkbox';
import FeedbackButtons from 'components/feedback';
import { isPrimitive as isNumber } from '@stdlib/assert/is-number';
import isObject from '@stdlib/assert/is-object';
import isNull from '@stdlib/assert/is-null';
import round from '@stdlib/math/base/special/round';
import max from '@stdlib/math/base/special/max';
import min from '@stdlib/math/base/special/min';
import noop from '@stdlib/utils/noop';
import omit from '@stdlib/utils/omit';
import objectKeys from '@stdlib/utils/keys';
import generateUID from 'utils/uid';
import saveAs from 'utils/file-saver';
import base64toBlob from 'utils/base64-to-blob';
import Joyride from 'components/joyride';
import Gate from 'components/gate';
import KeyControls from 'components/key-controls';
import VoiceControl from 'components/voice-control';
import randomstring from 'utils/randomstring/ascii';
import SessionContext from 'session/context.js';
import VOICE_COMMANDS from './voice_commands.json';
import curve from './curve.js';
import TooltipButton from './tooltip_button.js';
import InputButtons from './input_buttons.js';
import Loadable from 'components/loadable';
import {
	SKETCHPAD_INIT_PAGES, SKETCHPAD_HIDE_POINTER, SKETCHPAD_HIDE_ZOOM,
	SKETCHPAD_REPLAY, SKETCHPAD_CLEAR_PAGE, SKETCHPAD_CLEAR_ALL_PAGES,
	SKETCHPAD_DRAW_CURVE, SKETCHPAD_DRAW_TEXT, SKETCHPAD_DRAG_ELEMENT,
	SKETCHPAD_INSERT_PAGE, SKETCHPAD_DELETE_ELEMENT, SKETCHPAD_FIRST_PAGE,
	SKETCHPAD_LAST_PAGE, SKETCHPAD_NEXT_PAGE, SKETCHPAD_PREVIOUS_PAGE,
	SKETCHPAD_GOTO_PAGE, SKETCHPAD_VERTICAL_SCROLL, SKETCHPAD_MOVE_POINTER,
	SKETCHPAD_MOVE_ZOOM, TOGGLE_PRESENTATION_MODE
} from 'constants/actions.js';
const ResetModal = Loadable( () => import( './reset_modal.js' ) );
const NavigationModal = Loadable( () => import( './navigation_modal.js' ) );
const FeedbackModal = Loadable( () => import( './feedback_modal.js' ) );
const SaveModal = Loadable( () => import( './save_modal.js' ) );
import guide from './guide.json';
import './sketchpad.css';
import './pdf_viewer.css';


// VARIABLES //

const debug = logger( 'isle:sketchpad' );
const uid = generateUID( 'sketchpad' );
const OMITTED_KEYS = [
	'isExporting', 'showColorPicker', 'showUploadModal', 'showNavigationModal', 'showResetModal', 'showFeedbackModal', 'showSaveModal'
];
const RECORD_TIME_INCREMENT = 100;
const RE_DIGITS = /^[0-9]+$/;
const MIN_SWIPE_X = 45;
const MIN_SWIPE_Y = 30;
const MAX_SWIPE_Y = 60;
const DPR = window.devicePixelRatio || 1.0;
const hasTouch = isTouchDevice();


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


// MAIN //

/**
* A drawing sketchpad for note taking on lecture slides or empty pages.
*
* @property {boolean} autoSave - controls whether the editor should save the current text to the local storage of the browser at a given time interval
* @property {boolean} feedbackButtons - controls whether to display feedback buttons on each slide
* @property {number} intervalTime - time between auto saves
* @property {boolean} hideInputButtons - controls whether to hide drawing and text input buttons
* @property {boolean} hideNavigationButtons - controls whether to hide buttons for navigating between pages
* @property {boolean} hideRecordingButtons - controls whether to hide the recording buttons
* @property {boolean} hideSaveButtons - controls whether to hide the save buttons
* @property {boolean} hideTransmitButtons - controls whether to hide buttons for transmitting user actions
* @property {number} brushSize - size of the brush to paint with
* @property {string} color - color of the brush and texts
* @property {number} canvasWidth - width of the canvas element (in px)
* @property {number} canvasHeight - height of the canvas element (in px)
* @property {boolean} fullscreen - controls whether to automatically resize the canvas to the width and height of the browser window
* @property {string} fill - if `horizontal`, fill all available horizontal space when drawing a PDF; if `vertical`, all vertical space is used to prevent y-axis overflow
* @property {boolean} disabled - whether to make the component read-only and forbid drawing on the sketchpad
* @property {string} fontFamily - font family
* @property {number} fontSize - font size
* @property {Object} nodes - components to be rendered on top of specified slides; `keys` should correspond to page numbers, `values` to the components
* @property {number} noPages - initial number of pages
* @property {string} pdf - Link to PDF file for baked-in page backgrounds
* @property {boolean} showTutorial - show a tutorial for the sketchpad
* @property {boolean} transmitOwner - whether owner actions should be transmitted to other users in real-time
* @property {boolean} groupMode - controls whether all user's actions are transmitted to everyone else
* @property {strings} voiceID - voice control identifier
* @property {Object} style - CSS inline styles
* @property {Function} onChange - callback invoked whenever a new line element is drawn
*/
class Sketchpad extends Component {
	constructor( props ) {
		super( props );

		this.force = 1.0;
		this.elements = new Array( props.noPages );
		this.backgrounds = new Array( props.noPages );
		this.recordingEndPositions = new Array( props.noPages );
		for ( let i = 0; i < props.noPages; i++ ) {
			this.elements[ i ] = [];
			this.backgrounds[ i ] = null;
			this.recordingEndPositions[ i ] = 0;
		}

		this.canvas = null;
		this.ctx = null;
		this.id = props.id || uid( props );

		const loc = this.readURL();
		this.state = {
			color: props.color,
			brushSize: props.brushSize,
			currentPage: loc ? loc - 1 : 0,
			fontFamily: props.fontFamily,
			fontSize: props.fontSize,
			groupMode: props.groupMode,
			hideInputButtons: props.hideInputButtons,
			hideNavigationButtons: props.hideNavigationButtons,
			hideRecordingButtons: props.hideRecordingButtons,
			hideSaveButtons: props.hideSaveButtons,
			hideTransmitButtons: props.hideTransmitButtons,
			recording: false,
			isExporting: false,
			finishedRecording: false,
			modalMessage: null,
			nUndos: 0,
			noPages: props.noPages,
			insertedPages: [],
			showUploadModal: false,
			mode: 'none',
			showNavigationModal: false,
			transmitOwner: props.transmitOwner,
			receiveFrom: {},
			showResetModal: false,
			showFeedbackModal: false,
			showSaveModal: false,
			swiping: true,
			verticalOffset: 60,
			hasRetrievedData: false
		};
		this.isMouseDown = false;
		this.leftMargin = 0;
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
		this.zoomCtx.scale( DPR, DPR );

		// Scale all drawing operations by the DPR:
		this.ctx.scale( DPR, DPR );

		if ( this.props.fullscreen ) {
			this.windowResize = window.addEventListener( 'resize', this.handleResize );
		}
		let init;
		if ( this.props.pdf ) {
			init = this.initializePDF();
		} else {
			init = Promise.resolve();
		}
		init.then( () => {
			const promise = session.store.getItem( this.id );
			promise
			.then( this.retrieveData )
			.catch( ( err ) => {
				debug( err );
			});
		});
		Pressure.set( '.sketch-canvas', {
			change: ( force, event ) => {
				debug( 'Changed pen pressure: '+force );
				this.force = force;
			}
		});
		if ( session ) {
			this.unsubscribe = session.subscribe( ( type, action ) => {
				if ( type === 'user_joined' ) {
					debug( `User "${action.email}" joined...` );
					const insertAction = {
						id: this.id,
						type: SKETCHPAD_INIT_PAGES,
						value: this.state.insertedPages,
						noSave: true
					};
					if ( session.isOwner() ) {
						session.log( insertAction, action.email );
					}
				}
				else if ( type === TOGGLE_PRESENTATION_MODE ) {
					debug( 'Hide control buttons in presentation mode...' );
					const newState = {
						hideInputButtons: session.presentationMode,
						hideNavigationButtons: session.presentationMode,
						hideRecordingButtons: session.presentationMode,
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
						this.redraw();
					});
				}
				else if ( type === 'member_action' ) {
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
								x = `${x+this.leftMargin}px`;
								y = `${y}px`;
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
								const xPos = `${x-sw+this.leftMargin}px`;
								const yPos = `${y-sh}px`;
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
						type === SKETCHPAD_DRAW_CURVE ||
						type === SKETCHPAD_REPLAY
					) {
						let elem = JSON.parse( action.value );
						const elements = this.elements[ elem.page ];
						let present = false;
						if ( elem.user === session.user.email ) {
							for ( let i = 0; i < elements.length; i++ ) {
								if ( elements[ i ].drawID === elem.drawID ) {
									present = true;
									break;
								}
							}
						}
						if ( !present ) {
							elem.shouldLog = false;
							if ( elem.page === this.state.currentPage ) {
								if ( elem.type === 'text' ) {
									this.drawText( elem );
								} else {
									this.drawCurve( elem );
								}
							}
							elements.push( elem );
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
					else if ( type === SKETCHPAD_INIT_PAGES ) {
						const pagesToInsert = action.value;
						debug( 'Initialize new pages: '+pagesToInsert.length );
						const newInsertedPages = this.state.insertedPages;
						let inserted = 0;
						for ( let i = 0; i < pagesToInsert.length; i++ ) {
							const val = pagesToInsert[ i ];
							const idx = val.page;
							if ( !isAlreadyInserted( idx, this.state.insertedPages ) ) {
								this.elements.splice( idx, 0, []);
								this.backgrounds.splice( idx, 0, null );
								this.recordingEndPositions.splice( idx, 0, 0 );
								newInsertedPages.push( val );
								inserted += 1;
							}
						}
						this.setState({
							insertedPages: newInsertedPages,
							noPages: this.state.noPages + inserted
						}, () => {
							this.redraw();
						});
					}
					else if ( type === SKETCHPAD_DELETE_ELEMENT ) {
						const { drawID, page, user } = JSON.parse( action.value );
						debug( `Should delete element with id ${drawID} by user ${user}` );
						const elems = this.elements[ page ];
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
							this.redraw();
						}
					}
					else if ( type === SKETCHPAD_DRAG_ELEMENT ) {
						const { drawID, user, page, dx, dy } = JSON.parse( action.value );
						debug( `Should drag element with id ${drawID} by dx: ${dx} and dy: ${dy}...` );
						let ownAction = false;
						if (
							this.selectedElement &&
							this.selectedElement.drawID === drawID
						) {
							ownAction = true;
						}
						if ( !ownAction ) {
							const elems = this.elements[ page ];
							for ( let i = 0; i < elems.length; i++ ) {
								const e = elems[ i ];
								if ( e.drawID === drawID && e.user === user ) {
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
							this.redraw();
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
								const elems = this.elements[ page ];
								const newElems = [];
								for ( let i = 0; i < elems.length; i++ ) {
									const e = elems[ i ];
									if ( e.user !== user ) {
										newElems.push( e );
									}
								}
								this.elements[ page ] = newElems;
								this.redraw();
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
								const elems = this.elements[ page ];
								const newElems = [];
								for ( let i = 0; i < elems.length; i++ ) {
									const e = elems[ i ];
									if ( e.user !== user ) {
										newElems.push( e );
									}
								}
								this.elements[ page ] = newElems;
							}
							this.redraw();
						}
					}
				}
			});
		}

		if ( this.props.autoSave ) {
			this.saveInterval = setInterval( this.saveInBrowser, this.props.intervalTime );
		}

		// Prevent scrolling when touching the canvas on iOS
		const opts = {
			passive: false
		};
		document.body.addEventListener( 'touchstart', this.preventDefaultTouch, opts );
		document.body.addEventListener( 'touchend', this.preventDefaultTouch, opts );
		document.body.addEventListener( 'touchmove', this.preventDefaultTouch, opts );

		if ( this.props.fullscreen ) {
			document.body.addEventListener( 'gesturestart', preventGesture );
		}
		this.hashChange = window.addEventListener( 'hashchange', this.handleHashChange );
	}

	componentDidUpdate( prevProps ) {
		if ( prevProps.noPages !== this.props.noPages ) {
			this.elements = new Array( this.props.noPages );
			this.backgrounds = new Array( this.props.noPages );
			this.recordingEndPositions = new Array( this.props.noPages );
			for ( let i = 0; i < this.props.noPages; i++ ) {
				this.elements[ i ] = [];
				this.backgrounds[ i ] = null;
				this.recordingEndPositions[ i ] = 0;
			}
			this.setState({
				noPages: this.props.noPages
			}, () => {
				this.redraw();
			});
		}
		if ( prevProps.pdf !== this.props.pdf ) {
			this.initializePDF();
		}
	}

	componentWillUnmount() {
		this.saveInBrowser();
		if ( this.recordingInterval ) {
			clearInterval( this.recordingInterval );
		}
		if ( this.saveInterval ) {
			clearInterval( this.saveInterval );
		}
		if ( this.unsubscribe ) {
			this.unsubscribe();
		}
		if ( this.windowResize ) {
			window.removeEventListener( 'resize', this.handleResize );
		}
		if ( this.hashChange ) {
			window.removeEventListener( 'hashchange', this.handleHashChange );
		}
		const opts = {
			passive: false
		};
		document.body.removeEventListener( 'touchstart', this.preventDefaultTouch, opts );
		document.body.removeEventListener( 'touchend', this.preventDefaultTouch, opts );
		document.body.removeEventListener( 'touchmove', this.preventDefaultTouch, opts );
		if ( this.props.fullscreen ) {
			document.removeEventListener( 'gesturestart', preventGesture );
		}
	}

	handleHashChange = () => {
		const page = this.readURL();
		if ( page > 0 ) {
			this.gotoPage( page-1 );
		}
	}

	handleResize = () => {
		this.setState({
			canvasHeight: window.innerHeight - this.state.verticalOffset,
			canvasWidth: window.innerWidth - 40
		}, () => {
			this.redraw();
		});
	}

	retrieveData = ( data ) => {
		debug( 'Retrieved data from previous session...' );
		if ( isObject( data ) ) {
			this.elements = data.elements;
			this.recordingEndPositions = data.recordingEndPositions;
			for ( let i = 0; i < data.state.insertedPages.length; i++ ) {
				// Insert empty pages at the correct locations:
				const { page } = data.state.insertedPages[ i ];
				this.backgrounds.splice( page, 0, null );
			}
			const page = this.readURL();
			debug( 'Go to page '+page );
			if ( page > 0 ) {
				data.state.currentPage = page - 1;
			} else {
				data.state.currentPage = 0;
			}
			data.state.noPages = this.backgrounds.length;
			data.state = omit( data.state, OMITTED_KEYS );
			data.state.hasRetrievedData = true;
			this.setState( data.state, () => {
				this.redraw();
			});
		} else {
			this.setState({
				hasRetrievedData: true
			}, () => {
				this.redraw();
			});
		}
	}

	toggleGroupMode = () => {
		this.setState({
			groupMode: !this.state.groupMode
		});
	}

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
	}

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
	}

	preventDefaultTouch = ( e ) => {
		if (
			this.props.fullscreen &&
			( e.target === this.canvas || e.target === this.textLayer || e.target === this.canvasWrapper )
		) {
			e.preventDefault();
		}
	}

	renderBackground = ( pageNumber ) => {
		const canvas = this.canvas;
		const ctx = this.ctx;

		const page = this.backgrounds[ pageNumber ];
		if ( page ) {
			debug( `Found background for page ${pageNumber}...` );
			let ratio;
			if ( this.props.fill === 'vertical' ) {
				ratio = this.state.canvasHeight / page.getViewport({ scale: 1.0 }).height;
			} else {
				ratio = this.state.canvasWidth / page.getViewport({ scale: 1.0 }).width;
			}
			const viewport = page.getViewport({ scale: ratio });
			const textLayer = this.textLayer;
			while ( textLayer.firstChild ) {
				textLayer.removeChild( textLayer.firstChild );
			}
			if ( this.props.fill === 'vertical' ) {
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
				this.canvas.style.height = `${viewport.height}px`;
				this.canvas.style.width = `${viewport.width - 15}px`;
				textLayer.style.width = `${viewport.width-15}px`;
				textLayer.style.height = `${viewport.height}px`;
			}

			// Scale all drawing operations by the DPR:
			this.ctx.scale( DPR, DPR );

			// Render PDF page into canvas context
			const renderContext = {
				canvasContext: this.ctx,
				viewport: viewport
			};

			page.getTextContent().then( textContent => {
				pdfjs.renderTextLayer({
					textContent,
					container: textLayer,
					viewport,
					textDivs: []
				});
			});
			return page.render( renderContext )
			.promise
			.then( () => {
				this.backgroundData = this.ctx.getImageData( 0, 0, this.canvas.width, this.canvas.height );
				debug( `Background rendered for page ${pageNumber}` );
			});
		}

		// Reset background data for inserted slides:
		this.backgroundData = null;
		if ( ctx ) {
			if ( !this.props.pdf ) {
				// Scale all drawing operations by the DPR when no background is present:
				ctx.scale( DPR, DPR );
			}
			ctx.clearRect( 0, 0, canvas.width, canvas.height );
		}
		// Return promise that immediately resolves as no background needs to be drawn:
		return Promise.resolve();
	}

	redraw = () => {
		if ( this.pageRendering ) {
			return debug( 'Early return because of active render task...' );
		}
		this.pageRendering = true;
		const currentPage = this.state.currentPage;

		debug( `Redrawing page ${currentPage+1}` );
		const recordingEndPos = this.recordingEndPositions[ currentPage ];
		this.renderBackground( currentPage )
			.then( () => {
				const elems = this.elements[ currentPage ];
				debug( `Rendering ${elems.length} elements on page ${currentPage}...` );
				for ( let i = recordingEndPos; i < elems.length; i++ ) {
					this.drawElement( elems[ i ] );
				}
				this.pageRendering = false;
			})
			.catch( ( err ) => {
				this.pageRendering = false;
				debug( 'Encountered an error: '+err.message );
			});
	}

	onlyRedrawElements = () => {
		if ( this.backgroundData ) {
			this.ctx.putImageData( this.backgroundData, 0, 0 );
		} else {
			this.ctx.clearRect( 0, 0, this.canvas.width, this.canvas.height );
		}
		const currentPage = this.state.currentPage;
		const elems = this.elements[ currentPage ];
		debug( `Rendering ${elems.length} elements on page ${currentPage}...` );
		const recordingEndPos = this.recordingEndPositions[ currentPage ];
		for ( let i = recordingEndPos; i < elems.length; i++ ) {
			this.drawElement( elems[ i ] );
		}
	}

	redrawWhenDragging = () => {
		if ( !this.draggingImageData ) {
			if ( this.backgroundData ) {
				this.ctx.putImageData( this.backgroundData, 0, 0 );
			} else {
				this.ctx.clearRect( 0, 0, this.canvas.width, this.canvas.height );
			}
			const currentPage = this.state.currentPage;
			const elems = this.elements[ currentPage ];
			debug( `Rendering ${elems.length} elements on page ${currentPage}...` );
			const recordingEndPos = this.recordingEndPositions[ currentPage ];
			for ( let i = recordingEndPos; i < elems.length; i++ ) {
				if ( elems[ i ] !== this.selectedElement ) {
					this.drawElement( elems[ i ] );
				}
			}
			this.draggingImageData = this.ctx.getImageData( 0, 0, this.canvas.width, this.canvas.height );
		}
		this.ctx.putImageData( this.draggingImageData, 0, 0 );
		this.drawElement( this.selectedElement );
	}

	replay = () => {
		const currentPage = this.state.currentPage;
		debug( `Playing recording for page ${currentPage+1}` );
		const ctx = this.ctx;
		const canvas = this.canvas;
		if ( ctx ) {
			ctx.clearRect( 0, 0, canvas.width, canvas.height );
		}
		const endPos = this.recordingEndPositions[ currentPage ];
		this.renderBackground( currentPage ).then( () => {
			const elems = this.elements[ currentPage ];
			debug( `Rendering ${elems.length} elements...` );
			this.setState({
				playing: true
			}, () => {
				let idx = 0;
				let iter = () => {
					this.drawElement( elems[ idx ] );
					idx += 1;
					if ( idx < endPos ) {
						// Save replay actions and transmit to others:
						const action = {
							id: this.id,
							type: SKETCHPAD_REPLAY,
							value: JSON.stringify( elems[ idx ]),
							noSave: true
						};
						const session = this.context;
						if ( session.isOwner() && this.state.transmitOwner ) {
							session.log( action, 'members' );
						} else {
							session.log( action, 'owners' );
						}
						window.setTimeout( iter, elems[ idx ].time - elems[ idx-1 ].time );
					} else {
						this.setState({
							playing: false
						});
					}
				};
				window.setTimeout( iter, 0.0 );
			});
		});
	}

	drawPage = ( idx ) => {
		const ctx = this.ctx;
		const canvas = this.canvas;
		if ( ctx ) {
			ctx.clearRect( 0, 0, canvas.width, canvas.height );
		}
		this.renderBackground( idx );
		const elems = this.elements[ idx ];
		for ( let i = 0; i < elems.length; i++ ) {
			this.drawElement( elems[ i ] );
		}
	}

	mousePosition = ( evt, adjust = true ) => {
		let clientX = evt.clientX;
		let clientY = evt.clientY;

		// Use first touch if available:
		if ( evt.touches && evt.touches.length > 0 ) {
			clientX = evt.touches[ 0 ].clientX;
			clientY = evt.touches[ 0 ].clientY;
		}
		if ( adjust === false ) {
			return {
				x: clientX,
				y: clientY
			};
		}
		// Return position inside of the canvas element:
		const rect = this.canvas.getBoundingClientRect();
		return {
			x: clientX - rect.left,
			y: clientY - rect.top
		};
	}

	clearPage = ( selectedPage ) => {
		if ( isAlreadyInserted( selectedPage, this.state.insertedPages ) ) {
			debug( 'Clear an inserted page; deleting it completely...' );
			this.elements.splice( selectedPage, 1 );
			this.backgrounds.splice( selectedPage, 1 );
			this.recordingEndPositions.splice( selectedPage, 1 );
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
				this.redraw();
			});
		}
		else {
			this.elements[ selectedPage ] = [];
			this.recordingEndPositions[ selectedPage ] = 0;
			this.redraw();
		}
	}

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
		if (
			session.isOwner() && this.state.transmitOwner
		) {
			session.log( logAction, 'members' );
		} else {
			session.log( logAction, 'owners' );
		}
	}

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
				this.redraw();
				this.setState({
					nUndos: 0,
					finishedRecording: false,
					insertedPages: []
				});
			});
		} else {
			const noPages = this.props.noPages;
			this.elements = new Array( noPages );
			this.backgrounds = new Array( noPages );
			this.recordingEndPositions = new Array( noPages );
			for ( let i = 0; i < noPages; i++ ) {
				this.elements[ i ] = [];
				this.backgrounds[ i ] = null;
				this.recordingEndPositions[ i ] = 0;
			}
			this.setState({
				nUndos: 0,
				currentPage: 0,
				noPages: noPages,
				finishedRecording: false,
				insertedPages: []
			});
		}
		const logAction = {
			id: this.id,
			type: SKETCHPAD_CLEAR_ALL_PAGES,
			value: session.sessionID
		};
		if ( !silent ) {
			if (
				session.isOwner() && this.state.transmitOwner
			) {
				session.log( logAction, 'members' );
			} else {
				session.log( logAction, 'owners' );
			}
		}
	}

	delete = () => {
		const currentPage = this.state.currentPage;
		const canvas = this.canvas;

		if ( !isNull( this.backgrounds[ currentPage ] ) ) {
			this.renderBackground( currentPage );
		}
		else {
			const ctx = this.ctx;
			if ( ctx ) {
				ctx.clearRect( 0, 0, canvas.width, canvas.height );
			}
		}
		this.elements[ currentPage ] = [];
		this.recordingEndPositions[ currentPage ] = 0;
		this.setState({
			finishedRecording: false,
			nUndos: 0
		});
	}

	undo = () => {
		const currentPage = this.state.currentPage;
		const elems = this.elements[ currentPage ];
		const recordingEndPos = this.recordingEndPositions[ currentPage ];
		let nUndos = this.state.nUndos;
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
				for ( let i = end; i >= recordingEndPos; i-- ) {
					count += 1;
					if ( count === nUndos ) {
						end = i;
						break;
					} else if ( i === recordingEndPos ) {
						nUndos = count + 1;
						end = null;
					}
				}
				debug( 'Current number of undos: '+nUndos );
				this.setState({
					nUndos
				});
				if ( !isNull( end ) ) {
					debug( `UNDO: Redrawing elements 0 to ${end} out of ${elems.length} elements` );
					for ( let i = 0; i <= end; i++ ) {
						this.drawElement( elems[ i ] );
					}
				}
			});
	}

	redo = () => {
		const elems = this.elements[ this.state.currentPage ];
		let nUndos = this.state.nUndos;
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
					this.drawElement( elems[ i ]);
				}
				this.setState({
					nUndos
				});
			}
		}
	}

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
	}

	drawLine = ({ startX, startY, endX, endY, color, lineWidth, selected }) => {
		const ctx = this.ctx;
		if ( ctx ) {
			ctx.lineWidth = lineWidth;
			ctx.lineCap = 'round';
			ctx.lineJoin = 'round';
			ctx.shadowBlur = 0;
			ctx.strokeStyle = selected ? 'yellow' : color;
			ctx.beginPath();
			ctx.moveTo( startX, startY );
			ctx.lineTo( endX, endY );
			ctx.stroke();
		}
	}

	drawCurve = ({ points, color, lineWidth, selected }) => {
		const ctx = this.ctx;
		if ( ctx ) {
			ctx.lineWidth = lineWidth;
			ctx.lineCap = 'round';
			ctx.lineJoin = 'round';
			if ( !selected ) {
				ctx.shadowColor = 'rgba(128, 128, 128, 0.2)';
				ctx.shadowBlur = lineWidth * 2.0;
			}
			ctx.strokeStyle = selected ? 'yellow' : color;
			ctx.beginPath();
			curve( ctx, points, this.canvas.width / DPR, this.canvas.height / DPR );
			ctx.stroke();
		}
	}

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
			if ( this.state.nUndos > 0 ) {
				const elems = this.elements[ this.state.currentPage ];
				elems.splice( elems.length-this.state.nUndos );
				debug( `Page ${this.state.currentPage} now has ${elems.length} elements`);
				this.setState({
					nUndos: 0
				});
			}
			this.draw( event );
		} else if ( hasTouch ) {
			this.handleClick( event );
		}
	}

	drawEnd = ( event ) => {
		// Mouse is not clicked anymore...
		event.stopPropagation();
		if (
			(
				this.swipeEndX - MIN_SWIPE_X > this.swipeStartX ||
				this.swipeEndX + MIN_SWIPE_X < this.swipeStartX
			) &&
			(
				this.swipeEndY < this.swipeStartY + MAX_SWIPE_Y &&
				this.swipeStartY > this.swipeEndY - MAX_SWIPE_Y &&
				this.swipeEndX > 0
			)
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
			const username = session.user.email || '';

			// Save smoothed points & convert to relative coordinates:
			const points = this.currentPoints;
			points[ 0 ] /= ( this.canvas.width / DPR );
			points[ 1 ] /= ( this.canvas.height / DPR );
			for ( let i = 2; i < points.length - 2; i += 2 ) {
				const c = ( points[i] + points[i+2] ) / 2;
				const d = ( points[i+1] + points[i+3] ) / 2;
				points[ i ] = c / ( this.canvas.width / DPR );
				points[ i+1 ] = d / ( this.canvas.height / DPR );
			}
			points[ points.length-2 ] /= ( this.canvas.width / DPR );
			points[ points.length-1 ] /= ( this.canvas.height / DPR );

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
		this.isMouseDown = false;
		this.forceUpdate();
	}

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
		if ( this.selectedElement ) {
			if ( this.state.mode === 'drag' ) {
				debug( 'Drag elements around...' );
				const dx = ( x - this.x ) / ( this.canvas.width / DPR );
				const dy = ( y - this.y ) / ( this.canvas.height / DPR );
				const e = this.selectedElement;
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
				const username = session.user.email || '';
				const action = {
					id: this.id,
					type: SKETCHPAD_DRAG_ELEMENT,
					value: JSON.stringify({
						dx: dx,
						dy: dy,
						page: this.state.currentPage,
						drawID: this.selectedElement.drawID,
						user: username
					}),
					noSave: true
				};
				if ( session.isOwner() || this.state.groupMode ) {
					session.log( action, 'members' );
				} else {
					session.log( action );
				}
				this.x = x;
				this.y = y;
				return this.redrawWhenDragging();
			}
		}
		if ( this.isMouseDown && !this.props.disabled ) {
			if ( this.state.mode === 'delete' ) {
				debug( 'Check whether to delete element...' );
				return this.checkDeletion( evt );
			}
			if ( this.state.mode === 'drawing' ) {
				this.currentPoints.push( x );
				this.currentPoints.push( y );
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
			// Set to current coordinates:
			this.x = x;
			this.y = y;
		}
	}

	toggleTransmit = () => {
		this.setState({
			transmitOwner: !this.state.transmitOwner
		});
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
									The file has been uploaded successfully and can be accessed at the following address: <a href={link} target="_blank" >{link}</a>
								</span>
							});
							const msg = {
								text: `Dear ${session.user.name}, your notes have been successfully uploaded and are now available at <a href="${link}">${link}</a>.`,
								subject: 'PDF uploaded'
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
	}

	saveAsPNG = () => {
		const current = this.state.currentPage;
		const name = this.id+'_'+(current+1)+'.png';
		const canvas = this.canvas;
		if ( !this.backgrounds[ current ]) {
			// Set white background if none present:
			this.ctx.fillStyle = 'white';
			this.ctx.fillRect( 0, 0, canvas.width, canvas.height );
		}
		canvas.toBlob( function onBlob( blob ) {
			saveAs( blob, name );
		});
	}

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
				const elems = this.elements[ idx ];
				debug( `Rendering ${elems.length} elements...` );
				for ( let i = 0; i < elems.length; i++ ) {
					this.drawElement( elems[ i ] );
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
	}

	toggleSaveModal = () => {
		this.setState({ showSaveModal: !this.state.showSaveModal });
	}

	saveAsPDF = () => {
		this.setState({
			isExporting: true
		}, () => {
			this.preparePDF( ( err, doc ) => {
				const name = this.id;
				doc.download( name+'.pdf', () => {
					this.setState({
						isExporting: false
					});
				});
			});
		});
	}

	insertPage = ( idx, from ) => {
		this.elements.splice( idx, 0, []);
		this.backgrounds.splice( idx, 0, null );
		this.recordingEndPositions.splice( idx, 0, 0 );
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
			insertedPages: newInsertedPages,
			nUndos: 0
		}, () => {
			// Update hash of URL:
			this.updateURL( this.state.currentPage );

			this.redraw();
			if ( !from ) {
				session.log({
					id: this.id,
					type: SKETCHPAD_INSERT_PAGE,
					value: JSON.stringify({
						pos: idx
					})
				}, session.isOwner() ? 'members' : session.user.email );
			}
		});
	}

	handleEnter = ( event ) => {
		debug( 'Check if user hit ENTER...' );
		const rect = this.canvas.getBoundingClientRect();
		const x = parseInt( this.textInput.style.left, 10 ) - rect.left;
		const y = parseInt( this.textInput.style.top, 10 ) - rect.top;
		if ( event.keyCode === 13 ) {
			const value = this.textInput.value;
			this.textInput.value = '';
			this.textInput.style.top = String( parseInt( this.textInput.style.top, 10 ) + this.state.fontSize ) + 'px';
			const session = this.context;
			const username = session.user.email || '';
			const text = {
				value: value,
				x: x / ( this.canvas.width / DPR ),
				y: y / ( this.canvas.height / DPR ),
				color: this.state.color,
				fontSize: this.state.fontSize,
				fontFamily: this.state.fontFamily,
				time: this.time,
				type: 'text',
				page: this.state.currentPage,
				user: username,
				drawID: randomstring( 6 )
			};
			this.drawText( text );
			const elems = this.elements[ this.state.currentPage ];

			if ( this.state.nUndos > 0 ) {
				elems.splice( elems.length-this.state.nUndos );
				debug( `Page ${this.state.currentPage} now has ${elems.length} elements`);
				this.setState({
					nUndos: 0
				});
			}

			// Prevent future logging when redrawing element:
			text.shouldLog = false;
			elems.push( text );
			this.props.onChange( elems );
		}
	}

	drawText = ({ x, y, value, color, drawID, user, fontSize, fontFamily, selected, shouldLog = true }) => {
		const ctx = this.ctx;
		ctx.font = `${fontSize}px ${fontFamily}`;
		ctx.shadowBlur = 0;
		ctx.fillStyle = selected ? 'yellow' : color;
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
			if ( session.isOwner() || this.state.groupMode ) {
				session.log( logAction, 'members' );
			} else {
				session.log( logAction );
			}
		}
	}

	handleClick = ( event ) => {
		debug( 'Handle click event...' );
		if ( this.state.mode === 'text' ) {
			const { x, y } = this.mousePosition( event, false );
			const input = this.textInput;
			input.style.left = x + 'px';
			input.style.top = y + 'px';
			const width = max( this.state.canvasWidth - x, 60 );
			debug( `Resize to width ${width}...` );
			input.style.width = `${width}px`;
			input.focus();
		} else if ( this.state.mode === 'drawing' ) {
			// Handle click while drawing...
		} else if ( this.selectedElement ) {
			// Deselect element:
			this.selectedElement.selected = false;
			this.selectedElement = null;
			this.draggingImageData = null;
			this.onlyRedrawElements();
		} else {
			debug( 'Checking whether a shape has been selected...' );
			this.checkDeletion( event );
		}
	}

	checkDeletion = ( event ) => {
		const { x, y } = this.mousePosition( event );
		const elems = this.elements[ this.state.currentPage ];
		let found = null;
		for ( let i = 0; i < elems.length; i++ ) {
			const elem = elems[ i ];
			if ( elem.type === 'curve' ) {
				const points = elem.points;
				this.ctx.beginPath();
				this.ctx.lineCap = 'round';

				// Use a minimum line width to make selecting easier:
				this.ctx.lineWidth = max( elem.lineWidth, 16.0 );
				curve( this.ctx, points, this.canvas.width / DPR, this.canvas.height / DPR );
				this.ctx.closePath();
				if ( this.ctx.isPointInStroke( x*DPR, y*DPR ) ) {
					debug( `Point (${x}, ${y}) is in path of element with ID ${elem.drawID}` );
					found = i;
					this.selectedElement = elem;
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
					this.selectedElement = elem;
					break;
				}
			}
		}
		if ( !isNull( found ) ) {
			const id = elems[ found ].drawID;
			this.deleteElement( id, found, elems );
			if ( this.state.mode === 'delete' ) {
				const session = this.context;
				const username = session.user.email || '';
				const action = {
					id: this.id,
					type: SKETCHPAD_DELETE_ELEMENT,
					value: JSON.stringify({
						drawID: id,
						page: this.state.currentPage,
						user: username
					})
				};
				if (
					( session.isOwner() && this.state.transmitOwner ) ||
					this.state.groupMode
				) {
					session.log( action, 'members' );
				} else {
					session.log( action, 'owners' );
				}
			}
		}
	}

	deleteElement = ( id, foundPos, elems ) => {
		let deleteStart;
		let deleteEnd;
		for ( let j = foundPos; j < elems.length; j++ ) {
			if ( elems[ j ].drawID === id ) {
				deleteEnd = j;
				elems[ j ].selected = true;
			} else {
				break;
			}
		}
		for ( let j = foundPos; j >= 0; j-- ) {
			if ( elems[ j ].drawID === id ) {
				deleteStart = j;
				elems[ j ].selected = true;
			} else {
				break;
			}
		}
		if ( this.state.mode === 'delete' ) {
			debug( `Delete elements ${deleteStart} to ${deleteEnd}` );
			elems.splice( deleteStart, deleteEnd - deleteStart + 1 );
		}
		this.onlyRedrawElements();
	}

	firstPage = () => {
		if ( this.state.currentPage === 0 ) {
			return;
		}
		this.canvasWrapper.scrollTop = 0;
		this.setState({
			currentPage: 0,
			nUndos: 0
		}, () => {
			// Update hash of URL:
			this.updateURL( this.state.currentPage );
			this.redraw();
			const session = this.context;
			session.log({
				id: this.id,
				type: SKETCHPAD_FIRST_PAGE,
				value: this.state.currentPage
			});
		});
	}

	lastPage = () => {
		if ( this.state.currentPage === this.state.noPages - 1 ) {
			return;
		}
		this.canvasWrapper.scrollTop = 0;
		this.setState({
			currentPage: this.state.noPages - 1,
			nUndos: 0
		}, () => {
			// Update hash of URL:
			this.updateURL( this.state.currentPage );
			this.redraw();
			const session = this.context;
			session.log({
				id: this.id,
				type: SKETCHPAD_LAST_PAGE,
				value: this.state.currentPage
			});
		});
	}

	readURL = () => {
		const hash = window.location.hash;
		const pageNo = hash.slice( 2 );
		if ( RE_DIGITS.test( pageNo ) ) {
			return Number( pageNo );
		}
		return null;
	}

	updateURL = ( pageNo ) => {
		window.location.hash = '#/'+(pageNo+1);
	}

	nextPage = () => {
		if ( this.state.currentPage < this.state.noPages-1 ) {
			debug( 'Should go to next page...' );
			this.canvasWrapper.scrollTop = 0;
			this.setState({
				currentPage: this.state.currentPage + 1,
				nUndos: 0
			}, () => {
				// Update hash of URL:
				this.updateURL( this.state.currentPage );
				this.redraw();
				const session = this.context;
				session.log({
					id: this.id,
					type: SKETCHPAD_NEXT_PAGE,
					value: this.state.currentPage
				});
			});
		}
	}

	previousPage = () => {
		if ( this.state.currentPage > 0 ) {
			this.canvasWrapper.scrollTop = 0;
			this.setState({
				currentPage: this.state.currentPage - 1,
				nUndos: 0
			}, () => {
				// Update hash of URL:
				this.updateURL( this.state.currentPage );
				this.redraw();
				const session = this.context;
				session.log({
					id: this.id,
					type: SKETCHPAD_PREVIOUS_PAGE,
					value: this.state.currentPage
				});
			});
		}
	}

	gotoPage = ( idx, shouldLog = true ) => {
		debug( `Should go to page ${idx}...` );
		idx = parseInt( idx, 10 );
		if ( idx !== this.state.currentPage ) {
			if ( this.canvasWrapper ) {
				this.canvasWrapper.scrollTop = 0;
			}
			this.setState({
				currentPage: idx,
				showNavigationModal: false,
				nUndos: 0
			}, () => {
				// Update hash of URL:
				this.updateURL( this.state.currentPage );

				this.redraw();
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
	}

	loadPDF = () => {
		const input = document.createElement( 'input' );
		input.type = 'file';
		input.accept = '.pdf';
		input.addEventListener( 'change', this.handlePDFUpload, false );
		input.click();
	}

	handlePDFUpload = ( evt ) => {
		const files = evt.target.files;
		const reader = new FileReader();
		reader.onload = () => {
			let pdfData = reader.result;
			pdfData = new Uint8Array( pdfData );
			const loadingTask = pdfjs.getDocument({
				data: pdfData,
				disableFontFace: false
			});
			loadingTask.promise
				.then( this.processPDF )
				.catch(function onError( err ) {
					debug( err );
				});
		};
		reader.readAsArrayBuffer( files[ 0 ] );
	}

	initializePDF = () => {
		debug( 'Initialize PDF document...' );
		return new Promise( ( resolve, reject ) => {
			const loadingTask = pdfjs.getDocument({
				url: this.props.pdf,
				disableFontFace: false
			});
			loadingTask.promise
				.then( ( pdf ) => {
					debug( 'Retrieved PDF document... ' );
					this.processPDF( pdf, ( err ) => {
						if ( err ) {
							reject( err );
						} else {
							resolve();
						}
					});
				})
				.catch(function onError( err ) {
					debug( err );
				});
		});
	}

	processPDF = ( pdf, clbk = noop ) => {
		debug( 'PDF loaded...' );
		const noPages = pdf.numPages;
		const elems = new Array( noPages );
		const promises = new Array( noPages );
		const recordingEndPositions = new Array( noPages );
		for ( let i = 0; i < noPages; i++ ) {
			elems[ i ] = [];
			promises[ i ] = pdf.getPage( i + 1 );
			recordingEndPositions[ i ] = 0;
		}
		return Promise.all( promises )
			.then( values => {
				debug( 'Retrieved all pages...' );
				this.backgrounds = values;
				this.elements = elems;
				this.recordingEndPositions = recordingEndPositions;
				this.setState({
					currentPage: 0,
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
	}

	saveInBrowser = ( clbk = noop ) => {
		debug( 'Save created elements to local storage...' );
		const session = this.context;
		const state = omit( this.state, OMITTED_KEYS );
		const data = {
			elements: this.elements,
			recordingEndPositions: this.recordingEndPositions,
			state: state
		};
		session.store.setItem( this.id, data, clbk );
	}

	record = () => {
		const recording = !this.state.recording;
		const currentPage = this.state.currentPage;
		let finishedRecording = false;
		if ( recording ) {
			this.delete();
			this.time = 0;
			this.recordingInterval = setInterval( () => {
				this.time += RECORD_TIME_INCREMENT;
			}, RECORD_TIME_INCREMENT );
		} else {
			const ctx = this.ctx;
			if ( ctx ) {
				ctx.clearRect( 0, 0, this.state.canvasWidth, this.state.canvasHeight );
			}
			this.renderBackground( currentPage );
			clearInterval( this.recordingInterval );
			finishedRecording = true;
		}
		const recordingEndPos = this.elements[ currentPage ].length;
		this.recordingEndPositions[ currentPage ] = recordingEndPos;
		this.setState({
			recording,
			finishedRecording
		});
	}

	closeResponseModal = () => {
		this.setState({
			showUploadModal: false,
			modalMessage: null
		});
	}

	renderProgressModal() {
		if ( !this.state.isExporting ) {
			return null;
		}
		return (
			<Modal
				show={this.state.isExporting}
				container={this}
			>
				<Modal.Header>
					<Modal.Title>Generating PDF...</Modal.Title>
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
				container={this}
			>
				<Modal.Header closeButton>
					<Modal.Title>Server Response</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{this.state.modalMessage}
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={this.closeResponseModal}>Close</Button>
				</Modal.Footer>
			</Modal>
		);
	}

	toggleNavigationModal = () => {
		this.setState({
			showNavigationModal: !this.state.showNavigationModal
		});
	}

	renderPagination() {
		if ( this.state.hideNavigationButtons ) {
			return null;
		}
		const currentPage = this.state.currentPage;
		return ( <ButtonGroup size="sm" className="sketch-pages" >
			<Button variant="light" onClick={this.toggleNavigationModal}>{currentPage+1}/{this.state.noPages}</Button>
			<TooltipButton tooltip="Go to first page" onClick={this.firstPage} glyph="fast-backward" disabled={this.state.playing} size="sm" />
			<TooltipButton tooltip="Go to previous page" onClick={this.previousPage} glyph="backward" disabled={this.state.playing} size="sm" />
			<TooltipButton tooltip="Go to next page" onClick={this.nextPage} glyph="forward" disabled={this.state.playing} size="sm" />
			<TooltipButton tooltip="Go to last page" onClick={this.lastPage} glyph="fast-forward" disabled={this.state.playing} size="sm" />
			<TooltipButton tooltip="Insert page after current one" onClick={() => {
				const idx = this.state.currentPage + 1;
				this.insertPage( idx );
			}} glyph="plus" disabled={this.state.playing} size="sm" />
		</ButtonGroup> );
	}

	renderRecordingButtons() {
		if ( this.state.hideRecordingButtons ) {
			return null;
		}
		const elems = this.elements[ this.state.currentPage ] || [];
		const deleteIsDisabled = elems.length === 0 ||
			!this.state.finishedRecording ||
			this.state.recording ||
			this.state.playing;
		return (
			<ButtonGroup size="sm" className="sketch-button-group">
				<TooltipButton tooltip={!this.state.recording ? 'Record drawing' : 'Pause recording'} variant="light" size="sm" disabled={this.state.playing} glyph={!this.state.recording ? 'camera' : 'stop'} onClick={this.record} />
				{ this.recordingEndPositions[ this.state.currentPage ] !== 0 ?
					<Fragment>
						<TooltipButton
							tooltip="Play recording" size="sm"
							variant={this.state.playing ? 'success' : 'light'} glyph="play" disabled={!this.state.finishedRecording}
							onClick={this.replay}
						/>
						<TooltipButton
							tooltip="Delete recording" onClick={this.delete}
							glyph="trash" disabled={deleteIsDisabled} size="sm"
						/>
					</Fragment> : null
				}
			</ButtonGroup>
		);
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
				this.setState({ mode });
				if ( mode !== 'pointer' ) {
					this.pointer.style.opacity = 0.0;
				} else if ( mode === 'pointer' ) {
					this.pointer.style.opacity = 0.7;
				}
			}}
			onColorChange={( color ) => { this.setState({ color }); }}
			onBrushSelect={( event ) => {
				this.setState({
					brushSize: event.target.value,
					mode: 'drawing'
				});
			}}
			onFontFamilySelect={(val) => {
				this.setState({
					fontFamily: val,
					mode: 'text'
				});
			}}
			onFontSizeSelect={( event ) => {
				this.setState({
					fontSize: Number( event.target.value ),
					mode: 'text'
				});
			}}
		/> );
	}

	renderRemoveButtons() {
		if ( this.state.hideInputButtons ) {
			return null;
		}
		const page = this.state.currentPage;
		const showUndo = this.elements[ page ] && this.elements[ page ].length > this.state.nUndos;
		return (
			<ButtonGroup size="sm" className="sketch-undo-redo sketch-button-group">
				<TooltipButton
					tooltip="Undo"
					onClick={this.undo}
					glyph="step-backward"
					disabled={!showUndo || this.state.playing}
					size="sm"
				/>
				<TooltipButton tooltip="Redo" disabled={this.state.nUndos <= 0 ||this.state.playing} glyph="step-forward" onClick={this.redo} size="sm" />
				<TooltipButton tooltip="Clear current page" onClick={this.clear} glyph="eraser" disabled={this.state.playing || this.state.recording} size="sm" />
				<TooltipButton tooltip="Reset all pages" onClick={() => {
					this.setState({
						showResetModal: !this.state.showResetModal
					});
				}} glyph="power-off" disabled={this.state.playing || this.state.recording} size="sm" />
			</ButtonGroup>
		);
	}

	renderSaveButtons() {
		if ( this.state.hideSaveButtons ) {
			return null;
		}
		const session = this.context;
		return (
			<ButtonGroup size="sm" className="sketch-save-buttons sketch-button-group">
				{ !this.props.pdf ? <TooltipButton tooltip="Load PDF (clears current canvas)" onClick={this.loadPDF} size="sm" glyph="file" /> : null }
				<TooltipButton tooltip="Download Slides" onClick={this.toggleSaveModal} glyph="file-pdf" size="sm" />
				<TooltipButton tooltip="Save in browser" onClick={() => {
					this.saveInBrowser( ( err ) => {
						if ( err ) {
							session.addNotification({
								title: 'Encountered an error',
								message: err.message,
								level: 'error',
								position: 'tr'
							});
						}
						session.addNotification({
							title: 'Saved',
							message: 'Notes saved in browser',
							level: 'success',
							position: 'tr'
						});
					});
				}} glyph="save" size="sm" />
				<TooltipButton tooltip="Upload to the server" onClick={this.uploadSketches} glyph="upload" size="sm" />
				{ hasTouch ? <TooltipButton tooltip={`${this.state.swiping ? 'Disable' : 'Enable'} two-finger swiping gestures for changing slides`} variant={this.state.swiping ? 'success' : 'secondary'} onClick={this.toggleSwiping} glyph="fingerprint" size="sm" /> : null }
			</ButtonGroup>
		);
	}

	toggleSwiping = () => {
		this.setState({
			swiping: !this.state.swiping
		});
	}

	movePointerStart = ( event ) => {
		event.stopPropagation();
		debug( '`onMouseDown` or `onTouchStart` event fired...' );
		if ( event.touches && event.touches.length > 1 ) {
			this.swipeStartX = event.touches[ 0 ].screenX;
			this.swipeStartY = event.touches[ 0 ].screenY;
		}
	}

	movePointerEnd = ( event ) => {
		// Mouse is not clicked anymore...
		event.stopPropagation();
		if (
			(
				this.swipeEndX - MIN_SWIPE_X > this.swipeStartX ||
				this.swipeEndX + MIN_SWIPE_X < this.swipeStartX
			) &&
			(
				this.swipeEndY < this.swipeStartY + MAX_SWIPE_Y &&
				this.swipeStartY > this.swipeEndY - MAX_SWIPE_Y &&
				this.swipeEndX > 0
			)
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
	}

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
			this.pointer.style.left = `${x+this.leftMargin}px`;
			this.pointer.style.top = `${y}px`;
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
			this.zoom.style.left = `${x-sw+this.leftMargin}px`;
			this.zoom.style.top = `${y-sh}px`;
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
	}

	renderTransmitButtons() {
		if ( this.state.hideTransmitButtons ) {
			return null;
		}
		const session = this.context;
		const users = session.userList
			.filter( user => isNull( user.exitTime ) )
			.map( user => {
				return { value: user.name, label: user.name };
			});
		const popover = <Popover id="popover-positioned-right" title="Remote control by...">
			<Select isClearable inline options={users} onChange={( newValue ) => {
				this.setState({
					receiveFrom: newValue
				});
			}} />
			<Checkbox defaultValue={this.state.groupMode} onChange={this.toggleGroupMode} legend="Group Mode" />
		</Popover>;
		return (
			<Gate owner>
				<ButtonGroup size="sm" className="sketch-button-group" >
					<TooltipButton size="sm" variant={this.state.transmitOwner ? 'success' : 'light'} onClick={this.toggleTransmit} glyph="bullhorn" />
					<OverlayTrigger trigger="click" placement="bottom" rootClose overlay={popover}>
						<Button size="sm" variant="light" >
							<div className="fa fa-eye" />
						</Button>
					</OverlayTrigger>
				</ButtonGroup>
			</Gate>
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
	}

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
	}

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

	renderHTMLOverlays() {
		const keys = objectKeys( this.props.nodes );
		const divs = [];
		const page = this.toOriginalPage( this.state.currentPage );
		if ( this.props.feedbackButtons && !isNull( page ) ) {
			divs.push(
				<Fragment>
					<FeedbackButtons
						key={`${this.id}-slide-${page}`} id={`${this.id}-slide-${page}`}
						customFeedback={false} vertical
					/>
					<Gate owner>
						<Button
							onClick={() => this.setState({
								showFeedbackModal: !this.state.showFeedbackModal
							})}
							variant="light"
							style={{ right: '0px', top: '150px', position: 'absolute' }}
						>
							Show all
						</Button>
					</Gate>
				</Fragment>
			);
		}
		if ( keys.length === 0 ) {
			return divs;
		}
		for ( let i = 0; i < keys.length; i++ ) {
			const node = this.props.nodes[ keys[ i ] ];
			let className = 'invisible-page';
			if ( keys[ i ] === String( page+1 ) ) {
				className = 'sketch-node-container';
			}
			if ( isObject( node ) && node.component ) {
				if ( node.style ) {
					if ( keys[ i ] === String( page+1 ) ) {
						className = 'sketch-node-container-basic';
					}
					divs.push( <div key={i} style={node.style} className={className} >{node.component}</div> );
				} else {
					divs.push( <div key={i} className={className} >
						{node.component}
					</div> );
				}
			} else {
				divs.push( <div key={i} className={className} >{node}</div> );
			}
		}
		return divs;
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
					(
						this.swipeEndX - MIN_SWIPE_X > this.swipeStartX ||
						this.swipeEndX + MIN_SWIPE_X < this.swipeStartX
					) &&
					(
						this.swipeEndY < this.swipeStartY + MAX_SWIPE_Y &&
						this.swipeStartY > this.swipeEndY - MAX_SWIPE_Y &&
						this.swipeEndX > 0
					)
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
			className="sketch-canvas"
			width={this.state.canvasWidth * DPR}
			height={this.state.canvasHeight * DPR}
			style={{
				position: 'absolute',
				margin: 'auto',
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
						{this.renderRecordingButtons()}
						{this.renderTransmitButtons()}
						{this.renderSaveButtons()}
						<VoiceControl reference={this} id={this.props.voiceID} commands={VOICE_COMMANDS} />
					</div>
					<div className="canvas-wrapper"
						style={{
							width: this.state.canvasWidth,
							height: this.state.canvasHeight
						}}
						ref={( div ) => { this.canvasWrapper = div; }}
					>
						{this.renderHTMLOverlays()}
						{canvas}
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
					<NavigationModal
						container={this}
						show={this.state.showNavigationModal}
						onSelect={this.gotoPage}
						noPages={this.state.noPages}
						onHide={this.toggleNavigationModal}
					/>
					{this.renderProgressModal()}
					<ResetModal
						container={this}
						show={this.state.showResetModal}
						onSubmit={this.clearAll}
						onHide={() => {
							this.setState({ showResetModal: false });
						}}
					/>
					<SaveModal
						container={this}
						show={this.state.showSaveModal}
						saveAsPDF={this.saveAsPDF}
						saveAsPNG={this.saveAsPNG}
						onHide={this.toggleSaveModal}
						pdf={this.props.pdf}
						session={this.context}
						id={this.id}
					/>
					{ this.state.showFeedbackModal ? <FeedbackModal
						container={this}
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
					/> : null }
					{ this.props.showTutorial ?
						<Joyride
							steps={guide}
							showProgress
							run={true}
						/> : null
					}
				</Card>
				<KeyControls
					container={this.sketchpadPanel}
					actions={{
						'ArrowDown': this.nextPage,
						'ArrowUp': this.previousPage
					}}
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
	hideRecordingButtons: false,
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
	transmitOwner: true,
	groupMode: false,
	voiceID: null,
	style: {},
	onChange() {}
};

Sketchpad.propTypes = {
	autoSave: PropTypes.bool,
	feedbackButtons: PropTypes.bool,
	intervalTime: PropTypes.number,
	hideInputButtons: PropTypes.bool,
	hideNavigationButtons: PropTypes.bool,
	hideRecordingButtons: PropTypes.bool,
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
	transmitOwner: PropTypes.bool,
	groupMode: PropTypes.bool,
	voiceID: PropTypes.string,
	style: PropTypes.object,
	onChange: PropTypes.func
};

Sketchpad.contextType = SessionContext;


// EXPORTS //

export default Sketchpad;
