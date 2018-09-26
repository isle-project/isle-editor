// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/lib/Card';
import ProgressBar from 'react-bootstrap/lib/ProgressBar';
import parse from 'csv-parse';
import detect from 'detect-csv';
import round from '@stdlib/math/base/special/round';


// MAIN //

/**
* Component allowing students upload a *.csv spreadsheet.
*
* @property {string} title - card title
* @property {Function} onUpload - callback function called with ( err, output ) after loading of file
*/
class SpreadsheetUpload extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			percentCompleted: 0,
			uploading: false
		};
	}

	/**
	* Creates FileReader and attaches event listener for when the file is ready.
	*/
	handleFileUpload = () => {
		this.setState({
			uploading: true
		}, () => {
			const reader = new FileReader();
			const selectedFile = this.fileUpload.files[ 0 ];
			reader.addEventListener( 'load', this.onFileRead, false );
			reader.addEventListener( 'progress', ( event ) => {
				if ( event.lengthComputable ) {
					const percentCompleted = event.loaded / event.total;
					this.setState({
						percentCompleted
					});
				}
			}, false );
			reader.readAsText( selectedFile, 'utf-8' );
		});
	}

	/**
	* Event handler invoked once student-supplied CSV file has been uploaded. Parses the file and extracts its categorical and continuous variables.
	*/
	onFileRead = ( event ) => {
		const text = event.target.result;
		const csv = detect( text );
		this.setState({
			percentCompleted: 0,
			uploading: false
		});
		parse( text, { delimiter: csv.delimiter, columns: true, auto_parse: true }, ( err, output ) => {
			if ( err ) {
				const { session } = this.context;
				session.addNotification({
					title: 'Could not read file.',
					message: `The following error was encountered while trying to read the file:${err.message}`,
					level: 'error',
					position: 'tr'
				});
				return this.props.onUpload( err );
			}
			this.props.onUpload( null, output );
		});
	}

	/**
	* Event handler ignoring default dragging behavior and preventing bubbling-up.
	*/
	ignoreDrag = ( evt ) => {
		evt.stopPropagation();
		evt.preventDefault();
	}

	/**
	* Event handler invoked when user drags CSV file onto the upload area.
	*/
	onFileDrop = ( evt ) => {
		evt.stopPropagation();
		evt.preventDefault();
		const dt = evt.dataTransfer;
		const reader = new FileReader();
		let file = null;
		if ( dt.items ) {
			if ( dt.items[ 0 ].kind === 'file' ) {
				file = dt.items[ 0 ].getAsFile();
			}
		} else {
			file = dt.files[ 0 ];
		}
		if ( file ) {
			const mimeType = file.type;
			if ( mimeType !== 'text/csv' ) {
				const { session } = this.context;
				return session.addNotification({
					title: 'No CSV file.',
					message: 'The supplied file is not a CSV file.',
					level: 'error',
					position: 'tr'
				});
			}
			reader.addEventListener( 'load', this.onFileRead, false );
			reader.readAsText( file, 'utf-8' );
		}
	}

	render() {
		const completed = round( this.state.percentCompleted * 100.0 );
		return ( <Card style={{ textAlign: 'center' }} >
			<Card.Header as="h2">
				{this.props.title}
			</Card.Header>
			<Card.Body>
				<label>Please upload a data set (CSV format):</label>
				<input
					type="file"
					accept=".csv"
					onChange={this.handleFileUpload}
					ref={fileUpload => {
						this.fileUpload = fileUpload;
					}}
					style={{ margin: 'auto' }}
				/>
				<p>or</p>
				<div
					onDrop={this.onFileDrop}
					onDragOver={this.ignoreDrag}
					onDragEnd={this.ignoreDrag}
					style={{
						minHeight: '150px',
						width: '250px',
						border: '1px solid blue',
						margin: 'auto',
						padding: '10px'
					}}
				>
					<span>Drop file here</span>
				</div>
				{ this.state.uploading ?
					<ProgressBar now={completed} label={`${completed}%`} /> :
					null
				}
			</Card.Body>
		</Card> );
	}
}

// TYPES //

SpreadsheetUpload.defaultProps = {
	onUpload() {},
	title: 'File Upload'
};

SpreadsheetUpload.propTypes = {
	onUpload: PropTypes.func,
	title: PropTypes.string
};

SpreadsheetUpload.contextTypes = {
	session: PropTypes.object
};


// EXPORTS //

export default SpreadsheetUpload;
