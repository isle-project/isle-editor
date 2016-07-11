// MODULES //

import React, { Component } from 'react';
import NumberField from 'react-number-field';
import { Link } from 'react-router';


// FUNCTIONS //

const handleFontSizeChange = ( number ) => {
	localStorage.setItem( 'fontSize', number );
	return number;
};


// SETTINGS //

class Settings extends Component {

	render() {
		return (
			<div
				style={{
					marginLeft: '20px'
				}}
			>
				<Link
					to="/"
					style={{
						float: 'right',
						color: 'silver',
						position: 'absolute',
						top: '12px',
						right: '12px',
						fontSize: '26px',
						zIndex: 2
					}}
				>Back to Editor</Link>
				<h1>Settings</h1>
				<h3>Font Size:</h3>
				<p>Editor text height in pixels</p>
				<NumberField
					onChange={handleFontSizeChange}
					min={8}
					max={56}
					step={1}
					defaultValue={localStorage.getItem( 'fontSize' ) || 14}
				/>
			</div>
		);
	}
}


// EXPORTS //

export default Settings;
