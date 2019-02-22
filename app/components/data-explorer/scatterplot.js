// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CheckboxInput from 'components/input/checkbox';
import SelectInput from 'components/input/select';
import SliderInput from 'components/input/slider';
import Plotly from 'components/plotly';
import randomstring from 'utils/randomstring/alphanumeric';
import { isPrimitive as isNumber } from '@stdlib/assert/is-number';
import isArray from '@stdlib/assert/is-array';
import contains from '@stdlib/assert/contains';
import lowess from '@stdlib/stats/lowess';
import linspace from '@stdlib/math/utils/linspace';
import roundn from '@stdlib/math/base/special/roundn';
import mapValues from '@stdlib/utils/map-values';
import groupBy from '@stdlib/utils/group-by';
import group from '@stdlib/utils/group';
import unique from 'uniq';
import mean from 'utils/statistic/mean';
import max from 'utils/statistic/max';
import min from 'utils/statistic/min';
import { CAT20 } from 'constants/colors';
import QuestionButton from './question_button.js';


// VARIABLES //

const DESCRIPTION = 'A scatterplot is used to display the values of two quantitative variables inside a Cartesian coordinate system. Three additional variables can be displayed on the plot in this implementation: The color and type of the dots corresponding to each observation can represent categorical variables, and a quantitative variable can be chosen to govern the size of the dots. In cases where there is a textual identifier for each observation, it can be displayed as a label next to the dots. It is also possible to overlay a linear and/or smoothed regression line.';
const SYMBOLS = [
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
}

function scale( arr, a, b ) {
	const minimum = min( arr );
	const maximum = max( arr );
	const range = maximum - minimum;
	const out = new Array( arr.length );
	for ( let i = 0; i < out.length; i++ ) {
		out[ i ] = ( ( b - a ) * ( arr[ i ] - minimum ) / range ) + a;
	}
	return out;
}

