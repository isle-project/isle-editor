/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable react/no-danger */

// MODULES //

import React from 'react';
import Layout from '@theme/Layout';
import Translate, { translate } from '@docusaurus/Translate';
import useBaseUrl from '@docusaurus/useBaseUrl';


// MAIN //

function Support() {
	return (
		<Layout
			title={translate({ message: 'Help Page' })}
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
							<Translate>
								Learn more using the <a href={useBaseUrl('docs/overview/intro')}> documentation on this site</a> or by following the <a href={useBaseUrl('video_tutorials')} >
								tutorials</a>.
							</Translate>
						</p>
						<h2>
							{translate({
								id: 'help.join-community-heading',
								message: 'Join the Community',
								description: 'Join the Community Heading'
							})}
						</h2>
						<p dangerouslySetInnerHTML={{
							__html: translate({
								id: 'help.join-community',
								message: 'Ask questions about the documentation and project in the <a href="https://discourse.isledocs.com">discussion forum</a>.'
							})
						}} />
						<h2>
							{translate({
								id: 'help.stay-updated-heading',
								message: 'Stay up to date',
								description: 'Stay Updated Heading'
							})}
						</h2>
						<p dangerouslySetInnerHTML={{
							__html: translate({
								id: 'help.stay-updated',
								message: 'Find out what&apos;s new with this project by browsing the <a href="https://github.com/isle-project/isle-editor/releases">releases</a> of the ISLE editor'
							})
						}} />
					</div>
				</div>
			</div>
		</Layout>
	);
}


// EXPORTS //

export default Support;
