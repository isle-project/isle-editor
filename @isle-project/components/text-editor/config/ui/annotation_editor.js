/*
* Adapted from: https://github.com/chanzuckerberg/czi-prosemirror/blob/master/src/ui/AAnn.js
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
import FormControl from 'react-bootstrap/FormControl';
import CustomButton from './custom_button.js';
import preventEventDefault from './prevent_event_default.js';
import './form.css';
import './image_url_editor.css';


// VARIABLES //

const ENTER_KEYCODE = 13;


// MAIN //

class AnnotationEditor extends React.PureComponent {
	state = {
		annotation: ''
	};

	_onKeyDown = ( e ) => {
		if ( e.keyCode === ENTER_KEYCODE ) {
			e.preventDefault();
			this._apply();
		}
	};

	_onTextChange = ( e ) => {
		const annotation = e.target.value;
		this.setState({
			annotation
		});
	};

	_cancel = () => {
		this.props.close();
	};

	_apply = () => {
		this.props.close( this.state.annotation );
	};

	render() {
		const { annotation } = this.state;
		return (
			<div className="annotation-editor" >
				<form className="editor-form" onSubmit={preventEventDefault}>
					<fieldset>
						<legend>{i18n.t('text-editor:annotation-text')}</legend>
						<FormControl
							autoFocus={true} // eslint-disable-line jsx-a11y/no-autofocus
							onChange={this._onTextChange}
							onKeyDown={this._onKeyDown}
							placeholder={i18n.t('text-editor:enter-annotation')}
							spellCheck={false}
							as="textarea"
							rows={5}
							value={annotation || ''}
							style={{ marginBottom: 20 }}
						/>
					</fieldset>
					<div className="editor-form-buttons">
						<CustomButton label={i18n.t('text-editor:cancel')} onClick={this._cancel} />
						<CustomButton
							active={true}
							disabled={annotation.length === 0}
							label={i18n.t('text-editor:submit')}
							onClick={this._apply}
						/>
					</div>
				</form>
			</div>
		);
	}
}


// EXPORTS //

export default AnnotationEditor;
