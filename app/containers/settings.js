// MODULES //

import React, { Component, Fragment } from 'react';
import NumberInput from 'components/input/number';
import Card from 'react-bootstrap/lib/Card';
import HeaderUpperBar from 'editor-components/header-upper-bar';
import SettingsLogin from 'editor-components/settings-login';


// FUNCTIONS //

const handleFontSizeChange = ( number ) => {
	localStorage.setItem( 'fontSize', number );
	return number;
};


// MAIN //

class Settings extends Component {
	render() {
		return (
			<Fragment>
				<HeaderUpperBar backToEditor title="Settings" />
				<div style={{
					marginLeft: '20px',
					marginTop: '20px',
					marginRight: '20px'
				}}>
					<SettingsLogin />
					<Card>
						<Card.Header as="h5">
							Settings
						</Card.Header>
						<Card.Body>
							<NumberInput
								description="Editor text height in pixels"
								legend="Font Size"
								onChange={handleFontSizeChange}
								min={8}
								max={56}
								step={1}
								defaultValue={parseInt( localStorage.getItem( 'fontSize' ), 10 ) || 14}
							/>
						</Card.Body>
					</Card>
				</div>
			</Fragment>
		);
	}
}


// EXPORTS //

export default Settings;
