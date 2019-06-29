/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

const siteConfig = {
	title: 'ISLE Documentation', // Title for your website.
	tagline: 'Author Lessons for the Integrated Statistics Learning Environment',
	url: 'https://isledocs.com', // Your website URL
	baseUrl: '/',
	editUrl: 'https://github.com/isle-project/isle-editor/edit/master/docusaurus/docs/',
	cname: 'isledocs.com',

	// Used for publishing and more
	projectName: 'isle-editor',
	organizationName: 'isle-project',
	// For top-level user or org sites, the organization is still the same.
	// e.g., for the https://JoelMarcey.github.io site, it would be set like...
	//   organizationName: 'JoelMarcey'

	// For no header links in the top nav bar -> headerLinks: [],
	headerLinks: [
		{ doc: 'overview/first-lesson', label: 'Docs' },
		{ page: 'help', label: 'Help' },
		{ blog: true, label: 'Blog' },
		{ search: true },
		{ href: 'https://github.com/isle-project', label: 'GitHub' }
	],

	algolia: {
		apiKey: 'my-api-key',
		indexName: 'my-index-name',
		algoliaOptions: {} // Optional, if provided by Algolia
	},

	/* path to images for header/footer */
	headerIcon: 'img/isle_logo_bare.png',
	footerIcon: 'img/isle_logo_bare.png',
	favicon: 'img/favicon.png',

	/* Colors for website */
	colors: {
		primaryColor: '#208089',
		secondaryColor: '#bb0000'
	},

	/* Custom fonts for website */
	/*
	fonts: {
		myFont: [
			"Times New Roman",
			"Serif"
		],
		myOtherFont: [
			"-apple-system",
			"system-ui"
		]
	},
	*/

	// This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
	copyright: `Copyright © ${new Date().getFullYear()} The ISLE Authors`,

	highlight: {
		// Highlight.js theme to use for syntax highlighting in code blocks.
		theme: 'default'
	},

	// Add custom scripts here that would be placed in <script> tags.
	scripts: [
		'https://buttons.github.io/buttons.js',
		'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js',
		'/js/code_block_buttons.js'
	],

	// No .html extensions for paths.
	cleanUrl: true,
	scrollToTop: true,

	// Open Graph and Twitter card images.
	ogImage: 'img/undraw_online.svg',
	twitterImage: 'img/undraw_tweetstorm.svg',

	// Show documentation's last contributor's name.
	enableUpdateBy: true,

	// Show documentation's last update time.
	enableUpdateTime: true,

	docsSideNavCollapsible: true,

	// You may provide arbitrary config keys to be used as needed by your
	// template. For example, if you need your repo's URL...
	repoUrl: 'https://github.com/isle-project/isle-editor'
};

module.exports = siteConfig;

