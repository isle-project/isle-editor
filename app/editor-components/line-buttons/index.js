// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import { ContextMenuTrigger } from 'react-contextmenu';
import { connect } from 'react-redux';
import { jumpToElementInEditor, toggleConfigurator } from 'actions';
import './line_buttons.css';


// VARIABLES //

const debug = logger( 'isle:line-buttons' );


// FUNCTIONS //

function stopPropagation( event ) {
	event.stopPropagation();
}


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
		debug( 'Select line '+lineNumber );
		this.props.jumpToElementInEditor({
			startLineNumber: lineNumber,
			endLineNumber: lineNumber,
			elementRangeAction: 'reveal'
		});
	}

	render() {
		if ( !this.props.showLineButtons || !this.props.show ) {
			return null;
		}
		/* eslint-disable jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */
		return (
			<span className="line-buttons" onClick={stopPropagation} >
				{ this.props.splitPos !== 1 ? <span
					className="line-buttons-jump"
					role="button" tabIndex={0}
					onClick={this.jumpToLine}
					onKeyPress={this.jumpToLine}
					title={`Center editor on line ${this.props.lineNumber}`}
				>
					<span
						className="fa fa-arrow-circle-left"
					></span>
					<strong className="line-buttons-line-display" >
						{this.props.lineNumber}
					</strong>
				</span> : null }
				<ContextMenuTrigger
					id="editor-context-menu"
					renderTag="span"
					holdToDisplay={0}
					collect={() => {
						return {
							context: 'preview',
							lineNumber: this.props.lineNumber
						};
					}}
				>
					<i
						className="line-buttons-contextmenu fas fa-plus-circle"
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
