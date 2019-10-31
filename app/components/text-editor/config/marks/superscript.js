// MAIN //

const superscript = {
	excludes: 'subscript',
	parseDOM: [
		{ tag: 'sup' },
		{ style: 'vertical-align=super' }
	],
	toDOM: () => ['sup']
};


// EXPORTS //

export default superscript;
