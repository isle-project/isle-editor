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

/* eslint-disable react/no-danger */

// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Constants from './constants.js';
import Helpers from './helpers.js';


// FUNCTIONS //

/* From Modernizr */
function whichTransitionEvent() {
	var el = document.createElement('fakeelement');
	var transition;
	var transitions = {
		transition: 'transitionend',
		OTransition: 'oTransitionEnd',
		MozTransition: 'transitionend',
		WebkitTransition: 'webkitTransitionEnd'
	};

	Object.keys(transitions).forEach( function onTransition(transitionKey) {
		if ( el.style[transitionKey] !== void 0 ) {
			transition = transitions[transitionKey];
		}
	});

	return transition;
}

function _allowHTML(string) {
	return { __html: string };
}

// MAIN //

class NotificationItem extends Component {
	constructor(props) {
		super(props);
		this._notificationTimer = null;
		this._height = 0;
		this._noAnimation = null;
		this._isMounted = false;
		this._removeCount = 0;

		this.state = {
			visible: void 0,
			removed: false
		};

		const getStyles = props.getStyles;
		const level = props.notification.level;
		const dismissible = props.notification.dismissible;

		this._noAnimation = props.noAnimation;

		this._styles = {
			notification: getStyles.byElement('notification')(level),
			title: getStyles.byElement('title')(level),
			dismiss: getStyles.byElement('dismiss')(level),
			messageWrapper: getStyles.byElement('messageWrapper')(level),
			actionWrapper: getStyles.byElement('actionWrapper')(level),
			action: getStyles.byElement('action')(level)
		};

		if ( !dismissible || dismissible === 'none' || dismissible === 'button' ) {
			this._styles.notification.cursor = 'default';
		}
		this._getCssPropertyByPosition = this._getCssPropertyByPosition.bind(this);
		this._defaultAction = this._defaultAction.bind(this);
		this._hideNotification = this._hideNotification.bind(this);
		this._removeNotification = this._removeNotification.bind(this);
		this._dismiss = this._dismiss.bind(this);
		this._showNotification = this._showNotification.bind(this);
		this._onTransitionEnd = this._onTransitionEnd.bind(this);
		this._handleMouseEnter = this._handleMouseEnter.bind(this);
		this._handleMouseLeave = this._handleMouseLeave.bind(this);
		this._handleNotificationClick = this._handleNotificationClick.bind(this);
	}

	_getCssPropertyByPosition() {
		var position = this.props.notification.position;
		var css = {};

		switch (position) {
		case Constants.positions.tl:
		case Constants.positions.bl:
			css = {
				property: 'left',
				value: -200
			};
			break;

		case Constants.positions.tr:
		case Constants.positions.br:
			css = {
				property: 'right',
				value: -200
			};
			break;

		case Constants.positions.tc:
			css = {
				property: 'top',
				value: -100
			};
			break;

		case Constants.positions.bc:
			css = {
				property: 'bottom',
				value: -100
			};
			break;

		default:
		}

		return css;
	}

	_defaultAction(event) {
		var notification = this.props.notification;

		event.preventDefault();
		this._hideNotification();
		if (typeof notification.action.callback === 'function') {
			notification.action.callback();
		}
	}

	_hideNotification() {
		if (this._notificationTimer) {
			this._notificationTimer.clear();
		}

		if (this._isMounted) {
			this.setState({
				visible: false,
				removed: true
			});
		}

		if (this._noAnimation) {
			this._removeNotification();
		}
	}

	_removeNotification() {
		this.props.onRemove(this.props.notification.uid);
	}

	_dismiss() {
		if (!this.props.notification.dismissible) {
			return;
		}

		this._hideNotification();
	}

	_showNotification() {
		setTimeout(() => {
			if (this._isMounted) {
				this.setState({
					visible: true
				});
			}
		}, 50);
	}

	_onTransitionEnd() {
		if (this._removeCount > 0) return;
		if (this.state.removed) {
			this._removeCount += 1;
			this._removeNotification();
		}
	}

	componentDidMount() {
		var self = this;
		var transitionEvent = whichTransitionEvent();
		var notification = this.props.notification;
		var element = ReactDOM.findDOMNode(this);

		this._height = element.offsetHeight;

		this._isMounted = true;

		// Watch for transition end
		if (!this._noAnimation) {
			if (transitionEvent) {
				element.addEventListener(transitionEvent, this._onTransitionEnd);
			} else {
				this._noAnimation = true;
			}
		}

		if (notification.autoDismiss) {
			this._notificationTimer = new Helpers.Timer(function onTimeOut() {
				self._hideNotification();
			}, notification.autoDismiss * 1000);
		}

		this._showNotification();
	}

