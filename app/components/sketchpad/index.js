// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import pdfjs from 'pdfjs-dist';
import pdfMake from 'pdfmake-lite/build/pdfmake.min.js';
import logger from 'debug';
import Pressure from 'pressure';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import Panel from 'react-bootstrap/lib/Panel';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';
import InputGroup from 'react-bootstrap/lib/InputGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Tooltip from 'react-bootstrap/lib/Tooltip';
import isArray from '@stdlib/assert/is-array';
import max from '@stdlib/math/base/special/max';
import saveAs from 'utils/file-saver';
import base64toBlob from 'utils/base64-to-blob';
import { TwitterPicker } from 'react-color';
import './sketchpad.css';


// VARIABLES //

const debug = logger( 'isle-editor:sketchpad' );
const UNDO_ELEMENTS_NO = 5;
const COLORPICKER_COLORS = [
	'#000000', '#FF6900', '#FCB900',
	'#00D084', '#8ED1FC', '#0693E3',
	'#ABB8C3', '#EB144C', '#9900EF'
];
pdfjs.disableWorker = true;


// FUNCTIONS //

const createTooltip = ( str ) => {
	return <Tooltip id="tooltip">{str}</Tooltip>;
};

const TooltipButton = ({ tooltip, onClick, glyph, label, disabled }) => ( <OverlayTrigger placement="bottom" overlay={createTooltip( tooltip )}>
<Button bsSize="small" onClick={onClick} disabled={disabled} >
	{ glyph ? <Glyphicon glyph={glyph} /> : null }
	{label}
</Button>
</OverlayTrigger> );


// MAIN //

class Sketchpad extends Component {
	constructor( props ) {
		super( props );

		this.force = 1.0;
		this.elements = new Array( props.noPages );
		this.elements.fill( [] );
		this.backgrounds = new Array( props.noPages );
		this.backgrounds.fill( null );
		this.canvas = new Array( props.noPages );
		this.ctx = new Array( props.noPages );

		this.state = {
			color: props.color,
			brushSize: props.brushSize,
			showColorPicker: false,
			currentPage: 0,
			fontFamily: props.fontFamily,
			fontSize: props.fontSize,
			recording: false,
			finishedRecording: false,
			recordingEndPos: 0,
			nUndos: 0,
			noPages: 1,
			showResponseModal: false,
			textMode: false,
			showNavigationModal: false
		};
		this.isMouseDown = false;
	}

	componentDidMount() {
		if ( this.props.id ) {
			const session = this.context.session;
			const promise = session.store.getItem( this.props.id + '_elems' );
			promise.then( ( data ) => {
				debug( 'Retrieved data from previous session...' );
				if ( isArray( data ) ) {
					this.elements = data;
					this.redraw();
				}
			})
			.catch( ( err ) => {
				debug( err );
			});
		}
		if ( this.props.pdf ) {
			this.initializePDF();
		}
		Pressure.set( '.sketch-canvas', {
			change: ( force, event ) => {
				debug( 'Changed pen pressue: '+force );
				this.force = force;
			}
		});
	}

	componentWillUnmount() {
		if ( this.interval ) {
			clearInterval( this.interval );
		}
	}

	renderBackground = ( pageNumber ) => {
		const page = this.backgrounds[ pageNumber ];
		if ( page ) {
			var scale = 1.5;
			var viewport = page.getViewport( scale );
			this.canvas[ pageNumber ].height = viewport.height;
			this.canvas[ pageNumber ].width = viewport.width;

			// Render PDF page into canvas context
			var renderContext = {
				canvasContext: this.ctx[ pageNumber ],
				viewport: viewport
			};
			var renderTask = page.render( renderContext );
			renderTask
				.then( () => {
					console.log('Page rendered');
				})
				.catch( err => {
					console.log( err );
				});
		}
	}

