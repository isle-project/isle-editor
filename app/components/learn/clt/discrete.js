// MODULES //

import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import Container from 'react-bootstrap/lib/Container';
import Col from 'react-bootstrap/lib/Col';
import Card from 'react-bootstrap/lib/Card';
import Row from 'react-bootstrap/lib/Row';
import rBinomial from '@stdlib/random/base/binomial';
import copy from '@stdlib/utils/copy';
import dnorm from '@stdlib/stats/base/dists/normal/pdf';
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';
import ReactGridLayout, { WidthProvider } from 'react-grid-layout';
import stdev from 'compute-stdev';
import mean from 'compute-mean';
import min from 'compute-min';
import max from 'compute-max';
import linspace from '@stdlib/math/utils/linspace';
import floor from '@stdlib/math/base/special/floor';
import sqrt from '@stdlib/math/base/special/sqrt';
import NumberInput from 'components/input/number';
import CheckboxInput from 'components/input/checkbox';
import Plotly from 'components/plotly';
import TeX from 'components/tex';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';


// VARIABLES //

const GridLayout = WidthProvider( ReactGridLayout );


// MAIN //

class DiscreteCLT extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			barplots: [],
			n: 10,
			p: 0.5,
			phats: [],
			layout: [],
			enlarged: [],
			overlayNormal: false
		};
	}

	clear() {
		this.setState({
			barplots: [],
			phats: []
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
		const barplots = this.state.barplots.slice();
		const enlarged = this.state.enlarged.slice();
		const phats = this.state.phats.slice();
		for ( let j = 0; j < times; j++ ) {
			const { n, p } = this.state;
			const data = [];
			const successes = rBinomial( n, p );
			const failures = n - successes;
			data.push({ x: 'failures', y: failures });
			data.push({ x: 'successes', y: successes });

			const phat = successes / n;
			const plot = <div style={{ cursor: 'zoom-in' }}>
				<TeX raw={`\\hat p = ${phat.toFixed( 2 )}`} />
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
					<VictoryBar data={data} style={{
						'bar': {
							'data': { 'padding': -10 }
						}
					}} />
				</VictoryChart>
			</div>;
			barplots.push( plot );
			enlarged.push( false );
			phats.push( phat );
		}
		const layout = barplots.map( ( x, i ) => {
			return {
				i: String( i ),
				x: i*4 % 12,
				y: floor( i / 3 ) * 3,
				w: 4,
				h: 3,
				static: true
			};
		});
		const avgPHats = mean( phats );
		const stdevPHats = stdev( phats );
		const densityX = linspace( min( phats ), max( phats ), 512 );
		const densityY = densityX.map( x => dnorm( x, avgPHats, stdevPHats ) );
		this.setState({
			barplots,
			layout,
			phats,
			enlarged,
			avgPHats,
			stdevPHats,
			densityX,
			densityY
		});
	}

	renderDistSelectionPanel() {
		return (
			<Card body>
				<Col md={6}>
					<label>Binomial Distribution</label>
					<NumberInput
						legend="n"
						step={1} min={1} defaultValue={10} max={500}
						onChange={( n ) => {
							this.setState({ 'n': n });
						}}
					/>
					<NumberInput legend="p"
						max={1} min={0} step={0.01} defaultValue={0.5}
						onChange={( p ) => {
							this.setState({ 'p': p });
						}}
					/>
				</Col>
				<Col md={6}>
					<p><label>Population proportion</label> <TeX raw={`${this.state.p.toFixed( 3 )}`} /></p>
					<p><label>Population standard deviation:</label> <TeX raw={`\\sqrt{ p \\cdot (1-p) } = ${sqrt( this.state.p*( 1-this.state.p ) ).toFixed( 3 )}`} /> </p>
					<ButtonGroup>
						<Button size="small" onClick={() => {
							this.generateSamples( 1 );
						}}>
							Draw Sample
						</Button>
						<Button size="small" onClick={() => {
							this.generateSamples( 25 );
						}}>
							Draw 25 Samples
						</Button>
						<Button size="small" onClick={this.clear.bind( this )}>
							Clear
						</Button>
					</ButtonGroup>
				</Col>
			</Card>
		);
	}

	render() {
		const plotlyData = [
			{
				x: this.state.phats,
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
				<Container>
					<Row>
						{this.renderDistSelectionPanel()}
					</Row>
					<Row>
						<Col md={6}>
							<Card style={{ height: '400px', overflowY: 'scroll' }} body>
								<GridLayout
									className="layout"
									layout={this.state.layout}
									cols={12}
									rowHeight={30}
								>
									{this.state.barplots.map( ( x, i ) => {
										return ( <div key={i} onClick={this.enlargePlotFactory( i )} style={{ border: '2px solid darkgray' }}>
											{x}
										</div> );
									})}
								</GridLayout>
							</Card>
						</Col>
						<Col md={6}>
							<Card body>
								<p>
									<label>Number of Samples: {this.state.phats.length} </label>
								</p>
							</Card>
							<Card body>
								<label>Histogram of <TeX raw="\hat p" />&#39;s</label>
								{ this.state.phats.length > 1 ?
									<Plotly data={plotlyData} layout={{
										width: 400,
										height: 250,
										showlegend: false,
										shapes: [
											{
												type: 'line',
												x0: this.state.avgPHats,
												y0: 0,
												x1: this.state.avgPHats,
												y1: dnorm( this.state.avgPHats, this.state.avgPHats, this.state.stdevPHats ),
												line: {
													color: 'red',
													width: 3
												}
											}
										]
									}} removeButtons toggleFullscreen={false} /> :
									null
								}
								<CheckboxInput legend="Overlay normal density" onChange={( value ) => {
									this.setState({
										overlayNormal: value
									});
								}} />
								{ this.state.avgPHats ?
									<p>
										<label> Mean of <TeX raw="\hat p" />&#39;s: </label>
										&nbsp;{this.state.avgPHats.toFixed( 3 )} (shown as the blue line)
									</p> : null
								}
								{ this.state.stdevPHats ?
									<p>
										<label>Standard deviation of <TeX raw="\hat p" />&#39;s: </label>
										&nbsp;{this.state.stdevPHats.toFixed( 3 )}
									</p> : null
								}
							</Card>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}


// EXPORTS //

export default DiscreteCLT;
