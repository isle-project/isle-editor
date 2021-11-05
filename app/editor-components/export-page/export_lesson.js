// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { shell } from 'electron';
import { dialog } from '@electron/remote';
import { writeFileSync } from 'fs';
import cp from 'child_process';
import path from 'path';
import jsyaml from 'js-yaml';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import FormControl from 'react-bootstrap/FormControl';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';
import InputGroup from 'react-bootstrap/InputGroup';
import Card from 'react-bootstrap/Card';
import replace from '@stdlib/string/replace';
import isArray from '@stdlib/assert/is-array';
import exists from '@stdlib/fs/exists';
import CheckboxInput from '@isle-project/components/input/checkbox';
import Spinner from '@isle-project/components/internal/spinner';
import electronStore from 'store/electron.js';
import './export_page.css';


// VARIABLES //

const ELECTRON_REGEXP = /node_modules[\\/]electron[\\/]dist/;
const IS_PACKAGED = !( ELECTRON_REGEXP.test( process.resourcesPath ) );
const RE_PREAMBLE = /^---([\S\s]*?)---/;
const options = {
	stdio: [ 'pipe', 'pipe', 'pipe', 'ipc' ]
};


// MAIN //

class ExportLesson extends Component {
	constructor( props ) {
		super( props );
		let outputDir = props.fileName ? props.fileName.replace( /.[^.]*$/, '' ) : '';

		// Initialize state variables...
		this.state = {
			outputPath: '',
			outputDir,
			error: null,
			finished: false,
			spinning: false,
			minify: false,
			loadFromCDN: true,
			writeStats: false,
			alreadyExists: false
		};
	}

	openFolder = () => {
		const fullPath = path.join( this.state.outputPath, this.state.outputDir, 'index.html' );
		shell.showItemInFolder( fullPath );
	};

	openLesson = () => {
		const fullPath = path.join( this.state.outputPath, this.state.outputDir, 'index.html' );
		shell.openPath( fullPath );
	};

	handleFileInputClick = () => {
		dialog.showOpenDialog({
			properties: [ 'openDirectory' ]
		})
			.then( ({ filePaths }) => {
				this.setState({ outputPath: filePaths[ 0 ], finished: false, alreadyExists: false });
			})
			.catch( error => {
				this.setState({
					error
				});
			});
	};

	handleInputChange = ( event ) => {
		const target = event.target;
		const value = target.value;
		const name = target.name;

		electronStore.set( name, value );
		this.setState({
			[ name ]: value
		});
	};

	generateApp = () => {
		const { outputPath, outputDir, minify, writeStats, loadFromCDN } = this.state;
		if ( exists.sync( path.join( outputPath, outputDir ) ) ) {
			this.setState({
				alreadyExists: true
			});
		} else {
			this.setState({
				finished: false,
				spinning: true
			});
			const content = this.props.content;
			let yamlStr = content.match( RE_PREAMBLE )[ 1 ];
			yamlStr = replace( yamlStr, '\t', '    ' ); // Replace tabs with spaces as YAML may not contain the former...
			const meta = jsyaml.load( yamlStr );
			if ( isArray( meta.author ) ) {
				meta.author = meta.author.join( ', ' );
			}
			const settings = {
				outputPath: outputPath,
				filePath: this.props.filePath,
				basePath: IS_PACKAGED ? process.resourcesPath : '.',
				content,
				meta,
				outputDir,
				minify,
				loadFromCDN,
				writeStats
			};
			const settingsPath = path.join( settings.outputPath, 'lesson_settings.json' );
			writeFileSync( settingsPath, JSON.stringify( settings ) );

			const script = path.resolve( settings.basePath, './app/bundler/index.js' );
			const child = cp.fork( script, [ settingsPath ], options );
			child.on( 'message', message => {
				this.setState({
					finished: true,
					spinning: false
				});
			});
			child.on('error', ( err ) => {
				this.setState({
					error: err,
					finished: true,
					spinning: false
				});
			});
		}
	};

	handleKeyPress = ( event ) => {
		if (
			event.charCode === 13 &&
			!this.state.spinning && this.state.outputPath &&
			this.state.outputDir && !this.state.finished
		) {
			this.generateApp( event );
		}
	};

