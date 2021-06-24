/**
* Adapted from: https://gitlab.tu-berlin.de/innodoc/react-mathjax-node
*
* MIT License
*
* Copyright (c) 2019 Mirko Dietrich, TU Berlin
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

import React, { useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useDebouncedCallback } from 'use-debounce';
import Context from './context.js';
import useInitMathJax from './use_init_math_jax.js';


// FUNCTIONS //

const updateCss = () => {
	const chtmlStylesheet = window.MathJax.chtmlStylesheet();
	const existingChtmlStylesheet = document.getElementById( chtmlStylesheet.id );
	if ( existingChtmlStylesheet ) {
		existingChtmlStylesheet.parentNode.replaceChild(
			chtmlStylesheet,
			existingChtmlStylesheet
		);
	} else {
		document.getElementsByTagName('head')[0].appendChild( chtmlStylesheet );
	}
};

const Provider = ({ children }) => {
	// Using a chain of promises to orchestrate the flow of events.
	const promiseMakers = useRef( [] );
	// MathJax typesetting state. Can be used to show contents after typeset is done.
	const [typesetDone, setTypesetDone] = useState(false);
	// List of callbacks after *all* sub-tree MathJax elements have been typeset.
	const typesetCallbacks = useRef([]);
	const addCallback = useCallback((cb) => typesetCallbacks.current.push(cb), []);
	const removeCallback = useCallback(
		(cb) =>
			typesetCallbacks.current.splice(typesetCallbacks.current.indexOf(cb), 1),
		[]
	);
	// Load MathJax
	const initPromise = useInitMathJax();

	// Typeset when no new formulas were encountered.
	const triggerProcessing = useDebouncedCallback(() => {
		const runCallbacks = () => {
			while ( typesetCallbacks.current.length > 0 ) {
				typesetCallbacks.current.pop()();
			}
		};
		if ( promiseMakers.current.length > 0 ) {
			promiseMakers.current
				.reduce((chain, makePromise) => chain.then(makePromise), initPromise)
				.then(() => {
					promiseMakers.current = [];
					updateCss();
					setTypesetDone(true);
					runCallbacks();
				});
		} else {
			setTypesetDone(true);
			runCallbacks();
		}
	}, 100);
	useEffect(() => {
		// Case: Trigger typesetting in case no formulas were rendered.
		triggerProcessing();
	});
	const value = {
		addCallback,
		removeCallback,
		setTypesetDone,
		typesetDone,
		promiseMakers,
		triggerProcessing
	};
	console.log( value );
	return <Context.Provider value={value}>{children}</Context.Provider>;
};


// PROPERTIES //

Provider.propTypes = {
	children: PropTypes.node.isRequired
};


// EXPORTS //

export default Provider;
