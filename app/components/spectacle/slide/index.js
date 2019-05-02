// MODULES //

import React, { Component, Fragment } from 'react';
import { Slide } from 'spectacle';
import endsWith from '@stdlib/string/ends-with';
import Timer from 'components/timer';


// MAIN //

/**
* Spectacle presentation slide.
*
* @property {string} align - Space delimited value for positioning interior content. The first value can be flex-start (left), center (middle), or flex-end (bottom). The second value can be flex-start (top) , center (middle), or flex-end (bottom)
* @property {string} transition - slide transition. Can be either `slide`, `zoom`, `fade`, or `spin` (or a combination)
* @property {string} transitionDuration - slide transition duration in milliseconds
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
				duration={this.props.duration}
				style={{ top: '40px' }}
			/> : null}
			<Slide {...this.props} />
		</Fragment> );
	}
}


// EXPORTS //

export default Wrapper;
