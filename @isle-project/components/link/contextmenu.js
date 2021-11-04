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
		window.open( url, '_blank', 'location=no,scrollbars=yes,status=yes' );
		const session = this.props.session;
		session.log({
			id: url,
			type: OPEN_LINK,
			value: 'window'
		});
	};

	render() {
		let menuItems = [
			<MenuItem key={0} onClick={this.copyToClipboard} >
				{this.props.t('copy-link')}
			</MenuItem>
		];
		if ( this.props.target === '_blank' ) {
			menuItems.push(
				<MenuItem key={1} onClick={this.openInTab} >
					{this.props.t('open-link-tab')}
				</MenuItem>
			);
			menuItems.push(
				<MenuItem key={2} onClick={this.openInWindow} >
					{this.props.t('open-link-window')}
				</MenuItem>
			);
		} else {
			menuItems = [];
		}
		menuItems.push( <MenuItem key={3} onClick={this.textToSpeech} >
			{this.props.t('read-aloud')}
		</MenuItem> );
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
	session: PropTypes.object.isRequired
};

LinkContextMenu.defaultProps = {
	url: ''
};


// EXPORTS //

export default LinkContextMenu;
