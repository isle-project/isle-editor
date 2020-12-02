// MAIN //

const horizontalRuleSpec = {
	group: 'block',
	parseDOM: [
		{ tag: 'hr' }
	],
	toDOM() {
		return [ 'hr' ];
	}
};


// EXPORTS //

export default horizontalRuleSpec;
