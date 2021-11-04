/*
* Adapted from: https://github.com/chanzuckerberg/czi-prosemirror/blob/master/src/ui/ImageUploadEditor.js
*
* MIT License
*
* Copyright (c) 2019 Chan Zuckerberg Initiative
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/

// MODULES //

import cx from 'classnames';
import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import CustomButton from './custom_button.js';
import { i18n } from '@isle-project/locales';
import generateUID from '@isle-project/utils/uid/incremental';
import loadBinaryImage from '@isle-project/utils/load-binary-image';
import './image_upload_editor.css';
import './form.css';


// VARIABLES //

const uid = generateUID( 'image-upload-editor' );


// MAIN //

class ImageUploadEditor extends React.PureComponent {
	constructor( props ) {
		super( props );

		this._img = null;
		this._unmounted = false;

		this.state = {
			error: null,
			id: uid(),
			pending: false
		};
	}

	componentWillUnmount() {
		this._unmounted = true;
	}

	_onSelectFile = ( event ) => {
		const file = event.target.files && event.target.files[ 0 ];
		if ( file && typeof file === 'object' ) {
			this._upload( file );
		}
	};

	_onSuccess = ( image ) => {
		if ( this._unmounted ) {
			return;
		}
		this.props.close( image );
	};

	_onError = ( error ) => {
		if ( this._unmounted ) {
			return;
		}
		this.setState({
			error,
			id: uid(),
			pending: false
		});
	};

	_upload = ( file ) => {
		this.setState({ pending: true, error: null });
		const session = global.session;
		if ( session.server && session.uploadFile ) {
			const formData = new FormData();
			formData.append( 'file', file );
			session.uploadFile({
				formData,
				callback: ( err, body ) => {
					if ( err ) {
						return this._onError( err );
					}
					if ( body && body.filename ) {
						return this._onSuccess({ src: session.server + '/' + body.filename });
					}
					return this._onSuccess({ src: null });
				},
				showNotification: false
			});
		} else {
			loadBinaryImage( file )
				.then( ( image ) => {
					this._onSuccess( image );
				})
				.catch( ( ex ) => {
					this._onError( ex );
				});
		}
	};

	_cancel = () => {
		this.props.close();
	};

	render() {
		const { id, error, pending } = this.state;
		const className = cx('editor-image-upload-editor', {
			pending, error
		});
		let label = i18n.t('text-editor:choose-an-image-file');

		if ( pending ) {
			label = <Spinner animation="border" role="status" />;
		} else if ( error ) {
			label = i18n.t('text-editor:error-while-uploading');
		}
		return (
			<div className={className}>
				<form className="editor-form">
					<fieldset>
						<legend>{i18n.t('text-editor:upload-image')}</legend>
						<div className="editor-image-upload-editor-body">
							<div className="editor-image-upload-editor-label">{label}</div>
							<input
								accept="image/png,image/gif,image/jpeg,image/jpg"
								className="editor-image-upload-editor-input"
								disabled={pending}
								id={id}
								key={id}
								onChange={this._onSelectFile}
								type="file"
							/>
						</div>
					</fieldset>
					<div className="editor-form-buttons">
						<CustomButton
							label={i18n.t('text-editor:cancel')}
							onClick={this._cancel}
						/>
					</div>
				</form>
			</div>
		);
	}
}


// EXPORTS //

export default ImageUploadEditor;
