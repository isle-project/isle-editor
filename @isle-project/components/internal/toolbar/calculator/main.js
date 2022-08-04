// MODULES //

import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import { withTranslation } from 'react-i18next';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import FormControl from 'react-bootstrap/FormControl';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CopyToClipboard from 'react-copy-to-clipboard';
import IS_MOBILE from '@stdlib/assert/is-mobile';
import Draggable from '@isle-project/components/draggable';
import Panel from '@isle-project/components/panel';
import TeX from '@isle-project/components/tex';
import { SOLVE } from '@isle-project/constants/actions.js';
import SessionContext from '@isle-project/session/context.js';
import isDigitString from '@stdlib/assert/is-digit-string';
import startsWith from '@stdlib/string/starts-with';
import replace from '@stdlib/string/replace';
import { useActionLogger } from '@isle-project/session/action_logger.js';
import evaluate from './shunting_yard.js';
import './calculator.css';


// VARIABLES //

const debug = logger( 'isle:calculator' );
const RE_SPLIT_KEY = /([() +\-/*^!])/;
const RE_OPERATOR = /[+\-/*^!]/;


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
const Calculator = ( props ) => {
	debug( 'Rendering calculator...' );
	const { t } = props;
	const { logAction } = useActionLogger( 'CALCULATOR' );
	const session = useContext( SessionContext );
	let textInput = React.createRef();

	const [ visible, setVisible ] = useState( '0' );
	const [ showExtended, setShowExtended ] = useState( false );
	const [ useDegrees, setUseDegrees ] = useState( false );
	const [ answer, setAnswer ] = useState( 0 );

	const handleTypeChange = ( event ) => {
		setVisible( event.target.value );
	};
	const toggleFullDisplay = () => {
		setShowExtended( !showExtended );
	};
	const clearEquation = () => {
		if ( visible === '0' ) {
			setAnswer( 0 );
		} else {
			setVisible( '0' );
		}
	};
	const clearLast = () => {
		if ( visible.length === 1 ) {
			setVisible( '0' );
		} else {
			setVisible( visible.substring( 0, visible.length - 1 ) );
		}
	};
	const clickFactory = ( val ) => {
		return () => {
			if ( visible === '0' ) {
				setVisible( val );
			} else {
				const pos = textInput.current.selectionStart;
				setVisible( visible.substring( 0, pos ) + val + visible.substring( pos ) );
			}
			textInput.current.focus();
		};
	};
	const clickNumberFactory = ( val ) => {
		return () => {
			if ( visible === '0' || answer === visible ) {
				setVisible( val );
				textInput.current.focus();
			} else {
				let pos = textInput.current.selectionStart;
				setVisible( visible.substring( 0, pos ) + val + visible.substring( pos ) );
				pos += 1;
				textInput.current.setSelectionRange( pos, pos );
				textInput.current.focus();
			}
		};
	};
	const clickWrapFactory = ( val ) => {
		return () => {
			if ( visible === '0' ) {
				setVisible( val + '()' );
				const pos = visible.length - 1;
				textInput.current.setSelectionRange( pos, pos );
			} else if ( RE_OPERATOR.test( visible ) && !startsWith( visible, '-' ) ) {
				setVisible( visible + ' ' + val + '()' );
				const pos = visible.length - 1;
				textInput.current.setSelectionRange( pos, pos );
			} else {
				setVisible( val + '(' + visible + ')' );
				const pos = visible.length;
				textInput.current.setSelectionRange( pos, pos );
			}
			textInput.current.focus();
		};
	};
	const sendCopyToClipboardNotification = () => {
		session.addNotification({
			title: t( 'copied' ),
			message: t( 'copied-message' ),
			level: 'success',
			position: 'tr'
		});
	};
	const toggleDegrees = () => {
		setUseDegrees( !useDegrees );
	};
	const handleEscape = ( event ) => {
		if (
			event.target.id === 'calculator-panel' ||
			event.target.id === 'calculator-panel-full'
		) {
			props.onHide();
		}
	};
	const solveEquation = () => {
		if ( !visible ) {
			return;
		}
		if ( isDigitString( visible ) ) {
			setAnswer( visible );
		}
		logAction( SOLVE, visible );

		// Handle implicit multiplication operators:
		let result = replace( visible, /\) *\(/g, ') * (' );
		result = replace( result, /\) *([a-z0-9])/g, ') * $1' );
		result = replace( result, /((?:\s|^)-?\d+|!)([a-z][^\d-]|\()/g, '$1 * $2' );

		// Transform scientific notation (e.g., `3e10` and `3.12e-1`):
		result = replace( result, /([-\d.])e(-?\d+)/g, '$1 * 10^$2' );

		// Handle unary operators:
		result = replace( result, /(^|[(*/:^!+]) *-([^+\-/*^!]+)/g, '$1 (0-$2) ' );
		result = replace( result, /(^|[(*/:^!+]) *\+/g, '$1 ' );

		let keys = result.split( RE_SPLIT_KEY );
		keys = keys.filter( e => e !== '' );
		const val = String( evaluate( keys, useDegrees ) );
		setVisible( val );
		setAnswer( val );
		textInput.current.focus();
	};
	const handleKeyPress = ( event ) => {
		if ( event.charCode === 13 ) {
			solveEquation( event );
		}
	};

	if ( !props.show ) {
		return null;
	}
	if ( showExtended ) {
		/* eslint-disable i18next/no-literal-string */
		return (
			<Draggable
				bounds="#Lesson"
				cancel="#calc-text-area"
				onEscape={handleEscape}
			>
				<Panel id="calculator-panel-full" tabIndex={0} role="button"
					header={t( 'calculator' )} onHide={props.onHide} minimizable
					style={props.style}
					className={props.className}
					trapFocus
				>
					<Container className="desaturated" >
						<FormControl
							aria-label={t( 'calculator-input' )}
							autoFocus={true} // eslint-disable-line jsx-a11y/no-autofocus
							type="text"
							id="calc-text-area"
							value={String(visible)}
							onChange={handleTypeChange}
							ref={textInput}
							onKeyPress={handleKeyPress}
							readOnly={IS_MOBILE}
						/>
						<p>{t( 'answer' )} = {answer}</p>
						<Row>
							<Col>
								<Row>
									<Button variant="info" className="calculator-btn-full" onClick={clickWrapFactory('inv')} >x<sup>-1</sup></Button>
									<Button variant="info" className="calculator-btn-full" onClick={clickWrapFactory('abs')} >&#124;x&#124;</Button>
									<Button variant="info" className="calculator-btn-full" onClick={clickFactory(' choose ')} ><TeX style={{ color: 'white' }} raw="\tbinom{n}{k}" /></Button>
									<Button variant="light" className="calculator-btn-full" onClick={clickFactory('(')} >(</Button>
									<Button variant="light" className="calculator-btn-full" onClick={clickFactory(')')} >)</Button>
									<CopyToClipboard text={answer}>
										<Button variant="warning" className="calculator-btn-full" onClick={sendCopyToClipboardNotification} >{t( 'copy' )}</Button>
									</CopyToClipboard>
									<Button variant="warning" className="calculator-btn-full" onClick={toggleFullDisplay} >{t( 'basic' )}</Button>
								</Row>
								<Row>
									<Button variant="info" className="calculator-btn-full" onClick={clickWrapFactory('sin')} >sin(x)</Button>
									<Button variant="info" className="calculator-btn-full" onClick={clickWrapFactory('exp')} >e<sup>x</sup></Button>
									<Button variant="info" className="calculator-btn-full" onClick={clickWrapFactory('sqrt')}>&radic;</Button>
									<Button variant="dark" className="calculator-btn-full" onClick={clickNumberFactory('7')} >7</Button>
									<Button variant="dark" className="calculator-btn-full" onClick={clickNumberFactory('8')} >8</Button>
									<Button variant="dark" className="calculator-btn-full" onClick={clickNumberFactory('9')} >9</Button>
									<Button variant="info" className="calculator-btn-full" onClick={clickFactory('/')} >&#xF7;</Button>
								</Row>
								<Row>
									<Button variant="info" className="calculator-btn-full" onClick={clickWrapFactory('cos')} >cos(x)</Button>
									<Button variant="info" className="calculator-btn-full" onClick={clickWrapFactory('ln')} >ln(x)</Button>
									<Button variant="info" className="calculator-btn-full" onClick={clickFactory('^(1/')} ><TeX style={{ color: 'white' }} raw="\sqrt[n]{}" /></Button>
									<Button variant="dark" className="calculator-btn-full" onClick={clickNumberFactory('4')} >4</Button>
									<Button variant="dark" className="calculator-btn-full" onClick={clickNumberFactory('5')} >5</Button>
									<Button variant="dark" className="calculator-btn-full" onClick={clickNumberFactory('6')} >6</Button>
									<Button variant="info" className="calculator-btn-full" onClick={clickFactory('*')} >&#215;</Button>
								</Row>
								<Row>
									<Button variant="info" className="calculator-btn-full" onClick={clickWrapFactory('tan')} >tan(x)</Button>
									<Button variant="info" className="calculator-btn-full" onClick={clickWrapFactory('log10')} >log<sub>10</sub>(x)</Button>
									<Button variant="info" className="calculator-btn-full" onClick={clickFactory('^')} >x<sup>y</sup></Button>
									<Button variant="dark" className="calculator-btn-full" onClick={clickNumberFactory('1')} >1</Button>
									<Button variant="dark" className="calculator-btn-full" onClick={clickNumberFactory('2')} >2</Button>
									<Button variant="dark" className="calculator-btn-full" onClick={clickNumberFactory('3')} >3</Button>
									<Button variant="info" className="calculator-btn-full" onClick={clickFactory('-')} >-</Button>
								</Row>
								<Row>
									<Button variant="info" className="calculator-btn-full" onClick={clickFactory( 'pi' )} >&pi;</Button>
									<Button variant="info" className="calculator-btn-full" onClick={clickFactory(' log ')} >log<sub>b</sub>(x)</Button>
									<Button variant="info" className="calculator-btn-full" onClick={clickFactory('!')} >x!</Button>
									<Button variant="dark" className="calculator-btn-full" onClick={clickNumberFactory(String(answer))} >Ans</Button>
									<Button variant="dark" className="calculator-btn-full" onClick={clickNumberFactory('0')} >0</Button>
									<Button variant="dark" className="calculator-btn-full" onClick={clickFactory('.')} >.</Button>
									<Button variant="info" className="calculator-btn-full" onClick={clickFactory('+')} >+</Button>
								</Row>
								<Row>
									<Button variant="info" className="calculator-btn-full" onClick={toggleDegrees} >{useDegrees ? 'Deg' : 'Rad'}</Button>
									<Button variant="info" className="calculator-btn-full" onClick={clickFactory( 'e' )} >e</Button>
									<Button variant="danger" className="calculator-btn-full" onClick={clearLast} >CE</Button>
									<Button variant="danger" className="calculator-btn-full" onClick={clearEquation} >AC</Button>
									<Button variant="success" className="solve-button" onClick={solveEquation} >=</Button>
								</Row>
							</Col>
						</Row>
					</Container>
				</Panel>
			</Draggable>
		);
	}
	return (
		<Draggable
			bounds="#Lesson"
			cancel="#calc-text-area"
			onEscape={handleEscape}
		>
			<Panel
				id="calculator-panel"
				tabIndex={0} role="button"
				header={t( 'calculator' )}
				onHide={props.onHide}
				style={props.style}
				className={props.className}
				minimizable
				trapFocus
			>
				<Container className="desaturated" >
					<FormControl
						autoFocus={true} // eslint-disable-line jsx-a11y/no-autofocus
						type="text" id="calc-text-area"
						value={String(visible)}
						onChange={handleTypeChange}
						ref={textInput}
						onKeyPress={handleKeyPress}
						readOnly={IS_MOBILE}
					/>
					<p>{t( 'answer' )} = {answer}</p>
					<Row>
						<Col>
							<Row>
								<Button variant="light" className="calculator-btn-small" onClick={clickFactory('(')} >(</Button>
								<Button variant="light" className="calculator-btn-small" onClick={clickFactory(')')} >)</Button>
								<CopyToClipboard text={answer}>
									<Button variant="warning" className="calculator-btn-small" onClick={sendCopyToClipboardNotification} >{t( 'copy' )}</Button>
								</CopyToClipboard>
								<Button variant="warning" disabled={!props.expandable} className="calculator-btn-small" onClick={toggleFullDisplay} >{t( 'expand' )}</Button>
							</Row>
							<Row>
								<Button variant="dark" className="calculator-btn-small" onClick={clickNumberFactory('7')} >7</Button>
								<Button variant="dark" className="calculator-btn-small" onClick={clickNumberFactory('8')} >8</Button>
								<Button variant="dark" className="calculator-btn-small" onClick={clickNumberFactory('9')} >9</Button>
								<Button variant="info" className="calculator-btn-small" onClick={clickFactory('/')} >&#xF7;</Button>
							</Row>
							<Row>
								<Button variant="dark" className="calculator-btn-small" onClick={clickNumberFactory('4')} >4</Button>
								<Button variant="dark" className="calculator-btn-small" onClick={clickNumberFactory('5')} >5</Button>
								<Button variant="dark" className="calculator-btn-small" onClick={clickNumberFactory('6')} >6</Button>
								<Button variant="info" className="calculator-btn-small" onClick={clickFactory('*')} >&#215;</Button>
							</Row>
							<Row>
								<Button variant="dark" className="calculator-btn-small" onClick={clickNumberFactory('1')} >1</Button>
								<Button variant="dark" className="calculator-btn-small" onClick={clickNumberFactory('2')} >2</Button>
								<Button variant="dark" className="calculator-btn-small" onClick={clickNumberFactory('3')} >3</Button>
								<Button variant="info" className="calculator-btn-small" onClick={clickFactory('-')} >-</Button>
							</Row>
							<Row>
								<Button variant="dark" className="calculator-btn-small" onClick={clickNumberFactory(String(answer))} >Ans</Button>
								<Button variant="dark" className="calculator-btn-small" onClick={clickNumberFactory('0')} >0</Button>
								<Button variant="dark" className="calculator-btn-small" onClick={clickFactory('.')} >.</Button>
								<Button variant="info" className="calculator-btn-small" onClick={clickFactory('+')} >+</Button>
							</Row>
							<Row>
								<Button variant="danger" className="calculator-btn-small" onClick={clearLast} >CE</Button>
								<Button variant="danger" className="calculator-btn-small" onClick={clearEquation} >AC</Button>
								<Button variant="success" className="calculator-half-btn" onClick={solveEquation} >=</Button>
							</Row>
						</Col>
					</Row>
				</Container>
			</Panel>
		</Draggable>
	);
	/* eslint-disable i18next/no-literal-string */
};


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


// EXPORTS //

export default withTranslation( 'internal/toolbar/calculator' )( Calculator );
