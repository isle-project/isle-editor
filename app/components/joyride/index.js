// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Joyride, { ACTIONS, EVENTS } from 'react-joyride';


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

/**
* Wrapper around [react-joyride](https://github.com/gilbarbara/react-joyride) to create walkthroughs and guided tours.
*
* @property {Array} steps - array of step `objects`
* @property {boolean} run - controls whether the guide is active
*/
class Wrapper extends Component {
	constructor( props ) {
		super( props );
	}

	render() {
		return ( <Joyride
			run={this.props.run}
			steps={this.props.steps}
			styles={STYLES}
			{...this.props}
		/> );
	}
}


// PROPERTIES //

Wrapper.propTypes = {
	run: PropTypes.bool,
	scrollToSteps: PropTypes.bool,
	steps: PropTypes.array.isRequired
};

Wrapper.defaultProps = {
	run: false,
	scrollToSteps: true
};


// EXPORTS //

export default Wrapper;

export { EVENTS as EVENTS, ACTIONS as ACTIONS };
