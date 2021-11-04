// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import { withTranslation } from 'react-i18next';
import { ContextMenu, MenuItem } from '@isle-project/components/internal/contextmenu';


// VARIABLES //

const debug = logger( 'isle:lesson:sketchpad-contextmenu' );


// MAIN //

class SketchpadContextMenu extends Component {
	copyToClipboard = () => {
		debug( 'Copying page to clipboard... ' );
		let img;
		if ( this.props.canvas ) {
			const url = this.props.canvas.toDataURL();
			img = `<img alt="Sketchpad Page" src="${url}" />`;
			document.addEventListener('copy', listener);
			document.execCommand('copy');
			document.removeEventListener('copy', listener);
		}

		function listener( e ) {
			e.clipboardData.setData( 'text/html ', img );
			e.clipboardData.setData( 'text/plain ', img );
			e.preventDefault();
		}
	};

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
	canvas: PropTypes.object
};

SketchpadContextMenu.defaultProps = {
	canvas: null
};


// EXPORTS //

export default withTranslation( 'sketchpad' )( SketchpadContextMenu );
