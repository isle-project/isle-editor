/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';


function VideoTutorials() {
	const context = useDocusaurusContext();
	const { siteConfig = {} } = context;
	return (
		<Layout
			title={`Hello from ${siteConfig.title}`}
			description="Description will go into a meta tag in <head />"
		>
			<div className="container">
				<div className="row">
					<div className="col col--12 padding-vert--lg">
						<h2>Video Tutorials</h2>
						<p>A full list of videos on ISLE is available on the <a href="https://www.youtube.com/channel/UCF8LtWYmyYqPlZ9ZLrVC4Jw/videos" >YouTube channel</a> of the project.</p>
					</div>
				</div>
				<div className="row">
					<div className="col col--6 padding-vert--lg">
						<h3>Using ISLE in Class</h3>
						<iframe title="Using ISLE in Class" width="100%" height="350px" src="https://www.youtube.com/embed/F-p3DyuLpp4" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>
					</div>
					<div className="col col--6 padding-vert--lg">
						<h3>Using the Sketchpad</h3>
						<iframe title="Using the Sketchpad" width="100%" height="350px" src="https://www.youtube.com/embed/R8a5iO46lDU" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>
					</div>
				</div>
				<div className="row">
					<div className="col col--6 padding-vert--lg">
						<h3>Revealer and Blackout</h3>
						<iframe title="Revealer and Blackout" width="560" height="315" src="https://www.youtube.com/embed/eXmpIfWjoEU" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>
					</div>
					<div className="col col--6 padding-vert--lg">
						<h3>Styling Lessons</h3>
						<iframe title="Styling Lessons" width="560" height="315" src="https://www.youtube.com/embed/oW3-6f1wfQ4" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>
					</div>
				</div>
				<div className="row">
					<div className="col col--6 padding-vert--lg">
						<h3>Ticketing System</h3>
						<iframe title="Ticketing System" width="560" height="315" src="https://www.youtube.com/embed/V82sHJc1dpc" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default VideoTutorials;

