// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import path from 'path';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import FormControl from 'react-bootstrap/FormControl';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';
import InputGroup from 'react-bootstrap/InputGroup';
import Card from 'react-bootstrap/Card';
import { remote, shell } from 'electron';
import exists from '@stdlib/fs/exists';
import CheckboxInput from 'components/input/checkbox';
import Spinner from 'components/internal/spinner';
import rendererStore from 'store/electron.js';
import './export_page.css';


// VARIABLES //

const { dialog } = remote;
const ELECTRON_REGEXP = /node_modules[\\/]electron[\\/]dist/;
const IS_PACKAGED = !( ELECTRON_REGEXP.test( process.resourcesPath ) );


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
	}

	openLesson = () => {
		const fullPath = path.join( this.state.outputPath, this.state.outputDir, 'index.html' );
		shell.openItem( fullPath );
	}

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
	}

	handleInputChange = ( event ) => {
		const target = event.target;
		const value = target.value;
		const name = target.name;

		rendererStore.set( name, value );
		this.setState({
			[ name ]: value
		});
	}

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
			import( 'bundler' ).then( main => {
				const bundler = main.default;
				bundler({
					outputPath: outputPath,
					filePath: this.props.filePath,
					basePath: IS_PACKAGED ? process.resourcesPath : '.',
					content: this.props.content,
					outputDir,
					minify,
					loadFromCDN,
					writeStats
				}, ( error ) => {
					const newState = {
						finished: true,
						spinning: false
					};
					if ( error ) {
						newState.error = error;
					}
					this.setState( newState );
				});
			});
		}
	}

	handleKeyPress = ( event ) => {
		if (
			event.charCode === 13 &&
			!this.state.spinning && this.state.outputPath &&
			this.state.outputDir && !this.state.finished
		) {
			this.generateApp( event );
		}
	}

	renderFinished = () => {
		let card;
		if ( this.state.finished ) {
			card = this.state.error ? <Card bg="danger" text="white" >
				<Card.Header as="h5">
					Error encountered
				</Card.Header>
				<Card.Body>
					<p>{this.state.error.message}</p>
				</Card.Body>
			</Card> :
			<Card bg="success" text="white">
				<Card.Header as="h5">
					App successfully exported!
				</Card.Header>
				<Card.Body>
					<ButtonGroup style={{ position: 'relative', margin: 'auto' }} >
						<Button variant="primary" onClick={this.openFolder}>Open containing folder</Button>
						<Button variant="secondary" onClick={this.openLesson}>Open lesson in Browser</Button>
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
	}

	renderAlreadyExists = () => {
		if ( !this.state.alreadyExists ) {
			return null;
		}
		return ( <Card border="danger">
			<Card.Header as="h3">
				Directory already exists.
			</Card.Header>
			<Card.Body>
				<p>A directory with the chosen name already exists. Please pick a different name.</p>
			</Card.Body>
		</Card> );
	}

	render() {
		return (
			<Card border="primary">
				<Card.Header as="h5" className="unselectable" >
					Export Lesson
				</Card.Header>
				<Card.Body>
					<p>Package and export the currently opened lesson into a single-page application viewable in any web-browser.</p>
					<FormGroup>
						<FormLabel>Settings</FormLabel>
						<CheckboxInput
							legend="Minify code"
							tooltip="Disabling this option slightly reduces build time but results in more data to be downloaded by users"
							tooltipPlacement="left"
							onChange={( value ) => {
								this.setState({
									minify: value
								});
							}}
							disabled={this.state.spinning}
						/>
						<CheckboxInput
							legend="Save bundle stats"
							tooltip="Create a `stats.json` file with bundle statistics for debugging and analysis purposes"
							tooltipPlacement="left"
							onChange={( value ) => {
								this.setState({
									writeStats: value
								});
							}}
							disabled={this.state.spinning}
						/>
						<CheckboxInput
							legend="Load ISLE resources from CDN"
							tooltip="WARNING: Disabling this option will massively increase upload time and bundle sizes"
							tooltipPlacement="left"
							onChange={( value ) => {
								this.setState({
									loadFromCDN: value
								});
							}}
							defaultValue={this.state.loadFromCDN}
							disabled={this.state.spinning}
						/>
					</FormGroup>
					<FormGroup>
						<FormLabel>Directory Name</FormLabel>
						<FormControl
							type="text"
							placeholder="Enter text"
							defaultValue={this.state.outputDir}
							onChange={( event ) => {
								this.setState({
									outputDir: event.target.value,
									finished: false,
									alreadyExists: false
								});
							}}
							onKeyPress={this.handleKeyPress}
							disabled={this.state.spinning}
						/>
					</FormGroup>
					<InputGroup>
						<Button
							variant="primary"
							onClick={this.handleFileInputClick}
						>Select output</Button>
						<InputGroup.Append>
							<InputGroup.Text>Path: {this.state.outputPath}</InputGroup.Text>
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
					> Generate lesson </Button>
					<br />
					{this.renderFinished()}
					{this.renderAlreadyExists()}
				</Card.Body>
			</Card>
		);
	}
}


// TYPES //

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
