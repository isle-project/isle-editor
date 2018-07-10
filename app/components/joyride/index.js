// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Joyride from 'react-joyride';


// VARIABLES //

const STYLES = {
	options: {
		arrowColor: '#fff',
		backgroundColor: '#fff',
		primaryColor: '#ca5800',
		textColor: '#333',
		overlayColor: 'rgba(0, 0, 0, 0.5)',
		spotlightShadow: '0 0 15px rgba(0, 0, 0, 0.5)',
		beaconSize: 36,
		zIndex: 100
	},
	tooltipContainer: {
		textAlign: 'left'
	}
};


// MAIN //

class Wrapper extends Component {
	constructor( props ) {
		super( props );
	}

	render() {
		return ( <Joyride
			run={this.props.run}
			steps={this.props.steps}
			styles={STYLES}
			scrollToFirstStep
			{...this.props}
		/> );
	}
}


// TYPES //

Wrapper.propTypes = {
	run: PropTypes.bool,
	steps: PropTypes.array
};

Wrapper.defaultProps = {
	run: false,
	steps: []
};


// EXPORTS //

export default Wrapper;
