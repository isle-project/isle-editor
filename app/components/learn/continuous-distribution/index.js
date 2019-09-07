// MODULES //

import React, { Component } from 'react';
import Alert from 'react-bootstrap/Alert';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { VictoryArea, VictoryAxis, VictoryChart, VictoryLine, VictoryTheme } from 'victory';
import round from '@stdlib/math/base/special/round';
import sqrt from '@stdlib/math/base/special/sqrt';
import exp from '@stdlib/math/base/special/exp';
import pow from '@stdlib/math/base/special/pow';
import ln from '@stdlib/math/base/special/ln';
import roundn from '@stdlib/math/base/special/roundn';
import papplyRight from '@stdlib/utils/papply-right';
import replace from '@stdlib/string/replace';
import linspace from '@stdlib/math/utils/linspace';
import isError from '@stdlib/assert/is-error';
import PINF from '@stdlib/constants/math/float64-pinf';
import NINF from '@stdlib/constants/math/float64-ninf';
import bifurcateBy from '@stdlib/utils/bifurcate-by';
import Panel from 'components/panel';
import NumberInput from 'components/input/number';
import TextInput from 'components/input/text';
import TeX from 'components/tex';
import FUNCTION_KEYS from './function_keys.json';
import integrate from './integrate_simpson.js';


// VARIABLES //

const FUNCTIONS = [
	exp,
	ln,
	pow,
	round,
	sqrt
];
const RE_POWER = /(\S+)\^(\S+)/g;
const RE_LAST_EXPRESSION = /(?:^|\n)([^\n]*)$/;


// FUNCTIONS //

function generateValues( code, lowerX, upperX, xval, lowerRange, upperRange ) {
	try {
		code = replace( code, RE_LAST_EXPRESSION, '\nreturn $1' );
		code = replace( code, RE_POWER, 'pow($1, $2)' );
		let fcn = new Function( 'x', ...FUNCTION_KEYS, code ); // eslint-disable-line no-new-func
		fcn = papplyRight( fcn, ...FUNCTIONS );
		const normalizingConstant = integrate( fcn, lowerX, upperX, 600 );
		const x = linspace( lowerX - 1, upperX + 1, 600 );
		const data = new Array( x.length );
		let hasNegativeValues = false;
		let maxY = NINF;
		let minY = PINF;
		const pdf = ( x ) => {
			let y;
			if ( x < lowerX || x > upperX ) {
				y = 0.0;
			} else {
				y = fcn( x ) / normalizingConstant;
			}
			return y;
		};
		for ( let i = 0; i < x.length; i++ ) {
			let y = pdf( x[ i ] );
			if ( y < minY ) {
				minY = y;
			}
			if ( y > maxY ) {
				maxY = y;
			}
			data[ i ] = {
				x: x[ i ],
				y: y
			};
			if ( data[ i ].y < 0 ) {
				hasNegativeValues = true;
			}
		}
		const lowerProb = integrate( pdf, lowerX, xval, 600 );
		const [ xLowerArea, xUpperArea ] = bifurcateBy( data, o => o.x < xval );
		const rangeProb = integrate( pdf, lowerRange, upperRange, 600 );
		const rangeArea = data.filter( o => lowerRange <= o.x && o.x <= upperRange );
		return {
			hasNegativeValues,
			normalizingConstant,
			data,
			minY,
			maxY,
			pdf,
			lowerProb,
			upperProb: 1.0 - lowerProb,
			xLowerArea,
			xUpperArea,
			rangeProb,
			rangeArea
		};
	} catch ( err ) {
		return err;
	}
}

function generateLaTeX( code ) {
	let out = replace( code, '*', ' \\cdot ' );
	out = replace( out, 'exp', ' \\operatorname{exp} ' );
	out = replace( out, 'ln', ' \\operatorname{ln} ' );
	out = replace( out, 'sqrt', ' \\operatorname{sqrt} ' );
	return out;
}


// MAIN //

class ContinuousDistributions extends Component {
	constructor( props ) {
		super( props );

		const lowerX = -2;
		const upperX = 2;
		const xval = lowerX;
		const lowerRange = -1;
		const upperRange = 1;
		const out = generateValues( 'x^2', lowerX, upperX, xval, lowerRange, upperRange );
		this.state = {
			code: 'x^2',
			lowerX,
			upperX,
			...out,
			lowerRange,
			upperRange,
			xval,
			disableTabs: false
		};
	}

