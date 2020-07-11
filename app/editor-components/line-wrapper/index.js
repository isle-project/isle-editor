// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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
			shouldTriggerConfigurator: false
		});
	}

	handleConfiguratorTrigger = () => {
		this.props.jumpToElementInEditor({
			startLineNumber: this.props.startLineNumber,
			endLineNumber: this.props.endLineNumber,
			shouldTriggerConfigurator: true
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
					className="line-wrapper-open-configurator fa fa-cogs"
					title="Click to open configurator menu"
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
