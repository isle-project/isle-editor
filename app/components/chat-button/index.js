// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import Button from 'react-bootstrap/Button';
import Tooltip from 'components/tooltip';
import Gate from 'components/gate';
import SessionContext from 'session/context.js';


// VARIABLES //

const debug = logger( 'isle:chat-button' );


// MAIN //

/**
* A button for joining and leaving chat rooms.
*
* @property {string} for - chat room identifier
* @property {boolean} showTooltip - controls whether to show tooltip
*/
class ChatButton extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			opened: false
		};
	}

	componentDidMount() {
		const session = this.context;
		this.unsubscribe = session.subscribe( ( type, name ) => {
			if ( name === this.props.for ) {
				let chat = session.getChat( this.props.for );
				if ( !chat || type === 'self_has_left_chat' ) {
					this.setState({
						opened: false
					});
				}
				else if ( type === 'self_has_joined_chat' ) {
					this.setState({
						opened: true
					});
				}
				else if ( type === 'removed_chat' ) {
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
		let button = <Button
			variant="secondary"
			size="sm"
			onClick={this.handleClick}
		>
			{this.state.opened ? 'Leave Chat' : 'Join Chat' }
		</Button>;
		if ( this.props.showTooltip ) {
			button = <Tooltip
				tooltip={`${this.state.opened ? 'Leave' : 'Join'} chat with ID ${this.props.for}`}
				placement="top"
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
	showTooltip: PropTypes.bool
};

ChatButton.defaultProps = {
	showTooltip: true
};

ChatButton.contextType = SessionContext;


// EXPORTS //

export default ChatButton;
