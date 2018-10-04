// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/lib/Card';
import Button from 'react-bootstrap/lib/Button';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import ToggleButtonGroup from 'react-bootstrap/lib/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/lib/ToggleButton';
import RangePicker from 'components/range-picker';
import saveAs from 'utils/file-saver';
import stringify from 'csv-stringify';
import moment from 'moment';
import logger from 'debug';
import copy from '@stdlib/utils/copy';
import hasOwnProp from '@stdlib/assert/has-own-property';
import ActionList from './list.js';


// VARIABLES //

const debug = logger( 'isle:statusbar:action-log' );
moment.locale( 'us' );


// MAIN //

class ActionLog extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			anonymized: true,
			filters: <label>Filters:</label>,
			period: {
				from: moment( 0 ).startOf( 'day' ),
				to: moment().endOf( 'day' )
			},
			actions: []
		};
	}

	componentDidMount() {
		const { session } = this.context;
		if ( session.socketActions && session.socketActions.length > 0 ) {
			debug( 'Initial construction of actions array...' );
			this.setState({ // eslint-disable-line react/no-did-mount-set-state
				actions: this.buildActionsArray()
			});
		}
		this.unsubscribe = session.subscribe( ( type, value ) => {
			if ( type === 'logout' ) {
				debug( 'Should reset the filters after user logout:' );
				this.setState({ // eslint-disable-line react/no-did-mount-set-state
					filters: <label>Filters:</label>
				});
			}
			else if ( type === 'member_action' ) {
				this.setState({ // eslint-disable-line react/no-did-mount-set-state
					actions: this.buildActionsArray()
				});
			}
			else if ( type === 'retrieved_user_actions' ) {
				this.setState({ // eslint-disable-line react/no-did-mount-set-state
					actions: this.buildActionsArray()
				});
			}
			if ( session.socketActions.length === 0 && this.state.filter !== null ) {
				this.setState({ // eslint-disable-line react/no-did-mount-set-state
					filter: {},
					filters: <label>Filters:</label>
				});
			}
		});
	}

	componentDidUpdate( prevProps, prevState ) {
		if ( this.state.filter !== prevState.filter ) {
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
		this.unsubscribe();
	}

	buildActionsArray() {
		let { from, to } = this.state.period;
		debug( 'Building action array...' );
		if ( from && to ) {
			from = from.toDate();
			to = to.toDate();
			const { session } = this.context;
			let actions = [];
			for ( let i = 0; i < session.socketActions.length; i++ ) {
				let action = session.socketActions[ i ];
				if ( action.absoluteTime > from && action.absoluteTime < to ) {
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

	saveJSON = () => {
		const { session } = this.context;
		session.getFakeUsers( ( err, hash ) => {
			if ( err ) {
				return session.addNotification({
					title: 'Error encountered',
					message: 'Encountered an error while generating fake users: '+err.message,
					level: 'error',
					position: 'tl'
				});
			}
			let actions;
			if ( this.state.anonymized ) {
				actions = new Array( session.socketActions.length );
				for ( let i = 0; i < actions.length; i++ ) {
					actions[ i ] = copy( session.socketActions[ i ] );
					actions[ i ].name = hash.name[ actions[ i ].name ];
					actions[ i ].email = hash.email[ actions[ i ].email ];
				}
			} else {
				actions = session.socketActions;
			}
			const blob = new Blob([ JSON.stringify( actions ) ], {
				type: 'application/json'
			});
			const name = `actions_${session.namespaceName}_${session.lessonName}.json`;
			saveAs( blob, name );
		});
	}

	saveCSV = () => {
		const { session } = this.context;
		session.getFakeUsers( ( err, hash ) => {
			if ( err ) {
				return session.addNotification({
					title: 'Error encountered',
					message: 'Encountered an error while generating fake users: '+err.message,
					level: 'error',
					position: 'tl'
				});
			}
			let actions;
			if ( this.state.anonymized ) {
				actions = new Array( session.socketActions.length );
				for ( let i = 0; i < actions.length; i++ ) {
					actions[ i ] = copy( session.socketActions[ i ] );
					actions[ i ].name = hash.name[ actions[ i ].name ];
					actions[ i ].email = hash.email[ actions[ i ].email ];
				}
			} else {
				actions = session.socketActions;
			}
			stringify( actions, {
				header: true
			}, ( err, output ) => {
				if ( err ) {
					return session.addNotification({
						title: 'Error encountered',
						message: 'Encountered an error while creating CSV: '+err.message,
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
		return (
			<Card.Body>
				<RangePicker size="sm" onChange={( newPeriod ) => {
					this.setState({
						period: newPeriod
					});
				}} />
				<ActionList
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
							{'# of Actions: '+this.state.actions.length}
						</span>
					</ButtonGroup>
					<ToggleButtonGroup
						name="options"
						onChange={this.handleRadioChange}
						type="radio"
						size="small"
						value={this.state.anonymized}
					>
						<ToggleButton
							size="sm"
							variant="light"
							value={false}
							style={{
								fontSize: '12px',
								color: this.state.anonymized ? '#A9A9A9' : 'black'
							}}
						>Original</ToggleButton>
						<ToggleButton
							size="sm"
							variant="light"
							value={true}
							style={{
								fontSize: '12px',
								color: this.state.anonymized ? 'black' : '#A9A9A9'
							}}
						>Anonymized</ToggleButton>
					</ToggleButtonGroup>
					<ButtonGroup size="sm">
						<Button variant="primary" onClick={this.saveJSON} >Save JSON</Button>
						<Button variant="primary" onClick={this.saveCSV} >Save CSV</Button>
					</ButtonGroup>
				</ButtonToolbar>
			</Card.Body>
		);
	}
}


// CONTEXT TYPES //

ActionLog.contextTypes = {
	session: PropTypes.object
};


// EXPORTS //

export default ActionLog;
