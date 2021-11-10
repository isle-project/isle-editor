// MODULES //

import React, { Fragment, useCallback, useState } from 'react';
import ChromePicker from 'react-color/lib/components/chrome/Chrome.js';
import { GradientPickerPopover } from 'react-linear-gradient-picker';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import round from '@stdlib/math/base/special/round';
import CheckboxInput from '@isle-project/components/input/checkbox';
import ColorPicker from '@isle-project/components/color-picker';
import SelectInput from '@isle-project/components/input/select';
import UnitInputBase from './unit_input_base.js';
import DISPLAY_TYPES from './display_types.json';
import 'react-linear-gradient-picker/dist/index.css';
import './layout.css';


// VARIABLES //

const SIZE_OPTIONS = [
	'closest-side',
	'closest-corner',
	'farthest-side',
	'farthest-corner'
];
const POSITION_OPTIONS = [
	[ '0%', '0%' ],
	[ '50%', '0%' ],
	[ '100%', '0%' ],
	[ '0%', '50%' ],
	[ '50%', '50%' ],
	[ '100%', '50%' ],
	[ '0%', '100%' ],
	[ '50%', '100%' ],
	[ '100%', '100%' ]
];
const INITIAL_PALETTE = [
	{ offset: '0.00', color: 'rgba(238, 241, 11, 1.0)' },
	{ offset: '1.00', color: 'rgba(126, 32, 207, 1.0)' }
];
const WrappedChromePicker = ({ onSelect, color, ...rest }) => {
	const handleChange = useCallback( c => {
		const { r, g, b, a } = c.rgb;
		onSelect( `rgba(${r}, ${g}, ${b}, ${a})` ); // eslint-disable-line i18next/no-literal-string
	}, [ onSelect ] );
	return (
		<ChromePicker {...rest}
			color={color}
			onChange={handleChange}
		/>
	);
};
const BaseGradientPicker = ( props ) => {
	const [ open, setOpen ] = useState( false );
	const [ angle, setAngle ] = useState( 90 );
	const [ palette, setPalette ] = useState( INITIAL_PALETTE );
	return (
		<div style={{ marginLeft: -10, marginTop: -14 }}>
			<GradientPickerPopover {...{
				open,
				setOpen,
				angle,
				setAngle: ( newAngle ) => {
					if ( props.onChange ) {
						props.onChange( newAngle, palette );
					}
					setAngle( newAngle );
				},
				showAnglePicker: true,
				width: 250,
				maxStops: 4,
				paletteHeight: 36,
				palette,
				onPaletteChange: ( newPalette ) => {
					setPalette( newPalette );
					if ( props.onChange ) {
						props.onChange( angle, newPalette );
					}
				}
			}}>
				<WrappedChromePicker />
			</GradientPickerPopover>
		</div>
	);
};
const GradientPicker = ({ onCreate, t }) => {
	const [ gradient, setGradient ] = useState( null );
	const [ repeating, setRepeating ] = useState( false );
	const handleChange = useCallback( ( angle, palette ) => {
		setGradient({ angle, palette });
	}, [] );
	const handleCreate = useCallback( () => {
		let background = repeating ? 'repeating-linear-gradient' : 'linear-gradient';
		background += `(${gradient.angle}deg, ${gradient.palette.map( x => `${x.color} ${round( Number( x.offset ) * 100 )}%` ).join( ', ')})`; // eslint-disable-line i18next/no-literal-string
		onCreate( background );
	}, [ onCreate, gradient, repeating ] );
	return (
		<Fragment>
			<Form.Group as={Row} >
					<Form.Label column sm={3} >
						{t('linear-gradient')}:
					</Form.Label>
					<Col sm={9} >
						<BaseGradientPicker
							onChange={handleChange}
						/>
						<CheckboxInput legend={t('repeating')} defaultValue={repeating} onChange={setRepeating} />
					</Col>
			</Form.Group>
			{onCreate ? <Button variant="secondary" onClick={handleCreate} >
				{t('add-background')}
			</Button> : null}
		</Fragment>
	);
};
const RadialGradientPicker = ({ onCreate, t }) => {
	const [ gradient, setGradient ] = useState( null );
	const [ size, setSize ] = useState( null );
	const [ top, setTop ] = useState( null );
	const [ left, setLeft ] = useState( null );
	const [ repeating, setRepeating ] = useState( false );
	const handleBackgroundCreation = useCallback( () => {
		let background;
		if ( repeating ) {
			background = 'repeating-radial-gradient(';
		} else {
			background = 'radial-gradient(';
		}
		background += 'circle ';
		background += size;
		background += ' at ';
		background += `${left} ${top}, `;
		background += gradient.palette.map( x => `${x.color} ${round( Number( x.offset ) * 100 )}%` ).join( ', ');
		background += ')';
		onCreate( background );
	}, [ onCreate, gradient, size, top, left, repeating ] );
	const handleColorChange = useCallback( ( angle, palette ) => {
		setGradient({ angle, palette });
	}, [] );
	return (
		<Fragment>
			<Form.Group as={Row} >
				<Form.Label column sm={3} >
					{t('radial-gradient')}:
				</Form.Label>
				<Col sm={9} >
					<Form.Group as={Row} >
						<Col sm={2} >
							<BaseGradientPicker
								onChange={handleColorChange}
							/>
						</Col>
						<Form.Label column sm={1} >
							{t('size')}:
						</Form.Label>
						<Col sm={5} >
							<SelectInput defaultValue="farthest-corner" options={SIZE_OPTIONS} onChange={setSize} />
						</Col>
						<Col sm={4} >
							<CheckboxInput legend={t('repeating')} defaultValue={repeating} onChange={setRepeating} />
						</Col>
					</Form.Group>
					<Form.Group as={Row} >
						<Form.Label column sm={2} >
							{t('position')}
						</Form.Label>
						<Col sm={4} >
							<div className="radial-gradient-position-box">
								{POSITION_OPTIONS.map( ( option, idx ) => {
									const handleClick = () => {
										setTop( option[ 1 ] );
										setLeft( option[ 0 ]);
									};
									return ( <div
										role="button" tabIndex={-1}
										className="top-left select-box"
										key={idx}
										onClick={handleClick}
										onKeyPress={handleClick}
									>
										<div className="white-center" />
									</div> );
								})}
							</div>
						</Col>
						<Col sm={6} >
							<Row>
								<UnitInputBase
									label={t('top')}
									defaultValue={top}
									labelWidth={3}
									colWidth={5}
									onChange={setTop}
								/>
							</Row>
							<Row>
								<UnitInputBase
									label={t('left')}
									defaultValue={left}
									labelWidth={3}
									colWidth={5}
									onChange={setLeft}
								/>
							</Row>
						</Col>
					</Form.Group>
				</Col>
			</Form.Group>
			<Button variant="secondary" onClick={handleBackgroundCreation} >
				{t('add-background')}
			</Button>
		</Fragment>
	);
};
const BackgroundPicker = ( props ) => {
	const [ type, setType ] = useState( 'image' );
	let input;
	switch ( type ) {
		case 'image':
			input = <Form.Group as={Row} >
				<Form.Label column sm={3} >
					{props.t('background-image')}
				</Form.Label>
				<Col sm={9} >

				</Col>
			</Form.Group>;
			break;
		case 'linear-gradient':
			input = <GradientPicker onCreate={props.onCreate} t={props.t} />;
			break;
		case 'radial-gradient':
			input = <RadialGradientPicker onCreate={props.onCreate} t={props.t} />;
			break;
	}
	return (
		<Fragment>
			<Form.Group as={Row} >
				<Form.Label column sm={6} >
				{props.t('background-type')}
				</Form.Label>
				<Col sm={6} >
					<ToggleButtonGroup
						name="type"
						onChange={setType}
						type="radio"
						value={type}
					>
						<ToggleButton
							id="toggle-background-image"
							variant="outline-secondary"
							value="image"
							title={props.t('image')}
						>
							<i className="far fa-image fa-lg"></i>
						</ToggleButton>
						<ToggleButton
							id="toggle-background-linear-gradient"
							variant="outline-secondary"
							value="linear-gradient"
							title={props.t('linear-gradient')}
						>
							<div className="component-styler-box linear-gradient-box" ></div>
						</ToggleButton>
						<ToggleButton
							id="toggle-background-radial-gradient"
							variant="outline-secondary"
							value="radial-gradient"
							title={props.t('radial-gradient')}
						>
							<div className="component-styler-box radial-gradient-box" ></div>
						</ToggleButton>
					</ToggleButtonGroup>
				</Col>
			</Form.Group>
			{input}
		</Fragment>
	);
};


