// MODULES //

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as colors from 'constants/colors';


// HEADER //

class Header extends Component {
	render() {
		return (
			<div>
				<div
					style={{
						color: 'white',
						backgroundColor: colors.GRAY,
						height: '48px',
						minHeight: '48px',
						display: 'flex',
						alignItems: 'center',
						padding: '5px',
						justifyContent: 'space-between'
					}}
				>
					<h3>ISLE Editor</h3>
					<div>
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
					</div>
				</div>
				<div
					style={{
						backgroundColor: colors.LIGHT_GRAY,
						height: '40px',
						minHeight: '40px',
						color: colors.GRAY,
						display: 'flex',
						alignItems: 'center',
						padding: '5px',
						justifyContent: 'space-between'
					}}
				>
					<span>{this.props.fileName || 'Untitled Document'}</span>
					<span>Preview</span>
				</div>
			</div>
		);
	}
}

// EXPORTS //

export default Header;
