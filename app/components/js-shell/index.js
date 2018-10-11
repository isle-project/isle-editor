// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import hasOwnProp from '@stdlib/assert/has-own-property';
import max from '@stdlib/math/base/special/max';
import PINF from '@stdlib/constants/math/float64-pinf';
import Button from 'react-bootstrap/lib/Button';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import Tooltip from 'react-bootstrap/lib/Tooltip';
import ChatButton from 'components/chat-button';
import HintButton from 'components/hint-button';
import ace from 'brace';
import 'brace/mode/javascript';
import 'brace/theme/katzenmilch';
import 'brace/theme/monokai';
import 'brace/theme/solarized_light';
import scrollTo from 'utils/scroll-to';
import OverlayTrigger from 'components/overlay-trigger';
import CONSOLE_STYLES from './console_styles.json';
import './js-shell.css';


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

		this.isActive = false;
		this.jslog = [];

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
		this.register();  // registers the component for the speech interface
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
		}
		this.scrollToBottom();
	}

	register() {
		this.context.session.speechInterface.register({
			name: [ 'shell', 'console' ],
			ref: this,
			commands: [{
				command: 'resetConsole',
				trigger: 'reset'
			}]
		});
	}

	getLogs = () => {
		this.setState({
			log: this.jslog
		});
	}

	resetConsole = () => {
		this.jslog = [];
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
			this.editor.setTheme( 'ace/theme/monokai' );
			this.editor.setOptions({
				highlightActiveLine: true,
				highlightGutterLine: true,
				readOnly: false
			});
		}

		if ( val !== solutionUnescaped ) {
			if ( this.props.id ) {
				const { session } = this.context;
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
		this.isActive = true;
		let currentCode = this.editor.getValue();
		if ( this.props.id ) {
			const { session } = this.context;
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
			var x = {
				type: 'error',
				msg: err.message
			};
			this.jslog.push( x );
		}
		this.props.onEvaluate( currentCode );
		this.isActive = false;
		this.getLogs();
	}

	stringifyObject( arg ) {
		if ( typeof arg === 'object' ) {
			return ( JSON.stringify( arg, null, 2 ) );
		}
		return arg;
	}

	innerConsole() {
		var self = this;
		var lg = [ 'log', 'debug', 'info', 'warn', 'error' ];
		for ( let i = 0; i < lg.length; i++ ) {
			let verb = lg[ i ];
			// eslint-disable-next-line no-console
			console[ verb ] = ( ( method, verb ) => {
				return function logger() {
					method.apply( console, arguments );

					if ( self.isActive ) {
						var msg = '';
						if ( verb === 'log' ) {
							for ( var i = 0; i < arguments.length; i++) {
								if ( i > 0 ) {
									msg += ' ';
								}
								msg += self.stringifyObject( arguments[i] );
							}
						}
						if ( msg === '' ) {
							msg = Array.prototype.slice.call( arguments ).join( ' ' );
						}
						var x = {
							type: verb,
							msg: msg
						};
						self.jslog.push( x );
					}
				};
			})( console[ verb ], verb ); // eslint-disable-line no-console
		}
	}

	getLog( e, i ) {
		const type = e.type || 'default';
		const style = CONSOLE_STYLES[ type ];
		return (
			<p key={i} style={style} >
				{ e.msg }
			</p>
		);
	}

	logHint = ( idx ) => {
		const { session } = this.context;
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
			res.push(
				this.getLog( e, i )
			);
		}
		return res;
	}

	renderResetButton() {
		return (
			<div className="reset" onClick={this.resetConsole} >☒</div>
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
		</ButtonToolbar>;

		const editor = <div className="jsedit" ref={( div ) => {
			this.editorDiv = div;
		}} ></div>;
		return (
			<div>
				<div className="JSShell">
					{editor}
					<div className="toolbar">
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
						className="console"
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
	vars: PropTypes.object
};

JSShell.contextTypes = {
	session: PropTypes.object
};


// EXPORTS //

export default JSShell;
