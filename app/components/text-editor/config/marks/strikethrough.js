// MAIN //

const strikethrough = {
	parseDOM: [
		{ tag: 'strike' },
		{ style: 'text-decoration:line-through' },
		{ style: 'text-decoration-line:line-through' }
	],
	toDOM: () => ['strike']
};


// EXPORTS //

export default strikethrough;
