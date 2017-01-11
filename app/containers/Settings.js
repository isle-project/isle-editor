// MODULES //

import React, { Component } from 'react';
import NumberInput from 'components/input/number';
import { Panel } from 'react-bootstrap';
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
					marginLeft: '20px',
					marginTop: '20px',
					marginRight: '20px'
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
				<br />
				<br />
				<Panel header={<h1>Settings</h1>}>
					<NumberInput
						description="Editor text height in pixels"
						legend="Font Size"
						onChange={handleFontSizeChange}
						min={8}
						max={56}
						step={1}
						defaultValue={localStorage.getItem( 'fontSize' ) || 14}
					/>
				</Panel>
			</div>
		);
	}
}


// EXPORTS //

export default Settings;
