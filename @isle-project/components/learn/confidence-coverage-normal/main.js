// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation, Trans } from 'react-i18next';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import { VictoryAxis, VictoryChart, VictoryErrorBar, VictoryLine, VictoryTheme, VictoryScatter, VictoryTooltip } from 'victory';
import abs from '@stdlib/math/base/special/abs';
import qt from '@stdlib/stats/base/dists/t/quantile';
import qnorm from '@stdlib/stats/base/dists/normal/quantile';
import normal from '@stdlib/random/base/normal';
import roundn from '@stdlib/math/base/special/roundn';
import sqrt from '@stdlib/math/base/special/sqrt';
import Dashboard from '@isle-project/components/dashboard';
import Switch from '@isle-project/components/switch';
import TeX from '@isle-project/components/tex';
import FeedbackButtons from '@isle-project/components/feedback';
import SliderInput from '@isle-project/components/input/slider';
import NumberInput from '@isle-project/components/input/number';
import mean from '@isle-project/utils/statistic/mean.js';
import stdev from '@isle-project/utils/statistic/stdev.js';


// VARIABLES //

const ELEM_TOOLTIPS = {
	'mu': { tooltip: 'Mean' },
	'sigma': { tooltip: 'Standard Deviation' },
	'n': { tooltip: 'Sample Size' },
	'alpha': { tooltip: 'Significance level' },
	'Z': { tooltip: 'Standard normal quantile' },
	'S': { tooltip: 'Sample standard deviation' }
};


// MAIN //

