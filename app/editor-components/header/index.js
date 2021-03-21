// MODULES //

import React, { useCallback, useMemo, memo } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import DropdownItem from 'react-bootstrap/DropdownItem';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { isPrimitive as isString } from '@stdlib/assert/is-string';
import HeaderUpperBar from 'editor-components/header-upper-bar';
import Tooltip from '@isle-project/components/tooltip';
import CheckboxInput from '@isle-project/components/input/checkbox';
import KeyControls from '@isle-project/components/key-controls';
import stopPropagation from '@isle-project/utils/stop-propagation';
import './header.css';


// VARIABLES //

const F5 = '(F5)';
const MARGIN_TOP_RIGHT = { marginTop: 3, marginRight: 5 };


// MAIN //

const Header = ( props ) => {
	const { autoUpdatePreview, filePath, showLineButtons, triggerUpdate, onSelectMode, onSelectRole } = props;
	const { t } = useTranslation( 'Editor' );
	const createOverlay = useCallback( ({ outOfBoundaries, scheduleUpdate, show, arrowProps, ...props }) => {
		return ( <div
			{...props}
			style={{
				backgroundColor: 'rgba(50, 50, 50, 0.85)',
				padding: '2px 10px',
				color: 'white',
				borderRadius: 3,
				...props.style
			}}
		>
			{filePath || t('please-save-file')}
		</div> );
	}, [ filePath, t ] );

	const handleTriggerUpdate = useCallback( () => {
		triggerUpdate();
	}, [ triggerUpdate ] );

	const keyboardActions = useMemo( () => {
		return {
			'F5': handleTriggerUpdate
		};
	}, [ handleTriggerUpdate ] );
	const updateButtonStyle = useMemo( () => {
		return {
			display: autoUpdatePreview ? 'none' : 'inline'
		};
	}, [ autoUpdatePreview ] );

	const handleModeSelection = useCallback( ( eventKey ) => {
		let newMode;
		switch ( eventKey ) {
		case '1':
		default:
			newMode = 'offline';
			break;
		case '2':
			newMode = 'online';
			break;
		}
		onSelectMode( newMode );
	}, [ onSelectMode ] );

	const handleRoleSelection = useCallback( ( eventKey ) => {
		let newRole;
		switch ( eventKey ) {
		case '1':
			newRole = 'anonymous';
			break;
		case '2':
			newRole = 'user';
			break;
		case '3':
			newRole = 'enrolled';
			break;
		case '4':
		default:
			newRole = 'owner';
			break;
		}
		onSelectRole( newRole );
	}, [ onSelectRole ] );

	/* eslint-disable jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */
	return (
		<div>
			<HeaderUpperBar
				updateStatus={props.updateStatus}
				updateInfo={props.updateInfo}
				updateDownloading={props.updateDownloading}
				updateDownloadPercent={props.updateDownloadPercent}
			/>
			<div
				id="header-lower-bar"
				className="unselectable"
			>
				<span style={{ paddingLeft: 5 }} id="editor-filepath" >
					<OverlayTrigger
						placement="right"
						overlay={createOverlay}
					>
						<span style={{ paddingRight: 5 }}>{props.fileName || t('untitled-document')}</span>
					</OverlayTrigger>
					{props.unsaved ? <i style={{ paddingLeft: 5, color: '#6c757d' }} className="fas fa-circle"></i> : null}
				</span>
				<ButtonGroup className="unselectable" style={{ zIndex: 100 }} size="sm" >
					<CheckboxInput
						id="show-line-buttons"
						value={showLineButtons}
						onChange={props.toggleLineButtons}
						legend={t('show-line-buttons')}
						inline
						style={MARGIN_TOP_RIGHT}
					/>
					<CheckboxInput
						id="automatically-update-preview"
						value={props.autoUpdatePreview}
						onChange={props.changeAutoUpdate}
						legend={t('automatically-update-preview')}
						inline
						style={MARGIN_TOP_RIGHT}
					/>
					<Tooltip placement="top" tooltip={`${t('trigger-update')} ${F5}`} >
						<Button
							onClick={props.triggerUpdate}
							style={updateButtonStyle}
							variant="outline-secondary"
						><i className="fas fa-sync"></i></Button>
					</Tooltip>
					<Tooltip placement="top" tooltip={t('switch-online-offline')} show={props.preamble && isString( props.preamble.server)} >
						<div id="change-online-mode" onClick={stopPropagation} >
							<DropdownButton
								title={t(props.mode)}
								id="bg-mode-dropdown"
								size="sm"
								variant="warning"
								onSelect={handleModeSelection}
								disabled={!props.preamble || !isString( props.preamble.server)}
							>
								<DropdownItem eventKey="1">{t('offline')}</DropdownItem>
								<DropdownItem eventKey="2">{t('online')}</DropdownItem>
							</DropdownButton>
						</div>
					</Tooltip>
					<Tooltip placement="top" tooltip={t('preview-lesson-role')} >
						<div id="header-role-in-preview" onClick={stopPropagation} >
							<DropdownButton
								title={t(props.role)}
								id="bg-user-dropdown"
								size="sm"
								variant="success"
								onSelect={handleRoleSelection}
							>
								<DropdownItem eventKey="1">{t('anonymous')}</DropdownItem>
								<DropdownItem eventKey="2">{t('user')}</DropdownItem>
								<DropdownItem eventKey="3">{t('enrolled')}</DropdownItem>
								<DropdownItem eventKey="4">{t('owner')}</DropdownItem>
							</DropdownButton>
						</div>
					</Tooltip>
					<Tooltip placement="bottom" tooltip={t('preview-tooltip')} >
						<Button id="header-preview-button" variant="secondary" onClick={props.onPreview} >
							{t('preview')}
						</Button>
					</Tooltip>
				</ButtonGroup>
			</div>
			<KeyControls
				actions={keyboardActions}
			/>
		</div>
	);
	/* eslint-enable jsx-a11y/no-static-element-interactions */
};


// PROPERTIES //

Header.defaultProps = {
	fileName: '',
	filePath: '',
	preamble: null,
	updateDownloadPercent: null,
	updateInfo: null,
	updateStatus: null
};

Header.propTypes = {
	filePath: PropTypes.string,
	fileName: PropTypes.string,
	unsaved: PropTypes.bool.isRequired,
	mode: PropTypes.string.isRequired,
	preamble: PropTypes.object,
	autoUpdatePreview: PropTypes.bool.isRequired,
	changeAutoUpdate: PropTypes.func.isRequired,
	showLineButtons: PropTypes.bool.isRequired,
	toggleLineButtons: PropTypes.func.isRequired,
	onPreview: PropTypes.func.isRequired,
	onSelectMode: PropTypes.func.isRequired,
	onSelectRole: PropTypes.func.isRequired,
	triggerUpdate: PropTypes.func.isRequired,
	updateDownloading: PropTypes.func.isRequired,
	updateDownloadPercent: PropTypes.number,
	updateInfo: PropTypes.object,
	updateStatus: PropTypes.string,
	role: PropTypes.string.isRequired
};


// EXPORTS //

export default memo( Header );
