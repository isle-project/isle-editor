// MODULES //

import React from 'react';
import { Link } from 'react-router-dom';
import './header_upper_bar.css';


// MAIN //

const HeaderUpperBar = ( props ) => {
	return ( <div
		id="header-upper-bar"
		className="unselectable"
	>
		<h3>ISLE {props.title ? props.title : 'Editor'}</h3>
		<div>
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


// EXPORTS //

export default HeaderUpperBar;
