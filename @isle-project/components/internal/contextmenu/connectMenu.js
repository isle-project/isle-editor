/**
* The MIT License (MIT)
*
* Copyright (c) 2015 Vivek Kumar Bansal
*
* Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

// MODULES //

import React, { Component } from 'react';
import listener from './globalEventListener';


// VARIABLES //

const ignoredTriggerProps = [
	'id', 'children', 'attributes', 'collect', 'disable', 'holdToDisplay',
	'posX', 'posY', 'renderTag', 'mouseButton', 'disableIfShiftIsPressed'
];


// EXPORTS //

// expect the id of the menu to be responsible for as outer parameter
export default function connectToMenu(menuId) {
	// expect menu component to connect as inner parameter
	// <Child/> is presumably a wrapper of <ContextMenu/>
	return function connect(Child) {
		// return wrapper for <Child/> that forwards the ContextMenuTrigger's additional props
		return class ConnectMenu extends Component {
			constructor(props) {
				super(props);
				this.state = { trigger: null };
			}

			componentDidMount() {
				this.listenId = listener.register(this.handleShow, this.handleHide);
			}

			componentWillUnmount() {
				if ( this.listenId ) {
					listener.unregister( this.listenId );
				}
			}

			handleShow = (e) => {
				if (e.detail.id !== menuId) return;

				// the onShow event's detail.data object holds all ContextMenuTrigger props
				const { data } = e.detail;
				const filteredData = {};

				for (const key in data) {
					// exclude props the ContextMenuTrigger is expecting itself
					if (!ignoredTriggerProps.includes(key)) {
						filteredData[key] = data[key];
					}
				}
				this.setState({ trigger: filteredData });
			};

			handleHide = () => {
				this.setState({ trigger: null });
			};

			render() {
				return <Child {...this.props} id={menuId} trigger={this.state.trigger} />;
			}
		};
	};
}
