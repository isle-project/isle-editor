// MODULES //

import React, { Component } from 'react';


// MAIN //

class Slider extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			page: 0
		};
	}
	slickGoTo( idx ) {
		this.setState({
			page: idx
		});
	}

	render() {
		return <div {...this.props}>{this.state.page}</div>;
	}
}


// EXPORTS //

export default Slider;
