// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import './user_list.css';


// VARIABLES //

const debug = logger( 'isle:statusbar:instructor-view' );


// MAIN //

class UserList extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			selected: null
		};
	}

	componentDidMount() {
		const session = this.props.session;
		this.unsubscribe = session.subscribe( ( type, action ) => {
			if (
				type === 'received_users' ||
				type === 'user_joined' ||
				type === 'user_left'
			) {
				debug( 'Should render the user list...' );
				this.forceUpdate();
			}
			else if (
				type === 'member_action' &&
				( action.type === 'FOCUS_ELEMENT' || action.type === 'LOSE_FOCUS_ELEMENT' ) &&
				action.email === this.state.selected
			) {
				this.highlightElement( action.email );
			}
		});
	}

	componentWillUnmount() {
		this.unsubscribe();
		this.removeAllGlowEffects();
	}

	removeAllGlowEffects() {
		// Remove glow effect from previously highlighted elements:
		const focused = document.getElementsByClassName( 'focus-glow' );
		while ( focused.length ) {
			focused[0].classList.remove( 'focus-glow' );
		}
	}

	highlightElement = ( email ) => {
		const session = this.props.session;
		const userFocuses = session.userFocuses;
		const id = userFocuses[ email ];
		debug( 'ID of element to be focused is: '+id );

		this.removeAllGlowEffects();
		const elem = document.getElementById( id );
		if ( elem ) {
			debug( 'Found element, should add glow effect...' );
			elem.classList.add( 'focus-glow' );
			elem.scrollIntoView();
		}
	}

	handleClickFactory = ( email ) => {
		return () => {
			if ( this.state.selected === email ) {
				return this.setState({
					selected: null
				});
			}
			this.highlightElement( email );
			this.setState({
				selected: email
			});
		};
	}

	render() {
		const session = this.props.session;
		return (
			<ListGroup className="user-list-group" style={{ height: window.innerHeight / 2 }}>
				{session.userList.map( ( user, idx ) => {
					const color = user.owner ? '#3c763d' : 'black';
					let background;
					if ( this.state.selected === user.email ) {
						background = '#e0a800';
					} else {
						background = user.inactive ? 'lightgrey' : 'transparent';
					}
					return (
						<ListGroupItem
							className="user-list-item"
							key={idx}
							onClick={this.handleClickFactory( user.email )}
							style={{
								background,
								color
							}}
						>
							{user.name} ({user.email}) | {user.joinTime} - {user.exitTime}
						</ListGroupItem>
					);
				})}
			</ListGroup>
		);
	}
}


// TYPES //

UserList.propTypes = {
	session: PropTypes.object.isRequired
};


// EXPORTS //

export default UserList;
