// VARIABLES //

const snippetText = require( './snippets.txt' );


// FUNCTIONS //

function aceSnippets( editor, session ) {
	const snippet = setup( editor, session, 'html', snippetText );
	snippet.manager.register( snippet.m.snippet, snippet.m.scope );
}

function getNames( editor, session, mode, snippetText ) {
	const snippet = setup( editor, session, mode, snippetText );
	const names = [];

	for ( let i = 0; i < snippet.m.snippet.length; i++ ) {
		names.push( snippet.m.snippet[ i ].name );
	}

	return names;
}

function getContent( editor, session, mode, snippetText ) {
	const snippet = setup( editor, session, mode, snippetText );
	const content = [];

	for ( let i = 0; i < snippet.m.snippet.length; i++ ) {
		content.push( snippet.m.snippet[ i ].content );
	}

	return content;
}

/*
* Helper function that sets up the snippet code
*/
function setup( editor, session, mode, snippetText ) {

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
