// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tooltip from 'react-bootstrap/Tooltip';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import DropdownItem from 'react-bootstrap/DropdownItem';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import HeaderUpperBar from 'editor-components/header-upper-bar';
import CheckboxInput from 'components/input/checkbox';
import KeyControls from 'components/key-controls';
import './header.css';

// FUNCTIONS //

function stopPropagation( event ) {
	event.stopPropagation();
}


// MAIN //

class Header extends Component {
	constructor( props ) {
		super( props );
	}

	handleModeSelection = ( eventKey ) => {
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
		this.props.onSelectMode( newMode );
	}

	handleRoleSelection = ( eventKey ) => {
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
		this.props.onSelectRole( newRole );
	}

	render() {
		/* eslint-disable jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */
		return (
			<div>
				<HeaderUpperBar
					updateStatus={this.props.updateStatus}
					updateInfo={this.props.updateInfo}
					updateDownloading={this.props.updateDownloading}
					updateDownloadPercent={this.props.updateDownloadPercent}
				/>
				<div
					id="header-lower-bar"
					className="unselectable"
				>
					<span style={{ paddingLeft: 5 }} >
						<OverlayTrigger
							placement="right"
							overlay={({ outOfBoundaries, scheduleUpdate, show, arrowProps, ...props }) => ( <div
								{...props}
								style={{
									backgroundColor: 'rgba(50, 50, 50, 0.85)',
									padding: '2px 10px',
									color: 'white',
									borderRadius: 3,
									...props.style
								}}
							>
								{this.props.filePath || 'Please save file...'}
							</div> )}
						>
							<span style={{ paddingRight: 5 }}>{this.props.fileName || 'Untitled Document'}</span>
						</OverlayTrigger>
						{this.props.unsaved ? <i style={{ paddingLeft: 5, color: '#6c757d' }} className="fas fa-circle"></i> : null}
					</span>
					<ButtonGroup className="unselectable" style={{ zIndex: 100 }} size="sm" >
						<CheckboxInput
							value={this.props.showLineButtons}
							onChange={this.props.toggleLineButtons}
							legend="Show line buttons"
							inline
							style={{ marginTop: 3, marginRight: 5 }}
						/>
						<CheckboxInput
							value={this.props.autoUpdatePreview}
							onChange={this.props.changeAutoUpdate}
							legend="Automatically update preview"
							inline
							style={{ marginTop: 3, marginRight: 5 }}
						/>
						<OverlayTrigger placement="top" overlay={<Tooltip id="trigger-update">Trigger update (F5)</Tooltip>}>
							<Button
								onClick={this.props.triggerUpdate}
								style={{
									display: this.props.autoUpdatePreview ? 'none' : 'inline'
								}}
								variant="outline-secondary"
							><i className="fas fa-sync"></i></Button>
						</OverlayTrigger>
						<OverlayTrigger placement="top" overlay={<Tooltip id="user-role-online">Switch between offline and online mode</Tooltip>}>
							<div onClick={stopPropagation} >
								<DropdownButton
									title={this.props.mode}
									id="bg-mode-dropdown"
									size="sm"
									variant="warning"
									onSelect={this.handleModeSelection}
									style={{ marginLeft: 25 }}
								>
									<DropdownItem eventKey="1">offline</DropdownItem>
									<DropdownItem eventKey="2">online</DropdownItem>
								</DropdownButton>
							</div>
						</OverlayTrigger>
						<OverlayTrigger placement="top" overlay={<Tooltip id="user-role-dropdown">Preview lesson as user with selected role</Tooltip>}>
							<div onClick={stopPropagation} >
								<DropdownButton
									title={this.props.role}
									id="bg-user-dropdown"
									size="sm"
									variant="success"
									onSelect={this.handleRoleSelection}
								>
									<DropdownItem eventKey="1">anonymous</DropdownItem>
									<DropdownItem eventKey="2">user</DropdownItem>
									<DropdownItem eventKey="3">enrolled</DropdownItem>
									<DropdownItem eventKey="4">owner</DropdownItem>
								</DropdownButton>
							</div>
						</OverlayTrigger>
						<OverlayTrigger placement="bottom" overlay={<Tooltip id="preview-tooltip">Click to toggle fullscreen preview of lesson</Tooltip>}>
							<Button variant="secondary" onClick={this.props.onPreview} style={{
								paddingTop: 4,
								marginLeft: 25
							}}>Preview</Button>
						</OverlayTrigger>
					</ButtonGroup>
				</div>
				<KeyControls
					actions={{
						'F5': () => {
							this.props.triggerUpdate();
						}
					}}
				/>
			</div>
		);
		/* eslint-enable jsx-a11y/no-static-element-interactions */
	}
}


// PROPERTIES //

Header.defaultProps = {
	fileName: '',
	filePath: 'Please save file...',
	updateDownloadPercent: null,
	updateInfo: null,
	updateStatus: null
};

Header.propTypes = {
	filePath: PropTypes.string,
	fileName: PropTypes.string,
	unsaved: PropTypes.bool.isRequired,
	mode: PropTypes.string.isRequired,
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

export default Header;
