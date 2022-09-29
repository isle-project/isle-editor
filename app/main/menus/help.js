// MODULES //

import electron, { BrowserWindow, net } from 'electron';
import path from 'path';
import os from 'os';
import fs from 'fs';
import * as actions from './../actions';
import pkg from './../../../package.json';


// VARIABLES //

const CHANGELOG_TEMPLATE = `<!doctype html>
<html lang=en>
<head>
	<meta charset=utf-8>
	<title>ISLE Editor Release Notes</title>
	<link href="https://fonts.googleapis.com/css?family=Inconsolata:400,700|Open+Sans+Condensed:300,300i,700|Open+Sans:400,400i,700,800" rel="stylesheet">
	<style>
		body {
			font-family: Inconsolata;
			line-height: 1.3;
			font-size: 1.1em;
		}

		.HeaderBar {
			position: fixed;
			top: 0;
			left: 0;
			color: darkgray;
			text-align: center;
			font-family: Open Sans Condensed;
			font-size: 30px;
			font-weight: 800;
			width: 100%;
			height: 46px;
			box-shadow: 0 3px darkgray;
			background: white;
			z-index: 2;
		}

		.margin {
			width: 100%;
			height: 40px;
		}CHANGELOG_TEMPLATE
			font-weight: 700;
			font-family: Open Sans Condensed;
		}

		h2,
		h3 {
			font-family: Open Sans Condensed;
		}

		a:-webkit-any-link {
			color: darkorange;
		}

		.newer-version {
			background: rgba(200, 100, 0, 0.2);
		}
		li {
			font-size: 1em;
		}
	</style>
</head>
<body>
	<div class="HeaderBar">Your current version: {{version}}</div>
	<div class="margin"></div>
	{{body}}
</body>
</html>`;


// MAIN //

const createHelpMenu = ( i18n ) => {
	const out = {
		label: i18n.t('EditorMenu:help'),
		submenu: [
			{
				label: i18n.t('EditorMenu:report-bug'),
				accelerator: '',
				click: () => {
					actions.openBrowser( 'https://github.com/isle-project/isle-editor/issues/new?template=bug_report.yml' );
				}
			},
			{
				label: i18n.t('EditorMenu:request-new-feature'),
				accelerator: '',
				click: () => {
					actions.openBrowser( 'https://github.com/isle-project/isle-editor/issues/new?template=feature_request.yml' );
				}
			},
			{
				label: i18n.t('EditorMenu:search-issues'),
				accelerator: '',
				click: () => {
					actions.openBrowser( 'https://github.com/isle-project/isle-editor/issues' );
				}
			},
			{
				type: 'separator'
			},
			{
				label: i18n.t('EditorMenu:check-for-updates' ),
				click: ( _, browserWindow ) => {
					const request = net.request({
						method: 'GET',
						url: 'https://raw.githubusercontent.com/isle-project/isle-editor/master/package.json'
					});
					request.on( 'response', response => {
						let body = '';
						response.on( 'data', ( chunk ) => {
							body += chunk;
						});
						request.on( 'error', error => console.error( error ) ); // eslint-disable-line
						response.on( 'end', () => {
							const json = JSON.parse( body );
							const newVersion = json.version;
							const updateAvailable = newVersion !== pkg.version;
							const msg = updateAvailable ?
								`${i18n.t('Editor:new-version-available', { newVersion })}: <a href="https://isledocs.com/docs/overview/install" target="_blank" ><i class="fas fa-download"></i></a>.` :
								i18n.t('no-update-available');
							const html = [
								'<body>',
									'<h1 style="font-family: Open Sans; color: rgb(46,68,104);">ISLE Editor Update</h1>',
									`<p>${msg}</p>`,
								'</body>'
							].join( '' );
							actions.showDialog({ browserWindow, message: html });
						});
					});
					request.end();
				}
			},
			{
				label: i18n.t('EditorMenu:release-notes' ),
				click: () => {
					const markdownit = require( 'markdown-it' );
					const md = markdownit({
						html: false,
						xhtmlOut: true,
						breaks: false,
						typographer: false
					});
					const request = net.request({
						method: 'GET',
						url: 'https://raw.githubusercontent.com/isle-project/isle-editor/master/CHANGELOG.md'
					});
					request.on( 'response', response => {
						let body = '';
						response.on( 'data', ( chunk ) => {
							body += chunk;
						});
						request.on( 'error', error => console.error( error ) ); // eslint-disable-line
						response.on( 'end', () => {
							let html = md.render( body );
							const pkgVersion = pkg.version;
							const RE_CURRENT_VERSION_HEADING = new RegExp( '<h2>\\s*<a\\s+href="https:\\/\\/github\\.com\\/isle-project\\/isle-editor\\/releases\\/tag\\/v'+pkgVersion+'"\\s*' );
							const match = RE_CURRENT_VERSION_HEADING.exec( html );
							let newer = html.substring( 0, match.index );
							let older = html.substring( match.index );
							newer = '<div class="newer-version">' + newer + '</div>';

							newer = newer.replace( /<a href/g, '<a target="_blank" href' );
							older = older.replace( /<a href/g, '<a target="_blank" href' );

							let changelog = CHANGELOG_TEMPLATE.replace( '{{version}}', pkg.version );
							changelog = changelog.replace( '{{body}}', [
								newer,
								older
							].join( '' ) );

							const filePath = path.join( os.tmpdir(), 'isle_editor_changelog.html' );
							fs.writeFileSync( filePath, changelog );

							const { width, height } = electron.screen.getPrimaryDisplay().workAreaSize;
							const changelogWindow = new BrowserWindow({
								width: 0.75 * width,
								height: 0.75 * height,
								center: true,
								frame: true,
								maximizable: false
							});
							changelogWindow.removeMenu();
							changelogWindow.loadFile( filePath );
						});
					});
					request.end();
				}
			},
			{
				label: i18n.t('EditorMenu:about'),
				accelerator: '',
				click: ( _, browserWindow ) => {
					const html = [
						'<body>',
							'<h1 style="font-family: Open Sans; color: rgb(46,68,104);">ISLE Editor</h1>',
							`<p><b>Version:</b> ${pkg.version}</p>`,
							`<p><b>Operating System:</b> ${os.type()} ${os.arch()} ${os.release()}</p>`,
						'</body>'
					].join( '' );
					actions.showDialog({ browserWindow, message: html });
				}
			}
		]
	};
	return out;
};


// EXPORTS //

export default createHelpMenu;
