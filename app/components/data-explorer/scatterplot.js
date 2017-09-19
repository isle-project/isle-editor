// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CheckboxInput from 'components/input/checkbox';
import SelectInput from 'components/input/select';
import Dashboard from 'components/dashboard';
import Plotly from 'components/plotly';
import linspace from '@stdlib/math/utils/linspace';
import mapValues from '@stdlib/utils/map-values';
import groupBy from '@stdlib/utils/group-by';
import group from '@stdlib/utils/group';
import copy from '@stdlib/utils/copy';
import unique from 'uniq';
import mean from 'compute-mean';
import max from 'compute-max';
import min from 'compute-min';


// VARIABLES //

var COLORS = [
	'#1f77b4',
	'#aec7e8',
	'#ff7f0e',
	'#ffbb78',
	'#2ca02c',
	'#98df8a',
	'#d62728',
	'#ff9896',
	'#9467bd',
	'#c5b0d5',
	'#8c564b',
	'#c49c94',
	'#e377c2',
	'#f7b6d2',
	'#7f7f7f',
	'#c7c7c7',
	'#bcbd22',
	'#dbdb8d',
	'#17becf',
	'#9edae5'
];

var SYMBOLS = [
	'circle',
	'square-open',
	'diamond',
	'hexagon-open',
	'cross-open',
	'star-open',
	'pentagon',
	'triangle-up',
	'circle-open',
	'bowtie',
	'star',
	'triangle-down',
	'hexagram',
	'hourglass',
	'diamond-cross',
	'square-cross',
	'star-square',
	'star-square-open'
];

// FUNCTIONS //

function calculateCoefficients( x, y ) {
	const xmu = mean( x );
	const ymu = mean( y );
	let C1 = 0;
	let C2 = 0;
	const len = x.length;
	for ( let i = 0; i < len; i++ ) {
		let xdelta = x[ i ] - xmu;
		let ydelta = y[ i ] - ymu;
		C1 += xdelta * xdelta;
		C2 += xdelta * ydelta;
	}
	const slope = C2 / C1;
	const yint = ymu - slope*xmu;
	return [ yint, slope ];
} // end FUNCTION calculateCoefficients()

function scale( arr, a, b ) {
	const minimum = min( arr );
	const maximum = max( arr );
	const range = maximum - minimum;
	const out = new Array( arr.length );
	for ( let i = 0; i < out.length; i++ ) {
		out[ i ] = ( ( b - a ) * ( arr[ i ] - minimum ) / range ) + a;
	}
	return out;
} // end FUNCTION scale()

function generateScatterplotConfig({ data, xval, yval, color, type, size, regressionLine, lineBy }) {
	let nColors;
	let traces;

	if ( color && type ) {
		const colors = data[ color ];
		const types = data[ type ];
		const uniqueColors = copy( colors );
		unique( uniqueColors );
		nColors = uniqueColors.length;
		const uniqueTypes = copy( types );
		unique( uniqueTypes );

		traces = [];
		const xgrouped = groupBy( data[ xval ], ( v, i ) => {
			return colors[ i ] + ':' + types[ i ];
		});
		const ygrouped = groupBy( data[ yval ], ( v, i ) => {
			return colors[ i ] + ':' + types[ i ];
		});
		let sizegrouped;
		if ( size ) {
			sizegrouped = groupBy( data[ size ], ( v, i ) => {
				return colors[ i ] + ':' + types[ i ];
			});
			sizegrouped = mapValues( sizegrouped, ( value ) => {
				return scale( value, 5.0, 10.0 );
			});
		}
		for ( let i = 0; i < uniqueColors.length; i++ ) {
			for ( let j = 0; j < uniqueTypes.length; j++ ) {
				const grouping = uniqueColors[ i ] + ':' + uniqueTypes[ j ];
				traces.push({
					x: xgrouped[ grouping ],
					y: ygrouped[ grouping ],
					type: 'scatter',
					mode: 'markers',
					name: grouping,
					marker: {
						symbol: SYMBOLS[ j ],
						size: size ? sizegrouped[ grouping ] : 5.0,
						autocolorscale: false,
						color: COLORS[ i ]
					}
				});
			}
		}
	}
	else if ( type ) {
		const groups = copy( data[ type ]);
		unique( groups );
		const xgrouped = group( data[ xval ], data[ type ]);
		const ygrouped = group( data[ yval ], data[ type ]);
		traces = new Array( groups.length );
		for ( let i = 0; i < groups.length; i++ ) {
			traces[ i ] = {
				x: xgrouped[ groups[ i ] ],
				y: ygrouped[ groups[ i ] ],
				type: 'scatter',
				mode: 'markers',
				name: groups[ i ],
				marker: {
					symbol: SYMBOLS[ i ],
					size: size ? scale( group( data[ size ], data[ type ])[ groups[ i ] ], 5.0, 10.0 ) : 5.0,
					autocolorscale: false,
					color: 'rgba(0,0,0,1)'
				}
			};
		}
	}
	else if ( color ) {
		const groups = copy( data[ color ]);
		unique( groups );
		nColors = groups.length;
		const xgrouped = group( data[ xval ], data[ color ]);
		const ygrouped = group( data[ yval ], data[ color ]);
		traces = new Array( nColors );
		for ( let i = 0; i < nColors; i++ ) {
			traces[ i ] = {
				x: xgrouped[ groups[ i ] ],
				y: ygrouped[ groups[ i ] ],
				type: 'scatter',
				mode: 'markers',
				name: groups[ i ],
				marker: {
					symbol: 'circle',
					size: size ? scale( group( data[ size ], data[ color ])[ groups[ i ] ], 5.0, 10.0 ) : 5.0,
					autocolorscale: false,
					color: COLORS[ i ]
				},
			};
			console.log( `COLORS ${i}: `+  COLORS[ i ] )
		}
	} else {
		traces = [ {
			x: data[ xval ],
			y: data[ yval ],
			type: 'scatter',
			mode: 'markers',
			name: 'Points',
			marker: {
				symbol: 'circle',
				size: size ? scale( data[ size ], 5.0, 10.0 ) : 5.0
			},
		} ];
	}

	if ( regressionLine ) {
		if ( lineBy ) {
			const groups = copy( data[ lineBy ]);
			unique( groups );
			const xgrouped = group( data[ xval ], data[ lineBy ]);
			const ygrouped = group( data[ yval ], data[ lineBy ]);
			let colorOffset = 0;
			if ( color && color !== lineBy ) {
				colorOffset += nColors;
			}
			for ( let i = 0; i < groups.length; i++ ) {
				const xvals = xgrouped[ groups[ i ] ];
				const yvals = ygrouped[ groups[ i ] ];
				const coefs = calculateCoefficients( xvals, yvals );
				const values = linspace( min( xvals ), max( xvals ), 100 );
				const predicted = values.map( x => coefs[ 0 ] + coefs[ 1 ]*x );
				traces.push({
					x: values,
					y: predicted,
					name: groups[ i ],
					type: 'line',
					line: {
						color: COLORS[ colorOffset+i ],
						width: 1.5
					}
				});
			}
		} else {
			const xvals = data[ xval ];
			const yvals = data[ yval ];
			const coefs = calculateCoefficients( xvals, yvals );
			const values = linspace( min( xvals ), max( xvals ), 100 );
			const predicted = values.map( x => coefs[ 0 ] + coefs[ 1 ]*x );
			traces.push({
				x: values,
				y: predicted,
				name: 'Linear Fit',
				type: 'line'
			});
		}
	}
	return {
		data: traces,
		layout: {
			hovermode: 'closest',
			xaxis: {
				title: xval
			},
			yaxis: {
				title: yval
			},
			legend: {
				traceorder: 'normal',
				font: {
				  family: 'sans-serif',
				  size: 10,
				  color: '#000'
				},
				bordercolor: '#E2E2E2',
				borderwidth: 2
			}
		}
	};
} // end FUNCTION generateScatterplot()


