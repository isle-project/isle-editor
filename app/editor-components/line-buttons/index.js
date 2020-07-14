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

	jumpToLine = ( event ) => {
		event.stopPropagation();
		const { lineNumber } = this.props;
		console.log( 'Select line '+lineNumber );
		this.props.jumpToElementInEditor({
			startLineNumber: lineNumber,
			endLineNumber: lineNumber,
			elementRangeAction: 'reveal'
		});
	}

	selectLine = ( event ) => {
		event.stopPropagation();
		const { lineNumber } = this.props;
		console.log( 'Select line '+lineNumber );
		this.props.jumpToElementInEditor({
			startLineNumber: lineNumber,
			endLineNumber: lineNumber,
			elementRangeAction: 'select'
		});
	}

	render() {
		if ( !this.props.showLineButtons || !this.props.show ) {
			return null;
		}
		return (
			<span className="line-buttons" >
				{ this.props.splitPos !== 1 ? <i
					role="button" tabIndex={0}
					className="line-buttons-jump fas fa-arrow-circle-left"
					onClick={this.jumpToLine}
					onKeyPress={this.jumpToLine}
					title={`Center editor on line ${this.props.lineNumber}`}
				></i> : null }
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

function mapStateToProps({ preview, editor }) {
	return {
		...preview,
		splitPos: editor.splitPos
	};
}
