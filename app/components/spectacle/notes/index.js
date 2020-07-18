/*
* The MIT License (MIT)
*
* Copyright (c) 2013-2018 Formidable Labs, Inc.
*
* Copyright (c) 2016-2018 Zachary Maybury, Kylie Stewart, and potentially other
* DefinitelyTyped contributors
*
* Permission is hereby granted, free of charge, to any person obtaining a copy of
* this software and associated documentation files (the "Software"), to deal in
* the Software without restriction, including without limitation the rights to
* use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
* the Software, and to permit persons to whom the Software is furnished to do so,
* subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
* FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
* COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
* IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
* CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

// MODULES //

import { Component } from 'react';
import PropTypes from 'prop-types';


// MAIN //

class Notes extends Component {
	static propTypes = {
		children: PropTypes.node.isRequired
	}

	static contextTypes = {
		store: PropTypes.object,
		slideHash: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
		updateNotes: PropTypes.func
	}

	componentDidMount() {
		const { store, slideHash: parentSlide, updateNotes } = this.context;
		const currentSlide = store.getState().route.slide;

		// updateNotes is only defined when this component is wrapped in
		// a Presenter.
		// Also, the type of parentSlide is either string or number based
		// on the parent slide having an id or not.
		if ( updateNotes && currentSlide === `${parentSlide}` ) {
			updateNotes( this.props.children );
		}
	}

	render() {
		return false;
	}
}


// EXPORTS //

/**
* Spectacle presentation slide notes.
*/
export default Notes;
