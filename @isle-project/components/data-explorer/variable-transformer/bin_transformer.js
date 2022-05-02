// MODULES //

import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import FocusTrap from 'focus-trap-react';
import FormControl from 'react-bootstrap/FormControl';
import FormLabel from 'react-bootstrap/FormLabel';
import FormGroup from 'react-bootstrap/FormGroup';
import FormText from 'react-bootstrap/FormText';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import runif from '@stdlib/random/base/uniform';
import keys from '@stdlib/utils/keys';
import roundn from '@stdlib/math/base/special/roundn';
import copy from '@stdlib/utils/copy';
import { isPrimitive as isNumber } from '@stdlib/assert/is-number';
import NumberInput from '@isle-project/components/input/number';
import SelectInput from '@isle-project/components/input/select';
import TextInput from '@isle-project/components/input/text';
import Draggable from '@isle-project/components/draggable';
import Plotly from '@isle-project/components/plotly';
import Panel from '@isle-project/components/panel';
import TeX from '@isle-project/components/tex';
import isnan from '@stdlib/assert/is-nan';
import factor from '@isle-project/utils/factor-variable';
import mean from '@isle-project/utils/statistic/mean.js';
import min from '@isle-project/utils/statistic/min.js';
import max from '@isle-project/utils/statistic/max.js';
import { DATA_EXPLORER_BIN_TRANSFORMER } from '@isle-project/constants/actions.js';
import { generateHistogramConfig } from '@isle-project/components/plots/histogram';
import stopPropagation from '@isle-project/utils/stop-propagation';
import retrieveBinnedValues from './retrieve_binned_values.js';
import validateName from './validate_name.js';
import ClearButton from './../clear_button.js';
import './bin_transformer.css';


// VARIABLES //

const debug = logger( 'isle:data-explorer:variable-transformer' );
const RE_SHAPE = /shapes\[(\d)\]\.x0/;
const HISTOGRAM_SETTINGS = {
	group: null,
	displayDensity: true,
	densityType: 'Data-driven',
	chooseBins: false,
	nBins: null
};
const FOCUS_TRAP_OPTIONS = {
	clickOutsideDeactivates: true
};


// FUNCTIONS //

/**
* Comparator function used to sort values in ascending order.
*
* @private
* @param {number} a - first number
* @param {number} b - second number
* @returns {number} difference between `a` and `b`
*/
function ascending( a, b ) {
	return a - b;
}

/**
* Function to make shapes from breakpoints.
*/
const makeShapes = ( breakpoints ) => {
	const breakShapes = [];
	for ( let i = 0; i < breakpoints.length; i++ ) {
		breakShapes.push({
			type: 'line',
			x0: breakpoints[i],
			y0: -100,
			x1: breakpoints[i],
			y1: 100,
			line: {
				color: 'red',
				width: 3
			}
		});
	}
	return breakShapes;
};

/**
* Creates an array of category names for created bins.
*
* @param {Array<number>} breakpoints - breakpoints
* @param {Array<string>} customNames - custom category labels
* @returns {Array<string>} array of bin labels
*/
const createCategoryNames = ( breakpoints, customNames ) => {
	const out = new Array( customNames.length );
	if ( customNames[ 0 ] ) {
		out[ 0 ] = customNames[ 0 ];
	} else {
		out[ 0 ] = `(-\u221E,${breakpoints[0]})`; // eslint-disable-line i18next/no-literal-string
	}
	for ( let i = 1; i < customNames.length; i++ ) {
		if ( customNames[ i ] ) {
			out[ i ] = customNames[ i ];
		} else {
			out[ i ] = `[${breakpoints[i-1]},${breakpoints[i]})`;
		}
	}
	const last = customNames.length - 1;
	if ( customNames[ last ] ) {
		out[ last ] = customNames[ last ];
	} else {
		out[ last ] = `[${breakpoints[ breakpoints.length - 1 ]},\u221E)`; // eslint-disable-line i18next/no-literal-string
	}
	return out;
};


// MAIN //

