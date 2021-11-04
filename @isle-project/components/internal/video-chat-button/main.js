// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import { withTranslation } from 'react-i18next';
import Button from 'react-bootstrap/Button';
import Tooltip from '@isle-project/components/tooltip';
import Gate from '@isle-project/components/gate';
import SessionContext from '@isle-project/session/context.js';
import { RECEIVED_JITSI_TOKEN, RECEIVED_USER_RIGHTS, VIDEO_CHAT_STARTED, VIDEO_CHAT_ENDED } from '@isle-project/constants/events.js';


// VARIABLES //

const debug = logger( 'isle:video-chat-button' );


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
			if ( type === VIDEO_CHAT_STARTED && value === this.props.for ) {
				this.setState({
					opened: true
				});
			}
			else if ( type === VIDEO_CHAT_ENDED && value === this.props.for ) {
				this.setState({
					opened: false
				});
			}
			else if ( type === RECEIVED_JITSI_TOKEN || type === RECEIVED_USER_RIGHTS ) {
				this.forceUpdate();
			}
		});
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	toggleVideoChat = ( event ) => {
		const opened = !this.state.opened;
		this.props.onClick( event, opened );
		this.setState({
			opened
		}, () => {
			const session = this.context;
			if ( opened ) {
				debug( `Should join chat for component with id '${this.props.for}'...` );
				session.joinVideoChat({
					name: this.props.for,
					subject: this.props.subject || this.props.for
				});
			} else {
				debug( `Should leave chat for component with id '${this.props.for}'...` );
				session.leaveVideoChat( this.props.for );
			}
		});
	};

	render() {
		const session = this.context;
		const { t } = this.props;
		let label;
		if ( this.props.buttonLabel ) {
			label = this.props.buttonLabel;
		} else {
			label = this.state.opened ? t('leave') : t('join');
		}
		let variant;
		if ( this.props.buttonVariant ) {
			variant = this.props.buttonVariant;
		} else {
			variant = this.state.opened ? 'success' : 'secondary';
		}
		if ( !session.jitsi ) {
			return ( <Button
				disabled
				name="Video Chat"
				variant={variant}
				size={this.props.size}
				className={this.props.className}
				style={this.props.style}
				aria-disabled="true"
				aria-label={t('disabled')}
			>
				{label}
			</Button> );
		}
		let tooltip;
		if ( this.props.tooltip ) {
			tooltip = this.props.tooltip;
		} else {
			tooltip = this.state.opened ? t('leave-id', { id: this.props.for }) : t('join-id', { id: this.props.for });
		}
		let button = <Button
			name="Video Chat"
			variant={variant}
			size={this.props.size}
			className={this.props.className}
			onClick={this.toggleVideoChat}
			style={this.props.style}
			aria-label={t('toggle')}
		>
			<span style={{ pointerEvents: 'none' }} >
				{label}
			</span>
		</Button>;
		if ( this.props.showTooltip ) {
			button = <Tooltip
				tooltip={tooltip}
				placement={this.props.tooltipPlacement}
			>
				{button}
			</Tooltip>;
		}
		/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/no-static-element-interactions */
		return (
			<Gate user banner={null} >
				{button}
			</Gate>
		);
	}
}


// PROPERTIES //

VideoChatButton.propTypes = {
	for: PropTypes.string.isRequired,
	subject: PropTypes.string,
	buttonLabel: PropTypes.node,
	showTooltip: PropTypes.bool,
	size: PropTypes.string,
	buttonVariant: PropTypes.string,
	tooltipPlacement: PropTypes.oneOf([ 'left', 'top', 'right', 'bottom' ]),
	onClick: PropTypes.func,
	className: PropTypes.string,
	style: PropTypes.object
};

VideoChatButton.defaultProps = {
	subject: null,
	buttonLabel: null,
	showTooltip: true,
	size: 'sm',
	buttonVariant: null,
	tooltipPlacement: 'top',
	onClick() {},
	className: '',
	style: {}
};

VideoChatButton.contextType = SessionContext;


// EXPORTS //

export default withTranslation( 'video' )( VideoChatButton );
