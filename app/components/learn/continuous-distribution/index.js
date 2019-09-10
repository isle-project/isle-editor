// MODULES //

import React, { Component, Fragment } from 'react';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { VictoryArea, VictoryAxis, VictoryChart, VictoryLine, VictoryTheme } from 'victory';
import sqrt from '@stdlib/math/base/special/sqrt';
import exp from '@stdlib/math/base/special/exp';
import pow from '@stdlib/math/base/special/pow';
import ln from '@stdlib/math/base/special/ln';
import roundn from '@stdlib/math/base/special/roundn';
import papplyRight from '@stdlib/utils/papply-right';
import replace from '@stdlib/string/replace';
import linspace from '@stdlib/math/utils/linspace';
import isError from '@stdlib/assert/is-error';
import isFiniteNumber from '@stdlib/assert/is-finite';
import isEmptyString from '@stdlib/assert/is-empty-string';
import PINF from '@stdlib/constants/math/float64-pinf';
import NINF from '@stdlib/constants/math/float64-ninf';
import bifurcateBy from '@stdlib/utils/bifurcate-by';
import contains from '@stdlib/assert/contains';
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
	sqrt
];
const RE_POWER = /([\S]+)\^([\S]+)/g;
const RE_LAST_EXPRESSION = /(?:^|\n)([^\n]*)$/;


// FUNCTIONS //

function powerReplacer( match, p1, p2 ) {
	if ( contains( p1, '^' ) ) {
		p1 = replace( p1, RE_POWER, powerReplacer );
	}
	if ( contains( p2, '^' ) ) {
		p2 = replace( p2, RE_POWER, powerReplacer );
	}
	return `pow( ${p1}, ${p2})`;
}

function powerEqnReplacer( match, p1, p2 ) {
	if ( contains( p1, '^' ) ) {
		p1 = replace( p1, RE_POWER, powerEqnReplacer );
	}
	if ( contains( p2, '^' ) ) {
		p2 = replace( p2, RE_POWER, powerEqnReplacer );
	}
	return `{${p1}}^{${p2}}`;
}

