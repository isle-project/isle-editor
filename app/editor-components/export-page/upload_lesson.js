// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/lib/Button';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Form from 'react-bootstrap/lib/Form';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Modal from 'react-bootstrap/lib/Modal';
import Panel from 'react-bootstrap/lib/Panel';
import FormData from 'form-data';
import https from 'https';
import http from 'http';
import archiver from 'archiver';
import randomstring from 'randomstring';
import { join } from 'path';
import { createReadStream, createWriteStream } from 'fs';
import os from 'os';
import qs from 'querystring';
import logger from 'debug';
import contains from '@stdlib/assert/contains';
import replace from '@stdlib/string/replace';
import endsWith from '@stdlib/string/ends-with';
import removeLast from '@stdlib/string/remove-last';
import bundler from 'bundler';
import CheckboxInput from 'components/input/checkbox';
import Spinner from 'components/spinner';


// VARIABLES //

const ELECTRON_REGEXP = /node_modules[\\/]electron[\\/]dist/;
const IS_PACKAGED = !( ELECTRON_REGEXP.test( process.resourcesPath ) );
const debug = logger( 'isle-editor:export-page' );


// MAIN //

class UploadLesson extends Component {
	constructor( props ) {
		super( props );

		const lessonName = props.fileName ? replace( props.fileName, /.[^.]*$/, '' ) : '';

		// Initialize state variables...
		this.state = {
			error: null,
			spinning: false,
			namespaces: [],
			minify: true,
			lessonName,
			dirname: randomstring.generate(),
			server: localStorage.getItem( 'server' ),
			token: localStorage.getItem( 'token' ),
			showResponseModal: false,
			showConfirmModal: false
		};
	}

	componentDidMount() {
		if ( this.state.token ) {
			fetch( this.state.server+'/get_namespaces', {
				headers: {
					'Authorization': 'JWT ' + this.state.token
				}
			})
			.then( res => res.json() )
			.then( body => {
				this.setState({
					namespaces: body.namespaces
				});
			})
			.catch( error => {
				return this.setState({
					error
				});
			});
		}
	}

	handleInputChange = ( event ) => {
		const target = event.target;
		const value = target.value;
		const name = target.name;
		this.setState({
			[ name ]: value
		});
	}

	handleSelectChange = ( event ) => {
		debug( 'Change the selected namespace...' );
		const target = event.target;
		const value = target.value;
		debug( 'The selected namespace is: ' + value );
		this.props.changeNamespace( value );
	}

	closeResponseModal = () => {
		this.setState({
			showResponseModal: false
		});
	}

	closeConfirmModal = () => {
		this.setState({
			showConfirmModal: false
		});
	}

	zipLesson = ( outputPath, outputDir, clbk ) => {
		let output = createWriteStream( join( outputPath, outputDir+'.zip' ) );
		let archive = archiver( 'zip', {
			store: true
		});
		output.on( 'close', function onClose() {
			debug( archive.pointer() + ' total bytes' );
			debug( 'archiver has been finalized and the output file descriptor has closed.' );
			clbk();
		});
		archive.on( 'error', function onError( error ) {
			return this.setState({
				error
			});
		});
		archive.pipe( output );
		archive.directory( join( outputPath, outputDir ), '/' );
		archive.finalize();
	};

	upstreamData = ({ outputPath, outputDir }) => {
		let { lessonName } = this.state;
		let { namespaceName } = this.props;

		debug( 'Sending POST request to create lesson...' );
		const form = new FormData();
		form.append( 'namespaceName', namespaceName );
		form.append( 'lessonName', lessonName );
		const zipPath = join( outputPath, outputDir+'.zip' );
		form.append( 'zipped', createReadStream( zipPath ) );

		const headers = form.getHeaders();
		headers[ 'Authorization' ] = 'JWT ' + this.state.token;

		const options = {
			method: 'post',
			path: '/create_lesson',
			headers: headers
		};
		let request;
		const re = /^https?:\/\/([^:]+):?([0-9]{0,5})/i;
		const matches = this.state.server.match( re );
		debug( 'Matches %s', matches );
		options.host = matches[ 1 ];
		if ( endsWith( options.host, '/' ) ) {
			options.host = removeLast( options.host );
		}
		if ( matches[ 2 ]) {
			options.port = matches[ 2 ];
		}
		if ( contains( this.state.server, 'https' ) ) {
			options.rejectUnauthorized = false;
			request = https.request( options );
		} else {
			request = http.request( options );
		}
		form.pipe( request );

		request.on( 'response', ( res ) => {
			if ( res.statusCode === 200 ) {
				let lessonLink = join( this.state.server, namespaceName, lessonName );
				let msg = <span>
					The lesson has been uploaded successfully and can be accessed at the following address: <a href={lessonLink}>{lessonLink}</a>
				</span>;
				this.setState({
					spinning: false,
					showResponseModal: true,
					modalMessage: msg,
					dirname: randomstring.generate()
				});
			}
		});
		request.on( 'error', ( error ) => {
			debug( 'Encountered error: ' + error.message );
			this.setState({ error });
		});
	}

