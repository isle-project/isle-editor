/*
* Adapted from: https://github.com/chanzuckerberg/czi-prosemirror/blob/master/src/ui/PopUp.js
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
import PopUpManager from './popup_manager.js';
import { atAnchorBottomLeft, atViewportCenter } from './popup_position.js';
import generateUID from '@isle-project/utils/uid/incremental';


// VARIABLES //

const uuid = generateUID( 'popup' );


// MAIN //

class PopUp extends React.PureComponent {
	constructor( props ) {
		super( props );

		this._bridge = null;
		this._id = uuid();
	}

	componentDidMount() {
		this._bridge = { getDetails: this._getDetails };
		PopUpManager.register(this._bridge);
	}

	componentWillUnmount() {
		if ( this._bridge ) {
			PopUpManager.unregister( this._bridge );
		}
	}

	_getDetails = () => {
		const { close, popUpParams } = this.props;
		const { anchor, autoDismiss, position, modal } = popUpParams;
		return {
			anchor,
			autoDismiss: autoDismiss === false ? false : true,
			body: document.getElementById( this._id ),
			close,
			modal: modal === true,
			position: position || ( modal ? atViewportCenter : atAnchorBottomLeft )
		};
	};

	render() {
		const dummy = {};
		const { View, viewProps, close } = this.props;
		return (
			<div data-pop-up-id={this._id} id={this._id} >
				<View {...viewProps || dummy} close={close} />
			</div>
		);
	}
}


// EXPORTS //

export default PopUp;
