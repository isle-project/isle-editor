// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { TwitterPicker } from 'react-color';
import DropdownButton from 'react-bootstrap/DropdownButton';
import DropdownItem from 'react-bootstrap/DropdownItem';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Tooltip from 'components/tooltip';
import TooltipButton from './tooltip_button.js';


// VARIABLES //

const COLORPICKER_COLORS = [
	'#000000', '#FF6900', '#FCB900',
	'#00D084', '#8ED1FC', '#0693E3',
	'#ABB8C3', '#EB144C', '#9900EF'
];


// MAIN //

class InputButtons extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			showColorPicker: false
		};
	}

	toggleColorPicker = () => {
		this.setState({
			showColorPicker: !this.state.showColorPicker
		});
	}

	toggleDrawingMode = () => {
		this.props.onModeChange( this.props.mode === 'drawing' ? 'none' : 'drawing' );
	}

	toggleDragMode = () => {
		this.props.onModeChange( this.props.mode === 'drag' ? 'none' : 'drag' );
	}

	toggleDeleteMode = () => {
		this.props.onModeChange( this.props.mode === 'delete' ? 'none' : 'delete' );
	}

	toggleTextMode = () => {
		this.props.onModeChange( this.props.mode === 'text' ? 'none' : 'text' );
	}

	handleColorChange = ( color ) => {
		this.props.onColorChange( color.hex );
		this.setState({
			showColorPicker: !this.state.showColorPicker
		});
	}

	render() {
		return (
			<Fragment>
				<ButtonGroup size="sm" className="sketch-drag-delete-modes sketch-button-group" >
					<TooltipButton tooltip="Drag Mode" size="sm" variant={this.props.mode === 'drag' ? 'success' : 'secondary'} onClick={this.toggleDragMode} glyph="arrows-alt" />
					<TooltipButton tooltip="Delete Mode" size="sm" variant={this.props.mode === 'delete' ? 'success' : 'secondary'} onClick={this.toggleDeleteMode} glyph="times" />
				</ButtonGroup>
				<ButtonGroup size="sm" className="sketch-drawing-buttons" >
					<TooltipButton tooltip="Drawing Mode" glyph="pencil-alt" size="sm" variant={this.props.mode === 'drawing' ? 'success' : 'secondary'} onClick={this.toggleDrawingMode} />
					<InputGroup size="sm" className="sketch-input-group" >
						<FormControl
							type="number"
							min={1}
							max={42}
							onChange={this.props.onBrushSelect}
							value={this.props.brushSize}
						/>
					</InputGroup>
				</ButtonGroup>
				<ButtonGroup size="sm" >
					<TooltipButton size="sm" variant={this.props.mode === 'text' ? 'success' : 'secondary'} onClick={this.toggleTextMode} tooltip="Text Mode" glyph="font" />
					<DropdownButton
						id="sketch-font-dropdown"
						size="sm"
						variant={this.props.mode === 'text' ? 'success' : 'secondary'}
						title={this.props.fontFamily}
						onSelect={this.props.onFontFamilySelect}
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
							onChange={this.props.onFontSizeSelect}
							value={this.props.fontSize}
						/>
					</InputGroup>
				</ButtonGroup>
				<ButtonGroup size="sm" >
					<Tooltip placement="right" tooltip="Change brush color" >
						<Button size="sm" onClick={this.toggleColorPicker} style={{ background: this.props.color, color: 'white' }} >Col</Button>
					</Tooltip>
				</ButtonGroup>
				<div className="sketch-colorpicker" style={{ display: this.state.showColorPicker ? 'initial' : 'none' }} >
					<TwitterPicker
						color={this.props.color}
						colors={COLORPICKER_COLORS}
						onChangeComplete={this.handleColorChange}
						triangle="top-right"
					/>
				</div>
			</Fragment>
		);
	}
}


// PROPERTIES //

InputButtons.propTypes = {
	brushSize: PropTypes.number.isRequired,
	color: PropTypes.string.isRequired,
	fontFamily: PropTypes.string.isRequired,
	fontSize: PropTypes.number.isRequired,
	mode: PropTypes.string.isRequired,
	onBrushSelect: PropTypes.func.isRequired,
	onColorChange: PropTypes.func.isRequired,
	onFontFamilySelect: PropTypes.func.isRequired,
	onFontSizeSelect: PropTypes.func.isRequired,
	onModeChange: PropTypes.func.isRequired
};


// EXPORTS //

export default InputButtons;
