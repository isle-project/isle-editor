// MODULES //

import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';
import PropTypes from 'prop-types';
import logger from 'debug';
import Gate from 'components/gate';


// VARIABLES //

const debug = logger( 'isle-editor' );


// MAIN //

class ChatButton extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			opened: false
		};

		this.onClick = () => {
			const { session } = this.context;
			let opened = this.state.opened;
			this.setState({
				opened: !opened
			}, () => {
				if ( !opened ) {
					debug( 'Should join chat...' );
					session.joinChat( this.props.for );
				} else {
					debug( 'Should leave chat...' );
					session.leaveChat( this.props.for );
				}
			});
		};
	}

	componentDidMount() {
		const { session } = this.context;
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

	render() {
		return (
			<Gate user>
				<Button
					bsStyle="primary"
					bsSize="sm"
					onClick={this.onClick}
				>{this.state.opened ? 'Leave Chat' : 'Join Chat' }
				</Button>
			</Gate>
		);
	}
}


// TYPES //

ChatButton.propTypes = {
	for: PropTypes.string.isRequired
};

ChatButton.contextTypes = {
	session: PropTypes.object
};


// EXPORTS //

export default ChatButton;
