// MODULES //

import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';
import PropTypes from 'prop-types';
import logger from 'debug';
import Gate from 'components/gate';
import SessionContext from 'session/context.js';


// VARIABLES //

const debug = logger( 'isle:chat-button' );


// MAIN //

/**
* A button for joining and leaving chat rooms.
*
* @property {string} for - chat room identifier
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
		return (
			<Gate user>
				<Button
					variant="primary"
					size="sm"
					onClick={this.handleClick}
				>{this.state.opened ? 'Leave Chat' : 'Join Chat' }
				</Button>
			</Gate>
		);
	}
}


// PROPERTIES //

ChatButton.propTypes = {
	for: PropTypes.string.isRequired
};

ChatButton.contextType = SessionContext;


// EXPORTS //

export default ChatButton;
