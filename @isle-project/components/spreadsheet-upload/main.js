// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';
import parse from 'csv-parse';
import detect from 'detect-csv';
import replace from '@stdlib/string/replace';
import isNull from '@stdlib/assert/is-null';
import round from '@stdlib/math/base/special/round';
import SessionContext from '@isle-project/session/context.js';
import CheckboxInput from '@isle-project/components/input/checkbox';


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
			uploading: false,
			header: true
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
	* Event handler invoked once student-supplied CSV file has been uploaded. Parses the file and extracts its categorical and quantitative variables.
	*/
	onFileRead = ( event ) => {
		let text = event.target.result;
		const csv = detect( text );
		let delimiter;
		if ( !isNull( csv ) ) {
			delimiter = csv.delimiter;
		} else {
			delimiter = ',';
		}
		text = replace( text, '\r', '' ); // Remove carriage returns for search in L73 to return correct index
		let columns;
		const idx = text.indexOf( '\n' );
		let firstLine = text.substring( 0, idx ).split( delimiter );
		if ( this.state.header ) {
			columns = firstLine;
			text = text.substring( idx+1 );
		} else {
			columns = firstLine.map( ( x, i ) => {
				return 'VAR_'+(i+1);
			});
		}
		this.setState({
			percentCompleted: 0,
			uploading: false
		});
		parse( text, { delimiter, columns, cast: true }, ( err, output ) => {
			if ( err ) {
				const session = this.context;
				session.addNotification({
					title: this.props.t('error-title'),
					message: `${this.props.t('error-message')}: ${err.message}`,
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
				const session = this.context;
				return session.addNotification({
					title: this.props.t('no-csv'),
					message: this.props.t('no-csv-message'),
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
		return ( <Card>
			<Card.Header as="h2">
				{this.props.title || this.props.t('title')}
			</Card.Header>
			<Card.Body>
				<label htmlFor="CSVUpload">{this.props.t('csv-upload-prompt')}:</label>
				<input
					id="CSVUpload"
					type="file"
					accept=".csv"
					onChange={this.handleFileUpload}
					ref={fileUpload => {
						this.fileUpload = fileUpload;
					}}
					style={{ margin: 'auto' }}
				/>
				<p>{this.props.t('or')}</p>
				<div
					onDrop={this.onFileDrop}
					onDragOver={this.ignoreDrag}
					onDragEnd={this.ignoreDrag}
					style={{
						minHeight: '150px',
						width: '250px',
						border: '1px solid blue',
						padding: '10px'
					}}
				>
					<span>{this.props.t('drop-file')}</span>
				</div>
				<CheckboxInput
					legend={this.props.t('first-row-names')}
					defaultValue={true}
					onChange={( value ) => {
						this.setState({
							header: value
						});
					}}
				/>
				{ this.state.uploading ?
					<ProgressBar now={completed} label={`${completed}%`} /> :
					null
				}
			</Card.Body>
		</Card> );
	}
}


// PROPERTIES //

SpreadsheetUpload.defaultProps = {
	onUpload() {},
	title: null
};

SpreadsheetUpload.propTypes = {
	onUpload: PropTypes.func,
	title: PropTypes.string
};

SpreadsheetUpload.contextType = SessionContext;


// EXPORTS //

export default withTranslation( 'SpreadsheetUpload' )( SpreadsheetUpload );
