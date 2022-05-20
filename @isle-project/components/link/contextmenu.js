// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import { ContextMenu, MenuItem } from '@isle-project/components/internal/contextmenu';
import { OPEN_LINK } from '@isle-project/constants/actions.js';


// VARIABLES //

const debug = logger( 'isle:link:contextmenu' );


// MAIN //

class LinkContextMenu extends Component {
	constructor( props ) {
		super( props );
	}

	copyToClipboard = ( event ) => {
		debug( 'Copying selection to clipboard... ' );
		navigator.clipboard.writeText( this.props.url );
	};

	textToSpeech = () => {
		const str = this.props.url;
		const session = this.props.session;
		const ssu = new SpeechSynthesisUtterance( str );
		ssu.lang = session.config.language || 'en-US';
		window.speechSynthesis.speak( ssu );
	};

	openInTab = () => {
		const url = this.props.url;
		debug( `Open ${url} in new tab` );
		window.open( url, '_blank' );
		const session = this.props.session;
		session.log({
			id: url,
			type: OPEN_LINK,
			value: 'tab'
		});
	};

	openInWindow = () => {
		const url = this.props.url;
		debug( `Open ${url} in new window` );
		const features = this.props.windowFeatures || 'menubar=no,location=no,resizable=yes,scrollbars=yes,status=no,width=800,height=600';
		window.open( url, '_blank', features );
		const session = this.props.session;
		session.log({
			id: url,
			type: OPEN_LINK,
			value: 'window'
		});
	};

	render() {
		const menuItems = [
			<MenuItem key={0} onClick={this.copyToClipboard} >
				{this.props.t('copy-link')}
			</MenuItem>,
			<MenuItem key={1} onClick={this.openInTab} >
				{this.props.t('open-link-tab')}
			</MenuItem>,
			<MenuItem key={2} onClick={this.openInWindow} >
				{this.props.t('open-link-window')}
			</MenuItem>,
			<MenuItem key={3} onClick={this.textToSpeech} >
				{this.props.t('read-aloud')}
			</MenuItem>
		];
		return ( <ContextMenu
			id={`${this.props.url}-context-menu`}
		>
			{menuItems}
		</ContextMenu> );
	}
}


// PROPERTIES //

LinkContextMenu.propTypes = {
	url: PropTypes.string,
	windowFeatures: PropTypes.string,
	session: PropTypes.object.isRequired
};

LinkContextMenu.defaultProps = {
	windowFeatures: 'location=no,scrollbars=yes,status=yes',
	url: ''
};


// EXPORTS //

export default LinkContextMenu;
