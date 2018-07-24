// MODULES //

import React, { Component } from 'react';
import { exec } from 'child_process';
import { Link } from 'react-router-dom';
import { ISLE_DOCS_LINK } from 'constants/links';


// FUNCTIONS //

const openBrowser = ( url ) => {
	exec( 'xdg-open ' + url );
};


// MAIN //

class Documentation extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			width: window.innerWidth,
			height: window.innerHeight
		};

		this.resize = () => {
			this.setState({
				width: window.innerWidth,
				height: window.innerHeight
			});
		};

		this.resize();
	}

	componentDidMount() {
		this.webview.addEventListener( 'new-window', ( e ) => {
			try {
				openBrowser( e.url );
			} catch ( error ) {
				alert( `Ignoring ${e.url} due to ${error.message}` ); // eslint-disable-line no-alert
			}
		});
		window.addEventListener( 'resize', this.resize );
	}

	componentWillUnmount() {
		window.removeEventListener( 'resize', this.resize );
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
					src={ISLE_DOCS_LINK}
					style={{
						display: 'flex',
						height: this.state.height,
						window: this.state.width
					}}
					ref={( div ) => { this.webview = div; }}
					autosize="on"
					disablewebsecurity
				/>
			</div>
		);
	}
}


// EXPORTS //

export default Documentation;
