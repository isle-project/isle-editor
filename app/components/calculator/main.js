// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import { withTranslation } from 'react-i18next';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import FormControl from 'react-bootstrap/FormControl';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CopyToClipboard from 'react-copy-to-clipboard';
import isMobile from 'is-mobile';
import Draggable from 'components/draggable';
import Panel from 'components/panel';
import TeX from 'components/tex';
import { CALCULATOR_SOLVE } from 'constants/actions.js';
import SessionContext from 'session/context.js';
import isDigitString from '@stdlib/assert/is-digit-string';
import startsWith from '@stdlib/string/starts-with';
import replace from '@stdlib/string/replace';
import evaluate from './shunting_yard.js';
import './load_translations.js';
import './calculator.css';


// VARIABLES //

const debug = logger( 'isle:calculator' );
const RE_SPLIT_KEY = /([() +\-/*^!])/;
const RE_OPERATOR = /[+\-/*^!]/;
const IS_MOBILE = isMobile({
	tablet: true
});


// MAIN //

/**
* A calculator with a base and expanded (scientific) mode.
*
* @property {boolean} expandable - controls whether calculator is expandable
* @property {boolean} show - controls whether calculator is shown
* @property {string} className - class name
* @property {Object} style - CSS inline styles
* @property {Function} onHide - callback invoked when the close button is clicked
*/
class Calculator extends Component {
	/**
	* Constructor function
	*/
	constructor( props ) {
		super( props );

		this.state = {
			visible: '0',
			showFull: false,
			useDegrees: false,
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

	sendCopyToClipboardNotification = () => {
		const session = this.context;
		session.addNotification({
			title: this.props.t( 'copied' ),
			message: this.props.t( 'copied-message' ),
			level: 'success',
			position: 'tr'
		});
	}

	handleTypeChange = ( event ) => {
		this.setState({
			visible: event.target.value
		});
	}

	toggleDegrees = () => {
		this.setState({
			useDegrees: !this.state.useDegrees
		});
	}

	handleKeyPress = ( event ) => {
		if ( event.charCode === 13 ) {
			this.solveEq( event );
		}
	}

	handleEscape = ( event ) => {
		if (
			event.target.id === 'calculator-panel' ||
			event.target.id === 'calculator-panel-full'
		) {
			this.props.onHide();
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
		// Handle implicit multiplication operators:
		visible = replace( visible, /\) *\(/g, ') * (' );
		visible = replace( visible, /\) *([a-z0-9])/g, ') * $1' );
		visible = replace( visible, /((?:\s|^)-?\d+|!)([a-z][^\d-]|\()/g, '$1 * $2' );

		// Transform scientific notation (e.g., `3e10` and `3.12e-1`):
		visible = replace( visible, /([-\d.])e(-?\d+)/g, '$1 * 10^$2' );

		// Handle unary operators:
		visible = replace( visible, /(^|[(*/:^!+]) *-([^+\-/*^!]+)/g, '$1 (0-$2) ' );
		visible = replace( visible, /(^|[(*/:^!+]) *\+/g, '$1 ' );

		// Log equation:
		const session = this.context;
		session.log({
			id: this.props.id,
			type: CALCULATOR_SOLVE,
			value: visible
		});

		let keys = visible.split( RE_SPLIT_KEY );
		keys = keys.filter( e => e !== '' );
		const val = String( evaluate( keys, this.state.useDegrees ) );
		this.setState({
			visible: val,
			answer: val
		});
		this.textInput.focus();
	}

	renderFull = () => {
		debug( 'Rendering expanded calculator...' );
		return (
			<Draggable
				bounds="#Lesson"
				cancel="#calc-text-area"
				onEscape={this.handleEscape}
			>
				<Panel id="calculator-panel-full" tabIndex={0} role="button"
					header={this.props.t( 'calculator' )} onHide={this.props.onHide} minimizable
					style={this.props.style}
					className={this.props.className}
				>
					<Container className="desaturated" >
						<FormControl
							autoFocus={true} // eslint-disable-line jsx-a11y/no-autofocus
							type="text" id="calc-text-area"
							value={String(this.state.visible)}
							onChange={this.handleTypeChange}
							ref={( div ) => { this.textInput = div; }}
							onKeyPress={this.handleKeyPress}
							readOnly={IS_MOBILE}
						/>
						<p>{this.props.t( 'answer' )} = {this.state.answer}</p>
						<Row>
							<Col>
								<Row>
									<Button variant="info" className="calculator-btn-full" onClick={this.onClickWrapFactory('inv')} >x<sup>-1</sup></Button>
									<Button variant="info" className="calculator-btn-full" onClick={this.onClickWrapFactory('abs')} >&#124;x&#124;</Button>
									<Button variant="info" className="calculator-btn-full" onClick={this.onClickFactory(' choose ')} ><TeX style={{ color: 'white' }} raw="\tbinom{n}{k}" /></Button>
									<Button variant="light" className="calculator-btn-full" onClick={this.onClickFactory('(')} >(</Button>
									<Button variant="light" className="calculator-btn-full" onClick={this.onClickFactory(')')} >)</Button>
									<CopyToClipboard text={this.state.answer}>
										<Button variant="warning" className="calculator-btn-full" onClick={this.sendCopyToClipboardNotification} >{this.props.t( 'copy' )}</Button>
									</CopyToClipboard>
									<Button variant="warning" className="calculator-btn-full" onClick={this.toggleFullDisplay} >{this.props.t( 'basic' )}</Button>
								</Row>
								<Row>
									<Button variant="info" className="calculator-btn-full" onClick={this.onClickWrapFactory('sin')} >sin(x)</Button>
									<Button variant="info" className="calculator-btn-full" onClick={this.onClickWrapFactory('exp')} >e<sup>x</sup></Button>
									<Button variant="info" className="calculator-btn-full" onClick={this.onClickWrapFactory('sqrt')}>&radic;</Button>
									<Button variant="dark" className="calculator-btn-full" onClick={this.onClickNumberFactory('7')} >7</Button>
									<Button variant="dark" className="calculator-btn-full" onClick={this.onClickNumberFactory('8')} >8</Button>
									<Button variant="dark" className="calculator-btn-full" onClick={this.onClickNumberFactory('9')} >9</Button>
									<Button variant="info" className="calculator-btn-full" onClick={this.onClickFactory('/')} >&#xF7;</Button>
								</Row>
								<Row>
									<Button variant="info" className="calculator-btn-full" onClick={this.onClickWrapFactory('cos')} >cos(x)</Button>
									<Button variant="info" className="calculator-btn-full" onClick={this.onClickWrapFactory('ln')} >ln(x)</Button>
									<Button variant="info" className="calculator-btn-full" onClick={this.onClickFactory('^(1/')} ><TeX style={{ color: 'white' }} raw="\sqrt[n]{}" /></Button>
									<Button variant="dark" className="calculator-btn-full" onClick={this.onClickNumberFactory('4')} >4</Button>
									<Button variant="dark" className="calculator-btn-full" onClick={this.onClickNumberFactory('5')} >5</Button>
									<Button variant="dark" className="calculator-btn-full" onClick={this.onClickNumberFactory('6')} >6</Button>
									<Button variant="info" className="calculator-btn-full" onClick={this.onClickFactory('*')} >&#215;</Button>
								</Row>
								<Row>
									<Button variant="info" className="calculator-btn-full" onClick={this.onClickWrapFactory('tan')} >tan(x)</Button>
									<Button variant="info" className="calculator-btn-full" onClick={this.onClickWrapFactory('log10')} >log<sub>10</sub>(x)</Button>
									<Button variant="info" className="calculator-btn-full" onClick={this.onClickFactory('^')} >x<sup>y</sup></Button>
									<Button variant="dark" className="calculator-btn-full" onClick={this.onClickNumberFactory('1')} >1</Button>
									<Button variant="dark" className="calculator-btn-full" onClick={this.onClickNumberFactory('2')} >2</Button>
									<Button variant="dark" className="calculator-btn-full" onClick={this.onClickNumberFactory('3')} >3</Button>
									<Button variant="info" className="calculator-btn-full" onClick={this.onClickFactory('-')} >-</Button>
								</Row>
								<Row>
									<Button variant="info" className="calculator-btn-full" onClick={this.onClickFactory( 'pi' )} >&pi;</Button>
									<Button variant="info" className="calculator-btn-full" onClick={this.onClickFactory(' log ')} >log<sub>b</sub>(x)</Button>
									<Button variant="info" className="calculator-btn-full" onClick={this.onClickFactory('!')} >x!</Button>
									<Button variant="dark" className="calculator-btn-full" onClick={this.onClickNumberFactory(String(this.state.answer))} >Ans</Button>
									<Button variant="dark" className="calculator-btn-full" onClick={this.onClickNumberFactory('0')} >0</Button>
									<Button variant="dark" className="calculator-btn-full" onClick={this.onClickFactory('.')} >.</Button>
									<Button variant="info" className="calculator-btn-full" onClick={this.onClickFactory('+')} >+</Button>
								</Row>
								<Row>
									<Button variant="info" className="calculator-btn-full" onClick={this.toggleDegrees} >{this.state.useDegrees ? 'Deg' : 'Rad'}</Button>
									<Button variant="info" className="calculator-btn-full" onClick={this.onClickFactory( 'e' )} >e</Button>
									<Button variant="danger" className="calculator-btn-full" onClick={this.clearLast} >CE</Button>
									<Button variant="danger" className="calculator-btn-full" onClick={this.clearEquation} >AC</Button>
									<Button variant="success" className="solve-button" onClick={this.solveEq} >=</Button>
								</Row>
							</Col>
						</Row>
					</Container>
				</Panel>
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
			<Draggable
				bounds="#Lesson"
				cancel="#calc-text-area"
				onEscape={this.handleEscape}
			>
				<Panel
					id="calculator-panel"
					tabIndex={0} role="button"
					header={this.props.t( 'calculator' )}
					onHide={this.props.onHide}
					style={this.props.style}
					className={this.props.className}
					minimizable
				>
					<Container className="desaturated" >
						<FormControl
							autoFocus={true} // eslint-disable-line jsx-a11y/no-autofocus
							type="text" id="calc-text-area"
							value={String(this.state.visible)}
							onChange={this.handleTypeChange}
							ref={( div ) => { this.textInput = div; }}
							onKeyPress={this.handleKeyPress}
							readOnly={IS_MOBILE}
						/>
						<p>{this.props.t( 'answer' )} = {this.state.answer}</p>
						<Row>
							<Col>
								<Row>
									<Button variant="light" className="calculator-btn-small" onClick={this.onClickFactory('(')} >(</Button>
									<Button variant="light" className="calculator-btn-small" onClick={this.onClickFactory(')')} >)</Button>
									<CopyToClipboard text={this.state.answer}>
										<Button variant="warning" className="calculator-btn-small" onClick={this.sendCopyToClipboardNotification} >{this.props.t( 'copy' )}</Button>
									</CopyToClipboard>
									<Button variant="warning" disabled={!this.props.expandable} className="calculator-btn-small" onClick={this.toggleFullDisplay} >{this.props.t( 'expand' )}</Button>
								</Row>
								<Row>
									<Button variant="dark" className="calculator-btn-small" onClick={this.onClickNumberFactory('7')} >7</Button>
									<Button variant="dark" className="calculator-btn-small" onClick={this.onClickNumberFactory('8')} >8</Button>
									<Button variant="dark" className="calculator-btn-small" onClick={this.onClickNumberFactory('9')} >9</Button>
									<Button variant="info" className="calculator-btn-small" onClick={this.onClickFactory('/')} >&#xF7;</Button>
								</Row>
								<Row>
									<Button variant="dark" className="calculator-btn-small" onClick={this.onClickNumberFactory('4')} >4</Button>
									<Button variant="dark" className="calculator-btn-small" onClick={this.onClickNumberFactory('5')} >5</Button>
									<Button variant="dark" className="calculator-btn-small" onClick={this.onClickNumberFactory('6')} >6</Button>
									<Button variant="info" className="calculator-btn-small" onClick={this.onClickFactory('*')} >&#215;</Button>
								</Row>
								<Row>
									<Button variant="dark" className="calculator-btn-small" onClick={this.onClickNumberFactory('1')} >1</Button>
									<Button variant="dark" className="calculator-btn-small" onClick={this.onClickNumberFactory('2')} >2</Button>
									<Button variant="dark" className="calculator-btn-small" onClick={this.onClickNumberFactory('3')} >3</Button>
									<Button variant="info" className="calculator-btn-small" onClick={this.onClickFactory('-')} >-</Button>
								</Row>
								<Row>
									<Button variant="dark" className="calculator-btn-small" onClick={this.onClickNumberFactory(String(this.state.answer))} >Ans</Button>
									<Button variant="dark" className="calculator-btn-small" onClick={this.onClickNumberFactory('0')} >0</Button>
									<Button variant="dark" className="calculator-btn-small" onClick={this.onClickFactory('.')} >.</Button>
									<Button variant="info" className="calculator-btn-small" onClick={this.onClickFactory('+')} >+</Button>
								</Row>
								<Row>
									<Button variant="danger" className="calculator-btn-small" onClick={this.clearLast} >CE</Button>
									<Button variant="danger" className="calculator-btn-small" onClick={this.clearEquation} >AC</Button>
									<Button variant="success" className="calculator-half-btn" onClick={this.solveEq} >=</Button>
								</Row>
							</Col>
						</Row>
					</Container>
				</Panel>
			</Draggable>
		);
	}
}


// PROPERTIES //

Calculator.defaultProps = {
	expandable: true,
	show: true,
	className: '',
	style: {},
	onHide: null
};

Calculator.propTypes = {
	expandable: PropTypes.bool,
	show: PropTypes.bool,
	className: PropTypes.string,
	style: PropTypes.object,
	onHide: PropTypes.func
};

Calculator.contextType = SessionContext;


// EXPORTS //

export default withTranslation( 'calculator' )( Calculator );
