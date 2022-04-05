// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import { withTranslation } from 'react-i18next';
import innerText from 'react-innertext';
import CreatableSelect from 'react-select/creatable';
import { components } from 'react-select';
import Button from 'react-bootstrap/Button';
import isEmptyObject from '@stdlib/assert/is-empty-object';
import contains from '@stdlib/assert/contains';
import { isPrimitive as isString } from '@stdlib/assert/is-string';
import ceil from '@stdlib/math/base/special/ceil';
import floor from '@stdlib/math/base/special/floor';
import sample from '@stdlib/random/sample';
import shuffle from '@stdlib/random/shuffle';
import replace from '@stdlib/string/replace';
import Panel from '@isle-project/components/panel';
import ChatButton from '@isle-project/components/internal/chat-button';
import VideoChatButton from '@isle-project/components/internal/video-chat-button';
import Draggable from '@isle-project/components/draggable';
import Tooltip from '@isle-project/components/tooltip';
import Timer from '@isle-project/components/timer';
import NumberInput from '@isle-project/components/input/number';
import SelectInput from '@isle-project/components/input/select';
import EditorView from '@isle-project/components/text-editor/view.js';
import { marks, wraps, insert } from '@isle-project/components/text-editor/config/menu.js';
import SessionContext from '@isle-project/session/context.js';
import retrieveUserGroup from '@isle-project/utils/retrieve-user-group';
import Group from './group.js';
import ConfirmModal from './../confirm_modal.js';
import CohortSelect from './../cohort_select.js';
import names from './names.json';
import { CREATED_GROUPS, DELETED_GROUPS, MEMBER_ACTION, SELECTED_COHORT, USER_JOINED, USER_LEFT } from '@isle-project/constants/events.js';
import { GROUP_MODE_END } from '@isle-project/constants/actions.js';
import isUserInCohort from '@isle-project/utils/is-user-in-cohort';
import './group_manager.css';


// VARIABLES //

