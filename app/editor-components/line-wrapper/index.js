// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import { connect } from 'react-redux';
import { findDOMNode } from 'react-dom';
import vex from 'vex-js';
import PINF from '@stdlib/constants/math/float64-pinf';
import { jumpToElementInEditor, toggleConfigurator } from 'actions';
import './line_wrapper.css';


// VARIABLES //

const debug = logger( 'isle:line-wrapper' );


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
			child.className !== 'isle-loadable' &&
			child.className !== 'line-wrapper-bar'
		) {
			if ( child.className === 'react-contextmenu' ) {
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

	render() {
		const { tagName, startLineNumber, endLineNumber, startColumn } = this.props;
		let outerTitle = `Double-click to highlight source code for <${tagName} />`;
		if ( startLineNumber === endLineNumber ) {
			outerTitle += ` (L${startLineNumber})`;
		}
		else {
			outerTitle += ` (L${startLineNumber}-${endLineNumber})`;
		}
		return (
			<div
				id={`line-${startLineNumber}-${startColumn}`}
				className="line-wrapper"
				onDoubleClick={this.handleDoubleClick}
				title={outerTitle}
				style={this.state.style}
			>
				<div className="line-wrapper-bar" >
					<span className="line-wrapper-tagname" >{tagName}</span>
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
				</div>
				{this.props.children}
			</div>
		);
	}
}


// PROPERTIES //

LineWrapper.defaultProps = {
	startColumn: 1,
	endColumn: PINF,
	tagName: null
};

LineWrapper.propTypes = {
	jumpToElementInEditor: PropTypes.func.isRequired,
	endLineNumber: PropTypes.number.isRequired,
	startLineNumber: PropTypes.number.isRequired,
	startColumn: PropTypes.number,
	endColumn: PropTypes.number,
	tagName: PropTypes.string
};


// EXPORTS //

export default connect( mapStateToProps, {
	jumpToElementInEditor, toggleConfigurator
})( LineWrapper );

function mapStateToProps() {
	return {};
}
