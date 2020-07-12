// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import vex from 'vex-js';
import { jumpToElementInEditor, toggleConfigurator } from 'actions';
import './line_wrapper.css';


// MAIN //

/**
* A line wrapper for use in the editor.
*/
class LineWrapper extends Component {
	constructor( props ) {
		super( props );
	}

	handleDoubleClick = ( event ) => {
		event.stopPropagation();
		this.props.jumpToElementInEditor({
			startLineNumber: this.props.startLineNumber,
			endLineNumber: this.props.endLineNumber,
			elementRangeAction: null
		});
	}

	handleConfiguratorTrigger = () => {
		this.props.jumpToElementInEditor({
			startLineNumber: this.props.startLineNumber,
			endLineNumber: this.props.endLineNumber,
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
						elementRangeAction: 'delete'
					});
				}
			}
		});
	}

	render() {
		return (
			<div
				id={`line-${this.props.startLineNumber}`}
				className="line-wrapper"
				onDoubleClick={this.handleDoubleClick}
				title={`Double-click to highlight source code for <${this.props.tagName} />`}
			>
				<span
					role="button" tabIndex={0}
					className="line-wrapper-delete fa fa-trash"
					title={`Delete <${this.props.tagName} /> from lesson`}
					onClick={this.deleteElement}
					onKeyPress={this.deleteElement}
				></span>
				<span
					role="button" tabIndex={0}
					className="line-wrapper-open-configurator fa fa-cogs"
					title={`Click to open configurator menu for <${this.props.tagName} />`}
					onClick={this.handleConfiguratorTrigger}
					onKeyPress={this.handleConfiguratorTrigger}
				></span>
				{this.props.children}
			</div>
		);
	}
}


// PROPERTIES //

LineWrapper.defaultProps = {
	tagName: null
};

LineWrapper.propTypes = {
	jumpToElementInEditor: PropTypes.func.isRequired,
	endLineNumber: PropTypes.number.isRequired,
	startLineNumber: PropTypes.number.isRequired,
	tagName: PropTypes.string
};


// EXPORTS //

export default connect( mapStateToProps, {
	jumpToElementInEditor, toggleConfigurator
})( LineWrapper );

function mapStateToProps() {
	return {};
}
