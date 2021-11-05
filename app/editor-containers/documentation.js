// MODULES //

import React, { Component } from 'react';
import { exec } from 'child_process';
import { withTranslation } from 'react-i18next';
import { ISLE_DOCS_LINK } from 'constants/links';
import HeaderUpperBar from 'editor-components/header-upper-bar';


// FUNCTIONS //

/**
* Opens the given URL in the default browser.
*
* @private
* @param {string} url - the URL to open
*/
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
	}

	componentDidMount() {
		this.resize();
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

	resize = () => {
		this.setState({
			width: window.innerWidth,
			height: window.innerHeight
		});
	};

	render() {
		const { t } = this.props;
		return (
			<div>
				<HeaderUpperBar backToEditor title={t('documentation')} />
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
					disablewebsecurity="true"
				/>
			</div>
		);
	}
}


// EXPORTS //

export default withTranslation( 'Editor' )( Documentation );
