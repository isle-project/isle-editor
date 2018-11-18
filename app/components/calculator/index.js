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
import evalStr from './eval.js';
import logger from 'debug';
import './calculator.css';


// VARIABLES //

const debug = logger( 'isle:calculator' );


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
		}, () => { console.log('Full on or off'); } );
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

	onClickWrapFactory = (val) => {
		return () => {
			const vis = this.state.visible;
			this.setState({
				visible: val + '(' + vis + ')'
			});
		};
	}

	handleTypeChange = ( value ) => {
		this.setState({
			visible: value
		});
	}

	solveEq = () => {
		var evaled = evalStr(this.state.visible);
		this.setState({
			visible: evaled,
			answer: evaled
		});
	}

	renderFull = () => {
		return (
			<Draggable bounds="#App" >
				<div className="outer-calc" style={this.props.style}>
					<Panel id="calc-panel-full">
						<Container>
							<Row>
								<Col md={8} className="desaturated" >
									<Row>
										<Button variant="light" className="two-sevenths" onClick={this.onClickFactory('(')} >(</Button>
										<Button variant="light" className="two-sevenths" onClick={this.onClickFactory(')')} >)</Button>
										<Button variant="danger" className="two-sevenths" onClick={this.clearEquation} >C</Button>
										<Button variant="warning" className="input-button-full" onClick={this.toggleFullDisplay} >&#x26F6;</Button>
									</Row>
									<Row>
										<Button variant="info" className="input-button-full" onClick={this.onClickFactory('sin')} >sin(x)</Button>
										<Button variant="info" className="input-button-full" onClick={this.onClickFactory('exp')} >e<sup>x</sup></Button>
										<Button variant="info" className="input-button-full" onClick={this.onClickWrapFactory('sqrt')}>&radic;</Button>
										<Button variant="dark" className="input-button-full" onClick={this.onClickNumberFactory('7')} >7</Button>
										<Button variant="dark" className="input-button-full" onClick={this.onClickNumberFactory('8')} >8</Button>
										<Button variant="dark" className="input-button-full" onClick={this.onClickNumberFactory('9')} >9</Button>
										<Button variant="info" className="input-button-full" onClick={this.onClickFactory('+')} >+</Button>
									</Row>
									<Row>
										<Button variant="info" className="input-button-full" onClick={this.onClickFactory('cos')} >cos(x)</Button>
										<Button variant="info" className="input-button-full" onClick={this.onClickFactory('ln')} >ln(x)</Button>
										<Button variant="info" className="input-button-full" onClick={this.onClickFactory('^(1/')} ><sup>n</sup>&radic;</Button>
										<Button variant="dark" className="input-button-full" onClick={this.onClickNumberFactory('4')} >4</Button>
										<Button variant="dark" className="input-button-full" onClick={this.onClickNumberFactory('5')} >5</Button>
										<Button variant="dark" className="input-button-full" onClick={this.onClickNumberFactory('6')} >6</Button>
										<Button variant="info" className="input-button-full" onClick={this.onClickFactory('-')} >-</Button>
									</Row>
									<Row>
										<Button variant="info" className="input-button-full" onClick={this.onClickFactory('tan')} >tan(x)</Button>
										<Button variant="info" className="input-button-full" onClick={this.onClickFactory('log')} >log(x)</Button>
										<Button variant="info" className="input-button-full" onClick={this.onClickFactory('^x')} >x<sup>y</sup></Button>
										<Button variant="dark" className="input-button-full" onClick={this.onClickNumberFactory('1')} >1</Button>
										<Button variant="dark" className="input-button-full" onClick={this.onClickNumberFactory('2')} >2</Button>
										<Button variant="dark" className="input-button-full" onClick={this.onClickNumberFactory('3')} >3</Button>
										<Button variant="info" className="input-button-full" onClick={this.onClickFactory('*')} >*</Button>
									</Row>
									<Row>
										<Button variant="info" className="input-button-full" onClick={this.onClickFactory('pi')} >&pi;</Button>
										<Button variant="info" className="input-button-full" onClick={this.onClickFactory('log_b')} >log<sub>b</sub>(x)</Button>
										<Button variant="info" className="input-button-full" onClick={this.onClickFactory('!')} >x!</Button>
										<Button variant="dark" className="input-button-full" onClick={this.onClickNumberFactory(String(this.state.answer))} >A</Button>
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
								<Col md={4}>
									<TextArea value={String(this.state.visible)} />
									<p>Answer = {this.state.answer}</p>
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
		if ( this.state.showFull ) {
			return this.renderFull();
		}
		return (
			<Draggable bounds="#App" >
				<div className="outer-calc" style={this.props.style} >
					<Panel id="calc-panel">
						<Container>
							<Row>
								<Col className="desaturated" md={7}>
									<Row>
										<Button variant="danger" className="half-button" onClick={this.clearEquation} >C</Button>
										<Button variant="warning" disabled={!this.props.expandable} className="input-button-small" onClick={this.toggleFullDisplay} >&#x26F6;</Button>
										<Button variant="info" disabled className="input-button-small" onClick={this.onClickWrapFactory('sqrt')}>&radic;</Button>
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
								<Col md={5}>
									<TextArea value={String(this.state.visible)} onChange={this.handleTypeChange} />
									<p>Answer = {this.state.answer}</p>
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
	expandable: false,
	style: {}
};

Calculator.propTypes = {
	expandable: PropTypes.bool,
	style: PropTypes.object
};

Calculator.contextType = SessionContext;


// EXPORTS //

export default Calculator;
