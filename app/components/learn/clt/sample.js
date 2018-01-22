// MODULES //

import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Panel from 'react-bootstrap/lib/Panel';
import Row from 'react-bootstrap/lib/Row';
import PropTypes from 'prop-types';
import sample from '@stdlib/math/random/sample';
import dnorm from '@stdlib/math/base/dists/normal/pdf';
import copy from '@stdlib/utils/copy';
import inmap from '@stdlib/utils/inmap';
import abs from '@stdlib/math/base/special/abs';
import floor from '@stdlib/math/base/special/floor';
import pow from '@stdlib/math/base/special/pow';
import round from '@stdlib/math/base/special/round';
import roundn from '@stdlib/math/base/special/roundn';
import hasOwnProp from '@stdlib/assert/has-own-property';
import isNumberArray from '@stdlib/assert/is-number-array';
import ReactGridLayout, { WidthProvider } from 'react-grid-layout';
import { VictoryArea, VictoryBar, VictoryChart, VictoryAxis } from 'victory';
import { NumberInput, SelectInput } from 'components/input';
import Plotly from 'components/plotly';
import TeX from 'components/tex';
import mean from 'compute-mean';
import stdev from 'compute-stdev';
import iqr from 'compute-iqr';
import min from 'compute-min';
import max from 'compute-max';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';


// VARIABLES //

const GridLayout = WidthProvider( ReactGridLayout );


// FUNCTIONS //

var isBinaryArray = ( arr, guess = true ) => {
	const cache = {};
	let counter = 0;
	for ( let j = 0; j < arr.length; j++ ) {
		if ( !hasOwnProp( cache, arr[ j ]) ) {
			cache[ arr[ j ] ] = true;
			counter += 1;
		}
		if ( counter > 2 ) {
			return false;
		}
		if ( guess && j > 50 ) {
			break;
		}
	}
	return counter === 2 ? true : false;
};

function bidx( bmin, h, v ) {
	return round( abs( bmin - v ) / h );
}

function getBins( data ) {
	var h = 2 * iqr( data ) * pow( data.length, -1/3 );
	var bmax = max( data );
	var bmin = min( data );
	var nBins = round( ( bmax - bmin ) / h ) + 1;
	var out = new Array( nBins );
	inmap( out, x => {
		return { 'y': 0 };
	});
	for ( let i = 0; i < data.length; i++ ) {
		let idx = bidx( bmin, h, data[ i ]);
		out[ idx ][ 'y' ] += 1;
	}
	for ( let i = 0; i < nBins; i++ ) {
		let bc = bmin + ( h*i );
		out[ i ][ 'x' ] = roundn( bc, -1 );
		out[ i ][ 'width' ] = h;
	}
	return out;
}


// MAIN //

