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
import sqrt from '@stdlib/math/base/special/sqrt';
import randu from '@stdlib/random/base/randu';
import qnorm from '@stdlib/stats/base/dists/normal/quantile';
import roundn from '@stdlib/math/base/special/roundn';
import Dashboard from '@isle-project/components/dashboard';
import TeX from '@isle-project/components/tex';
import Switch from '@isle-project/components/switch';
import mean from '@isle-project/utils/statistic/mean.js';
import FeedbackButtons from '@isle-project/components/feedback';
import SliderInput from '@isle-project/components/input/slider';
import NumberInput from '@isle-project/components/input/number';
import './confidence_coverage_binomial.css';


// VARIABLES //

const ELEM_TOOLTIPS = {
	'p': { tooltip: 'Success probability' },
	'n': { tooltip: 'Number of trials' },
	'alpha': { tooltip: 'Significance level' },
	'Z': { tooltip: 'Standard normal quantile' }
};


// MAIN //

/**
* A learning component illustrating coverage of confidence intervals for the mean of a binomial distribution.
*
* @property {(string|node)} intro - overrides default (interactive) intro text
* @property {boolean} quartileNotation - controls whether to use quartile notation in intro text
* @property {boolean} sampleStats - controls whether one should be able to switch between using the sample proportion or the known population success probability when calculating the standard error
*/
class ConfidenceCoverageBinomial extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			errorBars: [],
			p: null,
			nTrapped: null,
			useSampleProp: true
		};
	}

	onGenerate = ( n, p, level ) => {
		let nTrapped = 0;
		let alpha = 1.0 - level;
		let errorBars = new Array( 20 );
		for ( let i = 0; i < 20; i++ ) {
			let data = new Array( n );
			for ( let j = 0; j < data.length; j++ ) {
				data[ j ] = randu() <= p ? 1.0 : 0.0;
			}
			let phat = mean( data );
			let sd;
			if ( !this.state.useSampleProp ) {
				sd = sqrt( p * ( 1.0-p ) / n );
			} else {
				sd = sqrt( phat * ( 1.0-phat ) / n );
			}
			let o = {
				'num': i+1,
				'yval': phat,
				'err': abs( sd * qnorm( 1.0 - alpha/ 2.0, 0.0, 1.0 ) )
			};
			o.text = ( o.yval - o.err > p ) ||
				( o.yval + o.err < p ) ? 'does not contain p' :
				'contains p';
			if ( o.text === 'contains p' ) {
				nTrapped += 1;
			}
			o.text = `[${roundn( o.yval - o.err, -2 )}, ${roundn( o.yval + o.err, -2 )}] ` + o.text;
			errorBars[ i ] = o;
		}
		this.setState({
			nTrapped: nTrapped,
			p: p,
			errorBars: errorBars
		});
	}

	renderChart() {
		const { errorBars } = this.state;
		if ( !errorBars || errorBars.length === 0 ) {
			return null;
		}
		return ( <VictoryChart
			padding={30}
			height={180}
			theme={VictoryTheme.material}
			domain={{
				y: [ 0, 1 ]
			}}
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
						fill: ( v ) => (
							( v.datum.yval - v.datum.err > this.state.p ) ||
							( v.datum.yval + v.datum.err < this.state.p )
						) ? 'darkred' : 'steelblue'
					}
				}}
				x="num"
				y="yval"
				labels={( d ) => `Sample proportion ${roundn( d.datum.yval, -3 )}`}
			/>
			<VictoryErrorBar
				animate={{ duration: 500 }}
				labelComponent={<VictoryTooltip />}
				style={{
					data: {
						stroke: ( v ) => (
							( v.datum.yval - v.datum.err > this.state.p ) ||
							( v.datum.yval + v.datum.err < this.state.p )
						) ? 'darkred' : 'steelblue'
					}
				}}
				data={this.state.errorBars}
				x="num"
				y="yval"
				errorY={( d ) => d.err}
				labels={( d ) => d.datum.text}
			/>
			<VictoryLine
				data={[
					{ x: 1, y: this.state.p },
					{ x: 20, y: this.state.p }
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
			intro = <div>
				<p>
					<Trans i18nKey="binomial-intro" ns="LearnConfidenceCoverage" >Now we will switch to asking a Yes/No question about a population. We are interested in estimating the true population proportion <TeX raw="p" /> of &quot;Yes&quot; answers (for example, what proportion of the population has blue eyes?).  We can take a sample of size <TeX raw="n" />, find how many observations in our sample are a &quot;Yes&quot; (X), and then estimate the true proportion <TeX raw="p" /> with <TeX raw="\hat{p} = \frac{X}{n}" elems={ELEM_TOOLTIPS} />. Then <TeX raw="\hat{p} \sim \text{Normal}\left( p, \sqrt{ \tfrac{p(1-p)}{n} } \right)" elems={ELEM_TOOLTIPS} />. Our confidence interval is then <Switch tooltip={`${this.state.useSampleProp ? t('click-pop-proportion') : t('click-sample-proportion')}`} active={this.props.sampleStats} onChange={( pos ) => {
					this.setState({
						useSampleProp: pos === 1
					});
				}}>
					<TeX raw={`\\hat{p} \\pm Z_{${this.props.quartileNotation ? '\\alpha/2' : '\\text{critical}'}} \\cdot \\sqrt{ \\frac{p(1-p)}{n}}`} elems={ELEM_TOOLTIPS} />
					<TeX raw={`\\hat{p} \\pm Z_{${this.props.quartileNotation ? '\\alpha/2' : '\\text{critical}'}} \\cdot \\sqrt{ \\frac{\\hat p(1-\\hat p)}{n}}`} elems={ELEM_TOOLTIPS} />
				</Switch>.</Trans>
				</p>
				<p>
					<Trans i18nKey="binomial-intro-end" ns="LearnConfidenceCoverage" >
						For our choice of sample size (n), true proportion <TeX raw="p" />, and confidence level, we will simulate <TeX raw="20" /> different samples from our normal distribution and calculate the corresponding sample proportions and confidence intervals.
					</Trans>
				</p>
			</div>;
		}
		return (
			<Card className="coverage-card">
				<Card.Header as="h4">
					{t('confidence-interval-coverage')}
				</Card.Header>
				<Card.Body>
					<Container>
						<Row>
							{intro}
						</Row>
						<Row>
							<Col md={5} >
								<Dashboard
									title={t('change-parameters')}
									onGenerate={this.onGenerate}
									autoStart={true}
									id="confidence_coverage_binomial"
								>
									<NumberInput
										legend={`${t('sample-size')} (n)`}
										defaultValue={30}
										max={999}
										step={1}
									/>
									<NumberInput
										legend={`${t('true-proportion')} (p)`}
										defaultValue={0.5}
										max={1}
										min={0}
										step={0.01}
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
									id="coverage-module-binomial"
								/>
							</Col>
							<Col md={7} >
								<Card>
									<Card.Header as="h4">
										{t('confidence-intervals')}
									</Card.Header>
									<Card.Body>
										{this.renderChart()}
										<p>{t('capture-true-proportion', { nTrapped: this.state.nTrapped })} <b>({t('coverage')}: {this.state.nTrapped/20}).</b></p>
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

ConfidenceCoverageBinomial.defaultProps = {
	intro: null,
	quartileNotation: true,
	sampleStats: true
};

ConfidenceCoverageBinomial.propTypes = {
	intro: PropTypes.oneOfType([ PropTypes.node, PropTypes.string ]),
	quartileNotation: PropTypes.bool,
	sampleStats: PropTypes.bool
};


// EXPORTS //

export default withTranslation( 'learn/confidence-coverage' )( ConfidenceCoverageBinomial );
