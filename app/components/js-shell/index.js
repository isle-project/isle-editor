// MODULES //

import React, { Component } from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import JSONTree from 'react-json-tree';
import hasOwnProp from '@stdlib/assert/has-own-property';
import max from '@stdlib/math/base/special/max';
import PINF from '@stdlib/constants/math/float64-pinf';
import isArray from '@stdlib/assert/is-array';
import isRegExp from '@stdlib/assert/is-regexp';
import isObjectLike from '@stdlib/assert/is-object-like';
import replace from '@stdlib/string/replace';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Tooltip from 'react-bootstrap/Tooltip';
import ChatButton from 'components/chat-button';
import HintButton from 'components/hint-button';
import ace from 'brace';
import 'brace/mode/javascript';
import 'brace/theme/katzenmilch';
import 'brace/theme/solarized_light';
import scrollTo from 'utils/scroll-to';
import OverlayTrigger from 'components/overlay-trigger';
import VoiceControl from 'components/voice-control';
import SessionContext from 'session/context.js';
import VOICE_COMMANDS from './voice_commands.json';
import CONSOLE_STYLES from './console_styles.json';
import './js_shell.css';


// VARIABLES //

const RE_CONSOLE = /console\.(error|warn|debug|log|info)/g;
const THEME = {
	scheme: 'bright',
	author: 'chris kempson (http://chriskempson.com)',
	base00: '#000000',
	base01: '#303030',
	base02: '#505050',
	base03: '#b0b0b0',
	base04: '#d0d0d0',
	base05: '#e0e0e0',
	base06: '#f5f5f5',
	base07: '#ffffff',
	base08: '#fb0120',
	base09: '#fc6d24',
	base0A: '#fda331',
	base0B: '#a1c659',
	base0C: '#76c7b7',
	base0D: '#6fb3d2',
	base0E: '#d381c3',
	base0F: '#be643c'
};


// FUNCTIONS //

const showSolutionButton = ( exhaustedHints, clickHandler, displayed, nEvaluations ) => {
	const tooltip = (
		<Tooltip
			id="tooltip"
		>
			Solution becomes available once you have tried the exercise and used all hints.
		</Tooltip>
	);
	if ( !exhaustedHints || nEvaluations < 1 ) {
		return (
			<OverlayTrigger
				placement="top"
				positionLeft={100}
				overlay={tooltip}
				rootClose={true}
			>
				<span style={{ display: 'inline-block', marginLeft: '4px' }}>
					<Button
						variant="warning"
						size="sm"
						disabled
						style={{
							pointerEvents: 'none'
						}}
					>{ !displayed ? 'Show Solution' : 'Hide Solution' }</Button>
				</span>
			</OverlayTrigger>
		);
	}
	return (
		<Button
			variant="warning"
			size="sm"
			onClick={clickHandler}
		>{ !displayed ? 'Show Solution' : 'Hide Solution' }</Button>
	);
};

function makeLog( e, i ) {
	const type = e.type || 'default';
	const style = CONSOLE_STYLES[ type ];
	return (
		<p key={i} style={style} >
			{e.msg}
		</p>
	);
}


// MAIN //

/**
* An interactive Javascript shell that can be used to execute JavaScript commands. The shell contains a console that displays error messages, warnings etc.
*
* @property {string} code - JavaScript code to be evaluated
* @property {string} solution - for programming questions, code `string` representing the official solution for the problem
* @property {Array<string>} hints - for programming questions, an array of hints providing guidance on how to approach the problem
* @property {boolean} precompute - controls whether the default code should be executed once the component has mounted
* @property {boolean} chat - controls whether group chat functionality should be enabled
* @property {boolean} check - appended JavaScript code to check the `code` to be evaluated
* @property {boolean} disabled - controls whether to disable all user inputs and make the code block static
* @property {number} lines - number of lines to display
* @property {Object} vars - scope object with variables that should be made available to evaluated `code`
* @property {strings} voiceID - voice control identifier
* @property {Function} onEvaluate - callback invoked whenever the `Evaluate` button is clicked
*/
class JSShell extends Component {
	constructor( props, context ) {
		super( props );

		this.state = {
			log: [],
			exhaustedHints: props.hints.length === 0,
			solutionOpen: false
		};

		if ( this.props.vars ) {
			for ( var key in this.props.vars ) {
				if ( hasOwnProp( this.props.vars, key ) ) {
					global[ key ] = this.props.vars[ key ];
				}
			}
		}
	}

