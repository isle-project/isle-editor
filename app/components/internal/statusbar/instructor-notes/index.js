// MODULES //

import React from 'react';
import logger from 'debug';
import TextEditor from 'components/text-editor';
import './instructor_notes.css';


// VARIABLES //

const debug = logger( 'isle:instructor-notes' );
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

const InstructorNotes = () => {
	debug( 'Rendering instructor notes...' );
	return (
		<TextEditor
			id="instructor-notes"
			className="instructor-notes"
			mode="collaborative"
			allowSubmissions={false}
			toolbarConfig={TOOLBAR_CONFIG}
		/>
	);
};


// EXPORTS //

export default InstructorNotes;
