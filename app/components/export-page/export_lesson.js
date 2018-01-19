// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonToolbar, ControlLabel, FormControl,
	FormGroup, Panel, Well } from 'react-bootstrap';
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
		const { outputPath, outputDir, minify } = this.state;
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
				minify
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
		return ( <Panel bsStyle="success">
			<Panel.Heading>
				<Panel.Title componentClass="h3">
					App successfully exported!
				</Panel.Title>
			</Panel.Heading>
			<Panel.Body>
				<ButtonToolbar style={{ position: 'relative', margin: 'auto' }} >
					<Button style={{ float: 'left' }} bsStyle="primary" onClick={this.openFolder}>Open containing folder</Button>
					<Button style={{ float: 'right' }} bsStyle="success" onClick={this.openLesson}>Open lesson in Browser</Button>
				</ButtonToolbar>
			</Panel.Body>
		</Panel> );
	}

	renderAlreadyExists = () => {
		if ( !this.state.alreadyExists ) {
			return null;
		}
		return ( <Panel bsStyle="danger">
			<Panel.Heading>
				<Panel.Title componentClass="h3">
					Directory already exists.
				</Panel.Title>
			</Panel.Heading>
			<Panel.Body>
				<p>A directory with the chosen name already exists. Please pick a different name.</p>
			</Panel.Body>
		</Panel> );
	}

	render() {
		return (
			<Panel bsStyle="primary">
				<Panel.Heading>
					<Panel.Title componentClass="h1">
						Export Lesson
					</Panel.Title>
				</Panel.Heading>
				<Panel.Body>
					<p>Package and export the currently opened lesson into a single-page application viewable in any web-browser.</p>
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
						/>
					</FormGroup>
					<FormGroup>
						<ControlLabel>Directory name</ControlLabel>
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
					<br />
					<Button
						bsStyle="primary"
						onClick={this.handleFileInputClick}
					>Select output path</Button>
					<Well className="export-page-well"> Path: {this.state.outputPath} </Well>
					<Button
						bsStyle="success"
						bsSize="sm"
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
				</Panel.Body>
			</Panel>
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
