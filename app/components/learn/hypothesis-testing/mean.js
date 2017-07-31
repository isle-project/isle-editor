// MODULES //

import React, { Component } from 'react';
import { Grid, Row, Col, Panel, Well } from 'react-bootstrap';
import { VictoryArea, VictoryChart, VictoryLine } from 'victory';
import { abs, sqrt, roundn } from '@stdlib/math/base/special';
import linspace from '@stdlib/math/utils/linspace';
import dnorm from '@stdlib/math/base/dist/normal/pdf';
import pnorm from '@stdlib/math/base/dist/normal/cdf';
import Dashboard from 'components/dashboard';
import NumberInput from 'components/input/number';
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

class MeanTest extends Component {

	constructor( props ) {

		super( props );

		this.state = {
			n: 5,
			mu0: 0,
			sigma: 1,
			pdfData: null,
			xbar: 0,
			zStat: 0,
			areaData: null,
			areaData2: null,
			probFormula: '',
			type: 0
		};

	}

	onGenerate = (  mu0, xbar, sigma, n ) => {
		debug( 'Should generate new values...' );
		let pdfData = linspace( -3.50, 3.5, 300 );
		pdfData = pdfData.map( x => {
			return { x: x, y: dnorm( x, 0, 1 ) };
		});
		let zStat = roundn( ( xbar - mu0 ) / ( sigma / sqrt( n ) ), -3 );

		let areaData;
		let areaData2;
		let probFormula;
		switch ( this.state.type ) {
		case 1:
			areaData = linspace( -3, zStat, 200 ).map( d => {
				return { x: d, y: dnorm( d, 0, 1 ) };
			});
			probFormula = `P( Z < ${zStat}) = ${roundn( pnorm( zStat, 0, 1 ), -3 )}`;
			break;
		case 0:
			areaData = linspace( zStat, 3, 200 ).map( d => {
				return { x: d, y: dnorm( d, 0, 1 ) };
			});
			probFormula = `P( Z > ${zStat}) = ${roundn( 1-pnorm( zStat, 0, 1 ), - 3 )}`;
			break;
		case 2:
			areaData = linspace( abs( zStat ), 3, 200 ).map( d => {
				return { x: d, y: dnorm( d, 0, 1 ) };
			});
			areaData2 = linspace( -3, -abs( zStat ), 200 ).map( d => {
				return { x: d, y: dnorm( d, 0, 1 ) };
			});
			probFormula = `P( |Z| > ${abs( zStat )}) = ${roundn( ( 1-pnorm( abs( zStat ), 0, 1 ) )+pnorm( -abs( zStat ), 0, 1 ), - 3 )}`;
			break;
		}
		this.setState({
			n, mu0, sigma, pdfData,
			xbar,
			zStat,
			areaData, areaData2,
			probFormula
		});
	}

	onDirectionChange = ( pos ) => {
		let areaData;
		let areaData2;
		let probFormula;
		let { zStat } = this.state;
		switch ( pos ) {
		case 1:
			areaData = linspace( -3, zStat, 200 ).map( d => {
				return { x: d, y: dnorm( d, 0, 1 ) };
			});
			probFormula = `P( Z < ${zStat}) = ${roundn( pnorm( zStat, 0, 1 ), -3 )}`;
			break;
		case 0:
			areaData = linspace( zStat, 3, 200 ).map( d => {
				return { x: d, y: dnorm( d, 0, 1 ) };
			});
			probFormula = `P( Z > ${zStat}) = ${roundn( 1-pnorm( zStat, 0, 1 ), -3 )}`;
			break;
		case 2:
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
			probFormula = `P( |Z| > ${zStat}) = ${roundn( 1-pnorm( abs( zStat ), 0, 1 ) + pnorm( -abs( zStat ), 0, 1 ), - 3 )}`;
			break;
		}
		this.setState({
			type: pos,
			probFormula,
			areaData, areaData2
		});
	}

	render() {
		return ( <Grid>
			<Row>
				<Col md={6}>
					<Dashboard title="Parameters" maxWidth={1600} autoUpdate onGenerate={this.onGenerate}>
						<Well>
							<NumberInput
								legend="Hypothesized mean (null hypothesis)"
								defaultValue={this.state.m0}
								step="any"
							/>
						</Well>
						<p>Let's assume that we have observed data with the following characteristics</p>
						<Well>
							<NumberInput
								legend="Sample mean"
								defaultValue={this.state.xbar}
								step="any"
							/>
							<NumberInput
								legend="Sample standard deviation"
								defaultValue={this.state.sigma}
								min={0.1}
								step="any"
							/>
							<NumberInput
								legend="Sample size"
								defaultValue={this.state.n}
								step={1}
								min={1}
							/>
						</Well>
						<p>We conduct the following test (click on the formula to switch between the one-sided variants and the two-sided test):</p>
						<Switch onChange={this.onDirectionChange}>
							<TeX displayMode tag="" raw={`H_0: \\mu \\le ${this.state.mu0} \\; vs. \\; H_1: \\mu > ${this.state.mu0}`} />
							<TeX displayMode tag="" raw={`H_0: \\mu \\ge ${this.state.mu0} \\; vs. \\; H_1: \\mu < ${this.state.mu0}`} />
							<TeX displayMode tag="" raw={`H_0: \\mu = ${this.state.mu0} \\; vs. \\; H_1: \\mu \\ne ${this.state.mu0}`} />
						</Switch>
						<p>We calculate the following test statistic:</p>
						<TeX
							displayMode
							tag=""
							style={{ fontSize: "1.5em" }}
							raw={`z  = \\frac{\\bar x - \\mu_0}{s/\\sqrt{n}}`} elems={{
								"n": {
									tooltip: "Sample Size"
								},
								"s": {
									tooltip: "Standard Deviation"
								},
								"μ": {
									tooltip: "Mean under the Null Hypothesis"
								},
								"x": {
									tooltip: "Sample Mean"
								},
								"z": {
									tooltip: "Test Statistic"
								}
							}}
						/>
					</Dashboard>
				</Col>
				<Col md={6}>
					<Panel title="Test Result">
						<p>Plugging in our values, we have:</p>
						<TeX
							tag=""
							displayMode
							raw={`z  = \\frac{${this.state.xbar} - ${this.state.mu0}}{${this.state.sigma} / \\sqrt{${this.state.n}}} = ${this.state.zStat}`}
						/>
						<p>Under the null hypothesis, we calculate the p-value:</p>
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
		</Grid> );
	}
}


// EXPORTS //

export default MeanTest;
