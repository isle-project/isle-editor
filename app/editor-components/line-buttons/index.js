// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ContextMenuTrigger } from 'react-contextmenu';
import { connect } from 'react-redux';
import { jumpToElementInEditor, toggleConfigurator } from 'actions';
import './line_buttons.css';


// MAIN //

/**
* A line wrapper for use in the editor.
*/
class LineButtons extends Component {
	constructor( props ) {
		super( props );
	}

	jumpToLine = () => {
		this.props.jumpToElementInEditor({
			startLineNumber: this.props.lineNumber,
			endLineNumber: this.props.lineNumber,
			elementRangeAction: 'reveal'
		});
	}

	selectLine = () => {
		this.props.jumpToElementInEditor({
			startLineNumber: this.props.lineNumber,
			endLineNumber: this.props.lineNumber,
			elementRangeAction: 'select'
		});
	}

	render() {
		if ( !this.props.show ) {
			return null;
		}
		return (
			<span className="line-buttons" >
				<i
					role="button" tabIndex={0}
					className="line-buttons-jump fas fa-arrow-circle-left"
					onClick={this.jumpToLine}
					onKeyPress={this.jumpToLine}
					title={`Center editor on line ${this.props.lineNumber}`}
				></i>
				<ContextMenuTrigger
					id="editor-context-menu"
					renderTag="span"
					holdToDisplay={0}
					collect={() => {
						return { context: 'preview' };
					}}
				>
					<i
						role="button" tabIndex={0}
						className="line-buttons-contextmenu fas fa-plus-circle"
						onClick={this.selectLine}
						onKeyPress={this.selectLine}
						title={`Click to insert component at line ${this.props.lineNumber}`}
					></i>
				</ContextMenuTrigger>
			</span>
		);
	}
}


// PROPERTIES //

LineButtons.propTypes = {
	show: PropTypes.bool,
	lineNumber: PropTypes.number.isRequired
};

LineButtons.defaultProps = {
	show: true
};


// EXPORTS //

export default connect( mapStateToProps, {
	jumpToElementInEditor, toggleConfigurator
})( LineButtons );

function mapStateToProps() {
	return {};
}
