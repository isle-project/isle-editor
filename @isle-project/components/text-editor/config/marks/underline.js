// MAIN //

const underline = {
	parseDOM: [
		{ tag: 'u' },
		{
			style: 'text-decoration:underline',
			getAttrs: value => {
				return value === 'underline' && null;
			}
		}
	],
	toDOM: () => {
		return [ 'u', 0 ];
	}
};


// EXPORTS //

export default underline;
