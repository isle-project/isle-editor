// MODULES //

import markdownit from 'markdown-it';


// VARIABLES //

const RE_TRAILING_MARKDOWN = /(>\r?\n)([a-z0-9-#][\s\S]*)$/i;


// FUNCTIONS //

function isSlideDelimiter( token ) {
	return (
		token.type === 'inline' &&
		token.children.length &&
		token.children[ 0 ].content === '==='
	);
}


// MAIN //

const md = markdownit({
	html: true,
	xhtmlOut: true,
	breaks: true,
	typographer: false
});
md.disable( 'code' );
md.renderer.rules.link_open = function onLinkOpen( tokens, idx, options, env, renderer ) {
	// If you are sure other plugins can't add `target` - drop check below
	const token = tokens[ idx ];
	const aIndex = token.attrIndex( 'target' );
	token.tag = 'Link';
	if ( aIndex < 0 ) {
		token.attrPush( [ 'target', '_blank' ] ); // add new attribute...
	} else {
		token.attrs[ aIndex ][ 1 ] = '_blank'; // replace value of existing attribute...
	}
	// Pass token to default renderer:
	return renderer.renderToken( tokens, idx, options );
};
md.renderer.rules.link_close = function onLinkClose( tokens, idx, options, env, renderer ) {
	tokens[ idx ].tag = 'Link';
	return renderer.renderToken( tokens, idx, options );
};
md.renderer.rules.image = function onImage( tokens, idx, options, env, renderer ) {
	const token = tokens[ idx ];
	token.attrs[ token.attrIndex('alt') ][ 1 ] = renderer.renderInlineAsText( token.children, options, env );
	token.tag = 'Image';
	return renderer.renderToken( tokens, idx, options );
};
md.renderer.rules.heading_open = ( tokens, idx, options, env, renderer ) => {
	if ( !env.addLineWrappers ) {
		return renderer.renderToken( tokens, idx, options );
	}
	const line = env.initialLineNumber + env.lineAdjustment + tokens[ idx ].map[ 0 ];
	return `<LineWrapper tagName="${tokens[ idx ].tag}" startLineNumber={${line}} endLineNumber={${line}} >${renderer.renderToken( tokens, idx, options )}`;
};
md.renderer.rules.heading_close = ( tokens, idx, options, env, renderer ) => {
	if ( !env.addLineWrappers ) {
		return renderer.renderToken( tokens, idx, options );
	}
	return `${renderer.renderToken( tokens, idx, options )}</LineWrapper>`;
};
md.renderer.rules.paragraph_open = ( tokens, idx, options, env, renderer ) => {
	if ( !env.addLineWrappers || !env.outer || isSlideDelimiter( tokens[ idx+1 ] ) ) {
		return renderer.renderToken( tokens, idx, options );
	}
	const line = env.initialLineNumber + env.lineAdjustment + tokens[ idx ].map[ 0 ];
	const content = renderer.renderToken( tokens, idx, options );
	return `<LineWrapper tagName="${tokens[ idx ].tag}" startLineNumber={${line}} endLineNumber={${line}} >${content}`;
};
md.renderer.rules.paragraph_close = ( tokens, idx, options, env, renderer ) => {
	if ( !env.addLineWrappers || !env.outer || isSlideDelimiter( tokens[ idx-1 ] ) ) {
		return renderer.renderToken( tokens, idx, options );
	}
	return `${renderer.renderToken( tokens, idx, options )}</LineWrapper>`;
};
md.renderer.rules.html_block = ( tokens, idx, options, env, renderer ) => {
	let { content } = tokens[ idx ];
	const match = content.match( /data-lines="(\d+)"/ );
	if ( match && match[ 1 ] ) {
		env.lineAdjustment += Number( match[ 1 ] );
	}
	if ( content.includes( '<LineButtons' ) ) {
		env.lineAdjustment -= 2;
	}
	content = content.replace( RE_TRAILING_MARKDOWN, ( _, p1, p2 ) => {
		return p1 + md.render( p2, {
			initialLineNumber: env.initialLineNumber,
			lineAdjustment: (-1) * ( env.lineAdjustment + 1 ),
			outer: env.outer,
			addLineWrappers: env.addLineWrappers
		});
	});
	return content;
};
md.renderer.rules.html_inline = ( tokens, idx, options, env, renderer ) => {
	const { content } = tokens[ idx ];
	const match = content.match( /data-lines="(\d+)"/ );
	if ( match && match[ 1 ] ) {
		env.lineAdjustment += Number( match[ 1 ] );
	}
	if ( content.includes( '<LineButtons' ) ) {
		env.lineAdjustment -= 2;
	}
	return content;
};


// EXPORTS //

export default md;
