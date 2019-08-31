// MODULES //

import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { changeRenderInterval, changeFontSize, changePreambleTemplate } from 'actions';
import NumberInput from 'components/input/number';
import FormControl from 'react-bootstrap/FormControl';
import FormLabel from 'react-bootstrap/FormLabel';
import FormGroup from 'react-bootstrap/FormGroup';
import Card from 'react-bootstrap/Card';
import HeaderUpperBar from 'editor-components/header-upper-bar';
import SettingsLogin from 'editor-components/settings-login';
import './settings.css';


// MAIN //

class Settings extends Component {
	handleFontSizeChange = ( number ) => {
		this.props.changeFontSize( number );
	}

	handleRenderIntervalChange = ( number ) => {
		this.props.changeRenderInterval( number * 1000 );
	}

	handlePreambleTemplateChange = ( event ) => {
		this.props.changePreambleTemplate( event.target.value );
	}

	render() {
		return (
			<Fragment>
				<HeaderUpperBar backToEditor title="Settings" />
				<div className="settings-wrapper">
					<SettingsLogin />
					<Card className="settings-card" >
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
							<FormGroup className="settings-preamble-form-group">
								<Card.Subtitle className="mb-2" ><FormLabel>Preamble Template:</FormLabel></Card.Subtitle>
								<FormControl
									as="textarea"
									onChange={this.handlePreambleTemplateChange}
									rows={7}
									defaultValue={this.props.preambleTemplate}
								/>
							</FormGroup>
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
	changePreambleTemplate,
	changeRenderInterval
})( Settings );

function mapStateToProps({ markdown, preview }) {
	return {
		...markdown,
		...preview
	};
}
