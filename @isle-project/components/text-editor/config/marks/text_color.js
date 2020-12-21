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
			style += `color: ${color};`; // eslint-disable-line i18next/no-literal-string
		}
		return [ 'span', { style }, 0 ];
	}
};


// EXPORTS //

export default textColor;
