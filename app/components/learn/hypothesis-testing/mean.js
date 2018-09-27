// MODULES //

import React, { Component } from 'react';
import Container from 'react-bootstrap/lib/Container';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Badge from 'react-bootstrap/lib/Badge';
import Card from 'react-bootstrap/lib/Card';
import { VictoryArea, VictoryChart, VictoryLine } from 'victory';
import logger from 'debug';
import abs from '@stdlib/math/base/special/abs';
import sqrt from '@stdlib/math/base/special/sqrt';
import roundn from '@stdlib/math/base/special/roundn';
import linspace from '@stdlib/math/utils/linspace';
import dnorm from '@stdlib/stats/base/dists/normal/pdf';
import pnorm from '@stdlib/stats/base/dists/normal/cdf';
import NumberInput from 'components/input/number';
import SelectInput from 'components/input/select';
import Switch from 'components/switch';
import TeX from 'components/tex';


// VARIABLES //

const areaStyle = {
	data: {
		fill: 'tomato', stroke: 'tomato', opacity: 0.3
	}
};
const debug = logger( 'isle:learn:hypothesis-testing-mean' );


// MAIN //

class MeanTest extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			n: 5,
			n2: 5,
			mu0: 0,
			sigma: 1,
			sigma2: 1,
			pdfData: null,
			xbar: 0,
			xbar2: 0,
			zStat: 0,
			areaData: null,
			areaData2: null,
			probFormula: '',
			type: 0,
			samples: 'One-Sample'
		};
	}

	componentDidMount() {
		this.onGenerate();
	}

	onGenerate = () => {
		debug( 'Should generate new values...' );
		const { mu0, xbar, xbar2, sigma, sigma2, n, n2, samples } = this.state;
		let pdfData = linspace( -3.50, 3.5, 300 );
		pdfData = pdfData.map( x => {
			return { x: x, y: dnorm( x, 0, 1 ) };
		});
		let zStat;
		if ( samples === 'Two-Sample' ) {
			zStat = roundn( ( xbar - xbar2 - mu0 ) / sqrt( ( ( sigma*sigma ) / n )+( ( sigma2*sigma2 )/ n2 ) ), -3 );
		} else {
			zStat = roundn( ( xbar - mu0 ) / ( sigma / sqrt( n ) ), -3 );
		}

		let areaData;
		let areaData2;
		let probFormula;
		switch ( this.state.type ) {
		case 2:
			areaData = linspace( -3, zStat, 200 ).map( d => {
				return { x: d, y: dnorm( d, 0, 1 ) };
			});
			probFormula = `P( Z < ${zStat}) = ${roundn( pnorm( zStat, 0, 1 ), -3 )}`;
			break;
		case 1:
			areaData = linspace( zStat, 3, 200 ).map( d => {
				return { x: d, y: dnorm( d, 0, 1 ) };
			});
			probFormula = `P( Z > ${zStat}) = ${roundn( 1-pnorm( zStat, 0, 1 ), -3 )}`;
			break;
		case 0:
			areaData = linspace( abs( zStat ), 3, 200 ).map( d => {
				return { x: d, y: dnorm( d, 0, 1 ) };
			});
			areaData2 = linspace( -3, -abs( zStat ), 200 ).map( d => {
				return { x: d, y: dnorm( d, 0, 1 ) };
			});
			probFormula = `P( |Z| > ${abs( zStat )}) = ${roundn( ( 1-pnorm( abs( zStat ), 0, 1 ) )+pnorm( -abs( zStat ), 0, 1 ), -3 )}`;
			break;
		}
		this.setState({
			n,
			mu0,
			sigma,
			sigma2,
			pdfData,
			xbar,
			xbar2,
			zStat,
			areaData,
			areaData2,
			probFormula
		});
	}

	onDirectionChange = ( pos ) => {
		let areaData;
		let areaData2;
		let probFormula;
		let { zStat } = this.state;
		switch ( pos ) {
		case 0:
			areaData = linspace( abs( zStat ), 3, 200 ).map( d => {
				return {
					x: d,
					y: dnorm( d, 0, 1 )
				};
			});
			areaData2 = linspace( -3, -abs( zStat ), 200 ).map( d => {
				return {
					x: d,
					y: dnorm( d, 0, 1 )
				};
			});
			probFormula = `P( |Z| > ${zStat}) = ${roundn( 1-pnorm( abs( zStat ), 0, 1 ) + pnorm( -abs( zStat ), 0, 1 ), -3 )}`;
			break;
		case 1:
			areaData = linspace( zStat, 3, 200 ).map( d => {
				return { x: d, y: dnorm( d, 0, 1 ) };
			});
			probFormula = `P( Z > ${zStat}) = ${roundn( 1-pnorm( zStat, 0, 1 ), -3 )}`;
			break;
		case 2:
			areaData = linspace( -3, zStat, 200 ).map( d => {
				return { x: d, y: dnorm( d, 0, 1 ) };
			});
			probFormula = `P( Z < ${zStat}) = ${roundn( pnorm( zStat, 0, 1 ), -3 )}`;
			break;
		}
		this.setState({
			type: pos,
			probFormula,
			areaData,
			areaData2
		});
	}

	renderParametersPanel() {
		const { mu0, xbar, xbar2, sigma, sigma2, n, n2, samples } = this.state;
		const firstSampleParams = <div>
			<Badge variant="secondary">First Sample</Badge>
			<NumberInput
				legend="Sample mean"
				defaultValue={xbar}
				step="any"
				onChange={( value ) => {
					this.setState({
						xbar: value
					}, this.onGenerate );
				}}
			/>
			<NumberInput
				legend="Sample standard deviation"
				defaultValue={sigma}
				min={0.1}
				step="any"
				onChange={( value ) => {
					this.setState({
						sigma: value
					}, this.onGenerate );
				}}
			/>
			<NumberInput
				legend="Sample size"
				defaultValue={n}
				step={1}
				min={1}
				onChange={( value ) => {
					this.setState({
						n: value
					}, this.onGenerate );
				}}
			/>
		</div>;
		const secondSampleParams = <div>
			<Badge variant="secondary">Second Sample</Badge>
			<NumberInput
				legend="Sample mean"
				defaultValue={xbar2}
				step="any"
				onChange={( value ) => {
					this.setState({
						xbar2: value
					}, this.onGenerate );
				}}
			/>
			<NumberInput
				legend="Sample standard deviation"
				defaultValue={sigma2}
				min={0.1}
				step="any"
				onChange={( value ) => {
					this.setState({
						sigma2: value
					}, this.onGenerate );
				}}
			/>
			<NumberInput
				legend="Sample size"
				defaultValue={n2}
				step={1}
				min={1}
				onChange={( value ) => {
					this.setState({
						n2: value
					}, this.onGenerate );
				}}
			/>
		</div>;
		const testStat = samples === 'Two-Sample' ? '\\mu_1 - \\mu_2' : '\\mu';
		return ( <Card maxWidth={1600}>
			<Card.Header as="h4">
				Parameters
			</Card.Header>
			<Card.Body>
				<Card body className="bg-light">
					<SelectInput
						options={[ 'One-Sample', 'Two-Sample' ]}
						defaultValue={samples}
						onChange={( value ) => {
							this.setState({
								samples: value
							}, this.onGenerate );
						}}
					/>
					<NumberInput
						legend={`Hypothesized ${samples === 'Two-Sample' ? 'difference' : 'mean'} (null hypothesis)`}
						defaultValue={mu0}
						step="any"
						onChange={( value ) => {
							this.setState({
								mu0: value
							}, this.onGenerate );
						}}
					/>
				</Card>
				<p>Let&#39;s assume that we have observed data with the following characteristics</p>
				<Card body className="bg-light">
					{firstSampleParams}
					{samples === 'Two-Sample' ? secondSampleParams : null}
				</Card>
				<p>We conduct the following test (click on the formula to switch between the one-sided variants and the two-sided test):</p>
				<Switch onChange={this.onDirectionChange}>
					<TeX displayMode tag="" raw={`H_0: ${testStat} = ${mu0} \\; vs. \\; H_1: ${testStat} \\ne ${mu0}`} />
					<TeX displayMode tag="" raw={`H_0: ${testStat} \\le ${mu0} \\; vs. \\; H_1: ${testStat} > ${mu0}`} />
					<TeX displayMode tag="" raw={`H_0: ${testStat} \\ge ${mu0} \\; vs. \\; H_1: ${testStat} < ${mu0}`} />
				</Switch>
				<p>We calculate the following test statistic:</p>
				{ samples === 'Two-Sample' ?
					<TeX
						displayMode
						tag=""
						style={{
							fontSize: '1.5em'
						}}
						raw="z  = \frac{(\bar x_1 - \bar x_2) - (\mu_1 - \mu_2)}{\sqrt{\tfrac{s_1^2}{n_1}+\tfrac{s_2^2}{n_2}}}"
						elems={{
							'n': {
								tooltip: 'Sample Size'
							},
							's': {
								tooltip: 'Standard Deviation'
							},
							'μ': {
								tooltip: 'True mean'
							},
							'x': {
								tooltip: 'Sample Mean'
							},
							'z': {
								tooltip: 'Test Statistic'
							}
						}}
					/> :
					<TeX
						displayMode
						tag=""
						style={{
							fontSize: '1.5em'
						}}
						raw="z = \frac{\bar x - \mu}{s/\sqrt{n}}"
						elems={{
							'n': {
								tooltip: 'Sample Size'
							},
							's': {
								tooltip: 'Standard Deviation'
							},
							'μ': {
								tooltip: 'Mean under the Null Hypothesis'
							},
							'x': {
								tooltip: 'Sample Mean'
							},
							'z': {
								tooltip: 'Test Statistic'
							}
						}}
					/>
				}
			</Card.Body>
		</Card> );
	}

	renderResultPanel() {
		const { mu0, xbar, xbar2, sigma, sigma2, n, n2, samples, zStat } = this.state;
		return ( <Card>
			<Card.Header as="h4">Test Result</Card.Header>
			<Card.Body>
				<p>Plugging in our values, we have:</p>
				{ samples === 'Two-Sample' ?
					<TeX
						tag=""
						displayMode
						raw={`z  = \\frac{${roundn( xbar - xbar2, -3 )} - ${mu0}}{\\sqrt{${roundn( ( ( sigma*sigma ) / n ) + ( ( sigma2*sigma2 )/ n2 ), -3 )}}} = ${zStat}`}
					/> :
					<TeX
						tag=""
						displayMode
						raw={`z  = \\frac{${xbar} - ${mu0}}{${sigma} / \\sqrt{${n}}} = ${zStat}`}
					/>
				}
				<p>Under the null hypothesis, we calculate the p-value:</p>
				<TeX raw={this.state.probFormula} />
				<VictoryChart
					domain={{ x: [ -3, 3 ]}}
				>
					<VictoryLine data={this.state.pdfData} />
					<VictoryArea
						data={this.state.areaData}
						style={areaStyle}
					/>
					{ this.state.areaData2 ? <VictoryArea
						data={this.state.areaData2}
						style={areaStyle}
					/> : null }
				</VictoryChart>
			</Card.Body>
		</Card> );
	}

	render() {
		return ( <Container>
			<Row>
				<Col md={6}>
					{this.renderParametersPanel()}
				</Col>
				<Col md={6}>
					{this.renderResultPanel()}
				</Col>
			</Row>
		</Container> );
	}
}


// EXPORTS //

export default MeanTest;
