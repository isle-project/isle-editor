// MODULES //

import React, { Component, PropTypes } from 'react';
import { Button, ButtonToolbar, Panel, Well } from 'react-bootstrap';
import { Link } from 'react-router';
import { remote, shell } from 'electron';
import path from 'path';
import yaml from 'js-yaml';
import bundler from 'bundler';

// Markdown parser rendering markdown inside <md></md> tags...
const md = require( 'markdown-it' )({
	html: true,
	xhtmlOut: true,
	breaks: true,
	typographer: false
});


// VARIABLES //

const { dialog } = remote;


// EXPORT LESSON //

class ExportPage extends Component {
	constructor( props ) {
		super( props );

		// Initialize state variables...
		this.state = {
			dirPath: '',
			preamble: {},
			finished: false
		};

		this.startSpinner = () => {
			const canvas = document.getElementById( 'spinner' );
			const context = canvas.getContext( '2d' );
			this.context = context;
			const start = new Date();
			const lines = 16;
			const cW = context.canvas.width;
			const cH = context.canvas.height;

			const draw = () => {
				const rotation = parseInt(
					( ( new Date() - start ) / 1000 ) * lines ) / lines;
				context.save();
				context.clearRect( 0, 0, cW, cH );
				context.translate( cW / 2.0, cH / 2.0 );
				context.rotate( Math.PI * 2 * rotation );
				for ( let i = 0; i < lines; i++ ) {
					context.beginPath();
					context.rotate( Math.PI * 2.0 / lines );
					context.moveTo( cW / 10, 0 );
					context.lineTo( cW / 4, 0 );
					context.lineWidth = cW / 30;
					context.strokeStyle = 'rgba(0, 0, 0,' + i / lines + ')';
					context.stroke();
				}
				context.restore();
			};
			this.activeSpinner = window.setInterval( draw, 1000 / 30 );
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
			const preamble = code.match( /---([\S\s]*)---/ )[ 1 ];
			const preambleObj = yaml.load( preamble );

			this.setState({
				preamble: preambleObj
			});

			// Remove YAML preamble...
			code = code.replace( /---([\S\s]*)---/, '' );

			// Replace Markdown by HTML...
			code = code.replace( /<md>([\S\s]*?)<\/md>/g,
				( match, p1 ) => md.render( p1 )
			);

			this.setState({
				finished: false
			});
			this.startSpinner();
			bundler( this.state.dirPath, code, preambleObj, () => {
				clearInterval( this.activeSpinner );
				this.context.clearRect( 0, 0, this.context.canvas.width, this.context.canvas.height );
				this.setState({
					finished: true
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
						position: 'absolute',
						left: 0,
						right: 0,
						top: 0,
						bottom: 0,
						margin: 'auto',
						height: 500,
						width: '22%'
					}}
				> <canvas
					id="spinner"
					style={{
						padding: '30px'
					}}
				></canvas>
				{this.state.finished ?
					<Panel
						header={<h3>App successfully exported!</h3>}
						bsStyle="success"
					>
						<ButtonToolbar>
							<Button bsStyle="info" onClick={this.openFolder}>Open containing folder</Button>
							<Button bsStyle="success" onClick={this.openLesson}>Open lesson in Browser</Button>
						</ButtonToolbar>
					</Panel> : <span />}
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
