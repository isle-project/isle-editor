// VARIABLES //

const snippetText = require( './snippets.txt' );


// FUNCTIONS //

function aceSnippets( editor, session ) {
	const snippet = setup( editor, session, 'html', snippetText );
	snippet.manager.register( snippet.m.snippet, snippet.m.scope );
}


/*
* Helper function that sets up the snippet code
*/
function setup( editor, session, mode, snippetText ) {
	// eslint-disable-next-line no-undef
	const snippetManager = ace.acequire( 'ace/snippets' ).snippetManager;

	const id = session.env.document.$mode.$id || '';
	const m = snippetManager.files[ id ];

	m.scope = mode;
	m.snippetText = snippetText;
	m.snippet = snippetManager.parseSnippetFile( snippetText, m.scope );

	return {
		manager: snippetManager,
		id,
		m
	};
}


// EXPORTS //

module.exports = aceSnippets;
