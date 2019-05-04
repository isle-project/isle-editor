// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Slide } from 'spectacle';
import endsWith from '@stdlib/string/ends-with';
import Timer from 'components/timer';


// MAIN //

/**
* Spectacle presentation slide.
*
* @property {string} align - Space delimited value for positioning interior content. The first value can be flex-start (left), center (middle), or flex-end (bottom). The second value can be flex-start (top) , center (middle), or flex-end (bottom)
* @property {string} transition - slide transition. Can be either `slide`, `zoom`, `fade`, or `spin` (or a combination)
* @property {number} transitionDuration - slide transition duration in milliseconds
* @property {string} notes - presenter mode notes
* @property {string} className - class name
* @property {number} duration - slide duration displayed in presenter mode
* @property {Object} style - CSS inline styles
*/
class Wrapper extends Component {
	render() {
		const presenterMode = endsWith( window.location.hash, '?presenter' );
		return ( <Fragment>
			{presenterMode && this.props.duration ? <Timer
				legend="Current: "
				duration={this.props.duration}
				style={{ top: '40px', right: '160px' }}
			/> : null}
			<Slide {...this.props} />
		</Fragment> );
	}
}


// PROPERTIES//

Wrapper.defaultProps = {
	align: 'center center',
	transition: null,
	transitionDuration: null,
	notes: null,
	className: null,
	duration: null,
	style: {}
};

Wrapper.propTypes = {
	align: PropTypes.string,
	transition: PropTypes.array,
	transitionDuration: PropTypes.number,
	notes: PropTypes.string,
	className: PropTypes.string,
	duration: PropTypes.number,
	style: PropTypes.object
};


// EXPORTS //

export default Wrapper;
