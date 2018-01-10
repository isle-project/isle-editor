// MODULES //

import React, { Component } from 'react';
import Microphone from './../../../img/microphone.svg';
import PropTypes from 'prop-types';

// MAIN //

class Shim extends Component {
	render() {
		return <div onClick={this.props.onClick }></div>;
	}
}


Shim.propTypes = {
	onClick: PropTypes.func
};

Shim.defaultProps = {
	onClick() {}
};


// EXPORTS //

export default Microphone || Shim;
