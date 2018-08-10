// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import pdfjs from 'pdfjs-dist';
import pdfMake from 'pdfmake-lite/build/pdfmake.min.js';
import logger from 'debug';
import Pressure from 'pressure';
import Panel from 'react-bootstrap/lib/Panel';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';
import InputGroup from 'react-bootstrap/lib/InputGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Tooltip from 'react-bootstrap/lib/Tooltip';
import isArray from '@stdlib/assert/is-array';
import noop from '@stdlib/utils/noop';
import saveAs from 'utils/file-saver';
import base64toBlob from 'utils/base64-to-blob';
import { TwitterPicker } from 'react-color';
import './sketchpad.css';


// VARIABLES //

const debug = logger( 'isle-editor:sketchpad' );
const UNDO_LINES_NO = 5;
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
<Button bsSize="xsmall" onClick={onClick} disabled={disabled} >
	{ glyph ? <Glyphicon glyph={glyph} /> : null }
	{label}
</Button>
</OverlayTrigger> );


// MAIN //

class Sketchpad extends Component {
	constructor( props ) {
		super( props );

		this.force = 1.0;
		this.lines = [ [] ];
		this.backgrounds = [ null ];
		this.canvas = [];
		this.ctx = [];

		this.state = {
			brushColor: props.brushColor,
			brushSize: props.brushSize,
			showColorPicker: false,
			currentPage: 0,
			recording: false,
			finishedRecording: false,
			recordingEndPos: 0,
			nUndos: 0,
			noPages: 1,
			showResponseModal: false
		};
		this.isMouseDown = false;
	}

