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
* @property {boolean} show - controls whether the tooltip shall be displayed
*/
class Wrapper extends Component {
	render() {
		const id = this.props.id;
		if ( !this.props.tooltip || !this.props.show ) {
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
	show: PropTypes.bool,
	tooltip: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node
	]),
	placement: PropTypes.oneOf([ 'top', 'right', 'bottom', 'left' ])
};

Wrapper.defaultProps = {
	id: 'tooltip',
	placement: 'right',
	show: true,
	tooltip: null
};


// EXPORTS //

export default Wrapper;
