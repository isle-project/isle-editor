// MODULES //

import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import PopoverBody from 'react-bootstrap/PopoverBody';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { components } from 'react-select';
import isArray from '@stdlib/assert/is-array';
import { i18n } from '@isle-project/locales';
import CheckboxInput from '@isle-project/components/input/checkbox';
import SelectInput from '@isle-project/components/input/select';
import NumberInput from '@isle-project/components/input/number';
import randomstring from '@isle-project/utils/randomstring/alphanumeric';
import Histogram from '@isle-project/components/plots/histogram';
import { DATA_EXPLORER_SHARE_HISTOGRAM, DATA_EXPLORER_HISTOGRAM } from '@isle-project/constants/actions.js';
import QuestionButton from './../question_button.js';


// VARIABLES //

const debug = logger( 'isle:data-explorer:histogram' );
const DEFAULT_XBINS = {
	start: null,
	size: 100,
	end: null
};
const Option = props => {
	const popover = <Popover id={`${props.data.label}-popover`}>
		<PopoverBody>{i18n.t(`data-explorer:${props.data.label}-description`)}</PopoverBody>
	</Popover>;
	return ( <components.Option key={props.data.label} {...props} >
		<span style={{
			opacity: props.isSelected ? 0.5 : 1
		}}>{i18n.t( 'data-explorer:'+props.data.label )}</span>
		<OverlayTrigger
			trigger={['hover', 'click']}
			placement="right" rootClose overlay={popover}
		>
			<Button
				aria-label={i18n.t( 'data-explorer:'+props.data.label )}
				size="sm"
				variant="outline-secondary"
				className="question-button"
				style={{ float: 'right', fontSize: 14 }}
				onClick={( event ) => event.stopPropagation()}
			>
				<span className="fa fa-question" />
			</Button>
		</OverlayTrigger>
	</components.Option> );
};
const DISTRIBUTION_PARAMS = {
	'Exponential': [
		{
			'name': 'lambda',
			'description': 'rate',
			'defaultValue': 1,
			'min': 0,
			'step': 'any'
		}
	],
	'Normal': [
		{
			'name': 'mu',
			'description': 'mean',
			'defaultValue': 0,
			'step': 'any'
		},
		{
			'name': 'sigma',
			'description': 'standard-deviation',
			'defaultValue': 1,
			'min': 0,
			'step': 'any'
		}
	],
	'Uniform': [
		{
			'name': 'a',
			'description': 'minimum',
			'defaultValue': 0,
			'step': 'any'
		},
		{
			'name': 'b',
			'description': 'maximum',
			'defaultValue': 1,
			'step': 'any'
		}
	],
	'T': [
		{
			'name': 'df',
			'description': 'degrees of freedom',
			'min': 0e-6,
			'defaultValue': 1,
			'step': 'any'
		}
	],
	'Chi-squared': [
		{
			'name': 'df',
			'description': 'degrees of freedom (= mean)',
			'min': 1,
			'step': 1,
			'defaultValue': 1
		}
	]
};


// MAIN //

