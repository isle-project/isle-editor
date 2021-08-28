// MODULES //

import React, { useCallback, useState } from 'react';
import logger from 'debug';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ColorPicker from '@isle-project/components/color-picker';
import SelectInput from '@isle-project/components/input/select';
import NumberInput from '@isle-project/components/input/number';
import Accordion from '@isle-project/components/accordion';


// VARIABLES //

const debug = logger( 'isle:plotly:style_menu' );
const FONTS = [
	'Arial',
	'Balto',
	'Courier New',
	'Droid Sans',
	'Droid Serif',
	'Droid Sans Mono',
	'Gravitas One',
	'Old Standard TT',
	'Open Sans',
	'Overpass',
	'PT Sans Narrow',
	'Raleway',
	'Times New Roman'
];
const HEADERS = [ 'general', 'legend' ];
const HEADER_STYLE = { fontSize: '1em', fontFamily: 'Open Sans', fontWeight: 400, textAlign: 'left' };


// MAIN //

const PlotlyStyleMenu = ({ layout, setLayout, layoutUpdate, setLayoutUpdate, onHide, t }) => {
	const [ active, setActive ] = useState( 0 );
	const handleBackgroundColor = useCallback( ({ rgb }) => {
		const { r, g, b, a } = rgb;
		const newLayout = { ...layout };
		newLayout.paper_bgcolor = `rgba(${r}, ${g}, ${b}, ${a})`; // eslint-disable-line i18next/no-literal-string
		setLayout( newLayout );
		setLayoutUpdate( layoutUpdate + 1 );
	}, [ layoutUpdate, setLayoutUpdate, layout, setLayout ] );

	const handleFontColor = useCallback( ({ rgb }) => {
		const { r, g, b, a } = rgb;
		const newLayout = { ...layout };
		if ( !newLayout.font ) {
			newLayout.font = {};
		}
		newLayout.font.color = `rgba(${r}, ${g}, ${b}, ${a})`; // eslint-disable-line i18next/no-literal-string
		setLayout( newLayout );
		setLayoutUpdate( layoutUpdate + 1 );
	}, [ layoutUpdate, setLayoutUpdate, layout, setLayout ] );

	const handleFontChange = useCallback( ( fontFamily ) => {
		const newLayout = { ...layout };
		if ( !newLayout.font ) {
			newLayout.font = {};
		}
		newLayout.font.family = fontFamily;
		setLayout( newLayout );
		setLayoutUpdate( layoutUpdate + 1 );
	}, [ layoutUpdate, setLayoutUpdate, layout, setLayout ] );

	const handleFontSizeChange = useCallback( ( fontSize ) => {
		const newLayout = { ...layout };
		if ( !newLayout.font ) {
			newLayout.font = {};
		}
		newLayout.font.size = fontSize;
		setLayout( newLayout );
		setLayoutUpdate( layoutUpdate + 1 );
	}, [ layoutUpdate, setLayoutUpdate, layout, setLayout ] );

	const handleLegendBgColor = useCallback( ({ rgb }) => {
		const { r, g, b, a } = rgb;
		const newLayout = { ...layout };
		if ( !newLayout.legend ) {
			newLayout.legend = {};
		}
		newLayout.legend.bgcolor = `rgba(${r}, ${g}, ${b}, ${a})`; // eslint-disable-line i18next/no-literal-string
		setLayout( newLayout );
		setLayoutUpdate( layoutUpdate + 1 );
	}, [ layoutUpdate, setLayoutUpdate, layout, setLayout ] );

	const handleLegendBorderColor = useCallback( ({ rgb }) => {
		const { r, g, b, a } = rgb;
		const newLayout = { ...layout };
		if ( !newLayout.legend ) {
			newLayout.legend = {};
		}
		newLayout.legend.bordercolor = `rgba(${r}, ${g}, ${b}, ${a})`; // eslint-disable-line i18next/no-literal-string
		setLayout( newLayout );
		setLayoutUpdate( layoutUpdate + 1 );
	}, [ layoutUpdate, setLayoutUpdate, layout, setLayout ] );

	const handleLegendBorderWidth = useCallback( ( borderWidth ) => {
		const newLayout = { ...layout };
		if ( !newLayout.legend ) {
			newLayout.legend = {};
		}
		newLayout.legend.borderwidth = borderWidth;
		setLayout( newLayout );
		setLayoutUpdate( layoutUpdate + 1 );
	}, [ layoutUpdate, setLayoutUpdate, layout, setLayout ] );

	debug( 'Active accordion element: '+active );
	return (
		<div className="plotly-style-menu" >
			<div className="plotly-style-menu-header" >
				<h3>{ t( 'customize-layout' ) }</h3>
				<Button
					aria-label={t('close')}
					size="sm" variant="warning"
					className="plotly-style-menu-close-button"
					onClick={onHide}
				>
					<div className="fa fa-times" />
				</Button>
			</div>
			<Accordion
				className="plotly-style-accordion"
				canCloseAll
				headers={HEADERS.map( x => t( x ))}
				headerStyle={HEADER_STYLE}
				onChange={setActive}
			>
				<div>
					<Form.Group as={Row} >
						<Form.Label column sm={8} >
							{t('background')}
						</Form.Label>
						<Col sm={4} >
							<ColorPicker
								onChange={handleBackgroundColor}
								variant="Button"
								color={layout.paper_bgcolor}
							/>
						</Col>
					</Form.Group>
					<Form.Group as={Row} >
						<Form.Label column sm={8} >
							{t('font-color')}
						</Form.Label>
						<Col sm={4} >
							<ColorPicker
								onChange={handleFontColor}
								variant="Button"
								color={layout.font && layout.font.color}
							/>
						</Col>
					</Form.Group>
					<Form.Group as={Row} >
						<Form.Label column sm={8} >
							{t('font-size')}
						</Form.Label>
						<Col sm={4}>
							<NumberInput
								min={10}
								max={60}
								defaultValue={layout.font && layout.font.size || 12}
								onChange={handleFontSizeChange}
								inline
							/>
						</Col>
					</Form.Group>
					<Form.Group as={Row} >
						<Form.Label column sm={6} >
							{t('font-family')}
						</Form.Label>
						<Col sm={6}>
							<SelectInput
								clearable
								options={FONTS}
								defaultValue={layout.font && layout.font.family}
								onChange={handleFontChange}
							/>
						</Col>
					</Form.Group>
				</div>
				<div>
					<Form.Group as={Row} >
						<Form.Label column sm={8} >
							{t('background')}
						</Form.Label>
						<Col sm={4} >
							<ColorPicker
								onChange={handleLegendBgColor}
								variant="Button"
								color={layout.legend && layout.legend.bgcolor}
							/>
						</Col>
					</Form.Group>
					<Form.Group as={Row} >
						<Form.Label column sm={8} >
							{t('border-color')}
						</Form.Label>
						<Col sm={4} >
							<ColorPicker
								onChange={handleLegendBorderColor}
								variant="Button"
								color={layout.legend && layout.legend.bordercolor}
							/>
						</Col>
					</Form.Group>
					<Form.Group as={Row} >
						<Form.Label column sm={8} >
							{t('border-width')}
						</Form.Label>
						<Col sm={4}>
							<NumberInput
								min={0}
								max={30}
								defaultValue={layout.legend && layout.legend.borderwidth}
								onChange={handleLegendBorderWidth}
								inline
							/>
						</Col>
					</Form.Group>
				</div>
			</Accordion>
		</div>
	);
};


// EXPORTS //

export default PlotlyStyleMenu;
