// MODULES //

import React, { Component } from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import Image from '@isle-project/components/image';
import ResponseVisualizer from '@isle-project/components/internal/response-visualizer';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Modal from 'react-bootstrap/Modal';
import Tooltip from 'react-bootstrap/Tooltip';
import DOMPurify from 'dompurify';
import createPrependCode from '@isle-project/components/r/utils/create-prepend-code';
import ChatButton from '@isle-project/components/internal/chat-button';
import isArray from '@stdlib/assert/is-array';
import isObject from '@stdlib/assert/is-object';
import isFunction from '@stdlib/assert/is-function';
import { isPrimitive as isString } from '@stdlib/assert/is-string';
import max from '@stdlib/math/base/special/max';
import logger from 'debug';
import CodeMirror from 'codemirror';
import generateUID from '@isle-project/utils/uid';
import Spinner from '@isle-project/components/internal/spinner';
import HintButton from '@isle-project/components/hint-button';
import OverlayTrigger from '@isle-project/components/overlay-trigger';
import SessionContext from '@isle-project/session/context.js';
import { RSHELL_DISPLAY_SOLUTION, RSHELL_EVALUATION, RSHELL_OPEN_HINT } from '@isle-project/constants/actions.js';
import { RETRIEVED_CURRENT_USER_ACTIONS } from '@isle-project/constants/events.js';
import { withPropCheck } from '@isle-project/utils/prop-check';
import 'codemirror/mode/r/r.js';
import 'codemirror/theme/elegant.css';
import 'codemirror/theme/paraiso-light.css';
import './rshell.css';


// VARIABLES //

const debug = logger( 'isle:r-shell' );
const uid = generateUID( 'r-shell' );
const HELP_REGEX = /(help\([^)]*\)|\?[^\n]*)/;
let counter = 0;
let rCode = [];


// FUNCTIONS //

const getLastAction = ( val, id ) => {
	if ( isObject( val ) ) {
		let actions = val[ id ];
		if ( isArray( actions ) ) {
			actions = actions.filter( action => {
				return action.type === RSHELL_EVALUATION;
			});
			if ( actions.length > 0 ) {
				return actions[ 0 ].value;
			}
		}
	}
	return null;
};

const insertImages = ( imgs, t ) => {
	const ret = [];
	for ( let i = 0; i < imgs.length; i++ ) {
		ret[ i ] = ( <Image width="60%" height="auto" key={i} src={imgs[ i ]} title={t('r-plot')} /> );
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

const showSolutionButton = ( exhaustedHints, clickHandler, displayed, nEvaluations, t ) => {
	const tooltip = (
		<Tooltip
			id="tooltip"
		>
			{t('solution-tooltip')}
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
					>{ !displayed ? t('show-solution') : t('hide-solution') }</Button>
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

const showResetButton = ( clickHandler, t ) => {
	const tooltip = (
		<Tooltip
			id="tooltip"
		>
			{t('reset-tooltip')}
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
				>{t('reset')}</Button>
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
class RShell extends Component {
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

		this.id = props.id || uid( props );

		counter += 1;
		rCode.push( props.code );

		this.insertPlot = ( url, id ) => {
			return ( <Image key={id} src={url} title={props.t('r-plot')} /> );
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
				const session = this.context;
				session.log({
					id: this.id,
					type: RSHELL_DISPLAY_SOLUTION,
					value: val
				});
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
				session.log({
					id: this.id,
					type: RSHELL_EVALUATION,
					value: currentCode
				});
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
			this.editor.setOption( 'readOnly', 'nocursor' );
		}

		// Add event listener:
		this.editor.on( 'change', this.props.onChange );

		if ( this.props.precompute ) {
			this.handleEvaluationClick();
		}

		const session = this.context;
		if ( session ) {
			this.unsubscribe = session.subscribe( ( type, val ) => {
				if ( type === RETRIEVED_CURRENT_USER_ACTIONS ) {
					let lastAction = getLastAction( val, this.id );
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
			const value = getLastAction( actions, this.id );
			if ( isString( value ) ) {
				// eslint-disable-next-line react/no-did-mount-set-state
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
			let slide = node.closest ? node.closest( '.spectacle-content' ) : null;
			if ( slide ) {
				let computedStyle = window.getComputedStyle( slide );
				let transform = computedStyle.getPropertyValue( 'transform' );
				let match = /matrix\(([0-9.]*)/.exec( transform );
				if ( isArray( match ) && match.length > 1 ) {
					let scaleFactor = match[ 1 ];
					node.style.transform = `scale(${1/scaleFactor})`; // eslint-disable-line i18next/no-literal-string
				}
			}
		}
		this.editor.refresh();
	}

	componentWillUnmount() {
		counter = 0;
		rCode = [];
		if ( this.unsubscribe ) {
			this.unsubscribe();
		}
		if ( this.editor && isFunction( this.editor.destroy ) ) {
			this.editor.destroy();
		}
		this.editor = null;
	}

	handleResetClick = () => {
		this.editor.setValue( this.props.code, 1 );
	};

	logHint = ( idx ) => {
		const session = this.context;
		session.log({
			id: this.id,
			type: RSHELL_OPEN_HINT,
			value: idx
		});
	};

	hideHelp = () => {
		this.setState({ help: '' });
	};

	renderHelpModal() {
		const { t } = this.props;
		return ( <Modal
			backdrop={false}
			show={Boolean( this.state.help )}
			title={t('r-help')}
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
				<Modal.Title id="contained-modal-title-lg">{t('r-help')}</Modal.Title>
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
				<Button onClick={this.hideHelp}>{t('close')}</Button>
			</Modal.Footer>
		</Modal> );
	}

	render() {
		const nHints = this.props.hints.length;
		const { t } = this.props;
		const style = {
			lineHeight: '1.2em',
			maxHeight: `${(max( 5, this.props.lines )*1.2) + 0.5}em`, // eslint-disable-line i18next/no-literal-string
			height: `${(this.props.lines*1.2) + 0.5}em`, // eslint-disable-line i18next/no-literal-string
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
							marginBottom: '8px'
						}}
						onClick={this.handleEvaluationClick}
					>{t('evaluate')}</Button> :
					<span />
				}
				<Spinner
					running={this.state.running}
					width={60}
					height={30}
					display="inline"
					lines={12}
					style={{
						marginBottom: '-12px'
					}}
				/>
				{ !this.props.disabled ? <ButtonToolbar style={{ float: 'right' }}>
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
					{ this.props.solution ?
						showSolutionButton(
							this.state.exhaustedHints,
							this.handleSolutionClick,
							this.state.solutionOpen,
							this.state.nEvaluations,
							t
						) :
						null
					}
					{ ( this.props.resettable ) ?
						showResetButton(
							this.handleResetClick,
							t
						) :
						null
					}
					{
						( this.props.chat ) ?
							<span style={{ display: 'inline-block', marginLeft: '4px' }}>
								<ChatButton for={this.id} />
							</span> :
							null
					}
				</ButtonToolbar> : null }
				<div id="output">
					{ showResult( this.state.result ) }
					{ insertImages( this.state.plots, t ) }
				</div>
				<ResponseVisualizer id={this.id} info={RSHELL_EVALUATION} />
				{this.renderHelpModal()}
			</div>
		);
	}
}


// PROPERTIES //

RShell.propTypes = {
	code: PropTypes.string,
	solution: PropTypes.string,
	hints: PropTypes.arrayOf(
		PropTypes.oneOfType([ PropTypes.string, PropTypes.node ])
	),
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

export default withTranslation( 'r' )( withPropCheck( RShell ) );
