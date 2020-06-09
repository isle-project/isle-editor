// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import { withTranslation } from 'react-i18next';
import { ContextMenu, MenuItem } from 'react-contextmenu';


// VARIABLES //

const debug = logger( 'isle:lesson:sketchpad-contextmenu' );


// MAIN //

class SketchpadContextMenu extends Component {
	copyToClipboard = ( event ) => {
		debug( 'Copying page to clipboard... ' );
		const url = this.props.canvas.toDataURL();
		const img = `<img alt="Sketchpad Page" src="${url}" />`;
		function listener( e ) {
			e.clipboardData.setData( 'text/html ', img );
			e.clipboardData.setData( 'text/plain ', img );
			e.preventDefault();
		}
		document.addEventListener('copy', listener);
		document.execCommand('copy');
		document.removeEventListener('copy', listener);
	}

	render() {
		return (
			<ContextMenu
				id="sketchpadWindow"
			>
				<MenuItem onClick={this.copyToClipboard}>
					{this.props.t( 'copy' )}
				</MenuItem>
			</ContextMenu>
		);
	}
}


// PROPERTIES //

SketchpadContextMenu.propTypes = {
	canvas: PropTypes.object.isRequired
};


// EXPORTS //

export default withTranslation()( SketchpadContextMenu );
