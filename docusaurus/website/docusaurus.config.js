/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

const siteConfig = {
	presets: [
		[
			'@docusaurus/preset-classic',
			{
				docs: {
					path: 'docs',
					sidebarPath: require.resolve( './sidebars.json' ),
					editUrl: 'https://github.com/facebook/docusaurus/edit/master/website',
					showLastUpdateAuthor: true,
					showLastUpdateTime: true
				},
				theme: {
					customCss: require.resolve('./static/css/custom.css')
				}
			}
		]
	],
	title: 'ISLE Documentation', // Title for your website.
	tagline: 'Author Lessons for the Integrated Statistics Learning Environment',
	url: 'https://isledocs.com', // Your website URL
	baseUrl: '/',

	// Used for publishing and more
	projectName: 'isle-editor',
	organizationName: 'isle-project',
	// For top-level user or org sites, the organization is still the same.
	// e.g., for the https://JoelMarcey.github.io site, it would be set like...
	//   organizationName: 'JoelMarcey'

	favicon: 'img/favicon.png',

	themeConfig: {
		footer: {
			logo: {
				alt: 'ISLE Logo',
				src: 'img/isle_logo_bare.png',
				href: 'https://isledocs.com'
			},
			copyright: `Copyright © ${new Date().getFullYear()} The ISLE Authors`,
			links: [
				{
					title: 'Docs',
					items: [
						{
							to: 'docs/overview/intro', label: 'Getting Started'
						},
						{
							to: 'docs/overview/components', label: 'Components'
						}
					]
				},
				{
					title: 'Community',
					items: [
						{
							to: 'https://github.com/isle-project/isle-editor/issues',
							label: 'Submit a bug report or feature request'
						},
						{
							to: 'https://discourse.isledocs.com',
							label: 'Go to the discussion forum'
						}
					]
				},
				{
					title: 'More',
					items: [
						{
							to: 'blog',
							label: 'Blog'
						},
						{
							to: 'https://github.com/isle-project',
							label: 'GitHub'
						}
					]
				}
			]
		},
		navbar: {
			logo: {
				alt: 'ISLE Logo',
				src: 'img/isle_logo_bare.png'
			},
			links: [
				{ to: 'docs/overview/intro', label: 'Docs' },
				{ to: 'help', label: 'Help' },
				{ to: 'blog', label: 'Blog' },
				{ href: 'https://github.com/isle-project', label: 'GitHub' }
			]
		},
		image: 'img/docusaurus.png',
		sidebarCollapsible: true,
		algolia: {
			apiKey: '79d8a88e3298cd96be31662732f18703',
			indexName: 'isledocs',
			algoliaOptions: {} // Optional, if provided by Algolia
		},
		ogImage: 'img/undraw_online.svg',
		twitterImage: 'img/undraw_tweetstorm.svg'
	},

	stylesheets: [
		'https://fonts.googleapis.com/css?family=Libre+Franklin|Noto+Sans&display=swap'
	],

	// Add custom scripts here that would be placed in <script> tags.
	scripts: [
		'https://buttons.github.io/buttons.js',
		'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js',
		'/js/code_block_buttons.js'
	]
};

module.exports = siteConfig;

