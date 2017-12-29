// MODULES //

import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import Image from 'components/image';
import InstructorBar from 'components/instructor-bar';
import { Button, ButtonToolbar, Modal, OverlayTrigger, Tooltip } from 'react-bootstrap';
import DOMPurify from 'dompurify';
import createPrependCode from 'components/r/utils/create-prepend-code';
import ChatButton from 'components/chat-button';
import beforeUnload from 'utils/before-unload';
import isElectron from 'utils/is-electron';
import isArray from '@stdlib/assert/is-array';
import isObject from '@stdlib/assert/is-object';
import isString from '@stdlib/assert/is-string';
import max from '@stdlib/math/base/special/max';
import logger from 'debug';
import ace from '@planeshifter/brace';
import '@planeshifter/brace/mode/r';
import '@planeshifter/brace/theme/katzenmilch';
import '@planeshifter/brace/theme/solarized_light';
import Spinner from 'components/spinner';
import HintButton from 'components/hint-button';
import './rshell.css';


// VARIABLES //

const debug = logger( 'isle-editor' );
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


// R SHELL //

class RShell extends React.Component {
	constructor( props ) {
		super( props );

		this.state = {
			id: counter,
			disabled: props.disabled,
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
					const { session } = this.context;
					session.log({
						id: this.props.id,
						type: 'RSHELL_DISPLAY_SOLUTION',
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
				const { session } = this.context;
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
						type: 'RSHELL_EVALUATION',
						value: currentCode
					});
				}

				let prependCode = createPrependCode( this.props.libraries, this.props.prependCode );
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
		this.editor = ace.edit( this.editorDiv );
		this.aceSession = this.editor.getSession();
		this.aceSession.setMode( 'ace/mode/r' );
		this.aceSession.getDocument().setNewLineMode( 'unix' );
		this.editor.setTheme( 'ace/theme/katzenmilch' );
		this.editor.$blockScrolling = Infinity;
		this.editor.setOptions({
			maxLines: max( 5, this.props.lines ),
			minLines: this.props.lines,
			fontFamily: this.props.fontFamily,
			fontSize: this.props.fontSize
		});
		this.aceSession.setUseWrapMode( true );
		this.editor.setValue( this.props.code, -1 );
		this.editor.resize();
		if ( this.state.disabled ) {
			this.editor.setOptions({
				readOnly: true,
				highlightActiveLine: false,
				highlightGutterLine: false
			});
			this.editor.renderer.$cursorLayer.element.style.opacity = 0;
			this.editor.textInput.getElement().disabled = true;
		}

		if ( !isElectron ) {
			const onChange = () => {
				window.addEventListener( 'beforeunload', beforeUnload );
				this.aceSession.off( 'change', onChange );
			};
			this.aceSession.on( 'change', onChange );
		}

		if ( this.props.precompute ) {
			this.handleEvaluationClick();
		}

		const { session } = this.context;
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

	componentWillReceiveProps( nextProps ) {
		if ( this.props.code !== nextProps.code ) {
			rCode[ this.state.id ] = nextProps.code;
			this.editor.setValue( nextProps.code, 1 );
			if ( nextProps.precompute ) {
				this.handleEvaluationClick();
			}
		}
	}

	componentDidUpdate() {
		this.editor.resize();
		const node = ReactDom.findDOMNode( this );
		// Undo Spectacle scaling as it messes up the rendering of the ACE editor:
		let slide = node.closest( '.spectacle-content' );
		if ( slide ) {
			let computedStyle = window.getComputedStyle( slide );
			let transform = computedStyle.getPropertyValue( 'transform' );
			let match = /matrix\(([0-9.]*)/.exec( transform );
			if ( isArray( match ) && match.length > 1 ) {
				let scaleFactor = [ 1 ];
				node.style.transform = `scale(${1/scaleFactor})`;
			}
		}
	}

	componentWillUnmount() {
		counter = 0;
		rCode = [];
		if ( this.unsubscribe ) {
			this.unsubscribe();
		}
		this.editor.destroy();
		this.editor = null;
	}

	handleResetClick = () => {
		this.editor.setValue( this.props.code, 1 );
	}

	logHint = ( idx ) => {
		const { session } = this.context;
		if ( this.props.id ) {
			session.log({
				id: this.props.id,
				type: 'RSHELL_OPEN_HINT',
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

	render() {
		const nHints = this.props.hints.length;
		return (
			<div className="rshell"
				style={this.props.style}
			>
				<div className="rshell-editor" ref={( div ) => { this.editorDiv = div; }}></div>
				{ !this.state.disabled ?
					<Button
						bsStyle="primary"
						bsSize="sm"
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
							disabled={this.state.disabled}
							hints={this.props.hints}
							onClick={this.logHint}
							onFinished={() => {
								this.setState({ exhaustedHints: true });
							}}
						/> :
						null
					}
					{ ( this.props.solution && !this.state.disabled ) ?
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
							<span style={{display: 'inline-block', marginLeft: '4px' }}>
								<ChatButton for={this.props.id} />
							</span> :
							null
					}
				</ButtonToolbar>
				<div id="output">
					{ showResult( this.state.result ) }
					{ insertImages( this.state.plots ) }
				</div>
				{ this.props.id ? <InstructorBar id={this.props.id} /> : null }
				<Modal
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
				</Modal>
			</div>
		);
	}
}


// PROPERTY TYPES //

RShell.propTypes = {
	addPreceding: PropTypes.bool,
	chat: PropTypes.bool,
	code: PropTypes.string,
	disabled: PropTypes.bool,
	fontFamily: PropTypes.string,
	fontSize: PropTypes.number,
	hints: PropTypes.array,
	libraries: PropTypes.array,
	lines: PropTypes.number,
	onEvaluate: PropTypes.func,
	onResult: PropTypes.func,
	precompute: PropTypes.bool,
	prependCode: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.array
	]),
	resettable: PropTypes.bool,
	solution: PropTypes.string,
	style: PropTypes.object
};

RShell.contextTypes = {
	session: PropTypes.object
};


// DEFAULT PROPERTIES //

RShell.defaultProps = {
	addPreceding: false,
	chat: false,
	code: '',
	disabled: false,
	fontFamily: 'Courier New',
	fontSize: 16,
	hints: [],
	libraries: [],
	lines: 5,
	onEvaluate(){},
	onResult() {},
	precompute: false,
	prependCode: '',
	resettable: false,
	solution: '',
	style: {}
};


// EXPORTS //

export default RShell;
