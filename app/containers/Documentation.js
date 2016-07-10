// MODULES //

import React, { Component } from 'react';
import { exec } from 'child_process';
import { Link } from 'react-router';


// FUNCTIONS //

const openBrowser = ( url ) => {
	exec( 'xdg-open ' + url );
};


// DOCUMENTATION //

class Documentation extends Component {
	componentDidMount() {
		const webview = document.getElementById( 'DocumentationView' );
		webview.addEventListener( 'new-window', ( e ) => {
			try {
				openBrowser( e.url );
			} catch( error ) {
				alert( `Ignoring ${e.url} due to ${error.message}` );
			}
		});
	}
	render() {
		return (
			<div>
				<Link
					to="/"
					style={{
						float: 'right',
						color: 'silver',
						position: 'absolute',
						top: '12px',
						right: '140px',
						fontSize: '18px',
						zIndex: 2
					}}
				>Back to Editor</Link>
				<webview
					id="DocumentationView"
					src="http://isledocs.philipp-burckhardt.com/"
					style={{ display: 'flex', minHeight: '1600px' }}
					autosize="on"
					disablewebsecurity
				></webview>
			</div>
		);
	}
}


// EXPORTS //

export default Documentation;
