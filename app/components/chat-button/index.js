// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Tooltip from 'components/tooltip';
import Gate from 'components/gate';
import SessionContext from 'session/context.js';
import { CHAT_HISTORY, CHAT_MESSAGE, OWN_CHAT_MESSAGE, REMOVED_CHAT,
	SELF_HAS_JOINED_CHAT, SELF_HAS_LEFT_CHAT } from 'constants/events.js';


// VARIABLES //

const debug = logger( 'isle:chat-button' );


// MAIN //

/**
* A button for joining and leaving chat rooms.
*
* @property {string} for - chat room identifier
* @property {boolean} showTooltip - controls whether to show tooltip
* @property {string} size - button size
* @property {string} tooltipPlacement - position of button tooltip
* @property {Object} style - CSS inline styles
*/
class ChatButton extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			opened: false,
			nMessages: 0
		};
	}

	componentDidMount() {
		const session = this.context;
		this.unsubscribe = session.subscribe( ( type, value ) => {
			if (
				( type === SELF_HAS_JOINED_CHAT || type === CHAT_HISTORY ) &&
				value.name === this.props.for
			) {
				this.setState({
					opened: true,
					nMessages: value.messages.length
				});
			}
			else if ( value === this.props.for ) {
				const chat = session.getChat( this.props.for );
				if ( !chat || type === SELF_HAS_LEFT_CHAT ) {
					this.setState({
						opened: false
					});
				}
				else if ( type === CHAT_MESSAGE ) {
					this.setState({
						nMessages: this.state.nMessages + 1
					});
				}
				else if ( type === OWN_CHAT_MESSAGE ) {
					this.setState({
						nMessages: this.state.nMessages + 1
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

	handleClick = () => {
		debug( 'Handle click to join chat...' );
		const session = this.context;
		let opened = this.state.opened;
		this.setState({
			opened: !opened
		}, () => {
			if ( !opened ) {
				debug( `Should join chat for component with id '${this.props.for}'...` );
				session.joinChat( this.props.for );
			} else {
				debug( `Should leave chat for component with id '${this.props.for}'...` );
				session.leaveChat( this.props.for );
			}
		});
	}

	render() {
		const nMessages = this.state.nMessages;
		let button = <Button
			variant="secondary"
			size={this.props.size}
			onClick={this.handleClick}
			style={this.props.style}
		>
			<span style={{ pointerEvents: 'none' }} >{this.state.opened ? 'Leave Chat' : 'Join Chat' }</span>
			{ nMessages ? <Badge variant="dark" style={{ marginLeft: '5px', fontSize: '10px', pointerEvents: 'none' }}>{nMessages}</Badge> : null }
		</Button>;
		if ( this.props.showTooltip ) {
			button = <Tooltip
				tooltip={`${this.state.opened ? 'Leave' : 'Join'} chat with ID ${this.props.for}`}
				placement={this.props.tooltipPlacement}
			>
				{button}
			</Tooltip>;
		}
		return (
			<Gate user>
				{button}
			</Gate>
		);
	}
}


// PROPERTIES //

ChatButton.propTypes = {
	for: PropTypes.string.isRequired,
	showTooltip: PropTypes.bool,
	size: PropTypes.string,
	tooltipPlacement: PropTypes.oneOf([ 'left', 'top', 'right', 'bottom' ]),
	style: PropTypes.object
};

ChatButton.defaultProps = {
	showTooltip: true,
	size: 'sm',
	tooltipPlacement: 'top',
	style: {}
};

ChatButton.contextType = SessionContext;


// EXPORTS //

export default ChatButton;
