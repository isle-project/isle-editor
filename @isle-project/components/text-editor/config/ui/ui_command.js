/*
* Adapted from: https://github.com/chanzuckerberg/czi-prosemirror/blob/master/src/ui/UICommand.js
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

/* eslint-disable class-methods-use-this */

// MODULES //

import { Transform } from 'prosemirror-transform';


// VARIABLES //

const EventType = {
	CLICK: 'mouseup',
	MOUSEENTER: 'mouseenter'
};


// FUNCTIONS //

function dryRunEditorStateProxyGetter(
	state,
	propKey
) {
	const val = state[propKey];
	if (propKey === 'tr' && val instanceof Transform) {
		return val.setMeta('dryrun', true);
	}
	return val;
}

function dryRunEditorStateProxySetter(
	state,
	propKey,
	propValue
) {
	state[propKey] = propValue;
	// Indicate success
	return true;
}

class UICommand {
	static EventType = EventType;

	shouldRespondToUIEvent = (e) => {
		return e.type === UICommand.EventType.CLICK;
	};

	active = (state) => {
		return false;
	};

	enable = (state, view) => {
		return this.dryRun(state, view);
	};

	dryRun = (state, view) => {
		const { Proxy } = window;
		const dryRunState = Proxy ? new Proxy(state, {
			get: dryRunEditorStateProxyGetter,
			set: dryRunEditorStateProxySetter
		}) : state;

		return this.run(dryRunState, null, view);
	};

	run = (
		state,
		dispatch,
		view,
		event
	) => {
		this.waitForUserInput( state, dispatch, view, event )
			.then(inputs => {
				this.executeWithUserInput(state, dispatch, view, inputs);
			})
			.catch( error => {
				console.error( error ); // eslint-disable-line no-console
			});
		return false;
	};

	waitForUserInput = (
		state,
		dispatch,
		view,
		EventType
	) => {
		return Promise.resolve( void 0 );
	};

	executeWithUserInput = (
		state,
		dispatch,
		view,
		inputs
	) => {
		return false;
	};

	/* eslint-disable-next-line */
	cancel() {
		// subclass should overwrite this.
	}
}


// EXPORTS //

export default UICommand;
