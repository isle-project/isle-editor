// MODULES //

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import Tooltip from 'components/tooltip';
import './header_upper_bar.css';


// MAIN //

const HeaderUpperBar = ( props ) => {
	let updateTooltip;
	let updateMsg;
	switch ( props.updateStatus ) {
		case 'available':
			updateMsg = `Update available (${props.updateInfo.version})`;
			updateTooltip = 'Please do not exit while download is in progress';
			break;
		case 'downloading':
			updateMsg = `Download progress: ${props.updateDownloadPercent} (${props.updateInfo.version})`;
			updateTooltip = 'Please do not exit while download is in progress';
			break;
		case 'downloaded':
			updateMsg = 'Update downloaded.';
			updateTooltip = 'New version of ISLE editor will be installed upon closing the application';
			break;
		default:
			break;
	}
	return ( <div
		id="header-upper-bar"
		className="unselectable"
	>
		<h3>
			ISLE {props.title ? props.title : 'Editor'}
		</h3>
		<div>
			{ props.updateStatus ? <Tooltip tooltip={updateTooltip} >
				<Badge variant="success" id="update-indicator-badge" >
					{updateMsg}
				</Badge>
			</Tooltip> : null }
			{ props.backToEditor ?
				<Link
					to="/"
					id="link-back-to-editor"
					className="unselectable"
				>Back to Editor</Link> :
				null
			}
			<Link
				id="link-export"
				className="unselectable"
				to="/export"
			>Export</Link>
			<Link
				id="link-settings"
				className="unselectable"
				to="/settings"
			>Settings</Link>
			<Link
				id="link-docs"
				className="unselectable"
				to="/docs"
			>Documentation</Link>
		</div>
	</div> );
};


// PROPERTIES //

HeaderUpperBar.defaultProps = {
	updateDownloadPercent: null,
	updateInfo: null,
	updateStatus: null
};

HeaderUpperBar.propTypes = {
	updateDownloadPercent: PropTypes.number,
	updateInfo: PropTypes.object,
	updateStatus: PropTypes.string
};


// EXPORTS //

export default HeaderUpperBar;
