// MODULES //

import React from 'react';
import logger from 'debug';
import TextEditor from 'components/text-editor';
import './instructor_notes_editor.css';


// VARIABLES //

const debug = logger( 'isle:instructor-notes-editor' );
const TOOLBAR_CONFIG = [
	'bold',
	'italic',
	'underline',
	'heading',
	'|',
	'open_markdown',
	'save',
	'preview'
];


// MAIN //

const InstructorNotesEditor = () => {
	debug( 'Rendering instructor notes...' );
	return (
		<TextEditor
			id="instructor-notes-editor"
			className="instructor-notes-editor"
			mode="collaborative"
			allowSubmissions={false}
			toolbarConfig={TOOLBAR_CONFIG}
		/>
	);
};


// EXPORTS //

export default InstructorNotesEditor;
