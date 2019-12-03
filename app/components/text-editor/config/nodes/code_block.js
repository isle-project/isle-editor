// MAIN //

const codeBlockSpec = {
	content: 'text*',
	marks: '',
	group: 'block',
	code: true,
	defining: true,
	parseDOM: [
		{ tag: 'pre', preserveWhitespace: 'full' }
	],
	toDOM() {
		return [ 'pre', [ 'code', 0 ] ];
	}
};


// EXPORTS //

export default codeBlockSpec;
