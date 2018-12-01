// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/lib/Card';
import Alert from 'react-bootstrap/lib/Alert';
import Button from 'react-bootstrap/lib/Button';
import Gate from 'components/gate';
import isOdd from '@stdlib/assert/is-odd';
import shuffle from '@stdlib/random/shuffle';
import identity from '@stdlib/utils/identity-function';
import SessionContext from 'session/context.js';


// FUNCTIONS //

function filterOwners( elem ) {
	return !elem.owner;
}


// MAIN //

/**
* The user pairer component allows one to group the currently active users into pairs of two, e.g. for group exercises.
*
* @property {boolean} filterOwners - controls whether to include or exclude owners in the pair matching
* @property {Function} onAssignments - callback invoked with the assignments once ready
*/
class UserPairer extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			assignments: {},
			message: props.id ? null : {
				variant: 'danger',
				value: 'Component expects an ID to work.'
			}
		};
	}

	componentDidMount() {
		const session = this.context;
		this.unsubscribe = session.subscribe( ( type, action ) => {
			if (
				type === 'received_users' ||
				type === 'user_joined' ||
				type === 'user_left'
			) {
				this.forceUpdate();
			}
			else if ( type === 'member_action' ) {
				if ( action.id === this.props.id ) {
					if ( action.type === 'USERS_PAIRED' ) {
						this.props.onAssignments( JSON.parse( action.value ) );
					}
				}
			}
		});
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	createAssignments = () => {
		const session = this.context;
		const users = session.userList;
		const emails = shuffle(
			users
				.filter( x => x.exitTime === null )
				.filter( this.props.filterOwners ? filterOwners : identity )
				.map( x => x.email )
		);
		if ( emails.length === 0 || isOdd( emails.length ) ) {
			return this.setState({
				message: {
					variant: 'warning',
					value: 'There needs to be an even number of users for the pairing to work'
				}
			});
		}
		const assignments = {};
		let count = 0;
		while ( emails.length > 0 ) {
			count += 2;
			const current = emails.shift();
			const next = emails.shift();
			assignments[ current ] = next;
			assignments[ next ] = current;
		}
		this.setState({
			assignments,
			message: {
				variant: 'success',
				value: `${count} users were successfully paired with each other.`
			}
		}, () => {
			const logAction = {
				id: this.props.id,
				type: 'USERS_PAIRED',
				value: JSON.stringify( this.state.assignments )
			};
			if (
				this.state.groupMode ||
				session.isOwner() && this.state.transmitOwner
			) {
				session.log( logAction, 'members' );
			}
			this.props.onAssignments( this.state.assignments );
		});
	}

	render() {
		const session = this.context;
		let users = session.userList;
		users = users
			.filter( x => x.exitTime === null )
			.filter( this.props.filterOwners ? filterOwners : identity );
		const msg = this.state.message;
		return (
			<Gate owner>
				<Card>
					<Card.Body>
						<p>There are currently <b>{users.length}</b> users ({this.props.filterOwners ? 'excluding' : 'including'} course owners) online.</p>
						{msg ? <Alert variant={msg.variant}>{msg.value}</Alert> : null }
						<Button onClick={this.createAssignments}>Pair users</Button>
					</Card.Body>
				</Card>
			</Gate>
		);
	}
}


// PROPERTIES //

UserPairer.defaultProps = {
	filterOwners: true,
	onAssignments() {}
};

UserPairer.propTypes = {
	filterOwners: PropTypes.bool,
	onAssignments: PropTypes.func
};

UserPairer.contextType = SessionContext;


// EXPORTS //

export default UserPairer;
