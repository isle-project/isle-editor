// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Microphone from '-!svg-react-loader!./img/microphone.svg';


// MAIN //

class Shim extends Component {
	render() {
		return <button onClick={this.props.onClick} ></button>;
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
