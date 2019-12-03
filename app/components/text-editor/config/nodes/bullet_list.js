// MODULES //

import { bulletList } from 'prosemirror-schema-list';


// MAIN //

const bulletListSpec = {
	...bulletList,
	content: 'list_item+',
	group: 'block'
};


// EXPORTS //

export default bulletListSpec;
