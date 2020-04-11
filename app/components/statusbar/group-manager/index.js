// MODULES //

import React, { Component, Fragment } from 'react';
import logger from 'debug';
import innerText from 'react-innertext';
import Button from 'react-bootstrap/Button';
import isEmptyObject from '@stdlib/assert/is-empty-object';
import objectKeys from '@stdlib/utils/keys';
import { isPrimitive as isString } from '@stdlib/assert/is-string';
import ceil from '@stdlib/math/base/special/ceil';
import floor from '@stdlib/math/base/special/floor';
import sample from '@stdlib/random/sample';
import shuffle from '@stdlib/random/shuffle';
import Panel from 'components/panel';
import Collapse from 'components/collapse';
import Draggable from 'components/draggable';
import Tooltip from 'components/tooltip';
import NumberInput from 'components/input/number';
import SelectInput from 'components/input/select';
import SessionContext from 'session/context.js';
import Group from './group.js';
import names from './names.json';


// VARIABLES //

const debug = logger( 'isle:group-manager' );
const USERS = require( './../../../../test/mocks/user_list.js' );


// FUNCTIONS //

function extractQuestions( session ) {
	const questions = [];
	const keys = objectKeys( session.responseVisualizers );
	for ( let i = 0; i < keys.length; i++ ) {
		const id = keys[ i ];
		let question = session.responseVisualizers[ id ].ref.props.data.question;
		question = isString( question ) ? question : innerText( question );
		questions.push( `${question} (${id})` );
	}
	return questions;
}

function randomGroupAssignment( nGroups, users ) {
	users = shuffle( users );
	const out = {};
	const nUsersPerGroup = floor( users.length / nGroups );
	for ( let i = 0; i < nGroups; i++ ) {
		out[ i ] = users.slice( nUsersPerGroup*i, nUsersPerGroup*(i+1) );
	}
	for ( let i = nUsersPerGroup * nGroups; i < users.length; i++ ) {
		const groupIndex = i % nGroups;
		out[ groupIndex ].push( users[ i ] );
	}
	return out;
}

function createGroups({ nGroups, users, mode }) {
	const groupNames = sample( names, {
		size: nGroups,
		replace: false
	});
	let groupUsers;
	switch ( mode ) {
		case 'random':
			groupUsers = randomGroupAssignment( nGroups, users );
		break;
		case 'progress':
		break;
		case 'answers':
		break;
	}
	console.log( groupUsers );
	const groups = [];
	for ( let i = 0; i < groupNames.length; i++ ) {
		groups[ i ] = new Group( groupNames[ i ], groupUsers[ i ] );
	}
	return groups;
}


// MAIN //

class GroupManager extends Component {
	constructor( props, context ) {
		super( props );

		this.state= {
			activeMode: 'random',
			matching: 'similar',
			running: false,
			nGroups: 1
		};
	}

	componentDidMount() {
		debug( 'Component did mount...' );
		const session = this.context;
		if ( session ) {
			this.unsubscribe = session.subscribe( ( type, data ) => {

			});
		}
	}

	componentWillUnmount() {
		debug( 'Component will unmount...' );
		this.unsubscribe();
	}

	renderModeOptions() {
		const input = <SelectInput
			options={['similar', 'dissimilar']}
			value={this.state.matching} inline
			onChange={( value ) => {
				this.setState({ matching: value });
			}}
			style={{ width: 150 }}
		/>;
		const questionSelect = <SelectInput
			options={extractQuestions( this.context )} inline
			style={{ width: 412 }}
		/>;
		switch ( this.state.activeMode ) {
			case 'progress':
				return ( <div>
					<p>
						Create groups by pairing students with {input} progress.
					</p>
				</div> );
			case 'answers':
				return ( <div>
					<p>Create groups by pairing students with {input} answers
					<br />
					to the question {questionSelect}.
					</p>
				</div> );
			default:
				return (
					<div>
						<p>Create groups by randomly placing students into groups.</p>
					</div>
				);
		}
	}

	renderGroups() {
		const out = [];
		for ( let i = 0; i < this.state.groups.length; i++ ) {
			const { name } = this.state.groups[ i ];
			out[ i ] = <Collapse
				headerStyle={{ background: 'lightgray', padding: 5 }}
				header={name} key={i}
			>

			</Collapse>;
		}
		return out;
	}

	renderBody() {
		const session = this.context;
		const nUsers = USERS.length || session.userList.length;
		const nUsersPerGroup = floor( nUsers / this.state.nGroups );
		let groupSizes = `(group sizes: ${nUsersPerGroup}`;
		if ( nUsers % this.state.nGroups !== 0 ) {
			groupSizes += `-${nUsersPerGroup+1})`;
		} else {
			groupSizes += ')';
		}
		if ( this.state.running ) {
			return ( <Fragment>
				{this.renderGroups()}
				<Button onClick={() => {
					this.setState({ running: false });
				}} >
					Close Groups
				</Button>
			</Fragment> );
		}
		return ( <Fragment>
			<NumberInput
				legend="Number of Groups"
				value={this.state.nGroups}
				min={1} max={floor( ceil( nUsers / 2 ), 99 )}
				onChange={( nGroups ) => {
					this.setState({
						nGroups
					});
				}}
				inline inputStyle={{ width: 50 }}
			/>
			<span className="title" >{groupSizes}</span>
			<hr />
			<div>
				<Tooltip tooltip="Random assignment" placement="bottom" >
					<Button
						active={this.state.activeMode === 'random'} size="lg" variant="outline-secondary"
						onClick={() => {
							if ( this.state.activeMode !== 'random' ) {
								this.setState({ activeMode: 'random' });
							}
						}}
					>
						<span className="fa fa-dice" />
					</Button>
				</Tooltip>
				<Tooltip tooltip="Match by progress" placement="bottom" >
					<Button
						active={this.state.activeMode === 'progress'}
						size="lg" variant="outline-secondary" style={{ marginLeft: 6 }}
						onClick={() => {
							if ( this.state.activeMode !== 'progress' ) {
								this.setState({ activeMode: 'progress' });
							}
						}}
					>
						<span className="fa fa-trophy" />
					</Button>
				</Tooltip>
				<Tooltip tooltip="Match by answers" placement="bottom" >
					<Button
						active={this.state.activeMode === 'answers'}
						disabled={isEmptyObject( session.responseVisualizers )}
						size="lg" variant="outline-secondary" style={{ marginLeft: 6 }}
						onClick={() => {
							if ( this.state.activeMode !== 'answers' ) {
								this.setState({ activeMode: 'answers' });
							}
						}}
					>
						<span className="fa fa-poll" />
					</Button>
				</Tooltip>
			</div>
			<br />
			{this.renderModeOptions()}
			<hr />
			<Button onClick={() => {
				const groups = createGroups({
					nGroups: this.state.nGroups,
					users: USERS,
					mode: this.state.activeMode
				});
				this.setState({
					running: true,
					groups
				});
			}}>Create Groups</Button>
		</Fragment> );
	}

	render() {
		if ( !this.props.active ) {
			return null;
		}
		return (
			<Draggable cancel=".card-body" >
				<Panel minimizable header={<span>
					<span className="fa fa-xs fa-user-friends" style={{ marginRight: 5 }} />
					Group Manager
				</span>} onHide={this.props.onHide} style={{ width: 600 }}>
					{this.renderBody()}
				</Panel>
			</Draggable>
		);
	}
}


// TYPES //

GroupManager.contextType = SessionContext;


// EXPORTS //

export default GroupManager;
