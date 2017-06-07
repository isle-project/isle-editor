// MODULES //

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Toolbar, Space, Heading } from 'rebass';
import * as colors from 'constants/colors';


// HEADER //

class Header extends Component {
	render() {
		return (
			<div>
				<Toolbar
					style={{
						backgroundColor: colors.GRAY,
						height: '48px',
						minHeight: '48px',
					}}
				>
					<Heading level={3}>ISLE Editor</Heading>
					<Space auto />
					<Link
						to="/export"
						style={{
							color: 'silver',
							fontSize: '18px',
							marginRight: '10px'
						}}
					>Export</Link>
					<Link
						to="/settings"
						style={{
							color: 'silver',
							fontSize: '18px',
							marginRight: '10px'
						}}
					>Settings</Link>
					<Link
						to="/docs"
						style={{
							color: 'silver',
							fontSize: '18px'
						}}
					>Documentation</Link>
					<Space />
				</Toolbar>
				<Toolbar
					style={{
						backgroundColor: colors.LIGHT_GRAY,
						height: '40px',
						minHeight: '40px',
						color: colors.GRAY
					}}
				>
					<span>{this.props.fileName || 'Untitled Document'}</span>
					<Space auto /><Space />
					<span>Preview</span>
					<Space />
				</Toolbar>
			</div>
		);
	}
}

// EXPORTS //

export default Header;