	renderFinished = () => {
		const { t } = this.props;
		let card;
		if ( this.state.finished ) {
			card = this.state.error ? <Card bg="danger" text="white" >
				<Card.Header as="h5">
					{t('error-encountered')}
				</Card.Header>
				<Card.Body>
					<p>{this.state.error.message}</p>
				</Card.Body>
			</Card> :
			<Card bg="success" text="white" >
				<Card.Header as="h5">
					{t('app-exported')}
				</Card.Header>
				<Card.Body>
					<ButtonGroup style={{ position: 'relative', margin: 'auto' }} >
						<Button variant="primary" onClick={this.openFolder}>
							{t('open-folder')}
						</Button>
						<Button variant="secondary" onClick={this.openLesson}>
							{t('open-in-browser')}
						</Button>
					</ButtonGroup>
				</Card.Body>
			</Card>;
		} else {
			card = null;
		}
		return ( <Fragment>
			<Spinner width={128} height={64} running={this.state.spinning} />
			{card}
		</Fragment> );
	};

	renderAlreadyExists = () => {
		if ( !this.state.alreadyExists ) {
			return null;
		}
		return ( <Card border="danger">
			<Card.Header as="h3">
				{this.props.t('directory-already-exists')}
			</Card.Header>
			<Card.Body>
				<p>{this.props.t('directory-already-exists-msg')}</p>
			</Card.Body>
		</Card> );
	};

	handleMinifyChange = ( value ) => {
		this.setState({
			minify: value
		});
	};

	handleWriteStatsChange = ( value ) => {
		this.setState({
			writeStats: value
		});
	};

	handleCDNChange = ( value ) => {
		this.setState({
			loadFromCDN: value
		});
	};

	handleOutputDirChange = ( event ) => {
		this.setState({
			outputDir: event.target.value,
			finished: false,
			alreadyExists: false
		});
	};

	render() {
		const { t } = this.props;
		return (
			<Card border="primary">
				<Card.Header as="h5" className="unselectable" >
					{t('export-lesson')}
				</Card.Header>
				<Card.Body>
					<p>{t('export-lesson-intro')}</p>
					<FormGroup>
						<FormLabel>{t('code-settings')}</FormLabel>
						<CheckboxInput
							legend={t('minify-code')}
							tooltip={t('minify-code-tooltip')}
							tooltipPlacement="left"
							onChange={this.handleMinifyChange}
							disabled={this.state.spinning}
						/>
						<CheckboxInput
							legend={t('save-stats')}
							tooltip={t('save-stats-tooltip')}
							tooltipPlacement="left"
							onChange={this.handleWriteStatsChange}
							disabled={this.state.spinning}
						/>
						<CheckboxInput
							legend={t('load-from-cdn')}
							tooltip={t('load-from-cdn-tooltip')}
							tooltipPlacement="left"
							onChange={this.handleCDNChange}
							defaultValue={this.state.loadFromCDN}
							disabled={this.state.spinning}
						/>
					</FormGroup>
					<FormGroup>
						<FormLabel>{t('directory-name')}</FormLabel>
						<FormControl
							type="text"
							placeholder={t('directory-placeholder')}
							defaultValue={this.state.outputDir}
							onChange={this.handleOutputDirChange}
							onKeyPress={this.handleKeyPress}
							disabled={this.state.spinning}
						/>
					</FormGroup>
					<InputGroup>
						<Button
							variant="primary"
							onClick={this.handleFileInputClick}
						>{t('select-output')}</Button>
						<InputGroup.Append>
							<InputGroup.Text>{t('path')}: {this.state.outputPath}</InputGroup.Text>
						</InputGroup.Append>
					</InputGroup>
					<Button
						variant="success"
						size="small"
						onClick={this.generateApp}
						block
						style={{
							marginTop: '15px'
						}}
						disabled={this.state.spinning || !this.state.outputPath || !this.state.outputDir || ( this.state.finished && !this.state.error )}
					>{t('generate-lesson')}</Button>
					<br />
					{this.renderFinished()}
					{this.renderAlreadyExists()}
				</Card.Body>
			</Card>
		);
	}
}


// PROPERTIES //

ExportLesson.defaultProps = {
	content: '',
	fileName: '',
	filePath: ''
};

ExportLesson.propTypes = {
	content: PropTypes.string,
	fileName: PropTypes.string,
	filePath: PropTypes.string
};


// EXPORTS //

export default ExportLesson;