	redraw = ( immediately = true ) => {
		debug( `Redrawing page ${this.state.currentPage+1}` );
		const ctx = this.ctx[ this.state.currentPage ];
		const canvas = this.canvas[ this.state.currentPage ];
		if ( ctx ) {
			ctx.clearRect( 0, 0, canvas.width, canvas.height );
		}
		this.renderBackground( this.state.currentPage );
		const elems = this.elements[ this.state.currentPage ];

		this.setState({
			playing: true
		}, () => {
			let idx = 0;
			let iter = () => {
				this.drawElement( elems[ idx ] );
				idx += 1;
				if ( idx < elems.length ) {
					if ( !immediately ) {
						window.setTimeout( iter, elems[ idx ].time - elems[ idx-1 ].time );
					} else {
						iter();
					}
				} else {
					this.setState({
						playing: false
					});
				}
			};
			window.setTimeout( iter, 0.0 );
		});
	}

	drawPage = ( idx ) => {
		const ctx = this.ctx[ idx ];
		const canvas = this.canvas[ idx ];
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
		const canvas = this.canvas[ this.state.currentPage ];
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
		for ( let i = 0; i < this.state.noPages; i++ ) {
			const canvas = this.canvas[ i ];
			const ctx = this.ctx[ i ];
			if ( ctx ) {
				ctx.clearRect( 0, 0, canvas.width, canvas.height );
			}
			this.canvas[ i ] = null;
			this.ctx[ i ] = null;
		}
		this.context.session.store.removeItem( this.props.id + '_elems' );
		this.elements = [ [] ];
		this.backgrounds = [ null ];
		this.setState({
			nUndos: 0,
			currentPage: 0,
			recordingEndPos: 0,
			noPages: 1
		}, () => {
			if ( this.props.pdf ) {
				this.initializePDF();
			}
		});
	}

	delete = () => {
		const canvas = this.canvas[ this.state.currentPage ];
		const ctx = this.ctx[ this.state.currentPage ];
		if ( ctx ) {
			ctx.clearRect( 0, 0, canvas.width, canvas.height );
		}
		const session = this.context.session;
		session.store.removeItem( this.props.id+'_elems', debug );
		this.elements[ this.state.currentPage ] = [];
		this.setState({
			finishedRecording: false,
			nUndos: 0,
			recordingEndPos: 0
		});
	}

	undo = () => {
		const elems = this.elements[ this.state.currentPage ];
		let nUndos = this.state.nUndos;
		if ( elems.length - nUndos > this.state.recordingEndPos ) {
			const ctx = this.ctx[ this.state.currentPage ];
			const canvas = this.canvas[ this.state.currentPage ];
			if ( ctx ) {
				ctx.clearRect( 0, 0, canvas.width, canvas.height );
			}
			this.renderBackground( this.state.currentPage );
			nUndos += UNDO_ELEMENTS_NO;
			const end = elems.length - nUndos;
			debug( `Redrawing elements ${this.state.recordingEndPos} to ${end} out of ${elems.length} elements` );
			for ( let i = this.state.recordingEndPos; i < end; i++ ) {
				this.drawElement( elems[ i ] );
			}
			this.setState({
				nUndos
			});
		}
	}

	redo = () => {
		const elems = this.elements[ this.state.currentPage ];
		const nUndos = this.state.nUndos;
		if ( nUndos > 0 ) {
			const idx = elems.length - nUndos;
			debug( 'Line index: '+idx );
			if ( idx >= 0 ) {
				for ( let i = idx; i < idx + UNDO_ELEMENTS_NO; i++ ) {
					this.drawElement( elems[ i ]);
				}
				this.setState({
					nUndos: this.state.nUndos - UNDO_ELEMENTS_NO
				});
			}
		}
	}

	drawElement = ( elem ) => {
		const ctx = this.ctx[ this.state.currentPage ];
		if ( ctx && elem ) {
			if ( elem.type === 'line' ) {
				ctx.lineWidth = elem.size * (1.0+this.force) * 0.5;
				ctx.lineCap = 'round';
				ctx.strokeStyle = elem.color;
				ctx.beginPath();
				ctx.moveTo( elem.startX, elem.startY );
				ctx.lineTo( elem.endX, elem.endY );
				ctx.stroke();
			}
			else if ( elem.type === 'text' ) {
				this.drawText( elem );
			}
		}
	}

