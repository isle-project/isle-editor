// MODULES //

import React, { Component } from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import ChatButton from 'components/chat-button';
import { Button, ButtonToolbar, Modal, OverlayTrigger, Popover, Tooltip } from 'react-bootstrap';

import ace from 'brace';
import 'brace/mode/javascript';
import 'brace/theme/katzenmilch';
import 'brace/theme/monokai';
import 'brace/theme/solarized_light';

// FUNCTIONS //

const max = Math.max;
global.console_id = null;
if ( !global.jslog ) global.jslog = [];


var tstring = `var a = 17;
	a = [];
	a.push( 712 );
	`;


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
				.map( ( hintText, i ) => <span key={i}>
					<label>Hint {i+1}:</label>
					<br />
					<span>{hintText}</span>
					<br />
				</span> )
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
	else if ( id === noHints ) {
		return 'Show Hints';
	}
	else {
		return 'Next Hint';
	}

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
				<span style={{ display: 'inline-block',  marginLeft: '4px' }}>
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
	} else {
		return (
			<Button
				bsStyle="warning"
				bsSize="sm"
				onClick={clickHandler}
			>{ !displayed ? 'Show Solution' : 'Hide Solution' }</Button>
		);
	}
};

const showResetButton = ( clickHandler ) => {
	const tooltip = (
		<Tooltip
			id="tooltip"
		>
			Reset the shell input to its default value.
		</Tooltip>
	);
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
					onClick={clickHandler}
				>Reset</Button>
			</span>
		</OverlayTrigger>
	);
};




function InitConsole ()
{
	var log = document.getElementById( console_id );
	var lg = [ 'log','debug','info','warn','error' ];

	lg.forEach( function ( verb ) {
		console[ verb ] = ( function ( method, verb, log ) {
			return function () {


				method.apply( console, arguments );
				var x = {
					console_id: global.console_id,
					type: verb,
					msg:  Array.prototype.slice.call( arguments ).join( ' ' )
				};

				if ( global.console_id ) global.jslog.push( x );

			};
		})( console[ verb ], verb, log );
	});
}


// MAIN //

class JSShell extends Component {

	constructor( props, context ) {
		super( props );

		this.state = {
			corrected: false,
			disabled: this.props.disabled,
			console_id: "consoleID",
			log: [],
			currentHint: 0,
			hintOpen: false,
			currentHelp: 0,
			helpOpen: false,
			solutionOpen: false
		};

		if ( this.props.vars ) {
			for ( var key in this.props.vars ) {
				global[ key ] = this.props.vars [ key ];
			}
		}

		this.get_logs = function() {
			var list = global.jslog;
			var msgs = [];

			for ( var i = 0; i < list.length; i++ ) {
				if ( list[ i ].console_id === this.state.console_id ) {
					msgs.push( list[ i ]);
				}
			}
			this.setState({
				log: msgs
			});
		};

		this.reset_console = () => {
			var list = global.jslog;
			var temp = [];
			for ( var i = 0; i < list.length; i++ ) {
				if ( list[ i ].console_id !== this.state.console_id ) temp.push( list[ i ]);
			}

			this.setState({
				log: []
			});

			global.jslog = temp;
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
					alert ( "Speichern des Logs" );

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
			if ( !global.jsconsole_initialized ) {
				global.jsconsole_initialized = true;
				InitConsole();
			}
			global.console_id = this.state.console_id;

			let currentCode = this.editor.getValue();
			try {
				if ( this.props.check ) {
					currentCode += ";" + this.props.check;
					eval( currentCode );
				}
				else  eval( currentCode );
			}
			catch ( err ) {
				alert( err.message );
				var x = {
					console_id: global.console_id,
					type: 'error',
					msg: err.message
				};
				if ( global.console_id ) global.jslog.push( x );
			}
			global.console_id = null;
			this.get_logs();
		};
	}

