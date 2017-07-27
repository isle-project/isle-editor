// MODULES //

import React, { Component } from 'react';
import randomstring from 'randomstring';
import Plotly from 'plotly.js';


// MAIN //

class Plot extends Component {

	constructor( props ) {
		super( props );

		this.state = {
			plotID: randomstring.generate()
		};
	}

	drawPlot = () => {
		Plotly.newPlot(
			this.state.plotID,
			this.props.data,
			this.props.layout,
			{
				displayModeBar: true,
				displaylogo: false,
				modeBarButtonsToRemove: [ 'sendDataToCloud' ]
			}
		);
	}

	componentDidMount() {
		this.drawPlot();
	}

	componentDidUpdate() {
		this.drawPlot();
	}

	render() {
		return (
			<div id={this.state.plotID} ></div>
		);
	}
}


// EXPORTS //

export default Plot;
