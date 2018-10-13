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
		const id = this.props.id;
		if ( !this.props.tooltip ) {
			return this.props.children;
		}
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
	id: PropTypes.string,
	tooltip: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node
	]),
	placement: PropTypes.oneOf([ 'top', 'right', 'bottom', 'left' ])
};

Wrapper.defaultProps = {
	id: 'tooltip',
	placement: 'right',
	tooltip: null
};


// EXPORTS //

export default Wrapper;