	// Now the ordinary functions:
	getLog( e, i ) {
		var style = null;
		switch ( e.type ) {
		case 'log':
			style = {
				marginLeft: '8px',
				fontFamily: 'monospace',
				color: 'lightgreen',
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
				color: 'darkcyan',
			};
			break;
		case 'warn':
			style = {
				marginLeft: '8px',
				fontFamily: 'monospace',
				color: 'darkorange',
			};
			break;
		default:
			style = {
				marginLeft: '8px',
				fontFamily: 'monospace',
				color: 'darkslategrey',
			};
			break;
		}

		return (
			<div key={i} style={style} >
				{ e.msg }
			</div>
		);
	}

	showHelp () {
		return (
			<Button
				bsStyle="success"
				bsSize="sm"
				onClick={this.handleHelpClick}
				disabled={this.state.disabled}
			>{`HELP`}</Button>
		);
	}

	showHints () {
		const label =  getHintLabel( this.state.currentHint, this.props.hints.length, this.state.hintOpen );
		return (
			<OverlayTrigger
				trigger="click"
				placement="left"
				overlay={ displayHint( this.state.currentHint - 1, this.props.hints ) }
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

	renderLogs () {
		let list = this.state.log;
		let res = [];
		for ( var i = 0; i < list.length; i++ ) {
			let e = list[ i ];
			console.log( e );
			res.push(
				this.getLog( e, i )
			);
		}
		return res;
	}

	componentDidMount() {
		this.editor = ace.edit( this.props.id );
		global.console_id = "console_" + this.props.id;

		this.setState({
			console_id: global.console_id
		});
		this.editor.getSession().setMode( 'ace/mode/javascript' );
		this.editor.setTheme( 'ace/theme/monokai' );
		// this.aceSession.getDocument().setNewLineMode( 'auto' );
		this.editor.setValue( this.props.code, -1 );

		const { session } = this.context;
		// hier müsste subscribe und unsubscribe folgen
	}

	componentWillMount() {

	}

	render() {

		const jsedit = {
			width: '98%',
			marginTop: '1%',
			marginLeft: '1%',
			height: '400px',
			fontFamily: 'monospace',
			fontSize: '20px',
			lineHeight: '28px',
			marginBottom: '20px'
		};

		const console  = {
			width: '98%',
			height: '160px',
			background: "rgb(60,60,60)",
			marginLeft: '1%',
			marginBottom: '20px',
			border: "solid 1px black",
			overflow: "auto",
			display: 'block'

		};

		const frame = {
			width: '99.9%',
			height: 'auto',
			marginLeft: '0%',
			fontFamily: 'monospace',
			fontSize: '18px',
			background: 'ivory',
			marginBottom: '20px',
			border: 'solid 1px black',
			boxShadow: '2px 2px 10px'
		};

		const reset = {
			marginRight: '4px',
			float: 'right',
			width: '22px',
			height: '22px',
			cursor: 'pointer',
			fontSize: '22px',
			textAlign: 'center',
			color: 'white',
			zIndex: 2
		};

		const myToolbar = {
			marginLeft: '1%',
			width: '96%'

		};

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

		const editor = <div style = { jsedit } id = { this.props.id }></div>;


		return (
			<div> 
				<div className="JSShell" style={frame}>
					{editor}
					<div style = { myToolbar } >
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
						<br/>
					</div>
					<div id={this.state.console_id} style={console} >
						<div style={reset} onClick={this.reset_console} >☒</div>
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
	id: "editor",
	chat: false,
	code: '',
	lines: 5,
	solution: '',
	libraries: [],
	hints: [],
	help: [],
	fontSize: 16,
	fontFamily: 'monospace',
	disabled: false,
};


// PROPERTY TYPES //

JSShell.propTypes = {
	chat: PropTypes.bool,
	onResult: PropTypes.func,
	onEvaluate:  PropTypes.func,
	id: PropTypes.string,
	code: PropTypes.string,
	lines: PropTypes.number,
	libraries: PropTypes.array,
	hints: PropTypes.array,
	help: PropTypes.array,
	fontFamily: PropTypes.string,
	fontSize: PropTypes.number,
	disabled: PropTypes.bool,
	solution: PropTypes.string,
};


// CONTEXT TYPES //

JSShell.contextTypes = {
	session: PropTypes.object
};


// EXPORTS //

export default JSShell;
