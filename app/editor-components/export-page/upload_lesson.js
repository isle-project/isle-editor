// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Trans } from 'react-i18next';
import axios from 'axios';
import logger from 'debug';
import { createReadStream, createWriteStream, writeFileSync } from 'fs';
import { join, resolve } from 'path';
import https from 'https';
import os from 'os';
import qs from 'querystring';
import url from 'url';
import cp from 'child_process';
import FormData from 'form-data';
import jsyaml from 'js-yaml';
import Button from 'react-bootstrap/Button';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import FormControl from 'react-bootstrap/FormControl';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import randomstring from '@isle-project/utils/randomstring/ascii';
import contains from '@stdlib/assert/contains';
import replace from '@stdlib/string/replace';
import endsWith from '@stdlib/string/ends-with';
import startsWith from '@stdlib/string/starts-with';
import removeLast from '@stdlib/string/remove-last';
import isArray from '@stdlib/assert/is-array';
import pick from '@stdlib/utils/pick';
import isEmptyObject from '@stdlib/assert/is-empty-object';
import CheckboxInput from '@isle-project/components/input/checkbox';
import Spinner from '@isle-project/components/internal/spinner';
import KeyControls from '@isle-project/components/key-controls';
import electronStore from 'store/electron.js';


// VARIABLES //

