// MODULES //

import React, { Component, PropTypes } from 'react';
import { Button, Grid, Row, Col, Panel, Tabs, Tab } from 'react-bootstrap';
import CheckboxInput from 'components/input/checkbox';
import NumberInput from 'components/input/number';
import SelectInput from 'components/input/select';
import SliderInput from 'components/input/slider';
import Dashboard from 'components/dashboard';
import RPlot from 'components/r/plot';
import isArray from '@stdlib/utils/is-array';
import isNumber from '@stdlib/utils/is-number';
import isObject from '@stdlib/utils/is-object';
import entries from '@stdlib/utils/object-entries';
import countBy from 'lodash.countby';
import range from 'compute-range';
import statistic from './statistic.js';


// FUNCTIONS //

function by( arr, factor, fun ) {
	let ret = {};
	for ( let i = 0; i < arr.length; i++ ) {
		if ( !isArray( ret[ factor[ i ] ]) ) {
			ret[ factor[ i ] ] = [];
		}
		ret[ factor[ i ] ].push( arr[ i ]);
	}
	for ( let key in ret ) {
		ret[ key ] = fun( ret[ key ]);
	}
	return ret;
}

function by2( arr1, arr2, factor, fun ) {
	let out = {};
	let ret1 = {};
	let ret2 = {};
	for ( let i = 0; i < factor.length; i++ ) {
		if ( !isArray( ret1[ factor[ i ] ]) ) {
			ret1[ factor[ i ] ] = [];
			ret2[ factor[ i ] ] = [];
		}
		ret1[ factor[ i ] ].push( arr1[ i ]);
		ret2[ factor[ i ] ].push( arr2[ i ]);
	}
	for ( let key in ret1 ) {
		out[ key ] = fun( ret1[ key ], ret2[ key ]);
	}
	return out;
}

function getFrequencies( x, relativeFreqs ) {
	let freqs = entries( countBy( x ) ).map( e => {
		return { category: e[ 0 ], count: e[ 1 ] };
	});
	if ( relativeFreqs ) {
		let totalCount = freqs
			.map( x => x.count )
			.reduce( ( a, b ) => a + b );
		freqs = freqs.map( x => {
			x.count = x.count / totalCount;
			return x;
		});
	}
	return freqs;
}

const frequencyTable = ( e, idx ) => {
	return (
		<div key={idx} >
			<label>{e.variable}: </label>
			<pre>
				<table>
					<thead>
						<tr>
							<th>Category</th>
							<th>{ e.relative ? 'Relative' : 'Count' }</th>
						</tr>
					</thead>
					<tbody>
						{e.value.map( ( elem, id ) => {
							return ( <tr key={id}>
								<td>{elem.category}</td>
								<td>{e.relative ? elem.count.toFixed( 3 ) : elem.count}</td>
							</tr> );
						})}
					</tbody>
				</table>
			</pre>
		</div>
	);
};

const groupedFrequencyTable = ( e, idx ) => {
	return (
		<div key={idx} style={{ overflowX: 'auto' }}>
			<label>{e.variable}: </label>
			{entries( e.value ).map( ( arr, i ) => {
				let categories = arr[ 1 ].map( x => <td>{x.category}</td> );
				let counts = arr[ 1 ].map( x => <td>{ e.relative ? x.count.toFixed( 3 ) : x.count }</td> );
				return ( <pre key={i} >
					<label>{arr[ 0 ]}: </label>
					<table>
						<thead>
							<tr>
								<th>Category</th>
								{categories}
							</tr>
						</thead>
						<tbody>
							<th>{ e.relative ? 'Relative' : 'Count' }</th>
							{counts}
						</tbody>
					</table>
				</pre> );
			})}
		</div>
	);
};

