// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Panel from 'react-bootstrap/lib/Panel';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import Button from 'react-bootstrap/lib/Button';
import InputGroup from 'react-bootstrap/lib/InputGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Tooltip from 'react-bootstrap/lib/Tooltip';
import saveAs from 'utils/file-saver';
import { TwitterPicker } from 'react-color';
import './sketchpad.css';


// FUNCTIONS //

const createTooltip = ( str ) => {
	return <Tooltip id="tooltip">{str}</Tooltip>;
};


// MAIN //

class Sketchpad extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			brushColor: props.brushColor,
			brushSize: props.brushSize,
			showColorPicker: false,
			recording: false,
			finishedRecording: false,
			lines: []
		};
		this.isMouseDown = false;
	}

	componentWillUnmount() {
		if ( this.interval ) {
			clearInterval( this.interval );
		}
	}

	redraw = () => {
		if ( this.ctx ) {
			this.ctx.clearRect(0, 0, this.props.canvasWidth, this.props.canvasHeight);
		}
		const { lines } = this.state;

		let idx = 0;
		let iter = () => {
			this.drawLine( lines[ idx ] );
			idx += 1;
			window.setTimeout( iter, lines[ idx ].time - lines[ idx-1 ].time );
		};
		window.setTimeout( iter, lines[ 0 ].time );
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
		this.setState({
			finishedRecording: false,
			lines: []
		});
	}

	drawLine = ( line ) => {
		if ( this.ctx ) {
			this.ctx.lineWidth = line.size;
			this.ctx.lineCap = 'round';
			this.ctx.strokeStyle = line.color;
			this.ctx.beginPath();
			this.ctx.moveTo( line.startX, line.startY );
			this.ctx.lineTo( line.endX, line.endY );
			this.ctx.stroke();
		}
	}

	drawStart = ( evt ) => {
		const { x, y } = this.mousePosition( evt );
		this.x = x;
		this.y = y;
		this.isMouseDown = true;
		this.draw( evt );
	}

	drawEnd = () => {
		this.isMouseDown = false;
	}

	draw = ( evt ) => {
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
			this.clear();
			this.time = 0;
			this.interval = setInterval( () => {
				this.time += 1000;
			}, 1000 );
		} else {
			if ( this.ctx ) {
				this.ctx.clearRect( 0, 0, this.props.canvasWidth, this.props.canvasHeight );
			}
			finishedRecording = true;
		}
		this.setState({
			recording,
			finishedRecording
		});
	}

	render() {
		return (
			<Panel style={{ width: this.props.canvasWidth, position: 'relative' }}>
				<div className="panel-heading clearfix">
					<span className="sketch-header">{this.props.title}</span>
					<ButtonGroup bsSize="small" style={{ float: 'right' }} >
						<Button onClick={this.record} >{ !this.state.recording ? 'Record' : 'Stop' }</Button>
						<OverlayTrigger placement="top" overlay={createTooltip( 'Play recording' )}>
							<Button disabled={!this.state.finishedRecording} onClick={this.redraw} >Play</Button>
						</OverlayTrigger>
						<OverlayTrigger placement="top" overlay={createTooltip( 'Clear recording' )}>
							<Button
								disabled={this.state.lines.length === 0 || this.state.recording}
								onClick={this.clear}
							>Clear</Button>
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
	canvasWidth: 800,
	canvasHeight: 400,
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


// EXPORTS //

export default Sketchpad;
