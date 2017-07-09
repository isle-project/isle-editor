// MODULES //

import React, { Component } from 'react';


// MAIN //

class Plot extends Component {
	drawPlot = () => {
		Plotly.newPlot( 'plot', this.props.data, this.props.layout );
	}

	componentDidMount() {
		this.drawPlot();
	}

	componentDidUpdate() {
		this.drawPlot();
	}

	render() {
		return (
			<div id="plot"></div>
		);
	}
}


// EXPORTS //

export default Plot;