const OutputPanel = ( output ) => {
	return (
		<div id="outputPanel" style={{ height: 450, overflowY: 'scroll' }} >
			{output.map( ( e, idx ) => {
				if ( e.type === 'Chart' ) {
					return e.value;
				}
				else if ( e.type === 'Frequency Table' ) {
					return frequencyTable( e, idx );
				}
				else if ( e.type === 'Grouped Frequency Table' ) {
					return groupedFrequencyTable( e, idx );
				}
				else if ( isNumber( e.value ) ) {
					return (
						<div key={idx} >
							<label>{e.variable}: </label>
							<pre>{e.type}: {e.value.toFixed( 3 )}</pre>
						</div>
					);
				}
				else if ( isObject( e.value ) ) {
					return (
						<div key={idx} >
							<label>{e.variable}: </label>
							<pre>
								<table>
									<tbody>
										<tr>
											<th>{e.group}</th>
											<th>{e.type}</th>
										</tr>
										{entries( e.value ).map( ( arr, i ) => {
											if ( isArray( arr[ 1 ]) ) {
												return (
													<tr key={i} >
														<td>{arr[ 0 ]}</td>
														<td>{arr[ 1 ][ 0 ].toFixed( 3 )},{arr[ 1 ][ 1 ].toFixed( 3 )}</td>
													</tr>
												);
											}
											return (
												<tr key={i} >
													<td>{arr[ 0 ]} </td>
													<td>{arr[ 1 ].toFixed( 3 )} </td>
												</tr>
											);
										})}
									</tbody>
								</table>
							</pre>
						</div>
					);
				} else if ( isArray( e.value ) ) {
					return (
						<div key={idx}>
							<label>{e.variable}: </label>
							<pre>
								<table>
									<tbody>
										<tr>
											<th>Min</th>
											<th>Max</th>
										</tr>
										<tr>
											{e.value.map( e => <td>{e}</td> )}
										</tr>
									</tbody>
								</table>
							</pre>
						</div>
					);
				}
			})}
		</div>
	);
};


// MAIN //

