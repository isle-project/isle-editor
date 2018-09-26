// MODULES //

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import DropdownItem from 'react-bootstrap/lib/DropdownItem';
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
				<div
					id="header-upper-bar"
					className="unselectable"
				>
					<h3>ISLE Editor</h3>
					<div>
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
				</div>
				<div
					id="header-lower-bar"
					className="unselectable"
				>
					<span style={{ paddingLeft: 5 }} >{this.props.fileName || 'Untitled Document'}</span>
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

// TYPES //

Header.defaultProps = {
	fileName: ''
};

Header.propTypes = {
	fileName: PropTypes.string,
	mode: PropTypes.string.isRequired,
	onSelectMode: PropTypes.func.isRequired,
	onSelectRole: PropTypes.func.isRequired,
	role: PropTypes.string.isRequired
};


// EXPORTS //

export default Header;
