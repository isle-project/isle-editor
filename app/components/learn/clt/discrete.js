// MODULES //

import React, { Component } from 'react';
import { Button, ButtonGroup, Grid, Col, Panel, Row } from 'react-bootstrap';
import { binomial as rBinomial } from '@stdlib/math/base/random';
import { copy } from '@stdlib/utils';
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';
import ReactGridLayout, { WidthProvider } from 'react-grid-layout';
import stdev from 'compute-stdev';
import mean from 'compute-mean';
import { NumberInput } from 'components/input';
import RPlot from 'components/r/plot';
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
			enlarged: []
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
		const barplots = this.state.barplots.slice();
		const enlarged = this.state.enlarged.slice();
		const phats = this.state.phats.slice();
		for ( let j = 0; j < times; j++ ) {
			const { n, p } = this.state;
			const data = [];
			const successes = rBinomial( n, p );
			const failures =  n - successes;
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
					}}/>
					<VictoryBar data={data} style={{ 'bar': { 'data': { 'padding': -10 } } }}/>
				</VictoryChart>
			</div>;
			barplots.push( plot );
			enlarged.push( false );
			phats.push( phat );
		}
		const layout = barplots.map( ( x, i ) => {
			return {
				i: String( i ), x: i*4 % 12, y: Math.floor( i / 3 ) * 3, w: 4, h: 3, static: true
			};
		});
		this.setState({
			barplots,
			layout,
			phats,
			enlarged,
			avg_phats: mean( phats ),
			stdev_phats: stdev( phats )
		});
	}

	render() {
		return (
			<div>
				<Grid>
					<Row>
						<Panel>
							<Col md={6}>
								<label>Binomial Distribution</label>
								<NumberInput
									legend="n"
									step={1} min={1} defaultValue={10} max={500}
									onChange={ ( n ) => this.setState({ 'n': n }) }
								/>
								<NumberInput legend="p"
									max={1} min={0} step={0.01} defaultValue={0.5}
									onChange={ ( p ) => this.setState({ 'p': p }) }
								/>
							</Col>
							<Col md={6}>
								<ButtonGroup>
									<Button bsSize="small" onClick={() => {
										this.generateSamples( 1 );
									}}>
										Draw Sample
									</Button>
									<Button bsSize="small" onClick={() => {
										this.generateSamples( 25 );
									}}>
										Draw 25 Samples
									</Button>
									<Button bsSize="small" onClick={this.clear.bind( this )}>
										Clear
									</Button>
								</ButtonGroup>
							</Col>
						</Panel>
					</Row>
					<Row>
						<Col md={6}>
							<Panel style={{ height: '400px', overflowY: 'scroll' }}>
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
							</Panel>
						</Col>
						<Col md={6}>
							<Panel>
								<p>
									<label>Number of Samples: {this.state.phats.length} </label>
								</p>
							</Panel>
							<Panel>
								<label>Histogram of <TeX raw="\hat p" />'s</label>
								{ this.state.phats.length > 1 ?
									<RPlot
										code={`
											phat = c(${this.state.phats.join( ',' )})
											truehist( phat, cex.lab=2.0, cex.main=2.0, cex.axis=2.0, xlim=c(0,1))
											abline( v=${this.state.avg_phats}, col="blue", lwd=3 )
										`}
										libraries={[ 'MASS' ]} /> :
									null
								}
								{ this.state.avg_phats ?
									<p>
										<label> Mean of <TeX raw="\hat p" />'s: </label>
										&nbsp;{this.state.avg_phats.toFixed( 3 )} (shown as the blue line)
									</p> : null
								}
								{ this.state.stdev_phats ?
									<p>
										<label>Standard deviation of <TeX raw="\hat p" />'s: </label>
										&nbsp;{this.state.stdev_phats.toFixed( 3 )}
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

export default DiscreteCLT;