	_handleMouseEnter() {
		var notification = this.props.notification;
		if (notification.autoDismiss) {
			this._notificationTimer.pause();
		}
	}

	_handleMouseLeave() {
		var notification = this.props.notification;
		if (notification.autoDismiss) {
			this._notificationTimer.resume();
		}
	}

	_handleNotificationClick() {
		var dismissible = this.props.notification.dismissible;
		if (
			dismissible === 'both' ||
			dismissible === 'click' ||
			dismissible === true
		) {
			this._dismiss();
		}
	}

	componentWillUnmount() {
		var element = ReactDOM.findDOMNode(this);
		var transitionEvent = whichTransitionEvent();
		element.removeEventListener(transitionEvent, this._onTransitionEnd);
		this._isMounted = false;
	}

	render() {
		var notification = this.props.notification;
		var className = 'notification notification-' + notification.level;
		var notificationStyle = Object.assign({}, this._styles.notification);
		var cssByPos = this._getCssPropertyByPosition();
		var dismiss = null;
		var actionButton = null;
		var title = null;
		var message = null;

		if (this.props.notification.className) {
			className += ' ' + this.props.notification.className;
		}

		if (this.state.visible) {
			className += ' notification-visible';
		} else if (this.state.visible === false) {
			className += ' notification-hidden';
		}

		if (notification.dismissible === 'none') {
			className += ' notification-not-dismissible';
		}

		if (this.props.getStyles.overrideStyle) {
			if (!this.state.visible && !this.state.removed) {
				notificationStyle[cssByPos.property] = cssByPos.value;
			}

			if (this.state.visible && !this.state.removed) {
				notificationStyle.height = this._height;
				notificationStyle[cssByPos.property] = 0;
			}

			if (this.state.removed) {
				notificationStyle.overlay = 'hidden';
				notificationStyle.height = 0;
				notificationStyle.marginTop = 0;
				notificationStyle.paddingTop = 0;
				notificationStyle.paddingBottom = 0;
			}

			if (this._styles.notification.isVisible && this._styles.notification.isHidden) {
				notificationStyle.opacity = this.state.visible ?
					this._styles.notification.isVisible.opacity :
					this._styles.notification.isHidden.opacity;
			}
		}

		if (notification.title) {
			title = (
				<h4 className="notification-title" style={this._styles.title}>
					{notification.title}
				</h4>
			);
		}

		if (notification.message) {
			if (this.props.allowHTML) {
				message = (
					<div
						className="notification-message"
						style={this._styles.messageWrapper}
						dangerouslySetInnerHTML={_allowHTML(notification.message)}
					/>
				);
			} else {
				message = (
					<div
						className="notification-message"
						style={this._styles.messageWrapper}
					>
						{notification.message}
					</div>
				);
			}
		}

		if (
			notification.dismissible === 'both' ||
			notification.dismissible === 'button' ||
			notification.dismissible === true
		) {
			dismiss = (
				<span
					className="notification-dismiss"
					onClick={this._dismiss}
					style={this._styles.dismiss}
					aria-hidden={true}
				>
					&times;
				</span>
			);
		}

		if (notification.action) {
			actionButton = (
				<div
					className="notification-action-wrapper"
					style={this._styles.actionWrapper}
				>
					<button
						className="notification-action-button"
						onClick={this._defaultAction}
						style={this._styles.action}
					>
						{notification.action.label}
					</button>
				</div>
			);
		}

		if ( notification.children ) {
			actionButton = notification.children;
		}
		/* eslint-disable jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events */
		return (
			<div
				className={className}
				onClick={this._handleNotificationClick}
				onMouseEnter={this._handleMouseEnter}
				onMouseLeave={this._handleMouseLeave}
				style={notificationStyle}
				role="alert"
			>
				{title}
				{message}
				{dismiss}
				{actionButton}
			</div>
		);
		/* eslint-enable jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events */
	}
}


// PROPERTIES //

NotificationItem.propTypes = {
	notification: PropTypes.object.isRequired,
	getStyles: PropTypes.object.isRequired,
	onRemove: PropTypes.func,
	allowHTML: PropTypes.bool,
	noAnimation: PropTypes.bool
};

NotificationItem.defaultProps = {
	noAnimation: false,
	onRemove() {},
	allowHTML: false
};


// EXPORTS //

export default NotificationItem;
