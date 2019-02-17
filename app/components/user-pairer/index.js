// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import FlippableCard from 'components/flippable-card';
import Gate from 'components/gate';
import shuffle from '@stdlib/random/shuffle';
import identity from '@stdlib/utils/identity-function';
import isEmptyObject from '@stdlib/assert/is-empty-object';
import hasOwnProp from '@stdlib/assert/has-own-property';
import SessionContext from 'session/context.js';


// FUNCTIONS //

function filterOwners( elem ) {
	return !elem.owner;
}

function renderTable( assignments ) {
	const rows = [];
	for ( let key in assignments ) {
		if ( hasOwnProp( assignments, key ) ) {
			const val = assignments[ key ];
			rows.push( <tr>
				<td>{key}</td>
				<td>{`${val.from.name} (${val.from.email})`}</td>
				<td>{`${val.to.name} (${val.to.email})`}</td>
			</tr> );
		}
	}
	return ( <Table bordered size="sm">
		<thead>
			<tr>
				<th>Email</th>
				<th>Receive From</th>
				<th>Send To</th>
			</tr>
		</thead>
		<tbody>
			{rows}
		</tbody>
	</Table> );
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

		let assignments = localStorage.getItem( props.id );
		if ( assignments ) {
			assignments = JSON.parse( assignments );
		} else {
			assignments = {};
		}
		let individual = localStorage.getItem( this.props.id+'_individual' );
		if ( individual ) {
			props.onAssignmentStudent( JSON.parse( individual ) );
		}
		this.state = {
			showAssignments: !isEmptyObject( assignments ),
			assignments,
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
						localStorage.setItem( this.props.id, action.value );
						this.props.onAssignmentOwner( JSON.parse( action.value ) );
					}
					else if ( action.type === 'ASSIGNMENT_CLEARED' ) {
						localStorage.removeItem( this.props.id );
						this.props.onClearOwner();
					}
					else if ( action.type === 'INDIVIDUAL_ASSIGNED' ) {
						localStorage.setItem( this.props.id+'_individual', action.value );
						this.props.onAssignmentStudent( JSON.parse( action.value ) );
					}
					else if ( action.type === 'REMOVE_ASSIGNMENT' ) {
						localStorage.removeItem( this.props.id+'_individual' );
						this.props.onClearStudent( action.value );
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
			},
			showAssignments: true
		}, () => {
			const stringified = JSON.stringify( this.state.assignments );
			localStorage.setItem( this.props.id, stringified );
			const logAction = {
				id: this.props.id,
				type: 'USERS_ASSIGNED',
				value: stringified,
				noSave: false
			};
			session.log( logAction, 'owners' );
			if ( session.isOwner() ) {
				for ( let key in assignments ) {
					if ( hasOwnProp( assignments, key ) ) {
						session.log( {
							id: this.props.id,
							type: 'INDIVIDUAL_ASSIGNED',
							value: JSON.stringify( this.state.assignments[ key ] ),
							noSave: true
						}, key );
					}
				}
			}
			this.props.onAssignmentOwner( this.state.assignments );
		});
	}

	clearAssignments = () => {
		const session = this.context;
		if ( session.isOwner() ) {
			const assignments = this.state.assignments;
			const logAction = {
				id: this.props.id,
				type: 'ASSIGNMENT_CLEARED',
				value: true
			};
			session.log( logAction, 'owners' );
			for ( let key in assignments ) {
				if ( hasOwnProp( assignments, key ) ) {
					session.log( {
						id: this.props.id,
						type: 'REMOVE_ASSIGNMENT',
						value: key,
						noSave: true
					}, key );
				}
			}
			this.setState({
				showAssignments: false,
				assignments: {},
				message: null
			});
			localStorage.removeItem( this.props.id );
		}
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
						<ButtonGroup>
							<Button variant="secondary" onClick={this.createAssignments}>
								{ this.state.showAssignments ? 'Repair users' : 'Pair users' }
							</Button>
							{ this.state.showAssignments ? <Button variant="warning" onClick={this.clearAssignments}>
								Clear Assignments
							</Button> : null }
						</ButtonGroup>
						{ this.state.showAssignments ? <FlippableCard
							cardStyles={{
								container: {
									width: '100%',
									height: '300px'
								}
							}}
						>
							<Card bg="light">
								<Card.Body style={{ height: '300px', lineHeight: '300px', textAlign: 'center' }}>
									<h4 style={{ display: 'inline-block', verticalAlign: 'middle', lineHeight: 'normal' }}>Click to reveal assignments</h4>
								</Card.Body>
							</Card>
							<Card bg="light" style={{ height: 300, overflowY: 'scroll' }}>
								<Card.Body>
								{renderTable( this.state.assignments )}
								</Card.Body>
							</Card>
						</FlippableCard> : null }
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
	onAssignmentStudent() {},
	onClearOwner() {},
	onClearStudent() {}
};

UserPairer.propTypes = {
	filterOwners: PropTypes.bool,
	onAssignmentOwner: PropTypes.func,
	onAssignmentStudent: PropTypes.func,
	onClearOwner: PropTypes.func,
	onClearStudent: PropTypes.func
};

UserPairer.contextType = SessionContext;


// EXPORTS //

export default UserPairer;
