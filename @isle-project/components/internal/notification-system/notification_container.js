/**
* The MIT License (MIT)
*
* Copyright (c) 2015 Igor Prado
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in
* all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
* THE SOFTWARE.
*/

// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './notification_item.js';
import Constants from './constants.js';


// MAIN //

class NotificationContainer extends Component {
	constructor(props) {
		super(props);
		// Fix position if width is overwritten
		this._style = props.getStyles.container(props.position);
		if (
			props.getStyles.overrideWidth &&
			(props.position === Constants.positions.tc ||
				props.position === Constants.positions.bc)
		) {
			this._style.marginLeft = -(props.getStyles.overrideWidth / 2);
		}
	}

	render() {
		var notifications;

		if (
			[
				Constants.positions.bl,
				Constants.positions.br,
				Constants.positions.bc
			].indexOf(this.props.position) > -1
		) {
			this.props.notifications.reverse();
		}

		notifications = this.props.notifications.map((notification) => {
			return (
				<NotificationItem
					ref={'notification-' + notification.uid}
					key={notification.uid}
					notification={notification}
					getStyles={this.props.getStyles}
					onRemove={this.props.onRemove}
					noAnimation={this.props.noAnimation}
					allowHTML={this.props.allowHTML}
					children={this.props.children}
				/>
			);
		});

		return (
			<div
				className={'notifications-' + this.props.position}
				style={this._style}
			>
				{notifications}
			</div>
		);
	}
}


// PROPERTIES //

NotificationContainer.propTypes = {
	position: PropTypes.string.isRequired,
	notifications: PropTypes.array.isRequired,
	getStyles: PropTypes.object.isRequired,
	onRemove: PropTypes.func.isRequired,
	noAnimation: PropTypes.bool,
	allowHTML: PropTypes.bool
};

NotificationContainer.defaultProps = {
	noAnimation: false,
	allowHTML: false
};


// EXPORTS //

export default NotificationContainer;
