// MODULES //

import React, { Component } from 'react';
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
				toolbarConfig={[
					'bold',
					'italic',
					'underline',
					'heading',
					'|',
					'open_markdown',
					'save'
				]}
			/>
		);
	}
}

// EXPORTS //

export default InstructorNotes;
