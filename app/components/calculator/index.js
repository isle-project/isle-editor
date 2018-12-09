// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import noop from '@stdlib/utils/noop';
import Draggable from 'react-draggable';
import Button from 'react-bootstrap/lib/Button';
import Container from 'react-bootstrap/lib/Container';
import Panel from 'components/panel';
import TextArea from 'components/input/text-area';
import SessionContext from 'session/context.js';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import CopyToClipboard from 'react-copy-to-clipboard';
import isDigitString from '@stdlib/assert/is-digit-string';
import PI from '@stdlib/constants/math/float64-pi';
import replace from '@stdlib/string/replace';
import evaluate from './shunting_yard';
import logger from 'debug';
import './calculator.css';


// VARIABLES //

const debug = logger( 'isle:calculator' );
const RE_SPLIT_KEY = /([() +\-/*^!])/;
const RE_OPERATOR = /[+-/*^!]/;


// MAIN //

class Calculator extends Component {
	/**
	* Constructor function
	*/
	constructor( props ) {
		super(props);

		this.state = {
			visible: '0',
			showFull: false,
			answer: 0
		};
	}

	clearEquation = () => {
		if ( this.state.visisble === '0' ) {
			this.setState({
				answer: 0
			});
		} else {
			this.setState({
				visible: '0'
			});
		}
	}

	toggleFullDisplay = () => {
		this.setState({
			showFull: !this.state.showFull
		});
	}

	onClickFactory = (val) => {
		return () => {
			const vis = this.state.visible;
			if ( vis === '0' ) {
				this.setState({
					visible: val
				});
			} else {
				this.setState({
					visible: vis + val
				});
			}
		};
	}

	onClickNumberFactory = (val) => {
		return () => {
			const vis = this.state.visible;
			if ( vis === '0' || this.state.answer === this.state.visible ) {
				this.setState({
					visible: val
				});
			} else {
				this.setState({
					visible: vis + val
				});
			}
		};
	}

	onClickWrapFactory = ( val ) => {
		return () => {
			const vis = this.state.visible;
			if ( vis === '0' ) {
				this.setState({
					visible: val + '('
				});
			} else if ( RE_OPERATOR.test( vis ) ) {
				this.setState({
					visible: vis + ' ' + val + '('
				});
			} else {
				this.setState({
					visible: val + '(' + vis + ')'
				});
			}
		};
	}

	handleTypeChange = ( value ) => {
		this.setState({
			visible: value
		});
	}

	solveEq = () => {
		let visible = this.state.visible;
		if ( !visible || isDigitString( visible ) ) {
			return;
		}
		// Handle unary operators:
		visible = replace( visible, /\( *\+/, '(0+' );
		visible = replace( visible, /\( *-/, '(0-' );
		let keys = visible.split( RE_SPLIT_KEY );
		keys = keys.filter( e => e !== '' );
		const val = evaluate( keys );
		this.setState({
			visible: val,
			answer: val
		});
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
		const bounds = {
			top: 0,
			left: 0,
			right: window.innerWidth,
			bottom: window.innerHeight
		};
		return (
			<Draggable bounds={bounds} cancel="#calc-text-area" >
				<div className="outer-calc" style={this.props.style}>
					<Panel id="calc-panel-full" header={this.renderHeader()}>
						<Container className="desaturated" >
							<TextArea rows={1} id="calc-text-area" value={String(this.state.visible)} onChange={this.handleTypeChange} />
							<p>Answer = {this.state.answer}</p>
							<Row>
								<Col>
									<Row>
										<Button variant="light" className="two-sevenths" onClick={this.onClickFactory('(')} >(</Button>
										<Button variant="light" className="two-sevenths" onClick={this.onClickFactory(')')} >)</Button>
										<Button variant="danger" className="two-sevenths" onClick={this.clearEquation} >C</Button>
										<Button variant="warning" className="input-button-full" onClick={this.toggleFullDisplay} >&#x26F6;</Button>
									</Row>
									<Row>
										<Button variant="info" className="input-button-full" onClick={this.onClickWrapFactory('sin')} >sin(x)</Button>
										<Button variant="info" className="input-button-full" onClick={this.onClickWrapFactory('exp')} >e<sup>x</sup></Button>
										<Button variant="info" className="input-button-full" onClick={this.onClickWrapFactory('sqrt')}>&radic;</Button>
										<Button variant="dark" className="input-button-full" onClick={this.onClickNumberFactory('7')} >7</Button>
										<Button variant="dark" className="input-button-full" onClick={this.onClickNumberFactory('8')} >8</Button>
										<Button variant="dark" className="input-button-full" onClick={this.onClickNumberFactory('9')} >9</Button>
										<Button variant="info" className="input-button-full" onClick={this.onClickFactory('+')} >+</Button>
									</Row>
									<Row>
										<Button variant="info" className="input-button-full" onClick={this.onClickWrapFactory('cos')} >cos(x)</Button>
										<Button variant="info" className="input-button-full" onClick={this.onClickWrapFactory('ln')} >ln(x)</Button>
										<Button variant="info" className="input-button-full" onClick={this.onClickFactory('^(1/')} ><sup>n</sup>&radic;</Button>
										<Button variant="dark" className="input-button-full" onClick={this.onClickNumberFactory('4')} >4</Button>
										<Button variant="dark" className="input-button-full" onClick={this.onClickNumberFactory('5')} >5</Button>
										<Button variant="dark" className="input-button-full" onClick={this.onClickNumberFactory('6')} >6</Button>
										<Button variant="info" className="input-button-full" onClick={this.onClickFactory('-')} >-</Button>
									</Row>
									<Row>
										<Button variant="info" className="input-button-full" onClick={this.onClickWrapFactory('tan')} >tan(x)</Button>
										<Button variant="info" className="input-button-full" onClick={this.onClickWrapFactory('log10')} >log10(x)</Button>
										<Button variant="info" className="input-button-full" onClick={this.onClickFactory('^x')} >x<sup>y</sup></Button>
										<Button variant="dark" className="input-button-full" onClick={this.onClickNumberFactory('1')} >1</Button>
										<Button variant="dark" className="input-button-full" onClick={this.onClickNumberFactory('2')} >2</Button>
										<Button variant="dark" className="input-button-full" onClick={this.onClickNumberFactory('3')} >3</Button>
										<Button variant="info" className="input-button-full" onClick={this.onClickFactory('*')} >*</Button>
									</Row>
									<Row>
										<Button variant="info" className="input-button-full" onClick={this.onClickFactory( PI )} >&pi;</Button>
										<Button variant="info" className="input-button-full" onClick={this.onClickFactory('log_b')} >log<sub>b</sub>(x)</Button>
										<Button variant="info" className="input-button-full" onClick={this.onClickFactory('!')} >x!</Button>
										<Button variant="dark" className="input-button-full" onClick={this.onClickNumberFactory(String(this.state.answer))} >Ans</Button>
										<Button variant="dark" className="input-button-full" onClick={this.onClickNumberFactory('0')} >0</Button>
										<Button variant="dark" className="input-button-full" onClick={this.onClickFactory('.')} >.</Button>
										<Button variant="info" className="input-button-full" onClick={this.onClickFactory('/')} >&#xF7;</Button>
									</Row>
									<Row>
										<CopyToClipboard text={this.state.answer}>
											<Button variant="warning" className="three-half-sevenths" onClick={noop} >Copy</Button>
										</CopyToClipboard>
										<Button variant="success" className="three-half-sevenths" onClick={this.solveEq} >=</Button>
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
		const bounds = {
			top: 0,
			left: 0,
			right: window.innerWidth,
			bottom: window.innerHeight
		};
		return (
			<Draggable bounds={bounds} enableUserSelectHack={false} cancel="#calc-text-area" >
				<div className="outer-calc" style={this.props.style} >
					<Panel
						id="calc-panel"
						header={this.renderHeader()}
					>
						<Container className="desaturated" >
							<TextArea rows={1} id="calc-text-area" value={String(this.state.visible)} onChange={this.handleTypeChange} />
							<p>Answer = {this.state.answer}</p>
							<Row>
								<Col>
									<Row>
										<Button variant="danger" className="half-button" onClick={this.clearEquation} >C</Button>
										<Button variant="warning" disabled={!this.props.expandable} className="input-button-small" onClick={this.toggleFullDisplay} >&#x26F6;</Button>
										<Button variant="info" className="input-button-small" onClick={this.onClickWrapFactory('sqrt')}>&radic;</Button>
									</Row>
									<Row>
										<Button variant="dark" className="input-button-small" onClick={this.onClickNumberFactory('7')} >7</Button>
										<Button variant="dark" className="input-button-small" onClick={this.onClickNumberFactory('8')} >8</Button>
										<Button variant="dark" className="input-button-small" onClick={this.onClickNumberFactory('9')} >9</Button>
										<Button variant="info" className="input-button-small" onClick={this.onClickFactory('+')} >+</Button>
									</Row>
									<Row>
										<Button variant="dark" className="input-button-small" onClick={this.onClickNumberFactory('4')} >4</Button>
										<Button variant="dark" className="input-button-small" onClick={this.onClickNumberFactory('5')} >5</Button>
										<Button variant="dark" className="input-button-small" onClick={this.onClickNumberFactory('6')} >6</Button>
										<Button variant="info" className="input-button-small" onClick={this.onClickFactory('-')} >-</Button>
									</Row>
									<Row>
										<Button variant="dark" className="input-button-small" onClick={this.onClickNumberFactory('1')} >1</Button>
										<Button variant="dark" className="input-button-small" onClick={this.onClickNumberFactory('2')} >2</Button>
										<Button variant="dark" className="input-button-small" onClick={this.onClickNumberFactory('3')} >3</Button>
										<Button variant="info" className="input-button-small" onClick={this.onClickFactory('*')} >*</Button>
									</Row>
									<Row>
										<Button variant="dark" className="input-button-small" onClick={this.onClickNumberFactory(String(this.state.answer))} >Ans</Button>
										<Button variant="dark" className="input-button-small" onClick={this.onClickNumberFactory('0')} >0</Button>
										<Button variant="dark" className="input-button-small" onClick={this.onClickFactory('.')} >.</Button>
										<Button variant="info" className="input-button-small" onClick={this.onClickFactory('/')} >&#xF7;</Button>
									</Row>
									<Row>
										<CopyToClipboard text={this.state.answer}>
											<Button variant="warning" className="half-button" onClick={noop} >Copy</Button>
										</CopyToClipboard>
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
