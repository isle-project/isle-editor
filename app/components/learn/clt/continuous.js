// MODULES //

import React, { Component } from 'react';
import { Button, ButtonGroup, Grid, Col, Panel, Row, Tabs, Tab } from 'react-bootstrap';
import { exponential as rExponential, uniform as rUniform, normal as rNormal } from '@stdlib/math/base/random';
import dnorm from '@stdlib/math/base/dists/normal/pdf';
import { copy, inmap } from '@stdlib/utils';
import { abs, floor, pow, round, sqrt } from '@stdlib/math/base/special';
import ReactGridLayout, { WidthProvider } from 'react-grid-layout';
import stdev from 'compute-stdev';
import mean from 'compute-mean';
import iqr from 'compute-iqr';
import min from 'compute-min';
import max from 'compute-max';
import linspace from '@stdlib/math/utils/linspace';
import Plotly from 'components/plotly';
import NumberInput from 'components/input/number';
import CheckboxInput from 'components/input/checkbox';
import { VictoryArea, VictoryAxis, VictoryChart } from 'victory';
import TeX from 'components/tex';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';


// VARIABLES //

const GridLayout = WidthProvider( ReactGridLayout );


// FUNCTIONS //

function drawExponential( n, lambda ) {
	const vals = new Array( n );
	for ( let i = 0; i < n; i++ ) {
		vals[ i ] = rExponential( lambda );
	}
	return vals;
}

function drawNormal( n, mu, sigma ) {
	const vals = new Array( n );
	for ( let i = 0; i < n; i++ ) {
		vals[ i ] = rNormal( mu, sigma );
	}
	return vals;
}

function drawUniform( n, a, b ) {
	const vals = new Array( n );
	for ( let i = 0; i < n; i++ ) {
		vals[ i ] = rUniform( a, b );
	}
	return vals;
}

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
		return { 'y': 0, 'y0': 0 };
	});
	for ( let i = 0; i < data.length; i++ ) {
		let idx = bidx( bmin, h, data[ i ]);
		out[ idx ][ 'y' ] += 1;
	}
	for ( let i = 0; i < nBins; i++ ) {
		let bc = bmin + ( h*i );
		out[ i ][ 'x' ] = bc;
	}
	return out;
}


// MAIN //

