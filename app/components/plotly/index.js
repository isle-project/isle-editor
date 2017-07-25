// MODULES //

import React, { Component } from 'react';


// MAIN //

class Plot extends Component {

	constructor( props ) {
		super( props );
		this.state = {

		};
	}

	drawPlot = () => {
		Plotly.newPlot( this.props.id, this.props.data, this.props.layout, { displayModeBar: false });
	}

	componentDidMount() {
		this.drawPlot();
	}

	componentDidUpdate() {
		this.drawPlot();
	}

	render() {
		return (
			<div id={this.props.id} ></div>
		);
	}
}


// EXPORTS //

export default Plot;
