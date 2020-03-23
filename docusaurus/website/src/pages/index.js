/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

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
		),
	},
];

function Home() {
	const context = useDocusaurusContext();
	const { siteConfig = {} } = context;

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
							to={useBaseUrl('docs/overview')}
						>
							Get Started
						</Link>
					</div>
				</div>
			</header>
			<main>
				<p>Welcome to the documentation of the *interactive statistics learning environment* (ISLE) and the ISLE Editor for authoring interactive lessons for statistics and related disciplines.
				</p>
				<p> One of our aims is to encourage instructors at universities and other learning institutions to use it for their purposes. For questions, please contact us via email at pgb AT andrew.cmu.edu.</p>
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
				<div className="container">
					<div className="row">
						<div className="col col--6 col--offset-3 padding-vert--lg">
							<h2>Introduction Video</h2>
							<iframe
								width="100%"
								height="315"
								src="https://www.youtube.com/embed/nYkdrAPrdcw"
								frameborder="0"
								allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
								allowfullscreen
							/>
							<div className="text--center padding-vert--lg">
								<Link
									className="button button--primary button--lg"
									to="http://stat.cmu.edu/isle"
								>
									Project Website
								</Link>
							</div>
						</div>
					</div>
				</div>
			</main>
		</Layout>
	);
}

export default Home;
