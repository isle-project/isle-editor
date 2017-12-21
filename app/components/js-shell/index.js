// MODULES //

import React, { Component } from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import ChatButton from 'components/chat-button';
import { Button, ButtonToolbar, OverlayTrigger, Popover, Tooltip } from 'react-bootstrap';
import hasOwnProp from '@stdlib/assert/has-own-property';
import ace from 'brace';
import 'brace/mode/javascript';
import 'brace/theme/katzenmilch';
import 'brace/theme/monokai';
import 'brace/theme/solarized_light';
import './js-shell.css';


// FUNCTIONS //

const displayHint = ( id, hints ) => {
	return (
		<Popover
			id="popover-positioned-top"
			title="Hints"
			style={{
				minWidth: '400px'
			}}
		>
			{ hints
				.filter( ( e, i ) => i <= id )
				.map( ( hintText, i ) => ( <span key={i}>
					<label>Hint {i+1}:</label>
					<br />
					<span>{hintText}</span>
					<br />
				</span> ) )
			}
		</Popover>
	);
};


const getHintLabel = ( id, noHints, hintOpen ) => {
	if ( hintOpen ) {
		return id <= 1 ? 'Close Hint' : 'Close Hints';
	}
	if ( id === 0 ) {
		return 'Get Hint';
	}
	if ( id === noHints ) {
		return 'Show Hints';
	}

	return 'Next Hint';
};


