// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MarkdownEditor from 'components/markdown-editor';
import './instructor_notes.css';


// VARIABLES //

// MAIN //

class InstructorNotes extends Component {
	constructor( props ) {
		super( props );
	}

	render() {
		return (
			<MarkdownEditor
				className="instructor-notes"
				defaultValue={this.context.session.config.instructorNotes || ''}
				id={this.props.id}
				toolbarConfig={[
					'bold',
					'italic',
					'underline',
					'heading',
					'|',
					'open_markdown',
					'save',
					'preview'
				]}
			/>
		);
	}
}

InstructorNotes.contextTypes = {
	session: PropTypes.object
};

// EXPORTS //

export default InstructorNotes;
