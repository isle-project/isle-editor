// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import logger from 'debug';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import sample from '@stdlib/random/sample';
import dnorm from '@stdlib/stats/base/dists/normal/pdf';
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
import { NumberInput, SelectInput } from '@isle-project/components/input';
import Panel from '@isle-project/components/panel';
import Plotly from '@isle-project/components/plotly';
import TeX from '@isle-project/components/tex';
import mean from '@isle-project/utils/statistic/mean';
import stdev from '@isle-project/utils/statistic/stdev';
import quantile from '@isle-project/utils/statistic/quantile';
import iqr from '@isle-project/utils/statistic/iqr';
import min from '@isle-project/utils/statistic/min';
import max from '@isle-project/utils/statistic/max';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';


// VARIABLES //

const GridLayout = WidthProvider( ReactGridLayout );
const debug = logger( 'isle:learn:clt-sample' );


// FUNCTIONS //

const isBinaryArray = ( arr, guess = true ) => {
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
	const h = 2 * iqr( data ) * pow( data.length, -1/3 );
	const bmax = max( data );
	const bmin = min( data );
	const nBins = round( ( bmax - bmin ) / h ) + 1;
	const out = new Array( nBins );
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

function renderHistogram( values ) {
	return ( <VictoryChart domainPadding={20} padding={{ top: 40, bottom: 20 }} >
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


// MAIN //

/**
* A learning component illustrating the Central Limit Theorem (CLT) when sampling from a supplied data set.
*
* @property {Object} data - data object with keys correspond to variable names and values holding the values of respective variables
* @property {Array<string>} variables - names of variables that can be sampled from
* @property {boolean} hidePopulationStdev - hide display of population standard deviation
* @property {(Array<number>|number)} samples - array of numbers or a single numbers denoting the sample sizes that can be drawn
* @property {boolean} populationProbabilities - whether to display equations for calculation of population probabilities
* @property {boolean} quantiles - whether to show tool for calculation of any quantiles
*/
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
			cutoff: 0,
			percentile: null,
			samplePercentile: null,
			p: 0.5,
			phat: 0.5
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
		debug( 'Drawing '+times+' samples...' );
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
					{renderHistogram( vals )}
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
						<VictoryBar data={data} style={{
							'bar': {
								'data': { 'padding': -10 }
							}
						}} />
					</VictoryChart>
				</div>;
				plots.push( plot );
				enlarged.push( false );
				xbars.push( xbar );
			}
		}
		const layout = plots.map( ( x, i ) => {
			return {
				i: String( i ), x: i*4 % 12, y: floor( i / 4 ) * 4, w: 4, h: 4, static: true
			};
		});
		this.setState({
			plots,
			layout,
			xbars,
			enlarged,
			avg_xbars: mean( xbars ),
			stdev_xbars: stdev( xbars ),
			samplePercentile: quantile( xbars, this.state.phat )
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
			categories,
			percentile: quantile( values, this.state.p ),
			samplePercentile: null
		});
	}

	onSamplePercentileChange = ( phat ) => {
		this.setState({
			samplePercentile: quantile( this.state.xbars, phat ),
			phat
		});
	}

	onPercentileChange = ( p ) => {
		this.setState({
			percentile: quantile( this.state.values, p ),
			p
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
		const values = this.state.values;
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

	renderMeanHistogram() {
		const { t } = this.props;
		let label;
		if ( this.state.type === 'numeric' ) {
			label = <span> {t('histogram-of')} <TeX raw="\bar x" />&#39;s</span>; // eslint-disable-line i18next/no-literal-string
		} else if ( this.state.type === 'binary' ) {
			label = <span> {t('histogram-of')} <TeX raw="\hat p" />&#39;s</span>; // eslint-disable-line i18next/no-literal-string
		}
		/* eslint-disable i18next/no-literal-string */
		return ( <Panel header={label} >
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
				/> :
				<p>{t('draw-two-samples')}</p>
			}
			<p><label>{t('number-of-samples')} {this.state.xbars.length} </label></p>
			{ this.state.avg_xbars ?
				<p>
					<label> {t('mean-of')} { this.state.type === 'numeric' ? <TeX raw="\bar x" /> : <TeX raw="\hat p" />}&#39;s: </label>
					<span>&nbsp;{this.state.avg_xbars.toFixed( 3 )} ({t('shown-as-red-line')})</span>
				</p> : null
			}
			{ this.state.stdev_xbars ?
				<p>
					<label>{t('standard-deviation-of')} { this.state.type === 'numeric' ? <TeX raw="\bar x" /> : <TeX raw="\hat p" />}&#39;s: </label>
					&nbsp;{this.state.stdev_xbars.toFixed( 3 )}
				</p> : null
			}
		</Panel> );
	}

	renderPopulationProbabilities() {
		const { t } = this.props;
		return ( <Card>
			<Card.Header as="h4">
				{t('population-distribution-of')} {this.state.variable}
			</Card.Header>
			<Card.Body>
				<Plotly
					data={[
						{ x: this.state.values, type: 'histogram' }
					]}
					layout={{ width: 400, height: 300 }}
					removeButtons
				/>
				<p>
					<span className="title">{ this.state.type === 'numeric' ? t('population-mean') : t('population-proportion') }: </span>
					{' '}
					{this.state.trueMean.toFixed( 3 )}
				</p>
				{!this.props.hidePopulationStdev ? <p>
					<span className="title">{t('population-standard-deviation')} </span>
					{' '}
					{this.state.trueStdev.toFixed( 3 )}
				</p> : null}
			</Card.Body>
		</Card> );
		/* eslint-enable i18next/no-literal-string */
	}

	render() {
		const { t } = this.props;
		return (
			<Container style={{ maxWidth: 1200 }}>
				<Row>
					<Card body style={{ margin: '2%', width: '96%' }}>
						<Row>
							<Col md={6}>
								<SelectInput legend={t('select-variable')} options={this.props.variables} onChange={this.onSelectVariable} />
							</Col>
							<Col md={6}>
								{ this.state.type === 'numeric' || this.state.type === 'binary' ?
									<span style={{ float: 'right' }}>
										<NumberInput
											legend={t('sample-size')}
											step={1} min={1} defaultValue={10} max={2500}
											onChange={( n ) => this.setState({ 'n': n })}
										/>
										<ButtonGroup>
											<Button onClick={() => {
												this.drawSamples( 1 );
											}}>
												{t('draw-sample')}
											</Button>
											{isNumberArray( this.props.samples ) ?
												this.props.samples.map( ( n, idx ) => {
													return ( <Button key={idx} onClick={() => {
														this.drawSamples( n );
													}}>
														{t('draw-n-samples', { n })}
													</Button> );
												}) : <Button onClick={() => {
														this.drawSamples( this.props.samples );
													}}>
														{t('draw-n-samples', { n: this.props.samples })}
													</Button>
											}
											<Button onClick={this.clear.bind( this )}>
												{t('clear')}
											</Button>
										</ButtonGroup>
									</span> : null
								}
							</Col>
						</Row>
					</Card>
				</Row>
				{ this.state.type === 'numeric' || this.state.type === 'binary' ?
					<Row>
						<Col md={6}>
							{ this.props.populationProbabilities ?
								this.renderPopulationProbabilities() :
								<div>
									<Panel header={t('drawn-samples')} style={{ height: '400px' }} >
										<GridLayout
											className="layout"
											layout={this.state.layout}
											cols={12}
											rowHeight={30}
										>
											{this.state.plots.map( ( x, i ) => {
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
									</Panel>
								</div>
							}
							{this.state.type === 'numeric' ? <Card body >
								<NumberInput step="any" legend={<span>{t('evaluate-probabilities-for')} <TeX raw="X" /></span>} onChange={this.onXChange} />
								<TeX raw={`P( X < ${this.state.cutoffPop} ) = ${this.state.leftProb.toFixed( 3 )}`} displayMode />
								<TeX raw={`P( X \\ge ${this.state.cutoffPop} ) = ${this.state.rightProb.toFixed( 3 )}`} displayMode />
							</Card> : null}
							{this.props.quantiles && this.state.type === 'numeric' && this.state.xbars.length > 1 ? <Card body style={{ marginTop: 6 }} >
								<NumberInput step={0.01} min={0} max={1} defaultValue={this.state.p} legend={<span>{t('calculate-percentiles-for')} <TeX raw="X" /></span>} onChange={this.onPercentileChange} />
								<TeX raw={roundn( this.state.percentile, -3 )} />
							</Card> : null }
						</Col>
						<Col md={6}>
							<div>
								{this.renderMeanHistogram()}
								{this.state.type === 'numeric' && this.state.xbars.length > 1 ? <Card body>
									<NumberInput step="any" legend={<span>{t('estimate-probabilities-for')} <TeX raw="\bar X" /></span>} onChange={this.onXbarChange} />
									<TeX raw={`\\hat P(\\bar X < ${this.state.cutoff} ) = ${this.state.leftXbarProb.toFixed( 3 )}`} displayMode />
									<TeX raw={`\\hat P( \\bar X \\ge ${this.state.cutoff} ) = ${this.state.rightXbarProb.toFixed( 3 )}`} displayMode />
								</Card> : null }
								{this.props.quantiles && this.state.type === 'numeric' && this.state.xbars.length > 1 ? <Card body style={{ marginTop: 6 }} >
									<NumberInput step={0.01} min={0} max={1} defaultValue={this.state.phat} legend={<span>{t('calculate-percentiles-for')} <TeX raw="\bar X" /></span>} onChange={this.onSamplePercentileChange} />
									{ this.state.samplePercentile ? <TeX raw={roundn( this.state.samplePercentile, -3 )} /> : null }
								</Card> : null }
							</div>
						</Col>
					</Row> :
					<Alert variant="info" style={{ fontSize: 24 }}>
						{t('require-numeric-or-binary')}
					</Alert>
				}
			</Container>
		);
	}
}


// PROPERTIES //

SampleCLT.propTypes = {
	data: PropTypes.object.isRequired,
	hidePopulationStdev: PropTypes.bool,
	samples: PropTypes.oneOfType([ PropTypes.arrayOf( PropTypes.number ), PropTypes.number ]),
	populationProbabilities: PropTypes.bool,
	quantiles: PropTypes.bool,
	variables: PropTypes.array.isRequired
};

SampleCLT.defaultProps = {
	hidePopulationStdev: false,
	samples: 25,
	populationProbabilities: false,
	quantiles: false
};


// EXPORTS //

export default withTranslation( 'learn/clt' )( SampleCLT );
