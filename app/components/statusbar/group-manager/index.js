// MODULES //

import React, { Component, Fragment } from 'react';
import logger from 'debug';
import innerText from 'react-innertext';
import CreatableSelect from 'react-select/creatable';
import { components } from 'react-select';
import Button from 'react-bootstrap/Button';
import isEmptyObject from '@stdlib/assert/is-empty-object';
import objectKeys from '@stdlib/utils/keys';
import { isPrimitive as isString } from '@stdlib/assert/is-string';
import ceil from '@stdlib/math/base/special/ceil';
import floor from '@stdlib/math/base/special/floor';
import sample from '@stdlib/random/sample';
import shuffle from '@stdlib/random/shuffle';
import Panel from 'components/panel';
import ChatButton from 'components/chat-button';
import VideoChatButton from 'components/video-chat-button';
import Draggable from 'components/draggable';
import Tooltip from 'components/tooltip';
import NumberInput from 'components/input/number';
import SelectInput from 'components/input/select';
import SessionContext from 'session/context.js';
import Group from './group.js';
import names from './names.json';
import { CREATED_GROUPS, DELETED_GROUPS } from 'constants/events.js';
import './group_manager.css';


// VARIABLES //

const debug = logger( 'isle:group-manager' );
const customSelectStyles = {
	multiValue: ( provided, state ) => ({
		...provided,
		boxShadow: '0 0 2px black',
		marginRight: '4px'
	}),
	control: ( provided, state ) => ({
		...provided,
		borderRadius: '0 0 4px 4px'
	})
};
const customSelectComponents = {
	MultiValueLabel: props => {
		return (
			<Tooltip
				tooltip={props.data.value.email}
				placement="bottom"
			>
				<span>
					<img className="group-manager-profile-pic" alt="User Profile" src={props.data.value.picture} />
					<components.MultiValueLabel {...props} />
				</span>
			</Tooltip>
		);
	}
};


// FUNCTIONS //

function countStudents( userList ) {
	let out = 0;
	for ( let i = 0; i < userList.length; i++ ) {
		if ( !userList[ i ].owner ) {
			out += 1;
		}
	}
	return out;
}

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
	const groups = [];
	for ( let i = 0; i < groupNames.length; i++ ) {
		groups[ i ] = new Group( groupNames[ i ], groupUsers[ i ] );
	}
	return groups;
}


// MAIN //

class GroupManager extends Component {
	constructor( props ) {
		super( props );

		this.state= {
			activeMode: 'random',
			matching: 'similar',
			running: false,
			nGroups: 1,
			notAssigned: []
		};
	}

	componentDidMount() {
		debug( 'Component did mount...' );
		const session = this.context;
		if ( session ) {
			this.unsubscribe = session.subscribe( ( type, data ) => {
				if ( type === CREATED_GROUPS ) {
					console.log( 'SHOULD CREATE GROUPS' );
				}
				else if ( type === DELETED_GROUPS ) {
					this.setState({
						running: false
					});
				}
			});
		}
	}

	componentWillUnmount() {
		debug( 'Component will unmount...' );
		this.unsubscribe();
	}

	handleGroupCreation = () => {
		const session = this.context;
		const groups = createGroups({
			nGroups: this.state.nGroups,
			users: session.userList.filter( x => !x.owner ),
			mode: this.state.activeMode
		});
		session.createGroups( groups );
		this.setState({
			running: true,
			groups
		});
	}

	handleGroupDeletion = () => {
		const session = this.context;
		for ( let i = 0; i < this.state.groups.length; i++ ) {
			session.closeChatForAll( this.state.groups[ i ].name );
		}
		session.deleteGroups();
		this.setState({ running: false });
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
		const session = this.context;
		const out = [];
		for ( let i = 0; i < this.state.groups.length; i++ ) {
			const { name, members } = this.state.groups[ i ];
			const options = members.map( x => {
				const picture = session.server + '/thumbnail/' + x.picture;
				return { 'value': { email: x.email, picture }, 'label': x.name };
			});
			out[ i ] = <div
				key={i}
			>
				<h3 className="group-manager-header" >
					{name}
					<VideoChatButton showTooltip={false} for={name} subject={name} style={{ float: 'right', marginTop: -2, marginLeft: 5 }} />
					<ChatButton showTooltip={false} for={name} style={{ float: 'right', marginTop: -2 }} />
				</h3>
				<CreatableSelect
					components={customSelectComponents}
					isMulti
					isClearable={false}
					defaultValue={options}
					options={this.state.notAssigned}
					styles={customSelectStyles}
					menuPlacement={i === this.state.groups.length - 1 ? 'top' : 'bottom'}
					onChange={( _, action ) => {
						if ( action.action === 'remove-value' ) {
							const notAssigned = this.state.notAssigned.slice();
							notAssigned.push( action.removedValue );
							this.setState({
								notAssigned
							});
						} else if ( action.action === 'select-option' ) {
							const notAssigned = this.state.notAssigned.filter( x => {
								return x.value.email !== action.option.value.email;
							});
							this.setState({
								notAssigned
							});
						}
					}}
				/>
			</div>;
		}
		return out;
	}

	renderBody() {
		const session = this.context;
		const nUsers = countStudents( session.userList );
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
				<hr />
				<Button onClick={this.handleGroupDeletion} >
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
			<Button onClick={this.handleGroupCreation}>Create Groups</Button>
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
