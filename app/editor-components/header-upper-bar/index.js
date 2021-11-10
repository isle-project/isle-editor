// MODULES //

import React, { Fragment, useCallback, useMemo, memo } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { ipcRenderer } from 'electron';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import round from '@stdlib/math/base/special/round';
import Tooltip from '@isle-project/components/tooltip';
import './header_upper_bar.css';


// MAIN //

const HeaderUpperBar = ({ backToEditor, title, updateDownloading, updateDownloadPercent, updateStatus, updateInfo }) => {
	const { t } = useTranslation( 'Editor' );
	const handleUpdateClick = useCallback( () => {
		updateDownloading();
		ipcRenderer.send( 'download-update' );
	}, [ updateDownloading ] );
	const downloadButtonStyle = useMemo( () => {
		return {
			display: updateStatus === 'available' ? 'inherit' : 'none'
		};
	}, [ updateStatus ] );
	let updateTooltip;
	let updateMsg;
	switch ( updateStatus ) {
		case 'available':
			updateMsg = t('update-available', { version: updateInfo.version });
			updateTooltip = t('update-available-tooltip');
			break;
		case 'downloading':
			if ( updateDownloadPercent ) {
				updateMsg = t('update-downloading-percent', {
					percent: round( updateDownloadPercent ),
					version: updateInfo.version
				});
			} else {
				updateMsg = t('update-downloading-version', { version: updateInfo.version });
			}
			updateTooltip = t('update-downloading-tooltip');
			break;
		case 'downloaded':
			updateMsg = t('update-downloaded');
			updateTooltip = t('update-downloaded-tooltip');
			break;
		default:
			break;
	}
	return ( <div
		id="header-upper-bar"
		className="unselectable"
	>
		<h3>
			ISLE {title ? title : t('editor')}
		</h3>
		<div>
			{ updateStatus ? <Fragment>
				<Tooltip tooltip={updateTooltip} >
					<Badge bg="success" id="update-indicator-badge" >
						{updateMsg}
						<Button
							id="update-download-button" variant="secondary"
							size="sm" onClick={handleUpdateClick}
							style={downloadButtonStyle}
						>
							{t('download')}
						</Button>
					</Badge>
				</Tooltip>
			</Fragment>: null }
			{ backToEditor ?
				<Link
					to="/"
					id="link-back-to-editor"
					className="unselectable"
				>{t('back-to-editor')}</Link> :
				null
			}
			<Link
				id="link-export"
				className="unselectable"
				to="/export"
			>{t('export')}</Link>
			<Link
				id="link-settings"
				className="unselectable"
				to="/settings"
			>{t('settings')}</Link>
			<Link
				id="link-docs"
				className="unselectable"
				to="/docs"
			>{t('documentation')}</Link>
		</div>
	</div> );
};


// PROPERTIES //

HeaderUpperBar.defaultProps = {
	updateDownloading() {},
	updateDownloadPercent: null,
	updateInfo: null,
	updateStatus: null
};

HeaderUpperBar.propTypes = {
	updateDownloading: PropTypes.func,
	updateDownloadPercent: PropTypes.number,
	updateInfo: PropTypes.object,
	updateStatus: PropTypes.string
};


// EXPORTS //

export default memo( HeaderUpperBar );
