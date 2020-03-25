// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Tooltip from 'components/tooltip';
import VideoChat from 'components/video-chat';
import Gate from 'components/gate';
import SessionContext from 'session/context.js';
import { REMOVED_CHAT, SELF_HAS_JOINED_CHAT, SELF_HAS_LEFT_CHAT } from 'constants/events.js';


// MAIN //

/**
* A button for joining and leaving video chats.
*
* @property {string} for - chat room identifier
* @property {boolean} showTooltip - controls whether to show tooltip
* @property {string} size - button size
* @property {string} tooltipPlacement - position of button tooltip
* @property {Object} style - CSS inline styles
*/
class VideoChatButton extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			opened: false
		};
	}

	componentDidMount() {
		const session = this.context;
		this.unsubscribe = session.subscribe( ( type, value ) => {
			if (
				( type === SELF_HAS_JOINED_CHAT ) &&
				( value && value.name === this.props.for )
			) {
				this.setState({
					opened: true
				});
			}
			else if ( value === this.props.for ) {
				if ( type === SELF_HAS_LEFT_CHAT ) {
					this.setState({
						opened: false
					});
				}
				else if ( type === REMOVED_CHAT ) {
					this.setState({
						opened: false
					});
				}
				this.forceUpdate();
			}
		});
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	toggleVideoChat = () => {
		this.setState({
			opened: !this.state.opened
		});
	}

	render() {
		let button = <Button
			variant={this.state.openened ? 'success' : 'secondary'}
			size={this.props.size}
			onClick={this.toggleVideoChat}
			style={this.props.style}
		>
			<span style={{ pointerEvents: 'none' }} >{this.state.opened ? 'Leave Video' : 'Join Video' }</span>
		</Button>;
		if ( this.props.showTooltip ) {
			button = <Tooltip
				tooltip={`${this.state.opened ? 'Leave' : 'Join'} video chat with ID ${this.props.for}`}
				placement={this.props.tooltipPlacement}
			>
				{button}
			</Tooltip>;
		}
		return (
			<Gate user >
				{button}
				{this.state.opened ? <VideoChat
					roomName={this.props.for}
					roomSubject={this.props.subject || this.props.for}
					onHide={this.toggleVideoChat}
				/> : null}
			</Gate>
		);
	}
}


// PROPERTIES //

VideoChatButton.propTypes = {
	for: PropTypes.string.isRequired,
	subject: PropTypes.string,
	showTooltip: PropTypes.bool,
	size: PropTypes.string,
	tooltipPlacement: PropTypes.oneOf([ 'left', 'top', 'right', 'bottom' ]),
	style: PropTypes.object
};

VideoChatButton.defaultProps = {
	subject: null,
	showTooltip: true,
	size: 'sm',
	tooltipPlacement: 'top',
	style: {}
};

VideoChatButton.contextType = SessionContext;


// EXPORTS //

export default VideoChatButton;