// MAIN //

const Layout = ({ active, style, onChange, t }) => {
	const [ backgrounds, setBackgrounds ] = useState( [] );
	const handleDisplayChange = useCallback( ( display ) => {
		const newStyle = { ...style };
		newStyle.display = display;
		onChange( newStyle );
	}, [ style, onChange ] );
	const handleBGColorChange = useCallback( ({ rgb }) => {
		const { r, g, b, a } = rgb;
		const newStyle = { ...style };
		newStyle.backgroundColor = `rgba(${r}, ${g}, ${b}, ${a} )`; // eslint-disable-line i18next/no-literal-string
		onChange( newStyle );
	}, [ onChange, style ] );
	const handleBackgroundImageAddition = useCallback( ( background ) => {
		const newBackgrounds = backgrounds.slice();
		newBackgrounds.push( background );
		const newStyle = { ...style };
		newStyle.backgroundImage = newBackgrounds.join( ', ' );
		onChange( newStyle );
		setBackgrounds( newBackgrounds );
	}, [ backgrounds, onChange, style ] );
	if ( !active ) {
		return null;
	}
	return (
		<Fragment>
			<Form.Group as={Row} >
				<Form.Label column sm="4">
					{t('display')}:
				</Form.Label>
				<Col sm="8">
					<SelectInput
						defaultValue={style.display || DISPLAY_TYPES[ 0 ]}
						options={DISPLAY_TYPES}
						onChange={handleDisplayChange}
					/>
				</Col>
			</Form.Group>
			<Form.Group as={Row} >
				<Form.Label column sm="4">
					{t('background-color')}
				</Form.Label>
				<Col sm={1} >
					<ColorPicker
						style={{ zIndex: 2000 }}
						color={style.backgroundColor}
						onChange={handleBGColorChange}
						variant="Button"
					/>
				</Col>
			</Form.Group>
			<hr />
			<p className="title" style={{ fontVariant: 'small-caps', fontSize: '1.2em' }}>
				{t('backgrounds')}
			</p>
			<ListGroup>
				{backgrounds.map( ( background, idx ) => {
					return (
						<ListGroup.Item key={`background-${idx}`} style={{ fontFamily: 'Open Sans Condensed' }} >
							{background}
							<Button
								variant="danger"
								size="sm"
								onClick={() => {
									const newBackgrounds = backgrounds.slice();
									newBackgrounds.splice( idx, 1 );
									setBackgrounds( newBackgrounds );
									const newStyle = { ...style };
									newStyle.background = newBackgrounds.join( ', ' );
									onChange( newStyle );
								}}
								style={{ float: 'right' }}
							>
								<i className="fas fa-times"></i>
							</Button>
						</ListGroup.Item>
					);
				})}
			</ListGroup>
			<hr />
			<BackgroundPicker
				style={style}
				onCreate={handleBackgroundImageAddition}
				t={t}
			/>
		</Fragment>
	);
};


// EXPORTS //

export default Layout;
