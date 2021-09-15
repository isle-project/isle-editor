// MODULES //

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import contains from '@stdlib/assert/contains';
import isArray from '@stdlib/assert/is-array';
import CheckboxInput from '@isle-project/components/input/checkbox';
import SelectInput from '@isle-project/components/input/select';
import SliderInput from '@isle-project/components/input/slider';
import randomstring from '@isle-project/utils/randomstring/alphanumeric';
import ScatterPlot from '@isle-project/components/plots/scatterplot';
import { DATA_EXPLORER_SHARE_SCATTERPLOT, DATA_EXPLORER_SCATTERPLOT } from '@isle-project/constants/actions.js';
import QuestionButton from './../question_button.js';


// MAIN //

const ScatterplotMenu = ( props ) => {
	const { variables, groupingVariables, defaultX, defaultY, t } = props;

	const [ xval, setXval ] = useState( defaultX || variables[ 0 ] );
	const [ yval, setYval ] = useState( defaultY || variables[ 1 ] );
	const [ color, setColor ] = useState( null );
	const [ type, setType ] = useState( null );
	const [ size, setSize ] = useState( null );
	const [ text, setText ] = useState( null );
	const [ regressionLine, setRegressionLine ] = useState( false );
	const [ regressionMethod, setRegressionMethod ] = useState([ 'linear' ]);
	const [ lineBy, setLineBy ] = useState( null );
	const [ smoothSpan, setSmoothSpan ] = useState( 0.66 );

	const generateScatterplot = () => {
		const plotId = randomstring( 6 );
		const action = { xval, yval, plotId };
		if ( color ) {
			action.color = color;
		}
		if ( type ) {
			action.type = type;
		}
		if ( size ) {
			action.size = size;
		}
		if ( text ) {
			action.text = text;
		}
		if ( regressionLine ) {
			action.regressionLine = regressionLine;
			action.regressionMethod = regressionMethod;
		}
		if ( contains( regressionMethod, 'smooth' ) ) {
			action.smoothSpan = smoothSpan;
		}
		if ( lineBy ) {
			action.lineBy = lineBy;
		}
		const onShare = () => {
			props.session.addNotification({
				title: t('plot-shared'),
				message: t('plot-shared-message'),
				level: 'success',
				position: 'tr'
			});
			props.logAction( DATA_EXPLORER_SHARE_SCATTERPLOT, action );
		};
		const output = <ScatterPlot
			data={props.data}
			xval={xval} yval={yval} color={color} type={type} size={size} text={text}
			regressionLine={regressionLine} regressionMethod={regressionMethod}
			lineBy={lineBy} smoothSpan={smoothSpan}
			id={plotId}
			action={action}
			onSelected={props.onSelected}
			onShare={onShare}
		/>;
		props.logAction( DATA_EXPLORER_SCATTERPLOT, action );
		props.onCreated( output );
	};
	return (
		<Card style={{ minWidth: 650 }} >
			<Card.Header as="h4" >
				{t('Scatterplot')}
				<QuestionButton title={t('Scatterplot')} content={t('Scatterplot-description')} />
			</Card.Header>
			<Card.Body>
				<div style={{ width: '100%' }}>
					<SelectInput
						legend={t('x-axis')}
						defaultValue={xval}
						options={variables}
						style={{ float: 'left', paddingRight: 10, width: '33.3%' }}
						onChange={setXval}
					/>
					<SelectInput
						legend={t('y-axis')}
						defaultValue={yval}
						style={{ float: 'left', paddingLeft: 10, paddingRight: 10, width: '33.3%' }}
						options={variables}
						onChange={setYval}
					/>
					<SelectInput
						legend={`${t('labels')}:`}
						style={{ float: 'left', paddingLeft: 10, width: '33.3%' }}
						clearable={true}
						options={groupingVariables}
						onChange={setText}
					/>
				</div>
				<div style={{ width: '100%' }}>
					<SelectInput
						legend={`${t('color')}:`}
						options={groupingVariables}
						clearable={true}
						style={{ float: 'left', paddingRight: 10, width: '33.3%' }}
						onChange={setColor}
					/>
					<SelectInput
						legend={`${t('type')}:`}
						options={groupingVariables}
						clearable={true}
						style={{ float: 'left', paddingLeft: 10, paddingRight: 10, width: '33.3%' }}
						onChange={setType}
					/>
					<SelectInput
						legend={`${t('size')}:`}
						options={variables}
						clearable={true}
						style={{ float: 'left', paddingLeft: 10, width: '33.3%' }}
						onChange={setSize}
					/>
				</div>
				<div style={{ clear: 'both' }}></div>
				<div style={{
					opacity: props.showRegressionOption ? 1.0 : 0.0
				}}>
					<CheckboxInput
						inline
						legend={t('show-regression-model')}
						defaultValue={false}
						onChange={() => {
							setRegressionLine( !regressionLine );
						}}
					/>
					<div style={{ width: '100%' }}>
						<SelectInput
							legend={`${t('method')}:`}
							defaultValue="linear"
							multi={true}
							options={[ 'linear', 'smooth' ]}
							style={{ float: 'right', paddingLeft: 10, width: '45%' }}
							disabled={!regressionLine}
							onChange={( value ) => {
								if ( !isArray( value ) ) {
									value = [ value ];
								}
								setRegressionMethod( value );
							}}
						/>
						<SelectInput
							legend={`${t('split-by')}:`}
							options={props.groupingVariables}
							clearable={true}
							style={{ float: 'right', paddingLeft: 10, width: '45%' }}
							disabled={!regressionLine}
							onChange={setLineBy}
						/>
					</div>
					<div style={{ clear: 'both' }}></div>
					<div style={{ width: '100%' }}>
						<SliderInput
							legend={t('smoothing-parameter')}
							disabled={!contains( regressionMethod, 'smooth' )}
							min={0.01}
							max={1}
							step={0.01}
							defaultValue={0.66}
							onChange={setSmoothSpan}
						/>
					</div>
				</div>
				<div style={{ clear: 'both' }}></div>
				<Button variant="primary" block onClick={generateScatterplot}>
					{t('generate')}
				</Button>
			</Card.Body>
		</Card>
	);
};


// PROPERTIES //

ScatterplotMenu.defaultProps = {
	defaultX: null,
	defaultY: null,
	groupingVariables: null,
	logAction() {},
	onSelected() {},
	showRegressionOption: true
};

ScatterplotMenu.propTypes = {
	data: PropTypes.object.isRequired,
	defaultX: PropTypes.string,
	defaultY: PropTypes.string,
	groupingVariables: PropTypes.array,
	logAction: PropTypes.func,
	onSelected: PropTypes.func,
	onCreated: PropTypes.func.isRequired,
	session: PropTypes.object.isRequired,
	showRegressionOption: PropTypes.bool,
	variables: PropTypes.array.isRequired
};


// EXPORTS //

export default ScatterplotMenu;
