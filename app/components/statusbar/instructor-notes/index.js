// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MarkdownEditor from 'components/markdown-editor';
import SessionContext from 'session/context.js';
import './instructor_notes.css';


// MAIN //

class InstructorNotes extends Component {
	constructor( props ) {
		super( props );
	}

	render() {
		const session = this.context;
		return (
			<MarkdownEditor
				className="instructor-notes"
				defaultValue={session.config.instructorNotes || ''}
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


// TYPES //

InstructorNotes.contextType = SessionContext;


// EXPORTS //

export default InstructorNotes;
