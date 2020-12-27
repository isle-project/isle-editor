/*
* Adapted from: https://github.com/chanzuckerberg/czi-prosemirror/blob/master/src/ui/ImageURLEditor.js
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

import React from 'react';
import { i18n } from '@isle-project/locales';
import CustomButton from './custom_button.js';
import preventEventDefault from './prevent_event_default.js';
import resolveImage from './resolve_image.js';
import './form.css';
import './image_url_editor.css';


// MAIN //

class ImageURLEditor extends React.PureComponent {
	constructor( props ) {
		super( props );

		this._img = null;
		this._unmounted = false;

		this.state = {
			...(this.props.initialValue || {}),
			validValue: null
		};
	}

	componentWillUnmount() {
		this._unmounted = true;
	}

	_onSrcChange = (e) => {
		const src = e.target.value;
		this.setState(
			{
				src,
				validValue: null
			},
			this._didSrcChange
		);
	};

	_didSrcChange = () => {
		resolveImage(this.state.src).then(result => {
			if (this.state.src === result.src && !this._unmounted) {
				const validValue = result.complete ? result : null;
				this.setState({ validValue });
			}
		});
	};

	_cancel = () => {
		this.props.close();
	};

	_insert = () => {
		const { validValue } = this.state;
		this.props.close(validValue);
	};

	render() {
		const { src, validValue } = this.state;
		const preview = validValue ? (
			<div
				className="editor-image-url-editor-input-preview"
				style={{
					backgroundImage: `url(${String(validValue.src)}`
				}}
			/>
		) : null;

		return (
			<div className="editor-image-url-editor">
				<form className="editor-form" onSubmit={preventEventDefault}>
					<fieldset>
						<legend>{i18n.t('TextEditor:insert-image')}</legend>
						<div className="editor-image-url-editor-src-input-row">
							<input
								autoFocus={true} // eslint-disable-line jsx-a11y/no-autofocus
								className="editor-image-url-editor-src-input"
								onChange={this._onSrcChange}
								placeholder="Paste URL of Image..."
								type="text"
								value={src || ''}
							/>
							{preview}
						</div>
						<em>
							{i18n.t('TextEditor:require-license')}
						</em>
					</fieldset>
					<div className="editor-form-buttons">
						<CustomButton label={i18n.t('TextEditor:cancel')} onClick={this._cancel} />
						<CustomButton
							active={!!validValue}
							disabled={!validValue}
							label={i18n.t('TextEditor:insert')}
							onClick={this._insert}
						/>
					</div>
				</form>
			</div>
		);
	}
}


// EXPORTS //

export default ImageURLEditor;
