// MODULES //

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Alert from 'react-bootstrap/Alert';
import isArray from '@stdlib/assert/is-array';
import isNull from '@stdlib/assert/is-null';
import runif from '@stdlib/random/base/discrete-uniform';
import VideoPlayer from '@isle-project/components/video-player';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'Video' );


// MAIN //

/**
* Displays a random video from a list of videos.
*
* @property {Array<string>} videos - video URLs
*/
const RandomVideo = ( props ) => {
	const [ choice, setChoice ] = useState( null );
	const { t } = useTranslation( 'Video' );
	useEffect( () => {
		setChoice( runif( 0, props.videos.length-1 ) );
	}, [ props.videos ]);
	if ( !isArray( props.videos ) || props.videos.length === 0 ) {
		return <Alert variant="danger" >{t('supply-two-videos')}: <code>videos</code>.</Alert>;
	}
	if ( isNull( choice ) ) {
		return null;
	}
	return (
		<VideoPlayer
			url={props.videos[ choice ]}
			{...props}
		/>
	);
};


// PROPERTIES //

RandomVideo.propTypes = {
	videos: PropTypes.arrayOf( PropTypes.string )
};

RandomVideo.defaultProps = {
	videos: []
};


// EXPORTS //

export default RandomVideo;
