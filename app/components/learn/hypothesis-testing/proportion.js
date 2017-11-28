// MODULES //

import React, { Component } from 'react';
import { Grid, Row, Col, Label, Panel, Well } from 'react-bootstrap';
import { VictoryArea, VictoryChart, VictoryLine } from 'victory';
import { abs, sqrt, roundn } from '@stdlib/math/base/special';
import linspace from '@stdlib/math/utils/linspace';
import dnorm from '@stdlib/math/base/dists/normal/pdf';
import pnorm from '@stdlib/math/base/dists/normal/cdf';
import NumberInput from 'components/input/number';
import SelectInput from 'components/input/select';
import Switch from 'components/switch';
import TeX from 'components/tex';
const debug = require( 'debug' )( 'isle-editor' );


// VARIABLES //

const areaStyle = {
	data: {
		fill: "tomato", stroke: "tomato", opacity: 0.3
	}
};


// MAIN //

class ProportionTest extends Component {

	constructor( props ) {
		super( props );

		this.state = {
			n: 5,
			n2: 5,
			p0: 0.5,
			phat: 0,
			phat2: 0,
			pStat: 0,
			probFormula: '',
			areaData: null,
			areaData2: null,
			type: 2,
			samples: 'One-Sample'
		};
	}

	componentDidMount() {
		this.onGenerate();
	}

	onGenerate = () => {
		debug( 'Should generate new values...' );
		const { p0, phat, phat2, n, n2, samples } = this.state;
		let pdfData;
		let areaData;
		let areaData2;
		let probFormula;
		let sd1;
		let sd2;

		pdfData = linspace( -3.50, 3.5, 300 );
		pdfData = pdfData.map( x => {
			return { x: x, y: dnorm( x, 0, 1 ) };
		});
		let pStat;
		if ( samples === 'Two-Sample' ) {
			sd1 = ( phat * ( 1-phat ) ) / n;
			sd2 = ( phat2 * ( 1-phat2 ) ) / n2;
			pStat = roundn( ( phat - phat2 - p0 ) / ( sqrt( sd1 + sd2 ) ), -3 );
		} else {
			pStat = roundn( ( phat - p0 ) / ( sqrt( p0 * ( 1-p0 ) / n ) ), -3 );
		}
		switch ( this.state.type ) {
		case 1:
			areaData = linspace( -3, pStat, 200 ).map( d => {
				return { x: d, y: dnorm( d, 0, 1 ) };
			});
			probFormula = `P( Z < ${pStat}) = ${roundn( pnorm( pStat, 0, 1 ), -3 )}`;
			break;
		case 0:
			areaData = linspace( pStat, 3, 200 ).map( d => {
				return { x: d, y: dnorm( d, 0, 1 )
				};
			});
			probFormula = `P( Z > ${pStat}) = ${roundn( 1-pnorm( pStat, 0, 1 ), -3 )}`;
			break;
		case 2:
			areaData = linspace( abs( pStat ), 3, 200 ).map( d => {
				return { x: d, y: dnorm( d, 0, 1 ) };
			});
			areaData2 = linspace( -3, -abs( pStat ), 200 ).map( d => {
				return { x: d, y: dnorm( d, 0, 1 ) };
			});
			probFormula = `P( |Z| > ${abs( pStat )}) = ${roundn( ( 1-pnorm( abs( pStat ), 0, 1 ) )+pnorm( -abs( pStat ), 0, 1 ), - 3 )}`;
			break;
		}
		const newState = {
			n, n2, p0, phat, phat2, pStat,
			areaData, areaData2,
			pdfData, probFormula, sd1, sd2
		};
		this.setState( newState );
	}

	onDirectionChange = ( pos ) => {
		let areaData;
		let areaData2;
		let probFormula;
		let { pStat } = this.state;
		switch ( pos ) {
		case 0:
			areaData = linspace( abs( pStat ), 3, 200 ).map( d => {
				return { x: d, y: dnorm( d, 0, 1 ) };
			});
			areaData2 = linspace( -3, -abs( pStat ), 200 ).map( d => {
				return { x: d, y: dnorm( d, 0, 1 ) };
			});
			probFormula = `P( |Z| > ${pStat}) = ${roundn( 1-pnorm( abs( pStat ), 0, 1 ) + pnorm( -abs( pStat ), 0, 1 ), -3 )}`;
			break;
		case 2:
			areaData = linspace( -3, pStat, 200 ).map( d => {
				return { x: d, y: dnorm( d, 0, 1 ) };
			});
			probFormula = `P( Z < ${pStat}) = ${roundn( pnorm( pStat, 0, 1 ), -3 )}`;
			break;
		case 1:
			areaData = linspace( pStat, 3, 200 ).map( d => {
				return { x: d, y: dnorm( d, 0, 1 ) };
			});
			probFormula = `P( Z > ${pStat}) = ${roundn( 1-pnorm( pStat, 0, 1 ), -3 )}`;
			break;
		}
		this.setState({
			type: pos,
			probFormula,
			areaData, areaData2
		});
	}

