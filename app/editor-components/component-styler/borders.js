// MODULES //

import React, { Fragment, useEffect, useState } from 'react';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import omit from '@stdlib/utils/omit';
import ColorPicker from 'components/color-picker';
import UnitInputBase from './unit_input_base.js';
import BorderRadiusPicker from './border_radius_picker.js';
import './borders.css';


// VARIABLES //

const DEFAULT_BORDER_STATE = {
	color: 'black',
	width: '0px',
	style: 'none'
};
const RE_BORDER = /(solid|dashed|dotted|none|hidden|double|groove|ridge|inset|outset) (\d+[a-z%]+) ([\s\S]+)/;


// FUNCTIONS //

const borderStringToObject = ( str ) => {
	const match = RE_BORDER.exec( str );
	if ( !match ) {
		return null;
	}
	return {
		style: match[ 1 ],
		width: match[ 2 ],
		color: match[ 3 ]
	};
};

const extractBorderStyle = ( style, activeBorder ) => {
	let state;
	switch ( activeBorder ) {
		case 'all':
			state = borderStringToObject( style.border );
			return state;
		case 'left':
			state = borderStringToObject( style.borderLeft );
			return state;
		case 'top':
			state = borderStringToObject( style.borderTop );
			return state;
		case 'right':
			state = borderStringToObject( style.borderRight );
			return state;
		case 'bottom':
			state = borderStringToObject( style.borderBottom );
			return state;
	}
};

const BorderInputs = ({ activeBorder, style, onChange }) => {
	const [ state, setState ] = useState( DEFAULT_BORDER_STATE );
	const [ prevBorder, setPrevBorder ] = useState( activeBorder );
	useEffect(() => {
		if ( activeBorder !== prevBorder ) {
			const newState = extractBorderStyle( style, activeBorder );
			if ( newState ) {
				setState( newState );
			} else {
				setState( DEFAULT_BORDER_STATE );
			}
			setPrevBorder( activeBorder );
		}
	}, [ activeBorder, prevBorder, style ] );
	return (
		<Fragment>
			<Form.Group as={Row} >
				<Form.Label column sm={4} >
					Border Color
				</Form.Label>
				<Col sm={4} >
					<ColorPicker
						style={{ zIndex: 2000 }}
						color={state.color}
						onChange={({ rgb }) => {
							const { r, g, b, a } = rgb;
							const color = `rgba(${r}, ${g}, ${b}, ${a} )`;
							setState({
								...state,
								color
							});
							onChange( `${state.style} ${state.width} ${color}` );
						}}
						variant="Button"
					/>
				</Col>
			</Form.Group>
			<Form.Group as={Row} >
				<UnitInputBase
					label="Border Width"
					labelWidth={5} style={style}
					defaultValue={state.width}
					onChange={( borderWidth ) => {
						setState({
							...state,
							width: borderWidth
						});
						onChange( `${state.style} ${borderWidth} ${state.color}` );
					}}
				/>
			</Form.Group>
			<Form.Group as={Row} >
				<Form.Label column sm={5} >
					Border Style
				</Form.Label>
				<Col sm={7} >
					<ToggleButtonGroup
						name="options"
						onChange={( borderStyle ) => {
							setState({
								...state,
								style: borderStyle
							});
							onChange( `${borderStyle} ${state.width} ${state.color}` );
						}}
						type="radio"
						size="small"
						value={state.style}
						style={{ marginRight: '5px' }}
					>
						<ToggleButton
							variant="outline-secondary"
							value="none"
						>
							<i className="fas fa-times"></i>
						</ToggleButton>
						<ToggleButton
							variant="outline-secondary"
							value="solid"
							style={{ width: 42 }}
						>
							<span className="component-styler-unicode-solid">&#9135;</span>
						</ToggleButton>
						<ToggleButton
							variant="outline-secondary"
							value="dotted"
						>
							<i className="fas fa-ellipsis-h"></i>
						</ToggleButton>
						<ToggleButton
							variant="outline-secondary"
							value="dashed"
							style={{ width: 42 }}
						>
							<span className="component-styler-unicode-dashed">&#65101;</span>
						</ToggleButton>
					</ToggleButtonGroup>
				</Col>
			</Form.Group>
		</Fragment>
	);
};