const HistogramMenu = ( props ) => {
	const [ displayDensity, setDisplayDensity ] = useState( false );
	const [ densityType, setDensityType ] = useState( null );
	const [ densityParams, setDensityParams ] = useState( {} );
	const [ specifyParams, setSpecifyParams ] = useState( {} );
	const [ bandwidthAdjust, setBandwidthAdjust ] = useState( 1 );
	const [ sameXRange, setSameXRange ] = useState( false );
	const [ sameYRange, setSameYRange ] = useState( false );
	const [ variable, setVariable ] = useState( props.defaultValue || props.variables[ 0 ] );
	const [ group, setGroup ] = useState( null );
	const [ groupMode, setGroupMode ] = useState( 'Overlay' );
	const [ nCols, setNCols ] = useState( 2 );
	const [ nBins, setNBins ] = useState( 10 );
	const [ xBins, setXBins ] = useState( DEFAULT_XBINS );
	const [ binStrategy, setBinStrategy ] = useState( 'Automatic' );
	const { variables, groupingVariables, t } = props;

	useEffect( () => {
		setXBins( DEFAULT_XBINS );
	}, [ binStrategy ] );

	const generateHistogram = () => {
		debug( `Generate a histogram with ${nBins} bins` );
		const plotId = randomstring( 6 );
		const state = {
			variable,
			group,
			groupMode,
			displayDensity,
			densityType,
			binStrategy,
			sameXRange,
			sameYRange
		};
		if ( binStrategy === 'Select # of bins' ) {
			state.nBins = nBins;
		}
		state.xBins = xBins;
		if ( groupMode === 'Facets' ) {
			state.nCols = nCols;
		}
		if ( isArray( densityType ) ) {
			if ( densityType.includes( 'Data-driven' ) ) {
				state.bandwidthAdjust = bandwidthAdjust;
			}
			const keys = Object.keys( densityParams );
			if ( keys.length > 0 ) {
				const obj = {};
				keys.forEach( key => {
					if ( specifyParams[ key ] ) {
						obj[ key ] = densityParams[ key ];
					}
				});
				state.densityParams = obj;
			}
		}
		const action = { ...state, plotId };
		const onShare = () => {
			props.session.addNotification({
				title: t('plot-shared'),
				message: t('plot-shared-message'),
				level: 'success',
				position: 'tr'
			});
			props.logAction( DATA_EXPLORER_SHARE_HISTOGRAM, action );
		};
		const output = <Histogram data={props.data} {...state} id={plotId} action={action} onShare={onShare} />;
		props.logAction( DATA_EXPLORER_HISTOGRAM, action );
		props.onCreated( output );
	};
	const densityControls = [];
	if ( isArray( densityType ) ) {
		if ( densityType.includes( 'Data-driven' ) ) {
			densityControls.push( <Fragment>
					<h4>{t('data-driven')}</h4>
					<NumberInput
						legend={t('bandwidth-adjustment')}
						defaultValue={bandwidthAdjust}
						min={0} step={0.1}
						onChange={setBandwidthAdjust}
					/>
			</Fragment> );
		}
		densityType.forEach( ( type, i ) => {
			if ( type === 'Data-driven' ) {
				return null;
			}
			const inputs = [];
			if ( specifyParams[ type ] ) {
				inputs.push( ...( DISTRIBUTION_PARAMS[ type ] || [] ).map( ( x, j ) => {
					return ( <NumberInput
						key={`${i}-${j}`}
						legend={t( x.name )}
						description={t( x.description )}
						value={densityParams[ type ][ j ]}
						onChange={( value ) => {
							const newParams = densityParams[ type ].slice();
							newParams[ j ] = value;
							setDensityParams({
								...densityParams,
								[type]: newParams
							});
						}}
						max={x.max}
						min={x.min}
						step={x.step}
						tooltipPlacement="bottom"
					/> );
				}) );
			}
			densityControls.push( <Fragment>
				<h4>{type}</h4>
				<CheckboxInput
					legend={t('specify-parameters')}
					tooltip={t('specify-parameters-tooltip')}
					defaultValue={specifyParams[ type ]}
					onChange={( value ) => {
						setDensityParams({
							...densityParams,
							[type]: DISTRIBUTION_PARAMS[ type ].map( x => x.defaultValue )
						});
						setSpecifyParams({
							...specifyParams,
							[type]: value
						});
					}}
				/>
				{inputs}
			</Fragment> );
		});
	}
	return (
		<Card>
			<Card.Header as="h4">
				{t('Histogram')}
				<QuestionButton title={t('Histogram')} content={t('Histogram-description')} />
			</Card.Header>
			<Card.Body className="d-grid gap-3" >
				<Row>
					<Col md={6}>
						<SelectInput
							legend={t('variable')}
							defaultValue={variable}
							options={variables}
							onChange={setVariable}
						/>
					</Col>
					<Col md={6} >
						<SelectInput
							legend={t('group-by')}
							options={groupingVariables}
							clearable={true}
							onChange={setGroup}
						/>
					</Col>
				</Row>
				<Row>
					<Col md={6} >
						{ group ? <SelectInput
							legend={`${t('mode')}:`}
							defaultValue={groupMode}
							options={[ 'Overlay', 'Facets' ]}
							onChange={setGroupMode}
						/> : null }
					</Col>
					<Col md={6} >
						{ group && groupMode === 'Facets' ?
							<NumberInput
								legend={t('columns')}
								defaultValue={2}
								min={1}
								onChange={setNCols}
								style={{
									marginTop: 30
								}}
								inputStyle={{
									width: 70,
									marginLeft: 0,
									marginTop: 2
								}}
							/> : null }
					</Col>
				</Row>
				{ group && groupMode === 'Facets' ? <Row>
					<Col md={6} >
						<CheckboxInput
							legend={t('common-x-axis')}
							defaultValue={sameXRange}
							onChange={setSameXRange}
						/>
					</Col>
					<Col md={6} >
						<CheckboxInput
							legend={t('common-y-axis')}
							defaultValue={sameYRange}
							onChange={setSameYRange}
						/>
					</Col>
				</Row> : null }
				<div>
					<SelectInput
						legend={t('binning-strategy')}
						options={[
							'Automatic',
							'Select # of bins',
							'Set bin width'
						]}
						defaultValue={binStrategy}
						inline
						onChange={setBinStrategy}
					/>
					{ binStrategy !== 'Automatic' ?
						<div>
							<NumberInput
								legend={t('start')}
								inline
								defaultValue={xBins.start}
								onChange={( val ) => {
									const newXBins = { ...xBins };
									newXBins.start = val;
									setXBins( newXBins );
								}}
								step="any"
								inputStyle={{
									width: 70
								}}
							/>
							{ binStrategy === 'Select # of bins' ?
								<NumberInput
									legend={t('bins')}
									defaultValue={nBins}
									min={1}
									step={1}
									onChange={setNBins}
									inline
									inputStyle={{
										width: 70
									}}
								/> : null
							}
							{ binStrategy === 'Set bin width' ?
								<NumberInput
									legend={t('size')}
									inline
									defaultValue={xBins.size}
									onChange={( val ) => {
										const newXBins = { ...xBins };
										newXBins.size = val;
										setXBins( newXBins );
									}}
									step="any"
									inputStyle={{
										width: 70
									}}
								/> : null
							}
							<NumberInput
								legend={t('end')}
								inline
								defaultValue={xBins.end}
								onChange={( val ) => {
									const newXBins = { ...xBins };
									newXBins.end = val;
									setXBins( newXBins );
								}}
								step="any"
								inputStyle={{
									width: 70
								}}
							/>
						</div> : null }
				</div>
				{ props.showDensityOption ?
					<div>
						<CheckboxInput
							legend={t('display-density')}
							defaultValue={displayDensity}
							onChange={setDisplayDensity}
						/>
						<SelectInput
							multi
							legend={t('overlay-density-lines')}
							options={[ 'Data-driven', 'Normal', 'Uniform', 'Exponential', 'T', 'Chi-squared' ]}
							disabled={!displayDensity}
							defaultValue={densityType}
							clearable
							menuPlacement="top"
							onChange={setDensityType}
							components={{ Option }}
						/>
						{densityControls}
					</div> : null }
				<Button variant="primary" onClick={generateHistogram}>
					{t('generate')}
				</Button>
			</Card.Body>
		</Card>
	);
};


// PROPERTIES //

HistogramMenu.defaultProps = {
	defaultValue: null,
	groupingVariables: null,
	logAction() {},
	showDensityOption: true,
	onSelected() {}
};

HistogramMenu.propTypes = {
	data: PropTypes.object.isRequired,
	defaultValue: PropTypes.string,
	groupingVariables: PropTypes.array,
	logAction: PropTypes.func,
	onSelected: PropTypes.func,
	onCreated: PropTypes.func.isRequired,
	session: PropTypes.object.isRequired,
	showDensityOption: PropTypes.bool,
	variables: PropTypes.array.isRequired
};


// EXPORTS //

export default HistogramMenu;
