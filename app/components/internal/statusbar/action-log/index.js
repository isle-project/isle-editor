// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import moment from 'moment';
import stringify from 'csv-stringify';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import copy from '@stdlib/utils/copy';
import contains from '@stdlib/assert/contains';
import isFunction from '@stdlib/assert/is-function';
import isEmptyObject from '@stdlib/assert/is-empty-object';
import hasOwnProp from '@stdlib/assert/has-own-property';
import RangePicker from 'components/range-picker';
import saveAs from 'utils/file-saver';
import isUserInCohort from 'utils/is-user-in-cohort';
import SessionContext from 'session/context.js';
import { LOGGED_OUT, MEMBER_ACTION, RETRIEVED_USER_ACTIONS, SELECTED_COHORT } from 'constants/events.js';
import ActionList from './list.js';
import createFilters from './create_filters';


// VARIABLES //

const debug = logger( 'isle:statusbar:action-log' );
moment.locale( 'us' );


// MAIN //

class ActionLog extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			anonymized: true,
			includes: [ 'guests', 'owners', 'students' ],
			filters: <span className="title">{this.props.t( 'filters' )}</span>,
			period: {
				from: moment( 0 ).startOf( 'day' ),
				to: moment().endOf( 'day' )
			},
			actions: []
		};
	}

	componentDidMount() {
		const session = this.context;
		if ( session.socketActions && session.socketActions.length > 0 ) {
			debug( 'Initial construction of actions array...' );
			this.setState({ // eslint-disable-line react/no-did-mount-set-state
				actions: this.buildActionsArray()
			});
		}
		this.unsubscribe = session.subscribe( ( type, value ) => {
			if ( type === LOGGED_OUT ) {
				debug( 'Should reset the filters after user logout:' );
				this.setState({ // eslint-disable-line react/no-did-mount-set-state
					filters: <span className="title">{this.props.t( 'filters' )}</span>
				});
			}
			else if (
				type === SELECTED_COHORT ||
				type === MEMBER_ACTION ||
				type === RETRIEVED_USER_ACTIONS
			) {
				this.setState({ // eslint-disable-line react/no-did-mount-set-state
					actions: this.buildActionsArray()
				});
			}
			if ( session.socketActions.length === 0 && this.state.filter !== null ) {
				this.setState({ // eslint-disable-line react/no-did-mount-set-state
					filter: {},
					filters: <span className="title">{this.props.t( 'filters' )}</span>
				});
			}
		});
	}

	componentDidUpdate( prevProps, prevState ) {
		if ( this.props.selectedEmail !== prevProps.selectedEmail ) {
			this.setState({
				filter: { email: this.props.selectedEmail },
				filters: <Fragment>
				<span className="title">{this.props.t( 'filters' )}</span>
				<span style={{ position: 'relative', width: 'auto', fontSize: '12px', fontFamily: 'Open Sans' }}>
					<span
						role="button" tabIndex={0}
						onClick={this.handleEmailFilterClick}
						onKeyPress={this.handleEmailFilterClick}
						style={{ marginLeft: 10, background: 'lightcoral', cursor: 'pointer' }}
					>{'email'}: {this.props.selectedEmail}</span>
				</span>
			</Fragment>
			});
		}
		else if ( this.props.selectedID !== prevProps.selectedID ) {
			this.setState({
				filter: { id: this.props.selectedID },
				filters: <Fragment>
				<span className="title">{this.props.t( 'filters' )}</span>
				<span style={{ position: 'relative', width: 'auto', fontSize: '12px', fontFamily: 'Open Sans' }}>
					<span
						role="button" tabIndex={0}
						onClick={this.handleIDFilterClick}
						onKeyPress={this.handleIDFilterClick}
						style={{ marginLeft: 10, background: 'lightcoral', cursor: 'pointer' }}
					>{'id'}: {this.props.selectedID}</span>
				</span>
			</Fragment>
			});
		}
		else if ( this.state.filter !== prevState.filter ) {
			debug( 'Should filter out actions...' );
			this.setState({ actions: this.buildActionsArray() });
		}
		else if (
			this.state.period.from !== prevState.period.from ||
			this.state.period.to !== prevState.period.to
		) {
			this.setState({ actions: this.buildActionsArray() });
		}
	}

	componentWillUnmount() {
		if ( isFunction( this.unsubscribe ) ) {
			this.unsubscribe();
		}
	}

	handleEmailFilterClick = ( event ) => {
		event.stopPropagation();
		let newFilter = copy( this.state.filter );
		delete newFilter[ 'email' ];
		if ( isEmptyObject( newFilter ) ) {
			newFilter = null;
		}
		const newFilters = createFilters( newFilter, ( newFilter, newFilters ) =>{
			this.setState({
				filter: newFilter,
				filters: newFilters
			});
		});
		this.setState({
			filter: newFilter,
			filters: newFilters
		});
	}

	handleIDFilterClick = ( event ) => {
		event.stopPropagation();
		let newFilter = copy( this.state.filter );
		delete newFilter[ 'id' ];
		if ( isEmptyObject( newFilter ) ) {
			newFilter = null;
		}
		const newFilters = createFilters( newFilter, (newFilter, newFilters) =>{
			this.setState({
				filter: newFilter,
				filters: newFilters
			});
		});

		this.setState({
			filter: newFilter,
			filters: newFilters
		});
	}

	buildActionsArray() {
		let { from, to } = this.state.period;
		debug( 'Building action array...' );
		if ( from && to ) {
			from = from.toDate();
			to = to.toDate();
			const session = this.context;
			let actions = [];
			for ( let i = 0; i < session.socketActions.length; i++ ) {
				let action = session.socketActions[ i ];
				if (
					session.selectedCohort &&
					!isUserInCohort( session.selectedCohort, action.email )
				) {
					continue;
				}
				if (
					action.absoluteTime > from && action.absoluteTime < to
				) {
					actions.push( action );
				}
			}
			if ( this.state.filter ) {
				debug( 'Should filter actions: ' + actions.length );
				this.removeMarkedActions( actions );
			}
			return actions;
		}
		return [];
	}

	removeMarkedActions( actions ) {
		for ( let i = actions.length - 1; i >= 0; i-- ) {
			let action = actions[ i ];
			let markedForRemoval = false;
			for ( let key in this.state.filter ) {
				if ( hasOwnProp( this.state.filter, key ) ) {
					let val = this.state.filter[ key ];
					if ( action[ key ] !== val ) {
						markedForRemoval = true;
					}
				}
			}
			if ( markedForRemoval ) {
				actions.splice( i, 1 );
			}
		}
	}

	handleRadioChange = ( val ) => {
		this.setState({
			anonymized: !this.state.anonymized
		});
	}

	prepareActionsForExport( hash ) {
		let actions;
		const len = this.state.actions.length;
		if ( this.state.anonymized ) {
			actions = new Array( len );
			for ( let i = 0; i < len; i++ ) {
				const action = copy( this.state.actions[ i ] );
				action.name = hash.name[ action.name ];
				action.email = hash.email[ action.email ];
				actions[ i ] = action;
			}
		}
		else {
			actions = this.state.actions;
		}
		const out = [];
		const includeOwners = contains( this.state.includes, 'owners' );
		const includeStudents = contains( this.state.includes, 'students' );
		const includeGuests = contains( this.state.includes, 'guests' );
		for ( let i = 0; i < actions.length; i++ ) {
			const val = actions[ i ];
			if ( val.owner ) {
				// Case: Owner
				if ( includeOwners ) {
					out.push( val );
				}
			}
			else if ( val.email === val.name ) {
				// Case: Guest
				if ( includeGuests ) {
					out.push( val );
				}
			}
			else if ( includeStudents ) {
				// Case: Student
				out.push( val );
			}
		}
		return out;
	}

	saveJSON = () => {
		const session = this.context;
		session.getFakeUsers( ( err, hash ) => {
			if ( err ) {
				return session.addNotification({
					title: this.props.t( 'error-encountered' ),
					message: this.props.t( 'error-fake-users' )+err.message,
					level: 'error',
					position: 'tl'
				});
			}
			const actions = this.prepareActionsForExport( hash );
			const blob = new Blob([ JSON.stringify( actions ) ], {
				type: 'application/json'
			});
			const name = `actions_${session.namespaceName}_${session.lessonName}.json`;
			saveAs( blob, name );
		});
	}

	saveCSV = () => {
		const session = this.context;
		session.getFakeUsers( ( err, hash ) => {
			if ( err ) {
				return session.addNotification({
					title: this.props.t( 'error-encountered' ),
					message: this.props.t( 'error-fake-users' )+err.message,
					level: 'error',
					position: 'tl'
				});
			}
			const actions = this.prepareActionsForExport( hash );
			stringify( actions, {
				header: true
			}, ( err, output ) => {
				if ( err ) {
					return session.addNotification({
						title: this.props.t( 'error-encountered' ),
						message: this.props.t( 'error-csv' )+err.message,
						level: 'error',
						position: 'tl'
					});
				}
				const blob = new Blob([ output ], {
					type: 'text/plain'
				});
				const name = `actions_${session.namespaceName}_${session.lessonName}.csv`;
				saveAs( blob, name );
			});
		});
	}

	render() {
		const session = this.context;
		const socketActions = session.socketActions;
		const nActions = socketActions.length;
		let origin;
		if ( nActions > 0 ) {
			origin = socketActions[ nActions-1 ].absoluteTime;
		} else {
			origin = 0;
		}
		return (
			<Card.Body>
				<RangePicker size="sm" origin={origin} onChange={( newPeriod ) => {
					this.setState({
						period: newPeriod
					});
				}} />
				<ActionList
					session={session}
					actions={this.state.actions}
					period={this.state.period}
					filter={this.state.filter}
					height={window.innerHeight / 2.0}
					onFilterChange={( newFilter, newFilters ) => {
						this.setState({
							filter: newFilter,
							filters: newFilters
						});
					}}
				/>
				{this.state.filters}
				<ButtonToolbar>
					<ButtonGroup>
						<span style={{ fontSize: '14px', marginRight: 20, paddingTop: 5, fontWeight: 600 }}>
							{this.props.t( 'num-actions', { n: this.state.actions.length })}
						</span>
					</ButtonGroup>
					<ToggleButtonGroup
						name="options"
						onChange={this.handleRadioChange}
						type="radio"
						size="small"
						value={this.state.anonymized}
						style={{ marginRight: '5px' }}
					>
						<ToggleButton
							size="sm"
							variant="light"
							value={false}
							style={{
								fontSize: '12px',
								color: this.state.anonymized ? '#A9A9A9' : 'black'
							}}
						>{this.props.t( 'original' )}</ToggleButton>
						<ToggleButton
							size="sm"
							variant="light"
							value={true}
							style={{
								fontSize: '12px',
								color: this.state.anonymized ? 'black' : '#A9A9A9'
							}}
						>{this.props.t( 'anonymized' )}</ToggleButton>
					</ToggleButtonGroup>
					<ToggleButtonGroup
						type="checkbox"
						onChange={( includes ) => {
							this.setState({ includes });
						}}
						value={this.state.includes}
						style={{ marginRight: '5px' }}
					>
						<ToggleButton
							size="sm"
							variant="light"
							value="owners"
							style={{
								fontSize: '12px',
								color: contains( this.state.includes, 'owners' ) ? 'black' : '#A9A9A9'
							}}
						>{this.props.t( 'instructors' )}</ToggleButton>
						<ToggleButton
							size="sm"
							variant="light"
							value="students"
							style={{
								fontSize: '12px',
								color: contains( this.state.includes, 'students' ) ? 'black' : '#A9A9A9'
							}}
						>{this.props.t( 'students' )}</ToggleButton>
						<ToggleButton
							size="sm"
							variant="light"
							value="guests"
							style={{
								fontSize: '12px',
								color: contains( this.state.includes, 'guests' ) ? 'black' : '#A9A9A9'
							}}
						>{this.props.t( 'guests' )}</ToggleButton>
					</ToggleButtonGroup>
					<ButtonGroup size="sm">
						<Button variant="primary" onClick={this.saveJSON} >{this.props.t( 'save-json' )}</Button>
						<Button variant="primary" onClick={this.saveCSV} >{this.props.t( 'save-csv' )}</Button>
					</ButtonGroup>
				</ButtonToolbar>
			</Card.Body>
		);
	}
}


// PROPERTIES //

ActionLog.contextType = SessionContext;

ActionLog.propTypes = {
	selectedEmail: PropTypes.string,
	selectedID: PropTypes.string
};

ActionLog.defaultProps = {
	selectedEmail: null,
	selectedID: null
};


// EXPORTS //

export default ActionLog;