	drawStart = ( event ) => {
		event.stopPropagation();
		if ( !this.state.textMode ) {
			const { x, y } = this.mousePosition( event );
			this.x = x;
			this.y = y;
			this.isMouseDown = true;
			this.draw( event );
		}
	}

	drawEnd = ( event ) => {
		event.stopPropagation();
		this.isMouseDown = false;
	}

	draw = ( evt ) => {
		if ( this.state.textMode ) {
			return;
		}
		evt.stopPropagation();
		if ( this.isMouseDown && !this.props.disabled ) {
			let { x, y } = this.mousePosition( evt );

			// Offset by one to always draw at least a dot:
			x += 1;
			y += 1;
			const line = {
				color: this.state.color,
				size: this.state.brushSize,
				startX: this.x,
				startY: this.y,
				endX: x,
				endY: y,
				time: this.time,
				type: 'line'
			};
			this.drawElement( line );
			const elems = this.elements[ this.state.currentPage ];
			elems.push( line );
			this.props.onChange( elems );

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

	handleColorChange = ( color ) => {
		this.setState({
			color: color.hex,
			showColorPicker: !this.state.showColorPicker
		});
	}

	uploadSketches = () => {
		const doc = this.preparePDF();
		doc.getBase64( ( pdf ) => {
			const pdfForm = new FormData();
			const name = this.props.id ? this.props.id : 'sketches';
			const filename = name + '.pdf';
			const pdfBlob = base64toBlob( pdf, 'application/pdf' );
			const pdfFile = new File([ pdfBlob ], filename, {
				type: 'application/pdf'
			});
			pdfForm.append( 'file', pdfFile );
			this.context.session.uploadFile( pdfForm, ( err, res ) => {
				if ( err ) {
					this.setState({
						modalMessage: err.message,
						showResponseModal: true
					});
				} else {
					const server = this.context.session.server;
					const filename = res.filename;
					const link = server + '/' + filename;
					this.setState({
						modalMessage: <span>
							The file has been uploaded successfully and can be accessed at the following address: <a href={link}>{link}</a>
						</span>,
						showResponseModal: true
					});
				}
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
		const canvas = this.canvas[ current ];
		if ( !this.backgrounds[ current ]) {
			// Set white background if none present:
			this.ctx[ current ].fillStyle = 'white';
			this.ctx[ current ].fillRect( 0, 0, canvas.width, canvas.height );
		}
		canvas.toBlob( function onBlob( blob ) {
			saveAs( blob, name );
		});
	}

	preparePDF = () => {
		const docDefinition = {
			content: [],
			pageSize: {
				width: this.canvas[ 0 ].width, // peek at first page and assume it's consistent over all pages
				height: this.canvas[ 0 ].height
			},
			pageMargins: [ 0, 0, 0, 0 ]
		};
		for ( let i = 0; i < this.state.noPages; i++ ) {
			const data = this.canvas[ i ].toDataURL();
			docDefinition.content.push({
				image: data,
				width: this.canvas[ i ].width
			});
		}
		return pdfMake.createPdf( docDefinition );
	}

	saveAsPDF = () => {
		const doc = this.preparePDF();
		const name = this.props.id ? this.props.id : 'sketches';
		doc.download( name+'.pdf' );
	}

	insertPage = () => {
		const idx = this.state.currentPage + 1;
		this.elements.splice( idx, 0, []);
		this.backgrounds.splice( idx, 0, null );
		this.setState({
			noPages: this.state.noPages + 1,
			currentPage: idx
		}, () => {
			this.redraw();
		});
	}

	handleEnter = ( event ) => {
		debug( 'Check if user hit ENTER...' );
		const rect = this.canvas[ this.state.currentPage ].getBoundingClientRect();
		const x = parseInt( this.textInput.style.left, 10 ) - rect.left;
		const y = parseInt( this.textInput.style.top, 10 ) - rect.top;
		if ( event.keyCode === 13 ) {
			const value = this.textInput.value;

			debug( 'Drawing text: '+value+' at x = '+x+' and y = '+y );
			this.textInput.value = '';
			this.textInput.style.top = String( parseInt( this.textInput.style.top, 10 ) + this.state.fontSize ) + 'px';
			const text = {
				value: value,
				x: x,
				y: y,
				color: this.state.color,
				fontSize: this.state.fontSize,
				fontFamily: this.state.fontFamily,
				time: this.time,
				type: 'text'
			};
			this.drawText( text );
			const elems = this.elements[ this.state.currentPage ];
			elems.push( text );
			this.props.onChange( elems );
		}
	}

	drawText = ({ x, y, value, color, fontSize, fontFamily }) => {
		const ctx = this.ctx[ this.state.currentPage ];
		ctx.font = `${fontSize}px ${fontFamily}`;
		ctx.fillStyle = color;
		ctx.fillText( value, x, y+fontSize );
	}

	handleClick = ( event ) => {
		const x = event.clientX;
		const y = event.clientY;
		if ( this.state.textMode ) {
			const input = this.textInput;
			input.style.left = x + 'px';
			input.style.top = y + 'px';
			const width = max( this.props.canvasWidth - x, 60 );
			console.log( `Resize to width ${width}...` );
			input.style.width = `${width}px`;
			input.focus();
		}
	}

	firstPage = () => {
		this.setState({
			currentPage: 0
		}, () => {
			this.redraw();
		});
	}

	lastPage = () => {
		this.setState({
			currentPage: this.state.noPages - 1
		}, () => {
			this.redraw();
		});
	}

	nextPage = () => {
		if ( this.state.currentPage < this.state.noPages-1 ) {
			this.setState({
				currentPage: this.state.currentPage + 1
			}, () => {
				this.redraw();
			});
		}
	}

	previousPage = () => {
		if ( this.state.currentPage > 0 ) {
			this.setState({
				currentPage: this.state.currentPage - 1
			}, () => {
				this.redraw();
			});
		}
	}

	gotoPage = ( idx ) => {
		this.setState({
			currentPage: idx,
			showNavigationModal: false
		}, () => {
			this.redraw();
		});
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
					console.error( err );
				});
		};
		reader.readAsArrayBuffer( files[ 0 ] );
	}

	initializePDF = () => {
		pdfjs.getDocument( this.props.pdf )
			.then( this.processPDF )
			.catch(function onError( err ) {
				console.error( err );
			});
	}

	processPDF = ( pdf ) => {
		debug( 'PDF loaded...' );
		const elems = new Array( pdf.numPages );
		const promises = new Array( pdf.numPages );
		this.setState({
			noPages: pdf.numPages
		}, () => {
			for ( let i = 0; i < pdf.numPages; i++ ) {
				elems[ i ] = [];
				promises[ i ] = pdf.getPage( i + 1 );
			}
			Promise.all( promises )
				.then( values => {
					debug( 'Retrieved all pages...' );
					this.backgrounds = values;
					this.elements = elems;
					for ( let i = 0; i < pdf.numPages; i++ ) {
						this.drawPage( i );
					}
				})
				.catch( error => debug( error ) );
		});
	}

	saveInBrowser = () => {
		if ( this.props.id ) {
			const session = this.context.session;
			session.store.setItem( this.props.id+'_elems', this.elements, ( err ) => {
				console.log( err );
				this.context.session.addNotification({
					title: 'Saved',
					message: 'Notes saved in browser',
					level: 'success',
					position: 'tr'
				});
			});
		}
	}

	record = () => {
		const recording = !this.state.recording;
		let finishedRecording = false;
		if ( recording ) {
			this.delete();
			this.time = 0;
			this.interval = setInterval( () => {
				this.time += 500;
			}, 500 );
		} else {
			const ctx = this.ctx[ this.state.currentPage ];
			if ( ctx ) {
				ctx.clearRect( 0, 0, this.props.canvasWidth, this.props.canvasHeight );
			}
			this.renderBackground( this.state.currentPage );
			clearInterval( this.interval );
			finishedRecording = true;
			if ( this.props.id ) {
				const session = this.context.session;
				session.store.setItem( this.props.id+'_elems', this.elements, debug );
			}
		}
		const recordingEndPos = this.elements[ this.state.currentPage ].length;
		this.setState({
			recording,
			finishedRecording,
			recordingEndPos
		});
	}

	toggleTextMode = () => {
		this.setState({
			textMode: !this.state.textMode
		});
	}

	closeResponseModal = () => {
		this.setState({
			showResponseModal: false
		});
	}

	renderUploadModal() {
		return (
			<Modal
				show={this.state.showResponseModal}
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

	renderNavigationModal = () => {
		return ( <Modal
			onHide={this.toggleNavigationModal}
			show={this.state.showNavigationModal}
			id="sketch-goto-modal"
			container={this}
		>
			<Modal.Header closeButton>
				<Modal.Title>Jump to Page:</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Nav justified bsStyle="pills" onSelect={this.gotoPage}>
					{this.backgrounds.map( ( e, i ) => {
						let elem = <NavItem key={i} eventKey={i} >
							Page {i+1}
						</NavItem>;
						if ( i > 0 && i % 6 === 0 ) {
							elem = <Fragment>
								<br />
								{elem}
							</Fragment>;
						}
						return elem;
					})}
				</Nav>
			</Modal.Body>
		</Modal> );
	}

	renderPagination() {
		const currentPage = this.state.currentPage;
		return ( <ButtonGroup bsSize="small" className="sketch-pages" >
			<Button onClick={this.toggleNavigationModal}>{currentPage+1}/{this.state.noPages}</Button>
			<TooltipButton tooltip="Go to first page" onClick={this.firstPage} glyph="fast-backward" disabled={this.state.playing} />
			<TooltipButton tooltip="Go to previous page" onClick={this.previousPage} glyph="backward" disabled={this.state.playing} />
			<TooltipButton tooltip="Go to next page" onClick={this.nextPage} glyph="forward" disabled={this.state.playing} />
			<TooltipButton tooltip="Go to last page" onClick={this.lastPage} glyph="fast-forward" disabled={this.state.playing} />
			<TooltipButton tooltip="Insert page after current one" onClick={this.insertPage} glyph="plus" disabled={this.state.playing} />
		</ButtonGroup> );
	}

	renderRecordingButtons() {
		const elems = this.elements[ this.state.currentPage ] || [];
		const deleteIsDisabled = elems.length === 0 ||
			!this.state.finishedRecording ||
			this.state.recording ||
			this.state.playing;
		return (
			<ButtonGroup bsSize="small" className="sketch-button-group">
				<OverlayTrigger placement="bottom" overlay={!this.state.recording ? createTooltip( 'Record drawing' ) : createTooltip( 'Pause recording' )}>
					<Button bsSize="small" disabled={this.state.playing} onClick={this.record} >
						<Glyphicon glyph={!this.state.recording ? 'record' : 'stop'} />
					</Button>
				</OverlayTrigger>
				<OverlayTrigger placement="bottom" overlay={createTooltip( 'Play recording' )}>
					<Button bsSize="small" bsStyle={this.state.playing ? 'success' : 'default'} disabled={!this.state.finishedRecording} onClick={() => {
						this.redraw( false );
					}} >
						<Glyphicon glyph="play" />
					</Button>
				</OverlayTrigger>
				<TooltipButton tooltip="Delete recording" onClick={this.delete} glyph="remove" disabled={deleteIsDisabled} />
			</ButtonGroup>
		);
	}

	renderDrawingButtons() {
		return (
			<ButtonGroup bsSize="small" className="sketch-drawing-buttons" >
				<OverlayTrigger placement="bottom" overlay={createTooltip( 'Drawing Mode' )}>
					<Button bsSize="small" bsStyle={!this.state.textMode ? 'success' : 'default'} onClick={this.toggleTextMode} >
						<Glyphicon glyph="pencil" />
					</Button>
				</OverlayTrigger>
				<InputGroup bsSize="small" className="sketch-input-group" >
					<InputGroup.Addon>Size</InputGroup.Addon>
					<FormControl
						type="number"
						min={1}
						max={42}
						onChange={( event ) => {
							this.setState({
								brushSize: event.target.value
							});
						}}
						defaultValue={this.state.brushSize}
					/>
				</InputGroup>
			</ButtonGroup>
		);
	}

	renderTextButtons() {
		return (
			<ButtonGroup bsSize="small" className="sketch-drawing-buttons" >
				<OverlayTrigger placement="bottom" overlay={createTooltip( 'Text Mode' )}>
					<Button bsSize="small" bsStyle={this.state.textMode ? 'success' : 'default'} onClick={this.toggleTextMode} ><Glyphicon glyph="font" /></Button>
				</OverlayTrigger>
				<DropdownButton
					id="sketch-font-dropdown"
					bsSize="small"
					title={this.state.fontFamily}
					style={{ width: 90, textAlign: 'left' }}
					onSelect={(val) => {
						this.setState({
							fontFamily: val,
							textMode: true
						});
					}}
				>
					<MenuItem eventKey="Arial">Arial</MenuItem>
					<MenuItem eventKey="Helvetica">Helvetica</MenuItem>
					<MenuItem eventKey="Times">Times</MenuItem>
					<MenuItem eventKey="Courier">Courier</MenuItem>
					<MenuItem eventKey="Verdana">Verdana</MenuItem>
					<MenuItem eventKey="Palatino">Palatino</MenuItem>
				</DropdownButton>
				<InputGroup bsSize="small" className="sketch-input-group" >
					<InputGroup.Addon>Size</InputGroup.Addon>
					<FormControl
						type="number"
						min={12}
						max={60}
						onChange={( event ) => {
							this.setState({
								fontSize: Number( event.target.value )
							});
						}}
						defaultValue={this.state.fontSize}
					/>
				</InputGroup>
			</ButtonGroup>
		);
	}

	renderSaveButtons() {
		return (
			<ButtonGroup bsSize="small" className="sketch-button-group">
				<TooltipButton tooltip="Load PDF (clears current canvas)" onClick={this.loadPDF} disabled={this.props.pdf !== null} glyph="file" />
				<TooltipButton tooltip="Export current page (PNG)" onClick={this.saveToPNG} glyph="save-file" />
				<TooltipButton tooltip="Export pages as PDF" onClick={this.saveAsPDF} glyph="floppy-save" />
				{ this.props.id ? <TooltipButton tooltip="Save in browser" onClick={this.saveInBrowser} glyph="save" /> : null }
				{ this.props.id ? <TooltipButton tooltip="Upload to the server" onClick={this.uploadSketches} glyph="cloud-upload" /> : null }
			</ButtonGroup>
		);
	}

	renderHTMLOverlays() {
		const node = this.props.nodes[ this.state.currentPage ];
		if ( !node ) {
			return null;
		}
		return <div className="sketch-node-container" >{node}</div>;
	}

	render() {
		const canvases = [];
		for ( let i = 0; i < this.state.noPages; i++ ) {
			canvases.push( <canvas
				className="sketch-canvas"
				key={`canvas-${i}`}
				width={this.props.canvasWidth}
				height={this.props.canvasHeight}
				style={{
					visibility: i === this.state.currentPage ? 'visible' : 'hidden',
					position: 'absolute',
					left: '0px',
					...this.props.style
				}}
				ref={( canvas ) => {
					if ( canvas ) {
						this.canvas[ i ] = canvas;
						this.ctx[ i ] = canvas.getContext( '2d' );
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
			/> );
		}
		return (
			<Panel className="modal-container" style={{ width: this.props.canvasWidth, position: 'relative' }}>
				<div className="sketch-panel-heading clearfix unselectable">
					<span className="sketch-header unselectable">{this.props.title}</span>
					{this.renderPagination()}
					<ButtonGroup bsSize="small" className="sketch-button-group" >
						<TooltipButton tooltip="Clear pages" onClick={this.clear} label="Clear" disabled={this.state.playing || this.state.recording} />
					</ButtonGroup>
					<ButtonGroup bsSize="small" className="sketch-button-group" >
						<OverlayTrigger placement="right" overlay={createTooltip( 'Change brush color' )}>
							<Button bsSize="small" onClick={this.toggleColorPicker} style={{ background: this.state.color, color: 'white' }} >Color</Button>
						</OverlayTrigger>
					</ButtonGroup>
					{this.renderDrawingButtons()}
					{this.renderTextButtons()}
					<ButtonGroup bsSize="small" className="sketch-button-group">
						<TooltipButton tooltip="Undo" onClick={this.undo} glyph="step-backward" disabled={this.state.playing} />
						<TooltipButton tooltip="Redo" disabled={this.state.nUndos <= 0 ||this.state.playing} glyph="step-forward" onClick={this.redo} />
					</ButtonGroup>
					{this.renderRecordingButtons()}
					{this.renderSaveButtons()}
				</div>
				<div style={{ display: this.state.showColorPicker ? 'initial' : 'none', top: '70px', left: '180px', position: 'absolute', zIndex: 9999 }} >
					<TwitterPicker
						color={this.state.color}
						colors={COLORPICKER_COLORS}
						onChangeComplete={this.handleColorChange}
						triangle="top-right"
					/>
				</div>
				<div style={{ width: this.props.canvasWidth, height: this.props.canvasHeight, overflow: 'scroll', position: 'relative' }}>
					{this.renderHTMLOverlays()}
					{canvases}
				</div>
				<input type="text" className="sketch-text-input" style={{
					display: this.state.textMode ? 'inline-block' : 'none',
					fontSize: this.state.fontSize,
					fontFamily: this.state.fontFamily,
					color: this.state.color,
					width: this.props.canvasWidth
				}} onKeyDown={this.handleEnter} ref={( div ) => {
					this.textInput = div;
				}} />
				{this.renderUploadModal()}
				{this.renderNavigationModal()}
			</Panel>
		);
	}
}


// TYPES //

Sketchpad.propDescriptions = {
	title: 'title to be displayed in the panel header',
	brushSize: 'size of the brush to paint with',
	color: 'color of the brush and texts',
	canvasWidth: 'width of the canvas element (in px)',
	canvasHeight: 'height of the canvas element (in px)',
	disabled: 'whether to make the component read-only and forbid drawing on the sketchboard',
	fontFamily: 'Font family',
	fontSize: 'Font size',
	noPages: 'initial number of pages',
	pdf: 'Link to PDF file for baked-in page backgrounds',
	style: 'CSS inline styles',
	onChange: 'callback invoked whenever a new line element is drawn'
};

Sketchpad.defaultProps = {
	title: 'Canvas',
	brushSize: 6,
	color: '#444444',
	canvasWidth: 1200,
	canvasHeight: 700,
	disabled: false,
	fontFamily: 'Arial',
	fontSize: 24,
	nodes: {},
	noPages: 1,
	pdf: null,
	style: {},
	onChange() {}
};

Sketchpad.propTypes = {
	title: PropTypes.string,
	brushSize: PropTypes.number,
	color: PropTypes.string,
	canvasWidth: PropTypes.number,
	canvasHeight: PropTypes.number,
	disabled: PropTypes.bool,
	fontFamily: PropTypes.string,
	fontSize: PropTypes.number,
	nodes: PropTypes.object,
	noPages: PropTypes.number,
	pdf: PropTypes.string,
	style: PropTypes.object,
	onChange: PropTypes.func
};

Sketchpad.contextTypes = {
	session: PropTypes.object
};


// EXPORTS //

export default Sketchpad;
