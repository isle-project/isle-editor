// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import { withTranslation } from 'react-i18next';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Tooltip from '@isle-project/components/tooltip';
import Gate from '@isle-project/components/gate';
import SessionContext from '@isle-project/session/context.js';
import { RECEIVED_CHAT_HISTORY, CHAT_STATISTICS, REMOVED_CHAT,
	SELF_HAS_JOINED_CHAT, SELF_HAS_LEFT_CHAT } from '@isle-project/constants/events.js';


// VARIABLES //

const debug = logger( 'isle:chat-button' );


// MAIN //

/**
* A button for joining and leaving chat rooms.
*
* @property {string} for - chat room identifier
* @property {boolean} anonymousSubmissions - controls whether a button to submit messages anonymously should be displayed
* @property {(string|node)} buttonLabel - custom button label overriding the default one(s)
* @property {string} size - button size
* @property {string} buttonVariant - button variant
* @property {boolean} showTooltip - controls whether to show tooltip
* @property {(string|node)} tooltip - tooltip content
* @property {string} tooltipPlacement - position of button tooltip
* @property {string} className - class name
* @property {Object} style - CSS inline styles
* @property {Function} onClick - event handler invoked when join/leave button is clicked
*/
class ChatButton extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			opened: false,
			nMessages: 0,
			nMembers: 0
		};
	}

	componentDidMount() {
		const session = this.context;
		this.unsubscribe = session.subscribe( ( type, value ) => {
			if (
				( type === SELF_HAS_JOINED_CHAT || type === RECEIVED_CHAT_HISTORY ) &&
				( value && value.name === this.props.for )
			) {
				this.setState({
					opened: true
				});
			}
			else if ( type === CHAT_STATISTICS && value.name === this.props.for ) {
				const newState = {
					nMessages: value.nMessages,
					nMembers: value.nMembers
				};
				if ( value.nMessages > this.state.nMessages ) {
					newState.showAnimation = true;
				}
				this.setState( newState );
				setTimeout( this.hideAnimation, 4000 );
			}
			else if ( value === this.props.for ) {
				const chat = session.getChat( this.props.for );
				if ( !chat || type === SELF_HAS_LEFT_CHAT ) {
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

	hideAnimation = () => {
		this.setState({
			showAnimation: false
		});
	};

	handleClick = ( event ) => {
		debug( 'Handle click to join chat...' );
		const opened = !this.state.opened;
		this.props.onClick( event, opened );
		this.setState({
			opened
		}, () => {
			const session = this.context;
			if ( opened ) {
				debug( `Should join chat for component with id '${this.props.for}'...` );
				session.joinChat({ name: this.props.for, anonymousSubmissions: this.props.anonymousSubmissions });
			} else {
				debug( `Should leave chat for component with id '${this.props.for}'...` );
				session.leaveChat( this.props.for );
			}
		});
	};

	render() {
		const nMessages = this.state.nMessages;
		let label;
		let variant;
		if ( this.props.buttonLabel ) {
			label = this.props.buttonLabel;
		} else {
			label = this.state.opened ? this.props.t('leave-chat') : this.props.t('join-chat');
		}
		if ( this.props.buttonVariant ) {
			variant = this.props.buttonVariant;
		} else {
			variant = this.state.nMembers > 0 ? 'success' : 'secondary';
		}
		let button = <Button
			className={this.props.className}
			variant={variant}
			size={this.props.size}
			onClick={this.handleClick}
			style={this.props.style}
			aria-label={this.props.t('toggle-chat')}
		>
			<span style={{ pointerEvents: 'none' }} >
				{label}
			</span>
			{ nMessages ? <Badge
				bg="dark"
				style={{
					marginLeft: '5px',
					fontSize: '10px',
					pointerEvents: 'none',
					animation: this.state.showAnimation ? 'ping 0.7s 3' : 'none'
				}}
			>{nMessages}</Badge> : null }
		</Button>;
		let tooltip;
		if ( this.props.tooltip ) {
			tooltip = this.props.tooltip;
		} else {
			tooltip = this.state.opened ?
				this.props.t( 'leave-chat-id', { id: this.props.for }) :
				this.props.t( 'join-chat-id', { id: this.props.for });
		}
		if ( this.props.showTooltip ) {
			button = <Tooltip
				tooltip={tooltip}
				placement={this.props.tooltipPlacement}
			>
				{button}
			</Tooltip>;
		}
		return (
			<Gate user banner={null} showOwnerInPresentationMode={false} >
				{button}
			</Gate>
		);
	}
}


// PROPERTIES //

ChatButton.propTypes = {
	for: PropTypes.string.isRequired,
	anonymousSubmissions: PropTypes.bool,
	buttonLabel: PropTypes.node,
	showTooltip: PropTypes.bool,
	tooltip: PropTypes.string,
	size: PropTypes.string,
	buttonVariant: PropTypes.string,
	tooltipPlacement: PropTypes.oneOf([ 'left', 'top', 'right', 'bottom' ]),
	onClick: PropTypes.func,
	className: PropTypes.string,
	style: PropTypes.object
};

ChatButton.defaultProps = {
	anonymousSubmissions: false,
	buttonLabel: null,
	showTooltip: true,
	tooltip: null,
	size: 'sm',
	buttonVariant: null,
	tooltipPlacement: 'top',
	onClick() {},
	className: '',
	style: {}
};

ChatButton.contextType = SessionContext;


// EXPORTS //

export default withTranslation( 'internal/chat-button' )( ChatButton );