	componentDidMount() {
		this.editor = ace.edit( this.editorDiv );
		this.editor.getSession().setMode( 'ace/mode/javascript' );
		this.editor.setTheme( 'ace/theme/katzenmilch' );
		this.editor.setValue( this.props.code, -1 );
		this.editor.$blockScrolling = PINF;
		this.editor.setOptions({
			maxLines: max( 5, this.props.lines ),
			minLines: this.props.lines,
			fontFamily: this.props.fontFamily,
			fontSize: this.props.fontSize
		});

		// Add event listener:
		this.editor.on( 'change', this.onChange );

		if ( this.props.disabled ) {
			this.editor.setOptions({
				readOnly: true,
				highlightActiveLine: false,
				highlightGutterLine: false
			});
			this.editor.renderer.$cursorLayer.element.style.opacity = 0;
			this.editor.textInput.getElement().disabled = true;
		}
		this.innerConsole();
		if ( this.props.precompute ) {
			this.handleEvaluationClick();
		}
	}

	componentDidUpdate( prevProps ) {
		if ( this.props.code !== prevProps.code ) {
			this.editor.setValue( this.props.code, 1 );
			if ( this.props.precompute ) {
				this.handleEvaluationClick();
			}
		}
		else if ( this.props.disabled !== prevProps.disabled ) {
			let opts;
			if ( this.props.disabled ) {
				opts = {
					readOnly: true,
					highlightActiveLine: false,
					highlightGutterLine: false
				};
			} else {
				opts = {
					readOnly: false,
					highlightActiveLine: true,
					highlightGutterLine: true
				};
			}
			this.editor.setOptions( opts );
		} else {
			this.editor.resize();
			const node = ReactDom.findDOMNode( this );
			// Undo Spectacle scaling as it messes up the rendering of the ACE editor:
			let slide = node.closest( '.spectacle-content' );
			if ( slide ) {
				let computedStyle = window.getComputedStyle( slide );
				let transform = computedStyle.getPropertyValue( 'transform' );
				let match = /matrix\(([0-9.]*)/.exec( transform );
				if ( isArray( match ) && match.length > 1 ) {
					let scaleFactor = match[ 1 ];
					node.style.transform = `scale(${1/scaleFactor})`;
				}
			}
		}
		this.scrollToBottom();
	}

	componentWillUnmount() {
		global.print = null;
	}

	resetConsole = () => {
		this.setState({
			log: []
		});
	}

	handleSolutionClick = () => {
		const val = this.editor.getValue();
		const solutionUnescaped = this.props.solution.replace( /\\n/g, '\n' );
		if ( this.state.solutionOpen === false ) {
			this.editor.setTheme( 'ace/theme/solarized_light' );
			this.editor.setOptions({
				highlightActiveLine: false,
				highlightGutterLine: false,
				readOnly: true
			});
		} else {
			this.editor.setTheme( 'ace/theme/katzenmilch' );
			this.editor.setOptions({
				highlightActiveLine: true,
				highlightGutterLine: true,
				readOnly: false
			});
		}

		if ( val !== solutionUnescaped ) {
			if ( this.props.id ) {
				const session = this.context;
				session.log({
					id: this.props.id,
					type: 'JSSHELL_DISPLAY_SOLUTION',
					value: val
				});
			}
			this.setState({
				lastSolution: val,
				solutionOpen: !this.state.solutionOpen
			});
			this.editor.setValue( solutionUnescaped, 1 );
		} else {
			this.setState({
				solutionOpen: !this.state.solutionOpen
			});
			this.editor.setValue( this.state.lastSolution || solutionUnescaped, 1 );
		}
	}

	handleEvaluationClick = () => {
		let currentCode = this.editor.getValue();
		currentCode = replace( currentCode, RE_CONSOLE, 'print.$1' );
		if ( this.props.id ) {
			const session = this.context;
			session.log({
				id: this.props.id,
				type: 'JSSHELL_EVALUATION',
				value: currentCode
			});
		}
		try {
			if ( this.props.check ) {
				currentCode += ';' + this.props.check;
				eval( currentCode ); // eslint-disable-line no-eval
			} else {
				eval( currentCode ); // eslint-disable-line no-eval
			}
		}
		catch ( err ) {
			const errObj = {
				type: 'error',
				msg: err.message
			};
			const log = this.state.log;
			log.push( errObj );
			this.setState({
				log
			});
		}
		this.props.onEvaluate( currentCode );
	}

	innerConsole = () => {
		global.print = {
			'error': this.printFactory( 'error' ),
			'warn': this.printFactory( 'warn' ),
			'info': this.printFactory( 'info' ),
			'log': this.printFactory( 'log' ),
			'debug': this.printFactory( 'debug' )
		};
	}

	printFactory = ( type ) => {
		const self = this;
		return print;

		function print() {
			const msg = [];
			for ( let i = 0; i < arguments.length; i++) {
				const arg = arguments[ i ];
				if ( isRegExp( arg ) ) {
					msg.push( <span key={i} className="js-shell-console-output" >{arg.toString()}</span> );
				}
				else if ( isObjectLike( arg ) ) {
					msg.push(
						<JSONTree key={i} data={arg} theme={{
							extend: THEME,
							tree: {
								padding: '0.2em',
								backgroundColor: '#f3f2f3'
							}
						}} />
					);
				} else {
					msg.push( <span key={i} className="js-shell-console-output" >{String( arg )}</span> );
				}
			}
			const messageObj = {
				type: type,
				msg: msg
			};
			const log = self.state.log;
			log.push( messageObj );
			self.setState({
				log
			});
		}
	}

	logHint = ( idx ) => {
		const session = this.context;
		if ( this.props.id ) {
			session.log({
				id: this.props.id,
				type: 'JSSHELL_OPEN_HINT',
				value: idx
			});
		}
	}

	showHints() {
		return (
			<HintButton
				hints={this.props.hints}
				disabled={this.props.disabled}
				onClick={this.logHint}
				onFinished={() => {
					this.setState({ exhaustedHints: true });
				}}
			/>
		);
	}

	/**
	* Scrolls to the bottom of the console output.
	*/
	scrollToBottom() {
		scrollTo( this.consoleOutput, this.consoleOutput.scrollHeight, 1000 );
	}

	renderLogs() {
		let list = this.state.log;
		let res = [];
		for ( var i = 0; i < list.length; i++ ) {
			let e = list[ i ];
			res.push( makeLog( e, i ) );
		}
		return res;
	}

	renderResetButton() {
		return (
			<div className="js-shell-reset" onClick={this.resetConsole} >☒</div>
		);
	}

	render() {
		const nHints = this.props.hints.length;
		const toolbar = <ButtonToolbar style={{ float: 'right', marginTop: '8px' }}>
			{ nHints > 0 ? this.showHints() : null }
			{ ( this.props.solution && !this.props.disabled ) ?
				showSolutionButton(
					this.state.exhaustedHints,
					this.handleSolutionClick,
					this.state.solutionOpen,
					this.state.nEvaluations
				) :
				null
			}
			{
				( this.props.chat && this.props.id ) ?
					<span style={{ display: 'inline-block', marginLeft: '4px' }}>
						<ChatButton for={this.props.id} />
					</span> :
					null
			}
			<VoiceControl reference={this} id={this.props.voiceID} commands={VOICE_COMMANDS} />
		</ButtonToolbar>;

		const editor = <div className="js-shell-edit" ref={( div ) => {
			this.editorDiv = div;
		}} ></div>;
		return (
			<div id={this.props.id} >
				<div className="js-shell" >
					{editor}
					<div className="js-shell-toolbar">
						{ !this.props.disabled ?
							<Button
								variant="primary"
								size="sm"
								style={{
									marginTop: '8px',
									marginBottom: '8px'
								}}
								onClick={this.handleEvaluationClick}
							>Evaluate</Button> :
							<span />
						}
						{ toolbar }
						<br />
					</div>
					{ !this.props.disabled ? this.renderResetButton() : null }
					<div
						ref={( div ) => { this.consoleOutput = div; }}
						className="js-shell-console"
					>
						{this.renderLogs()}
					</div>
				</div>
			</div>
		);
	}
}


// PROPERTIES //

JSShell.defaultProps = {
	code: '',
	solution: '',
	hints: [],
	precompute: false,
	chat: false,
	check: null,
	disabled: false,
	lines: 5,
	fontFamily: 'Courier New',
	fontSize: 16,
	vars: null,
	voiceID: null,
	onEvaluate() {}
};

JSShell.propTypes = {
	code: PropTypes.string,
	solution: PropTypes.string,
	hints: PropTypes.array,
	precompute: PropTypes.bool,
	chat: PropTypes.bool,
	check: PropTypes.string,
	disabled: PropTypes.bool,
	lines: PropTypes.number,
	fontFamily: PropTypes.string,
	fontSize: PropTypes.number,
	onEvaluate: PropTypes.func,
	vars: PropTypes.object,
	voiceID: PropTypes.string
};

JSShell.contextType = SessionContext;


// EXPORTS //

export default JSShell;