export function generateScatterplotConfig({ data, xval, yval, text, color, type, size, regressionLine, regressionMethod, lineBy, smoothSpan }) {
	let nColors;
	let traces;

	let mode = 'markers';
	if ( text ) {
		mode += '+text';
	}
	if ( color && type ) {
		const colors = data[ color ];
		const types = data[ type ];
		const uniqueColors = colors.slice();
		unique( uniqueColors );
		nColors = uniqueColors.length;
		const uniqueTypes = types.slice();
		unique( uniqueTypes );

		traces = [];
		const xgrouped = groupBy( data[ xval ], ( v, i ) => {
			return colors[ i ] + ':' + types[ i ];
		});
		const ygrouped = groupBy( data[ yval ], ( v, i ) => {
			return colors[ i ] + ':' + types[ i ];
		});
		let texts;
		if ( text ) {
			texts = groupBy( data[ text ], ( v, i ) => {
				return colors[ i ] + ':' + types[ i ];
			});
		}
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
				const trace = {
					x: xgrouped[ grouping ],
					y: ygrouped[ grouping ],
					type: 'scatter',
					mode: mode,
					name: grouping,
					marker: {
						symbol: SYMBOLS[ j ],
						size: size ? sizegrouped[ grouping ] : 5.0,
						autocolorscale: false,
						color: CAT20[ i ]
					}
				};
				if ( text ) {
					trace.text = texts[ grouping ];
					trace.textposition = 'bottom';
				}
				traces.push( trace );
			}
		}
	}
	else if ( type ) {
		const groups = data[ type ].slice();
		unique( groups );
		const xgrouped = group( data[ xval ], data[ type ]);
		const ygrouped = group( data[ yval ], data[ type ]);
		let texts;
		if ( text ) {
			texts = group( data[ text ], data[ type ]);
		}
		traces = new Array( groups.length );
		for ( let i = 0; i < groups.length; i++ ) {
			traces[ i ] = {
				x: xgrouped[ groups[ i ] ],
				y: ygrouped[ groups[ i ] ],
				type: 'scatter',
				mode: mode,
				name: groups[ i ],
				marker: {
					symbol: SYMBOLS[ i ],
					size: size ? scale( group( data[ size ], data[ type ])[ groups[ i ] ], 5.0, 10.0 ) : 5.0,
					autocolorscale: false,
					color: 'rgba(0,0,0,1)'
				}
			};
			if ( text ) {
				traces[ i ].text = texts[ groups[ i ] ];
				traces[ i ].textposition = 'bottom';
			}
		}
	}
	else if ( color ) {
		const groups = data[ color ].slice();
		unique( groups );
		nColors = groups.length;
		const xgrouped = group( data[ xval ], data[ color ]);
		const ygrouped = group( data[ yval ], data[ color ]);
		let texts;
		if ( text ) {
			texts = group( data[ text ], data[ color ]);
		}
		traces = new Array( nColors );
		for ( let i = 0; i < nColors; i++ ) {
			traces[ i ] = {
				x: xgrouped[ groups[ i ] ],
				y: ygrouped[ groups[ i ] ],
				type: 'scatter',
				mode: mode,
				name: groups[ i ],
				marker: {
					symbol: 'circle',
					size: size ? scale( group( data[ size ], data[ color ])[ groups[ i ] ], 5.0, 10.0 ) : 5.0,
					autocolorscale: false,
					color: CAT20[ i ]
				}
			};
			if ( text ) {
				traces[ i ].text = texts[ groups[ i ] ];
				traces[ i ].textposition = 'bottom';
			}
		}
	} else {
		traces = [ {
			x: data[ xval ],
			y: data[ yval ],
			type: 'scatter',
			mode: mode,
			name: 'Points',
			marker: {
				symbol: 'circle',
				size: size ? scale( data[ size ], 5.0, 10.0 ) : 5.0
			}
		} ];
		if ( text ) {
			traces[ 0 ].text = data[ text ];
			traces[ 0 ].textposition = 'bottom';
		}
	}

	if ( regressionLine ) {
		if ( lineBy ) {
			const groups = data[ lineBy ].slice();
			unique( groups );
			const xgrouped = group( data[ xval ], data[ lineBy ]);
			const ygrouped = group( data[ yval ], data[ lineBy ]);
			let colorOffset = 0;
			if ( color && color !== lineBy ) {
				colorOffset += nColors;
			}
			for ( let i = 0; i < groups.length; i++ ) {
				let xvals = xgrouped[ groups[ i ] ];
				let yvals = ygrouped[ groups[ i ] ];
				let xc = [];
				let yc = [];
				for ( let j = 0; j < xvals.length; j++ ) {
					let x = xvals[ j ];
					let y = yvals[ j ];
					if ( isNumber( x ) && isNumber( y ) ) {
						xc.push( x );
						yc.push( y );
					}
				}
				xvals = xc;
				yvals = yc;
				let predictedLinear;
				let predictedSmooth;
				let values;
				if ( contains( regressionMethod, 'linear' ) ) {
					values = linspace( min( xvals ), max( xvals ), 100 );
					const coefs = calculateCoefficients( xvals, yvals );
					predictedLinear = values.map( x => coefs[ 0 ] + coefs[ 1 ]*x );
					traces.push({
						x: values,
						y: predictedLinear,
						mode: 'lines',
						name: groups[ i ],
						type: 'line',
						line: {
							color: CAT20[ colorOffset+i ],
							width: 1.5
						}
					});
				}
				if ( contains( regressionMethod, 'smooth' ) ) {
					const out = lowess( xvals, yvals, { 'f': smoothSpan } );
					values = out.x;
					predictedSmooth = out.y;
					traces.push({
						x: values,
						y: predictedSmooth,
						mode: 'lines',
						name: groups[ i ],
						type: 'line',
						line: {
							color: CAT20[ colorOffset+i ],
							width: 1.5
						}
					});
				}
			}
		} else {
			let xvals = data[ xval ];
			let yvals = data[ yval ];
			let xc = [];
			let yc = [];
			for ( let j = 0; j < xvals.length; j++ ) {
				let x = xvals[ j ];
				let y = yvals[ j ];
				if ( isNumber( x ) && isNumber( y ) ) {
					xc.push( x );
					yc.push( y );
				}
			}
			xvals = xc;
			yvals = yc;
			let predictedLinear;
			let predictedSmooth;
			let values;
			if ( contains( regressionMethod, 'linear' ) ) {
				values = linspace( min( xvals ), max( xvals ), 100 );
				const coefs = calculateCoefficients( xvals, yvals );
				predictedLinear = values.map( x => coefs[ 0 ] + coefs[ 1 ]*x );
				traces.push({
					x: values,
					y: predictedLinear,
					text: `${roundn( coefs[ 0 ], -6 )} + x * ${roundn( coefs[ 1 ], -6 )}`,
					mode: 'lines',
					name: 'Linear Fit',
					type: 'line'
				});
			}
			if ( contains( regressionMethod, 'smooth' ) ) {
				const out = lowess( xvals, yvals, { 'f': smoothSpan } );
				values = out.x;
				predictedSmooth = out.y;
				traces.push({
					x: values,
					y: predictedSmooth,
					mode: 'lines',
					name: 'Smoothed Fit',
					type: 'line'
				});
			}
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
			},
			title: `${xval} against ${yval}`
		}
	};
}


// MAIN //

class Scatterplot extends Component {
	constructor( props ) {
		super( props );

		const { variables, defaultX, defaultY } = props;

		this.state = {
			xval: defaultX || variables[ 0 ],
			yval: defaultY || variables[ 1 ],
			color: null,
			type: null,
			text: null,
			regressionLine: false,
			regressionMethod: ['linear'],
			lineBy: null,
			smoothSpan: 0.66
		};
	}

	generateScatterplot = () => {
		const config = generateScatterplotConfig({ data: this.props.data, ...this.state });
		const plotId = randomstring( 6 );
		const stateNew = { ...this.state };
		stateNew.plotId = plotId;
		const output = {
			variable: `${this.state.xval} against ${this.state.yval}`,
			type: 'Chart',
			value: <Plotly
				editable
				draggable
				fit
				id={plotId}
				data={config.data}
				layout={config.layout}
				onShare={() => {
					this.props.session.addNotification({
						title: 'Plot shared.',
						message: 'You have successfully shared your plot.',
						level: 'success',
						position: 'tr'
					});
					this.props.logAction( 'DATA_EXPLORER_SHARE:SCATTERPLOT', stateNew );
				}}
				onSelected={( selected ) => {
					this.props.onSelected({ x: this.state.xval, y: this.state.yval }, selected );
				}}
			/>
		};
		this.props.logAction( 'DATA_EXPLORER:SCATTERPLOT', stateNew );
		this.props.onCreated( output );
	}

