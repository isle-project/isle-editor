// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import ProgressBar from 'react-bootstrap/lib/ProgressBar';
import indexOf from '@stdlib/utils/index-of';
import keys from '@stdlib/utils/keys';
import { CAT20 } from 'constants/colors';
import './user_list.css';


// VARIABLES //

const debug = logger( 'isle:statusbar:instructor-view' );
const IDs = []; // array of IDs for lesson elements


// FUNCTIONS //

function isHidden( el ) {
	return el.offsetParent === null;
}


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
				( action.type === 'FOCUS_ELEMENT' || action.type === 'LOSE_FOCUS_ELEMENT' )
			) {
				if ( action.email === this.state.selected ) {
					this.highlightElement( action.email );
				} else {
					this.forceUpdate();
				}
			}
		});
	}

	componentWillUnmount() {
		this.unsubscribe();
		this.removeGlowElems();
	}

	removeGlowElems() {
		// Remove glow effect from previously highlighted elements:
		const focused = document.getElementsByClassName( 'focus-glow' );
		while ( focused.length ) {
			focused[0].classList.remove( 'focus-glow' );
		}
		const element = document.getElementById( 'duplicated-container' );
		if ( element ) {
			element.parentNode.removeChild( element );
		}
	}

	highlightElement = ( email ) => {
		const session = this.props.session;
		const userFocuses = session.userFocuses;
		const id = userFocuses[ email ];
		debug( 'ID of element to be focused is: '+id );

		this.removeGlowElems();
		const elem = document.getElementById( id );
		if ( elem ) {
			debug( 'Found element, should add glow effect...' );
			if ( isHidden( elem ) ) {
				const clone = elem.cloneNode( true );
				const newDiv = document.createElement( 'div' );
				newDiv.id = 'duplicated-container';
				clone.id = 'duplicated-elem';
				clone.classList.add( 'focus-glow' );
				newDiv.append( clone );
				document.body.appendChild( newDiv );
			} else {
				elem.classList.add( 'focus-glow' );
				elem.scrollIntoView();
			}
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
		const userFocuses = session.userFocuses;
		const ID_COUNTS = {};
		let ID_COUNT_SUM = 0;
		const list = <ListGroup className="user-list-group" style={{ height: window.innerHeight / 2 }}>
			{session.userList.map( ( user, idx ) => {
				let focusedID = null;
				const id = userFocuses[ user.email ];
				if ( id ) {
					let pos = indexOf( IDs, id );
					if ( pos === -1 ) {
						pos = IDs.length;
						IDs.push( id );
					}
					ID_COUNTS[ id ] = ( ID_COUNTS[ id ] || 0 ) + 1;
					ID_COUNT_SUM += 1;
					focusedID = (
						<span style={{
							float: 'right',
							color: CAT20[ pos % CAT20.length ]
						}}>
							{id}
						</span>
					);
				}
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
						{focusedID}
					</ListGroupItem>
				);
			})}
		</ListGroup>;
		const activeIDs = keys( ID_COUNTS );
		return (
			<Fragment>
				<ProgressBar>
					{activeIDs.map( ( id, key ) => {
						const pos = indexOf( IDs, id );
						const color = CAT20[ pos % CAT20.length ];
						return <ProgressBar style={{ background: color }} key={key} now={( ID_COUNTS[ id ] / ID_COUNT_SUM ) * 100.0} label={id} />;
					})}
				</ProgressBar>
				{list}
			</Fragment>
		);
	}
}


// TYPES //

UserList.propTypes = {
	session: PropTypes.object.isRequired
};


// EXPORTS //

export default UserList;
