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

class ProportionTest extends Component {

	constructor( props ) {

		super( props );

		this.state = {
			n: 5,
			p0: 0.5,
			phat: 0,
			pStat: 0,
			probFormula: '',
			areaData: null,
			areaData2: null,
			type: 0
		};

	}

	onGenerate = ( p0, phat, n ) => {
		debug( 'Should generate new values...' );
		let pdfData = linspace( -3.50, 3.5, 300 );
		pdfData = pdfData.map( x => {
			return { x: x, y: dnorm( x, 0, 1 ) };
		});
		let pStat = roundn( ( phat - p0 ) / ( sqrt( p0 * ( 1-p0 ) / n ) ), -3 );
		let areaData;
		let areaData2;
		let probFormula;
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
			n, p0, phat, pStat,
			areaData, areaData2,
			pdfData, probFormula
		};
		this.setState( newState );
	}

	onDirectionChange = ( pos ) => {
		let areaData;
		let areaData2;
		let probFormula;
		let { pStat } = this.state;
		switch ( pos ) {
		case 1:
			areaData = linspace( -3, pStat, 200 ).map( d => {
				return { x: d, y: dnorm( d, 0, 1 ) };
			});
			probFormula = `P( Z < ${pStat}) = ${roundn( pnorm( pStat, 0, 1 ), -3 )}`;
			break;
		case 0:
			areaData = linspace( pStat, 3, 200 ).map( d => {
				return { x: d, y: dnorm( d, 0, 1 ) };
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
			probFormula = `P( |Z| > ${pStat}) = ${roundn( 1-pnorm( abs( pStat ), 0, 1 ) + pnorm( -abs( pStat ), 0, 1 ), -3 )}`;
			break;
		}
		this.setState({
			type: pos,
			probFormula,
			areaData, areaData2
		});
	}

	render() {
		return (
			<Grid>
				<Row>
					<Col md={6}>
						<Dashboard title="Parameters" maxWidth={1600} autoUpdate onGenerate={this.onGenerate} >
							<Well>
								<NumberInput
									legend="Hypothesized proportion (null hypothesis)"
									defaultValue={this.state.p0}
									step={0.001}
									min={0.001}
									max={0.999}
								/>
							</Well>
							Let's assume that we have observed data with the following characteristics:
							<Well>
								<NumberInput
									legend="Sample proportion"
									defaultValue={this.state.phat}
									step={0.001}
									min={0}
									max={1}
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
								<TeX displayMode tag="" raw={`H_0: p \\le ${this.state.p0} \\; vs. \\; H_1: p > ${this.state.p0}`} />
								<TeX displayMode tag="" raw={`H_0: p \\ge ${this.state.p0} \\; vs. \\; H_1: p < ${this.state.p0}`} />
								<TeX displayMode tag="" raw={`H_0: p = ${this.state.p0} \\; vs. \\; H_1: p \\ne ${this.state.p0}`} />
							</Switch>
							<p>We calculate the following test statistic:</p>
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
						</Dashboard>
					</Col>
					<Col md={6}>
						<Panel title="Test Result">
							<p>Plugging in our values, we have:</p>
							<TeX
								tag=""
								displayMode
								raw={`z  = \\frac{${this.state.phat} - ${this.state.p0}}{\\sqrt{${roundn( this.state.p0*( 1-this.state.p0 )/this.state.n, -3 )}}} = ${this.state.pStat}`}
							/>
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