	renderInputs() {
		const { variables, groupingVariables } = this.props;
		return ( <Fragment>
			<div style={{ width: '100%' }}>
				<SelectInput
					legend="x-axis:"
					defaultValue={this.state.xval}
					options={variables}
					style={{ float: 'left', paddingRight: 10, width: '33.3%' }}
					onChange={( value ) => {
						this.setState({
							xval: value
						});
					}}
				/>
				<SelectInput
					legend="y-axis:"
					defaultValue={this.state.yval}
					style={{ float: 'left', paddingLeft: 10, paddingRight: 10, width: '33.3%' }}
					options={variables}
					onChange={( value ) => {
						this.setState({
							yval: value
						});
					}}
				/>
				<SelectInput
					legend="Labels:"
					style={{ float: 'left', paddingLeft: 10, width: '33.3%' }}
					clearable={true}
					options={groupingVariables}
					onChange={( value ) => {
						this.setState({
							text: value
						});
					}}
				/>
			</div>
			<div style={{ width: '100%' }}>
				<SelectInput
					legend="Color:"
					options={groupingVariables}
					clearable={true}
					style={{ float: 'left', paddingRight: 10, width: '33.3%' }}
					onChange={( value ) => {
						this.setState({
							color: value
						});
					}}
				/>
				<SelectInput
					legend="Type:"
					options={groupingVariables}
					clearable={true}
					style={{ float: 'left', paddingLeft: 10, paddingRight: 10, width: '33.3%' }}
					onChange={( value ) => {
						this.setState({
							type: value
						});
					}}
				/>
				<SelectInput
					legend="Size:"
					options={variables}
					clearable={true}
					style={{ float: 'left', paddingLeft: 10, width: '33.3%' }}
					onChange={( value ) => {
						this.setState({
							size: value
						});
					}}
				/>
			</div>
		</Fragment> );
	}

	renderRegressionLineOptions() {
		return ( <div style={{
			opacity: this.props.showRegressionOption ? 1.0 : 0.0
		}}>
			<CheckboxInput
				inline
				legend="Show Regression Model"
				defaultValue={false}
				onChange={() => {
					this.setState({
						regressionLine: !this.state.regressionLine
					});
				}}
			/>
			<div style={{ width: '100%' }}>
				<SelectInput
					legend="Method:"
					defaultValue="linear"
					multi={true}
					options={[ 'linear', 'smooth' ]}
					style={{ float: 'right', paddingLeft: 10, width: '45%' }}
					disabled={!this.state.regressionLine}
					onChange={( value ) => {
						if ( !isArray(value) ) {
							value = [value];
						}
						this.setState({
							regressionMethod: value
						});
					}}
				/>
				<SelectInput
					legend="Split By:"
					options={this.props.groupingVariables}
					clearable={true}
					style={{ float: 'right', paddingLeft: 10, width: '45%' }}
					disabled={!this.state.regressionLine}
					onChange={( value ) => {
						this.setState({
							lineBy: value
						});
					}}
				/>
				<SliderInput
					legend="Smoothing Parameter"
					disabled={!contains(this.state.regressionMethod, 'smooth')}
					min={0.01}
					max={1}
					step={0.01}
					defaultValue={0.66}
					onChange={( value ) => {
						this.setState({
							smoothSpan: value
						});
					}}
				/>
			</div>
		</div> );
	}

	render() {
		return (
			<Card>
				<Card.Header as="h4" >
					Scatterplot<QuestionButton title="Scatterplot" content={DESCRIPTION} />
				</Card.Header>
				<Card.Body>
					{this.renderInputs()}
					<div style={{ clear: 'both' }}></div>
					{this.renderRegressionLineOptions()}
					<div style={{ clear: 'both' }}></div>
					<Button variant="primary" block onClick={this.generateScatterplot}>Generate</Button>
				</Card.Body>
			</Card>
		);
	}
}


// DEFAULT PROPERTIES //

Scatterplot.defaultProps = {
	defaultX: null,
	defaultY: null,
	groupingVariables: null,
	logAction() {},
	onSelected() {},
	session: {},
	showRegressionOption: true
};


// PROPERTY TYPES //

Scatterplot.propTypes = {
	data: PropTypes.object.isRequired,
	defaultX: PropTypes.string,
	defaultY: PropTypes.string,
	groupingVariables: PropTypes.array,
	logAction: PropTypes.func,
	onSelected: PropTypes.func,
	onCreated: PropTypes.func.isRequired,
	session: PropTypes.object,
	showRegressionOption: PropTypes.bool,
	variables: PropTypes.array.isRequired
};


// EXPORTS //

export default Scatterplot;
