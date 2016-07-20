// MODULES //

import React, { Component } from 'react';
import { Link } from 'react-router';
import redux from 'redux';
import { remote } from 'electron';
const bundler = require( 'bundler' );


// VARIABLES //

const { dialog } = remote;


// EXPORT LESSON //

class ExportPage extends Component {
	constructor( props ) {
		super( props );

		// Initialize state variables...
		this.state = {
			dirPath: ''
		};

		this.handleFileInputClick = () => {
			const dirPath = dialog.showOpenDialog({
				properties: [ 'openDirectory' ]
			})[ 0 ];
			this.setState({ dirPath });
			console.log( redux.getState() )
		};

		this.generateApp = () => {
			var lesson = `<VideoPlayer url="https://www.youtube.com/watch?v=UzxYlbK2c7E" />
			<RShell code="abs(c(-2,3,-1))" />`;
			var meta = {
				components: ["rshell", "feedback", "video-player"],
				name:"lesson01"
			};
			bundler( this.state.dirPath, lesson, meta );
		};
	}

	render() {
		return (
			<div
				style={{
					marginLeft: '20px'
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
				<h1>Export Lesson</h1>
				<input type="button" onClick={this.handleFileInputClick} value="Select output directory" />
				<span> Path: {this.state.dirPath} </span>
				<br />
				{this.state.dirPath ?
					<input type="button" onClick={this.generateApp} value="Generate lesson." /> :
					<span />
				}
			</div>
		);
	}
}


// EXPORTS //

export default ExportPage;