// MAIN //

class Scatterplot extends Component {

	constructor( props ) {
		super( props );

		this.state = {
			showRegressionLine: false
		};
	}

	generateScatterplot( xval, yval, color, type, size, regressionLine, lineBy ) {

		const config = generateScatterplotConfig({ data: this.props.data, xval, yval, color, type, size, regressionLine, lineBy });

		const output = {
			variable: `${xval} against ${yval}`,
			type: 'Chart',
			value: <div>
				<label>{`${xval} against ${yval}`}: </label>
				<Plotly
					data={config.data}
					layout={config.layout}
					onDone={this.props.onPlotDone}
				/>
			</div>
		};
		this.props.logAction( 'DATA_EXPLORER:SCATTERPLOT', {
			xval, yval, color, type, size
		});
		this.props.onCreated( output );
	}

	render() {
		const { variables, defaultX, defaultY, groupingVariables } = this.props;
		return (
			<Dashboard
				autoStart={false}
				title="Scatterplot"
				onGenerate={this.generateScatterplot.bind( this )}
			>
				<SelectInput
					legend="Variable on x-axis:"
					defaultValue={defaultX || variables[ 0 ]}
					options={variables}
				/>
				<SelectInput
					legend="Variable on y-axis:"
					defaultValue={defaultY || variables[ 1 ]}
					options={variables}
				/>
				<div style={{ width: '100%' }}>
					<SelectInput
						legend="Color:"
						options={groupingVariables}
						clearable={true}
						style={{ float: 'left', paddingRight: 10, width: "33.3%" }}
					/>
					<SelectInput
						legend="Type:"
						options={groupingVariables}
						clearable={true}
						style={{ float: 'left', paddingLeft: 10, paddingRight: 10, width: "33.3%" }}
					/>
					<SelectInput
						legend="Size:"
						options={variables}
						clearable={true}
						style={{ float: 'left', paddingLeft: 10, width: "33.3%" }}
					/>
				</div>
				<div style={{ clear: 'both' }}></div>
				<div style={{
					width: '100%',
					opacity: this.props.showRegressionOption ? 1.0 : 0.0
				}}>
					<CheckboxInput
						inline
						legend="Show Regression Line"
						defaultValue={false}
						style={{ float: 'left', paddingLeft: 10 }}
						onChange={() => {
							this.setState({
								showRegressionLine: !this.state.showRegressionLine
							});
						}}
					/>
					<SelectInput
						legend="Split By:"
						options={groupingVariables}
						clearable={true}
						style={{ float: 'right', paddingLeft: 10, width: "40%" }}
						disabled={!this.state.showRegressionLine}
					/>
				</div>
				<div style={{ clear: 'both' }}></div>
			</Dashboard>
		);
	}
}


// DEFAULT PROPERTIES //

Scatterplot.defaultProps = {
	defaultX: null,
	defaultY: null,
	onPlotDone() {},
	showRegressionOption: true
};


// PROPERTY TYPES //

Scatterplot.propTypes = {
	data: PropTypes.object.isRequired,
	onCreated: PropTypes.func.isRequired,
	showRegressionOption: PropTypes.bool
};


// EXPORTS //

export default Scatterplot;
