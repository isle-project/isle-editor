// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import { connect } from 'react-redux';
import { findDOMNode } from 'react-dom';
import vex from 'vex-js';
import PINF from '@stdlib/constants/math/float64-pinf';
import { jumpToElementInEditor, switchWithNext, switchWithPrevious, toggleConfigurator } from 'actions';
import './line_wrapper.css';


// VARIABLES //

const debug = logger( 'isle:line-wrapper' );
const RE_LOADABLE = /(\s|^)isle-loadable(\s|$)/;
const RE_LINE_WRAPPER_BAR = /(\s|^)line-wrapper-bar(\s|$)/;
const RE_CONTEXT_MENU = /(\s|^)react-contextmenu(\s|$)/;


// FUNCTIONS //

function isDOMElement( elem ) {
	return elem instanceof Element || elem instanceof HTMLDocument;
}


// MAIN //

/**
* A line wrapper for use in the editor.
*/
class LineWrapper extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			style: null
		};
	}

	componentDidMount() {
		this.__unmounted = false;
		window.requestIdleCallback( this.retrievePositioning );
	}

	componentWillUnmount() {
		this._unmounted = true;
	}

	retrievePositioning = () => {
		debug( 'Retrieve positioning...' );
		if ( this._unmounted || this.state.style ) {
			return;
		}
		const node = findDOMNode( this );
		const child = node.lastChild;
		if (
			child &&
			!RE_LOADABLE.test( child.className ) &&
			!RE_LINE_WRAPPER_BAR.test( child.className )
		) {
			if ( RE_CONTEXT_MENU.test( child.className ) ) {
				return this.setState({
					style: {}
				});
			}
			const style = isDOMElement( child ) ? window.getComputedStyle( child, null ) : {};
			if ( style.position === 'fixed' || style.position === 'absolute' ) {
				this.setState({
					style: {
						position: style.position,
						top: style.top,
						left: style.left,
						bottom: style.bottom,
						right: style.right
					}
				});
			}
		} else {
			window.requestIdleCallback( this.retrievePositioning );
		}
	}

	handleDoubleClick = ( event ) => {
		event.stopPropagation();
		this.props.jumpToElementInEditor({
			startLineNumber: this.props.startLineNumber,
			endLineNumber: this.props.endLineNumber,
			startColumn: this.props.startColumn,
			endColumn: this.props.endColumn,
			elementRangeAction: null
		});
	}

	handleConfiguratorTrigger = () => {
		this.props.jumpToElementInEditor({
			startLineNumber: this.props.startLineNumber,
			endLineNumber: this.props.endLineNumber,
			startColumn: this.props.startColumn,
			endColumn: this.props.endColumn,
			elementRangeAction: 'trigger_configurator'
		});
	}

	deleteElement = () => {
		vex.dialog.confirm({
			unsafeMessage: 'Are you sure you want to delete this element from the lesson?',
			callback: ( value ) => {
				if ( value ) {
					this.props.jumpToElementInEditor({
						startLineNumber: this.props.startLineNumber,
						endLineNumber: this.props.endLineNumber,
						startColumn: this.props.startColumn,
						endColumn: this.props.endColumn,
						elementRangeAction: 'delete'
					});
				}
			}
		});
	}

	switchWithPrevious = () => {
		const el = this.lineWrapper;

		let previous;
		let sibling = el.previousElementSibling;
		while ( sibling ) {
			if ( sibling.classList && sibling.classList.contains( 'line-wrapper' ) ) {
				previous = sibling;
				break;
			}
			sibling = sibling.previousElementSibling;
		}
		if ( !previous ) {
			const elements = document.getElementsByClassName( 'line-wrapper' );
			for ( let i = 1; i < elements.length; i++ ){
				if ( elements[ i ] === el ) {
					previous = elements[ i - 1 ];
					while ( previous.contains( el ) && i > 0 ) {
						previous = elements[ i - 1 ];
						i -= 1;
					}
					break;
				}
			}
		}
		if ( previous && previous.dataset.startLineNumber ) {
			this.props.switchWithPrevious({
				current: {
					startLineNumber: this.props.startLineNumber,
					endLineNumber: this.props.endLineNumber,
					startColumn: this.props.startColumn,
					endColumn: this.props.endColumn
				},
				previous: {
					startLineNumber: Number( previous.dataset.startLineNumber ),
					endLineNumber: Number( previous.dataset.endLineNumber ),
					startColumn: Number( previous.dataset.startColumn ),
					endColumn: Number( previous.dataset.endColumn )
				},
				elementRangeAction: 'switch_previous'
			});
		}
	}

	switchWithNext = () => {
		const el = this.lineWrapper;
		const elements = document.getElementsByClassName( 'line-wrapper' );
		let next;
		let sibling = el.nextElementSibling;
		while ( sibling ) {
			if ( sibling.classList && sibling.classList.contains( 'line-wrapper' ) ) {
				next = sibling;
				break;
			}
			sibling = sibling.nextElementSibling;
		}
		if ( !next ) {
			for ( let i = 0; i < elements.length - 1; i++ ){
				if ( elements[ i ] === el ) {
					next = elements[ i + 1 ];
					break;
				}
			}
		}
		if ( next && next.dataset.startLineNumber ) {
			this.props.switchWithNext({
				current: {
					startLineNumber: this.props.startLineNumber,
					endLineNumber: this.props.endLineNumber,
					startColumn: this.props.startColumn,
					endColumn: this.props.endColumn
				},
				next: {
					startLineNumber: Number( next.dataset.startLineNumber ),
					endLineNumber: Number( next.dataset.endLineNumber ),
					startColumn: Number( next.dataset.startColumn ),
					endColumn: Number( next.dataset.endColumn )
				},
				elementRangeAction: 'switch_next'
			});
		}
	}

	render() {
		const { tagName, startLineNumber, endLineNumber, startColumn } = this.props;
		let outerTitle = `Double-click to highlight source code for <${tagName} />`;
		if ( startLineNumber === endLineNumber ) {
			outerTitle += ` (L${startLineNumber})`;
		}
		else {
			outerTitle += ` (L${startLineNumber}-${endLineNumber})`;
		}
		const wrapperBar = <Fragment>
			<span className="line-wrapper-tagname" >{tagName}</span>
			<span
				role="button" tabIndex={0}
				className="line-wrapper-delete fa fa-caret-up"
				title={`Switch <${tagName} /> with previous element`}
				onClick={this.switchWithPrevious}
				onKeyPress={this.switchWithPrevious}
			></span>
			<span
				role="button" tabIndex={0}
				className="line-wrapper-delete fa fa-caret-down"
				title={`Switch <${tagName} /> with next element`}
				onClick={this.switchWithNext}
				onKeyPress={this.switchWithNext}
			></span>
			<span
				role="button" tabIndex={0}
				className="line-wrapper-delete fa fa-trash"
				title={`Delete <${tagName} /> from lesson`}
				onClick={this.deleteElement}
				onKeyPress={this.deleteElement}
			></span>
			<span
				role="button" tabIndex={0}
				className="line-wrapper-open-configurator fa fa-cogs"
				title={`Click to open configurator menu for <${tagName} />`}
				onClick={this.handleConfiguratorTrigger}
				onKeyPress={this.handleConfiguratorTrigger}
			></span>
		</Fragment>;
		if ( this.props.inline ) {
			return (
				<span
					id={`line-${startLineNumber}-${startColumn}`}
					className="line-wrapper outer-element"
					onDoubleClick={this.handleDoubleClick}
					title={outerTitle}
					style={this.state.style}
					ref={span => {
						this.lineWrapper = span;
					}}
				>
					<span className="line-wrapper-bar" >
						{wrapperBar}
					</span>
					{this.props.children}
				</span>
			);
		}
		return (
			<div
				id={`line-${startLineNumber}-${startColumn}`}
				data-start-line-number={startLineNumber}
				data-start-column={startColumn}
				data-end-column={this.props.endColumn}
				data-end-line-number={this.props.endLineNumber}
				className="line-wrapper outer-element"
				onDoubleClick={this.handleDoubleClick}
				title={outerTitle}
				style={this.state.style}
				ref={div => {
					this.lineWrapper = div;
				}}
			>
				<div className="line-wrapper-bar" >
					{wrapperBar}
				</div>
				{this.props.children}
			</div>
		);
	}
}


// PROPERTIES //

LineWrapper.defaultProps = {
	inline: false,
	startColumn: 1,
	endColumn: PINF,
	tagName: null
};

LineWrapper.propTypes = {
	inline: PropTypes.bool,
	jumpToElementInEditor: PropTypes.func.isRequired,
	endLineNumber: PropTypes.number.isRequired,
	startLineNumber: PropTypes.number.isRequired,
	startColumn: PropTypes.number,
	switchWithNext: PropTypes.func.isRequired,
	switchWithPrevious: PropTypes.func.isRequired,
	endColumn: PropTypes.number,
	tagName: PropTypes.string
};


// EXPORTS //

export default connect( mapStateToProps, {
	jumpToElementInEditor, switchWithNext, switchWithPrevious, toggleConfigurator
})( LineWrapper );

function mapStateToProps() {
	return {};
}
