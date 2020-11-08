// MODULES //

import React, { useState } from 'react';
import logger from 'debug';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import PropTypes from 'prop-types';
import CheckboxInput from 'components/input/checkbox';
import SelectInput from 'components/input/select';
import NumberInput from 'components/input/number';
import randomstring from 'utils/randomstring/alphanumeric';
import Histogram from 'components/plots/histogram';
import { DATA_EXPLORER_SHARE_HISTOGRAM, DATA_EXPLORER_HISTOGRAM } from 'constants/actions.js';
import QuestionButton from './../question_button.js';


// VARIABLES //

const debug = logger( 'isle:data-explorer:histogram' );


// MAIN //

const HistogramMenu = ( props ) => {
	const [ displayDensity, setDisplayDensity ] = useState( false );
	const [ densityType, setDensityType ] = useState( null );
	const [ bandwidthAdjust, setBandwidthAdjust ] = useState( 1 );
	const [ variable, setVariable ] = useState( props.defaultValue || props.variables[ 0 ] );
	const [ group, setGroup ] = useState( null );
	const [ groupMode, setGroupMode ] = useState( 'Overlay' );
	const [ nCols, setNCols ] = useState( 2 );
	const [ nBins, setNBins ] = useState( 10 );
	const [ xBins, setXBins ] = useState({
		start: null,
		size: 100,
		end: null
	});
	const [ binStrategy, setBinStrategy ] = useState( 'Automatic' );
	const { variables, groupingVariables, t } = props;

	const generateHistogram = () => {
		debug( `Generate a histogram with ${nBins} bins` );
		const plotId = randomstring( 6 );
		const state = {
			variable,
			group,
			groupMode,
			displayDensity,
			densityType,
			binStrategy
		};
		if ( binStrategy === 'Select # of bins' ) {
			state.nBins = nBins;
		} else if ( binStrategy === 'Set bin width' ) {
			state.xBins = xBins;
		}
		if ( groupMode === 'Facets' ) {
			state.nCols = nCols;
		}
		if ( densityType === 'Data-driven' ) {
			state.bandwidthAdjust = bandwidthAdjust;
		}
		const action = { state, plotId };
		const onShare = () => {
			props.session.addNotification({
				title: props.t('plot-shared'),
				message: props.t('plot-shared-message'),
				level: 'success',
				position: 'tr'
			});
			props.logAction( DATA_EXPLORER_SHARE_HISTOGRAM, action );
		};
		const output = <Histogram data={props.data} {...state} id={plotId} action={action} onShare={onShare} />;
		props.logAction( DATA_EXPLORER_HISTOGRAM, action );
		props.onCreated( output );
	};
	return (
		<Card>
			<Card.Header as="h4">
				{t('Histogram')}
				<QuestionButton title={t('Histogram')} content={t('Histogram-description')} />
			</Card.Header>
			<Card.Body>
				<SelectInput
					legend={t('variable')}
					defaultValue={variable}
					options={variables}
					onChange={setVariable}
				/>
				<Row>
					<Col md={5} >
						<SelectInput
							legend={t('group-by')}
							options={groupingVariables}
							clearable={true}
							onChange={setGroup}
						/>
					</Col>
					<Col md={4} >
						{ group ? <SelectInput
							legend="Mode:"
							defaultValue={groupMode}
							options={[ 'Overlay', 'Facets' ]}
							onChange={setGroupMode}
						/> : null }
					</Col>
					<Col md={3} >
						{ group && groupMode === 'Facets' ? <NumberInput
							legend="Columns"
							defaultValue={2}
							min={1}
							onChange={setNCols}
							style={{
								marginTop: 0
							}}
							inputStyle={{
								width: 70,
								marginLeft: 0,
								marginTop: 2
							}}
						/> : null }
					</Col>
				</Row>
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
								legend="Start"
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
									legend="Bins"
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
									legend="Size"
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
								legend="End"
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
							legend={t('overlay-density-line')}
							options={[ 'Data-driven', 'Normal', 'Uniform', 'Exponential' ]}
							disabled={!displayDensity}
							defaultValue={densityType}
							clearable
							menuPlacement="top"
							onChange={setDensityType}
						/>
						{densityType === 'Data-driven' ?
							<NumberInput
								legend="Bandwidth adjustment"
								defaultValue={bandwidthAdjust}
								min={0} step={0.1}
								onChange={setBandwidthAdjust}
							/> : null
						}
					</div> : null }
				<Button variant="primary" block onClick={generateHistogram}>
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
