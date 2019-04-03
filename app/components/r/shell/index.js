// MODULES //

import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import Image from 'components/image';
import ResponseVisualizer from 'components/response-visualizer';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Modal from 'react-bootstrap/Modal';
import Tooltip from 'react-bootstrap/Tooltip';
import DOMPurify from 'dompurify';
import createPrependCode from 'components/r/utils/create-prepend-code';
import ChatButton from 'components/chat-button';
import isArray from '@stdlib/assert/is-array';
import isObject from '@stdlib/assert/is-object';
import isFunction from '@stdlib/assert/is-function';
import { isPrimitive as isString } from '@stdlib/assert/is-string';
import max from '@stdlib/math/base/special/max';
import logger from 'debug';
import CodeMirror from 'codemirror';
import Spinner from 'components/spinner';
import HintButton from 'components/hint-button';
import OverlayTrigger from 'components/overlay-trigger';
import SessionContext from 'session/context.js';
import { RSHELL_DISPLAY_SOLUTION, RSHELL_EVALUATION, RSHELL_OPEN_HINT } from 'constants/actions.js';
import 'codemirror/mode/r/r.js';
import 'codemirror/theme/elegant.css';
import 'codemirror/theme/paraiso-light.css';
import './rshell.css';


// VARIABLES //

const debug = logger( 'isle:r-shell' );
const HELP_REGEX = /(help\([^)]*\)|\?[^\n]*)/;
let counter = 0;
let rCode = [];


// FUNCTIONS //

const insertImages = ( imgs ) => {
	const ret = [];
	for ( let i = 0; i < imgs.length; i++ ) {
		ret[ i ] = ( <Image key={i} src={imgs[ i ]} title="R Plot" /> );
	}
	return ret;
};

const showResult = ( res ) => {
	if ( res ) {
		let sanitized = {
			__html: DOMPurify.sanitize( res )
		};
		return ( <pre id="output"><span
			dangerouslySetInnerHTML={sanitized} // eslint-disable-line react/no-danger
		/></pre>);
	}
	return <span />;
};

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
					variant="warning"
					size="sm"
					onClick={clickHandler}
				>Reset</Button>
			</span>
		</OverlayTrigger>
	);
};


// MAIN //

