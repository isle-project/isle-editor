// MAIN //

/**
 * Returns a Plotly configuration object for an empty plot with a message.
 *
 * @param {string} text - message to be displayed
 * @returns {Object} Plotly config object
 */
function emptyPlotConfig( text ) {
	return {
		data: [],
		layout: {
			xaxis: {
				visible: false
			},
			yaxis: {
				visible: false
			},
			annotations: [
				{
					text: text,
					xref: 'paper',
					yref: 'paper',
					showarrow: false,
					font: {
						size: 26
					}
				}
			]
		}
	};
}


// EXPORTS //

export default emptyPlotConfig;
