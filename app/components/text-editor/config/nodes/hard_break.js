// MAIN //

const hardBreakSpec = {
	inline: true,
	group: 'inline',
	selectable: false,
	parseDOM: [
		{ tag: 'br' }
	],
	toDOM() {
		return [ 'br' ];
	}
};


// EXPORTS //

export default hardBreakSpec;
