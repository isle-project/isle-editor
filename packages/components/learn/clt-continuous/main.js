// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import rExponential from '@stdlib/random/base/exponential';
import rUniform from '@stdlib/random/base/uniform';
import rNormal from '@stdlib/random/base/normal';
import dnorm from '@stdlib/stats/base/dists/normal/pdf';
import dexp from '@stdlib/stats/base/dists/exponential/pdf';
import qexp from '@stdlib/stats/base/dists/exponential/quantile';
import dunif from '@stdlib/stats/base/dists/uniform/pdf';
import copy from '@stdlib/utils/copy';
import inmap from '@stdlib/utils/inmap';
import abs from '@stdlib/math/base/special/abs';
import floor from '@stdlib/math/base/special/floor';
import pow from '@stdlib/math/base/special/pow';
import round from '@stdlib/math/base/special/round';
import sqrt from '@stdlib/math/base/special/sqrt';
import ReactGridLayout, { WidthProvider } from 'react-grid-layout';
import linspace from '@stdlib/math/utils/linspace';
import stdev from 'utils/statistic/stdev';
import mean from 'utils/statistic/mean';
import iqr from 'utils/statistic/iqr';
import min from 'utils/statistic/min';
import max from 'utils/statistic/max';
import Plotly from 'components/plotly';
import NumberInput from 'components/input/number';
import CheckboxInput from 'components/input/checkbox';
import { VictoryArea, VictoryAxis, VictoryChart, VictoryLine } from 'victory';
import TeX from 'components/tex';
import ProbabilityRange from './probability_range.js';
import ProbMeanRange from './prob_mean_range.js';
import ProbMean from './prob_mean.js';
import PopProbability from './pop_probability.js';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';


// VARIABLES //

const NEAR_ONE = 0.999999;
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
	if ( data.length === 1 ) {
		return ([
			{ 'y': 1, 'y0': 0, 'x': data[0]+1 },
			{ 'y': 1, 'y0': 0, 'x': data[0]-1 }
		]);
	}
	const h = 2 * iqr( data ) * pow( data.length, -1/3 );
	const bmax = max( data );
	const bmin = min( data );
	const nBins = round( ( bmax - bmin ) / h ) + 1;
	const out = new Array( nBins );
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

function getDistributionKey( dist ) {
	if ( dist === 'uniform' ) {
		return 1;
	} else if ( dist === 'exponential' ) {
		return 2;
	}
	// Case: Normal distribution
	return 3;
}

function initHandleSelect(dist) {
	if ( dist === 'uniform' ) {
		return ( <TeX
			raw={'\\text{Uniform}( a = 0, b = 1)'}
			elems={{ a: { tooltip: 'Minimum' }, b: { tooltip: 'Maximum' }}}
		/> );
	} else if ( dist === 'exponential' ) {
		return ( <TeX
			raw={'\\text{Exponential}(\\lambda = 1)'}
			elems={{ 'λ': { tooltip: 'Rate parameter' }}}
		/> );
	}
	return ( <TeX
		raw={'\\text{Normal}( \\mu = 0, \\sigma = 1)'}
		elems={{ 'μ': { tooltip: 'Mean' }, 'σ': { tooltip: 'Standard deviation' }}}
	/> );
}

// Function to round an element to 2 places
function fixAtTwo( elem ) {
	return elem.toFixed( 2 );
}

// Function to ensure that all data is rounded to 3 decimal places
function makeVisibleData(arr, display = 100) {
	const dispStr = arr.map( fixAtTwo )
		.slice(0, display)
		.join( ', ' );
	if ( arr.length <= display ) {
		return dispStr;
	}
	return dispStr + ', ...';
}


// MAIN //