/**
* A learning component illustrating coverage of confidence intervals for the mean of a normal distribution.
*
* @property {(string|node)} intro - overrides default (interactive) intro text
* @property {boolean} quartileNotation - controls whether to use `alpha/2` as the subscript for the critical value or just `critical`
* @property {boolean} sampleStats - controls whether one should be able to switch between using the sample standard deviation or the known population standard deviation when calculating the standard error
*/
class ConfidenceCoverageNormal extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			errorBars: [],
			mu: null,
			nTrapped: null,
			useSampleSD: false
		};
	}

	onGenerate = ( n, mu, sigma, level ) => {
		let nTrapped = 0;
		let alpha = 1.0 - level;
		let errorBars = new Array( 20 );
		for ( let i = 0; i < 20; i++ ) {
			let data = new Array( n );
			for ( let j = 0; j < data.length; j++ ) {
				data[ j ] = normal( mu, sigma );
			}
			let avg = mean( data );
			let err;
			if ( !this.state.useSampleSD ) {
				const stderr = sigma / sqrt( n );
				err = abs( stderr * qnorm( 1.0 - alpha/ 2.0, 0.0, 1.0 ) );
			} else {
				const stderr = stdev( data ) / sqrt( n );
				err = abs( stderr * qt( 1.0 - alpha/ 2.0, n - 1 ) );
			}
			let o = {
				'num': i+1,
				'yval': avg,
				'err': err
			};
			o.text = ( o.yval - o.err > mu ) ||
				( o.yval + o.err < mu ) ? 'does not contain mu' :
				'contains mu';
			if ( o.text === 'contains mu' ) {
				nTrapped += 1;
			}
			o.text = `[${roundn( o.yval - o.err, -2 )}, ${roundn( o.yval + o.err, -2 )}] ` + o.text;
			errorBars[ i ] = o;
		}
		this.setState({
			nTrapped: nTrapped,
			mu: mu,
			errorBars: errorBars
		});
	};

	renderChart() {
		const { errorBars } = this.state;
		if ( !errorBars || errorBars.length === 0 ) {
			return null;
		}
		return ( <VictoryChart
			padding={{ top: 20, bottom: 30, left: 40, right: 20 }}
			height={180}
			theme={VictoryTheme.material}
		>
			<VictoryAxis
				padding={20}
				standalone={false}
				tickCount={20}
				style={{
					tickLabels: {
						fontSize: '9px'
					}
				}}
			/>
			<VictoryAxis
				dependentAxis
				padding={20}
				standalone={false}
			/>
			<VictoryScatter
				animate={{ duration: 500 }}
				data={this.state.errorBars}
				labelComponent={<VictoryTooltip />}
				style={{
					data: {
						fill: ( val ) => (
							( val.datum.yval - val.datum.err > this.state.mu ) ||
							( val.datum.yval + val.datum.err < this.state.mu )
						) ? 'darkred' : 'steelblue'
					}
				}}
				x="num"
				y="yval"
				labels={( val ) => {
					return `Sample mean: ${roundn( val.datum.yval, -3)}`;
				}}
			/>
			<VictoryErrorBar
				animate={{ duration: 500 }}
				labelComponent={<VictoryTooltip />}
				style={{
					data: {
						stroke: ( val ) => {
							return (
								( val.datum.yval - val.datum.err > this.state.mu ) ||
								( val.datum.yval + val.datum.err < this.state.mu )
							) ? 'darkred' : 'steelblue';
						}
					}
				}}
				data={this.state.errorBars}
				x="num"
				y="yval"
				errorY={( d ) => d.err}
				labels={( v ) => v.datum.text}
			/>
			<VictoryLine
				data={[
					{ x: 1, y: this.state.mu },
					{ x: 20, y: this.state.mu }
				]}
			/>
		</VictoryChart> );
	}

	render() {
		const { t } = this.props;
		let intro;
		if ( this.props.intro ) {
			intro = this.props.intro;
		} else {
			intro = <p><TeX raw="X \sim \text{Normal}\left( \mu, \sigma \right)" elems={ELEM_TOOLTIPS} />. {t('then')} <TeX raw="\bar X \sim \text{Normal}\left( \mu, \tfrac{\sigma}{\sqrt{n}} \right)" elems={ELEM_TOOLTIPS} />. {t('normal-intro')} <Switch tooltip={`${this.state.useSampleSD ? t('click-pop-stdev') : t('click-sample-stdev')}`} active={this.props.sampleStats} onChange={( pos ) => {
					this.setState({
						useSampleSD: pos === 1
					});
				}}>
				<TeX raw={`\\bar X \\pm Z_{${this.props.quartileNotation ? '\\tfrac{\\alpha}{2}' : '\\text{critical}'}} \\cdot \\frac{\\sigma}{\\sqrt{n}}`} elems={ELEM_TOOLTIPS} />
				<TeX raw={`\\bar X \\pm t_{${this.props.quartileNotation ? '\\tfrac{\\alpha}{2}' : '\\text{critical}'}} \\cdot \\frac{S}{\\sqrt{n}}`} elems={ELEM_TOOLTIPS} />
			</Switch>.
				<Trans i18nKey="normal-intro-end" ns="LearnConfidenceCoverage" >
					For our choice of sample size (n), <TeX raw="\mu" />, <TeX raw="\sigma" />, and confidence level, we will simulate 20 different samples from our normal distribution and calculate the corresponding sample means and confidence intervals.
				</Trans>
			</p>;
		}
		return (
			<Card className="coverage-card" >
				<Card.Header as="h4">
					{t('confidence-interval-coverage-mean')}
				</Card.Header>
				<Card.Body>
					<Container>
						<Row>
							{intro}
						</Row>
						<Row>
							<Col md={5}>
								<Dashboard
									title={t('change-parameters')}
									onGenerate={this.onGenerate}
									autoStart={true}
									id="confidence_coverage_normal"
								>
									<NumberInput
										legend={`${t('sample-size')} (n) `}
										defaultValue={30}
										max={100}
										step={1}
										min={1}
									/>
									<NumberInput
										legend={`${t('mean')} (mu)`}
										defaultValue={1}
										max={5}
										min={-5}
										step={0.1}
									/>
									<NumberInput
										legend={t('standard-deviation')}
										defaultValue={1}
										max={20}
										min={0.1}
										step={0.1}
									/>
									<SliderInput
										legend={t('confidence-level')}
										defaultValue={0.95}
										min={0.01}
										max={0.99}
										step={0.01}
										fractionDigits={2}
									/>
								</Dashboard>
								<FeedbackButtons
									id="coverage-module-normal"
								/>
							</Col>
							<Col md={7}>
								<Card>
									<Card.Header as="h4">
										{t('confidence-intervals')}
									</Card.Header>
									<Card.Body>
										{this.renderChart()}
										<p>{t('capture-true-proportion', { nTrapped: this.state.nTrapped })} <b>({t('coverage')}:  {this.state.nTrapped/20}).</b></p>
									</Card.Body>
								</Card>
							</Col>
						</Row>
					</Container>
				</Card.Body>
			</Card>
		);
	}
}


// PROPERTIES //

ConfidenceCoverageNormal.defaultProps = {
	intro: null,
	quartileNotation: true,
	sampleStats: true
};

ConfidenceCoverageNormal.propTypes = {
	intro: PropTypes.oneOfType([ PropTypes.node, PropTypes.string ]),
	quartileNotation: PropTypes.bool,
	sampleStats: PropTypes.bool
};


// EXPORTS //

export default withTranslation( 'learn/confidence-coverage' )( ConfidenceCoverageNormal );
