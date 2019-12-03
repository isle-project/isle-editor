// MODULES //

import { orderedList } from 'prosemirror-schema-list';


// MAIN //

const orderedListSpec = {
	...orderedList,
	content: 'list_item+',
	group: 'block'
};


// EXPORTS //

export default orderedListSpec;