/**
* A learning component illustrating the Central Limit Theorem (CLT) for a chosen continuous distribution.
*
* @property {Array<string>} distributions - statistical distributions to choose from ('uniform', 'exponential', and/or 'normal')
* @property {boolean} hideFormulas - controls whether to hide formulas in the component text
*/
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
			activeDistribution: getDistributionKey( props.distributions[0] ),
			distFormula: initHandleSelect( props.distributions[0] ),
			overlayNormal: false
		};
	}

	handleSelect = ( key ) => {
		let formula;
		key = parseInt( key, 10 );
		switch ( key ) {
		default:
		case 1:
			formula = <TeX
				elems={{ a: { tooltip: 'Minimum' }, b: { tooltip: 'Maximum' }}}
				raw={`\\text{Uniform}(a = ${this.state.a}, b = ${this.state.b})`}
			/>;
			break;
		case 2:
			formula = <TeX
				elems={{ 'λ': { tooltip: 'Rate parameter' }}}
				raw={`\\text{Exponential}( \\lambda = ${this.state.lambda})`}
			/>;
			break;
		case 3:
			formula = <TeX
				elems={{ 'μ': { tooltip: 'Mean' }, 'σ': { tooltip: 'Standard deviation' }}}
				raw={`\\text{Normal}( \\mu = ${this.state.mu}, \\sigma = ${this.state.sigma })`}
			/>;
			break;
		}
		this.setState({
			activeDistribution: Number( key ),
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
							y: floor( j / 4 ) * 4,
							w: 4,
							h: 4,
							static: true
						};
						newEnlarged[ j ] = false;
					}
					else if ( j === i ) {
						newLayout[ j ] = {
							i: String( j ),
							x: 0,
							y: floor( j / 4 ) * 4,
							w: 12,
							h: 9,
							static: true
						};
						newEnlarged[ i ] = true;
					} else {
						newLayout[ j ] = {
							i: String( j ),
							x: ( ( j-i )*4 ) % 12,
							y: floor( j / 4 ) * 4 + 9,
							w: 4,
							h: 4,
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
						y: floor( j / 4 ) * 4,
						w: 4,
						h: 4,
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

	generateSamples = ( times ) => {
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
			const plot = <div style={{
				cursor: 'zoom-in',
				border: 'solid lightgray',
				borderWidth: 1
			}}>
				<TeX raw={`\\bar x = ${xbar.toFixed( 2 )} \\; (n = ${this.state.n})`} />
				<VictoryChart domainPadding={20} padding={{ top: 40, bottom: 20 }} >
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
				y: floor( i / 4 ) * 4,
				w: 4,
				h: 4,
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

	renderDistSelectionPanel() {
		const exponential = <div>
			<NumberInput legend={<span>Rate parameter <TeX raw="\lambda" /></span>}
				max={100} min={0.01} step={0.01} defaultValue={this.state.lambda}
				onChange={( lambda ) => {
					const formula = <TeX
						raw={`\\text{Exponential}(\\lambda = ${lambda})`}
						elems={{ 'λ': { tooltip: 'Rate parameter' }}}
					/>;
					this.setState({ 'lambda': lambda, 'distFormula': formula });
				}}
			/>
		</div>;
		const uniform = <div>
			<NumberInput
				legend={<span>Minimum <TeX raw="a" /></span>}
				step={0.01}
				min={-500}
				defaultValue={this.state.a}
				max={this.state.b}
				onChange={( a ) => {
					const formula = <TeX
						raw={`\\text{Uniform}(a = ${a}, b = ${this.state.b})`}
						elems={{ a: { tooltip: 'Minimum' }, b: { tooltip: 'Maximum' }}}
					/>;
					this.setState({ 'a': a, 'distFormula': formula });
				}}
			/>
			<NumberInput
				legend={<span>Maximum <TeX raw="b" /></span>}
				step={0.01}
				min={this.state.a}
				max={500}
				defaultValue={this.state.b}
				onChange={( b ) => {
					const formula = <TeX
						raw={`\\text{Uniform}(a = ${this.state.a}, b = ${b})`}
						elems={{ a: { tooltip: 'Minimum' }, b: { tooltip: 'Maximum' }}}
					/>;
					this.setState({ 'b': b, 'distFormula': formula });
				}}
			/>
		</div>;
		const normal = <div>
			<NumberInput
				legend={<span>Mean <TeX raw="\mu" /></span>}
				step={0.01} min={-100} defaultValue={this.state.mu} max={100}
				onChange={( mu ) => {
					const formula = <TeX
						raw={`\\text{Normal}( \\mu = ${mu}, \\sigma = ${this.state.sigma})`}
						elems={{ 'μ': { tooltip: 'Mean' }, 'σ': { tooltip: 'Standard deviation' }}}
					/>;
					this.setState({ 'mu': mu, 'distFormula': formula });
				}}
			/>
			<NumberInput
				legend={<span> Standard deviation <TeX raw="\sigma" /></span>}
				step={0.01} min={0.01} defaultValue={this.state.sigma} max={500}
				onChange={( sigma ) => {
					const formula = <TeX
						raw={`\\text{Normal}(${this.state.mu},${sigma})`}
						elems={{ 'μ': { tooltip: 'Mean' }, 'σ': { tooltip: 'Standard deviation' }}}
					/>;
					this.setState({ 'sigma': sigma, 'distFormula': formula });
				}}
			/>
		</div>;

		let populationParams;
		switch ( this.state.activeDistribution ) {
		default:
		case 1:
			populationParams = <div>
				<p><span className="title">Population mean: </span> <TeX raw={`${!this.props.hideFormulas ? '\\tfrac{1}{2} (a + b) =' : '' } ${( 0.5*( this.state.b + this.state.a ) ).toFixed( 3 )}`} /></p>
				<p><span className="title">Population standard deviation: </span> <TeX raw={`${!this.props.hideFormulas ? '\\tfrac{1}{\\sqrt{12}}| b - a | =' : ''} ${( ( 1.0/sqrt( 12.0 ) )*abs( this.state.b-this.state.a ) ).toFixed( 3 )}`} /> </p>
			</div>;
			break;
		case 2:
			populationParams = <div>
				<p><span className="title">Population mean: </span> <TeX raw={`${!this.props.hideFormulas ? '\\tfrac{1}{\\lambda} =' : ''} ${( 1/this.state.lambda ).toFixed( 3 )}`} /></p>
				<p><span className="title">Population standard deviation: </span> <TeX raw={`${!this.props.hideFormulas ? '\\tfrac{1}{\\lambda} =' : ''} ${( 1/this.state.lambda ).toFixed( 3 )}`} /> </p>
			</div>;
			break;
		case 3:
			populationParams = <div>
				<p><span className="title">Population mean: </span> <TeX raw={`\\mu = ${this.state.mu.toFixed( 3 )}`} /></p>
				<p><span className="title">Population standard deviation: </span> <TeX raw={`\\sigma = ${this.state.sigma.toFixed( 3 )}`} /> </p>
			</div>;
			break;
		}
		let pdf;
		let domain;
		switch ( this.state.activeDistribution ) {
			default:
			case 1: {
				const { a, b } = this.state;
				pdf = dunif.factory( a, b );
				domain = {
					x: [ a - 1.0, b + 1.0 ],
					y: [ 0, dunif( a, a, b ) + 0.1 ]
				};
				break;
			}
			case 2:
				pdf = dexp.factory( this.state.lambda );
				domain = {
					x: [ 0, qexp( NEAR_ONE, this.state.lambda ) + 2 ],
					y: [ 0, pdf( 0.02 ) ]
				};
				break;
			case 3: {
				const { mu, sigma } = this.state;
				pdf = dnorm.factory( mu, sigma );
				domain = {
					x: [ mu-sigma*4, mu+sigma*4 ],
					y: [ 0, dnorm( mu, mu, sigma ) ]
				};
				break;
			}
		}
		return ( <Card body>
			<Container>
				<Row>
					<Col md={4}>
						<Tabs activeKey={this.state.activeDistribution} id="distribution-tabs" onSelect={this.handleSelect} >
							{this.props.distributions.includes('uniform') ? <Tab eventKey={1} title="Uniform">{uniform}</Tab> : null}
							{this.props.distributions.includes('exponential') ? <Tab eventKey={2} title="Exponential">{exponential}</Tab> : null}
							{this.props.distributions.includes('normal') ? <Tab eventKey={3} title="Normal">{normal}</Tab>: null}
						</Tabs>
					</Col>
					<Col md={4}>
						<label>Active Distribution: {this.state.distFormula}</label>
						{populationParams}
						<NumberInput
							legend="Sample Size"
							step={1} min={1} defaultValue={10} max={500}
							onChange={( n ) => {
								this.setState({ 'n': n });
							}}
						/>
					</Col>
					<Col>
						<VictoryChart domain={domain} title="Population Density" >
							<VictoryAxis label="x" />
							<VictoryAxis dependentAxis />
							<VictoryLine samples={600} y={( data ) => {
								return pdf( data.x );
							}} />
						</VictoryChart>
					</Col>
				</Row>
				<Card body>
					<label>Number of Samples: {this.state.xbars.length}</label>
					<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
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
				</Card>
			</Container>
		</Card> );
	}

	renderXbarHistogram() {
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
		return ( <Card body>
			<span className="title">Histogram of <TeX raw="\bar x" />&#39;s</span>
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
				<p>Please draw at least two samples.</p>
			}
			<CheckboxInput legend="Overlay normal density" onChange={( value ) => {
				this.setState({
					overlayNormal: value
				});
			}} />
			{ this.state.avgXBars ?
				<p>
					<span className="title"> Mean of <TeX raw="\bar x" />&#39;s: </span>
					&nbsp;{this.state.avgXBars.toFixed( 3 )} (shown as the red line)
				</p> : null
			}
			{ this.state.stdevXBars ?
				<p>
					<span className="title">Standard deviation of <TeX raw="\bar x" />&#39;s: </span>
					&nbsp;{this.state.stdevXBars.toFixed( 3 )}
				</p> : null
			}
			<div>
				<span className="title"><TeX raw="\bar{x}" /> Values </span>
				{ this.state.xbars.length > 0 ? <pre style={{ 'fontFamily': 'monospace' }}>{makeVisibleData(this.state.xbars)}</pre> : null }
			</div>
		</Card> );
	}

	render() {
		const title = <span>Probability Calculations for {this.state.distFormula}</span>;
		return (
			<div style={{ maxWidth: 1200, margin: '0 auto' }} >
				<Container>
					<Row>
						<Col md={12} >
							{this.renderDistSelectionPanel()}
						</Col>
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
									{this.state.histogram.map( ( x, i ) => {
										return ( <div
											role="button"
											key={i} tabIndex={0}
											onClick={this.enlargePlotFactory( i )}
											onKeyPress={this.enlargePlotFactory( i )}
										>
											{x}
										</div> );
									})}
								</GridLayout>
							</Card>
						</Col>
						<Col md={6}>
							{this.renderXbarHistogram()}
						</Col>
					</Row>
					<Row>
						<h3 className="center">{title}</h3>
					</Row>
					<Row>
						<Col md={6}>
							<h4 className="center">Population Distribution</h4>
							<PopProbability {...this.state} />
							<ProbabilityRange {...this.state} />
						</Col>
						<Col md={6}>
							<h4 className="center">Mean Distribution</h4>
							<ProbMean {...this.state} />
							<ProbMeanRange {...this.state} />
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}


// PROPERTIES //

ContinuousCLT.defaultProps = {
	distributions: ['uniform', 'exponential', 'normal'],
	hideFormulas: false
};

ContinuousCLT.propTypes = {
	distributions: PropTypes.arrayOf( PropTypes.string ),
	hideFormulas: PropTypes.bool
};


// EXPORTS //

export default ContinuousCLT;
