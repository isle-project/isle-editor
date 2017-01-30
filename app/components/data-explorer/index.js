// MODULES //

import React, { PropTypes } from 'react';
import { Button, Grid, Row, Col, Panel, Tabs, Tab } from 'react-bootstrap';
import CheckboxInput from 'components/input/checkbox';
import SelectInput from 'components/input/select';
import SliderInput from 'components/input/slider';
import Dashboard from 'components/dashboard';
import RPlot from 'components/r/plot';
import min from 'compute-min';
import max from 'compute-max';
import mean from 'compute-mean';
import range from 'compute-range';
import median from 'compute-median';
import isArray from '@stdlib/utils/is-array';
import isNumber from '@stdlib/utils/is-number';
import isObject from '@stdlib/utils/is-object';
import sample from '@stdlib/math/generics/random/sample';
import entries from '@stdlib/utils/object-entries';
import countBy from 'lodash.countby';


// FUNCTIONS //

function by( arr, factor, fun ) {
	let ret = {};
	for ( let i = 0; i < arr.length; i++ ) {
		if ( !Array.isArray( ret[ factor[ i ] ]) ) {
			ret[ factor[ i ] ] = [];
		}
		ret[ factor[ i ] ].push( arr[ i ]);
	}
	for ( let key in ret ) {
		ret[ key ] = fun( ret[ key ]);
	}
	return ret;
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

class DataExplorer extends React.Component {
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

		this.generateHistogram = ( variable, group, overlayDensity, chooseBins, nBins )=>{
			let newOutput;
			let mysample = sample.factory({ seed: 201 });
			if ( group === 'None' ) {
				newOutput = this.state.output.slice();
				let sub = mysample( this.props.data[ variable ], {
					size: 1000
				});
				let code;
				if ( chooseBins ) {
					code = `${variable} = c(${sub})
						truehist( ${variable}, nbins = ${nBins},
							cex.lab=2.0, cex.main=2.0, cex.axis=2.0 )\n`;
				} else {
					code = `${variable} = c(${sub})
						truehist( ${variable},
							cex.lab=2.0, cex.main=2.0, cex.axis=2.0 )\n`;
				}
				if ( overlayDensity ) {
					code += `lines( density( ${variable} ) )`;
				}
				newOutput.push({
					variable: variable,
					type: 'Chart',
					value: <RPlot
						code={code}
						libraries={[ 'MASS' ]}
					/>
				});
			} else {
				let freqs = by( this.props.data[ variable ], this.props.data[ group ], arr => {
					return mysample( arr, { size: 1000 });
				});
				newOutput = this.state.output.slice();

				let nPlots = Object.keys( freqs ).length;
				let code = `par(mfrow=c(ceiling(${nPlots}/2),2))\n`;
				for ( let key in freqs ) {
					let val = freqs[ key ];
					if ( chooseBins ) {
						code += `${variable} = c(${val})
							truehist( ${variable}, nbins = ${nBins},
								cex.lab=2.0, cex.main=2.0, cex.axis=1.5 )\n`;
					} else {
						code += `${variable} = c(${val})
							truehist( ${variable},
								cex.lab=2.0, cex.main=2.0, cex.axis=1.5 )\n`;
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

		this.generateBoxplot = ( variable, group, commonAxis )=>{
			let newOutput;
			let yranges;
			let mysample = sample.factory({ seed: 201 });
			if ( group === 'None' ) {
				newOutput = this.state.output.slice();
				let sub = mysample( this.props.data[ variable ], {
					size: 1000
				});
				newOutput.push({
					variable: variable,
					type: 'Chart',
					value: <div>
						<label>{variable}: </label>
						<RPlot
							code={`boxplot( c( ${sub} ),
								cex.lab=2.0, cex.axis=1.5 )`}
						/>
					</div>
				});
			} else {
				yranges = range( this.props.data[ variable ]);
				let freqs = by( this.props.data[ variable ], this.props.data[ group ], arr => {
					return mysample( arr, { size: 1000 });
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

		this.generateFrequencyTable = ( variable, relativeFreqs ) => {
			let freqs = entries( countBy( this.props.data[ variable ]) ).map( e => {
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
			let newOutput = this.state.output.slice();
			newOutput.push({
				variable: variable,
				type: 'Frequency Table',
				value: freqs,
				relative: relativeFreqs
			});
			this.setState({
				output: newOutput
			});
		};

		this.generateStatistics = ( variable, statistic, group ) => {
			let fun;
			let res;
			switch ( statistic ) {
			case 'Mean':
				fun = mean;
				break;
			case 'Median':
				fun = median;
				break;
			case 'Min':
				fun = min;
				break;
			case 'Max':
				fun = max;
				break;
			case 'Range':
				fun = range;
				break;
			default:
				fun = function() {};
				break;
			}
			if ( group === 'None' ) {
				res = fun( this.props.data[ variable ]);
			} else {
				res = by( this.props.data[ variable ], this.props.data[ group ], fun );
			}
			let newOutput = this.state.output.slice();
			newOutput.push({
				variable: variable,
				type: statistic,
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
											legend="Variable:"
											defaultValue='Income'
											options={this.props.continuous}
										/>
										<SelectInput
											legend="Statistic:"
											defaultValue="Mean"
											options={[
												'Mean',
												'Median',
												'Min',
												'Max',
												'Range'
											]}
										/>
										<SelectInput
											legend="Group By"
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
											defaultValue='Health'
											options={this.props.categorical}
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
											defaultValue="Pie Chart"
											options={[
												'Histogram',
												'Bar Chart',
												'Pie Chart',
												'Box Plot'
											]}
										/>
									</Dashboard>
									{ this.state.plotType === 'Histogram' ?
										<Dashboard
											autoStart={false}
											onGenerate={this.generateHistogram}
										>
											<SelectInput
												legend="Variable:"
												defaultValue='Income'
												options={this.props.continuous}
											/>
											<SelectInput
												legend="Group By"
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
												legend="Group By"
												defaultValue="None"
												options={this.state.groupVars}
											/>
											<CheckboxInput
												legend="Use common y-axis (when grouped)"
												defaultValue={false}
											/>
										</Dashboard>: null
									}
									{ this.state.plotType !== 'Histogram' && this.state.plotType !== 'Box Plot' ?
										<Dashboard autoStart={false} onGenerate={this.generatePlot}>
											<SelectInput
												legend="Variable:"
												defaultValue='Gender'
												options={this.props.categorical}
											/>
											<SelectInput
												legend="Group By"
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
							<Button bsSize="small" onClick={()=>{
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
	questions: null
};


// PROPERTY TYPES //

DataExplorer.propTypes = {
	data: PropTypes.object.isRequired
};


// EXPORTS //

export default DataExplorer;

