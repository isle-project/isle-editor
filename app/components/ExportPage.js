// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonToolbar, Col, ControlLabel, Form, FormControl,
	FormGroup, Grid, Modal, Panel, Row, Well } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { remote, shell } from 'electron';
import path from 'path';
import FormData from 'form-data';
import http from 'http';
import request from 'request';
import tmpdir from '@stdlib/utils/tmpdir';
import archiver from 'archiver';
import fs from 'fs';
import bundler from 'bundler';
import CheckboxInput from 'components/input/checkbox';
import Spinner from 'components/spinner';
const debug = require( 'debug' )( 'isle-editor' );


// VARIABLES //

const { dialog } = remote;

class UploadLesson extends Component {

	constructor( props ) {
		super( props );

		const lessonName = props.fileName ? props.fileName.replace( /.[^.]*$/, '' ) : '';

		// Initialize state variables...
		this.state = {
			preamble: {},
			finished: false,
			spinning: false,
			namespaces: [],
			namespaceName: null,
			lessonName,
			dirname: new Date().toISOString(),
			server: localStorage.getItem( 'server' ),
			token: localStorage.getItem( 'token' ),
			showResponseModal: false,
			showConfirmModal: false
		};

		this.handleInputChange = ( event ) => {
			const target = event.target;
			const value = target.value;
			const name = target.name;
			this.setState({
				[ name ]: value
			});
		};

		this.handleSelectChange = ( event ) => {
			debug( 'Change the selected namespace...' );
			const target = event.target;
			const value = target.value;
			debug( 'The selected namespace is: ' + value );
			this.setState({
				namespaceName: value
			});
		};

		this.closeResponseModal = () => {
			this.setState({
				showResponseModal: false
			});
		};

		this.closeConfirmModal = () => {
			this.setState({
				showConfirmModal: false
			});
		};

		this.zipLesson = ( outputPath, outputDir, clbk ) => {
			let output = fs.createWriteStream( path.join( outputPath, outputDir+'.zip' ) );
			let archive = archiver( 'zip', {
				store: true
			});
			output.on( 'close', function() {
				console.log( archive.pointer() + ' total bytes' );
				console.log( 'archiver has been finalized and the output file descriptor has closed.' );
				clbk();
			});
			archive.on( 'error', function( err ) {
				throw err;
			});
			archive.pipe( output );
			archive.directory( path.join( outputPath, outputDir ), '/' );
			archive.finalize();
		};

		this.upstreamData = ({ outputPath, outputDir }) => {
			let { lessonName, namespaceName } = this.state;

			console.log( 'Sending POST request to create lesson...' );
			const form = new FormData();
			form.append( 'namespaceName', namespaceName );
			form.append( 'lessonName', lessonName );
			form.append( 'zipped', fs.createReadStream( path.join( outputPath, outputDir+'.zip' ) ) );

			const headers = form.getHeaders();
			headers[ 'Authorization' ] = 'JWT ' + this.state.token;

			const host = this.state.server.replace( /^https?\:\/\//i, '' );
			var request = http.request({
				method: 'post',
				host: host,
				path: '/create_lesson',
				headers: headers
			});
			form.pipe( request );

			request.on( 'response', ( res ) => {
				if ( res.statusCode === 200 ) {
					let lessonLink = this.state.server + '/' + namespaceName + '/' + lessonName;
					let msg = <span>
						The lesson has been uploaded successfully and can be accessed at the following address: <a href={lessonLink}>{lessonLink}</a>
					</span>;
					this.setState({
						spinning: false,
						showResponseModal: true,
						modalMessage: msg
					});
				}
			});

			request.on( 'error', ( err ) => {
				console.log( 'Encountered error: ' + err.message );
			});

		};

		this.checkLesson = () => {
			const qs = {
				namespace: this.state.namespaceName,
				lessonName: this.state.lessonName
			};
			console.log( qs );
			request.get( this.state.server + '/get_lesson', {
				qs: qs
			}, ( err, res, body ) => {
				if ( err ) {
					return err;
				}
				body = JSON.parse( body );
				if ( body.lesson ) {
					this.setState({
						showConfirmModal: true
					});
				} else {
					this.publishLesson();
				}
			});
		};

		this.publishLesson = () => {
			const isPackaged = !( /node_modules\/electron\/dist/.test( process.resourcesPath ) );
			const basePath = isPackaged ? `${process.resourcesPath}/app/` : './';

			this.setState({
				spinning: true
			});
			const settings = {
				outputPath: tmpdir(),
				filePath: this.props.filePath,
				basePath,
				content: this.props.content,
				outputDir: this.state.dirname,
				minify: true
			};
			bundler( settings, ( err, preamble ) => {
				this.zipLesson( settings.outputPath, settings.outputDir, () => {
					this.upstreamData( settings );
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
					namespaces: body.namespaces,
					namespaceName: body.namespaces[ 0 ].title
				});
			});
		}
	}

	render() {
		return (
			<div>
				<Panel header={<h1>Upload Lesson</h1>} bsStyle="primary">
					<p>Upload and deploy lessons directly to ISLE server.</p>
					{ this.state.token ?
						<div>
							<Form>
								<FormGroup>
									<ControlLabel>Select Course</ControlLabel>
									<FormControl
										name="namespaceName"
										onChange={this.handleSelectChange}
										componentClass="select"
										placeholder="No courses found"
									>
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
									bsStyle="success"
									bsSize="sm"
									block
									onClick={this.checkLesson}
									disabled={this.state.spinning || !this.state.token || !this.state.lessonName}
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
				<Modal show={this.state.showResponseModal} onHide={this.closeResponseModal}>
					<Modal.Header closeButton>
						<Modal.Title>Server Response</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						{this.state.modalMessage}
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={this.closeResponseModal}>Close</Button>
					</Modal.Footer>
				</Modal>
				<Modal show={this.state.showConfirmModal}>
					<Modal.Header>
						<Modal.Title>Overwrite Lesson?</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						A lesson with the name {this.state.lessonName} is already present in the namespace. Please confirm that you wish to overwrite the lesson or cancel the upload procedure and choose a different name.
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={this.closeConfirmModal}>Cancel</Button>
						<Button bsStyle="warning" onClick={() => {
							this.publishLesson();
							this.setState({
								showConfirmModal: false
							});
						}}>Overwrite</Button>
					</Modal.Footer>
				</Modal>
			</div>
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
				<FormGroup>
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
						bsStyle="success"
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
							<Button style={{ float: 'left' }} bsStyle="primary" onClick={this.openFolder}>Open containing folder</Button>
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
