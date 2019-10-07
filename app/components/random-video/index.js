// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import runif from '@stdlib/random/base/discrete-uniform';
import VideoPlayer from 'components/video-player';


// MAIN //

/**
* Displays a random video from a list of videos.
*
* @property {Array<string>} videos - video URLs
*/
class RandomVideo extends Component {
	constructor( props ) {
		super( props );
		this.choice = runif( 0, this.props.videos.length-1 );
	}

	render() {
		const elem = this.props.videos[ this.choice ];
		return (
			<VideoPlayer
				url={elem}
				{...this.props}
			/>
		);
	}
}


// PROPERTIES //

RandomVideo.propTypes = {
	videos: PropTypes.arrayOf( PropTypes.string )
};

RandomVideo.defaultProps = {
	videos: []
};


// EXPORTS //

export default RandomVideo;
