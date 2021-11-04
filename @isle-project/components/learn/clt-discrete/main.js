// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import rBinomial from '@stdlib/random/base/binomial';
import copy from '@stdlib/utils/copy';
import dnorm from '@stdlib/stats/base/dists/normal/pdf';
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';
import ReactGridLayout, { WidthProvider } from 'react-grid-layout';
import linspace from '@stdlib/array/linspace';
import floor from '@stdlib/math/base/special/floor';
import sqrt from '@stdlib/math/base/special/sqrt';
import NumberInput from '@isle-project/components/input/number';
import CheckboxInput from '@isle-project/components/input/checkbox';
import Plotly from '@isle-project/components/plotly';
import TeX from '@isle-project/components/tex';
import stdev from '@isle-project/utils/statistic/stdev';
import mean from '@isle-project/utils/statistic/mean';
import min from '@isle-project/utils/statistic/min';
import max from '@isle-project/utils/statistic/max';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';


// VARIABLES //

const GridLayout = WidthProvider( ReactGridLayout );


// MAIN //

/**
* A learning component illustrating the Central Limit Theorem (CLT) for a canonical discrete distribution, the binomial distribution.
*
* @property {boolean} showPopStdev - controls whether to display the population standard deviation
*/
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
			overlayNormal: false,
			showDataDistributions: true
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
	};

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

	toggleDataDistributions = () => {
		this.setState({
			showDataDistributions: !this.state.showDataDistributions
		});
	};

	renderDistSelectionPanel() {
		const { t } = this.props;
		return (
			<Card body>
				<Container>
					<Row>
						<Col md={6}>
							<span className="title">{t('binomial-distribution')}</span>
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
							<p><span className="title">{t('population-proportion')}</span> <TeX raw={`${this.state.p.toFixed( 3 )}`} /></p>
							{this.props.showPopStdev ? <p>
								<span className="title">{t('population-standard-deviation')}</span>
								<TeX raw={`\\sqrt{ n \\cdot p \\cdot (1-p) } = ${sqrt( this.state.n * this.state.p*( 1-this.state.p ) ).toFixed( 3 )}`} />
							</p> : null }
							<ButtonGroup size="sm" >
								<Button variant="primary" onClick={() => {
									this.generateSamples( 1 );
								}}>
									{t('draw-sample')}
								</Button>
								<Button variant="primary" size="sm" onClick={() => {
									this.generateSamples( 25 );
								}}>
									{t('draw-25-samples')}
								</Button>
								<Button variant="primary" size="sm" onClick={this.clear.bind( this )}>
									{t('clear')}
								</Button>
							</ButtonGroup>
						</Col>
					</Row>
				</Container>
			</Card>
		);
	}

	render() {
		const { t } = this.props;
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
		/* eslint-disable i18next/no-literal-string */
		return (
			<div style={{ maxWidth: 1200, margin: '0 auto' }} >
				<Container>
					<Row>
						<Col md={12}>
							{this.renderDistSelectionPanel()}
						</Col>
					</Row>
					<Row>
						<Col md={this.state.showDataDistributions ? 6 : 12}>
							<Card body>
								<span className="title">{t('number-of-samples')} {this.state.phats.length} </span>
								<Button
									variant="secondary" size="sm"
									onClick={this.toggleDataDistributions}
									style={{ marginLeft: '80px' }}
								>
									{ this.state.showDataDistributions ? t('hide-data-dists') : t('show-data-dists') }
								</Button>
							</Card>
							<Card body>
								<span className="title">{t('histogram-of')} <TeX raw="\hat p" />&#39;s</span>
								{ this.state.phats.length > 1 ?
									<Plotly data={plotlyData} layout={{
										width: 400,
										height: 300,
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
								<CheckboxInput legend={t('overlay-normal-density')} onChange={( value ) => {
									this.setState({
										overlayNormal: value
									});
								}} />
								{ this.state.avgPHats ?
									<p>
										<span className="title"> {t('mean-of')} <TeX raw="\hat p" />&#39;s: </span>
										&nbsp;{this.state.avgPHats.toFixed( 3 )} ({t('shown-as-red-line')})
									</p> : null
								}
								{ this.state.stdevPHats ?
									<p>
										<span className="title">{t('standard-deviation-of')} <TeX raw="\hat p" />&#39;s: </span>
										&nbsp;{this.state.stdevPHats.toFixed( 3 )}
									</p> : null
								}
							</Card>
						</Col>
						{ this.state.showDataDistributions ? <Col md={6}>
							<Card style={{ height: '400px', overflowY: 'scroll' }} body>
								<GridLayout
									className="layout"
									layout={this.state.layout}
									cols={12}
									rowHeight={30}
								>
									{this.state.barplots.map( ( x, i ) => {
										return ( <div
											role="button" tabIndex={0}
											key={i}
											onKeyPress={this.enlargePlotFactory( i )}
											onClick={this.enlargePlotFactory( i )}
											style={{ border: '2px solid darkgray' }}
										>
											{x}
										</div> );
									})}
								</GridLayout>
							</Card>
						</Col> : null }
					</Row>
				</Container>
			</div>
		);
		/* eslint-enable i18next/no-literal-string */
	}
}


// PROPERTIES //


DiscreteCLT.defaultProps = {
	showPopStdev: true
};

DiscreteCLT.propTypes = {
	showPopStdev: PropTypes.bool
};


// EXPORTS //

export default withTranslation( 'learn/clt' )( DiscreteCLT );
