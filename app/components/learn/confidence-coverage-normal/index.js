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

	onGenerate =  ( n, mu, level ) => {
		let nTrapped = 0;
		let alpha = 1.0 - level;
		let errorBars = new Array( 20 );
		for ( let i = 0; i < 20; i++ ) {
			let data = new Array( n );
			for ( let j = 0; j < data.length; j++ ) {
				data[ j ] = normal( mu, 1 );
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

		const intro = <p>For different configurations, we simulate 20 random samples from a <TeX raw="\text{Normal}(  \mu, 1 )" elems={{ "μ": { tooltip: "Mean" }, "1": { tooltip: "Standard Deviation" } }}/> distribution. Does the length of the confidence intervals change as you vary the parameters? What about the coverage? </p>;

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
			<Panel header="Coverage of Confidence Intervals" id="coverageModule">
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
									legend="True parameter mu"
									defaultValue={1}
									max={5}
									min={-5}
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
								for="coverageModule"
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