// MAIN //

const Borders = ( props ) => {
	const [ activeBorder, setActiveBorder ] = useState( 'all' );
	if ( !props.active ) {
		return null;
	}
	const handleRightClick = () => {
		setActiveBorder( 'right' );
	};
	const handleLeftClick = () => {
		setActiveBorder( 'left' );
	};
	const handleTopClick = () => {
		setActiveBorder( 'top' );
	};
	const handleBottomClick = () => {
		setActiveBorder( 'bottom' );
	};
	const handleAllClick = () => {
		setActiveBorder( 'all' );
	};
	return (
		<Fragment>
			<Row>
				<Col sm={3} >
					<div className="component-styler-border-selector" >
						<div className="component-styler-border-graphical-box" >
							<div
								role="button" tabIndex={0}
								className={`component-styler-border-graphical-box-inside ${activeBorder === 'all' ? 'active' : ''}`}
								onClick={handleAllClick} onKeyPress={handleAllClick}
							/>
						</div>
						<div
							role="button" tabIndex={0}
							className={`component-styler-border-graphical-box-left ${activeBorder === 'left' ? 'active' : ''}`}
							onClick={handleLeftClick} onKeyPress={handleLeftClick}
						/>
						<div
							role="button" tabIndex={0}
							className={`component-styler-border-graphical-box-top ${activeBorder === 'top' ? 'active' : ''}`}
							onClick={handleTopClick} onKeyPress={handleTopClick}
						/>
						<div
							role="button" tabIndex={0}
							className={`component-styler-border-graphical-box-bottom ${activeBorder === 'bottom' ? 'active' : ''}`}
							onClick={handleBottomClick} onKeyPress={handleBottomClick}
						/>
						<div
							role="button" tabIndex={0}
							className={`component-styler-border-graphical-box-right ${activeBorder === 'right' ? 'active' : ''}`}
							onClick={handleRightClick} onKeyPress={handleRightClick}
						/>
					</div>
				</Col>
				<Col sm={9} >
					<BorderInputs
						activeBorder={activeBorder}
						style={props.style} onChange={( border ) => {
							const newStyle = omit( props.style, [ 'border', 'borderLeft', 'borderTop', 'borderRight', 'borderBottom' ] );
							if ( activeBorder === 'all' ) {
								newStyle.border = border;
							} else if ( props.style.border ) {
								newStyle.border = props.style.border;
							}
							if ( activeBorder === 'left' ) {
								newStyle.borderLeft = border;
							} else if ( props.style.borderLeft ) {
								newStyle.borderLeft = props.style.borderLeft;
							}
							if ( activeBorder === 'top' ) {
								newStyle.borderTop = border;
							} else if ( props.style.borderTop ) {
								newStyle.borderTop = props.style.borderTop;
							}
							if ( activeBorder === 'right' ) {
								newStyle.borderRight = border;
							} else if ( props.style.borderRight ) {
								newStyle.borderRight = props.style.borderRight;
							}
							if ( activeBorder === 'bottom' ) {
								newStyle.borderBottom = border;
							} else if ( props.style.borderBottom ) {
								newStyle.borderBottom = props.style.borderBottom;
							}
							props.onChange( newStyle );
						}}
					/>
				</Col>
			</Row>
			<hr />
			<BorderRadiusPicker
				style={props.style}
				onChange={( borderRadius ) => {
					const newStyle = { ...props.style };
					newStyle.borderRadius = borderRadius;
					props.onChange( newStyle );
				}}
			/>
		</Fragment>
	);
};


// EXPORTS //

export default Borders;
