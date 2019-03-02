// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import noop from '@stdlib/utils/noop';
import Draggable from 'react-draggable';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Panel from 'components/panel';
import TeX from 'components/tex';
import FormControl from 'react-bootstrap/FormControl';
import SessionContext from 'session/context.js';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CopyToClipboard from 'react-copy-to-clipboard';
import isDigitString from '@stdlib/assert/is-digit-string';
import startsWith from '@stdlib/string/starts-with';
import PI from '@stdlib/constants/math/float64-pi';
import E from '@stdlib/constants/math/float64-e';
import replace from '@stdlib/string/replace';
import evaluate from './shunting_yard';
import logger from 'debug';
import './calculator.css';


// VARIABLES //

const debug = logger( 'isle:calculator' );
const RE_SPLIT_KEY = /([() +\-/*^!])/;
const RE_OPERATOR = /[+\-/*^!]/;


// MAIN //

class Calculator extends Component {
	/**
	* Constructor function
	*/
	constructor( props ) {
		super( props );

		this.state = {
			visible: '0',
			showFull: false,
			answer: 0
		};
	}

	clearEquation = () => {
		if ( this.state.visible === '0' ) {
			this.setState({
				answer: 0
			});
		} else {
			this.setState({
				visible: '0'
			});
		}
	}

	clearLast = () => {
		let visible = this.state.visible;
		if ( visible.length === 1 ) {
			this.setState({
				visible: '0'
			});
		} else {
			visible = visible.substring( 0, visible.length - 1 );
			this.setState({
				visible
			});
		}
	}

	toggleFullDisplay = () => {
		this.setState({
			showFull: !this.state.showFull
		});
	}

	onClickFactory = ( val ) => {
		return () => {
			let vis = this.state.visible;
			if ( vis === '0' ) {
				this.setState({
					visible: val
				});
			} else {
				const pos = this.textInput.selectionStart;
				vis = vis.substring( 0, pos ) + val + vis.substring( pos );
				this.setState({
					visible: vis
				});
			}
			this.textInput.focus();
		};
	}

	onClickNumberFactory = (val) => {
		return () => {
			let vis = this.state.visible;
			if ( vis === '0' || this.state.answer === this.state.visible ) {
				this.setState({
					visible: val
				}, () => {
					this.textInput.focus();
				});
			} else {
				let pos = this.textInput.selectionStart;
				vis = vis.substring( 0, pos ) + val + vis.substring( pos );
				this.setState({
					visible: vis
				}, () => {
					pos += 1;
					this.textInput.setSelectionRange( pos, pos );
					this.textInput.focus();
				});
			}
		};
	}

	onClickWrapFactory = ( val ) => {
		return () => {
			const vis = this.state.visible;
			if ( vis === '0' ) {
				this.setState({
					visible: val + '()'
				}, () => {
					const pos = this.state.visible.length - 1;
					this.textInput.setSelectionRange( pos, pos );
				});
			} else if ( RE_OPERATOR.test( vis ) && !startsWith( vis, '-' ) ) {
				this.setState({
					visible: vis + ' ' + val + '()'
				}, () => {
					const pos = this.state.visible.length - 1;
					this.textInput.setSelectionRange( pos, pos );
				});
			} else {
				this.setState({
					visible: val + '(' + vis + ')'
				}, () => {
					const pos = this.state.visible.length;
					this.textInput.setSelectionRange( pos, pos );
				});
			}
			this.textInput.focus();
		};
	}

	handleTypeChange = ( event ) => {
		this.setState({
			visible: event.target.value
		});
	}

	handleKeyPress = ( event ) => {
		if ( event.charCode === 13 ) {
			this.solveEq( event );
		}
	}

	solveEq = () => {
		let visible = this.state.visible;
		if ( !visible ) {
			return;
		}
		if ( isDigitString( visible ) ) {
			this.setState({
				answer: visible
			});
		}
		// Handle unary operators:
		visible = replace( visible, /(^|[(*/:^!+]) *-([^+\-/*^!]+)/g, '$1 (0-$2) ' );
		visible = replace( visible, /(^|[(*/:^!+]) *\+/g, '$1 ' );

		// Log equation:
		const session = this.context;
		session.log({
			id: this.props.id,
			type: 'CALCULATOR_SOLVE',
			value: visible
		});
		let keys = visible.split( RE_SPLIT_KEY );
		keys = keys.filter( e => e !== '' );
		const val = String( evaluate( keys ) );
		this.setState({
			visible: val,
			answer: val
		});
		this.textInput.focus();
	}

	renderHeader() {
		return (
			<span>
				Calculator
				{ this.props.onHide ?
					<span className="calc-hide-button fa fa-times" onClick={this.props.onHide} /> :
					null
				}
			</span>
		);
	}

	renderFull = () => {
		debug( 'Rendering expanded calculator...' );
		return (
			<Draggable bounds="#Lesson" cancel="#calc-text-area" >
				<div className="outer-calc" style={this.props.style}>
					<Panel id="calc-panel-full" header={this.renderHeader()}>
						<Container className="desaturated" >
							<FormControl
								type="text" id="calc-text-area"
								value={String(this.state.visible)}
								onChange={this.handleTypeChange}
								ref={( div ) => { this.textInput = div; }}
								onKeyPress={this.handleKeyPress}
							/>
							<p>Answer = {this.state.answer}</p>
							<Row>
								<Col>
									<Row>
										<Button variant="info" className="input-button-full" onClick={this.onClickWrapFactory('inv')} >x<sup>-1</sup></Button>
										<Button variant="info" className="input-button-full" onClick={this.onClickWrapFactory('abs')} >&#124;x&#124;</Button>
										<Button variant="info" className="input-button-full" onClick={this.onClickFactory(' choose ')} ><TeX style={{ color: 'white' }} raw="\tbinom{n}{k}" /></Button>
										<Button variant="light" className="input-button-full" onClick={this.onClickFactory('(')} >(</Button>
										<Button variant="light" className="input-button-full" onClick={this.onClickFactory(')')} >)</Button>
										<CopyToClipboard text={this.state.answer}>
											<Button variant="warning" className="input-button-full" onClick={noop} >Copy</Button>
										</CopyToClipboard>
										<Button variant="warning" className="input-button-full" onClick={this.toggleFullDisplay} >Basic</Button>
									</Row>
									<Row>
										<Button variant="info" className="input-button-full" onClick={this.onClickWrapFactory('sin')} >sin(x)</Button>
										<Button variant="info" className="input-button-full" onClick={this.onClickWrapFactory('exp')} >e<sup>x</sup></Button>
										<Button variant="info" className="input-button-full" onClick={this.onClickWrapFactory('sqrt')}>&radic;</Button>
										<Button variant="dark" className="input-button-full" onClick={this.onClickNumberFactory('7')} >7</Button>
										<Button variant="dark" className="input-button-full" onClick={this.onClickNumberFactory('8')} >8</Button>
										<Button variant="dark" className="input-button-full" onClick={this.onClickNumberFactory('9')} >9</Button>
										<Button variant="info" className="input-button-full" onClick={this.onClickFactory('/')} >&#xF7;</Button>
									</Row>
									<Row>
										<Button variant="info" className="input-button-full" onClick={this.onClickWrapFactory('cos')} >cos(x)</Button>
										<Button variant="info" className="input-button-full" onClick={this.onClickWrapFactory('ln')} >ln(x)</Button>
										<Button variant="info" className="input-button-full" onClick={this.onClickFactory('^(1/')} ><sup>n</sup>&radic;</Button>
										<Button variant="dark" className="input-button-full" onClick={this.onClickNumberFactory('4')} >4</Button>
										<Button variant="dark" className="input-button-full" onClick={this.onClickNumberFactory('5')} >5</Button>
										<Button variant="dark" className="input-button-full" onClick={this.onClickNumberFactory('6')} >6</Button>
										<Button variant="info" className="input-button-full" onClick={this.onClickFactory('*')} >&#215;</Button>
									</Row>
									<Row>
										<Button variant="info" className="input-button-full" onClick={this.onClickWrapFactory('tan')} >tan(x)</Button>
										<Button variant="info" className="input-button-full" onClick={this.onClickWrapFactory('log10')} >log10(x)</Button>
										<Button variant="info" className="input-button-full" onClick={this.onClickFactory('^')} >x<sup>y</sup></Button>
										<Button variant="dark" className="input-button-full" onClick={this.onClickNumberFactory('1')} >1</Button>
										<Button variant="dark" className="input-button-full" onClick={this.onClickNumberFactory('2')} >2</Button>
										<Button variant="dark" className="input-button-full" onClick={this.onClickNumberFactory('3')} >3</Button>
										<Button variant="info" className="input-button-full" onClick={this.onClickFactory('-')} >-</Button>
									</Row>
									<Row>
										<Button variant="info" className="input-button-full" onClick={this.onClickFactory( PI )} >&pi;</Button>
										<Button variant="info" className="input-button-full" onClick={this.onClickFactory(' log ')} >log<sub>b</sub>(x)</Button>
										<Button variant="info" className="input-button-full" onClick={this.onClickFactory('!')} >x!</Button>
										<Button variant="dark" className="input-button-full" onClick={this.onClickNumberFactory(String(this.state.answer))} >Ans</Button>
										<Button variant="dark" className="input-button-full" onClick={this.onClickNumberFactory('0')} >0</Button>
										<Button variant="dark" className="input-button-full" onClick={this.onClickFactory('.')} >.</Button>
										<Button variant="info" className="input-button-full" onClick={this.onClickFactory('+')} >+</Button>
									</Row>
									<Row>
										<Button variant="info" className="input-button-full" onClick={this.onClickFactory( E )} >e</Button>
										<Button variant="danger" className="input-button-full" onClick={this.clearLast} >CE</Button>
										<Button variant="danger" className="input-button-full" onClick={this.clearEquation} >AC</Button>
										<Button variant="success" className="solve-button" onClick={this.solveEq} >=</Button>
									</Row>
								</Col>
							</Row>
						</Container>
					</Panel>
				</div>
			</Draggable>
		);
	}

	/**
	* React component render method
	*/
	render() {
		if ( !this.props.show ) {
			return null;
		}
		if ( this.state.showFull ) {
			return this.renderFull();
		}
		return (
			<Draggable bounds="#Lesson" enableUserSelectHack={false} cancel="#calc-text-area" >
				<div className="outer-calc" style={this.props.style} >
					<Panel
						id="calc-panel"
						header={this.renderHeader()}
					>
						<Container className="desaturated" >
							<FormControl
								type="text" id="calc-text-area"
								value={String(this.state.visible)}
								onChange={this.handleTypeChange}
								ref={( div ) => { this.textInput = div; }}
								onKeyPress={this.handleKeyPress}
							/>
							<p>Answer = {this.state.answer}</p>
							<Row>
								<Col>
									<Row>
										<Button variant="light" className="input-button-small" onClick={this.onClickFactory('(')} >(</Button>
										<Button variant="light" className="input-button-small" onClick={this.onClickFactory(')')} >)</Button>
										<CopyToClipboard text={this.state.answer}>
											<Button variant="warning" className="input-button-small" onClick={noop} >Copy</Button>
										</CopyToClipboard>
										<Button variant="warning" disabled={!this.props.expandable} className="input-button-small" onClick={this.toggleFullDisplay} >Expand</Button>
									</Row>
									<Row>
										<Button variant="dark" className="input-button-small" onClick={this.onClickNumberFactory('7')} >7</Button>
										<Button variant="dark" className="input-button-small" onClick={this.onClickNumberFactory('8')} >8</Button>
										<Button variant="dark" className="input-button-small" onClick={this.onClickNumberFactory('9')} >9</Button>
										<Button variant="info" className="input-button-small" onClick={this.onClickFactory('/')} >&#xF7;</Button>
									</Row>
									<Row>
										<Button variant="dark" className="input-button-small" onClick={this.onClickNumberFactory('4')} >4</Button>
										<Button variant="dark" className="input-button-small" onClick={this.onClickNumberFactory('5')} >5</Button>
										<Button variant="dark" className="input-button-small" onClick={this.onClickNumberFactory('6')} >6</Button>
										<Button variant="info" className="input-button-small" onClick={this.onClickFactory('*')} >&#215;</Button>
									</Row>
									<Row>
										<Button variant="dark" className="input-button-small" onClick={this.onClickNumberFactory('1')} >1</Button>
										<Button variant="dark" className="input-button-small" onClick={this.onClickNumberFactory('2')} >2</Button>
										<Button variant="dark" className="input-button-small" onClick={this.onClickNumberFactory('3')} >3</Button>
										<Button variant="info" className="input-button-small" onClick={this.onClickFactory('-')} >-</Button>
									</Row>
									<Row>
										<Button variant="dark" className="input-button-small" onClick={this.onClickNumberFactory(String(this.state.answer))} >Ans</Button>
										<Button variant="dark" className="input-button-small" onClick={this.onClickNumberFactory('0')} >0</Button>
										<Button variant="dark" className="input-button-small" onClick={this.onClickFactory('.')} >.</Button>
										<Button variant="info" className="input-button-small" onClick={this.onClickFactory('+')} >+</Button>
									</Row>
									<Row>
										<Button variant="danger" className="input-button-small" onClick={this.clearLast} >CE</Button>
										<Button variant="danger" className="input-button-small" onClick={this.clearEquation} >AC</Button>
										<Button variant="success" className="half-button" onClick={this.solveEq} >=</Button>
									</Row>
								</Col>
							</Row>
						</Container>
					</Panel>
				</div>
			</Draggable>
		);
	}
}


// PROPERTIES //

Calculator.defaultProps = {
	expandable: true,
	show: true,
	style: {},
	onHide: null
};

Calculator.propTypes = {
	expandable: PropTypes.bool,
	show: PropTypes.bool,
	style: PropTypes.object,
	onHide: PropTypes.func
};

Calculator.contextType = SessionContext;


// EXPORTS //

export default Calculator;
