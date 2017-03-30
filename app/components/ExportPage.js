// MODULES //

import React, { Component, PropTypes } from 'react';
import { Button, ButtonToolbar, Col, ControlLabel, Form, FormControl,
	FormGroup, Grid, Panel, Row, Well } from 'react-bootstrap';
import { Link } from 'react-router';
import { remote, shell } from 'electron';
import path from 'path';
import request from 'request';
import tmpdir from '@stdlib/utils/tmpdir';
import bundler from 'bundler';
import CheckboxInput from 'components/input/checkbox';
import Spinner from 'components/spinner';


// VARIABLES //

const { dialog } = remote;

class UploadLesson extends Component {

	constructor( props ) {
		super( props );

		// Initialize state variables...
		this.state = {
			preamble: {},
			finished: false,
			spinning: false,
			namespaces: [],
			lessonName: '',
			dirname: new Date().toISOString(),
			server: localStorage.getItem( 'server' ),
			token: localStorage.getItem( 'token' )
		};

		this.handleInputChange = ( event ) => {
			const target = event.target;
			const value = target.value;
			const name = target.name;
			this.setState({
				[ name ]: value
			});
		};

		this.publishLesson = () => {
			const isPackaged = !( /node_modules\/electron\/dist/.test( process.resourcesPath ) );
			const basePath = isPackaged ? `${process.resourcesPath}/app/` : './';

			this.setState({
				spinning: true
			});
			bundler({
				outputPath: tmpdir(),
				filePath: this.props.filePath,
				basePath,
				content: this.props.content,
				outputDir: this.state.dirname,
				minify: true
			}, ( err, preamble ) => {
				this.setState({
					preamble: preamble,
					spinning: false
				});
			});
		};
	}

	componentDidMount() {
		if ( this.state.token ) {
			request.get( this.state.server+'/get_namespaces', {
				headers: {
					'Authorization': 'JWT ' + this.state.token
				}
			}, ( error, response, body ) => {
				if ( error ) {
					return error;
				}
				body = JSON.parse( body );
				this.setState({
					namespaces: body.namespaces
				});
			});
		}
	}

	render() {
		return (
			<Panel header={<h1>Upload Lesson</h1>} bsStyle="primary">
				<p>Upload and deploy ISLE lessons directly to an ISLE server.</p>
				{ this.state.token ?
					<div>
						<Form>
							<FormGroup>
								<ControlLabel>Select Course</ControlLabel>
								<FormControl componentClass="select" placeholder="select">
									{this.state.namespaces.map( ( ns, id ) =>
										<option key={id} value={ns.title}>{ns.title}</option>
									)}
								</FormControl>
							</FormGroup>
							<FormGroup>
								<ControlLabel>Lesson name</ControlLabel>
								<FormControl
									name="lessonName"
									type="text"
									placeholder="Enter lesson name"
									onChange={this.handleInputChange}
									value={this.state.lessonName}
								/>
							</FormGroup>
							<Button
								bsStyle="info"
								bsSize="sm"
								block
								onClick={this.publishLesson}
								disabled={this.state.spinning || !this.state.token}
							>Upload</Button>
						</Form>
						<br />
						<Spinner width={128} height={64} running={this.state.spinning}/>
					</div>:
					<Panel bsStyle="warning">
						You need to connect the ISLE editor to an ISLE server under settings before you can upload lessons.
					</Panel>
				}
			</Panel>
		);
	}
}

class ExportLesson extends Component {
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

		this.handleInputChange = ( event ) => {
			const target = event.target;
			const value = target.value;
			const name = target.name;

			localStorage.setItem( name, value );
			this.setState({
				[ name ]: value
			});
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
				<FormGroup>
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
						disabled={this.state.spinning}
					> Generate lesson </Button> :
					<span />
				}
				<br />
				{this.state.finished ?
					<Panel
						header={<h3>App successfully exported!</h3>}
						bsStyle="success"
					>
						<ButtonToolbar style={{ position: 'relative', margin: 'auto' }} >
							<Button style={{ float: 'left' }} bsStyle="info" onClick={this.openFolder}>Open containing folder</Button>
							<Button style={{ float: 'right' }} bsStyle="success" onClick={this.openLesson}>Open lesson in Browser</Button>
						</ButtonToolbar>
					</Panel> : <Spinner width={128} height={64} running={this.state.spinning}/>
				}
			</Panel>
		);
	}
}


// MAIN //

class ExportPage extends Component {
	constructor( props ) {
		super( props );
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
							<UploadLesson {...this.props} />
						</Col>
						<Col md={2} >
							<h1 style={{ textAlign: 'center' }}> OR </h1>
						</Col>
						<Col md={6} >
							<ExportLesson {...this.props} />
						</Col>
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
