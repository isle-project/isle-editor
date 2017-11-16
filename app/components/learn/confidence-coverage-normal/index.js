// MODULES //

import React, { Component } from 'react';
import { Panel, Grid, Row, Col } from 'react-bootstrap';
import { VictoryAxis, VictoryChart, VictoryErrorBar, VictoryLine, VictoryTheme, VictoryTooltip } from 'victory';
import abs from '@stdlib/math/base/special/abs';
import qt from '@stdlib/math/base/dists/t/quantile';
import normal from '@stdlib/math/base/random/normal';
import ttest from '@stdlib/math/stats/ttest';
import Dashboard from 'components/dashboard';
import TeX from 'components/tex';
import FeedbackButtons from 'components/feedback';
import SliderInput from 'components/input/slider';
import NumberInput from 'components/input/number';


// VARIABLES //

const ELEM_TOOLTIPS = {
	'μ': { tooltip: 'Mean' },
	'σ': { tooltip: 'Standard Deviation' },
	'n': { tooltip: 'Sample Size' },
	'α': { tooltip: 'Significance level' },
	'Z': { tooltip: 'Standard normal quantile' }
};


// MAIN //

class ConfidenceCoverageNormal extends Component {

	constructor( props ) {
		super( props );

		this.state = {
			errorBars: [],
			mu: null,
			nTrapped: null
		};
	}

	onGenerate =  ( n, mu, sigma, level ) => {
		let nTrapped = 0;
		let alpha = 1.0 - level;
		let errorBars = new Array( 20 );
		for ( let i = 0; i < 20; i++ ) {
			let data = new Array( n );
			for ( let j = 0; j < data.length; j++ ) {
				data[ j ] = normal( mu, sigma );
			}
			let res = ttest( data, {
				'alpha': alpha
			});
			let o = {
				'num': i,
				'yval': res.statistic * res.sd,
				'err': abs( res.sd * qt( 1 - alpha/ 2.0, n - 1 ) )
			};
			o.label = ( o.yval - o.err > mu ) ||
				( o.yval + o.err < mu ) ? 'does not contain mu' :
				'contains mu';
			if ( o.label === 'contains mu' ) {
				nTrapped += 1;
			}
			errorBars[ i ] = o;
		}
		this.setState({
			nTrapped: nTrapped,
			mu: mu,
			errorBars: errorBars
		});
	}

	render() {

		const intro = <p><TeX raw="X \sim \text{Normal}(  \mu, \sigma^2 )" elems={ELEM_TOOLTIPS}/>. Then <TeX raw="\bar X \sim \text{Normal}( \mu, \sigma/\sqrt{n} )" elems={ELEM_TOOLTIPS}/>.  Our confidence interval is then <TeX raw="\bar X \pm Z_{\alpha/2} \cdot \sigma/\sqrt{n}" elems={ELEM_TOOLTIPS}/>. For our choice of sample size (n), mu, sigma, and confidence level, we'll simulate 20 different samples from our normal distribution and calculate the corresponding sample means and confidence intervals.</p>;

		const plot= <VictoryChart padding={30} height={180} theme={VictoryTheme.material}
		>
			<VictoryAxis
				padding={20}
				standalone={false}
				tickCount={10}
			/>
			<VictoryAxis
				dependentAxis
				padding={20}
				standalone={false}
			/>
			<VictoryErrorBar
				animate={{ duration: 500 }}
				labelComponent={<VictoryTooltip/>}
				style={{
					data: {
						stroke: ( data ) => (
							( data.y - data.err > this.state.mu ) ||
							( data.y + data.err < this.state.mu )
						) ?  'darkred' : 'steelblue'
					}
				}}
				data={this.state.errorBars}
				x="num"
				y="yval"
				errorY={( d ) => d.err }
				labels={( d ) => d.label}
			/>
			<VictoryLine
				data={[
					{ x: 0, y: this.state.mu },
					{ x: 20, y: this.state.mu }
				]}
			/>
		</VictoryChart>;

		return (
			<Panel header="Confidence Interval Coverage for Sample Mean" id="coverageModule">
				<Grid>
					<Row>
						{intro}
					</Row>
					<Row>
						<Col md={4}>
							<Dashboard
								title="Change parameters"
								onGenerate={this.onGenerate}
								autoStart={true}
							>
								<NumberInput
									legend="Sample size (n)"
									defaultValue={30}
									max={100}
									step={1}
								/>
								<NumberInput
									legend="Mean (mu)"
									defaultValue={1}
									max={5}
									min={-5}
									step={1}
								/>
								<NumberInput
									legend="Standard deviation (sigma)"
									defaultValue={1}
									max={20}
									min={1}
									step={1}
								/>
								<SliderInput
									legend="Confidence level"
									defaultValue={0.95}
									min={0.01}
									max={0.99}
									step={0.01}
									fractionDigits={2}
								/>
							</Dashboard>
						</Col>
						<Col md={8}>
							<Panel header="Confidence Intervals">
								{plot}
								<p>Of the 20 confidence intervals, {this.state.nTrapped} capture the true mean <b>(coverage:  {this.state.nTrapped/20}).</b></p>
							</Panel>
							<FeedbackButtons
								for="coverageModuleNormal"
							/>
						</Col>
					</Row>
				</Grid>
			</Panel>
		);
	}
}


// EXPORTS //

export default ConfidenceCoverageNormal;






