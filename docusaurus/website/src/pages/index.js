/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import classnames from 'classnames';
import Translate, { translate } from '@docusaurus/Translate';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

global.Buffer = global.Buffer || require('buffer').Buffer;
if ( typeof window === 'undefined' ) {
	global.window = {};
}
if ( typeof global.localStorage === 'undefined' ) {
	global.localStorage = null;
}

const features = [
	{
		title: <>ISLE Editor</>,
		imageUrl: 'img/undraw_editor.svg',
		description: (
			<>
				Use the ISLE editor to create new ISLE lessons, ranging from interactive lectures to lab activities or homework assignments.
			</>
		)
	},
	{
		title: <>ISLE Dashboard</>,
		imageUrl: 'img/undraw_dashboard.svg',
		description: (
			<>
				Use the ISLE dashboard to manage your course, administer lessons, and monitor student progress.
			</>
		)
	},
	{
		title: <>ISLE Server</>,
		imageUrl: 'img/undraw_server.svg',
		description: (
			<>
				Host an ISLE server instance for user management and data collection or deploy to an existing server.
			</>
		)
	}
];

function Home() {
	const context = useDocusaurusContext();
	const { siteConfig = {}} = context;

	return (
		<Layout
			title={siteConfig.title}
			description={siteConfig.tagline}
		>
			<header className={classnames('hero hero--primary', styles.heroBanner)}>
				<div className="container">
					<h1 className="hero__title">{siteConfig.title}</h1>
					<p className="hero__subtitle">{siteConfig.tagline}</p>
					<div className={styles.buttons}>
						<Link
							className={classnames(
								'button button--secondary button--lg',
								styles.getStarted,
							)}
							to={useBaseUrl('docs/overview/intro')}
						>
							Get Started
						</Link>
					</div>
				</div>
			</header>
			<main>
				<div className="container">
					<div className="row">
						<div className="col col--8 col--offset-2 padding-vert--lg">
							<p>Welcome to the documentation of the <i>interactive statistics learning environment (ISLE)</i> and the ISLE Editor for authoring interactive lessons for statistics and related disciplines. One of our aims is to encourage instructors at universities and other learning institutions to use it for their purposes. For questions, please contact us via email at pgb AT andrew.cmu.edu.</p>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="row">
						<div className="col col--4 padding-vert--lg">
							<div className="text--center">
								<img
									className={styles.featureImage}
									src={useBaseUrl('img/undraw_youtube_tutorial.svg')}
									alt="Video Tutorials"
								/>
							</div>
							<h3>Video Tutorials</h3>
							<p>A selection of video tutorials help you get started and see how ISLE may be incorporated into your classroom.</p>
							<div className="text--center">
								<Link
									className="button button--primary button--lg"
									to={useBaseUrl('video_tutorials')}
								>
									Open
								</Link>
							</div>
						</div>
						<div className="col col--4 padding-vert--lg">
							<div className="text--center">
								<img
									className={styles.featureImage}
									src={useBaseUrl('img/undraw_features_overview.svg')}
									alt="Video Tutorials"
								/>
							</div>
							<h3>Project Website</h3>
							<p>Information on the features of ISLE and related research projects informing its development are available on the project website.</p>
							<div className="text--center">
								<Link
									className="button button--primary button--lg"
									to="http://stat.cmu.edu/isle"
								>
									Open
								</Link>
							</div>
						</div>
						<div className="col col--4 padding-vert--lg">
							<div className="text--center">
								<img
									className={styles.featureImage}
									src={useBaseUrl('img/undraw_faq.svg')}
									alt="Video Tutorials"
								/>
							</div>
							<h3>FAQ</h3>
							<p>Answers to common questions on how to leverage ISLE for your class are collected in our FAQ.</p>
							<div className="text--center">
								<Link
									className="button button--primary button--lg"
									to="http://stat.cmu.edu/isle/faq.html"
								>
									{translate({
										id: 'open-link',
										message: 'Open',
										description: 'Label for button to open link.'
									})}
								</Link>
							</div>
						</div>
					</div>
					{features && features.length && (
					<section className={styles.features}>
						<div className="container">
							<div className="row">
								{features.map(({ imageUrl, title, description }, idx) => (
									<div
										key={idx}
										className={classnames('col col--4', styles.feature)}
									>
										{imageUrl && (
											<div className="text--center">
												<img
													className={styles.featureImage}
													src={useBaseUrl(imageUrl)}
													alt={title}
												/>
											</div>
										)}
										<h3>{title}</h3>
										<p>{description}</p>
									</div>
								))}
							</div>
						</div>
					</section>
				)}
				</div>
			</main>
		</Layout>
	);
}

export default Home;
