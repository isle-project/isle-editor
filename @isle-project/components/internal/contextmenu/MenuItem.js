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
import PropTypes from 'prop-types';
import cx from 'classnames';
import { hideMenu } from './actions';
import { callIfExists, cssClasses, store } from './helpers';


// MAIN //

class MenuItem extends Component {
	static propTypes = {
		attributes: PropTypes.object,
		children: PropTypes.node,
		className: PropTypes.string,
		data: PropTypes.object,
		disabled: PropTypes.bool,
		divider: PropTypes.bool,
		onClick: PropTypes.func,
		onMouseLeave: PropTypes.func,
		onMouseMove: PropTypes.func,
		preventClose: PropTypes.bool,
		selected: PropTypes.bool
	};

	static defaultProps = {
		attributes: {},
		children: null,
		className: '',
		data: {},
		disabled: false,
		divider: false,
		onClick() { return null; },
		onMouseMove: () => null,
		onMouseLeave: () => null,
		preventClose: false,
		selected: false
	};

	handleClick = (event) => {
		if (event.button !== 0 && event.button !== 1) {
			event.preventDefault();
		}

		if (this.props.disabled || this.props.divider) return;

		callIfExists(
			this.props.onClick,
			event,
			Object.assign({}, this.props.data, store.data),
			store.target
		);

		if (this.props.preventClose) return;

		hideMenu();
	};

	render() {
		const {
			attributes,
			children,
			className,
			disabled,
			divider,
			selected
		} = this.props;

		const menuItemClassNames = cx(
			className,
			cssClasses.menuItem,
			attributes.className,
			{
				[cx(cssClasses.menuItemDisabled, attributes.disabledClassName)]: disabled,
				[cx(cssClasses.menuItemDivider, attributes.dividerClassName)]: divider,
				[cx(cssClasses.menuItemSelected, attributes.selectedClassName)]: selected
			}
		);

		/* eslint-disable jsx-a11y/click-events-have-key-events */
		return (
			<div
				{...attributes}
				className={menuItemClassNames}
				role='menuitem' tabIndex='-1'
				aria-disabled={disabled ? 'true' : 'false'}
				ref={(ref) => { this.ref = ref; }}
				onMouseMove={this.props.onMouseMove}
				onMouseLeave={this.props.onMouseLeave}
				onTouchEnd={this.handleClick}
				onClick={this.handleClick}
			>
				{divider ? null : children}
			</div>
		);
	}
}


// EXPORTS //

export default MenuItem;
