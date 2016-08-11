// MODULES //

import React from 'react';
import { Link } from 'react-router';
import { Toolbar, Space, Heading, NavItem } from 'rebass';
import * as colors from '../constants/colors';


// HEADER //

/**
* Returns stateless header component.
*
* @param {string} fileName - name of the file
* @returns {ReactElement}
*/
const Header = ({ fileName }) => (
	<div>
		<Toolbar
			style={{
				backgroundColor: colors.GRAY
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
			<span>{fileName || 'Untitled Document'}</span>
			<Space auto /><Space />
			<span>Preview</span>
			<Space />
		</Toolbar>
	</div>
); // end FUNCTION header()


// EXPORTS //

export default Header;