	componentDidMount() {
		if ( this.props.id ) {
			const session = this.context.session;
			const promise = session.store.getItem( this.props.id + '_lines' );
			promise.then( ( data ) => {
				if ( isArray( data ) ) {
					this.lines = data;
					this.setState({
						finishedRecording: true
					});
				}
			})
			.catch( ( err ) => {
				debug( err );
			});
		}
		Pressure.set( '.sketchpad-canvas', {
			change: ( force, event ) => {
				debug( 'changed pen pressue: '+force );
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

	redraw = () => {
		const ctx = this.ctx[ this.state.currentPage ];
		const canvas = this.canvas[ this.state.currentPage ];
		if ( ctx ) {
			ctx.clearRect( 0, 0, canvas.width, canvas.height );
		}
		this.renderBackground( this.state.currentPage );
		const lines = this.lines[ this.state.currentPage ];

		this.setState({
			playing: true
		}, () => {
			let idx = 0;
			let iter = () => {
				this.drawLine( lines[ idx ] );
				idx += 1;
				if ( idx < lines.length ) {
					window.setTimeout( iter, lines[ idx ].time - lines[ idx-1 ].time );
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
		const lines = this.lines[ idx ];
		for ( let i = 0; i < lines.length; i++ ) {
			this.drawLine( lines[ i ] );
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
		this.lines = [ [] ];
		this.backgrounds = [ null ];
		this.setState({
			nUndos: 0,
			currentPage: 0,
			recordingEndPos: 0,
			noPages: 1
		});
	}

	delete = () => {
		const canvas = this.canvas[ this.state.currentPage ];
		const ctx = this.ctx[ this.state.currentPage ];
		if ( ctx ) {
			ctx.clearRect( 0, 0, canvas.width, canvas.height );
		}
		const session = this.context.session;
		session.store.removeItem( this.props.id+'_lines', debug );
		this.lines[ this.state.currentPage ] = [];
		this.setState({
			finishedRecording: false,
			nUndos: 0,
			recordingEndPos: 0
		});
	}

	undo = () => {
		const lines = this.lines[ this.state.currentPage ];
		let nUndos = this.state.nUndos;
		if ( lines.length - nUndos > this.state.recordingEndPos ) {
			const ctx = this.ctx[ this.state.currentPage ];
			if ( ctx ) {
				ctx.clearRect( 0, 0, this.props.canvasWidth, this.props.canvasHeight );
			}
			nUndos += UNDO_LINES_NO;
			const end = lines.length - nUndos;
			debug( `Redrawing lines ${this.state.recordingEndPos} to ${end} from ${lines.length} lines` );
			for ( let i = this.state.recordingEndPos; i < end; i++ ) {
				this.drawLine( lines[ i ] );
			}
			this.setState({
				nUndos
			});
		}
	}

	redo = () => {
		const lines = this.lines[ this.state.currentPage ];
		const nUndos = this.state.nUndos;
		if ( nUndos > 0 ) {
			const idx = lines.length - nUndos;
			debug( 'Line index: '+idx );
			if ( idx >= 0 ) {
				for ( let i = idx; i < idx + UNDO_LINES_NO; i++ ) {
					this.drawLine( lines[ i ]);
				}
				this.setState({
					nUndos: this.state.nUndos - UNDO_LINES_NO
				});
			}
		}
	}

	drawLine = ( line ) => {
		const ctx = this.ctx[ this.state.currentPage ];
		if ( ctx && line ) {
			ctx.lineWidth = line.size * (1.0+this.force) * 0.5;
			ctx.lineCap = 'round';
			ctx.strokeStyle = line.color;
			ctx.beginPath();
			ctx.moveTo( line.startX, line.startY );
			ctx.lineTo( line.endX, line.endY );
			ctx.stroke();
		}
	}

	drawStart = ( event ) => {
		event.stopPropagation();
		const { x, y } = this.mousePosition( event );
		this.x = x;
		this.y = y;
		this.isMouseDown = true;
		this.draw( event );
	}

	drawEnd = ( event ) => {
		event.stopPropagation();
		this.isMouseDown = false;
	}

	draw = ( evt ) => {
		evt.stopPropagation();
		if ( this.isMouseDown && !this.props.disabled ) {
			let { x, y } = this.mousePosition( evt );

			// Offset by one to always draw at least a dot:
			x += 1;
			y += 1;
			const line = {
				color: this.state.brushColor,
				size: this.state.brushSize,
				startX: this.x,
				startY: this.y,
				endX: x,
				endY: y,
				time: this.time
			};
			this.drawLine( line );
			const lines = this.lines[ this.state.currentPage ];
			lines.push( line );
			this.props.onChange( lines );

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

	handleBrushColorChange = ( color ) => {
		this.setState({
			brushColor: color.hex,
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
		this.lines.splice( idx, 0, []);
		this.backgrounds.splice( idx, 0, null );
		this.setState({
			noPages: this.state.noPages + 1,
			currentPage: idx
		}, () => {
			this.redraw();
		});
	}

	nextPage = () => {
		if ( this.state.currentPage < this.lines.length-1 ) {
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
			var loadingTask = pdfjs.getDocument( pdfData );
			loadingTask.then( ( pdf ) => {
				debug( 'PDF loaded...' );
				const lines = new Array( pdf.numPages );
				const promises = new Array( pdf.numPages );
				this.setState({
					noPages: pdf.numPages
				}, () => {
					for ( let i = 0; i < pdf.numPages; i++ ) {
						lines[ i ] = [];
						promises[ i ] = pdf.getPage( i + 1 );
					}
					Promise.all( promises )
						.then( values => {
							debug( 'Retrieved all pages...' );
							this.backgrounds = values;
							this.lines = lines;
							for ( let i = 0; i < pdf.numPages; i++ ) {
								this.drawPage( i );
							}
						})
						.catch( error => debug( error ) );
				});
			}, function onError( err ) {
				console.error( err );
			});
		};
		reader.readAsArrayBuffer( files[ 0 ] );
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
				session.store.setItem( this.props.id+'_lines', this.lines, debug );
			}
		}
		const recordingEndPos = this.lines[ this.state.currentPage ].length;
		this.setState({
			recording,
			finishedRecording,
			recordingEndPos
		});
	}

	closeResponseModal = () => {
		this.setState({
			showResponseModal: false
		});
	}

	renderUploadModal() {
		return (
			<Modal show={this.state.showResponseModal} onHide={this.closeResponseModal}>
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

	render() {
		const currentPage = this.state.currentPage;
		const lines = this.lines[ currentPage ];
		const deleteIsDisabled = lines.length === 0 ||
			!this.state.finishedRecording ||
			this.state.recording ||
			this.state.playing;

		const canvases = [];
		for ( let i = 0; i < this.state.noPages; i++ ) {
			canvases.push( <canvas
				className="sketchpad-canvas"
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
				onClick={noop}
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
			<Panel style={{ width: this.props.canvasWidth, position: 'relative' }}>
				<div className="panel-heading clearfix">
					<span className="sketch-header">{this.props.title}</span>
					<ButtonGroup bsSize="small" className="sketch-pages" >
						<Button disabled>Page: {currentPage+1}/{this.lines.length}</Button>
						<TooltipButton tooltip="Go to previous page" onClick={this.previousPage} glyph="backward" disabled={this.state.playing} />
						<TooltipButton tooltip="Go to next page" onClick={this.nextPage} glyph="forward" disabled={this.state.playing} />
						<TooltipButton tooltip="Insert page after current one" onClick={this.insertPage} glyph="plus" disabled={this.state.playing} />
						<TooltipButton tooltip="Clear pages" onClick={this.clear} label="Clear" />
					</ButtonGroup>
					<ButtonGroup bsSize="small" style={{ float: 'right', marginTop: '3px' }} >
						<Button onClick={this.record} >{ !this.state.recording ? 'Record' : 'Stop' }</Button>
						<OverlayTrigger placement="bottom" overlay={createTooltip( 'Play recording' )}>
							<Button bsStyle={this.state.playing ? 'success' : 'default'} disabled={!this.state.finishedRecording} onClick={this.redraw} >Play</Button>
						</OverlayTrigger>
						<TooltipButton tooltip="Delete recording" onClick={this.delete} label="Delete" disabled={deleteIsDisabled} />
						<OverlayTrigger placement="bottom" overlay={createTooltip( 'Change brush color' )}>
							<Button onClick={this.toggleColorPicker} style={{ background: this.state.brushColor, color: 'white', marginLeft: '12px' }} >Color</Button>
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
						<TooltipButton tooltip="Undo" onClick={this.undo} glyph="step-backward" />
						<Tooltip tooltip="Redo" disabled={this.state.nUndos <= 0} glyph="step-forward" onClick={this.redo} />
						<TooltipButton tooltip="Load PDF (clears current canvas)" onClick={this.loadPDF} glyph="file" />
						<TooltipButton tooltip="Save current drawing (PNG)" onClick={this.saveToPNG} glyph="save" />
						<TooltipButton tooltip="Save pages as PDF" onClick={this.saveAsPDF} glyph="floppy-save" />
						<TooltipButton tooltip="Upload to the server" onClick={this.uploadSketches} glyph="cloud-upload" />
					</ButtonGroup>
				</div>
				<div style={{ display: this.state.showColorPicker ? 'initial' : 'none', top: '70px', right: '320px', position: 'absolute', zIndex: 9999 }} >
					<TwitterPicker
						color={this.state.brushColor}
						colors={COLORPICKER_COLORS}
						onChangeComplete={this.handleBrushColorChange}
						triangle="top-right"
					/>
				</div>
				<div style={{ width: this.props.canvasWidth, height: this.props.canvasHeight, overflow: 'scroll', position: 'relative' }}>
					{canvases}
				</div>
				{this.renderUploadModal()}
			</Panel>
		);
	}
}


// TYPES //

Sketchpad.propDescriptions = {
	title: 'title to be displayed in the panel header',
	brushSize: 'size of the brush to paint with',
	brushColor: 'color of the brush to paint with',
	canvasWidth: 'width of the canvas element (in px)',
	canvasHeight: 'height of the canvas element (in px)',
	disabled: 'whether to make the component read-only and forbid drawing on the sketchboard',
	style: 'CSS inline styles',
	onChange: 'callback invoked whenever a new line element is drawn'
};

Sketchpad.defaultProps = {
	title: 'Canvas',
	brushSize: 6,
	brushColor: '#444444',
	canvasWidth: 1200,
	canvasHeight: 600,
	disabled: false,
	style: {},
	onChange() {}
};

Sketchpad.propTypes = {
	title: PropTypes.string,
	brushSize: PropTypes.number,
	brushColor: PropTypes.string,
	canvasWidth: PropTypes.number,
	canvasHeight: PropTypes.number,
	disabled: PropTypes.bool,
	style: PropTypes.object,
	onChange: PropTypes.func
};

Sketchpad.contextTypes = {
	session: PropTypes.object
};


// EXPORTS //

export default Sketchpad;
