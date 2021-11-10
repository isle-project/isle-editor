// MODULES //

import React, { Fragment, useCallback, useEffect, useState } from 'react';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import omit from '@stdlib/utils/omit';
import Tooltip from '@isle-project/components/tooltip';
import ColorPicker from '@isle-project/components/color-picker';
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
const TOGGLE_BUTTON_WIDTH = { width: 42 };
const PICKER_STYLE = { zIndex: 2000 };


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

const BorderInputs = ({ activeBorder, style, onChange, t }) => {
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

	const handleColorChange = useCallback( ({ rgb }) => {
		const { r, g, b, a } = rgb;
		const color = `rgba(${r}, ${g}, ${b}, ${a} )`; // eslint-disable-line i18next/no-literal-string
		setState({
			...state,
			color
		});
		onChange( `${state.style} ${state.width} ${color}` );
	}, [ onChange, state ] );

	const handleBorderWidthChange = useCallback( ( borderWidth ) => {
		setState({
			...state,
			width: borderWidth
		});
		onChange( `${state.style} ${borderWidth} ${state.color}` );
	}, [ onChange, state ] );

	const handleBorderStyleChange = useCallback( ( borderStyle ) => {
		setState({
			...state,
			style: borderStyle
		});
		onChange( `${borderStyle} ${state.width} ${state.color}` );
	}, [ onChange, state ] );

	/* eslint-disable i18next/no-literal-string */
	return (
		<Fragment>
			<Form.Group as={Row} >
				<Form.Label column sm={4} >
					{t('border-color')}
				</Form.Label>
				<Col sm={4} >
					<ColorPicker
						style={PICKER_STYLE}
						color={state.color}
						onChange={handleColorChange}
						variant="Button"
					/>
				</Col>
			</Form.Group>
			<Form.Group as={Row} >
				<UnitInputBase
					label="Border Width"
					labelWidth={5} style={style}
					defaultValue={state.width}
					onChange={handleBorderWidthChange}
				/>
			</Form.Group>
			<Form.Group as={Row} >
				<Form.Label column sm={5} >
					{t('border-style')}
				</Form.Label>
				<Col sm={7} >
					<ToggleButtonGroup
						name="options"
						onChange={handleBorderStyleChange}
						type="radio"
						size="small"
						value={state.style}
					>
						<ToggleButton
							id="border-style-toggle-none"
							variant="outline-secondary"
							value="none"
							title={t('none')}
						>
							<i className="fas fa-times"></i>
						</ToggleButton>
						<ToggleButton
							id="border-style-toggle-solid"
							variant="outline-secondary"
							value="solid"
							title={t('solid')}
							style={TOGGLE_BUTTON_WIDTH}
						>
							<span className="component-styler-unicode-solid">&#9135;</span>
						</ToggleButton>
						<ToggleButton
							id="border-style-toggle-dotted"
							variant="outline-secondary"
							value="dotted"
							title={t('dotted')}
						>
							<i className="fas fa-ellipsis-h"></i>
						</ToggleButton>
						<ToggleButton
							id="border-style-toggle-dashed"
							variant="outline-secondary"
							value="dashed"
							title={t('dashed')}
							style={TOGGLE_BUTTON_WIDTH}
						>
							<span className="component-styler-unicode-dashed">&#65101;</span>
						</ToggleButton>
					</ToggleButtonGroup>
				</Col>
			</Form.Group>
		</Fragment>
	);
	/* eslint-enable i18next/no-literal-string */
};


// MAIN //

