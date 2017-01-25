// MODULES //

import React, { Component, PropTypes } from 'react';
import { Button, ButtonToolbar, Col, ControlLabel, FormControl,
	FormGroup, Grid, Panel, Row, Well } from 'react-bootstrap';
import { Link } from 'react-router';
import { remote, shell } from 'electron';
import path from 'path';
import bundler from 'bundler';
import CheckboxInput from 'components/input/checkbox';
import Spinner from 'components/spinner';


// VARIABLES //

const { dialog } = remote;


// EXPORT LESSON //

class ExportPage extends Component {
	constructor( props ) {
		super( props );
		let outputDir = props.fileName ? props.fileName.replace( /.[^.]*$/, '' ) : '';

		// Initialize state variables...
		this.state = {
			dirPath: '',
			outputDir,
			preamble: {},
			finished: false,
			spinning: false,
			minify: false
		};

		this.openFolder = () => {
			const fullPath = path.join( this.state.dirPath, this.state.outputDir, 'index.html' );
			shell.showItemInFolder( fullPath );
		};

		this.openLesson = () => {
			const fullPath = path.join( this.state.dirPath, this.state.outputDir, 'index.html' );
			shell.openItem( fullPath );
		};

		this.handleFileInputClick = () => {
			const dirPath = dialog.showOpenDialog({
				properties: [ 'openDirectory' ]
			})[ 0 ];
			this.setState({ dirPath });
		};

		this.handleServerChange = () => {

		};

		this.generateApp = () => {

			this.setState({
				finished: false,
				spinning: true
			});

			const isPackaged = !( /node_modules\/electron\/dist/.test( process.resourcesPath ) );
			const basePath = isPackaged ? `${process.resourcesPath}/app/` : './';
			const { dirPath, outputDir, minify } = this.state;

			bundler({
				outputPath: dirPath,
				filePath: this.props.filePath,
				basePath,
				content: this.props.content,
				outputDir,
				minify
			}, ( err, preamble ) => {
				this.setState({
					preamble: preamble,
					finished: true,
					spinning: false
				});
			});
		};
	}

	render() {
		return (
			<div
				style={{
					marginLeft: '20px',
					marginRight: '20px',
					marginTop: '20px'
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
				<Grid>
					<Row>
						<Col md={4} >
							<Panel header={<h1>Upload Lesson</h1>} bsStyle="primary">
								<p>Upload and deploy ISLE lessons directly to an ISLE server.</p>
								<FormGroup
									controlId="formBasicText"
								>
									<ControlLabel>Server Address</ControlLabel>
									<FormControl
										type="text"
										placeholder="Enter text"
										onChange={this.handleServerChange}
										defaultValue={localStorage.getItem( 'server' ) || ''}
									/>
								</FormGroup>
								<FormGroup
									controlId="formBasicText"
								>
									<ControlLabel>User</ControlLabel>
									<FormControl
										type="text"
										placeholder="Enter user name"
										onChange={this.handleServerChange}
										defaultValue={localStorage.getItem( 'server' ) || ''}
									/>
								</FormGroup>
								<FormGroup
									controlId="formBasicText"
								>
									<ControlLabel>Password</ControlLabel>
									<FormControl
										type="text"
										placeholder="Enter password"
										onChange={this.handleServerChange}
										defaultValue={localStorage.getItem( 'server' ) || ''}
									/>
								</FormGroup>
								<Button
									bsStyle="info"
									bsSize="sm"
									block
									style={{
										marginTop: '15px'
									}}
									> Upload </Button>
							</Panel>
						</Col>
						<Col md={2} >
							<h1 style={{ textAlign: 'center' }}> OR </h1>
						</Col>
						<Col md={6} >
							<Panel header={<h1>Export Lesson</h1>} bsStyle="primary">
								<p>Package and export the currently opened lesson into a
								single-page application viewable in any web-browser.</p>
								<FormGroup
									controlId="formBasicText"
								>
									<ControlLabel>Settings</ControlLabel>
									<CheckboxInput
										legend="Minify code"
										onChange={ ( value ) => {
											this.setState({
												minify: value
											});
										}}
									/>
								</FormGroup>
								<FormGroup
									controlId="formBasicText"
								>
									<ControlLabel>Directory name</ControlLabel>
									<FormControl
										type="text"
										placeholder="Enter text"
										defaultValue={this.state.outputDir}
										onChange={ ( event ) => {
											this.setState({
												outputDir: event.target.value
											});
										}}
									/>
								</FormGroup>
								<br />
								<Button
									bsStyle="primary"
									onClick={this.handleFileInputClick}
								>Select output path</Button>
								<Well
									style={{
										marginLeft: '8px',
										height: '34px',
										paddingTop: '6px',
										color: 'darkred'
									}}
								> Path: {this.state.dirPath} </Well>
								{this.state.dirPath ?
									<Button
										bsStyle="info"
										bsSize="sm"
										onClick={this.generateApp}
										block
										style={{
											marginTop: '15px'
										}}
									> Generate lesson </Button> :
									<span />
								}
							</Panel>
						</Col>
					</Row>
					<Row>
						<div
							style={{
								position: 'relative',
								margin: 'auto',
								height: 500,
								width: '40%'
							}}
						>
							{this.state.finished ?
								<Panel
									header={<h3>App successfully exported!</h3>}
									bsStyle="success"
								>
									<ButtonToolbar style={{ position: 'relative', margin: 'auto' }} >
										<Button style={{ float: 'left' }} bsStyle="info" onClick={this.openFolder}>Open containing folder</Button>
										<Button style={{ float: 'right' }} bsStyle="success" onClick={this.openLesson}>Open lesson in Browser</Button>
									</ButtonToolbar>
								</Panel> : <Spinner width={256} height={128} running={this.state.spinning}/>
							}
						</div>
					</Row>
				</Grid>
			</div>
		);
	}
}


// PROPERTY TYPES //

ExportPage.propTypes = {
	content: PropTypes.string,
	fileName: PropTypes.string
};


// EXPORTS //

export default ExportPage;
