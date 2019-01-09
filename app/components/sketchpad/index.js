// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import pdfjs from 'pdfjs-dist/webpack';
import pdfMake from 'pdfmake-lite/build/pdfmake.min.js';
import logger from 'debug';
import Pressure from 'pressure';
import Card from 'react-bootstrap/lib/Card';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Popover from 'react-bootstrap/lib/Popover';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import DropdownItem from 'react-bootstrap/lib/DropdownItem';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';
import InputGroup from 'react-bootstrap/lib/InputGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import SelectInput from 'react-select';
import isTouchDevice from 'is-touch-device';
import Checkbox from 'components/input/checkbox';
import contains from '@stdlib/assert/contains';
import isNumber from '@stdlib/assert/is-number';
import isObject from '@stdlib/assert/is-object';
import isNull from '@stdlib/assert/is-null';
import round from '@stdlib/math/base/special/round';
import max from '@stdlib/math/base/special/max';
import min from '@stdlib/math/base/special/min';
import noop from '@stdlib/utils/noop';
import omit from '@stdlib/utils/omit';
import objectKeys from '@stdlib/utils/keys';
import saveAs from 'utils/file-saver';
import base64toBlob from 'utils/base64-to-blob';
import Joyride from 'components/joyride';
import Tooltip from 'components/tooltip';
import { TwitterPicker } from 'react-color';
import Gate from 'components/gate';
import KeyControls from 'components/key-controls';
import VoiceControl from 'components/voice-control';
import randomstring from 'utils/randomstring/ascii';
import SessionContext from 'session/context.js';
import VOICE_COMMANDS from './voice_commands.json';
import ResetModal from './reset_modal.js';
import NavigationModal from './navigation_modal.js';
import TooltipButton from './tooltip_button.js';
import curve from './curve.js';
import guide from './guide.json';
import './sketchpad.css';


// VARIABLES //

const debug = logger( 'isle:sketchpad' );
const COLORPICKER_COLORS = [
	'#000000', '#FF6900', '#FCB900',
	'#00D084', '#8ED1FC', '#0693E3',
	'#ABB8C3', '#EB144C', '#9900EF'
];
const OMITTED_KEYS = [
	'isExporting', 'showColorPicker', 'showUploadModal', 'showNavigationModal', 'showResetModal'
];
const RECORD_TIME_INCREMENT = 100;
const RE_DIGITS = /^[0-9]+$/;
const MIN_SWIPE_X = 30;
const MAX_SWIPE_Y = 60;
const hasTouch = isTouchDevice();


// MAIN //

