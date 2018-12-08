// MODULES //

import React, { Component } from 'react';
import logger from 'debug';
import Button from 'react-bootstrap/lib/Button';
import Card from 'react-bootstrap/lib/Card';
import PropTypes from 'prop-types';
import CheckboxInput from 'components/input/checkbox';
import SelectInput from 'components/input/select';
import SliderInput from 'components/input/slider';
import Plotly from 'components/plotly';
import randomstring from 'utils/randomstring/alphanumeric';
import objectKeys from '@stdlib/utils/keys';
import kernelSmooth from 'kernel-smooth';
import linspace from '@stdlib/math/utils/linspace';
import min from 'utils/statistic/min';
import max from 'utils/statistic/max';
import mean from 'utils/statistic/mean';
import stdev from 'utils/statistic/stdev';
import isNumber from '@stdlib/assert/is-number';
import pow from '@stdlib/math/base/special/pow';
import gaussian from '@stdlib/stats/base/dists/normal/pdf';
import dexp from '@stdlib/stats/base/dists/exponential/pdf';
import dunif from '@stdlib/stats/base/dists/uniform/pdf';
import iqr from 'utils/statistic/iqr';
import QuestionButton from './question_button.js';
import by from './by.js';


// VARIABLES //

const debug = logger( 'isle:data-explorer:histogram' );
const DESCRIPTION = 'A histogram allows one to visualize the distribution of a quantitative variable. In order to create a histogram, the observed range of values is divided into different, non-overlapping intervals called "bins"; the height of each bin corresponds to how many observations are in that bin range.';
const SETTINGS = {
	yaxis: {
		tickformat: '-,.4r'
	}
};


// FUNCTIONS //

/**
* Calculates either a kernel density estimator or the MLE of a chosen parametric distribution.
*/
function calculateDensityValues( vals, densityType ) {
	/* eslint-disable no-case-declarations */
	const minVal = min( vals );
	const maxVal = max( vals );
	const x = linspace( minVal, maxVal, 512 );
	let y;
	switch ( densityType ) {
	case 'Data-driven':
		// Chose appropriate bandwidth via rule-of-thumb:
		const h = 2.0 * iqr( vals ) * pow( vals.length, -1/3 ) || 0.1;
		const phi = gaussian.factory( 0.0, 1.0 );
		const kde = kernelSmooth.density( vals, phi, h );
		y = x.map( x => kde( x ) );
		break;
	case 'Uniform':
		y = x.map( x => dunif( x, minVal, maxVal ) );
		break;
	case 'Exponential':
		const lambda = 1.0 / mean( vals );
		y = x.map( x => dexp( x, lambda ) );
		break;
	case 'Normal':
		const avg = mean( vals );
		const sd = stdev( vals );
		y = x.map( x => gaussian( x, avg, sd ) );
		break;
	}
	return [ x, y ];
}

export function generateHistogramConfig({ data, variable, group, overlayDensity, densityType, chooseBins, nBins }) {
	let traces;
	let layout;

	if ( !group ) {
		let vals = data[ variable ];
		let nonmissing = [];
		for ( let i = 0; i < vals.length; i++ ) {
			let x = vals[ i ];
			if ( isNumber( x ) ) {
				nonmissing.push( x );
			}
		}
		vals = nonmissing;
		traces = [ {
			x: vals,
			type: 'histogram',
			name: 'histogram'
		} ];
		if ( chooseBins ) {
			const maxVal = max(vals);
			const minVal = min(vals);
			const sizeVal = ((1.0 * maxVal) - minVal) / nBins;
			traces[ 0 ].autobinx = false;
			traces[ 0 ].xbins = {
				size: sizeVal,
				start: minVal,
				end: maxVal
			};
		}
		if ( overlayDensity ) {
			const [ x, y ] = calculateDensityValues( vals, densityType );
			traces.push({
				x: x,
				y: y,
				type: 'lines',
				name: densityType+' density'
			});
			traces[ 0 ][ 'histnorm' ] = 'probability density';
		}
		layout = {
			xaxis: { title: variable },
			yaxis: {
				title: overlayDensity ? 'Density' : 'Count',
				fixedrange: true
			},
			reversescale: true,
			title: variable,
			...SETTINGS
		};
	} else {
		let freqs = by( data[ variable ], data[ group ], arr => {
			let nonmissing = [];
			for ( let i = 0; i < arr.length; i++ ) {
				let x = arr[ i ];
				if ( isNumber( x ) ) {
					nonmissing.push( x );
				}
			}
			return nonmissing;
		});
		traces = [];
		const keys = group.categories || objectKeys( freqs );
		for ( let i = 0; i < keys.length; i++ ) {
			const key = keys[ i ];
			let vals = freqs[ key ];
			if ( overlayDensity ) {
				const config = {
					x: vals,
					type: 'histogram',
					histnorm: 'probability density',
					name: key+':histogram',
					opacity: 0.5
				};
				if ( chooseBins ) {
					// config.nbinsx = nBins;
					const maxVal = max(vals);
					const minVal = min(vals);
					const sizeVal = ((1.0 * maxVal) - minVal) / nBins;
					config.autobinx = false;
					config.xbins = {
						size: sizeVal,
						start: minVal,
						end: maxVal
					};
				}
				traces.push( config );
				const [ x, y ] = calculateDensityValues( vals, densityType );
				traces.push({
					x: x,
					y: y,
					type: 'lines',
					name: key+':density'
				});
			} else {
				const config = {
					x: vals,
					type: 'histogram',
					name: key,
					opacity: 0.5
				};
				if ( chooseBins ) {
					// Supply `nBins` as a suggested value for the number of bins; exact number of bins may differ...
					config.nbinsx = nBins;
				}
				traces.push( config );
			}
		}
		layout = {
			xaxis: { title: variable },
			yaxis: {
				title: overlayDensity ? 'Density' : 'Count',
				fixedrange: true
			},
			title: `${variable} given ${group}`,
			...SETTINGS
		};
		layout.barmode = 'overlay';
	}
	return {
		data: traces,
		layout: layout
	};
}


