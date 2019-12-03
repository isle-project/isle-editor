// MAIN //

const blockquoteSpec = {
	content: 'block+',
	group: 'block',
	defining: true,
	parseDOM: [
		{ tag: 'blockquote' }
	],
	toDOM() {
		return [ 'blockquote', 0 ];
	}
};


// EXPORTS //

export default blockquoteSpec;
