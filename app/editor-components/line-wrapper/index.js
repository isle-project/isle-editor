// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { jumpToElementInEditor } from 'actions';
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
			endLineNumber: this.props.endLineNumber
		});
	}

	render() {
		return (
			<div
				id={`line-${this.props.startLineNumber}`}
				className="line-wrapper"
				onDoubleClick={this.handleDoubleClick}
			>
				{this.props.children}
			</div>
		);
	}
}


// PROPERTIES //

LineWrapper.defaultProps = {
};

LineWrapper.propTypes = {
	jumpToElementInEditor: PropTypes.func.isRequired,
	endLineNumber: PropTypes.number.isRequired,
	startLineNumber: PropTypes.number.isRequired
};


// EXPORTS //

export default connect( mapStateToProps, {
	jumpToElementInEditor
})( LineWrapper );

function mapStateToProps() {
	return {};
}
