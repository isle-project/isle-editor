// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import Pressure from 'pressure';
import Panel from 'react-bootstrap/lib/Panel';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import Button from 'react-bootstrap/lib/Button';
import InputGroup from 'react-bootstrap/lib/InputGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Tooltip from 'react-bootstrap/lib/Tooltip';
import isArray from '@stdlib/assert/is-array';
import saveAs from 'utils/file-saver';
import { TwitterPicker } from 'react-color';
import './sketchpad.css';


// VARIABLES //

const debug = logger( 'isle-editor:sketchpad' );
const UNDO_LINES_NO = 5;


// FUNCTIONS //

const createTooltip = ( str ) => {
	return <Tooltip id="tooltip">{str}</Tooltip>;
};


// MAIN //

class Sketchpad extends Component {
	constructor( props ) {
		super( props );

		this.force = 1.0;

		this.state = {
			brushColor: props.brushColor,
			brushSize: props.brushSize,
			showColorPicker: false,
			recording: false,
			finishedRecording: false,
			lines: [],
			recordingEndPos: 0,
			nUndos: 0
		};
		this.isMouseDown = false;
	}

	componentDidMount() {
		if ( this.props.id ) {
			const session = this.context.session;
			const promise = session.store.getItem( this.props.id + '_lines' );
			promise.then( ( data ) => {
				if ( isArray( data ) ) {
					this.setState({
						lines: data,
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

	redraw = () => {
		this.setState({
			playing: true
		});
		if ( this.ctx ) {
			this.ctx.clearRect(0, 0, this.props.canvasWidth, this.props.canvasHeight);
		}
		const { lines } = this.state;

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
	}

	mousePosition = ( evt ) => {
		const rect = this.canvas.getBoundingClientRect();
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
		if ( this.ctx ) {
			this.ctx.clearRect( 0, 0, this.props.canvasWidth, this.props.canvasHeight );
		}
		const lines = this.state.lines.slice( 0, this.state.recordingEndPos );
		this.setState({
			nUndos: 0,
			lines
		});
	}

	delete = () => {
		if ( this.ctx ) {
			this.ctx.clearRect( 0, 0, this.props.canvasWidth, this.props.canvasHeight );
		}
		const session = this.context.session;
		session.store.removeItem( this.props.id+'_lines', debug );
		this.setState({
			finishedRecording: false,
			lines: [],
			nUndos: 0,
			recordingEndPos: 0
		});
	}

	undo = () => {
		const lines = this.state.lines;
		let nUndos = this.state.nUndos;
		if ( lines.length - nUndos > this.state.recordingEndPos ) {
			if ( this.ctx ) {
				this.ctx.clearRect( 0, 0, this.props.canvasWidth, this.props.canvasHeight );
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
		const { lines, nUndos } = this.state;
		if ( nUndos > 0 ) {
			const idx = lines.length - nUndos;
			debug( 'Line index: '+idx );
			if ( idx >= 0 ) {
				for ( let i = idx; i < idx + UNDO_LINES_NO; i++ ) {
					this.drawLine( this.state.lines[ i ]);
				}
				this.setState({
					nUndos: this.state.nUndos - UNDO_LINES_NO
				});
			}
		}
	}

	drawLine = ( line ) => {
		if ( this.ctx ) {
			this.ctx.lineWidth = line.size * (1.0+this.force) * 0.5;
			this.ctx.lineCap = 'round';
			this.ctx.strokeStyle = line.color;
			this.ctx.beginPath();
			this.ctx.moveTo( line.startX, line.startY );
			this.ctx.lineTo( line.endX, line.endY );
			this.ctx.stroke();
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
			const lines = this.state.lines.slice();
			lines.push( line );
			this.props.onChange( lines );

			// Set to current coordinates:
			this.x = x;
			this.y = y;

			this.setState({
				lines
			});
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

	saveToPNG = () => {
		let name;
		if ( this.props.id ) {
			name = this.props.id+'.png';
		} else {
			name = 'drawing.png';
		}
		this.ctx.fillStyle = 'white';
		this.ctx.fillRect( 0, 0, this.canvas.width, this.canvas.height );
		this.canvas.toBlob( function onBlob( blob ) {
			saveAs( blob, name );
		});
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
			if ( this.ctx ) {
				this.ctx.clearRect( 0, 0, this.props.canvasWidth, this.props.canvasHeight );
			}
			clearInterval( this.interval );
			finishedRecording = true;
			if ( this.props.id ) {
				const session = this.context.session;
				session.store.setItem( this.props.id+'_lines', this.state.lines, debug );
			}
		}
		this.setState({
			recording,
			finishedRecording,
			recordingEndPos: this.state.lines.length
		});
	}

	render() {
		const deleteIsDisabled = this.state.lines.length === 0 ||
			!this.state.finishedRecording ||
			this.state.recording ||
			this.state.playing;
		return (
			<Panel style={{ width: this.props.canvasWidth, position: 'relative' }}>
				<div className="panel-heading clearfix">
					<span className="sketch-header">{this.props.title}</span>
					<ButtonGroup bsSize="small" style={{ float: 'right' }} >
						<Button onClick={this.record} >{ !this.state.recording ? 'Record' : 'Stop' }</Button>
						<OverlayTrigger placement="top" overlay={createTooltip( 'Play recording' )}>
							<Button bsStyle={this.state.playing ? 'success' : 'default'} disabled={!this.state.finishedRecording} onClick={this.redraw} >Play</Button>
						</OverlayTrigger>
						<OverlayTrigger placement="top" overlay={createTooltip( 'Delete recording' )}>
							<Button
								disabled={deleteIsDisabled}
								onClick={this.delete}
							>Delete</Button>
						</OverlayTrigger>
						<OverlayTrigger placement="top" overlay={createTooltip( 'Clear canvas' )}>
							<Button onClick={this.clear} style={{ marginLeft: '12px' }} >Clear</Button>
						</OverlayTrigger>
						<OverlayTrigger placement="top" overlay={createTooltip( 'Change brush color' )}>
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
						<OverlayTrigger placement="top" overlay={createTooltip( 'Undo' )}>
							<Button style={{ marginLeft: '12px' }} bsSize="xsmall" onClick={this.undo}>
								<Glyphicon glyph="step-backward" />
							</Button>
						</OverlayTrigger>
						<OverlayTrigger placement="top" overlay={createTooltip( 'Redo' )}>
							<Button bsSize="xsmall" disabled={this.state.nUndos <= 0} onClick={this.redo}>
								<Glyphicon glyph="step-forward" />
							</Button>
						</OverlayTrigger>
						<OverlayTrigger placement="top" overlay={createTooltip( 'Save drawing' )}>
							<Button style={{ marginLeft: '12px' }} bsSize="xsmall" onClick={this.saveToPNG}>
								<Glyphicon glyph="floppy-save" />
							</Button>
						</OverlayTrigger>
					</ButtonGroup>
				</div>
				<div style={{ display: this.state.showColorPicker ? 'initial' : 'none', top: '70px', right: '70px', position: 'absolute' }} >
					<TwitterPicker
						color={this.state.brushColor}
						onChangeComplete={this.handleBrushColorChange}
						triangle="top-right"
					/>
				</div>
				<canvas
					className="sketchpad-canvas"
					width={this.props.canvasWidth}
					height={this.props.canvasHeight}
					style={this.props.style}
					ref={( canvas ) => {
						if ( canvas ) {
							this.canvas = canvas;
							this.ctx = canvas.getContext( '2d' );
						}
					}}
					onClick={() => false}
					onMouseDown={this.drawStart}
					onMouseMove={this.draw}
					onMouseOut={this.drawEnd}
					onMouseUp={this.drawEnd}
					onTouchCancel={this.drawEnd}
					onTouchEnd={this.drawEnd}
					onTouchMove={this.draw}
					onTouchStart={this.drawStart}
				/>
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
	canvasWidth: 900,
	canvasHeight: 500,
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
