// MODULES //

import { listItem } from 'prosemirror-schema-list';


// MAIN //

const listItemSpec = {
	...listItem,
	content: 'paragraph block*',
	group: 'block'
};


// EXPORTS //

export default listItemSpec;