	handlePDFChange = ( code ) => {
		const { lowerX, upperX, xval, lowerRange, upperRange } = this.state;
		const out = generateValues( code, lowerX, upperX, xval, lowerRange, upperRange );
		if ( isError( out ) ) {
			this.setState({
				encounteredError: out
			});
		}
		this.setState({
			code, ...out, encounteredError: null
		});
	}

	setUpperDomain = ( upper ) => {
		const { code, lowerX, xval, lowerRange, upperRange } = this.state;
		const out = generateValues( code, lowerX, upper, xval, lowerRange, upperRange );
		if ( isError( out ) ) {
			this.setState({
				encounteredError: out
			});
		}
		this.setState({
			upperX: upper, ...out, encounteredError: null
		});
	}

	setLowerDomain = ( lower ) => {
		const { code, upperX, xval, lowerRange, upperRange } = this.state;
		const out = generateValues( code, lower, upperX, xval, lowerRange, upperRange );
		if ( isError( out ) ) {
			this.setState({
				encounteredError: out
			});
		}
		this.setState({
			lowerX: lower, ...out, encounteredError: null
		});
	}

	handlePopover = ( status ) => {
		this.setState({
			disableTabs: status
		});
	}

	renderGenerate() {
		let eqn = `f(x) = \\begin{cases} \\frac{1}{${roundn( this.state.normalizingConstant, -4 )}}`;
		eqn += `\\; ${generateLaTeX( this.state.code )}`;
		eqn += `& \\text{ for } x \\in [ ${this.state.lowerX}, ${this.state.upperX} ] \\\\ 0 & \\text{ otherwise } \\end{cases}`;
		return (
			<div>
				<NumberInput
					legend="Lower bound"
					defaultValue={this.state.lowerX}
					step={0.1}
					onChange={this.setLowerDomain}
					max={this.state.upperX}
					width={120}
				/>
				<NumberInput
					legend="Upper bound"
					defaultValue={this.state.upperX}
					step={0.1}
					onChange={this.setUpperDomain}
					min={this.state.lowerX}
					width={120}
				/>
				<TextInput
					ref={div => { this.textarea = div; }}
					legend="(non-normalized) PDF f(x)"
					placeholder="Enter formula..."
					defaultValue={this.state.code}
					onChange={this.handlePDFChange}
					width={250}
				/>
				<h4>Normalized PDF:</h4>
				<TeX
					raw={eqn}
					displayMode
					style={{ fontSize: 24 }}
				/>
			</div>
		);
	}

