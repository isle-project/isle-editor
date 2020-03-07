/*
* Adapted from: https://github.com/chanzuckerberg/czi-prosemirror/blob/master/src/ui/LinkURLEditor.js
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
import sanitizeURL from './../sanitize_url.js';
import CustomButton from './custom_button.js';
import preventEventDefault from './prevent_event_default.js';
import './image_url_editor.css';
import './form.css';


// VARIABLES //

const BAD_CHARACTER_PATTERN = /\s/;
const ENTER_KEYCODE = 13;


// MAIN //

class LinkURLEditor extends React.PureComponent {
	state = {
		url: this.props.href
	};

	_onKeyDown = ( e ) => {
		if ( e.keyCode === ENTER_KEYCODE ) {
			e.preventDefault();
			this._apply();
		}
	};

	_onURLChange = ( e ) => {
		const url = e.target.value;
		this.setState({
			url
		});
	};

	_cancel = () => {
		this.props.close();
	};

	_apply = () => {
		const { url } = this.state;
		if ( url && !BAD_CHARACTER_PATTERN.test( url ) ) {
			this.props.close( sanitizeURL( url ) );
		}
	};

	render() {
		const { href } = this.props;
		const { url } = this.state;
		const error = url ? BAD_CHARACTER_PATTERN.test( url ) : false;

		let label = 'Apply';
		let disabled = !!error;
		if (href) {
			label = url ? 'Apply' : 'Remove';
			disabled = error;
		} else {
			disabled = error || !url;
		}
		return (
			<div className="image-url-editor">
				<form className="editor-form" onSubmit={preventEventDefault}>
					<fieldset>
						<legend>Add a Link</legend>
						<input
							autoFocus={true} // eslint-disable-line jsx-a11y/no-autofocus
							onChange={this._onURLChange}
							onKeyDown={this._onKeyDown}
							placeholder="Paste a URL"
							spellCheck={false}
							type="text"
							value={url || ''}
						/>
					</fieldset>
					<div className="editor-form-buttons">
						<CustomButton label="Cancel" onClick={this._cancel} />
						<CustomButton
							active={true}
							disabled={disabled}
							label={label}
							onClick={this._apply}
						/>
					</div>
				</form>
			</div>
		);
	}
}


// EXPORTS //

export default LinkURLEditor;