function generateValues( code, lowerX, upperX, xval, lowerRange, upperRange ) {
	try {
		code = replace( code, RE_LAST_EXPRESSION, '\nreturn $1' );
		code = replace( code, RE_POWER, powerReplacer );
		let fcn = new Function( 'x', ...FUNCTION_KEYS, code ); // eslint-disable-line no-new-func
		fcn = papplyRight( fcn, ...FUNCTIONS );
		const normalizingConstant = integrate( fcn, lowerX, upperX, 1e-4 );
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
		const lowerProb = integrate( pdf, lowerX, xval, 1e-4 );
		const [ xLowerArea, xUpperArea ] = bifurcateBy( data, o => o.x < xval );
		const rangeProb = integrate( pdf, lowerRange, upperRange, 1e-4 );
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
	let out = replace( code, RE_POWER, powerEqnReplacer );
	out = replace( out, '*', ' \\cdot ' );
	out = replace( out, /([+-/])/g, ' $1 ' );
	out = replace( out, 'exp', ' \\operatorname{exp} ' );
	out = replace( out, 'ln', ' \\operatorname{ln} ' );
	out = replace( out, /sqrt\(([^)]+)\)/g, ' \\sqrt{$1}' );
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
			disableTabs: false,
			selection: 3
		};
	}

	insertLiteralFactory = ( operator ) => {
		return () => {
			let newCode = this.state.code.substring( 0, this.state.selection );
			const replacement = operator;
			newCode += replacement;
			newCode += this.state.code.substring( this.state.selection );
			this.setState({
				selection: this.state.selection + replacement.length
			}, () => {
				this.handlePDFChange( newCode );
			});
		};
	}

	insertFuncFactory = ( funcName ) => {
		return () => {
			let newCode = this.state.code.substring( 0, this.state.selection );
			const replacement = ' '+funcName+'()';
			newCode += replacement;
			newCode += this.state.code.substring( this.state.selection );
			this.setState({
				code: newCode,
				selection: this.state.selection + replacement.length - 1
			});
		};
	}

	handlePDFChange = ( code ) => {
		if ( isEmptyString( code ) ) {
			return this.setState({
				encounteredError: new Error( 'Function cannot be empty '),
				code: '',
				selection: 0
			});
		}
		const { lowerX, upperX, xval, lowerRange, upperRange } = this.state;
		const out = generateValues( code, lowerX, upperX, xval, lowerRange, upperRange );
		if ( isError( out ) ) {
			return this.setState({
				code,
				encounteredError: out
			});
		}
		if ( !isFiniteNumber( out.normalizingConstant ) ) {
			return this.setState({
				code,
				encounteredError: new Error( 'Integration failed.' )
			});
		}
		this.setState({
			code, ...out, encounteredError: null
		});
	}

	setUpperDomain = ( upper ) => {
		const { code, lowerX, xval, lowerRange, upperRange } = this.state;
		if ( upper <= lowerX ) {
			return this.setState({
				upperX: upper,
				encounteredError: new Error( 'Upper bound must be larger than lower bound.' )
			});
		}
		const out = generateValues( code, lowerX, upper, xval, lowerRange, upperRange );
		if ( isError( out ) ) {
			return this.setState({
				upperX: upper,
				encounteredError: out
			});
		}
		if ( !isFiniteNumber( out.normalizingConstant ) ) {
			return this.setState({
				upperX: upper,
				encounteredError: new Error( 'Integration failed.' )
			});
		}
		this.setState({
			upperX: upper, ...out, encounteredError: null
		});
	}

	setLowerDomain = ( lower ) => {
		const { code, upperX, xval, lowerRange, upperRange } = this.state;
		if ( lower >= upperX ) {
			return this.setState({
				lowerX: lower,
				encounteredError: new Error( 'Lower bound must be smaller than upper bound.' )
			});
		}
		const out = generateValues( code, lower, upperX, xval, lowerRange, upperRange );
		if ( isError( out ) ) {
			return this.setState({
				lowerX: lower,
				encounteredError: out
			});
		}
		if ( !isFiniteNumber( out.normalizingConstant ) ) {
			return this.setState({
				lowerX: lower,
				encounteredError: new Error( 'Integration failed.' )
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

	renderEquation() {
		let eqn = `f(x) = \\begin{cases} \\frac{1}{${roundn( this.state.normalizingConstant, -4 )}} \\cdot`;
		eqn += `\\left( ${generateLaTeX( this.state.code )} \\right)`;
		eqn += `& \\text{ for } x \\in [ ${this.state.lowerX}, ${this.state.upperX} ] \\\\ 0 & \\text{ otherwise } \\end{cases}`;
		return (
			<Fragment>
				<h4>Normalized PDF:</h4>
				<TeX
					raw={eqn}
					displayMode
					style={{ fontSize: 24 }}
				/>
			</Fragment>
		);
	}

	renderGenerate() {
		return (
			<div>
				<NumberInput
					legend="Lower bound"
					value={this.state.lowerX}
					step={0.1}
					onChange={this.setLowerDomain}
					max={this.state.upperX}
					width={120}
				/>
				<NumberInput
					legend="Upper bound"
					value={this.state.upperX}
					step={0.1}
					onChange={this.setUpperDomain}
					min={this.state.lowerX}
					width={120}
				/>
				<Panel>
					<ButtonToolbar style={{ marginBottom: 5 }} >
						<ButtonGroup size="sm" className="mr-2" >
							<Button variant="light" onClick={this.insertLiteralFactory('x')} >x</Button>
						</ButtonGroup>
						<ButtonGroup size="sm" className="mr-10">
							<Button variant="light" size="sm" onClick={() => {
								this.handlePDFChange( 'x^2' );
								this.setState({
									selection: 3
								});
							}} >Reset</Button>
							<Button variant="light" size="sm" onClick={() => {
								let newCode = this.state.code.substring( 0, this.state.selection - 1 );
								newCode += this.state.code.substring( this.state.selection );
								this.handlePDFChange( newCode );
								this.setState({
									selection: this.state.selection - 1
								});
							}} >&#9003;</Button>
						</ButtonGroup>
					</ButtonToolbar>
					<ButtonToolbar style={{ marginBottom: 5 }} >
						<ButtonGroup size="sm" className="mr-10" >
							<Button variant="light" onClick={this.insertLiteralFactory('0')} >0</Button>
							<Button variant="light" onClick={this.insertLiteralFactory('1')} >1</Button>
							<Button variant="light" onClick={this.insertLiteralFactory('2')} >2</Button>
							<Button variant="light" onClick={this.insertLiteralFactory('3')} >3</Button>
							<Button variant="light" onClick={this.insertLiteralFactory('4')} >4</Button>
							<Button variant="light" onClick={this.insertLiteralFactory('5')} >5</Button>
							<Button variant="light" onClick={this.insertLiteralFactory('6')} >6</Button>
							<Button variant="light" onClick={this.insertLiteralFactory('7')} >7</Button>
							<Button variant="light" onClick={this.insertLiteralFactory('8')} >8</Button>
							<Button variant="light" onClick={this.insertLiteralFactory('9')} >9</Button>
						</ButtonGroup>
						<ButtonGroup size="sm" className="mr-2" >
							<Button variant="light" onClick={this.insertLiteralFactory('.')} >.</Button>
						</ButtonGroup>
					</ButtonToolbar>
					<ButtonToolbar style={{ marginBottom: 5 }} >
						<ButtonGroup size="sm" className="mr-2" >
							<Button variant="light" onClick={this.insertLiteralFactory(' + ')} >+</Button>
							<Button variant="light" onClick={this.insertLiteralFactory(' - ')} >-</Button>
							<Button variant="light" onClick={this.insertLiteralFactory(' * ')} >*</Button>
							<Button variant="light" onClick={this.insertLiteralFactory(' / ')} >/</Button>
							<Button variant="light" onClick={this.insertLiteralFactory('^')} >^</Button>
						</ButtonGroup>
						<ButtonGroup>
							{[ 'exp', 'ln', 'sqrt' ].map( ( v, i ) => {
								return <Button variant="light" key={i} onClick={this.insertFuncFactory( v )} >{v}</Button>;
							})}
						</ButtonGroup>
					</ButtonToolbar>
					<TextInput
						ref={div => { this.textarea = div; }}
						legend="(non-normalized) PDF f(x)"
						placeholder="Enter formula..."
						defaultValue={this.state.code}
						onChange={this.handlePDFChange}
						onBlur={( event ) => {
							const selectionStart = event.target.selectionStart;
							this.setState({
								selection: selectionStart
							});
						}}
						width={250}
					/>
				</Panel>
			</div>
		);
	}

	renderTabs() {
		if ( this.state.encounteredError ) {
			return <Alert variant="danger" >{this.state.encounteredError.message}</Alert>;
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
										const lowerProb = integrate( this.state.pdf, this.state.lowerX, xval, 1e-4 );
										const [ xLowerArea, xUpperArea ] = bifurcateBy( this.state.data, o => o.x < xval );
										this.setState({
											lowerProb,
											xval,
											xLowerArea,
											xUpperArea
										});
									},
									defaultValue: this.state.xval,
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
										const upperProb = integrate( this.state.pdf, xval, this.state.upperX, 1e-4 );
										const [ xLowerArea, xUpperArea ] = bifurcateBy( this.state.data, o => o.x < xval );
										this.setState({
											lowerProb: 1.0 - upperProb,
											xval,
											xLowerArea,
											xUpperArea
										});
									},
									defaultValue: this.state.xval,
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
									const rangeProb = integrate( this.state.pdf, lowerRange, this.state.upperRange, 1e-4 );
									const rangeArea = this.state.data.filter( o => lowerRange <= o.x && o.x <= this.state.upperRange );
									this.setState({
										rangeArea,
										rangeProb,
										lowerRange
									});
								},
								defaultValue: this.state.lowerRange,
								tooltip: 'Click to change lower value'
							},
							U: {
								variable: 'U',
								onChange: ( upperRange ) => {
									const rangeProb = integrate( this.state.pdf, this.state.lowerRange, upperRange, 1e-4 );
									const rangeArea = this.state.data.filter( o => this.state.lowerRange <= o.x && o.x <= upperRange );
									this.setState({
										rangeArea,
										rangeProb,
										upperRange
									});
								},
								defaultValue: this.state.upperRange,
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
							{this.renderEquation()}
						</Row>
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