	renderTabs() {
		if ( this.state.encounteredError ) {
			return <Alert variant="error" >{this.state.encounteredError.message}</Alert>;
		}
		if ( this.state.hasNegativeValues ) {
			return <Alert variant="warning" >The supplied function can not yield valid PDF as it does take on negative values.</Alert>;
		}
		return (
			<Tabs defaultActiveKey={1} id="continuous-distribution-tabs">
				<Tab eventKey={1} title={<TeX raw="P(X \le x_0)" />} disabled={this.state.disableTabs} >
					<Panel header="Probability Density Function (PDF)">
						<TeX raw={`P( X \\le x = ${this.state.xval}) = ${this.state.lowerProb.toFixed( 3 )}`}
							elems={{
								x: {
									variable: 'x',
									onChange: ( xval ) => {
										const lowerProb = integrate( this.state.pdf, this.state.lowerX, xval, 600 );
										const [ xLowerArea, xUpperArea ] = bifurcateBy( this.state.data, o => o.x < xval );
										this.setState({
											lowerProb,
											xval,
											xLowerArea,
											xUpperArea
										});
									},
									defaultValue: this.state.x,
									tooltip: 'Click to change value'
								}
							}}
							displayMode onPopover={this.handlePopover}
						/>
						<VictoryChart domain={{
							x: [ this.state.lowerX - 1, this.state.upperX + 1 ],
							y: [ this.state.minY - 0.2, this.state.maxY + 0.2 ]
						}} theme={VictoryTheme.material} >
							<VictoryAxis />
							<VictoryAxis dependentAxis tickFormat={( x ) => roundn( x, -3 )} />
							<VictoryLine data={this.state.data} x="x" y="y" />
							<VictoryArea
								data={this.state.xLowerArea}
								style={{
									data: {
										opacity: 0.3,
										fill: 'tomato'
									}
								}}
							/>
						</VictoryChart>
					</Panel>
				</Tab>
				<Tab eventKey={2} title={<TeX raw="P(X > x_0)" />} disabled={this.state.disableTabs} >
					<Panel header="Probability Density Function (PDF)">
						<TeX raw={`P( X > x = ${this.state.xval}) = ${(1-this.state.lowerProb).toFixed( 3 )}`}
							elems={{
								x: {
									variable: 'x',
									onChange: ( xval ) => {
										const upperProb = integrate( this.state.pdf, xval, this.state.upperX, 600 );
										const [ xLowerArea, xUpperArea ] = bifurcateBy( this.state.data, o => o.x < xval );
										this.setState({
											lowerProb: 1.0 - upperProb,
											xval,
											xLowerArea,
											xUpperArea
										});
									},
									defaultValue: this.state.x,
									tooltip: 'Click to change value'
								}
							}}
							displayMode onPopover={this.handlePopover}
						/>
						<VictoryChart theme={VictoryTheme.material} domain={{
							x: [ this.state.lowerX - 1, this.state.upperX + 1 ],
							y: [ this.state.minY - 0.2, this.state.maxY + 0.2 ]
						}} >
							<VictoryAxis />
							<VictoryAxis dependentAxis tickFormat={( x ) => roundn( x, -3 )} />
							<VictoryLine data={this.state.data} x="x" y="y" />
							<VictoryArea
								data={this.state.xUpperArea}
								style={{
									data: {
										opacity: 0.3,
										fill: 'tomato'
									}
								}}
							/>
						</VictoryChart>
					</Panel>
				</Tab>
				<Tab eventKey={3} title={<TeX raw="P( x_0 \le X \le x_1)" />} disabled={this.state.disableTabs} >
					<Panel header="Probability Density Function (PDF)">
						<TeX raw={`P( L = ${this.state.lowerRange} \\le X \\le U = ${this.state.upperRange}) = ${this.state.rangeProb.toFixed( 3 )}`} elems={{
							L: {
								variable: 'L',
								onChange: ( lowerRange ) => {
									const rangeProb = integrate( this.state.pdf, lowerRange, this.state.upperRange, 600 );
									const rangeArea = this.state.data.filter( o => lowerRange <= o.x && o.x <= this.state.upperRange );
									this.setState({
										rangeArea,
										rangeProb,
										lowerRange
									});
								},
								defaultValue: this.state.lower,
								tooltip: 'Click to change lower value'
							},
							U: {
								variable: 'U',
								onChange: ( upperRange ) => {
									const rangeProb = integrate( this.state.pdf, this.state.lowerRange, upperRange, 600 );
									const rangeArea = this.state.data.filter( o => this.state.lowerRange <= o.x && o.x <= upperRange );
									this.setState({
										rangeArea,
										rangeProb,
										upperRange
									});
								},
								defaultValue: this.state.upper,
								tooltip: 'Click to change upper value'
							}
						}} displayMode onPopover={this.handlePopover} />
						<VictoryChart domain={{
							x: [ this.state.lowerX - 1, this.state.upperX + 1 ],
							y: [ this.state.minY - 0.2, this.state.maxY + 0.2 ]
						}} theme={VictoryTheme.material} >
							<VictoryAxis />
							<VictoryAxis dependentAxis tickFormat={( x ) => roundn( x, -3 )} />
							<VictoryLine data={this.state.data} x="x" y="y" />
							<VictoryArea
								data={this.state.rangeArea}
								style={{
									data: {
										opacity: 0.3,
										fill: 'tomato'
									}
								}}
							/>
						</VictoryChart>
					</Panel>
				</Tab>
			</Tabs>
		);
	}

	render() {
		return (
			<Card style={{ maxWidth: 1200, margin: '10px auto' }}>
				<Card.Header as="h2">
					Continuous Distribution Probabilities
				</Card.Header>
				<Card.Body>
					<Container>
						<Row>
							<Col md={6}>
								{this.renderGenerate()}
							</Col>
							<Col md={6}>
								{this.renderTabs()}
							</Col>
						</Row>
					</Container>
				</Card.Body>
			</Card>
		);
	}
}

// EXPORTS //

export default ContinuousDistributions;
