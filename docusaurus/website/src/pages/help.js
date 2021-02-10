/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '@theme/Layout';
import Translate, { translate } from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';


function Support() {
	const context = useDocusaurusContext();
	const { siteConfig = {} } = context;
	return (
		<Layout
			title={`Hello from ${siteConfig.title}`}
			description="Description will go into a meta tag in <head />"
		>
			<div className="container">
				<div className="row">
					<div className="col col--6 col--offset-3 padding-vert--lg">
						<h1>
							{translate({
								id: 'help.need-help-heading',
								message: 'Need Help?',
								description: 'Help Page Top-Level Heading'
							})}
	  					</h1>
						<p>
							{translate({
								id: 'help.maintained-by-people',
								message: 'This project is maintained by a dedicated group of people.',
								description: 'Paragraph mentioning that project is maintained by multiple people'
							})}
						</p>

						<h2>
							{translate({
								id: 'help.browse-docs-heading',
								message: 'Browse Docs',
								description: 'Browse Docs Heading'
							})}
						</h2>
						<p>
							Learn more using the <a href={useBaseUrl('docs/overview/intro')}>documentation on this site</a> or by following the <a href={useBaseUrl('video_tutorials')}>
						tutorials</a>.</p>
						<h2>
							{translate({
								id: 'help.join-community-heading',
								message: 'Join the Community',
								description: 'Join the Community Heading'
							})}
						</h2>
						<p>
							Ask questions about the documentation and project in the <a href="https://discourse.isledocs.com">discussion forum</a>.
						</p>

						<h2>
							{translate({
								id: 'help.stay-updated-heading',
								message: 'Stay up to date',
								description: 'Stay Updated Heading'
							})}
						</h2>
						<p>
							Find out what&apos;s new with this project by browsing the <a href="https://github.com/isle-project/isle-editor/releases">releases</a> of the ISLE editor
						</p>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default Support;
