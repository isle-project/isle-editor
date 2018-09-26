// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/lib/Button';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import InputGroup from 'react-bootstrap/lib/InputGroup';
import Card from 'react-bootstrap/lib/Card';
import { remote, shell } from 'electron';
import path from 'path';
import exists from '@stdlib/fs/exists';
import bundler from 'bundler';
import CheckboxInput from 'components/input/checkbox';
import Spinner from 'components/spinner';
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
			finished: false,
			spinning: false,
			minify: false,
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
		const outputPath = dialog.showOpenDialog({
			properties: [ 'openDirectory' ]
		})[ 0 ];
		this.setState({ outputPath, finished: false, alreadyExists: false });
	}

	handleInputChange = ( event ) => {
		const target = event.target;
		const value = target.value;
		const name = target.name;

		localStorage.setItem( name, value );
		this.setState({
			[ name ]: value
		});
	}

	generateApp = () => {
		const { outputPath, outputDir, minify, writeStats } = this.state;
		if ( exists.sync( path.join( outputPath, outputDir ) ) ) {
			this.setState({
				alreadyExists: true
			});
		} else {
			this.setState({
				finished: false,
				spinning: true
			});
			bundler({
				outputPath: outputPath,
				filePath: this.props.filePath,
				basePath: IS_PACKAGED ? path.join( process.resourcesPath, 'app' ) : '.',
				content: this.props.content,
				outputDir,
				minify,
				writeStats
			}, ( err ) => {
				this.setState({
					finished: true,
					spinning: false
				});
			});
		}
	}

	renderFinished = () => {
		if ( !this.state.finished ) {
			return <Spinner width={128} height={64} running={this.state.spinning} />;
		}
		return ( <Card bg="success" text="white">
			<Card.Header as="h5">
					App successfully exported!
			</Card.Header>
			<Card.Body>
				<ButtonGroup style={{ position: 'relative', margin: 'auto' }} >
					<Button variant="primary" onClick={this.openFolder}>Open containing folder</Button>
					<Button variant="secondary" onClick={this.openLesson}>Open lesson in Browser</Button>
				</ButtonGroup>
			</Card.Body>
		</Card> );
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
				<Card.Header as="h5">
						Export Lesson
				</Card.Header>
				<Card.Body>
					<p>Package and export the currently opened lesson into a single-page application viewable in any web-browser.</p>
					<FormGroup>
						<label>Settings</label>
						<CheckboxInput
							legend="Minify code"
							onChange={( value ) => {
								this.setState({
									minify: value
								});
							}}
							disabled={this.state.spinning}
						/>
						<CheckboxInput
							legend="Save bundle stats"
							onChange={( value ) => {
								this.setState({
									writeStats: value
								});
							}}
							disabled={this.state.spinning}
						/>
					</FormGroup>
					<FormGroup>
						<label>Directory name</label>
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
						disabled={this.state.spinning || !this.state.outputPath || !this.state.outputDir || this.state.finished}
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