class ContinuousCLT extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			histogram: [],
			n: 10,
			lambda: 1,
			mu: 0,
			sigma: 1,
			a: 0,
			b: 1,
			xbars: [],
			avgXBars: null,
			stdevXBars: null,
			layout: [],
			enlarged: [],
			activeDistribution: 1,
			distFormula: <TeX raw="\text{Uniform}(0,1)" />,
			overlayNormal: false,
			leftProb: 0,
			rightProb: 1,
			cutoff: 0
		};
	}

	handleSelect = ( key ) => {
		let formula;
		switch ( key ) {
		default:
		case 1:
			formula = <TeX raw={`\\text{Uniform}(${this.state.a},${this.state.b})`} />;
			break;
		case 2:
			formula = <TeX raw={`\\text{Exponential}(${this.state.lambda})`} />;
			break;
		case 3:
			formula = <TeX raw={`\\text{Normal}(${this.state.mu},${this.state.sigma})`} />;
			break;
		}
		this.setState({
			activeDistribution: key,
			distFormula: formula
		});
	}

	clear() {
		this.setState({
			histogram: [],
			xbars: [],
			avgXBars: null,
			stdevXBars: null
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

	generateSamples( times ) {
		const histogram = this.state.histogram.slice();
		const enlarged = this.state.enlarged.slice();
		const xbars = this.state.xbars.slice();
		for ( let j = 0; j < times; j++ ) {
			let vals;
			switch ( this.state.activeDistribution ) {
			default:
			case 1:
				vals = drawUniform( this.state.n, this.state.a, this.state.b );
				break;
			case 2:
				vals = drawExponential( this.state.n, this.state.lambda );
				break;
			case 3:
				vals = drawNormal( this.state.n, this.state.mu, this.state.sigma );
				break;
			}
			const xbar = mean( vals );
			const plot = <div style={{ cursor: 'zoom-in' }}>
				<TeX raw={`\\bar x = ${xbar.toFixed( 2 )}`} />
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
					<VictoryArea
						data={getBins( vals )}
						interpolation="step"
					/>
				</VictoryChart>
			</div>;
			histogram.push( plot );
			enlarged.push( false );
			xbars.push( xbar );
		}
		const layout = histogram.map( ( x, i ) => {
			return {
				i: String( i ),
				x: i*4 % 12,
				y: floor( i / 3 ) * 3,
				w: 4,
				h: 3,
				static: true
			};
		});

		const avgXBars = mean( xbars );
		const stdevXBars = stdev( xbars );
		const densityX = linspace( min( xbars ), max( xbars ), 512 );
		const densityY = densityX.map( x => dnorm( x, avgXBars, stdevXBars ) );

		this.setState({
			histogram,
			layout,
			xbars,
			enlarged,
			avgXBars,
			stdevXBars,
			densityX,
			densityY
		});
	}

	render() {
		const exponential = <div>
			<NumberInput legend="Rate parameter"
				max={100} min={0.01} step={1} defaultValue={this.state.lambda}
				onChange={( lambda ) => {
					let formula = <TeX raw={`\\text{Exponential}(${lambda})`} />;
					this.setState({ 'lambda': lambda, 'distFormula': formula });
				}}
			/>
		</div>;

		const uniform = <div>
			<NumberInput
				legend="Minimum"
				step={0.01}
				min={-500}
				defaultValue={this.state.a}
				max={this.state.b}
				onChange={( a ) => {
					let formula = <TeX raw={`\\text{Uniform}(${a},${this.state.b})`} />;
					this.setState({ 'a': a, 'distFormula': formula });
				}}
			/>
			<NumberInput
				legend="Maximum"
				step={0.01}
				min={this.state.a}
				max={500}
				defaultValue={this.state.b}
				onChange={( b ) => {
					let formula = <TeX raw={`\\text{Uniform}(${this.state.a},${b})`} />;
					this.setState({ 'b': b, 'distFormula': formula });
				}}
			/>
		</div>;

		const normal = <div>
			<NumberInput
				legend={<span>Mean <TeX raw="\mu" /></span>}
				step={0.01} min={-100} defaultValue={this.state.mu} max={100}
				onChange={( mu ) => {
					let formula = <TeX raw={`\\text{Normal}(${mu},${this.state.sigma})`} />;
					this.setState({ 'mu': mu, 'distFormula': formula });
				}}
			/>
			<NumberInput
				legend={<span> Standard deviation <TeX raw="\sigma" /></span>}
				step={0.01} min={0.01} defaultValue={this.state.sigma} max={500}
				onChange={( sigma ) => {
					let formula = <TeX raw={`\\text{Normal}(${this.state.mu},${sigma})`} />;
					this.setState({ 'sigma': sigma, 'distFormula': formula });
				}}
			/>
		</div>;

		let populationParams;
		switch ( this.state.activeDistribution ) {
		default:
		case 1:
			populationParams = <div>
				<p><label>Population mean: </label> <TeX raw={`\\tfrac{1}{2} (a + b) = ${( 0.5*( this.state.b + this.state.a ) ).toFixed( 3 )}`} /></p>
				<p><label>Population standard deviation: </label> <TeX raw={`\\tfrac{1}{\\sqrt{12}}| b - a | = ${( ( 1.0/sqrt( 12.0 ) )*abs( this.state.b-this.state.a ) ).toFixed( 3 )}`} /> </p>
			</div>;
			break;
		case 2:
			populationParams = <div>
				<p><label>Population mean: </label> <TeX raw={`\\tfrac{1}{\\lambda} = ${( 1/this.state.lambda ).toFixed( 3 )}`} /></p>
				<p><label>Population standard deviation: </label> <TeX raw={`\\tfrac{1}{\\lambda} = ${( 1/this.state.lambda ).toFixed( 3 )}`} /> </p>
			</div>;
			break;
		case 3:
			populationParams = <div>
				<p><label>Population mean: </label> <TeX raw={`\\mu = ${this.state.mu.toFixed( 3 )}`} /></p>
				<p><label>Population standard deviation: </label><TeX raw={`\\sigma = ${this.state.sigma.toFixed( 3 )}`} /> </p>
			</div>;
			break;
		}
		const plotlyData = [
			{
				x: this.state.xbars,
				type: 'histogram',
				histnorm: 'probability density'
			}
		];
		if ( this.state.overlayNormal ) {
			plotlyData.push({
				x: this.state.densityX,
				y: this.state.densityY,
				type: 'lines',
				name: 'density'
			});
		}

		return (
			<div>
				<Grid>
					<Row>
						<Panel>
							<Col md={6}>
								<Tabs activeKey={this.state.activeDistribution} id="distribution-tabs" onSelect={this.handleSelect} >
									<Tab eventKey={1} title="Uniform">{uniform}</Tab>
									<Tab eventKey={2} title="Exponential">{exponential}</Tab>
									<Tab eventKey={3} title="Normal">{normal}</Tab>
								</Tabs>
							</Col>
							<Col md={6}>
								<label>Distribution: {this.state.distFormula}</label>
								{populationParams}
								<NumberInput
									legend="Sample Size"
									step={1} min={1} defaultValue={10} max={500}
									onChange={( n ) => {
										this.setState({ 'n': n });
									}}
								/>
								<ButtonGroup>
									<Button onClick={() => {
										this.generateSamples( 1 );
									}}>
										Draw Sample
									</Button>
									<Button onClick={() => {
										this.generateSamples( 25 );
									}}>
										Draw 25 Samples
									</Button>
									<Button onClick={this.clear.bind( this )}>
										Clear
									</Button>
								</ButtonGroup>
							</Col>
						</Panel>
					</Row>
					<Row>
						<Col md={6}>
							<Panel><label>Number of Samples: {this.state.xbars.length} </label></Panel>
							<Panel style={{ height: '400px', overflowY: 'scroll' }}>
								<GridLayout
									className="layout"
									layout={this.state.layout}
									cols={12}
									rowHeight={30}
								>
									{this.state.histogram.map( ( x, i ) => {
										return ( <div key={i} onClick={this.enlargePlotFactory( i )}>
											{x}
										</div> );
									})}
								</GridLayout>
							</Panel>
						</Col>
						<Col md={6}>
							<Panel>
								<p><label>Histogram of <TeX raw="\bar x" />'s</label></p>
								{ this.state.xbars.length > 1 ?
									<Plotly data={plotlyData} layout={{
										width: 400,
										height: 250,
										showlegend: false,
										shapes: [
											{
												type: 'line',
												x0: this.state.avgXBars,
												y0: 0,
												x1: this.state.avgXBars,
												y1: dnorm( this.state.avgXBars, this.state.avgXBars, this.state.stdevXBars ),
												line: {
													color: 'red',
													width: 3
												}
											}
										]
									}} removeButtons toggleFullscreen={false} /> :
									<span>Please draw at least two samples.</span>
								}
								<CheckboxInput legend="Overlay normal density" onChange={( value ) => {
									this.setState({
										overlayNormal: value
									});
								}} />
								{ this.state.avgXBars ?
									<p>
										<label> Mean of <TeX raw="\bar x" />'s: </label>
										&nbsp;{this.state.avgXBars.toFixed( 3 )} (shown as the red line)
									</p> : null
								}
								{ this.state.stdevXBars ?
									<p>
										<label>Standard deviation of <TeX raw="\bar x" />'s: </label>
										&nbsp;{this.state.stdevXBars.toFixed( 3 )}
									</p> : null
								}
							</Panel>
							<Panel>
								<NumberInput
									step="any"
									legend={<TeX raw="x" />}
									onChange={( value ) => {
										let leftProb = 0;
										let len = this.state.xbars.length;
										for ( let i = 0; i < len; i++ ) {
											if ( this.state.xbars[ i ] < value ) {
												leftProb += 1;
											}
										}
										leftProb /= len;
										let rightProb = 1.0 - leftProb;
										this.setState({
											leftProb,
											rightProb,
											cutoff: value
										});
									}}
								/>
								<TeX raw={`\\hat P(\\bar X < ${this.state.cutoff} ) = ${this.state.leftProb.toFixed( 3 )}`} displayMode />
								<TeX raw={`\\hat P( \\bar X \\ge ${this.state.cutoff} ) = ${this.state.rightProb.toFixed( 3 )}`} displayMode
								/>
							</Panel>
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}
}


// EXPORTS //

export default ContinuousCLT;