// MAIN //

class Histogram extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			chooseBins: false,
			overlayDensity: false,
			variable: props.defaultValue || props.variables[ 0 ],
			group: null, // eslint-disable-line react/no-unused-state
			nBins: 10,
			densityType: 'Data-driven'
		};
	}

	generateHistogram() {
		const config = generateHistogramConfig({
			data: this.props.data, ...this.state
		});
		debug( `Generate a histogram with ${this.state.nBins} bins` );
		const plotId = randomstring( 6 );
		const stateNew = { ...this.state };
		stateNew.plotId = plotId;
		const output = {
			variable: this.state.variable,
			type: 'Chart',
			value: <Plotly editable id={plotId} fit data={config.data} layout={config.layout} onShare={() => {
				this.props.session.addNotification({
					title: 'Plot shared.',
					message: 'You have successfully shared your plot.',
					level: 'success',
					position: 'tr'
				});
				this.props.logAction( 'DATA_EXPLORER_SHARE:HISTOGRAM', stateNew );
			}} onSelected={( selected ) => {
				this.props.onSelected( this.state.variable, selected );
			}} />
		};
		this.props.logAction( 'DATA_EXPLORER:HISTOGRAM', stateNew );
		this.props.onCreated( output );
	}

	render() {
		const { variables, groupingVariables } = this.props;
		return (
			<Card>
				<Card.Header as="h4">
					Histogram
					<QuestionButton title="Histogram" content={DESCRIPTION} />
				</Card.Header>
				<Card.Body>
					<SelectInput
						legend="Variable:"
						defaultValue={this.state.variable}
						options={variables}
						onChange={( value )=>{
							this.setState({
								variable: value
							});
						}}
					/>
					<SelectInput
						legend="Group By:"
						options={groupingVariables}
						clearable={true}
						onChange={( value )=>{
							this.setState({
								group: value // eslint-disable-line react/no-unused-state
							});
						}}
					/>
					<div>
						<CheckboxInput
							legend="Choose # of bins"
							defaultValue={this.state.chooseBins}
							inline
							onChange={()=>{
								this.setState({
									chooseBins: !this.state.chooseBins
								});
							}}
						/>
						<SliderInput
							defaultValue={this.state.nBins}
							min={1}
							step={1}
							disabled={!this.state.chooseBins}
							onChange={( value )=>{
								this.setState({
									nBins: value
								});
							}}
							inline
						/>
					</div>
					<div style={{
						opacity: this.props.showDensityOption ? 1.0 : 0.0
					}}>
						<CheckboxInput
							legend="Overlay Density"
							defaultValue={this.state.overlayDensity}
							onChange={()=>{
								this.setState({
									overlayDensity: !this.state.overlayDensity
								});
							}}
						/>
						<SelectInput
							legend="Type:"
							options={[ 'Data-driven', 'Normal', 'Uniform', 'Exponential' ]}
							disabled={!this.state.overlayDensity}
							defaultValue={this.state.densityType}
							onChange={( value )=>{
								this.setState({
									densityType: value
								});
							}}
						/>
					</div>
					<Button variant="primary" block onClick={this.generateHistogram.bind( this )}>Generate</Button>
				</Card.Body>
			</Card>
		);
	}
}


// DEFAULT PROPERTIES //

Histogram.defaultProps = {
	defaultValue: null,
	groupingVariables: null,
	logAction() {},
	session: {},
	showDensityOption: true,
	onSelected() {}
};


// PROPERTY TYPES //

Histogram.propTypes = {
	data: PropTypes.object.isRequired,
	defaultValue: PropTypes.string,
	groupingVariables: PropTypes.array,
	logAction: PropTypes.func,
	onSelected: PropTypes.func,
	onCreated: PropTypes.func.isRequired,
	session: PropTypes.object,
	showDensityOption: PropTypes.bool,
	variables: PropTypes.array.isRequired
};


// EXPORTS //

export default Histogram;
