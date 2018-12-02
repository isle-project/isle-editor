// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/lib/Card';
import Alert from 'react-bootstrap/lib/Alert';
import Button from 'react-bootstrap/lib/Button';
import Gate from 'components/gate';
import shuffle from '@stdlib/random/shuffle';
import identity from '@stdlib/utils/identity-function';
import hasOwnProp from '@stdlib/assert/has-own-property';
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
					if ( action.type === 'USERS_ASSIGNED' ) {
						this.props.onAssignmentOwner( JSON.parse( action.value ) );
					} else if ( action.type === 'INDIVIDUAL_ASSIGNED' ) {
						this.props.onAssignmentStudent( JSON.parse( action.value ) );
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
				.map( x => { return {
					email: x.email,
					name: x.name
				}; } )
		);
		if ( emails.length < 2 ) {
			return this.setState({
				message: {
					variant: 'warning',
					value: 'There needs to be at least 2 users for the assignment to work'
				}
			});
		}
		const assignments = {};
		for ( let i = 0; i < emails.length; i++ ) {
			let emailAddress = emails[i].email;
			assignments[emailAddress] = {
				'to': emails[i === emails.length - 1 ? 0 : i + 1],
				'from': emails[i === 0 ? emails.length - 1 : i - 1]
			};
		}
		this.setState({
			assignments,
			message: {
				variant: 'success',
				value: `${emails.length} users were successfully assigned with one another.`
			}
		}, () => {
			const logAction = {
				id: this.props.id,
				type: 'USERS_ASSIGNED',
				value: JSON.stringify( this.state.assignments ),
				noSave: false
			};
			session.log( logAction, 'owners' );
			if ( session.isOwner() ) {
				for ( let key in assignments ) {
					if ( hasOwnProp(assignments, key) ) {
						session.log( {
							id: this.props.id,
							type: 'INDIVIDUAL_ASSIGNED',
							value: JSON.stringify( this.state.assignments[key] ),
							noSave: true
						}, key );
					}
				}
			}
			this.props.onAssignmentOwner( this.state.assignments );
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
	onAssignmentOwner() {},
	onAssignmentStudent() {}
};

UserPairer.propTypes = {
	filterOwners: PropTypes.bool,
	onAssignmentOwner: PropTypes.func,
	onAssignmentStudent: PropTypes.func
};

UserPairer.contextType = SessionContext;


// EXPORTS //

export default UserPairer;