const BinningTransformer = ( props ) => {
	const [ name, setName ] = useState( '' );
	const [ snapDigits, setSnapDigits ] = useState( 0 );
	const [ state, setState ] = useState({
		variable: null,
		configHist: null,
		breakpoints: null,
		categories: null,
		customNames: null
	});
	const invalidName = validateName( name );
	const makeNewVar = () => {
		const { variable, categories, breakpoints } = state;
		const rawData = props.data[ variable ];
		const values = retrieveBinnedValues( rawData, categories, breakpoints );
		props.logAction( DATA_EXPLORER_BIN_TRANSFORMER, {
			name,
			variable,
			breaks: breakpoints,
			categories
		});
		const newName = factor( name, categories );
		props.onGenerate( newName, values );
		props.onHide();
	};
	const handleKeyPress = ( event ) => {
		// Handle "Return" key:
		if ( event.charCode === 13 && !invalidName ) {
			makeNewVar();
		}
	};
	const handleNameChange = ( event ) => {
		setName( event.target.value );
	};
	const changeFactory = ( ind ) => {
		return ( value ) => {
			debug( 'Change break point...' );
			const newBreakpoints = state.breakpoints.slice();
			newBreakpoints[ ind ] = roundn( value, -snapDigits );
			newBreakpoints.sort( ascending );
			const configHist = copy( state.configHist );
			configHist.layout.shapes = makeShapes( newBreakpoints );
			setState({
				...state,
				configHist,
				breakpoints: newBreakpoints,
				categories: createCategoryNames( newBreakpoints, state.customNames )
			});
		};
	};
	const categoryChangeFactory = ( ind ) => {
		return ( value ) => {
			const newCategories = state.categories.slice();
			newCategories[ ind ] = value;
			const newCustomNames = state.customNames.slice();
			newCustomNames[ ind ] = value;
			const newState = {
				...state,
				categories: newCategories,
				customNames: newCustomNames
			};
			setState( newState );
		};
	};
	const deleteBreakpoint = ( ind ) => {
		return () => {
			const { breakpoints, categories, customNames } = state;

			// Remove the elements at the specified index:
			breakpoints.splice( ind, 1 );
			categories.splice( ind, 1 );
			customNames.splice( ind, 1 );
			const configHist = { ...state.configHist };
			configHist.layout.shapes = makeShapes( breakpoints );
			setState({
				...state,
				configHist,
				categories,
				customNames,
				breakpoints
			});
		};
	};
	const makeTextInputs = () => {
		const inputs = [];
		const breakpoints = state.breakpoints;
		const disableButton = breakpoints.length === 1;
		inputs.push( <Row key="div-0">
			<Col md={7}>
				<TeX
					raw="x < "
				/><NumberInput
					inline
					onBlur={changeFactory( 0 )}
					defaultValue={breakpoints[0]}
					step="any"
				/>
			</Col>
			<Col md={4}>
				<TextInput
					key={0}
					legend={`${props.t('label')} 1`}
					defaultValue={state.categories[ 0 ]}
					onChange={categoryChangeFactory( 0 )}
					style={{ width: 200 }}
				/>
			</Col>
			<Col md={1}></Col>
		</Row> );
		if ( breakpoints.length > 1 ) {
			for ( let i = 0; i < breakpoints.length - 1; i++ ) {
				const changeFn = categoryChangeFactory( i+1 );
				inputs.push( <Row key={`div-${i+1}`}>
					<Col md={7}>
						<NumberInput
							inline
							onBlur={changeFactory( i )}
							defaultValue={breakpoints[i]}
							step="any"
						/>
						<TeX raw="\le x <" />
						<NumberInput
							inline
							onBlur={changeFactory( i+1 )}
							defaultValue={breakpoints[i+1]}
							step="any"
						/>
					</Col>
					<Col md={4}>
						<TextInput
							key={1+i}
							legend={`${props.t('label')} ${i+2}`}
							defaultValue={state.categories[ i+1 ]}
							onChange={changeFn}
							style={{ width: 200 }}
						/>
					</Col>
					<Col md={1}>
						<ClearButton
							onClick={deleteBreakpoint(i)}
							style={{ marginTop: '5px' }}
							disabled={disableButton}
							tooltipPlacement="right"
						/>
					</Col>
				</Row> );
			}
		}
		const len = breakpoints.length;
		inputs.push( <Row key={`div-${len}`}>
			<Col md={7}>
				<TeX raw="x \ge" />
				<NumberInput
					inline
					onChange={changeFactory( len-1 )}
					defaultValue={breakpoints[ len-1 ]}
					step="any"
				/>
			</Col>
			<Col md={4}>
				<TextInput
					legend={`Label ${len+1}`}
					defaultValue={state.categories[ len ]}
					onChange={categoryChangeFactory( len )}
					key={len}
					style={{ width: 200 }}
				/>
			</Col>
			<Col md={1}>
				<ClearButton
					onClick={deleteBreakpoint( len - 1 )}
					style={{ marginTop: '5px' }}
					disabled={disableButton}
				/>
			</Col>
		</Row> );
		return inputs;
	};
	const onChangeHistLine = ( data ) => {
		const keyUpdate = keys( data );
		const matches = RE_SHAPE.exec( keyUpdate[ 0 ] );
		if ( matches ) {
			const ind = matches[ 1 ];
			const newBreakpoints = state.breakpoints.slice();
			newBreakpoints[ ind ] = roundn( data[ keyUpdate[0] ], -snapDigits );
			newBreakpoints.sort( ascending );
			const configHist = copy( state.configHist );
			configHist.layout.shapes = makeShapes( newBreakpoints );
			setState({
				...state,
				configHist,
				breakpoints: newBreakpoints,
				categories: createCategoryNames( newBreakpoints, state.customNames )
			});
		}
	};
	const handleVariableChange = ( value ) => {
		debug( 'Change variable to bin...' );
		const histConfigSettings = {
			data: props.data,
			variable: value,
			...HISTOGRAM_SETTINGS
		};
		const configHist = generateHistogramConfig( histConfigSettings );
		configHist.layout.yaxis = {
			range: [
				min( configHist.data[ 1 ].y ),
				max( configHist.data[ 1 ].y )
			],
			fixedrange: true
		};
		configHist.layout.xaxis = {
			fixedrange: true
		};
		let values = props.data[ value ];
		values = values.filter( x => isNumber( x ) && !isnan( x ) );
		const breakpoints = [ roundn( mean( values ), -snapDigits ) ];
		configHist.layout.shapes = makeShapes( breakpoints );
		const customNames = [ false, false ];
		setState({
			variable: value,
			configHist,
			breakpoints,
			customNames,
			categories: createCategoryNames( breakpoints, customNames )
		});
	};
	const addBreakpoint = () => {
		const newBreakpoints = state.breakpoints.slice();
		let values = props.data[ state.variable ];
		values = values.filter( x => isNumber( x ) && !isnan( x ) );
		const avg = runif( 0.8, 1.2 ) * mean( values );
		newBreakpoints.push( roundn( avg, -snapDigits ) );
		newBreakpoints.sort( ascending );

		const configHist = copy( state.configHist );
		configHist.layout.shapes = makeShapes( newBreakpoints );

		const customNames = state.customNames;
		customNames.push( false );

		const newState = {
			...state,
			breakpoints: newBreakpoints,
			configHist,
			categories: createCategoryNames( newBreakpoints, customNames )
		};
		setState( newState );
	};
	const renderBody = () => {
		const configHist = state.configHist;
		const select = <SelectInput
			legend={props.t('variable-to-bin')}
			defaultValue={state.variable}
			options={props.quantitative}
			onChange={handleVariableChange}
			style={{ maxWidth: 400 }}
		/>;
		if ( !configHist ) {
			return (
				<Fragment>
					{select}
					<Alert variant="info">{props.t('select-variable-bin')}</Alert>
				</Fragment>
			);
		}
		return (
			<Fragment>
				{select}
				<Button className="insert-line-button" onClick={addBreakpoint}>
					{props.t('insert-break-line')}
				</Button>
				<p>
					{props.t('drag-red-bars')}
					(<NumberInput legend={props.t('digits-after-decimal-snap')} min={0} max={9} inline defaultValue={snapDigits} onChange={setSnapDigits} />)
				</p>
				<div style={{ height: 250 }}>
					<Plotly
						data={configHist.data}
						layout={configHist.layout}
						editable
						fit
						removeButtons
						legendButtons={false}
						onRelayout={onChangeHistLine}
					/>
				</div>
				<div>
					<Card className="mb-2" >
						<Card.Header>{props.t('choose-category-labels')}:</Card.Header>
						<Card.Body>
							{makeTextInputs()}
						</Card.Body>
					</Card>
				</div>
				<FormGroup>
					<FormLabel>{props.t('name-new-variable')}:</FormLabel>
					<FormControl
						type="text"
						placeholder={props.t('select-name')}
						onChange={handleNameChange}
						onKeyPress={handleKeyPress}
					/>
					<FormText>
						{props.t('new-variable-appended')}
					</FormText>
				</FormGroup>
			</Fragment>
		);
	};
	return (
		<Draggable cancel=".card-body" onDragStart={stopPropagation} style={{ zIndex: 1006 }} >
			<FocusTrap focusTrapOptions={FOCUS_TRAP_OPTIONS} >
				<Panel
					onHide={props.onHide}
					show={props.show}
					header={props.t('bin-transformer-header')}
					footer={<Button onClick={makeNewVar} disabled={!invalidName} >
						{props.t('create-new-variable')}
					</Button>}
					bodyStyle={{
						maxHeight: 'calc(100vh - 200px)',
						overflowY: 'auto',
						position: 'relative'
					}}
					bodyClassName="d-grid gap-3"
					role="button" tabIndex={0}
				>
					{renderBody()}
				</Panel>
			</FocusTrap>
		</Draggable>
	);
};


// PROPERTIES //

BinningTransformer.defaultProps = {
	logAction() {},
	onGenerate() {}
};

BinningTransformer.propTypes = {
	show: PropTypes.bool.isRequired,
	data: PropTypes.object.isRequired,
	quantitative: PropTypes.array.isRequired,
	logAction: PropTypes.func,
	onHide: PropTypes.func.isRequired,
	onGenerate: PropTypes.func
};


// EXPORTS //

export default BinningTransformer;
