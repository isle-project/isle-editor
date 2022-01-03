/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable react/no-danger, import/no-unresolved */

// MODULES //

import React from 'react';
import classnames from 'classnames';
import Translate, { translate } from '@docusaurus/Translate';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';


// VARIABLES //

global.Buffer = global.Buffer || require('buffer').Buffer;
if ( typeof window === 'undefined' ) {
	global.window = {};
}
if ( typeof global.localStorage === 'undefined' ) {
	global.localStorage = null;
}
const features = [
	{
		title: <>
			{translate({
				id: 'overview.isle-editor',
				message: 'ISLE Editor',
				description: 'ISLE Editor'
			})}
		</>,
		imageUrl: 'img/undraw_editor.svg',
		description: (
			<>
				{translate({
					id: 'overview.isle-editor-into',
					message: 'Use the ISLE editor to create new ISLE lessons, ranging from interactive lectures to lab activities or homework assignments.',
					description: 'Introduction of ISLE editor for creating lessons.'
				})}
			</>
		)
	},
	{
		title: <>
			{translate({
				id: 'overview.isle-dashboard',
				message: 'ISLE Dashboard',
				description: 'ISLE Dashboard'
			})}
		</>,
		imageUrl: 'img/undraw_dashboard.svg',
		description: (
			<>
				{translate({
					id: 'overview.isle-dashboard-intro',
					message: 'Use the ISLE dashboard to manage your course, administer lessons, and monitor student progress.',
					description: 'Introduction of ISLE dashboard for course management.'
				})}
			</>
		)
	},
	{
		title: <>
			{translate({
				id: 'overview.isle-server',
				message: 'ISLE Server',
				description: 'ISLE Server'
			})}
		</>,
		imageUrl: 'img/undraw_server.svg',
		description: (
			<>
				{translate({
					id: 'overview.isle-server-intro',
					message: 'Host an ISLE server instance for user management and data collection or deploy to an existing server.',
					description: 'Introduction of ISLE backend server.'
				})}
			</>
		)
	}
];
const FeatureImage = ({ title, imageUrl }) => {
	const imageSrc = useBaseUrl( imageUrl );
	if ( !imageUrl ) {
		return null;
	}
	return ( <div className="text--center">
		<img
			className={styles.featureImage}
			src={imageSrc}
			alt={title}
		/>
	</div> );
};


// MAIN //

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
							{translate({
								id: 'overview.get-started',
								message: 'Get Started',
								description: 'Label for how to get started.'
							})}
						</Link>
					</div>
				</div>
			</header>
			<main>
				<div className="container">
					<div className="row">
						<div className="col col--8 col--offset-2 padding-vert--lg">
							<p dangerouslySetInnerHTML={{
								__html: translate({
									id: 'overview.welcome',
									message: 'Welcome to the documentation of the <i>interactive statistics learning environment (ISLE)</i> and the ISLE Editor for authoring interactive lessons for statistics and related disciplines. One of our aims is to encourage instructors at universities and other learning institutions to use it for their purposes. For questions, please contact us via email at pgb AT andrew.cmu.edu.',
									description: 'Welcome message at beginning of documentation'
								})
							}} />
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
							<h3>{translate({
								id: 'video-tutorials',
								message: 'Video Tutorials',
								description: 'Video Tutorials'
							})}</h3>
							<p>
								<Translate>
									A selection of video tutorials help you get started and see how ISLE may be incorporated into your classroom.
								</Translate>
							</p>
							<div className="text--center">
								<Link
									className="button button--primary button--lg"
									to={useBaseUrl('video_tutorials')}
								>
									{translate({
										id: 'open-link',
										message: 'Open',
										description: 'Label for button to open link.'
									})}
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
							<h3>{translate({
								id: 'overview.project-website',
								message: 'Project Website',
								description: 'Project Website'
							})}</h3>
							<p>
								<Translate>
									Information on the features of ISLE and related research projects informing its development are available on the project website.
								</Translate>
							</p>
							<div className="text--center">
								<Link
									className="button button--primary button--lg"
									to="https://stat.cmu.edu/isle"
								>
									{translate({
										id: 'open-link',
										message: 'Open',
										description: 'Label for button to open link.'
									})}
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
							<h3>{translate({
								id: 'overview.faq',
								message: 'FAQ',
								description: 'Frequently Asked Questions'
							})}</h3>
							<p>
								{translate({
									id: 'overview.faq-intro',
									message: 'Answers to common questions on how to leverage ISLE for your class are collected in our FAQ.',
									description: 'Introductory paragraph for FAQ section.'
								})}
							</p>
							<div className="text--center">
								<Link
									className="button button--primary button--lg"
									to="https://stat.cmu.edu/isle/faq.html"
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
										<FeatureImage
											imageUrl={imageUrl} title={title}
										/>
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


// EXPORTS //

export default Home;