class DataExplorer extends Component {
	/**
	* Constructor function
	*/
	constructor( props ) {
		super( props );

		let groupVars = props.categorical.slice();
		groupVars.unshift( 'None' );

		this.state = {
			output: [],
			groupVars
		};

		this.generateHistogram = (
			variable, group, overlayDensity, chooseBins, nBins,
			xRange, xMin, xMax
		)=>{
			let newOutput;
			if ( group === 'None' ) {
				newOutput = this.state.output.slice();
				let data = this.props.data[ variable ];
				let code;
				if ( chooseBins ) {
					code = `${variable} = c(${data})
						truehist( ${variable}, nbins = ${nBins},
							prob=${overlayDensity ? 'TRUE' : 'FALSE'},
							cex.lab=2.0, cex.main=2.0, cex.axis=2.0
							${ xRange ? ', xlim = c('+xMin+','+xMax+')' : '' }
						)\n`;
				} else {
					code = `${variable} = c(${data})
						truehist( ${variable}, prob=${overlayDensity ? 'TRUE' : 'FALSE'},
							cex.lab=2.0, cex.main=2.0, cex.axis=2.0,
							${ xRange ? ', xlim = c('+xMin+','+xMax+')' : '' }
						)\n`;
				}
				if ( overlayDensity ) {
					code += `lines( density( ${variable} ) )`;
				}
				newOutput.push({
					variable: variable,
					type: 'Chart',
					value: <div>
						<label>{variable}: </label>
						<RPlot
							code={code}
							libraries={[ 'MASS' ]}
						/>
					</div>
				});
			} else {
				let freqs = by( this.props.data[ variable ], this.props.data[ group ], arr => {
					return arr;
				});
				newOutput = this.state.output.slice();

				let nPlots = Object.keys( freqs ).length;
				let code = `par(mfrow=c(ceiling(${nPlots}/2),2))\n`;
				for ( let key in freqs ) {
					let val = freqs[ key ];
					if ( chooseBins ) {
						code += `${variable} = c(${val})
							truehist( ${variable}, nbins = ${nBins},
								main="${group}: ${key}",
								prob=${overlayDensity ? 'TRUE' : 'FALSE'},
								cex.lab=2.0, cex.main=2.0, cex.axis=1.5,
								${ xRange ? ', xlim = c('+xMin+','+xMax+')' : '' }
							 )\n`;
					} else {
						code += `${variable} = c(${val})
							truehist( ${variable}, main="${group}: ${key}",
								prob=${overlayDensity ? 'TRUE' : 'FALSE'},
								cex.lab=2.0, cex.main=2.0, cex.axis=1.5
								${ xRange ? ', xlim = c('+xMin+','+xMax+')' : '' }
							)\n`;
					}
					if ( overlayDensity ) {
						code += `lines( density( ${variable} ) )`;
					}
					code += '\n';
				}
				newOutput.push({
					variable: variable,
					type: 'Chart',
					value: <div>
						<label>{variable}: </label>
						<RPlot
							code={code}
							libraries={[ 'MASS' ]}
						/>
					</div>
				});
			}
			this.setState({
				output: newOutput
			});
		};

		this.generateHeatmap = ( xval, yval, overlayPoints ) => {
			let newOutput = this.state.output.slice();

			let code = `x = c(${this.props.data[ xval ]})
				y = c(${this.props.data[ yval ]})
				f1 <- kde2d( x, y )
				image( f1, xlab="${xval}", ylab="${yval}")`;

			if ( overlayPoints ) {
				code += '\n points( x, y, col="grey" )';
			}

			newOutput.push({
				variable: `${xval} against ${yval}`,
				type: 'Chart',
				value: <div>
					<label>{`${xval} against ${yval}`}: </label>
					<RPlot
						code={code}
						libraries={[ 'MASS' ]}
					/>
				</div>
			});
			this.setState({
				output: newOutput
			});
		};

		this.generateBoxplot = ( variable, group, commonAxis ) => {
			let newOutput;
			let yranges;
			if ( group === 'None' ) {
				newOutput = this.state.output.slice();
				let data = this.props.data[ variable ];
				newOutput.push({
					variable: variable,
					type: 'Chart',
					value: <div>
						<label>{variable}: </label>
						<RPlot
							code={`boxplot( c( ${data} ),
								cex.lab=2.0, cex.axis=1.5 )`}
						/>
					</div>
				});
			} else {
				yranges = range( this.props.data[ variable ]);
				let freqs = by( this.props.data[ variable ], this.props.data[ group ], arr => {
					return arr;
				});
				newOutput = this.state.output.slice();

				let nPlots = Object.keys( freqs ).length;
				let code = `par(mfrow=c(ceiling(${nPlots}/2),2))`;

				for ( let key in freqs ) {
					let val = freqs[ key ];
					code += '\n';
					code += commonAxis ?
						`boxplot(c(${val}),main="${group}: ${key}",
						cex.lab=2.0, cex.main=2.0, cex.axis=1.5,ylim=c(${yranges}))` :
						`boxplot(c(${val}),main="${group}: ${key}",
						cex.lab=2.0, cex.main=2.0, cex.axis=1.5)`;
				}
				newOutput.push({
					variable: variable,
					type: 'Chart',
					value: <div>
						<label>{variable}: </label>
						<RPlot code={code} />
					</div>
				});
			}
			this.setState({
				output: newOutput
			});
		};

		this.generateScatterplot = ( xval, yval, color, type ) => {
			let newOutput = this.state.output.slice();

			let aes = 'aes( x = xval, y = yval';
			if ( color !== 'None' ) {
				aes += ', color = color';
			}
			if ( type !== 'None' ) {
				aes += ', shape = type';
			}
			aes += ' )';

			let labs = `labs( x = "${xval}", y="${yval}"`;
			if ( color !== 'None' ) {
				labs += `, color = "${color}"`;
			}
			if ( type !== 'None' ) {
				labs += `, shape = "${type}"`;
			}
			labs += ' )';

			let code = `dat = data.frame(
				xval = c(${this.props.data[ xval ]}),
				yval = c(${this.props.data[ yval ]})
				${ color !== 'None' ? `, color = c(${this.props.data[ color ].map(
					e => `"${e}"`
				)})` : '' }
				${ type !== 'None' ? `, type = c(${this.props.data[ type ].map(
					e => `"${e}"`
				)})` : '' }
			)
			ggplot( data = dat, ${aes}) +
			geom_point( size = 1.5 ) + ${labs}`;

			newOutput.push({
				variable: `${xval} against ${yval}`,
				type: 'Chart',
				value: <div>
					<label>{`${xval} against ${yval}`}: </label>
					<RPlot
						code={code}
						prependCode={[ 'theme_set(theme_gray(base_size = 18))' ]}
						libraries={[ 'ggplot2' ]}
					/>
				</div>
			});
			this.setState({
				output: newOutput
			});
		};

		this.generatePlot = ( variable, group ) => {
			let newOutput;
			let plotCommand;
			let label;
			switch ( this.state.plotType ) {
			case 'Bar Chart':
				plotCommand = 'barplot';
				label = 'names.arg';
				break;
			case 'Pie Chart':
				plotCommand = 'pie';
				label = 'labels';
				break;
			}
			if ( group === 'None' ) {
				let freqs = entries( countBy( this.props.data[ variable ]) );
				let categories = freqs.map( e => '"'+e[ 0 ]+'"' );
				freqs = freqs.map( e => e[ 1 ]);

				newOutput = this.state.output.slice();
				newOutput.push({
					variable: variable,
					type: 'Chart',
					value: <div>
						<label>{variable}: </label>
						<RPlot code={`${plotCommand}(c(${freqs}),
							${label}=c(${categories}),
							cex.lab=2.0, cex.main=2.0, cex.axis=2.0, cex=1.5 )`} />
					</div>
				});
			} else {
				let freqs = by( this.props.data[ variable ], this.props.data[ group ], arr => {
					return entries( countBy( arr ) );
				});
				newOutput = this.state.output.slice();

				let nPlots = Object.keys( freqs ).length;
				let code = `par(mfrow=c(ceiling(${nPlots}/2),2))`;
				for ( let key in freqs ) {
					let val = freqs[ key ];
					let categories = val.map( e => '"'+e[ 0 ]+'"' );
					let counts = val.map( e => e[ 1 ]);
					code += '\n';
					code += `${plotCommand}(c(${counts}),
						${label}=c(${categories}),
						main="${group}: ${key}",
						cex.lab=2.0, cex.main=2.0, cex.axis=2.0, cex=1.5 )`;
				}
				newOutput.push({
					variable: variable,
					type: 'Chart',
					value: <div>
						<label>{variable}: </label>
						<RPlot code={code} />
					</div>
				});
			}
			this.setState({
				output: newOutput
			});
		};

		this.generateFrequencyTable = ( variable, group, relativeFreqs ) => {
			let newOutput = this.state.output.slice();
			let freqs;
			if ( group === 'None' ) {
				freqs = getFrequencies( this.props.data[ variable ], relativeFreqs );
			} else {
				freqs = by( this.props.data[ variable ], this.props.data[ group ], ( arr ) => {
					return getFrequencies( arr, relativeFreqs );
				});
			}
			newOutput.push({
				variable: group === 'None' ? variable : `${variable} by ${group}`,
				type: group === 'None' ? 'Frequency Table' : 'Grouped Frequency Table',
				value: freqs,
				relative: relativeFreqs
			});
			this.setState({
				output: newOutput
			});
		};

		this.generateStatistics = ( statName, variable, secondVariable, group ) => {
			let { data } = this.props;
			let fun;
			let res;

			fun = statistic( statName );

			if ( statName === 'Correlation' ) {
				if ( group === 'None' ) {
					res = fun( data[ variable ], data[ secondVariable ]);
					// Extract correlation coefficient from correlation matrix:
					res = res[ 0 ][ 1 ];
				} else {
					res = by2( data[ variable ], data[ secondVariable ], data[ group ], fun );
					for ( let key in res ) {
						// Extract correlation coefficient from correlation matrix:
						res[ key ] = res[ key ][ 0 ][ 1 ];
					}
				}
				variable = `${variable} vs. ${secondVariable}`;
			}
			else {
				if ( group === 'None' ) {
					res = fun( data[ variable ]);
				} else {
					res = by( data[ variable ], data[ group ], fun );
				}
			}
			let newOutput = this.state.output.slice();
			newOutput.push({
				variable: variable,
				type: statName,
				value: res,
				group
			});
			this.setState({
				output: newOutput
			});
		};

	}
	/**
	* React component render method
	*/
	render() {
		let colWidth = this.props.questions ? 4 : 6;
		return (
			<Grid>
				<Row>
					{ this.props.questions ? <Col md={colWidth}><Panel
						header={<h3>Questions</h3>}
						style={{ height: 600 }}
					>{this.props.questions}</Panel></Col> : null }
					<Col md={colWidth}>
						<Panel
							header={<h3>Toolbox</h3>}
							style={{ height: 600 }}
						>
							<Tabs defaultActiveKey={1} id="toolbox-tabs" >
								<Tab eventKey={1} title="Continuous">
									<Dashboard
										autoStart={false}
										title="Summary Statistics"
										label="Calculate"
										onGenerate={this.generateStatistics}>
										<SelectInput
											legend="Statistic:"
											defaultValue="Mean"
											options={this.props.statistics}
											onChange={ ( value ) => {
												this.setState({
													currentStatistic: value
												});
											}}
										/>
										<SelectInput
											legend="Variable:"
											defaultValue={this.props.continuous[ 0 ]}
											options={this.props.continuous}
										/>
										<SelectInput
											legend="Second Variable:"
											defaultValue={this.props.continuous[ 1 ]}
											options={this.props.continuous}
											style={{
												display: this.state.currentStatistic === 'Correlation' ?
													'inline' : 'none'
											}}
										/>
										<SelectInput
											legend="Group By:"
											defaultValue="None"
											options={this.state.groupVars}
										/>
									</Dashboard>
								</Tab>
								<Tab eventKey={2} title="Categorical">
									<Dashboard
										autoStart={false}
										title="Frequency Table"
										onGenerate={this.generateFrequencyTable}
									>
										<SelectInput
											legend="Variable:"
											defaultValue={this.props.categorical[ 0 ]}
											options={this.props.categorical}
										/>
										<SelectInput
											legend="Group By:"
											defaultValue="None"
											options={this.state.groupVars}
										/>
										<CheckboxInput
											legend="Relative Frequency"
											defaultValue={false}
										/>
									</Dashboard>
								</Tab>
								<Tab eventKey={3} title="Plots">
									<Dashboard
										autoUpdate
										title="Create Plot"
										onGenerate={( type )=>{
											this.setState({
												plotType: type
											});
										}}
									>
										<SelectInput
											defaultValue={this.props.plots[ 0 ]}
											options={this.props.plots}
										/>
									</Dashboard>
									{ this.state.plotType === 'Histogram' ?
										<Dashboard
											autoStart={false}
											onGenerate={this.generateHistogram}
										>
											<SelectInput
												legend="Variable:"
												defaultValue={this.props.continuous[ 0 ]}
												options={this.props.continuous}
											/>
											<SelectInput
												legend="Group By:"
												defaultValue="None"
												options={this.state.groupVars}
											/>
											<CheckboxInput
												inline
												legend="Overlay density"
												defaultValue={false}
											/>
											<CheckboxInput
												inline
												legend="Choose bins"
												defaultValue={false}
											/>
											<SliderInput
												legend="Number of Bins"
												defaultValue={10}
												min={1}
												max={30}
												step={1}
											/>
											<CheckboxInput
												inline
												legend="Set x-axis range"
												defaultValue={false}
											/>
											<NumberInput
												legend="Lower Bound"
												defaultValue={0}
												step={1}
												style={{
													width: 120
												}}
											/>
											<NumberInput
												legend="Upper Bound"
												defaultValue={0}
												step={1}
												style={{
													width: 120
												}}
											/>
										</Dashboard>: null
									}
									{ this.state.plotType === 'Heat Map' ?
										<Dashboard autoStart={false} title="Options" onGenerate={this.generateHeatmap}>
											<SelectInput
												legend="Variable on x-axis:"
												defaultValue={this.props.continuous[ 0 ]}
												options={this.props.continuous}
											/>
											<SelectInput
												legend="Variable on y-axis:"
												defaultValue={this.props.continuous[ 1 ]}
												options={this.props.continuous}
											/>
											<CheckboxInput
												legend="Overlay observations"
												defaultValue={false}
											/>
										</Dashboard>: null
									}
									{ this.state.plotType === 'Scatterplot' ?
										<Dashboard autoStart={false} title="Options" onGenerate={this.generateScatterplot}>
											<SelectInput
												legend="Variable on x-axis:"
												defaultValue={this.props.continuous[ 0 ]}
												options={this.props.continuous}
											/>
											<SelectInput
												legend="Variable on y-axis:"
												defaultValue={this.props.continuous[ 1 ]}
												options={this.props.continuous}
											/>
											<SelectInput
												legend="Color By:"
												defaultValue="None"
												options={this.state.groupVars}
											/>
											<SelectInput
												legend="Point Type By:"
												defaultValue="None"
												options={this.state.groupVars}
											/>
										</Dashboard>: null
									}
									{ this.state.plotType === 'Box Plot' ?
										<Dashboard autoStart={false} title="Options" onGenerate={this.generateBoxplot}>
											<SelectInput
												legend="Variable:"
												defaultValue='Income'
												options={this.props.continuous}
											/>
											<SelectInput
												legend="Group By:"
												defaultValue="None"
												options={this.state.groupVars}
											/>
											<CheckboxInput
												legend="Use common y-axis (when grouped)"
												defaultValue={false}
											/>
										</Dashboard>: null
									}
									{ (
										this.state.plotType !== 'Histogram' &&
										this.state.plotType !== 'Box Plot' &&
										this.state.plotType !== 'Scatterplot' &&
										this.state.plotType !== 'Heat Map'
									) ?
										<Dashboard autoStart={false} onGenerate={this.generatePlot}>
											<SelectInput
												legend="Variable:"
												defaultValue={this.props.categorical[ 0 ]}
												options={this.props.categorical}
											/>
											<SelectInput
												legend="Group By:"
												defaultValue="None"
												options={this.state.groupVars}
											/>
										</Dashboard> : null
									}
								</Tab>
								<Tab
									eventKey={4}
									title="Variables"
									style={{
										fontSize: 14,
										height: 400,
										overflowY: 'scroll'
									}}
								>
									{this.props.codebook}
								</Tab>
							</Tabs>
						</Panel>
					</Col>
					<Col md={colWidth}>
						<Panel header={<h3>Output</h3>} style={{ height: 600 }}>
							{OutputPanel( this.state.output )}
							<Button bsSize="small" onClick={ () => {
								this.setState({ output: []});
							}}>Clear</Button>
						</Panel>
					</Col>
				</Row>
			</Grid>
		);
	}
}


// DEFAULT PROPERTIES //

DataExplorer.defaultProps = {
	codebook: null,
	questions: null,
	statistics: [
		'Interquartile Range',
		'Mean',
		'Median',
		'Min',
		'Max',
		'Range',
		'Standard Deviation',
		'Variance',
		'Correlation'
	],
	plots: [
		'Bar Chart',
		'Box Plot',
		'Histogram',
		'Pie Chart',
		'Scatterplot',
		'Heat Map'
	]
};


// PROPERTY TYPES //

DataExplorer.propTypes = {
	data: PropTypes.object.isRequired,
	statistics: PropTypes.array,
	plots: PropTypes.array
};


// EXPORTS //

export default DataExplorer;

