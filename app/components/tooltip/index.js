// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tooltip from 'react-bootstrap/lib/Tooltip';
import OverlayTrigger from 'components/overlay-trigger';


// MAIN //

/**
* A tooltip overlay.
*
* @property {string} tooltip - tooltip content
* @property {string} placement - direction of the tooltip
*/
class Wrapper extends Component {
	render() {
		const id = this.props.id || 'tooltip';
		const tooltip = <Tooltip id={id} >{this.props.tooltip}</Tooltip>;
		return (
			<OverlayTrigger placement={this.props.placement} overlay={tooltip} >
				{this.props.children}
			</OverlayTrigger>
		);
	}
}


// PROPERTIES //

Wrapper.propTypes = {
	tooltip: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node
	]).isRequired,
	placement: PropTypes.oneOf([ 'top', 'right', 'bottom', 'left' ])
};

Wrapper.defaultProps = {
	placement: 'right'
};


// EXPORTS //

export default Wrapper;
