// MODULES //

import React from 'react';
import { Toolbar, Space, Heading, NavItem } from 'rebass';
import Icon from 'react-geomicons';
import * as colors from '../constants/colors';


// HEADER //

const Header = ({ fileName }) => (
	<div>
		<Toolbar
			style={{
				backgroundColor: colors.GRAY
			}}
		>
			<Heading level={3}>ISLE Editor</Heading>
			<Space auto />
			<NavItem onClick={() => window.alert('More options will be available soon!')}>
				<Icon
					height="1.5em"
					name="cog"
					width="1.5em"
				/>
			</NavItem>
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
);


// EXPORTS //

export default Header;
