// MAIN //

const textColor = {
	attrs: {
		color: ''
	},
	inline: true,
	group: 'inline',
	parseDOM: [
		{
			style: 'color',
			getAttrs: color => {
				return {
					color
				};
			}
		}
	],
	toDOM( node ) {
		const { color } = node.attrs;
		let style = '';
		if ( color ) {
			style += `color: ${color};`;
		}
		return [ 'span', { style }, 0 ];
	}
};


// EXPORTS //

export default textColor;