const ELECTRON_REGEXP = /node_modules[\\/]electron[\\/]dist/;
const IS_PACKAGED = !( ELECTRON_REGEXP.test( process.resourcesPath ) );
const METADATA_KEYS = [ 'author', 'date', 'keywords', 'license', 'hideProgressBar', 'language', 'presentation' ];
const RE_PREAMBLE = /^---([\S\s]*?)---/;
const debug = logger( 'isle-editor:export-page' );
const options = {
	stdio: [ 'pipe', 'pipe', 'pipe', 'ipc' ]
};


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
			loadFromCDN: true,
			offlineAccess: false,
			lessonName,
			active: true,
			showInGallery: false,
			dirname: randomstring( 16, 65, 90 ),
			server: electronStore.get( 'server' ),
			token: electronStore.get( 'token' ),
			showResponseModal: false,
			showConfirmModal: false,
			invalidLessonName: false
		};
	}

	componentDidMount() {
		if ( this.state.token ) {
			axios.get( this.state.server+'/get_namespaces', {
				headers: {
					'Authorization': 'JWT ' + this.state.token
				}
			})
			.then( res => {
				debug( 'Received namespaces...' );
				this.setState({
					namespaces: res.data.namespaces
				}, () => {
					if (
						this.state.namespaces.length > 0 &&
						(
							!this.props.namespaceName ||
							this.state.namespaces.filter( x => x.title === this.props.namespaceName ).length === 0
						)
					) {
						this.props.changeNamespace( this.state.namespaces[ 0 ].title );
					}
				});
			})
			.catch( error => {
				debug( 'Encountered an error: '+error.message );
				return this.setState({
					error
				});
			});
		}
	}

	handleLessonChange = ( event ) => {
		const lessonName = event.target.value;
		this.setState({
			lessonName,
			invalidLessonName: contains( lessonName, ' ' )
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
		import( 'archiver' ).then( main => {
			const archiver = main.default;
			let archive = archiver( 'zip', {
				store: true
			});
			output.on( 'close', function onClose() {
				debug( archive.pointer() + ' total bytes' );
				debug( 'archiver has been finalized and the output file descriptor has closed.' );
				clbk();
			});
			archive.on( 'error', ( error ) => {
				return this.setState({
					error
				});
			});
			archive.pipe( output );
			archive.directory( join( outputPath, outputDir ), '/' );
			archive.finalize();
		});
	};

	upstreamData = ({ outputPath, outputDir, meta }) => {
		const { lessonName } = this.state;
		const { namespaceName, t } = this.props;

		debug( 'Sending POST request to create lesson...' );
		const form = new FormData();
		form.append( 'namespaceName', namespaceName );
		form.append( 'lessonName', lessonName );
		form.append( 'active', String( this.state.active ) );
		form.append( 'showInGallery', String( this.state.showInGallery ) );
		if ( meta.description ) {
			form.append( 'description', meta.description );
		}
		const metadata = pick( meta, METADATA_KEYS );
		if ( !isEmptyObject( metadata ) ) {
			form.append( 'metadata', JSON.stringify( metadata ) );
		}
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
		const re = /^https:\/\/([^:]+):?([0-9]{0,5})/i;
		const matches = this.state.server.match( re );
		debug( 'Matches %s', matches );
		options.host = matches[ 1 ];
		if ( endsWith( options.host, '/' ) ) {
			options.host = removeLast( options.host );
		}
		if ( matches[ 2 ]) {
			options.port = matches[ 2 ];
		}
		options.rejectUnauthorized = false;
		request = https.request( options );
		form.pipe( request );

		request.on( 'response', ( res ) => {
			if ( res.statusCode === 200 ) {
				const lessonLink = url.resolve( this.state.server, namespaceName + '/' + lessonName );
				const msg = <span>
					{t('lesson-uploaded')} <a href={lessonLink}>{lessonLink}</a>
				</span>;
				this.setState({
					spinning: false,
					showResponseModal: true,
					modalMessage: msg,
					dirname: randomstring( 16, 65, 90 )
				});
			} else {
				const msg = 'Operation not successful. Message: '+res.statusMessage+' (status code: '+res.statusCode+')';
				this.setState({
					error: new Error( msg ),
					spinning: false,
					dirname: randomstring( 16, 65, 90 )
				});
			}
		});
		request.on( 'error', ( error ) => {
			debug( 'Encountered error: ' + error.message );
			this.setState({
				error,
				spinning: false,
				dirname: randomstring( 16, 65, 90 )
			});
		});
	}

	checkLesson = () => {
		const form = {
			namespaceName: this.props.namespaceName,
			lessonName: this.state.lessonName
		};
		const query = qs.stringify( form );
		debug( 'Querystring: '+query );
		axios.get( this.state.server + '/get_lesson?'+query )
			.then( res => {
				if ( res.data.lesson ) {
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

		const content = this.props.content;
		let yamlStr = content.match( RE_PREAMBLE )[ 1 ];
		yamlStr = replace( yamlStr, '\t', '    ' ); // Replace tabs with spaces as YAML may not contain the former...
		const meta = jsyaml.load( yamlStr );
		if ( isArray( meta.author ) ) {
			meta.author = meta.author.join( ', ' );
		}
		const settings = {
			outputPath: os.tmpdir(),
			filePath: this.props.filePath,
			basePath: IS_PACKAGED ? process.resourcesPath : '.',
			content: content,
			meta: meta,
			outputDir: this.state.dirname,
			minify: this.state.minify,
			loadFromCDN: this.state.loadFromCDN,
			offlineAccess: this.state.offlineAccess
		};
		const script = resolve( settings.basePath, './app/bundler/index.js' );
		const settingsPath = join( settings.outputPath, 'lesson_settings.json' );
		debug( `Fork script at ${script} to bundle lesson with ${settingsPath}...` );
		writeFileSync( settingsPath, JSON.stringify( settings ) );

		const child = cp.fork( script, [ settingsPath ], options );
		child.on( 'message', message => {
			console.log( message ); // eslint-disable-line no-console
			if ( startsWith( message, 'success' ) ) {
				debug( 'Lesson successfully bundled...' );
				this.zipLesson( settings.outputPath, settings.outputDir, () => {
					debug( 'Lesson successfully zipped...' );
					this.upstreamData( settings );
				});
			}
		});
		child.on( 'exit', function onExit( code ) {
			debug( 'Exited with code: '+code );
		});
		child.on( 'error', ( err ) => {
			this.setState({
				error: err,
				spinning: false,
				dirname: randomstring( 16, 65, 90 )
			});
		});
	}

	renderResponseModal = () => {
		const { t } = this.props;
		return (
			<Modal show={this.state.showResponseModal} onHide={this.closeResponseModal}>
				<Modal.Header closeButton>
					<Modal.Title>{t('server-response')}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{this.state.modalMessage}
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={this.closeResponseModal}>{t('close')}</Button>
				</Modal.Footer>
			</Modal>
		);
	}

	renderConfirmModal = () => {
		if ( !this.state.showConfirmModal ) {
			return null;
		}
		const { t } = this.props;
		return (
			<Modal show={this.state.showConfirmModal} onHide={this.closeConfirmModal} >
				<Modal.Header>
					<Modal.Title>{t('overwrite-lesson')}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Trans i18nKey="overwrite-lesson-msg" ns="Editor" values={{ lessonName: this.state.lessonName }}>
						A lesson with the name <b>{{ lessonName: this.state.lessonName }}</b> is already present in the namespace. Please confirm that you wish to overwrite the lesson or cancel the upload procedure and choose a different name.
					</Trans>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={this.closeConfirmModal}>{t('cancel')}</Button>
					<Button variant="warning"
						onClick={() => {
							this.publishLesson();
							this.setState({
								showConfirmModal: false
							});
						}}
					>{t('overwrite')}</Button>
				</Modal.Footer>
				<KeyControls
					actions={{
						'Enter': () => {
							this.publishLesson();
							this.setState({
								showConfirmModal: false
							});
						},
						'Escape': () => {
							this.setState({
								showConfirmModal: false
							});
						}
					}}
				/>
			</Modal>
		);
	}

	renderProgress() {
		const { error, spinning } = this.state;
		return ( <Fragment>
			<Spinner width={128} height={64} running={spinning} />
			{ error ? <Card bg="danger" text="white" >
				<Card.Header as="h5">
					{this.props.t('error-encountered')}
				</Card.Header>
				<Card.Body>
					<p>
						{error.response ? error.response.data : error.message}</p>
				</Card.Body>
			</Card> : null }
		</Fragment>);
	}

	handleKeyPress = ( event ) => {
		if (
			event.charCode === 13 && !this.state.spinning &&
			this.state.token && this.state.lessonName &&
			this.state.lessonName && !this.state.invalidLessonName
		) {
			this.checkLesson( event );
		}
	}

	renderUploadPanel = () => {
		let formGroups;
		const { t } = this.props;
		if ( this.state.namespaces.length > 0 ) {
			formGroups = <Fragment>
				<FormGroup>
					<FormLabel>{t('select-course')}</FormLabel>
					<FormControl
						name="namespaceName"
						onChange={this.handleSelectChange}
						as="select"
						value={this.props.namespaceName}
						disabled={this.state.spinning}
					>
						{this.state.namespaces.map( ( ns, id ) =>
							<option key={id} value={ns.title}>{ns.title}</option>
						)}
					</FormControl>
				</FormGroup>
				<FormGroup
					controlId="lesson-name"
				>
					<FormLabel>{t('lesson-name')}</FormLabel>
					<FormControl
						name="lessonName"
						type="text"
						placeholder={t('lesson-name-placeholder')}
						onChange={this.handleLessonChange}
						value={this.state.lessonName}
						disabled={this.state.spinning}
						onKeyPress={this.handleKeyPress}
						isInvalid={this.state.invalidLessonName}
					/>
					<FormControl.Feedback type="invalid" >
						{t('lesson-name-invalid')}
					</FormControl.Feedback>
				</FormGroup>
				<FormGroup>
					<FormLabel>{t('release-to-students')}</FormLabel>
					<ToggleButtonGroup
						name="Released"
						onChange={( active ) => {
							this.setState({
								active
							});
						}}
						type="radio"
						size="sm"
						value={this.state.active}
						style={{ float: 'right' }}
					>
						<ToggleButton
							variant="outline-secondary"
							value={true}
							style={{
								color: this.state.active ? 'white' : '#A9A9A9',
								fontWeight: this.state.active ? 600 : 200
							}}
						>
							{t('active')}
						</ToggleButton>
						<ToggleButton
							variant="outline-secondary"
							value={false}
							style={{
								color: this.state.active ? '#A9A9A9' : 'white',
								fontWeight: this.state.active? 200 : 600
							}}
						>
							{t('inactive')}
						</ToggleButton>
					</ToggleButtonGroup>
				</FormGroup>
				<FormGroup>
					<FormLabel>{t('show-in-gallery')}</FormLabel>
					<ToggleButtonGroup
						name="Visibility"
						onChange={( showInGallery ) => {
							this.setState({
								showInGallery
							});
						}}
						type="radio"
						size="sm"
						value={this.state.showInGallery}
						style={{ float: 'right' }}
					>
						<ToggleButton
							variant="outline-secondary"
							value={true}
							style={{
								color: this.state.showInGallery ? 'white' : '#A9A9A9',
								fontWeight: this.state.showInGallery ? 600 : 200
							}}
						>
							{t('public')}
						</ToggleButton>
						<ToggleButton
							variant="outline-secondary"
							value={false}
							style={{
								color: this.state.showInGallery ? '#A9A9A9' : 'white',
								fontWeight: this.state.showInGallery? 200 : 600
							}}
						>
							{t('private')}
						</ToggleButton>
					</ToggleButtonGroup>
				</FormGroup>
				<FormGroup>
					<FormLabel>{t('code-settings')}</FormLabel>
					<CheckboxInput
						legend={t('minify-code')}
						tooltip={t('minify-code-tooltip')}
						onChange={( value ) => {
							this.setState({
								minify: value
							});
						}}
						disabled={this.state.spinning}
						defaultValue={true}
					/>
					<CheckboxInput
						legend={t('load-from-cdn')}
						tooltip={t('load-from-cdn-tooltip')}
						onChange={( value ) => {
							this.setState({
								loadFromCDN: value
							});
						}}
						defaultValue={this.state.loadFromCDN}
						disabled={this.state.spinning}
					/>
					<CheckboxInput
						legend={t('offline-access')}
						tooltip={t('offline-access-tooltip')}
						onChange={( value ) => {
							this.setState({
								offlineAccess: value
							});
						}}
						defaultValue={this.state.offlineAccess}
						disabled={this.state.spinning}
					/>
				</FormGroup>
			</Fragment>;
		} else {
			formGroups = <Card bg="danger" text="white">
				<Card.Header as="h5">
					{t('no-courses-found')}
				</Card.Header>
				<Card.Body>
					{t('no-courses-found-msg')}
				</Card.Body>
			</Card>;
		}
		return (
			<Card border="primary">
				<Card.Header as="h5" className="unselectable" >
					{t('upload-lesson')}
				</Card.Header>
				<Card.Body>
					<p>{t('upload-lesson-msg')}</p>
					{ this.state.token ?
						<Fragment>
							{formGroups}
							<Button
								variant="success"
								size="sm"
								block
								onClick={this.checkLesson}
								disabled={this.state.spinning || !this.state.token || !this.state.lessonName || this.state.invalidLessonName}
							>{t('upload')}</Button>
							<br />
							{this.renderProgress()}
						</Fragment>:
						<Card bg="warning" body >
							{t('upload-lesson-warning')}
						</Card>
					}
				</Card.Body>
			</Card>
		);
	}

	render() {
		return (
			<Fragment>
				{this.renderUploadPanel()}
				{this.renderResponseModal()}
				{this.renderConfirmModal()}
			</Fragment>
		);
	}
}


// PROPERTIES //

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