/**
* A drawing sketchpad for note taking on lecture slides or empty pages.
*
* @property {boolean} autoSave - controls whether the editor should save the current text to the local storage of the browser at a given time interval
* @property {number} intervalTime - time between auto saves
* @property {boolean} hideRecordingButtons - controls whether to hide the recording buttons
* @property {boolean} hideSaveButtons - controls whether to hide the save buttons
* @property {boolean} hideTransmitButtons - controls whether to hide buttons for transmitting user actions
* @property {number} brushSize - size of the brush to paint with
* @property {string} color - color of the brush and texts
* @property {number} canvasWidth - width of the canvas element (in px)
* @property {number} canvasHeight - height of the canvas element (in px)
* @property {boolean} fullscreen - controls whether to automatically resize the canvas to the width and height of the browser window
* @property {string} fill - if `horizontal`, fill all available horizontal space when drawing a PDF; if `vertical`, all vertical space is used to prevent y-axis overflow
* @property {boolean} disabled - whether to make the component read-only and forbid drawing on the sketchboard
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

		const loc = this.readURL();
		this.state = {
			color: props.color,
			brushSize: props.brushSize,
			showColorPicker: false,
			currentPage: loc ? loc - 1 : 0,
			fontFamily: props.fontFamily,
			fontSize: props.fontSize,
			groupMode: props.groupMode,
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
			swiping: true
		};
		this.isMouseDown = false;
	}

	static getDerivedStateFromProps( props, state ) {
		if ( props.fullscreen ) {
			return {
				canvasHeight: window.innerHeight - 85,
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
		if ( this.props.fullscreen ) {
			this.windowResize = window.addEventListener( 'resize', () => {
				this.setState({
					canvasHeight: window.innerHeight - 60,
					canvasWidth: window.innerWidth - 40
				}, () => {
					this.redraw();
				});
			});
		}
		let init;
		if ( this.props.pdf ) {
			init = this.initializePDF();
		} else {
			init = Promise.resolve();
		}
		init.then( () => {
			const promise = session.store.getItem( this.props.id + '_sketchpad' );
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
						id: this.props.id,
						type: 'SKETCHPAD_INIT_PAGES',
						value: this.state.insertedPages,
						noSave: true
					};
					if ( session.isOwner() ) {
						session.log( insertAction, action.email );
					}
				}
				else if ( type === 'member_action' ) {
					debug( 'Received member action...' );

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
							const type = action.type;
							if (
								type === 'SKETCHPAD_NEXT_PAGE' ||
								type === 'SKETCHPAD_PREVIOUS_PAGE' ||
								type === 'SKETCHPAD_GOTO_PAGE' ||
								type === 'SKETCHPAD_FIRST_PAGE' ||
								type === 'SKETCHPAD_LAST_PAGE'
							) {
								this.goToPage( action.value, false );
							}
						}
					}
					const type = action.type;
					if (
						type === 'SKETCHPAD_DRAW_TEXT' ||
						type === 'SKETCHPAD_DRAW_CURVE' ||
						type === 'SKETCHPAD_REPLAY'
					) {
						let elem = JSON.parse( action.value );
						elem.shouldLog = false;
						if ( elem.page === this.state.currentPage ) {
							if ( elem.type === 'text' ) {
								this.drawText( elem );
							} else {
								this.drawCurve( elem );
							}
						}
						const elements = this.elements[ elem.page ];
						elements.push( elem );
						this.props.onChange( elements );
					}
					else if ( type === 'SKETCHPAD_INSERT_PAGE' ) {
						debug( `Should insert page at ${action.value}...` );
						this.insertPage( action.value, false );
					}
					else if ( type === 'SKETCHPAD_INIT_PAGES' ) {
						const pagesToInsert = action.value;
						debug( 'Initialize new pages: '+pagesToInsert.join( ', ' ) );
						const newInsertedPages = this.state.insertedPages;
						for ( let i = 0; i < pagesToInsert.length; i++ ) {
							const idx = pagesToInsert[ i ];
							this.elements.splice( idx, 0, []);
							this.backgrounds.splice( idx, 0, null );
							this.recordingEndPositions.splice( idx, 0, 0 );
							newInsertedPages.push( idx );
						}
						this.setState({
							insertedPages: newInsertedPages,
							noPages: this.state.noPages + pagesToInsert.length
						}, () => {
							this.redraw();
						});
					}
					else if ( type === 'SKETCHPAD_DELETE_ELEMENT' ) {
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
					else if ( type === 'SKETCHPAD_DRAG_ELEMENT' ) {
						const { drawID, user, page, dx, dy } = JSON.parse( action.value );
						debug( `Should drag element with id ${drawID} by dx: ${dx} and dy: ${dy}...` );
						const elems = this.elements[ page ];
						for ( let i = 0; i < elems.length; i++ ) {
							const e = elems[ i ];
							if ( e.drawID === drawID && e.user === user ) {
								if ( e.type === 'curve' ) {
									const points = e.points;

									// eslint-disable-next-line max-depth
									for ( let i = 0; i < points.length; i++ ) {
										points[ i ] += i % 2 === 0 ?
											( dx / this.canvas.width ) :
											( dy / this.canvas.height );
									}
								}
								else if ( e.type === 'text' ) {
									e.x += ( dx / this.canvas.width );
									e.y += ( dy / this.canvas.height );
								}
							}
						}
						this.redraw();
					}
					else if ( type === 'SKETCHPAD_CLEAR_PAGE' ) {
						const page = action.value;
						const user = action.email;
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
					else if ( type === 'SKETCHPAD_CLEAR_ALL_PAGES' ) {
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
		window.addEventListener( 'hashchange', () => {
			const page = this.readURL();
			if ( page > 0 ) {
				this.gotoPage( page-1 );
			}
		});
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
			window.removeEventListener( 'resize', this.windowResize );
		}
		const opts = {
			passive: false
		};
		document.body.removeEventListener( 'touchstart', this.preventDefaultTouch, opts );
		document.body.removeEventListener( 'touchend', this.preventDefaultTouch, opts );
		document.body.removeEventListener( 'touchmove', this.preventDefaultTouch, opts );
	}

	retrieveData = ( data ) => {
		debug( 'Retrieved data from previous session...' );
		if ( isObject( data ) ) {
			this.elements = data.elements;
			this.recordingEndPositions = data.recordingEndPositions;
			for ( let i = 0; i < data.state.insertedPages.length; i++ ) {
				// Insert empty pages at the correct locations:
				const pageNo = data.state.insertedPages[ i ];
				this.backgrounds.splice( pageNo, 0, null );
			}
			const page = this.readURL();
			if ( page > 0 ) {
				data.state.currentPage = page - 1;
			} else {
				data.state.currentPage = 0;
			}
			data.state.noPages = this.backgrounds.length;
			data.state = omit( data.state, OMITTED_KEYS );
			this.setState( data.state, () => {
				this.redraw();
			});
		} else {
			this.redraw();
		}
	}

	toggleGroupMode = () => {
		this.setState({
			groupMode: !this.state.groupMode
		});
	}

	preventDefaultTouch = ( e ) => {
		if (
			this.canvas === e.target &&
			(
				this.state.mode === 'drawing' ||
				this.state.mode === 'drag' ||
				this.state.mode === 'delete' ||
				this.props.fullscreen
			)
		) {
			e.preventDefault();
		}
	}

	renderBackground = ( pageNumber ) => {
		const page = this.backgrounds[ pageNumber ];
		if ( page ) {
			let ratio;
			if ( this.props.fill === 'vertical' ) {
				ratio = this.state.canvasHeight / page.getViewport(1.0).height;
			} else {
				ratio = this.state.canvasWidth / page.getViewport(1.0).width;
			}
			const viewport = page.getViewport( ratio );
			if ( this.props.fill === 'vertical' ) {
				this.canvas.height = viewport.height;
				this.canvas.width = this.state.canvasWidth;
			} else {
				this.canvas.height = viewport.height;
				this.canvas.width = viewport.width - 15; // account for vertical scrollbar
			}

			// Move page to the center:
			viewport.transform[ 4 ] = max( ( this.state.canvasWidth - viewport.width ) / 2.0, 0.0 );
			/*
				`transform: [ a, b, c, d, e, f ]`

				a: Horizontal scaling.
				b: Horizontal skewing.
				c: Vertical skewing.
				d: Vertical scaling.
				e: Horizontal moving.
				f: Vertical moving.
			*/

			// Render PDF page into canvas context
			const renderContext = {
				canvasContext: this.ctx,
				viewport: viewport
			};
			return page.render( renderContext )
				.then( () => {
					debug( `Background rendered for page ${pageNumber}` );
				});
		}
		const canvas = this.canvas;
		const ctx = this.ctx;
		if ( ctx ) {
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
							id: this.props.id,
							type: 'SKETCHPAD_REPLAY',
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

	mousePosition = ( evt ) => {
		const canvas = this.canvas;
		const rect = canvas.getBoundingClientRect();
		let clientX = evt.clientX;
		let clientY = evt.clientY;

		// Use first touch if available:
		if ( evt.touches && evt.touches.length > 0 ) {
			clientX = evt.touches[ 0 ].clientX;
			clientY = evt.touches[ 0 ].clientY;
		}

		// Return position inside of the canvas element:
		return {
			x: clientX - rect.left,
			y: clientY - rect.top
		};
	}

	clear = () => {
		const currentPage = this.state.currentPage;
		if ( contains( this.state.insertedPages, currentPage ) ) {
			debug( 'Clear an inserted page; deleting it completely...' );
			this.elements.splice( currentPage, 1 );
			this.backgrounds.splice( currentPage, 1 );
			this.recordingEndPositions.splice( currentPage, 1 );
			const newInsertedPages = [];
			for ( let i = 0; i < this.state.insertedPages.length; i++ ) {
				let page = this.state.insertedPages[ i ];
				if ( currentPage !== page ) {
					if ( page > currentPage ) {
						page -= 1;
					}
					newInsertedPages.push( page );
				}
			}
			debug( 'New inserted pages are: '+newInsertedPages.join( ', ' ) );
			this.setState({
				noPages: this.state.noPages - 1,
				insertedPages: newInsertedPages,
				currentPage: this.state.currentPage - 1
			}, () => {
				this.redraw();
			});
		}
		else {
			this.elements[ currentPage ] = [];
			this.recordingEndPositions[ currentPage ] = 0;
			this.redraw();
		}
		const logAction = {
			id: this.props.id,
			type: 'SKETCHPAD_CLEAR_PAGE',
			value: currentPage
		};
		const session = this.context;
		if (
			session.isOwner() && this.state.transmitOwner
		) {
			session.log( logAction, 'members' );
		} else {
			session.log( logAction, 'owners' );
		}
	}

	clearAll = () => {
		const session = this.context;
		const canvas = this.canvas;
		const ctx = this.ctx;
		if ( ctx ) {
			ctx.clearRect( 0, 0, canvas.width, canvas.height );
		}
		session.store.removeItem( this.props.id + '_sketchpad' );
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
			id: this.props.id,
			type: 'SKETCHPAD_CLEAR_ALL_PAGES',
			value: null
		};
		if (
			session.isOwner() && this.state.transmitOwner
		) {
			session.log( logAction, 'members' );
		} else {
			session.log( logAction, 'owners' );
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
			ctx.strokeStyle = selected ? 'yellow' : color;
			ctx.beginPath();
			curve( ctx, points, this.canvas.width, this.canvas.height, 0.4, 25 );
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

			// Convert to relative coordinates:
			for ( let i = 0; i < this.currentPoints.length; i++ ) {
				this.currentPoints[ i ] /= ( i % 2 === 0 ) ? this.canvas.width : this.canvas.height;
			}
			const line = {
				points: this.currentPoints,
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

			this.redraw();
			const logAction = {
				id: this.props.id,
				type: 'SKETCHPAD_DRAW_CURVE',
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
	}

	draw = ( evt ) => {
		evt.stopPropagation();
		if ( this.state.swiping && evt.touches && evt.touches.length > 1 ) {
			this.swipeEndX = evt.touches[ 0 ].screenX;
			this.swipeEndY = evt.touches[ 0 ].screenY;
			this.isMouseDown = false;
			return;
		}
		let { x, y } = this.mousePosition( evt );
		if ( this.selectedElement ) {
			if ( this.state.mode === 'drag' ) {
				debug( 'Drag elements around...' );
				const dx = x - this.x;
				const dy = y - this.y;
				const e = this.selectedElement;
				if ( e.type === 'curve' ) {
					const points = e.points;
					for ( let i = 0; i < points.length; i++ ) {
						points[ i ] += i % 2 === 0 ?
							( dx / this.canvas.width ) :
							( dy / this.canvas.height );
					}
				}
				else if ( e.type === 'text' ) {
					e.x += ( dx / this.canvas.width );
					e.y += ( dy / this.canvas.height );
				}
				const session = this.context;
				const username = session.user.email || '';
				const action = {
					id: this.props.id,
					type: 'SKETCHPAD_DRAG_ELEMENT',
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
				this.redraw();
			}
		}
		if ( this.isMouseDown && !this.props.disabled ) {
			if ( this.state.mode === 'delete' ) {
				debug( 'Check whether to delete element...' );
				return this.checkDeletion( evt );
			}
			else if ( this.state.mode === 'drawing' ) {
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

	toggleColorPicker = () => {
		this.setState({
			showColorPicker: !this.state.showColorPicker
		});
	}

	toggleTransmit = () => {
		this.setState({
			transmitOwner: !this.state.transmitOwner
		});
	}

	handleColorChange = ( color ) => {
		this.setState({
			color: color.hex,
			showColorPicker: !this.state.showColorPicker
		});
	}

	uploadSketches = () => {
		this.setState({
			isExporting: true
		}, () => {
			this.preparePDF( ( err, doc ) => {
				doc.getBase64( ( pdf ) => {
					debug( 'Processing base64 string of PDF document' );
					const pdfForm = new FormData();
					const name = this.props.id ? this.props.id : 'sketches';
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
							const session = this.context;
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
					const session = this.context;
					session.uploadFile( pdfForm, onUpload );
				});
			});
		});
	}

	saveToPNG = () => {
		let name;
		if ( this.props.id ) {
			name = this.props.id+'.png';
		} else {
			name = 'sketches.png';
		}
		const current = this.state.currentPage;
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

	saveAsPDF = () => {
		this.setState({
			isExporting: true
		}, () => {
			this.preparePDF( ( err, doc ) => {
				const name = this.props.id ? this.props.id : 'sketches';
				doc.download( name+'.pdf', () => {
					this.setState({
						isExporting: false
					});
				});
			});
		});
	}

	insertPage = ( idx, logging = true ) => {
		this.elements.splice( idx, 0, []);
		this.backgrounds.splice( idx, 0, null );
		this.recordingEndPositions.splice( idx, 0, 0 );

		const newInsertedPages = this.state.insertedPages;
		newInsertedPages.push( idx );
		this.setState({
			noPages: this.state.noPages + 1,
			currentPage: idx,
			insertedPages: newInsertedPages,
			nUndos: 0
		}, () => {
			// Update hash of URL:
			this.updateURL( this.state.currentPage );

			this.redraw();
			if ( logging ) {
				const session = this.context;
				session.log({
					id: this.props.id,
					type: 'SKETCHPAD_INSERT_PAGE',
					value: idx
				}, 'members' );
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
				x: x / this.canvas.width,
				y: y / this.canvas.height,
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
		ctx.fillStyle = selected ? 'yellow' : color;
		const xval = round( x*this.canvas.width );
		const yval = round( y*this.canvas.height ) + fontSize;
		debug( `Draw text at x: ${xval} and y: ${yval}` );
		ctx.fillText( value, xval, yval );
		const session = this.context;
		if ( shouldLog ) {
			const logAction = {
				id: this.props.id,
				type: 'SKETCHPAD_DRAW_TEXT',
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
			const x = event.clientX;
			const y = event.clientY;
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
			this.redraw();
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
				curve( this.ctx, points, this.canvas.width, this.canvas.height, 0.4, 25 );
				this.ctx.closePath();
				if ( this.ctx.isPointInStroke( x, y ) ) {
					debug( `Point (${x}, ${y}) is in path of element with ID ${elem.drawID}` );
					found = i;
					this.selectedElement = elem;
					break;
				}
			}
			else if ( elem.type === 'text' ) {
				const width = this.ctx.measureText( elem.value ).width;
				const xabs = round( elem.x * this.canvas.width );
				const yabs = round( elem.y * this.canvas.height );
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
					id: this.props.id,
					type: 'SKETCHPAD_DELETE_ELEMENT',
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
		this.redraw();
	}

	firstPage = () => {
		this.setState({
			currentPage: 0,
			nUndos: 0
		}, () => {
			// Update hash of URL:
			this.updateURL( this.state.currentPage );
			this.redraw();
			const session = this.context;
			session.log({
				id: this.props.id,
				type: 'SKETCHPAD_FIRST_PAGE',
				value: this.state.currentPage
			}, 'members' );
		});
	}

	lastPage = () => {
		this.setState({
			currentPage: this.state.noPages - 1,
			nUndos: 0
		}, () => {
			// Update hash of URL:
			this.updateURL( this.state.currentPage );
			this.redraw();
			const session = this.context;
			session.log({
				id: this.props.id,
				type: 'SKETCHPAD_LAST_PAGE',
				value: this.state.currentPage
			}, 'members' );
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
			this.setState({
				currentPage: this.state.currentPage + 1,
				nUndos: 0
			}, () => {
				// Update hash of URL:
				this.updateURL( this.state.currentPage );
				this.redraw();
				const session = this.context;
				session.log({
					id: this.props.id,
					type: 'SKETCHPAD_NEXT_PAGE',
					value: this.state.currentPage
				}, 'members' );
			});
		}
	}

	previousPage = () => {
		if ( this.state.currentPage > 0 ) {
			this.setState({
				currentPage: this.state.currentPage - 1,
				nUndos: 0
			}, () => {
				// Update hash of URL:
				this.updateURL( this.state.currentPage );
				this.redraw();
				const session = this.context;
				session.log({
					id: this.props.id,
					type: 'SKETCHPAD_PREVIOUS_PAGE',
					value: this.state.currentPage
				}, 'members' );
			});
		}
	}

	gotoPage = ( idx, shouldLog = true ) => {
		debug( `Should go to page ${idx}...` );
		idx = parseInt( idx, 10 );
		if ( idx !== this.state.currentPage ) {
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
						id: this.props.id,
						type: 'SKETCHPAD_GOTO_PAGE',
						value: idx
					}, 'members' );
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
			pdfjs.getDocument( pdfData )
				.then( this.processPDF )
				.catch(function onError( err ) {
					debug( err );
				});
		};
		reader.readAsArrayBuffer( files[ 0 ] );
	}

	initializePDF = () => {
		return new Promise( ( resolve, reject ) => {
			pdfjs.getDocument( this.props.pdf )
				.then( ( pdf ) => {
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
		this.setState({
			noPages: noPages
		}, () => {
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
					clbk( null );
				})
				.catch( error => {
					debug( error );
					clbk( error );
				});
		});
	}

	saveInBrowser = ( clbk = noop ) => {
		if ( this.props.id ) {
			const session = this.context;
			const state = omit( this.state, OMITTED_KEYS );
			const data = {
				elements: this.elements,
				recordingEndPositions: this.recordingEndPositions,
				state: state
			};
			session.store.setItem( this.props.id+'_sketchpad', data, clbk );
		}
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

	toggleTextMode = () => {
		this.setState({
			mode: this.state.mode === 'text' ? 'none' : 'text'
		});
	}

	toggleDrawingMode = () => {
		this.setState({
			mode: this.state.mode === 'drawing' ? 'none' : 'drawing'
		});
	}

	toggleDragMode = () => {
		this.setState({
			mode: this.state.mode === 'drag' ? 'none' : 'drag'
		});
	}

	toggleDeleteMode = () => {
		this.setState({
			mode: this.state.mode === 'delete' ? 'none' : 'delete'
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
		if ( this.props.hideRecordingButtons ) {
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
				<TooltipButton tooltip="Play recording" size="sm" variant={this.state.playing ? 'success' : 'light'} glyph="play" disabled={!this.state.finishedRecording} onClick={this.replay} />
				<TooltipButton tooltip="Delete recording" onClick={this.delete} glyph="trash" disabled={deleteIsDisabled} size="sm" />
			</ButtonGroup>
		);
	}

	renderDrawingButtons() {
		return (
			<ButtonGroup size="sm" className="sketch-drawing-buttons" >
				<TooltipButton tooltip="Drawing Mode" glyph="pencil-alt" size="sm" variant={this.state.mode === 'drawing' ? 'success' : 'secondary'} onClick={this.toggleDrawingMode} />
				<InputGroup size="sm" className="sketch-input-group" >
					<FormControl
						type="number"
						min={1}
						max={42}
						onChange={( event ) => {
							this.setState({
								brushSize: event.target.value,
								mode: 'drawing'
							});
						}}
						value={this.state.brushSize}
					/>
				</InputGroup>
			</ButtonGroup>
		);
	}

	renderTextButtons() {
		return (
			<ButtonGroup size="sm" >
				<TooltipButton size="sm" variant={this.state.mode === 'text' ? 'success' : 'secondary'} onClick={this.toggleTextMode} tooltip="Text Mode" glyph="font" />
				<DropdownButton
					id="sketch-font-dropdown"
					size="sm"
					variant={this.state.mode === 'text' ? 'success' : 'secondary'}
					title={this.state.fontFamily}
					onSelect={(val) => {
						this.setState({
							fontFamily: val,
							mode: 'text'
						});
					}}
				>
					<DropdownItem eventKey="Arial">Arial</DropdownItem>
					<DropdownItem eventKey="Helvetica">Helvetica</DropdownItem>
					<DropdownItem eventKey="Times">Times</DropdownItem>
					<DropdownItem eventKey="Courier">Courier</DropdownItem>
					<DropdownItem eventKey="Verdana">Verdana</DropdownItem>
					<DropdownItem eventKey="Palatino">Palatino</DropdownItem>
				</DropdownButton>
				<InputGroup size="sm" className="sketch-input-group" >
					<FormControl
						type="number"
						min={12}
						max={60}
						onChange={( event ) => {
							this.setState({
								fontSize: Number( event.target.value ),
								mode: 'text'
							});
						}}
						value={this.state.fontSize}
					/>
				</InputGroup>
			</ButtonGroup>
		);
	}

	renderRemoveButtons() {
		const page = this.state.currentPage;
		const showUndo = this.elements[ page ] && this.elements[ page ].length > this.state.nUndos;
		return (
			<ButtonGroup size="sm" className="sketch-undo-redo sketch-button-group">
				<TooltipButton
					tooltip="Undo"
					onClick={this.undo}
					glyph="step-backward"
					disabled={!showUndo ||this.state.playing}
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
		if ( this.props.hideSaveButtons ) {
			return null;
		}
		const session = this.context;
		return (
			<ButtonGroup size="sm" className="sketch-save-buttons sketch-button-group">
				{ !this.props.pdf ? <TooltipButton tooltip="Load PDF (clears current canvas)" onClick={this.loadPDF} size="sm" glyph="file" /> : null }
				<TooltipButton tooltip="Export current page (PNG)" onClick={this.saveToPNG} glyph="file-image" size="sm" />
				<TooltipButton tooltip="Export pages as PDF" onClick={this.saveAsPDF} glyph="file-pdf" size="sm" />
				{ this.props.id ? <TooltipButton tooltip="Save in browser" onClick={() => {
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
				}} glyph="save" size="sm" /> : null }
				{ this.props.id ? <TooltipButton tooltip="Upload to the server" onClick={this.uploadSketches} glyph="upload" size="sm" /> : null }
				{ hasTouch ? <TooltipButton tooltip={`${this.state.swiping ? 'Disable' : 'Enable'} two-finger swiping gestures for changing slides`} variant={this.state.swiping ? 'success' : 'secondary'} onClick={this.toggleSwiping} glyph="fingerprint" size="sm" /> : null }
			</ButtonGroup>
		);
	}

	toggleSwiping = () => {
		this.setState({
			swiping: !this.state.swiping
		});
	}

	renderTransmitButtons() {
		if ( this.props.hideTransmitButtons ) {
			return null;
		}
		const session = this.context;
		const users = session.userList
			.filter( user => isNull( user.exitTime ) )
			.map( user => {
				return { value: user.name, label: user.name };
			});
		const popover = <Popover id="popover-positioned-right" title="Receive actions from...">
			<SelectInput isClearable inline options={users} onChange={( newValue ) => {
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

	toOriginalPage = ( idx ) => {
		const addedPages = this.state.insertedPages;
		let out = idx;
		for ( let i = 0; i < addedPages.length; i++ ) {
			const page = addedPages[ i ];
			if ( page === idx ) {
				return null;
			}
			else if ( addedPages[ i ] < idx ) {
				out -= 1;
			}
		}
		debug( `Page with index ${idx} corresponds to original page number ${out}...` );
		return out;
	}

	renderHTMLOverlays() {
		const page = this.toOriginalPage( this.state.currentPage );
		const keys = objectKeys( this.props.nodes );
		const divs = [];
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
		const canvas = <canvas
			className="sketch-canvas"
			width={this.state.canvasWidth}
			height={this.state.canvasHeight}
			style={{
				position: 'absolute',
				left: '0px',
				cursor: cursor,
				...this.props.style
			}}
			ref={( canvas ) => {
				if ( canvas ) {
					this.canvas = canvas;
					this.ctx = canvas.getContext( '2d' );
				}
			}}
			onClick={this.handleClick}
			onMouseDown={this.drawStart}
			onMouseMove={this.draw}
			onMouseOut={this.drawEnd}
			onMouseUp={this.drawEnd}
			onTouchCancel={this.drawEnd}
			onTouchEnd={this.drawEnd}
			onTouchMove={this.draw}
			onTouchStart={this.drawStart}
		/>;
		return (
			<Fragment>
				<Card
					id={this.props.id}
					ref={( div ) => {
						this.sketchpadPanel = div;
					}}
					className="modal-container"
					style={{
						width: this.state.canvasWidth+2,
						position: 'relative',
						marginBottom: this.props.fullscreen ? '0px' : '20px'
					}}
					tabIndex="0"
				>
					<div className="sketch-panel-heading clearfix unselectable">
						{this.renderPagination()}
						<ButtonGroup size="sm" className="sketch-drag-delete-modes sketch-button-group" >
							<TooltipButton tooltip="Drag Mode" size="sm" variant={this.state.mode === 'drag' ? 'success' : 'secondary'} onClick={this.toggleDragMode} glyph="arrows-alt" />
							<TooltipButton tooltip="Delete Mode" size="sm" variant={this.state.mode === 'delete' ? 'success' : 'secondary'} onClick={this.toggleDeleteMode} glyph="times" />
						</ButtonGroup>
						{this.renderDrawingButtons()}
						{this.renderTextButtons()}
						<ButtonGroup size="sm" >
							<Tooltip placement="right" tooltip="Change brush color" >
								<Button size="sm" onClick={this.toggleColorPicker} style={{ background: this.state.color, color: 'white' }} >Col</Button>
							</Tooltip>
						</ButtonGroup>
						{this.renderRemoveButtons()}
						{this.renderRecordingButtons()}
						{this.renderTransmitButtons()}
						{this.renderSaveButtons()}
						<VoiceControl reference={this} id={this.props.voiceID} commands={VOICE_COMMANDS} />
					</div>
					<div className="sketch-colorpicker" style={{ display: this.state.showColorPicker ? 'initial' : 'none' }} >
						<TwitterPicker
							color={this.state.color}
							colors={COLORPICKER_COLORS}
							onChangeComplete={this.handleColorChange}
							triangle="top-right"
						/>
					</div>
					<div style={{ width: this.state.canvasWidth, height: this.state.canvasHeight, overflow: 'auto', position: 'relative' }}>
						{this.renderHTMLOverlays()}
						{canvas}
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


// TYPES //

Sketchpad.defaultProps = {
	autoSave: true,
	intervalTime: 30000,
	hideRecordingButtons: false,
	hideSaveButtons: false,
	hideTransmitButtons: false,
	brushSize: 6,
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
	intervalTime: PropTypes.number,
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
