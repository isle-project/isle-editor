// MODULES //

import React, { useCallback, useContext, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';
import csv from 'csvtojson';
import round from '@stdlib/math/base/special/round';
import SessionContext from '@isle-project/session/context.js';
import CheckboxInput from '@isle-project/components/input/checkbox';
import { withPropCheck } from '@isle-project/utils/prop-check';


// FUNCTIONS //

/**
* Event handler ignoring default dragging behavior and preventing bubbling-up.
*/
function ignoreDrag( evt ) {
	evt.stopPropagation();
	evt.preventDefault();
}


// MAIN //

/**
* Component allowing students upload a *.csv spreadsheet.
*
* @property {(string|node)} title - card title
* @property {Function} onUpload - callback function called with ( err, output ) after loading of file
*/
const SpreadsheetUpload = ({ title, onUpload }) => {
	const [ percentCompleted, setPercentCompleted ] = useState( 0 );
	const [ uploading, setUploading ] = useState( false );
	const [ header, setHeader ] = useState( true );
	const { t } = useTranslation( 'spreadsheet-upload' );
	const session = useContext( SessionContext );
	const fileUpload = useRef( null );

	/**
	* Event handler invoked once student-supplied CSV file has been uploaded. Parses the file and extracts its categorical and quantitative variables.
	*/
	const onFileRead = useCallback( ( event ) => {
		const text = event.target.result;
		setPercentCompleted( 0 );
		setUploading( false );
		csv({
			noheader: !header,
			checkType: true,
			ignoreEmpty: true
		})
			.fromString( text )
			.then( ( output ) => {
				onUpload( null, output );
			})
			.catch( ( err ) => {
				session.addNotification({
					title: t('error-title'),
					message: `${t('error-message')}: ${err.message}`,
					level: 'error',
					position: 'tr'
				});
				onUpload( err );
			});
	}, [ header, session, onUpload, t ] );

	/**
	* Creates FileReader and attaches event listener for when the file is ready.
	*/
	const handleFileUpload = useCallback( () => {
		setUploading( true );
		const reader = new FileReader();
		const selectedFile = fileUpload.current.files[ 0 ];
		reader.addEventListener( 'load', onFileRead, false );
		reader.addEventListener( 'progress', ( event ) => {
			if ( event.lengthComputable ) {
				const percentage = event.loaded / event.total;
				setPercentCompleted( percentage );
			}
		}, false );
		reader.readAsText( selectedFile, 'utf-8' );
	}, [ onFileRead ] );

	/**
	* Event handler invoked when user drags CSV file onto the upload area.
	*/
	const onFileDrop = useCallback( ( evt ) => {
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
				return session.addNotification({
					title: t('no-csv'),
					message: t('no-csv-message'),
					level: 'error',
					position: 'tr'
				});
			}
			reader.addEventListener( 'load', onFileRead, false );
			reader.readAsText( file, 'utf-8' );
		}
	}, [ session, onFileRead, t ] );

	const handleHeaderChange = useCallback( ( value ) => {
		setHeader( value );
	}, [] );

	const completed = round( percentCompleted * 100.0 );
	return ( <Card>
		<Card.Header as="h2" >
			{title || t('title')}
		</Card.Header>
		<Card.Body>
			<label htmlFor="CSVUpload">{t('csv-upload-prompt')}:</label>
			<input
				id="CSVUpload"
				type="file"
				accept=".csv"
				onChange={handleFileUpload}
				ref={fileUpload}
				style={{ margin: 'auto' }}
			/>
			<p>{t('or')}</p>
			<div
				onDrop={onFileDrop}
				onDragOver={ignoreDrag}
				onDragEnd={ignoreDrag}
				style={{
					minHeight: '150px',
					width: '250px',
					border: '1px solid blue',
					padding: '10px'
				}}
			>
				<span>{t('drop-file')}</span>
			</div>
			<CheckboxInput
				legend={t('first-row-names')}
				defaultValue={true}
				onChange={handleHeaderChange}
			/>
			{ uploading ?
				<ProgressBar
					aria-label={t('csv-upload-progress')}
					now={completed}
					label={`${completed}%`}
				/> :
				null
			}
		</Card.Body>
	</Card> );
};


// PROPERTIES //

SpreadsheetUpload.defaultProps = {
	onUpload() {},
	title: null
};

SpreadsheetUpload.propTypes = {
	onUpload: PropTypes.func,
	title: PropTypes.oneOfType( [ PropTypes.string, PropTypes.node ] )
};


// EXPORTS //

export default withPropCheck( SpreadsheetUpload );
