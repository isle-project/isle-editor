// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import isArray from '@stdlib/assert/is-array';
import shuffle from '@stdlib/random/shuffle';
import hasOwnProp from '@stdlib/assert/has-own-property';
import Gate from 'components/gate';
import SessionContext from 'session/context.js';
import AssignmentModal from './assignment_modal.js';
import { ASSIGNMENT_CLEARED, USERS_ASSIGNED, INDIVIDUAL_ASSIGNED, REMOVE_ASSIGNMENT } from 'constants/actions.js';
import { MEMBER_ACTION, RECEIVED_USERS, RETRIEVED_COHORTS, USER_JOINED, USER_LEFT } from 'constants/events.js';
import isUserInCohort from 'utils/is-user-in-cohort';
import './user_pairer.css';


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
			showAssignments: false,
			showAssignmentModal: false,
			assignments: {},
			message: props.id ? null : {
				variant: 'danger',
				value: 'Component expects an ID to work.'
			},
			selectedCohort: null
		};
	}

	componentDidMount() {
		const session = this.context;
		this.unsubscribe = session.subscribe( ( type, action ) => {
			if (
				type === RECEIVED_USERS ||
				type === USER_LEFT ||
				type === RETRIEVED_COHORTS
			) {
				this.forceUpdate();
			}
			else if ( type === USER_JOINED ) {
				const email = action.email;
				if ( this.state.assignments[ email ] ) {
					session.log( {
						id: this.props.id,
						type: INDIVIDUAL_ASSIGNED,
						value: JSON.stringify( this.state.assignments[ email ] ),
						noSave: true
					}, email );
				}
				this.forceUpdate();
			}
			else if ( type === MEMBER_ACTION ) {
				if ( action.id === this.props.id ) {
					if ( action.type === USERS_ASSIGNED ) {
						this.props.onAssignmentOwner( JSON.parse( action.value ) );
						this.setState({
							showAssignments: true
						});
					}
					else if ( action.type === ASSIGNMENT_CLEARED ) {
						this.props.onClearOwner();
						this.setState({
							showAssignments: false
						});
					}
					else if ( action.type === INDIVIDUAL_ASSIGNED ) {
						this.props.onAssignmentStudent( JSON.parse( action.value ) );
						this.forceUpdate();
					}
					else if ( action.type === REMOVE_ASSIGNMENT ) {
						this.props.onClearStudent( action.value );
						this.forceUpdate();
					}
				}
			}
		});
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	onCohortChange = ( event ) => {
		const session = this.context;
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
		const session = this.context;
		const cohorts = session.cohorts;
		if ( !isArray( cohorts ) ) {
			return null;
		}
		const select = ( <select
			className="user-pairer-select"
			onChange={this.onCohortChange} onBlur={this.onCohortChange}
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
			<span className="user-pairer-title">Only pair users from:</span>
			{select}
		</div> );
	}

	createAssignments = () => {
		const session = this.context;
		const users = session.userList;
		const emails = shuffle(
			users
				.filter( user => {
					if (
						this.state.selectedCohort &&
						!isUserInCohort( this.state.selectedCohort, user.email )
					) {
						return false;
					}
					if ( this.props.filterOwners && user.owner ) {
						return false;
					}
					return user.exitTime === null;
				})
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
			let emailAddress = emails[ i ].email;
			assignments[ emailAddress ] = {
				'to': emails[ i === emails.length - 1 ? 0 : i + 1 ],
				'from': emails[ i === 0 ? emails.length - 1 : i - 1 ],
				'name': emails[ i ].name
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
			const logAction = {
				id: this.props.id,
				type: USERS_ASSIGNED,
				value: stringified,
				noSave: false
			};
			session.log( logAction, 'owners' );
			if ( session.isOwner() ) {
				for ( let key in assignments ) {
					if ( hasOwnProp( assignments, key ) ) {
						session.log( {
							id: this.props.id,
							type: INDIVIDUAL_ASSIGNED,
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
				type: ASSIGNMENT_CLEARED,
				value: true
			};
			session.log( logAction, 'owners' );
			for ( let key in assignments ) {
				if ( hasOwnProp( assignments, key ) ) {
					session.log( {
						id: this.props.id,
						type: REMOVE_ASSIGNMENT,
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
		}
	}

	toggleModal = () => {
		this.setState({
			showAssignmentModal: !this.state.showAssignmentModal
		});
	}

	render() {
		const session = this.context;
		let users = session.userList;
		users = users
			.filter( user => {
				if (
					this.state.selectedCohort &&
					!isUserInCohort( this.state.selectedCohort, user.email )
				) {
					return false;
				}
				if ( this.props.filterOwners && user.owner ) {
					return false;
				}
				return user.exitTime === null;
			});
		const msg = this.state.message;
		return (
			<Gate owner>
				<Card>
					<Card.Body style={{ textAlign: 'left', fontSize: '18px' }}>
						{this.renderCohortSelection()}
						<p>There are currently <b>{users.length}</b> users ({this.props.filterOwners ? 'excluding' : 'including'} course owners) {this.state.selectedCohort ? `from cohort "${this.state.selectedCohort.title}"` : 'from all cohorts'} online.</p>
						{msg ? <Alert variant={msg.variant}>{msg.value}</Alert> : null }
						<ButtonGroup>
							<Button variant="secondary" onClick={this.createAssignments}>
								{ this.state.showAssignments ? 'Re-pair users' : 'Pair users' }
							</Button>
							{ this.state.showAssignments ? <Button variant="warning" onClick={this.clearAssignments}>
								Clear Assignments
							</Button> : null }
							{ this.state.showAssignments ? <Button variant="info" onClick={this.toggleModal}>
								Show Assignments
							</Button> : null }
						</ButtonGroup>
						{this.state.showAssignmentModal ? <AssignmentModal
							assignments={this.state.assignments}
							show={this.state.showAssignmentModal}
							onHide={this.toggleModal}
						/> : null}
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