	checkLesson = () => {
		const form = {
			namespaceName: this.props.namespaceName,
			lessonName: this.state.lessonName
		};
		const query = qs.stringify( form );
		debug( 'Querystring: '+query );
		fetch( this.state.server + '/get_lesson?'+query )
			.then( res => {
				if ( res.status === 200 ) {
					return res.json();
				}
			})
			.then( body => {
				if ( body.lesson ) {
					this.setState({
						showConfirmModal: true
					});
				} else {
					// Lesson does not exist:
					this.publishLesson();
				}
			})
			.catch( error => {
				return this.setState({ error });
			});
	}

	publishLesson = () => {
		this.setState({
			spinning: true,
			error: null
		});
		const settings = {
			outputPath: os.tmpdir(),
			filePath: this.props.filePath,
			basePath: IS_PACKAGED ? join( process.resourcesPath, 'app' ) : '.',
			content: this.props.content,
			outputDir: this.state.dirname,
			minify: this.state.minify
		};
		bundler( settings, ( error ) => {
			if ( error ) {
				return this.setState({ error });
			}
			debug( 'Lesson successfully bundled...' );
			this.zipLesson( settings.outputPath, settings.outputDir, () => {
				this.upstreamData( settings );
			});
		});
	}

	renderModals = () => {
		return (
			<Fragment>
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
			</Fragment>
		);
	}

	renderProgress() {
		return ( <Fragment>
			<Spinner width={128} height={64} running={this.state.spinning} />
			{ this.state.error ? <Panel bsStyle="danger">
				<Panel.Heading>
					<Panel.Title componentClass="h3">
						Error encountered
					</Panel.Title>
				</Panel.Heading>
				<Panel.Body>
					<p>{this.state.error.message}</p>
				</Panel.Body>
			</Panel> : null }
		</Fragment>);
	}

	renderUploadPanel = () => {
		let formGroups;
		if ( this.state.namespaces.length > 0 ) {
			formGroups = <Fragment>
				<FormGroup>
					<ControlLabel>Select Course</ControlLabel>
					<FormControl
						name="namespaceName"
						onChange={this.handleSelectChange}
						componentClass="select"
						value={this.props.namespaceName}
						disabled={this.state.spinning}
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
						disabled={this.state.spinning}
					/>
				</FormGroup>
				<FormGroup>
					<ControlLabel>Settings</ControlLabel>
					<CheckboxInput
						legend="Minify code"
						onChange={( value ) => {
							this.setState({
								minify: value
							});
						}}
						disabled={this.state.spinning}
						defaultValue={true}
					/>
				</FormGroup>
			</Fragment>;
		} else {
			formGroups = <Panel bsStyle="danger">
				<Panel.Heading>
					<Panel.Title componentClass="h3">
						No courses found
					</Panel.Title>
				</Panel.Heading>
				<Panel.Body>
					Please create a course on the ISLE dashboard or request to be added as an owner to an existing course.
				</Panel.Body>
			</Panel>;
		}
		return (
			<Panel bsStyle="primary">
				<Panel.Heading>
					<Panel.Title componentClass="h1">
						Upload Lesson
					</Panel.Title>
				</Panel.Heading>
				<Panel.Body>
					<p>Upload and deploy lessons directly to ISLE server.</p>
					{ this.state.token ?
						<Fragment>
							<Form>
								{formGroups}
								<Button
									bsStyle="success"
									bsSize="sm"
									block
									onClick={this.checkLesson}
									disabled={this.state.spinning || !this.state.token || !this.state.lessonName}
								>Upload</Button>
							</Form>
							<br />
							{this.renderProgress()}
						</Fragment>:
						<Panel bsStyle="warning">
							<Panel.Body>
							You need to connect the ISLE editor to an ISLE server under settings before you can upload lessons.
							</Panel.Body>
						</Panel>
					}
				</Panel.Body>
			</Panel>
		);
	}

	render() {
		return (
			<Fragment>
				{this.renderUploadPanel()}
				{this.renderModals()}
			</Fragment>
		);
	}
}


// TYPES //

UploadLesson.defaultProps = {
	content: '',
	fileName: '',
	filePath: ''
};

UploadLesson.propTypes = {
	changeNamespace: PropTypes.func.isRequired,
	namespaceName: PropTypes.string.isRequired,
	content: PropTypes.string,
	fileName: PropTypes.string,
	filePath: PropTypes.string
};


// EXPORTS //

export default UploadLesson;
