// MODULES //

import { DOMParser as ProseMirrorParser } from 'prosemirror-model';
import schema from './config/schema';


// MAIN //

const parser = ( content ) => {
	const domNode = document.createElement( 'div' );
	domNode.innerHTML = content;
	return ProseMirrorParser.fromSchema( schema ).parse( domNode );
};


// EXPORTS //

export default parser;
