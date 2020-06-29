/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// MODULES //

const path = require( 'path' );


// MAIN //

const siteConfig = {
	presets: [
		[
			'@docusaurus/preset-classic',
			{
				docs: {
					path: 'docs',
					sidebarPath: require.resolve( './sidebars.json' ),
					editUrl: 'https://github.com/isle-project/isle-editor/edit/master/docusaurus/website',
					showLastUpdateAuthor: true,
					showLastUpdateTime: true
				},
				theme: {
					customCss: require.resolve('./static/css/custom.css')
				}
			}
		]
	],

	title: 'ISLE Documentation',
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
		announcementBar: {
			id: 'updated_docs', // Any value that will identify this message
			content: 'Watch out for updated documentation in the coming weeks',
			backgroundColor: '#fafbfc', // Defaults to `#fff`
			textColor: '#091E42' // Defaults to `#000`
		},
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
						},
						{
							to: 'docs/server/installation', label: 'Server'
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
			title: 'ISLE Documentation',
			logo: {
				alt: 'ISLE Logo',
				src: 'img/isle_logo_bare.png'
			},
			hideOnScroll: true,
			links: [
				{ to: 'docs/overview/intro', label: 'Docs' },
				{ to: 'help', label: 'Help' },
				{ to: 'blog', label: 'Blog' },
				{
					href: 'https://github.com/isle-project',
					label: 'GitHub'
				},
				{
					href: 'https://discourse.isledocs.com',
					label: 'Forum',
					target: '_self'
				}
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

	scripts: [
		'https://cdn.jsdelivr.net/npm/@isle-project/session/dll.session.js',
		'https://cdn.jsdelivr.net/npm/@isle-project/components/dll.components.js'
	],

	stylesheets: [
		'https://fonts.googleapis.com/css?family=Libre+Franklin|Noto+Sans&display=swap'
	],

	plugins: [],

	themes: ['@docusaurus/theme-live-codeblock']
};

module.exports = siteConfig;