const debug = logger( 'isle:group-manager' );
const customSelectStyles = {
	multiValue: ( provided ) => ({
		...provided,
		boxShadow: '0 0 2px black',
		marginRight: '4px'
	}),
	control: ( provided ) => ({
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

function selectUsers( userList, selectedCohort ) {
	const users = userList;
	if ( !selectedCohort ) {
		return users.filter( x => !x.owner && !x.exitTime && contains( x.email, '@' ) );
	}
	const out = [];
	for ( let i = 0; i < users.length; i++ ) {
		const user = users[ i ];
		if ( !user.owner && isUserInCohort( selectedCohort, user.email ) ) {
			out.push( user );
		}
	}
	return out;
}

function countStudents( userList, selectedCohort ) {
	let out = 0;
	if ( !selectedCohort ) {
		for ( let i = 0; i < userList.length; i++ ) {
			const user = userList[ i ];
			if ( !user.owner && !user.exitTime && contains( user.email, '@' ) ) {
				out += 1;
			}
		}
	} else {
		for ( let i = 0; i < userList.length; i++ ) {
			const user = userList[ i ];
			if (
				!user.owner &&
				!user.exitTime &&
				isUserInCohort( selectedCohort, user.email )
			) {
				out += 1;
			}
		}
	}
	return out;
}

function extractQuestions( session ) {
	const questions = [];
	const keys = session.responseVisualizerIds;
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

function progressGroupAssignment( nGroups, users, progress, matching ) {
	const out = {};
	const nUsersPerGroup = floor( users.length / nGroups );
	users = users.sort( ( a, b ) => {
		return progress[ a.email ] - progress[ b.email ];
	});
	if ( matching === 'similar' ) {
		const breakpoint = users.length % nGroups;
		for ( let i = 0, j = 0; i < nGroups; i++ ) {
			let start = nUsersPerGroup * i + j;
			if ( i < breakpoint ) {
				j += 1;
			}
			let end = nUsersPerGroup * ( i + 1 ) + j;
			out[ i ] = users.slice( start, end );
		}
	}
	else {
		// Case: `matching` is set to `dissimilar`
		for ( let i = 0; i < nGroups; i++ ) {
			out[ i ] = [];
		}
		let i = 0;
		let small = false;
		while ( users.length > 0 ) {
			out[ i ].push( small ? users.shift() : users.pop() );
			if ( i < nGroups - 1 ) {
				i += 1;
			} else {
				i = 0;
				small = !small;
			}
		}
	}
	return out;
}

function createGroups({ nGroups, users, mode, progress, matching }) {
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
			groupUsers = progressGroupAssignment( nGroups, users, progress, matching );
		break;
		case 'answers':
			groupUsers = randomGroupAssignment( nGroups, users );
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
			nGroups: 1,
			isClosing: false,
			showCloseModal: false,
			notAssigned: [],
			toRemove: [],
			toAdd: [],
			lastGroups: null,
			message: '',
			docId: 0
		};
	}

	componentDidMount() {
		debug( 'Component did mount...' );
		const session = this.context;
		if ( session ) {
			this.unsubscribe = session.subscribe( ( type, data ) => {
				if ( type === USER_JOINED && session.allGroups.length > 0 && !data.owner ) {
					const group = retrieveUserGroup( session.allGroups, data );
					if ( !group ) {
						const notAssigned = this.state.notAssigned.slice();
						const picture = session.server + '/thumbnail/' + data.picture;
						const value = { 'value': { email: data.email, picture }, 'label': data.name };
						notAssigned.push( value );
						this.setState({
							notAssigned
						});
					}
				}
				else if ( type === DELETED_GROUPS ) {
					session.removeNotification( this.closeNotification );
					this.setState({
						isClosing: false,
						lastGroups: data
					});
				}
				else if ( type === MEMBER_ACTION && data.type === GROUP_MODE_END ) {
					this.closeNotification = session.addNotification({
						title: this.props.t( 'groups-close-soon' ),
						message: this.props.t( 'groups-close-soon-instructor-message' ),
						level: 'info',
						position: 'tr',
						dismissible: 'none',
						autoDismiss: 0,
						children: <Timer style={{ position: 'relative' }} duration={60} active />
					});
					this.setState({
						isClosing: true
					});
				}
				else if ( type === CREATED_GROUPS ) {
					const notAssigned = this.state.notAssigned.filter( x => {
						for ( let i = 0; i < session.allGroups.length; i++ ) {
							const { members } = session.allGroups[ i ];
							for ( let j = 0; j < members.length; j++ ) {
								if ( members[ j ].email === x.value.email ) {
									return false;
								}
							}
						}
						return true;
					});
					this.setState({ notAssigned });
				} else if (
					type === USER_JOINED ||
					type === SELECTED_COHORT
				) {
					this.forceUpdate();
				}
				else if ( type === USER_LEFT ) {
					const notAssigned = this.state.notAssigned.filter( x => {
						return x.value.email !== data;
					});
					this.setState({ notAssigned });
				}
			});
		}
	}

	componentWillUnmount() {
		debug( 'Component will unmount...' );
		if ( this.unsubscribe ) {
			this.unsubscribe();
		}
	}

	handleGroupCreation = () => {
		const session = this.context;
		const groups = createGroups({
			nGroups: this.state.nGroups,
			users: selectUsers( session.userList, session.selectedCohort ),
			mode: this.state.activeMode,
			progress: session.userProgress,
			matching: this.state.matching
		});
		session.createGroups( groups );
	};

	reuseLastGroups = () => {
		const session = this.context;
		session.createGroups( this.state.lastGroups );
	};

	updateGroups = () => {
		const session = this.context;
		const groups = session.allGroups;
		for ( let i = 0; i < this.state.toRemove.length; i++ ) {
			const { email, group } = this.state.toRemove[ i ].value;
			for ( let j = 0; j < groups.length; j++ ) {
				if ( groups[ j ].name === group ) {
					groups[ j ].members = groups[ j ].members.filter( x => x.email !== email );
					break;
				}
			}
		}
		for ( let i = 0; i < this.state.toAdd.length; i++ ) {
			const user = this.state.toAdd[ i ].value;
			for ( let j = 0; j < groups.length; j++ ) {
				const group = groups[ j ];
				if (
					group.name === user.group &&
					group.members.filter( x => x.email === user.email ).length === 0
				) {
					const found = session.userList.filter( x => x.email === user.email );
					group.members.push( found[ 0 ] );
					break;
				}
			}
		}
		session.deleteGroups();
		session.createGroups( groups );
		this.setState({
			toAdd: [],
			toRemove: []
		});
	};

	handleGroupDeletion = () => {
		const session = this.context;
		session.log({
			id: 'group-manager',
			type: GROUP_MODE_END,
			value: true
		}, 'members' );
		setTimeout( session.deleteGroups, 60000 );
		this.setState({
			showCloseModal: false
		});
	};

	sendMessageToAll = () => {
		let text = this.editorView.markdown;
		if ( text.length === 0 ) {
			return;
		}
		text = replace( text, '\\\n', '\n' );
		const session = this.context;
		for ( let i = 0; i < session.allGroups.length; i++ ) {
			const { name } = session.allGroups[ i ];
			session.sendChatMessage( name, text );
		}
		this.setState({
			message: '',
			docId: this.state.docId + 1
		});
	};

	toggleCloseConfirm = () => {
		this.setState({
			showCloseModal: !this.state.showCloseModal
		});
	};

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
		const { t } = this.props;
		switch ( this.state.activeMode ) {
			case 'progress':
				return ( <div>
					<p>
					{t('create-groups-pairing-students')}
					{input}.
					</p>
				</div> );
			case 'answers':
				return ( <div>
					<p>
						{t('create-groups-with-answers')}
						{input}
						<br />
						{t('to-the-question')}{': '}
						{questionSelect}
					</p>
				</div> );
			default:
				return (
					<div>
						<p>{this.props.t( 'random-groups-description' )}</p>
					</div>
				);
		}
	}

	renderGroups() {
		const session = this.context;
		const out = [];
		for ( let i = 0; i < session.allGroups.length; i++ ) {
			const { name, members } = session.allGroups[ i ];
			const options = members.map( x => {
				const picture = session.server + '/thumbnail/' + x.picture;
				return { 'value': { email: x.email, picture, group: name }, 'label': x.name };
			});
			out[ i ] = <div
				key={i}
			>
				<h3 className="group-manager-header" >
					<span className="group-manager-header-name">{this.props.t( 'group' )} {name}</span>
					{this.props.video ? <VideoChatButton showTooltip={false} for={name} subject={name} style={{ float: 'right', marginTop: -2, marginLeft: 5 }} /> : null}
					<ChatButton showTooltip={false} for={name} style={{ float: 'right', marginTop: -2 }} />
				</h3>
				<CreatableSelect
					components={customSelectComponents}
					isMulti
					isClearable={false}
					defaultValue={options}
					options={this.state.notAssigned}
					styles={customSelectStyles}
					menuPlacement="bottom"
					menuShouldScrollIntoView={false}
					onChange={( _, action ) => {
						if ( action.action === 'remove-value' ) {
							const notAssigned = this.state.notAssigned.slice();
							notAssigned.push( action.removedValue );
							const toRemove = this.state.toRemove.slice();
							toRemove.push( action.removedValue );
							this.setState({
								notAssigned,
								toRemove
							});
						} else if ( action.action === 'select-option' ) {
							const toAdd = this.state.toAdd.slice();
							action.option.value.group = name;
							toAdd.push( action.option );
							const notAssigned = this.state.notAssigned.filter( x => {
								return x.value.email !== action.option.value.email;
							});
							this.setState({
								notAssigned,
								toAdd
							});
						}
					}}
				/>
			</div>;
		}
		if ( this.state.notAssigned.length > 0 ) {
			out.push( <span className="group-manager-not-assigned-warning" >
				{this.props.t( 'nonassigned-students', {
					n: this.state.notAssigned.length
				})}
			</span> );
		}
		return out;
	}

	renderBody() {
		const session = this.context;
		const nUsers = countStudents( session.userList, session.selectedCohort );
		const nUsersPerGroup = floor( nUsers / this.state.nGroups );
		let groupSizes = `(${this.props.t( 'group-sizes' )}: ${nUsersPerGroup}`;
		if ( nUsers % this.state.nGroups !== 0 ) {
			groupSizes += `-${nUsersPerGroup+1})`;
		} else {
			groupSizes += ')';
		}
		if ( session.allGroups.length > 0 ) {
			return ( <Fragment>
				{this.renderGroups()}
				<div className="group-manager-editor-wrapper" >
					<EditorView
						className="group-manager-textarea cancel"
						showStatusBar={false}
						defaultValue={this.state.message}
						showColorPicker={false}
						menu={{
							marks,
							wraps,
							insert: [
								insert[ 0 ],
								insert[ 1 ],
								insert[ 5 ]
							]
						}}
						ref={( div ) => {
							this.editorView = div;
						}}
						onKeyDown={( _, event ) => {
							event.stopPropagation();
							if ( event.key === 'Enter' && !event.shiftKey ) {
								event.preventDefault();
								this.sendMessageToAll();
							}
						}}
					/>
				</div>
			</Fragment> );
		}
		return ( <Fragment>
			<CohortSelect
				id="group-manager-cohort-select"
				label={this.props.t( 'pair-users-from' )}
				session={this.context}
				t={this.props.t}
			/>
			<NumberInput
				legend={this.props.t( 'number-of-groups' )}
				value={this.state.nGroups}
				min={1} max={floor( ceil( nUsers / 2 + 1e-9 ), 99 )}
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
				<Tooltip tooltip={this.props.t( 'random-assignment' )} placement="bottom" >
					<Button
						active={this.state.activeMode === 'random'} size="lg" variant="outline-secondary"
						onClick={() => {
							if ( this.state.activeMode !== 'random' ) {
								this.setState({ activeMode: 'random' });
							}
						}}
						aria-label={this.props.t( 'random-assignment' )}
					>
						<span className="fa fa-dice" />
					</Button>
				</Tooltip>
				<Tooltip tooltip={this.props.t( 'match-by-progress' )} placement="bottom" >
					<Button
						active={this.state.activeMode === 'progress'}
						size="lg" variant="outline-secondary" style={{ marginLeft: 6 }}
						onClick={() => {
							if ( this.state.activeMode !== 'progress' ) {
								this.setState({ activeMode: 'progress' });
							}
						}}
						aria-label={this.props.t( 'match-by-progress' )}
					>
						<span className="fa fa-trophy" />
					</Button>
				</Tooltip>
				<Tooltip tooltip={this.props.t( 'match-by-answers' )} placement="bottom" >
					<Button
						active={this.state.activeMode === 'answers'}
						disabled={isEmptyObject( session.responseVisualizers )}
						size="lg" variant="outline-secondary" style={{ marginLeft: 6 }}
						onClick={() => {
							if ( this.state.activeMode !== 'answers' ) {
								this.setState({ activeMode: 'answers' });
							}
						}}
						aria-label={this.props.t( 'match-by-answers' )}
					>
						<span className="fa fa-poll" />
					</Button>
				</Tooltip>
			</div>
			<br />
			{this.renderModeOptions()}
		</Fragment> );
	}

	renderFooter() {
		const session = this.context;
		const nUsers = countStudents( session.userList );
		if ( session.allGroups.length > 0 ) {
			return ( <Fragment>
				<Tooltip tooltip={this.props.t( 'broadcast-message-tooltip')} placement="bottom" >
					<Button onClick={this.sendMessageToAll} >
						{this.props.t( 'broadcast-message' )}
					</Button>
				</Tooltip>
				<Tooltip tooltip={this.props.t( 'close-groups-tooltip' )} placement="bottom" >
					<Button variant="danger" disabled={this.state.isClosing} onClick={this.toggleCloseConfirm} style={{ float: 'right' }} >
						{this.props.t( 'close-groups' )}
					</Button>
				</Tooltip>
				{ this.state.toAdd.length > 0 || this.state.toRemove.length > 0 ?
					<Tooltip tooltip={this.props.t( 'update-groups-tooltip' )} placement="bottom" >
						<Button onClick={this.updateGroups} style={{ float: 'right', marginRight: 6 }} >
							{this.props.t( 'update-groups' )}
						</Button>
					</Tooltip>: null
				}
			</Fragment> );
		}
		return ( <Fragment>
			<Tooltip tooltip={this.props.t( 'reopen-last-groups-tooltip' )} placement="bottom" show={this.state.lastGroups} >
				<Button
					variant="secondary"
					disabled={!this.state.lastGroups}
					onClick={this.reuseLastGroups}
				>{this.props.t( 'reopen-last-groups' )}</Button>
			</Tooltip>
			<Tooltip tooltip={this.props.t( 'create-groups-tooltip' )} placement="bottom" show={nUsers > 0} >
			<Button
				disabled={nUsers === 0}
				onClick={this.handleGroupCreation}
				style={{ float: 'right' }}
			>{this.props.t( 'create-groups' )}</Button>
			</Tooltip>
		</Fragment> );
	}

	render() {
		if ( !this.props.active ) {
			return null;
		}
		return (
			<Fragment>
				<Draggable cancel=".card-body" default={{ x: 0.4 * window.innerWidth }} >
					<Panel minimizable trapFocus header={<span>
						<span className="fa fa-xs fa-user-friends" style={{ marginRight: 5 }} />
						{this.props.t( 'group-manager' )}
					</span>} onHide={this.props.onHide} style={{ width: 600 }} bodyStyle={{
						maxHeight: '75vh'
					}} footer={this.renderFooter()}>
						{this.renderBody()}
					</Panel>
				</Draggable>
				<ConfirmModal
					show={this.state.showCloseModal}
					close={this.toggleCloseConfirm}
					title={this.props.t( 'close-groups' )}
					message={this.props.t( 'close-groups-confirm' )}
					onConfirm={this.handleGroupDeletion}
					t={this.props.t}
				/>
			</Fragment>
		);
	}
}


// TYPES //

GroupManager.contextType = SessionContext;

GroupManager.propTypes = {
	video: PropTypes.bool
};

GroupManager.defaultProps = {
	video: true
};


// EXPORTS //

export default withTranslation( 'internal/statusbar' )( GroupManager );
