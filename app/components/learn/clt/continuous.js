// MODULES //

import React, { Component } from 'react';
import { Button, ButtonGroup, Grid, Col, Panel, Row, Tabs, Tab } from 'react-bootstrap';
import { exponential as rExponential, uniform as rUniform, normal as rNormal } from '@stdlib/math/base/random';
import { copy, inmap } from '@stdlib/utils';
import { abs, round, roundn, sqrt } from '@stdlib/math/base/special';
import ReactGridLayout, { WidthProvider } from 'react-grid-layout';
import stdev from 'compute-stdev';
import mean from 'compute-mean';
import iqr from 'compute-iqr';
import min from 'compute-min';
import max from 'compute-max';
import NumberInput from 'components/input/number';
import CheckboxInput from 'components/input/checkbox';
import RPlot from 'components/r/plot';
import { VictoryAxis, VictoryBar, VictoryChart } from 'victory';
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

function bidx( bmin, h, v ) { return round( abs( bmin - v ) / h ); };

function getBins( data ) {
	var h = 2 * iqr( data ) * Math.pow( data.length, -1/3 );
	var bmax = max( data );
	var bmin = min( data );
	var nBins = round( ( bmax - bmin ) / h ) + 1;
	var out = new Array( nBins );
	inmap( out, x => { return { 'y': 0 }; });
	for ( let i = 0; i < data.length; i++ ) {
		let idx = bidx( bmin, h, data[ i ]);
		out[ idx ][ 'y' ] += 1;
	}
	for ( let i = 0; i < nBins; i++ ) {
		let bc = bmin +  ( h*i );
		out[ i ][ 'x' ] = roundn( bc, -1 );
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
			avg_xbars: null,
			stdev_xbars: null,
			layout: [],
			enlarged: [],
			activeDistribution: 1,
			distFormula: <TeX raw="\text{Uniform}(0,1)" />,
			overlayNormal: false
		};

		this.handleSelect = ( key ) => {
			let formula;
			switch ( key ) {
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
		};
	}

	clear() {
		this.setState({
			histogram: [],
			xbars: [],
			avg_xbars: null,
			stdev_xbars: null
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
							y: Math.floor( j / 3 ) * 3,
							w: 4, h: 3, static: true
						};
						newEnlarged[ j ] = false;
					}
					else if ( j === i ) {
						newLayout[ j ] = {
							i: String( j ),
							x: 0,
							y: Math.floor( j / 3 ) * 3,
							w: 12, h: 9, static: true
						};
						newEnlarged[ i ] = true;
					} else {
						newLayout[ j ] = {
							i: String( j ),
							x: ( ( j-i )*4 ) % 12,
							y: Math.floor( j / 3 ) * 3 + 9,
							w: 4, h: 3, static: true
						};
						newEnlarged[ j ] = false;
					}
				}
			} else {
				for ( let j = 0; j < newLayout.length; j++ ) {
					newLayout[ j ] = {
						i: String( j ),
						x: j*4 % 12,
						y: Math.floor( j / 3 ) * 3,
						w: 4, h: 3, static: true
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
					}}/>
					<VictoryBar data={getBins( vals )} style={{ 'bar': { 'data': { 'padding': -10, width: 35 } } }}/>
				</VictoryChart>
			</div>;
			histogram.push( plot );
			enlarged.push( false );
			xbars.push( xbar );
		}
		const layout = histogram.map( ( x, i ) => {
			return {
				i: String( i ), x: i*4 % 12, y: Math.floor( i / 3 ) * 3, w: 4, h: 3, static: true
			};
		});
		this.setState({
			histogram,
			layout,
			xbars,
			enlarged,
			avg_xbars: mean( xbars ),
			stdev_xbars: stdev( xbars )
		});
	}

	render() {

		const exponential = <div>
			<NumberInput legend="Rate parameter"
				max={100} min={0.01} step={1} defaultValue={this.state.lambda}
				onChange={ ( lambda ) => {
					let formula = <TeX raw={`\\text{Exponential}(${lambda})`} />;
					this.setState({ 'lambda': lambda, 'distFormula': formula });
				}}
			/>
		</div>;

		const uniform = <div>
			<NumberInput
				legend="Minimum"
				step={0.01} min={-500} defaultValue={this.state.a} max={this.state.b}
				onChange={ ( a ) => {
					let formula = <TeX raw={`\\text{Uniform}(${a},${this.state.b})`} />;
					this.setState({ 'a': a, 'distFormula': formula });
				}}
			/>
			<NumberInput
				legend="Maximum"
				step={0.01} min={this.state.a} defaultValue={1} max={500} defaultValue={this.state.b}
				onChange={ ( b ) => {
					let formula = <TeX raw={`\\text{Uniform}(${this.state.a},${b})`} />;
					this.setState({ 'b': b, 'distFormula': formula });
				}}
			/>
		</div>;

		const normal = <div>
			<NumberInput
				legend={<span>Mean <TeX raw="\mu" /></span>}
				step={0.01} min={-100} defaultValue={this.state.mu} max={100}
				onChange={ ( mu ) => {
					let formula = <TeX raw={`\\text{Normal}(${mu},${this.state.sigma})`} />;
					this.setState({ 'mu': mu, 'distFormula': formula });
				}}
			/>
			<NumberInput
				legend={<span> Standard deviation <TeX raw="\sigma" /></span>}
				step={0.01} min={0.01} defaultValue={this.state.sigma} max={500}
				onChange={ ( sigma ) => {
					let formula = <TeX raw={`\\text{Normal}(${this.state.mu},${sigma})`} />;
					this.setState({ 'sigma': sigma, 'distFormula': formula });
				}}
			/>
		</div>;

		let populationParams;
		switch ( this.state.activeDistribution ) {
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

		let rcode = `
			xbar = c(${this.state.xbars.join( ',' )})
			truehist( xbar, cex.lab=2.0, cex.main=2.0, cex.axis=2.0 )
			abline( v=${this.state.avg_xbars}, col="blue", lwd=3 )
		`;
		if ( this.state.overlayNormal ) {
			rcode += `
				r <- range(xbar)
				x <- seq( from = r[1], to = r[2], by = 0.01 )
				d <- dnorm( x, mean = mean(xbar), sd = sd(xbar) )
				lines( x, d, col="red")`;
		}
		console.log( rcode )

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
									onChange={ ( n ) => this.setState({ 'n': n }) }
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
							<Panel><label>Drawn Samples</label></Panel>
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
							<Panel><label>Number of Samples: {this.state.xbars.length} </label></Panel>
							<Panel>
								<label>Histogram of <TeX raw="\bar x" />'s</label>
								{ this.state.xbars.length > 1 ?
									<RPlot
										code={rcode}
										libraries={[ 'MASS' ]} /> :
									null
								}
								<CheckboxInput legend="Overlay normal density" onChange={ ( value ) => {
									this.setState({
										overlayNormal: value
									});
								}} />
								{ this.state.avg_xbars ?
									<p>
										<label> Mean of <TeX raw="\bar x" />'s: </label>
										&nbsp;{this.state.avg_xbars.toFixed( 3 )} (shown as the blue line)
									</p> : null
								}
								{ this.state.stdev_xbars ?
									<p>
										<label>Standard deviation of <TeX raw="\bar x" />'s: </label>
										&nbsp;{this.state.stdev_xbars.toFixed( 3 )}
									</p> : null
								}
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
