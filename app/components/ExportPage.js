// MODULES //

import React, { Component, PropTypes } from 'react';
import { Button, ButtonToolbar, Panel, Well } from 'react-bootstrap';
import { Link } from 'react-router';
import { remote, shell } from 'electron';
import path from 'path';
import yaml from 'js-yaml';
import jsx from 'markdown-it-jsx';
import fs from 'fs';

import bundler from 'bundler';
import CheckboxInput from 'general/checkbox-input';
import Spinner from 'general/spinner';


// Markdown parser rendering markdown inside <md></md> tags...
const md = require( 'markdown-it' )({
	html: true,
	xhtmlOut: true,
	breaks: false,
	typographer: false
});
md.use( jsx );


// VARIABLES //

const { dialog } = remote;


// FUNCTIONS //

const makeOutputDir = ( outputDir ) => {
	fs.mkdirSync( outputDir );
};

const generateISLE = ( outputDir, code ) => {
	const islePath = path.join( outputDir, 'index.isle' );
	fs.writeFileSync( islePath, code );
};


// EXPORT LESSON //

class ExportPage extends Component {
	constructor( props ) {
		super( props );

		// Initialize state variables...
		this.state = {
			dirPath: '',
			preamble: {},
			finished: false,
			spinning: false,
			minify: false
		};

		this.openFolder = () => {
			const fullPath = path.join( this.state.dirPath, this.state.preamble.title, 'index.html' );
			shell.showItemInFolder( fullPath );
		};

		this.openLesson = () => {
			const fullPath = path.join( this.state.dirPath, this.state.preamble.title, 'index.html' );
			shell.openItem( fullPath );
		};

		this.handleFileInputClick = () => {
			const dirPath = dialog.showOpenDialog({
				properties: [ 'openDirectory' ]
			})[ 0 ];
			this.setState({ dirPath });
		};

		this.generateApp = () => {
			let code = this.props.content;
			let preamble = code.match( /---([\S\s]*)---/ )[ 1 ];
			preamble = yaml.load( preamble );

			this.setState({
				preamble: preamble,
				finished: false,
				spinning: true
			});

			let outputDir = path.join(  this.state.dirPath, preamble.title );
			makeOutputDir( outputDir );
			generateISLE( outputDir, code )

			// Remove YAML preamble...
			code = code.replace( /---([\S\s]*)---/, '' );

			// Replace Markdown by HTML...
			code = md.render( code );

			bundler( this.state.dirPath, code, preamble, this.state.minify, ( err ) => {
				console.log( err )
				this.setState({
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
				<Panel header={<h1>Export Lesson</h1>} bsStyle="primary">
					<p>Package and export the currently opened lesson into a
					single-page application viewable in any web-browser.</p>
					<CheckboxInput
						legend="Minify code"
						onChange={ ( value ) => {
							this.setState({
								minify: value
							});
						}}
					/>
					<br />
					<Button
						bsStyle="primary"
						style={{
							float: 'left'
						}}
						onClick={this.handleFileInputClick}
					>Select output directory</Button>
					<Well
						style={{
							float: 'left',
							marginLeft: '8px',
							height: '34px',
							paddingTop: '6px',
							color: 'darkred'
						}}
					> Path: {this.state.dirPath} </Well>
					<br />
					{this.state.dirPath ?
						<Button
							bsStyle="info"
							bsSize="large"
							onClick={this.generateApp}
							block
							style={{
								marginTop: '15px'
							}}
						> Generate lesson </Button> :
						<span />
					}
				</Panel>
				<br />
				<div
					style={{
						position: 'relative',
						marginLeft: '38%',
						marginRight: '38%',
						height: 500,
						width: '22%'
					}}
				>
					{this.state.finished ?
						<Panel
							header={<h3>App successfully exported!</h3>}
							bsStyle="success"
						>
							<ButtonToolbar>
								<Button bsStyle="info" onClick={this.openFolder}>Open containing folder</Button>
								<Button bsStyle="success" onClick={this.openLesson}>Open lesson in Browser</Button>
							</ButtonToolbar>
						</Panel> : <Spinner width={256} height={128} running={this.state.spinning}/>
					}
				</div>
			</div>
		);
	}
}


// PROPERTY TYPES //

ExportPage.propTypes = {
	content: PropTypes.string
};


// EXPORTS //

export default ExportPage;
