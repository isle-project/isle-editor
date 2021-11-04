// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import TwitterPicker from 'react-color/lib/components/twitter/Twitter';
import DropdownButton from 'react-bootstrap/DropdownButton';
import DropdownItem from 'react-bootstrap/DropdownItem';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Tooltip from '@isle-project/components/tooltip';
import TooltipButton from './tooltip_button.js';


// VARIABLES //

const COLORPICKER_COLORS = [
	'#000000', '#FF6900', '#FCB900',
	'#00D084', '#8ED1FC', '#0693E3',
	'#ABB8C3', '#EB144C', '#9900EF'
];
const BRUSH_SIZES = [ 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 18, 20, 22, 24, 30, 36, 42 ];
const FONT_SIZES = [ 8, 9, 10, 11, 12, 14, 18, 24, 30, 36, 48, 60, 72 ];


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
	};

	toggleDrawingMode = () => {
		this.props.onModeChange( this.props.mode === 'drawing' ? 'none' : 'drawing' );
	};

	toggleDragMode = () => {
		this.props.onModeChange( this.props.mode === 'drag' ? 'none' : 'drag' );
	};

	toggleDeleteMode = () => {
		this.props.onModeChange( this.props.mode === 'delete' ? 'none' : 'delete' );
	};

	togglePointerMode = () => {
		this.props.onModeChange( this.props.mode === 'pointer' ? 'none' : 'pointer' );
	};

	toggleZoomMode = () => {
		this.props.onModeChange( this.props.mode === 'zoom' ? 'none' : 'zoom' );
	};

	toggleTextMode = () => {
		this.props.onModeChange( this.props.mode === 'text' ? 'none' : 'text' );
	};

	handleColorChange = ( color ) => {
		this.props.onColorChange( color.hex );
		this.setState({
			showColorPicker: !this.state.showColorPicker
		});
	};

	render() {
		const { t } = this.props;
		/* eslint-disable i18next/no-literal-string */
		return (
			<Fragment>
				<ButtonGroup size="sm" className="sketch-drag-delete-modes sketch-button-group" >
					<TooltipButton tooltip={t('drag-mode')} size="sm" variant={this.props.mode === 'drag' ? 'success' : 'secondary'} onClick={this.toggleDragMode} glyph="arrows-alt" />
					<TooltipButton tooltip={t('delete-mode')} size="sm" variant={this.props.mode === 'delete' ? 'success' : 'secondary'} onClick={this.toggleDeleteMode} glyph="times" />
					<TooltipButton tooltip={t('magnifying-glass')} size="sm" variant={this.props.mode === 'zoom' ? 'success' : 'secondary'} onClick={this.toggleZoomMode} glyph="search-plus" />
					<TooltipButton tooltip={t('pointer-mode')} size="sm" variant={this.props.mode === 'pointer' ? 'success' : 'secondary'} onClick={this.togglePointerMode} glyph="circle" />
				</ButtonGroup>
				<ButtonGroup size="sm" className="sketch-drawing-buttons" >
					<TooltipButton tooltip={t('drawing-mode')} glyph="paint-brush" size="sm" variant={this.props.mode === 'drawing' ? 'success' : 'secondary'} onClick={this.toggleDrawingMode} />
					<DropdownButton
						id="sketch-brush-size-dropdown"
						size="sm" variant="light"
						title={this.props.brushSize}
						onSelect={this.props.onBrushSelect}
					>
						{BRUSH_SIZES.map( ( x, i ) => <DropdownItem key={i} eventKey={x}>{x}</DropdownItem> )}
					</DropdownButton>
				</ButtonGroup>
				<ButtonGroup size="sm" >
					<Tooltip placement="right" tooltip={t('change-brush-color')} >
						<Button size="sm" onClick={this.toggleColorPicker} style={{ background: this.props.color, color: 'white' }} >Col</Button>
					</Tooltip>
				</ButtonGroup>
				<ButtonGroup size="sm" className="sketch-text-buttons" >
					<TooltipButton
						size="sm" variant={this.props.mode === 'text' ? 'success' : 'secondary'}
						onClick={this.toggleTextMode} tooltip={t('text-mode')}
						glyph="font"
					/>
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
					<DropdownButton
						id="sketch-font-size-dropdown"
						size="sm" variant="light"
						title={this.props.fontSize}
						onSelect={this.props.onFontSizeSelect}
					>
						{FONT_SIZES.map( ( x, i ) => <DropdownItem key={i} eventKey={x}>{x}</DropdownItem> )}
					</DropdownButton>
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
		/* eslint-enable i18next/no-literal-string */
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
