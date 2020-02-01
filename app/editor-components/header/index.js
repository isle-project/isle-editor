// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import DropdownItem from 'react-bootstrap/DropdownItem';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import HeaderUpperBar from 'editor-components/header-upper-bar';
import './header.css';


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
		return (
			<div>
				<HeaderUpperBar />
				<div
					id="header-lower-bar"
					className="unselectable"
				>
					<span style={{ paddingLeft: 5 }} >
						<OverlayTrigger
							placement="right"
							overlay={<div
								style={{
									backgroundColor: 'rgba(50, 50, 50, 0.85)',
									padding: '2px 10px',
									color: 'white',
									borderRadius: 3
								}}
							>
								{this.props.filePath || 'Please save file...'}
							</div>}
						>
							<span style={{ paddingRight: 5 }}>{this.props.fileName || 'Untitled Document'}</span>
						</OverlayTrigger>
						{this.props.unsaved ? <i style={{ paddingLeft: 5, color: '#6c757d' }} className="fas fa-circle"></i> : null}
					</span>
					<ButtonGroup className="unselectable" style={{ zIndex: 1001 }} size="sm" >
						<DropdownButton
							title={this.props.mode}
							id="bg-mode-dropdown"
							size="sm"
							variant="warning"
							onSelect={this.handleModeSelection}
						>
							<DropdownItem eventKey="1">offline</DropdownItem>
							<DropdownItem eventKey="2">online</DropdownItem>
						</DropdownButton>
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
						<span style={{
							paddingTop: 4,
							paddingLeft: 25,
							paddingRight: 5
						}}>Preview</span>
					</ButtonGroup>
				</div>
			</div>
		);
	}
}


// PROPERTIES //

Header.defaultProps = {
	fileName: '',
	filePath: 'Please save file...'
};

Header.propTypes = {
	fileName: PropTypes.string,
	filePath: PropTypes.string,
	unsaved: PropTypes.bool.isRequired,
	mode: PropTypes.string.isRequired,
	onSelectMode: PropTypes.func.isRequired,
	onSelectRole: PropTypes.func.isRequired,
	role: PropTypes.string.isRequired
};


// EXPORTS //

export default Header;
