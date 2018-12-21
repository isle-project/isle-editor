// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './progressbar.css';


// MAIN //

/**
* An ISLE component that displays a progress bar.
*
* @property {boolean} duration - indicates whether the time is displayed as a duration - beginning with session start
* @property {string} format - sets the format of the time string
* @property {string} type - sets the type of the score UI - available options: 'default', 'bottom'
*/
class ProgressBar extends Component {
	constructor( props ) {
		super( props );
	}

	render() {
		var size = 100 - ( this.props.progress * 100 );
		var clip = 'inset(0 ' + size + '% 0 0)';
		const style ={
			clipPath: clip
		};
		return (
			<div className="progressbar">
				<div className="progressbar-range">
					<div style={style} className="progressbar-progress"></div>

					<div className="progressbar-marker"></div>
					<div className="progressbar-marker"></div>
					<div className="progressbar-marker"></div>
					<div className="progressbar-marker"></div>
					<div className="progressbar-marker"></div>

					<div className="progressbar-marker"></div>
					<div className="progressbar-marker"></div>
					<div className="progressbar-marker"></div>
					<div className="progressbar-marker"></div>
				</div>
			</div>
		);
	}
}


// PROPERTIES //

ProgressBar.propTypes = {
	progress: PropTypes.number.isRequired
};

ProgressBar.defaultProps = {
};


// EXPORTS //

export default ProgressBar;