class SampleCLT extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			plots: [],
			n: 10,
			xbars: [],
			layout: [],
			enlarged: [],
			variable: null,
			type: 'none',
			categories: [],
			leftXbarProb: 0,
			rightXbarProb: 1,
			leftProb: 0,
			rightProb: 1,
			cutoffPop: 0,
			cutoff: 0
		};
	}

	clear() {
		this.setState({
			plots: [],
			xbars: []
		});
	}

	enlargePlotFactory = ( i ) => {
		const enlargePlot = () => {
			const newLayout = copy( this.state.layout );
			const newEnlarged = copy( this.state.enlarged );
			if ( !this.state.enlarged[ i ]) {
				for ( let j = 0; j < newLayout.length; j++ ) {
					if ( j < i ) {
						newLayout[ j ] = {
							i: String( j ),
							x: j*4 % 12,
							y: floor( j / 3 ) * 3,
							w: 4,
							h: 3,
							static: true
						};
						newEnlarged[ j ] = false;
					}
					else if ( j === i ) {
						newLayout[ j ] = {
							i: String( j ),
							x: 0,
							y: floor( j / 3 ) * 3,
							w: 12,
							h: 9,
							static: true
						};
						newEnlarged[ i ] = true;
					} else {
						newLayout[ j ] = {
							i: String( j ),
							x: ( ( j-i )*4 ) % 12,
							y: floor( j / 3 ) * 3 + 9,
							w: 4,
							h: 3,
							static: true
						};
						newEnlarged[ j ] = false;
					}
				}
			} else {
				for ( let j = 0; j < newLayout.length; j++ ) {
					newLayout[ j ] = {
						i: String( j ),
						x: j*4 % 12,
						y: floor( j / 3 ) * 3,
						w: 4,
						h: 3,
						static: true
					};
					newEnlarged[ j ] = false;
				}
			}
			this.setState({
				layout: newLayout,
				enlarged: newEnlarged
			});
		};
		return enlargePlot;
	}

	drawSamples( times ) {
		const plots = this.state.plots.slice();
		const enlarged = this.state.enlarged.slice();
		const xbars = this.state.xbars.slice();
		if ( this.state.type === 'numeric' ) {
			for ( let j = 0; j < times; j++ ) {
				let vals = sample( this.state.values, {
					size: this.state.n
				});
				const xbar = mean( vals );
				const plot = <div style={{ cursor: 'zoom-in' }}>
					<TeX raw={`\\bar x = ${xbar.toFixed( 2 )}`} />
					{this.renderHistogram( vals )}
				</div>;
				plots.push( plot );
				enlarged.push( false );
				xbars.push( xbar );
			}
		} else if ( this.state.type === 'binary' ) {
			for ( let j = 0; j < times; j++ ) {
				let vals = sample( this.state.values, {
					size: this.state.n
				});
				let nSuccesses = 0;
				for ( let i = 0; i < vals.length; i++ ) {
					if ( vals[ i ] === this.state.categories[ 1 ]) {
						nSuccesses += 1;
					}
				}
				const xbar = nSuccesses / vals.length;
				const data = [];
				data.push({ x: 'failures', y: vals.length - nSuccesses });
				data.push({ x: 'successes', y: nSuccesses });

				const plot = <div style={{ cursor: 'zoom-in' }}>
					<TeX raw={`\\hat p = ${xbar.toFixed( 2 )}`} />
					<VictoryChart domainPadding={20} padding={60} >
						<VictoryAxis style={{
							axisLabel: {
								fontSize: 22
							},
							tickLabels: {
								fontSize: 15, padding: 5
							}
						}} />
						<VictoryAxis dependentAxis style={{
							axisLabel: {
								fontSize: 22
							},
							tickLabels: {
								fontSize: 15, padding: 5
							}
						}} />
						<VictoryBar data={data} style={{ 'bar': { 'data': { 'padding': -10 } } }} />
					</VictoryChart>
				</div>;
				plots.push( plot );
				enlarged.push( false );
				xbars.push( xbar );
			}
		}
		const layout = plots.map( ( x, i ) => {
			return {
				i: String( i ), x: i*4 % 12, y: floor( i / 3 ) * 3, w: 4, h: 3, static: true
			};
		});
		this.setState({
			plots,
			layout,
			xbars,
			enlarged,
			avg_xbars: mean( xbars ),
			stdev_xbars: stdev( xbars )
		});
	}

	onSelectVariable = ( variable ) => {
		let values = this.props.data[ variable ];
		values = values.filter(
			x => x !== null && x !== ''
		);
		let type = 'none';
		let trueMean;
		let trueStdev;
		let categories;
		if ( isNumberArray( values ) ) {
			type = 'numeric';
			trueMean = mean( values );
			trueStdev = stdev( values );
		}
		if ( isBinaryArray( values ) ) {
			type = 'binary';
			categories = [ ...new Set( values ) ].sort();
			let nSuccesses = 0;
			for ( let i = 0; i < values.length; i++ ) {
				if ( values[ i ] === categories[ 1 ]) {
					nSuccesses += 1;
				}
			}
			trueMean = nSuccesses / values.length;
			trueStdev = trueMean * ( 1.0-trueMean );
		}
		this.setState({
			variable,
			values,
			type,
			xbars: [],
			layout: [],
			enlarged: [],
			plots: [],
			trueMean,
			trueStdev,
			categories
		});
	}

	onXbarChange = ( value ) => {
		let leftXbarProb = 0;
		let len = this.state.xbars.length;
		for ( let i = 0; i < len; i++ ) {
			if ( this.state.xbars[ i ] < value ) {
				leftXbarProb += 1;
			}
		}
		leftXbarProb /= len;
		let rightXbarProb = 1.0 - leftXbarProb;
		this.setState({
			leftXbarProb,
			rightXbarProb,
			cutoff: value
		});
	}

	onXChange = ( value ) => {
		let leftProb = 0;
		const values = this.props.data[ this.state.variable ].filter( x => x !== null && x !== '' );
		for ( let i = 0; i < values.length; i++ ) {
			if ( values[ i ] < value ) {
				leftProb += 1;
			}
		}
		leftProb /= values.length;
		let rightProb = 1.0 - leftProb;
		this.setState({
			leftProb,
			rightProb,
			cutoffPop: value
		});
	}

	renderHistogram( values ) {
		return ( <VictoryChart domainPadding={20} padding={60} >
			<VictoryAxis style={{
				axisLabel: {
					fontSize: 22
				},
				tickLabels: {
					fontSize: 15, padding: 5
				}
			}}
			/>
			<VictoryAxis dependentAxis style={{
				axisLabel: {
					fontSize: 22
				},
				tickLabels: {
					fontSize: 15, padding: 5
				}
			}}
			/>
			<VictoryArea
				data={getBins( values )}
				interpolation="step"
			/>
		</VictoryChart> );
	}

	renderMeanHistogram() {
		let label;
		if ( this.state.type === 'numeric' ) {
			label = <span> Histogram of <TeX raw="\bar x" />'s</span>;
		} else if ( this.state.type === 'binary' ) {
			label = <span> Histogram of <TeX raw="\hat p" />'s</span>;
		}
		return ( <Panel>
			<Panel.Heading>
				<Panel.Title componentClass="h4">{label}</Panel.Title>
			</Panel.Heading>
			<Panel.Body>
			{ this.state.xbars.length > 1 ?
				<Plotly
					data={[
						{
							x: this.state.xbars,
							type: 'histogram',
							histnorm: 'probability density'
						}
					]}
					layout={{
						width: 400,
						height: 250,
						shapes: [{
							type: 'line',
							x0: this.state.avg_xbars,
							y0: 0.0,
							x1: this.state.avg_xbars,
							y1: dnorm( this.state.avg_xbars, this.state.avg_xbars, this.state.stdev_xbars ),
							line: {
								color: 'red',
								width: 3
							}
						}
						]}
					}
					removeButtons
					toggleFullscreen={false}
				/> :
				<p>Please draw at least two samples.</p>
			}
			<p><label>Number of Samples: {this.state.xbars.length} </label></p>
			{ this.state.avg_xbars ?
				<p>
					<label> Mean of { this.state.type === 'numeric' ? <TeX raw="\bar x" /> : <TeX raw="\hat p" />}'s: </label>
					<span>&nbsp;{this.state.avg_xbars.toFixed( 3 )} (shown as the red line)</span>
				</p> : null
			}
			{ this.state.stdev_xbars ?
				<p>
					<label>Standard deviation of { this.state.type === 'numeric' ? <TeX raw="\bar x" /> : <TeX raw="\hat p" />}'s: </label>
					&nbsp;{this.state.stdev_xbars.toFixed( 3 )}
				</p> : null
			}
			</Panel.Body>
		</Panel> );
	}

	renderPopulationProbabilities() {
		return ( <Panel>
			<Panel.Heading>
				<Panel.Title componentClass="h4">
				Population Distribution of {this.state.variable}</Panel.Title>
			</Panel.Heading>
			<Panel.Body>
				<Plotly
					data={[
						{ x: this.state.values, type: 'histogram' }
					]}
					layout={{ width: 400, height: 300 }}
					toggleFullscreen={false}
					removeButtons
				/>
				<p>
					<label>Population { this.state.type === 'numeric' ? 'mean' : 'proportion' }: </label>
					{this.state.trueMean.toFixed( 3 )}
				</p>
				<p>
					<label>Population standard deviation: </label>
					{this.state.trueStdev.toFixed( 3 )}
				</p>
			</Panel.Body>
		</Panel> );
	}

	render() {
		let label;
		if ( this.state.type === 'numeric' ) {
			label = <span> Histograms of <TeX raw="\bar x" />'s</span>;
		} else if ( this.state.type === 'binary' ) {
			label = <span> Histograms of <TeX raw="\hat p" />'s</span>;
		}
		return (
			<Grid>
				<Row>
					<Panel><Panel.Body>
						<Col md={6}>
							<SelectInput legend="Select a variable" options={this.props.variables} onChange={this.onSelectVariable} />
						</Col>
						<Col md={6}>
							{ this.state.type === 'numeric' || this.state.type === 'binary' ?
								<span style={{ float: 'right' }}>
									<NumberInput
										legend="Sample Size"
										step={1} min={1} defaultValue={10} max={500}
										onChange={( n ) => this.setState({ 'n': n })}
									/>
									<ButtonGroup>
										<Button onClick={() => {
											this.drawSamples( 1 );
										}}>
											Draw Sample
										</Button>
										<Button onClick={() => {
											this.drawSamples( 25 );
										}}>
											Draw 25 Samples
										</Button>
										<Button onClick={this.clear.bind( this )}>
											Clear
										</Button>
									</ButtonGroup>
								</span> : null
							}
						</Col>
					</Panel.Body></Panel>
				</Row>
				{ this.state.type === 'numeric' || this.state.type === 'binary' ?
					<Row>
						<Col md={6}>
							{ this.props.populationProbabilities ?
								this.renderPopulationProbabilities() :
								<div>
									<Panel><label>Drawn Samples</label></Panel>
									<Panel style={{ height: '400px', overflowY: 'scroll' }}>
										<GridLayout
											className="layout"
											layout={this.state.layout}
											cols={12}
											rowHeight={30}
										>
											{this.state.plots.map( ( x, i ) => {
												return ( <div key={i} onClick={this.enlargePlotFactory( i )}>
													{x}
												</div> );
											})}
										</GridLayout>
									</Panel>
								</div>
							}
							<Panel>
								<NumberInput step="any" legend={<span>Evaluate probabilities for <TeX raw="X" /></span>} onChange={this.onXChange} />
								<TeX raw={`P( X < ${this.state.cutoffPop} ) = ${this.state.leftProb.toFixed( 3 )}`} displayMode />
								<TeX raw={`P( X \\ge ${this.state.cutoffPop} ) = ${this.state.rightProb.toFixed( 3 )}`} displayMode />
							</Panel>
						</Col>
						<Col md={6}>
							<div>
								{this.renderMeanHistogram()}
								<Panel>
									<NumberInput step="any" legend={<span>Evaluate probabilities for <TeX raw="\bar X" /></span>} onChange={this.onXbarChange} />
									<TeX raw={`\\hat P(\\bar X < ${this.state.cutoff} ) = ${this.state.leftXbarProb.toFixed( 3 )}`} displayMode />
									<TeX raw={`\\hat P( \\bar X \\ge ${this.state.cutoff} ) = ${this.state.rightXbarProb.toFixed( 3 )}`} displayMode />
								</Panel>
							</div>
						</Col>
					</Row> :
					<Panel>
						Please sample from either a numeric variable or a categorical variable with two categories.
					</Panel>
				}
			</Grid>
		);
	}
}


// PROPERTY TYPES //

SampleCLT.propTypes = {
	data: PropTypes.array.isRequired,
	populationProbabilities: PropTypes.bool,
	variables: PropTypes.array.isRequired
};

SampleCLT.defaultProps = {
	populationProbabilities: null
};


// EXPORTS //

export default SampleCLT;
