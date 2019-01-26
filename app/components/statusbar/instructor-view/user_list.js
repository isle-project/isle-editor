// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ProgressBar from 'react-bootstrap/ProgressBar';
import indexOf from '@stdlib/utils/index-of';
import contains from '@stdlib/assert/contains';
import isArray from '@stdlib/assert/is-array';
import keys from '@stdlib/utils/keys';
import Tooltip from 'components/tooltip';
import { CAT20 } from 'constants/colors';
import './user_list.css';


// VARIABLES //

const debug = logger( 'isle:statusbar:instructor-view' );
const IDs = []; // array of IDs for lesson elements


// FUNCTIONS //

function isHidden( el ) {
	return el.offsetParent === null;
}

function removeGlowElems() {
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


// MAIN //

class UserList extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			filter: null,
			selected: null,
			selectedCohort: null
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
				}
				this.forceUpdate();
			}
		});
	}

	componentWillUnmount() {
		console.log( 'Unmounting user list...' );
		this.unsubscribe();
		removeGlowElems();
	}

	highlightElement = ( email ) => {
		const session = this.props.session;
		const userFocuses = session.userFocuses;
		const id = userFocuses[ email ];
		debug( 'ID of element to be focused is: '+id );

		removeGlowElems();
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
				removeGlowElems();
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

	thumbnailClickFactory = ( email ) => {
		return () => {
			this.props.onThumbnailClick( email );
		};
	}

	filter = ( evt ) => {
		debug( 'Clicked on progressbar...' );
		const id = evt.target.innerText;
		let newFilter;
		if ( this.state.filter === id ) {
			newFilter = null;
		} else {
			newFilter = id;
		}
		this.setState({
			filter: newFilter
		});
	}

	onCohortChange = ( event ) => {
		const session = this.props.session;
		const cohorts = session.cohorts;
		let cohort;
		for ( let i = 0; i < cohorts.length; i++ ) {
			if ( cohorts[ i ].title === event.target.value ) {
				cohort = cohorts[ i ];
				break;
			}
		}
		this.setState({
			selectedCohort: cohort
		});
	}

	renderCohortSelection() {
		const session = this.props.session;
		const cohorts = session.cohorts;
		if ( !isArray( cohorts ) ) {
			return null;
		}
		const select = ( <select
			style={{ width: '150px', backgroundColor: 'ghostwhite', padding: '2px' }}
			onChange={this.onCohortChange}
			value={this.state.selectedCohort ? this.state.selectedCohort.title : 'all'}
		>
			<option value="all">All Cohorts</option>
			{cohorts.map( ( v, key ) => {
				return (
					<option
						key={key}
						value={v.title}
					>{v.title}</option>
				);
			})}
		</select> );
		return ( <div style={{ padding: '5px' }}>
			<label>Only show users from: </label>
			{select}
		</div> );
	}

	render() {
		const session = this.props.session;
		const userFocuses = session.userFocuses;
		const ID_COUNTS = {};
		let ID_COUNT_SUM = 0;
		const list = <ListGroup className="user-list-group" style={{ height: window.innerHeight / 1.5 }}>
			{session.userList.filter( user => {
				if (
					this.state.selectedCohort &&
					!contains( this.state.selectedCohort.members, user.email )
				) {
					return false;
				}
				if ( !this.state.filter ) {
					return true;
				}
				const id = userFocuses[ user.email ];
				return id === this.state.filter;
			}).map( ( user, idx ) => {
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
				const src = session.server + '/thumbnail/' + user.picture;
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
						<Tooltip placement="right" tooltip="Open user actions" >
							<img
								onClick={this.thumbnailClickFactory( user.email )}
								className="user-thumbnail"
								src={src}
							/>
						</Tooltip>
						{user.name} ({user.email}) | {user.joinTime} - {user.exitTime}
						{focusedID}
					</ListGroupItem>
				);
			})}
		</ListGroup>;
		const activeIDs = keys( ID_COUNTS );
		return (
			<Fragment>
				<ProgressBar style={{ cursor: 'pointer' }} onClick={this.filter} >
					{activeIDs.map( ( id, key ) => {
						const pos = indexOf( IDs, id );
						const color = CAT20[ pos % CAT20.length ];
						return ( <ProgressBar
							style={{
								background: this.state.filter !== id ? color : 'gold'
							}}
							key={key}
							now={( ID_COUNTS[ id ] / ID_COUNT_SUM ) * 100.0} label={id}
						/> );
					})}
				</ProgressBar>
				{list}
				{this.renderCohortSelection()}
			</Fragment>
		);
	}
}


// PROPERTIES //

UserList.propTypes = {
	onThumbnailClick: PropTypes.func.isRequired,
	session: PropTypes.object.isRequired
};


// EXPORTS //

export default UserList;
