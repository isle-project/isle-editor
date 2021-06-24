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

import { useContext, useEffect, useRef } from 'react';
import Context from './context.js';


// MAIN //

const useMathJax = ( texCode, mathType = 'inline' ) => {
	const mathJaxElem = useRef( null );
	const { promiseMakers, setTypesetDone, triggerProcessing } = useContext(
		Context
	);
	useEffect( () => {
		const display = mathType === 'display';
		const elem = mathJaxElem.current;
		if ( typeof window !== 'undefined' ) {
			promiseMakers.current.push(() => {
				return window.MathJax.tex2chtmlPromise( texCode, {
					...window.MathJax.getMetricsFor( elem, display ),
					display
				}).then( ( node ) => {
					// add rendered nodes
					if ( node ) {
						elem.innerHTML = '';
						elem.appendChild( node );
					}
				});
			});
			// Trigger chain promise chain
			setTypesetDone( false );
			triggerProcessing();
		}
		return () => {
			if ( elem ) {
				elem.innerHTML = '';
			}
		};
	}, [
		mathJaxElem,
		mathType,
		promiseMakers,
		setTypesetDone,
		texCode,
		triggerProcessing
	]);
	return mathJaxElem;
};


// EXPORTS //

export default useMathJax;