const Borders = ({ active, style, onChange, t }) => {
	const [ activeBorder, setActiveBorder ] = useState( 'all' );
	const handleRightClick = useCallback( () => {
		setActiveBorder( 'right' );
	}, [] );
	const handleLeftClick = useCallback( () => {
		setActiveBorder( 'left' );
	}, [] );
	const handleTopClick = useCallback( () => {
		setActiveBorder( 'top' );
	}, [] );
	const handleBottomClick = useCallback( () => {
		setActiveBorder( 'bottom' );
	}, [] );
	const handleAllClick = useCallback( () => {
		setActiveBorder( 'all' );
	}, [] );
	const handleBorderInputsChange = useCallback( ( border ) => {
		const newStyle = omit( style, [ 'border', 'borderLeft', 'borderTop', 'borderRight', 'borderBottom' ] );
		if ( activeBorder === 'all' ) {
			newStyle.border = border;
		} else if ( style.border ) {
			newStyle.border = style.border;
		}
		if ( activeBorder === 'left' ) {
			newStyle.borderLeft = border;
		} else if ( style.borderLeft ) {
			newStyle.borderLeft = style.borderLeft;
		}
		if ( activeBorder === 'top' ) {
			newStyle.borderTop = border;
		} else if ( style.borderTop ) {
			newStyle.borderTop = style.borderTop;
		}
		if ( activeBorder === 'right' ) {
			newStyle.borderRight = border;
		} else if ( style.borderRight ) {
			newStyle.borderRight = style.borderRight;
		}
		if ( activeBorder === 'bottom' ) {
			newStyle.borderBottom = border;
		} else if ( style.borderBottom ) {
			newStyle.borderBottom = style.borderBottom;
		}
		onChange( newStyle );
	}, [ activeBorder, style, onChange ] );
	const handleBorderRadiusChange = useCallback( ( borderRadius ) => {
		const newStyle = { ...style };
		newStyle.borderRadius = borderRadius;
		onChange( newStyle );
	}, [ style, onChange ] );
	if ( !active ) {
		return null;
	}
	return (
		<Fragment>
			<Row>
				<Col sm={3} >
					<div className="component-styler-border-selector" >
						<div className="component-styler-border-graphical-box" >
							<Tooltip tooltip={t('change-all-borders')} >
								<div
									role="button" tabIndex={0}
									className={`component-styler-border-graphical-box-inside ${activeBorder === 'all' ? 'active' : ''}`}
									onClick={handleAllClick} onKeyPress={handleAllClick}
								/>
							</Tooltip>
						</div>
						<Tooltip tooltip={t('change-left-border')} >
							<div
								role="button" tabIndex={0}
								className={`component-styler-border-graphical-box-left ${activeBorder === 'left' ? 'active' : ''}`}
								onClick={handleLeftClick} onKeyPress={handleLeftClick}
							/>
						</Tooltip>
						<Tooltip tooltip={t('change-top-border')} placement="top" >
							<div
								role="button" tabIndex={0}
								className={`component-styler-border-graphical-box-top ${activeBorder === 'top' ? 'active' : ''}`}
								onClick={handleTopClick} onKeyPress={handleTopClick}
							/>
						</Tooltip>
						<Tooltip tooltip={t('change-bottom-border')} >
							<div
								role="button" tabIndex={0}
								className={`component-styler-border-graphical-box-bottom ${activeBorder === 'bottom' ? 'active' : ''}`}
								onClick={handleBottomClick} onKeyPress={handleBottomClick}
							/>
						</Tooltip>
						<Tooltip tooltip={t('change-right-border')} placement="bottom" >
							<div
								role="button" tabIndex={0}
								className={`component-styler-border-graphical-box-right ${activeBorder === 'right' ? 'active' : ''}`}
								onClick={handleRightClick} onKeyPress={handleRightClick}
							/>
						</Tooltip>
					</div>
				</Col>
				<Col sm={9} >
					<BorderInputs
						activeBorder={activeBorder}
						t={t}
						style={style} onChange={handleBorderInputsChange}
					/>
				</Col>
			</Row>
			<hr />
			<BorderRadiusPicker
				style={style}
				onChange={handleBorderRadiusChange}
				t={t}
			/>
		</Fragment>
	);
};


// EXPORTS //

export default Borders;
