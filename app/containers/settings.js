// MODULES //

import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { changeRenderInterval, changeFontSize } from 'actions';
import NumberInput from 'components/input/number';
import Card from 'react-bootstrap/Card';
import HeaderUpperBar from 'editor-components/header-upper-bar';
import SettingsLogin from 'editor-components/settings-login';


// MAIN //

class Settings extends Component {
	handleFontSizeChange = ( number ) => {
		this.props.changeFontSize( number );
	}

	handleRenderIntervalChange = ( number ) => {
		this.props.changeRenderInterval( number * 1000 );
	}

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
								onChange={this.handleFontSizeChange}
								min={8}
								max={56}
								step={1}
								defaultValue={this.props.fontSize}
							/>
							<NumberInput
								description="Interval between preview renders"
								legend="Rendering interval (in seconds)"
								onChange={this.handleRenderIntervalChange}
								min={1}
								max={100}
								step={1}
								defaultValue={parseInt( this.props.renderInterval / 1000, 10 )}
							/>
						</Card.Body>
					</Card>
				</div>
			</Fragment>
		);
	}
}


// EXPORTS //

export default connect( mapStateToProps, {
	changeFontSize,
	changeRenderInterval
})( Settings );

function mapStateToProps({ markdown, preview }) {
	return {
		...markdown,
		...preview
	};
}