/**
* An interactive R Shell that can be used to execute R commands in the cloud using [OpenCPU](https://www.opencpu.org/).
*
* @property {string} code - R code to be evaluated
* @property {string} solution - for programming questions, R code `string` representing the official solution for the problem
* @property {Array<string>} hints - for programming questions, an array of hints providing guidance on how to approach the problem
* @property {boolean} addPreceding - if set to true, the shell will evaluate all the code from the current component and all previous ones occurring in the lesson
* @property {Array<string>} libraries - R libraries that should be loaded automatically when the input `code` is executed
* @property {boolean} precompute - controls whether the default code should be executed once the component has mounted
* @property {(string|Array<string>)} prependCode - R code `string` (or `array` of R code blocks) to be prepended to the code stored in `code` when evaluating
* @property {boolean} chat - controls whether group chat functionality should be enabled
* @property {boolean} disabled - controls whether to disable all user inputs and make the code block static
* @property {number} lines - number of lines to display
* @property {boolean} resettable - controls whether to display a reset button for restoring the default code input
* @property {Object} style - CSS inline styles
* @property {Function} onChange - callback invoked whenever the text field input changes
* @property {Function} onEvaluate - callback invoked whenever the `Evaluate` button is clicked
* @property {Function} onResult - callback invoked whenever the result of a code execution is obtained from the cloud. The result `string` is passed as the only argument to the callback function
*/
class RShell extends React.Component {
	constructor( props ) {
		super( props );

		this.state = {
			id: counter,
			exhaustedHints: props.hints.length === 0,
			result: '',
			plots: [],
			running: false,
			nEvaluations: 0,
			solutionOpen: false,
			help: ''
		};

		counter += 1;
		rCode.push( props.code );

		this.insertPlot = ( url, id ) => {
			return ( <Image key={id} src={url} title="R Plot" /> );
		};

		this.handleSolutionClick = () => {
			const val = this.editor.getValue();
			const solutionUnescaped = this.props.solution.replace( /\\n/g, '\n' );
			if ( this.state.solutionOpen === false ) {
				this.editor.setOption( 'theme', 'paraiso-light' );
				this.editor.setOption( 'readOnly', true );
			} else {
				this.editor.setOption( 'theme', 'elegant' );
				this.editor.setOption( 'readOnly', false );
			}
			if ( val !== solutionUnescaped ) {
				if ( this.props.id ) {
					const session = this.context;
					session.log({
						id: this.props.id,
						type: RSHELL_DISPLAY_SOLUTION,
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

		this.handleEvaluationClick = () => {
			debug( 'Evaluate R code...' );
			this.setState({
				result: '',
				plots: [],
				running: true
			});
			let currentCode = this.editor.getValue();
			rCode[ this.state.id ] = currentCode;

			if ( currentCode === '' ) {
				this.setState({
					result: 'Code to be evaluated is empty',
					running: false
				});
			}
			else {
				const session = this.context;
				let helpCommand = currentCode.match( HELP_REGEX );
				if ( helpCommand ) {
					session.getRHelpPage( helpCommand[ 0 ], ( err, res, html ) => {
						if ( !err ) {
							this.setState({
								help: html
							});
						}
					});
				}
				if ( this.props.id ) {
					session.log({
						id: this.props.id,
						type: RSHELL_EVALUATION,
						value: currentCode
					});
				}

				let prependCode = createPrependCode( this.props.libraries, this.props.prependCode, session );
				if ( this.props.addPreceding ) {
					for ( let i = 0; i < this.state.id; i++ ) {
						prependCode += rCode[ i ];
						prependCode += '\n';
					}
				}
				currentCode = prependCode + currentCode + '\n';
				this.props.onEvaluate( currentCode );
				if ( !session ) {
					return this.setState({
						result: 'R code can only be run in a production environment',
						nEvaluations: this.state.nEvaluations + 1,
						running: false
					});
				}
				session.executeRCode({
					code: currentCode,
					onResult: ( err, res, body ) => {
						this.setState({
							result: body,
							nEvaluations: this.state.nEvaluations + 1
						});
						this.props.onResult( this.state.result );
					},
					onPlots: ( plots ) => {
						this.setState({
							plots,
							running: false,
							nEvaluations: this.state.nEvaluations + 1
						});
					},
					onError: ( error ) => {
						this.setState({
							result: error,
							running: false,
							nEvaluations: this.state.nEvaluations + 1
						});
					}
				});
			}
		};
	}

	componentDidMount() {
		this.editor = CodeMirror( this.editorDiv, {
			mode: 'r',
			theme: 'elegant',
			lineNumbers: true,
			lineWrapping: true
		});
		this.editor.setValue( this.props.code, -1 );
		if ( this.props.disabled ) {
			this.editor.setOption( 'readOnly', true );
			this.editor.textInput.getElement().disabled = true;
		}

		// Add event listener:
		this.editor.on( 'change', this.props.onChange );

		if ( this.props.precompute ) {
			this.handleEvaluationClick();
		}

		const session = this.context;
		if ( session ) {
			this.unsubscribe = session.subscribe( ( type, val ) => {
				if ( type === 'retrieved_current_user_actions' ) {
					let lastAction = this.getLastAction( val, this.props.id );
					if ( isString( lastAction ) ) {
						this.setState({
							lastSolution: lastAction,
							solutionOpen: false
						});
						this.editor.setValue( lastAction, 1 );
					}
				} else {
					this.forceUpdate();
				}
			});
			const actions = session.currentUserActions;
			const value = this.getLastAction( actions, this.props.id );
			if ( isString( value ) ) {
				this.setState({
					lastSolution: value,
					solutionOpen: false
				});
				this.editor.setValue( value, 1 );
			}
		}
	}

	componentDidUpdate( prevProps ) {
		if ( this.props.code !== prevProps.code ) {
			rCode[ this.state.id ] = this.props.code;
			this.editor.setValue( this.props.code, 1 );
			if ( this.props.precompute ) {
				this.handleEvaluationClick();
			}
		}
		else if ( this.props.disabled !== prevProps.disabled ) {
			if ( this.props.disabled ) {
				this.editor.setOption( 'readOnly', true );
			} else {
				this.editor.setOption( 'readOnly', false );
			}
		}
		else {
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
	}

	componentWillUnmount() {
		counter = 0;
		rCode = [];
		if ( this.unsubscribe ) {
			this.unsubscribe();
		}
		if ( isFunction( this.editor.destroy ) ) {
			this.editor.destroy();
		}
		this.editor = null;
	}

	handleResetClick = () => {
		this.editor.setValue( this.props.code, 1 );
	}

	logHint = ( idx ) => {
		const session = this.context;
		if ( this.props.id ) {
			session.log({
				id: this.props.id,
				type: RSHELL_OPEN_HINT,
				value: idx
			});
		}
	}

	hideHelp = () => {
		this.setState({ help: '' });
	}

	getLastAction = ( val, id ) => {
		if ( isObject( val ) ) {
			let actions = val[ id ];
			if ( isArray( actions ) ) {
				actions = actions.filter( action => {
					return action.type === 'RSHELL_EVALUATION';
				});
				if ( actions.length > 0 ) {
					return actions[ 0 ].value;
				}
			}
		}
		return null;
	}

	renderHelpModal() {
		return ( <Modal
			backdrop={false}
			show={Boolean( this.state.help )}
			title="R Help"
			onHide={this.hideHelp}
			style={{
				left: 'auto',
				padding: '10px',
				position: 'fixed',
				top: '10px',
				right: '30px',
				zIndex: 99999,
				overflow: 'hidden'
			}}
			enforceFocus={false}
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-lg">R Help</Modal.Title>
			</Modal.Header>
			<Modal.Body style={{
				height: '400',
				overflow: 'auto'
			}}>
				<span
					dangerouslySetInnerHTML={{ // eslint-disable-line react/no-danger
						__html: this.state.help
					}}
				></span>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={this.hideHelp}>Close</Button>
			</Modal.Footer>
		</Modal> );
	}

	render() {
		const nHints = this.props.hints.length;
		const style = {
			lineHeight: '1.2em',
			maxHeight: `${max( 5, this.props.lines )*1.2}em`,
			height: `${this.props.lines*1.2}em`,
			...this.props.style
		};
		return (
			<div className="rshell"
				style={this.props.style}
			>
				<div className="rshell-editor" style={style} ref={( div ) => { this.editorDiv = div; }}></div>
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
				<Spinner
					running={this.state.running}
					width={60}
					height={30}
					display="inline"
					lines={12}
					style={{
						marginTop: '8px',
						marginBottom: '-12px'
					}}
				/>
				<ButtonToolbar style={{ float: 'right', marginTop: '8px' }}>
					{ nHints > 0 ?
						<HintButton
							disabled={this.props.disabled}
							hints={this.props.hints}
							onClick={this.logHint}
							onFinished={() => {
								this.setState({ exhaustedHints: true });
							}}
						/> :
						null
					}
					{ ( this.props.solution && !this.props.disabled ) ?
						showSolutionButton(
							this.state.exhaustedHints,
							this.handleSolutionClick,
							this.state.solutionOpen,
							this.state.nEvaluations
						) :
						null
					}
					{ ( this.props.resettable ) ?
						showResetButton(
							this.handleResetClick
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
				</ButtonToolbar>
				<div id="output">
					{ showResult( this.state.result ) }
					{ insertImages( this.state.plots ) }
				</div>
				<ResponseVisualizer id={this.props.id} info="RSHELL_EVALUATION" />
				{this.renderHelpModal()}
			</div>
		);
	}
}


// PROPERTIES //

RShell.propTypes = {
	code: PropTypes.string,
	solution: PropTypes.string,
	hints: PropTypes.array,
	addPreceding: PropTypes.bool,
	libraries: PropTypes.array,
	precompute: PropTypes.bool,
	prependCode: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.array
	]),
	chat: PropTypes.bool,
	disabled: PropTypes.bool,
	lines: PropTypes.number,
	resettable: PropTypes.bool,
	style: PropTypes.object,
	onChange: PropTypes.func,
	onEvaluate: PropTypes.func,
	onResult: PropTypes.func
};

RShell.defaultProps = {
	code: '',
	solution: '',
	hints: [],
	addPreceding: false,
	libraries: [],
	precompute: false,
	prependCode: '',
	chat: false,
	disabled: false,
	lines: 5,
	resettable: false,
	style: {},
	onChange() {},
	onEvaluate(){},
	onResult() {}
};

RShell.contextType = SessionContext;


// EXPORTS //

export default RShell;
