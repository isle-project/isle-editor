// MODULES //

import React, { Component } from 'react';
import { Experiment, experimentDebugger } from 'react-ab-test';
import PropTypes from 'prop-types';
import Gate from 'components/gate';


// SETUP //

experimentDebugger.enable();


// MAIN //

class Wrapper extends Component {
	render() {
		return (
			<Gate {...this.props} >
				<Experiment {...this.props} />
			</Gate>
		);
	}
}


// DEFAULT PROPERTIES //

Wrapper.defaultProps = {
	anonymous: false,
	user: true
};


// TYPES //

Wrapper.propTypes = {
	anonymous: PropTypes.bool,
	user: PropTypes.bool
};


// EXPORTS //

export default Wrapper;
