// MODULES //

import React, { Component, Fragment } from 'react';
import MarkdownEditor from 'components/markdown-editor';
import './instructor-notes.css';


// VARIABLES //

// MAIN //

class InstructorNotes extends Component {
	constructor( props ) {
		super( props );
	}

	render() {
		return (
			<Fragment>
				<MarkdownEditor
					className="instructor-notes"
					toolbarConfig={['bold', 'italic',
						'underline', 'heading', 'insert_table',
						'|', 'open_markdown', 'save']}
						/>
			</Fragment>
		);
	}
}

// EXPORTS //

export default InstructorNotes;