const showSolutionButton = ( currentHint, nHints, clickHandler, displayed, nEvaluations ) => {
	const tooltip = (
		<Tooltip
			id="tooltip"
		>
			Solution becomes available once you have tried the exercise and used all hints.
		</Tooltip>
	);
	if ( currentHint < nHints || nEvaluations < 1 ) {
		return (
			<OverlayTrigger
				placement="top"
				positionLeft={100}
				overlay={tooltip}
				rootClose={true}
			>
				<span style={{ display: 'inline-block', marginLeft: '4px' }}>
					<Button
						bsStyle="warning"
						bsSize="sm"
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
			bsStyle="warning"
			bsSize="sm"
			onClick={clickHandler}
		>{ !displayed ? 'Show Solution' : 'Hide Solution' }</Button>
	);
};


// MAIN //

class JSShell extends Component {
	constructor( props, context ) {
		super( props );

		this.state = {
			disabled: this.props.disabled,
			log: [],
			currentHint: 0,
			hintOpen: false,
			currentHelp: 0,
			helpOpen: false,
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

		this.get_logs = () => {
			this.setState({
				log: this.jslog
			});
		};

		this.reset_console = () => {
			this.jslog = [];
			this.setState({
				log: []
			});
		};

		this.handleSolutionClick = () => {
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
		};


		this.handleHintClick = () => {
			const { currentHint, hintOpen } = this.state;
			const { hints } = this.props;
			const { session } = this.context;
			if ( currentHint < hints.length && hintOpen === false ) {
				if ( this.props.id ) {
					session.log({
						id: this.props.id,
						type: 'JSSHELL_OPEN_HINT',
						value: currentHint
					});
				}
				this.setState({
					currentHint: currentHint + 1,
					hintOpen: true
				});
			} else {
				this.setState({
					hintOpen: !this.state.hintOpen
				});
			}
		};

		this.handleHelpClick = () => {
			const { currentHelp, helpOpen } = this.state;
			const { help } = this.props;
			const { session } = this.context;

			if ( currentHelp < help.length && helpOpen === false ) {
				if ( this.props.id ) {
					console.log( 'Speichern des Logs' );
					session.log({
						id: this.props.id,
						type: 'JSSHELL_OPEN_HELP',
						value: currentHelp
					});
				}
				this.setState({
					currentHelp: currentHelp + 1,
					helpOpen: true
				});
			} else {
				this.setState({
					helpOpen: !this.state.hintOpen
				});
			}
		};

		this.handleEvaluationClick = () => {
			this.isActive = true;
			let currentCode = this.editor.getValue();
			try {
				if ( this.props.check ) {
					currentCode += ';' + this.props.check;
					eval( currentCode );  // eslint-disable-line no-eval
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
			this.isActive = false;
			this.get_logs();
		};
	}

	componentDidMount() {
		this.editor = ace.edit( this.props.id );
		this.editor.getSession().setMode( 'ace/mode/javascript' );
		this.editor.setTheme( 'ace/theme/monokai' );
		// this.aceSession.getDocument().setNewLineMode( 'auto' );
		this.editor.setValue( this.props.code, -1 );

		const { session } = this.context;  // eslint-disable-line
		// hier müsste subscribe und unsubscribe folgen
		this.innerConsole();
	}

	innerConsole() {
		var self = this;
		var lg = [ 'log', 'debug', 'info', 'warn', 'error' ];
		for ( let i = 0; i < lg.length; i++ ) {
			let verb = lg[ i ];
			console[ verb ] = ( ( method, verb ) => {
				return function logger() {
					method.apply( console, arguments );
					var x = {
						type: verb,
						msg: Array.prototype.slice.call( arguments ).join( ' ' )
					};
					if ( self.isActive ) {
						self.jslog.push( x );
					}
				};
			})( console[ verb ], verb );
		}
	}

	// Now the ordinary functions:
	getLog( e, i ) {
		var style = null;
		switch ( e.type ) {
		case 'log':
			style = {
				marginLeft: '8px',
				fontFamily: 'monospace',
				color: 'lightgreen'
			};
			break;
		case 'error':
			style = {
				marginLeft: '8px',
				fontFamily: 'monospace',
				color: 'red',
				fontWeight: 800
			};
			break;
		case 'info':
			style = {
				marginLeft: '8px',
				fontFamily: 'monospace',
				color: 'darkcyan'
			};
			break;
		case 'warn':
			style = {
				marginLeft: '8px',
				fontFamily: 'monospace',
				color: 'darkorange'
			};
			break;
		default:
			style = {
				marginLeft: '8px',
				fontFamily: 'monospace',
				color: 'darkslategrey'
			};
			break;
		}

		return (
			<div key={i} style={style} >
				{ e.msg }
			</div>
		);
	}

	showHelp() {
		return (
			<Button
				bsStyle="success"
				bsSize="sm"
				onClick={this.handleHelpClick}
				disabled={this.state.disabled}
			>{'HELP'}</Button>
		);
	}

	showHints() {
		const label = getHintLabel( this.state.currentHint, this.props.hints.length, this.state.hintOpen );
		return (
			<OverlayTrigger
				trigger="click"
				placement="left"
				overlay={displayHint( this.state.currentHint - 1, this.props.hints )}
			>
				<Button
					bsStyle="success"
					bsSize="sm"
					onClick={this.handleHintClick}
					disabled={this.state.disabled}
				>{label}</Button>
			</OverlayTrigger>
		);
	}

	renderLogs() {
		let list = this.state.log;
		let res = [];
		for ( var i = 0; i < list.length; i++ ) {
			let e = list[ i ];
			// console.log( e );
			res.push(
				this.getLog( e, i )
			);
		}
		return res;
	}

	render() {
		const nHints = this.props.hints.length;
		const nHelp	= this.props.help.length;
		const toolbar = <ButtonToolbar style={{ float: 'right', marginTop: '8px' }}>
			{ nHints > 0 ? this.showHints() : null }
			{ nHelp > 0 ? this.showHelp() : null }
			{ ( this.props.solution && !this.state.disabled ) ?
				showSolutionButton(
					this.state.currentHint,
					nHints,
					this.handleSolutionClick,
					this.state.solutionOpen,
					this.state.nEvaluations
				) :
				null
			}
			{
				( this.props.chat && this.props.id ) ?
					<span style={{display: 'inline-block', marginLeft: '4px' }}>
						<ChatButton for={this.props.id} />
					</span> :
					null
			}
		</ButtonToolbar>;

		const editor = <div className="jsedit" id={this.props.id}></div>;
		return (
			<div>
				<div className="JSShell">
					{editor}
					<div className="toolbar">
						{ !this.state.disabled ?
							<Button
								bsStyle="primary"
								bsSize="sm"
								style={{
									marginTop: '8px',
									marginBottom: '8px'
								}}
								onClick={this.handleEvaluationClick}
							>Test Code</Button> :
							<span />
						}
						{ toolbar }
						<br />
					</div>
					<div id={this.props.id} className="console" >
						<div className="reset" onClick={this.reset_console} >☒</div>
						{this.renderLogs()}
					</div>
				</div>
			</div>
		);
	}
}


// DEFAULT PROPERTIES //

JSShell.defaultProps = {
	onResult() {},
	onEvaluate(){},
	id: 'editor',
	chat: false,
	check: null,
	code: '',
	lines: 5,
	solution: '',
	libraries: [],
	hints: [],
	help: [],
	fontSize: 16,
	fontFamily: 'monospace',
	disabled: false
};


// PROPERTY TYPES //

/* eslint-disable react/no-unused-prop-types */

JSShell.propTypes = {
	chat: PropTypes.bool,
	check: PropTypes.string,
	code: PropTypes.string,
	disabled: PropTypes.bool,
	fontFamily: PropTypes.string,
	fontSize: PropTypes.number,
	help: PropTypes.array,
	hints: PropTypes.array,
	id: PropTypes.string,
	libraries: PropTypes.array,
	lines: PropTypes.number,
	onEvaluate: PropTypes.func,
	onResult: PropTypes.func,
	solution: PropTypes.string
};

/* eslint-enable */


// CONTEXT TYPES //

JSShell.contextTypes = {
	session: PropTypes.object
};


// EXPORTS //

export default JSShell;
