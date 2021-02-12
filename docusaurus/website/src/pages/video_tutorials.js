/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable react/no-danger, import/no-unresolved */

// MODULES //

import React from 'react';
import Layout from '@theme/Layout';
import { translate } from '@docusaurus/Translate';


// MAIN //

function VideoTutorials() {
	const title = translate({
		id: 'video-tutorials',
		message: 'Video Tutorials',
		description: 'Video Tutorials'
	});
	return (
		<Layout
			title={title}
			description="Description will go into a meta tag in <head />"
		>
			<div className="container">
				<div className="row">
					<div className="col col--12 padding-vert--lg">
						<h2>
							{title}
						</h2>
						<p dangerouslySetInnerHTML={{
							__html: translate({
								id: 'video-tutorials.channel-intro',
								message: 'A full list of videos on ISLE is available on the <a href="https://www.youtube.com/channel/UCF8LtWYmyYqPlZ9ZLrVC4Jw/videos" >YouTube channel</a> of the project.'
							})
						}} />
					</div>
				</div>
				<div className="row">
					<div className="col col--6 padding-vert--lg">
						<h3>
							{translate({
								id: 'video-tutorials.isle-in-class',
								message: 'Using ISLE in class',
								description: 'Using ISLE in class'
							})}
						</h3>
						<iframe title="Using ISLE in Class" width="100%" height="350px" src="https://www.youtube.com/embed/F-p3DyuLpp4" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
					</div>
					<div className="col col--6 padding-vert--lg">
						<h3>
							{translate({
								id: 'video-tutorials.sketchpad',
								message: 'Using the Sketchpad',
								description: 'Using the Sketchpad'
							})}
						</h3>
						<iframe title="Using the Sketchpad" width="100%" height="350px" src="https://www.youtube.com/embed/R8a5iO46lDU" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
					</div>
				</div>
				<div className="row">
					<div className="col col--6 padding-vert--lg">
						<h3>
							{translate({
								id: 'video-tutorials.revealer-and-blackout',
								message: 'Revealer and Blackout',
								description: 'Revealer and Blackout'
							})}
						</h3>
						<iframe title="Revealer and Blackout" width="560" height="315" src="https://www.youtube.com/embed/eXmpIfWjoEU" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
					</div>
					<div className="col col--6 padding-vert--lg">
						<h3>
							{translate({
								id: 'video-tutorials.styling-lessons',
								message: 'Styling Lessons',
								description: 'Styling Lessons'
							})}
						</h3>
						<iframe title="Styling Lessons" width="560" height="315" src="https://www.youtube.com/embed/oW3-6f1wfQ4" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
					</div>
				</div>
				<div className="row">
					<div className="col col--6 padding-vert--lg">
						<h3>
							{translate({
								id: 'video-tutorials.ticketing-system',
								message: 'Ticketing System',
								description: 'Ticketing System'
							})}
						</h3>
						<iframe title="Ticketing System" width="560" height="315" src="https://www.youtube.com/embed/V82sHJc1dpc" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
					</div>
				</div>
			</div>
		</Layout>
	);
}


// EXPORTS //

export default VideoTutorials;