	render() {

		const firstSampleParams = <div>
			<Label>First Sample</Label>
			<NumberInput
				legend="Sample proportion"
				defaultValue={this.state.phat}
				step={0.001}
				min={0}
				max={1}
				onChange={( value ) => {
					this.setState({
						phat: value
					},  this.onGenerate );
				}}
			/>
			<NumberInput
				legend="Sample size"
				defaultValue={this.state.n}
				step={1}
				min={1}
				onChange={( value ) => {
					this.setState({
						n: value
					},  this.onGenerate );
				}}
			/>
		</div>;
		const secondSampleParams = <div>
			<Label>Second Sample</Label>
			<NumberInput
				legend="Sample proportion"
				defaultValue={this.state.phat2}
				step={0.001}
				min={0.001}
				max={0.999}
				onChange={( value ) => {
					this.setState({
						phat2: value
					},  this.onGenerate );
				}}
			/>
			<NumberInput
				legend="Sample size"
				defaultValue={this.state.n2}
				step={1}
				min={1}
				onChange={( value ) => {
					this.setState({
						n2: value
					},  this.onGenerate );
				}}
			/>
		</div>;
		const testStat= this.state.samples === 'Two-Sample' ? 'p_1 - p_2' : 'p';

		return (
			<Grid>
				<Row>
					<Col md={6}>
						<Panel header={<h4>Parameters</h4>} maxWidth={1600}>
							<Well>
								<SelectInput
									options={[ 'One-Sample','Two-Sample' ]}
									defaultValue={this.state.samples}
									onChange={( value ) => {
										this.setState({
											samples: value,
											p0: value === 'Two-Sample' ? 0.0 : 0.5
										});
									}}
								/>
								<NumberInput
									legend={`Hypothesized ${ this.state.samples === 'Two-Sample' ? 'difference in proportions' : 'proportion' } (null hypothesis)`}
									defaultValue={this.state.p0}
									step={0.001}
									min={0.001}
									max={0.999}
									onChange={( value ) => {
										this.setState({
											p0: value
										}, this.onGenerate );
									}}
								/>
							</Well>
							Let's assume that we have observed data with the following characteristics:
							<Well>
								{firstSampleParams}
								{this.state.samples === 'Two-Sample' ? secondSampleParams : null }
							</Well>
							<p>We conduct the following test (click on the formula to switch between the one-sided variants and the two-sided test):</p>
							<Switch onChange={this.onDirectionChange}>
								<TeX displayMode tag="" raw={`H_0: ${testStat} = ${this.state.p0} \\; vs. \\; H_1: ${testStat} \\ne ${this.state.p0}`} />
								<TeX displayMode tag="" raw={`H_0: ${testStat} \\le ${this.state.p0} \\; vs. \\; H_1: ${testStat} > ${this.state.p0}`} />
								<TeX displayMode tag="" raw={`H_0: ${testStat} \\ge ${this.state.p0} \\; vs. \\; H_1: ${testStat} < ${this.state.p0}`} />
							</Switch>
							<p>We calculate the following test statistic:</p>
							{ this.state.samples === 'Two-Sample' ?
								<TeX
									displayMode
									tag=""
									style={{ fontSize: "1.5em" }}
									raw={`z  = \\frac{\\hat p_1 - \\hat p_2 - (p_1 - p_2)}{\\sqrt{\\tfrac{\\hat p_1 (1- \\hat p_1)}{n_1} + \\tfrac{\\hat p_2 (1- \\hat p_2)}{n_2} }}`} elems={{
										"n": {
											tooltip: "Sample Size"
										},
										"p": {
											tooltip: "Proportion"
										},
										"z": {
											tooltip: "Test Statistic"
										}
									}}
								/> :
								<TeX
									displayMode
									tag=""
									style={{ fontSize: "1.5em" }}
									raw={`z  = \\frac{\\hat p - p_0}{\\sqrt{p_0 (1-p_0) / n}}`} elems={{
										"n": {
											tooltip: "Sample Size"
										},
										"p": {
											tooltip: "Proportion"
										},
										"z": {
											tooltip: "Test Statistic"
										}
									}}
								/>
							}
						</Panel>
					</Col>
					<Col md={6}>
						<Panel title="Test Result">
							<p>Plugging in our values, we have:</p>
							{ this.state.samples === 'Two-Sample' ?
								<TeX
									tag=""
									displayMode
									raw={`z  = \\frac{${roundn( this.state.phat - this.state.phat2, -3 )} - ${this.state.p0}}{\\sqrt{${roundn( sqrt( this.state.sd1 + this.state.sd2 ), -3 )}}} = ${this.state.pStat}`}
								/> :
								<TeX
									tag=""
									displayMode
									raw={`z  = \\frac{${this.state.phat} - ${this.state.p0}}{\\sqrt{${roundn( this.state.p0*( 1-this.state.p0 )/this.state.n, -3 )}}} = ${this.state.pStat}`}
								/>
							}
							<p>Under the null hypothesis, we calculate the p-value: </p>
							<TeX raw={this.state.probFormula} />
							<VictoryChart
								domain={{ x: [ -3, 3 ]}}
								animate={{ duration: 500 }}
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
						</Panel>
					</Col>
				</Row>
			</Grid>
		);
	}
}


// EXPORTS //

export default ProportionTest;
