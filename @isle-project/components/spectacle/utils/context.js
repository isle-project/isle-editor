/* eslint-disable react/require-default-props */

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

import React, { Component } from 'react';
import PropTypes from 'prop-types';


// VARIABLES //

export const SpectacleContext = React.createContext( 'spectacle-context' );


// MAIN //

class Context extends Component {
	render() {
		const { history, onStateChange, styles, route, fragments, notes, updateNotes, contentHeight, contentWidth, addFragment, updateFragment } = this.props;
		const value = {
			history,
			onStateChange,
			route,
			styles,
			fragments,
			notes,
			updateNotes,
			contentHeight,
			contentWidth,
			addFragment,
			updateFragment
		};
		return (
			<SpectacleContext.Provider value={value} >
				{this.props.children}
			</SpectacleContext.Provider>
		);
	}
}


// PROPERTIES //

Context.propTypes = {
	children: PropTypes.node,
	fragments: PropTypes.object,
	history: PropTypes.object,
	onStateChange: PropTypes.func,
	contentHeight: PropTypes.number,
	contentWidth: PropTypes.number,
	notes: PropTypes.object,
	route: PropTypes.object,
	styles: PropTypes.object
};


// EXPORTS //

export default Context;
