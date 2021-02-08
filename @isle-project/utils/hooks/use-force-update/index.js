// Adapted from: https://github.com/mobxjs/mobx/blob/b3a993c7d44f5dbf1d757ce19b6fccf741d2ba64/packages/mobx-react-lite/src/utils/utils.ts

/**
* The MIT License (MIT)
*
* Copyright (c) 2015 Michel Weststrate
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

import { useState, useCallback } from 'react';


// MAIN //

function useForceUpdate() {
	const [ , setTick ] = useState( 0 );
	const update = useCallback( () => {
		setTick( tick => tick + 1 );
	}, [] );
	return update;
}


// EXPORTS //

export default useForceUpdate;

