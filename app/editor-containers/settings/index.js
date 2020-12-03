// MODULES //

import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { changeRenderInterval, changeFontSize, changePreambleTemplate, updateDownloading } from 'actions';
import NumberInput from '@isle-project/components/input/number';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
				<HeaderUpperBar
					backToEditor
					title="Settings"
					updateStatus={this.props.updateStatus}
					updateInfo={this.props.updateInfo}
					updateDownloading={this.props.updateDownloading}
					updateDownloadPercent={this.props.updateDownloadPercent}
				/>
				<div className="settings-wrapper">
					<SettingsLogin />
					<Card className="settings-card" >
						<Card.Header as="h5">
							Settings
						</Card.Header>
						<Card.Body>
							<Container><Row>
								<Col md={5}>
									<NumberInput
										description="Editor text height in number of pixels "
										legend="Font Size"
										onChange={this.handleFontSizeChange}
										min={8}
										max={56}
										step={1}
										defaultValue={this.props.fontSize}
									/>
									<NumberInput
										description="Interval between renders (in seconds)"
										legend="Rendering interval"
										onChange={this.handleRenderIntervalChange}
										min={1}
										max={100}
										step={1}
										defaultValue={parseInt( this.props.renderInterval / 1000, 10 )}
									/>
								</Col>
								<Col md={7}>
									<FormGroup className="settings-preamble-form-group">
										<Card.Subtitle className="mb-2" ><FormLabel>Preamble Template:</FormLabel></Card.Subtitle>
										<FormControl
											as="textarea"
											onChange={this.handlePreambleTemplateChange}
											rows={7}
											defaultValue={this.props.preambleTemplate}
										/>
									</FormGroup>
								</Col>
							</Row></Container>
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
	changeRenderInterval,
	updateDownloading
})( Settings );

function mapStateToProps({ editor, preview, updater }) {
	return {
		...editor,
		...preview,
		...updater
	};
}
