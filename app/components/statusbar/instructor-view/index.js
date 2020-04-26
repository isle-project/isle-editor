// MODULES //

import React, { Component } from 'react';
import logger from 'debug';
import Badge from 'react-bootstrap/Badge';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import isArray from '@stdlib/assert/is-array';
import isEmptyObject from '@stdlib/assert/is-empty-object';
import max from '@stdlib/math/base/special/max';
import isElectron from 'utils/is-electron';
import ActionLog from 'components/statusbar/action-log';
import InstructorNotes from 'components/statusbar/instructor-notes';
import animatePosition from 'utils/animate-position';
import Tooltip from 'components/tooltip';
import SessionContext from 'session/context.js';
import { RECEIVED_USERS, SELECTED_COHORT, USER_FINALLY_REMOVED, USER_JOINED, USER_LEFT } from 'constants/events.js';
import UserList from './user_list.js';
import ResponseVisualizers from './response_visualizers.js';
import './instructor_view.css';


// VARIABLES //

const EDITOR_OFFSET = isElectron ? 15 : 0;
const debug = logger( 'isle:statusbar-instructor-view' );


// MAIN //

class InstructorView extends Component {
	constructor( props, context ) {
		super( props );

		const hasResponseVisualizers = !isEmptyObject( context.responseVisualizers );
		this.state = {
			activeTab: hasResponseVisualizers ? 'response_visualizers' : 'active_users',
			hidden: true,
			rightPos: -max( window.innerWidth * 0.45, 400 ),
			selectedEmail: null,
			selectedID: null
		};
	}

	componentDidMount() {
		this.addResizeListener();
		const session = this.context;
		this.unsubscribe = session.subscribe( ( type, value ) => {
			if (
				type === RECEIVED_USERS ||
				type === USER_JOINED ||
				type === USER_LEFT ||
				type === USER_FINALLY_REMOVED ||
				type === SELECTED_COHORT
			) {
				this.forceUpdate();
			}
		});
	}

	componentWillUnmount() {
		this.removeResizeListener();
		this.unsubscribe();
	}

	windowResize = () => {
		debug( 'Process a `window.resize` event...' );
		this.setState({
			rightPos: -max( window.innerWidth * 0.45, 400 )
		});
	}

	addResizeListener = () => {
		window.addEventListener( 'resize', this.windowResize );
	}

	removeResizeListener = () => {
		window.removeEventListener( 'resize', this.windowResize );
	}

	toggleBar = () => {
		if ( this.state.hidden ) {
			animatePosition( this.instructorView, 'right', EDITOR_OFFSET, 400 );
			this.handler.style.opacity = 0.7;
			this.setState({
				hidden: false
			});
			this.addResizeListener();
		} else {
			animatePosition( this.instructorView, 'right', this.state.rightPos, 400 );
			this.handler.style.opacity = 0.7;
			this.setState({
				hidden: true
			});
			this.removeResizeListener();
		}
	}

	onMouseOver = () => {
		if ( this.state.hidden ) {
			this.handler.style.opacity = 1.0;
		}
	}

	onMouseOut = () => {
		if ( this.state.hidden ) {
			this.handler.style.opacity = 0.7;
		}
	}

	onCohortChange = ( event ) => {
		debug( 'Change selected cohort...' );
		const session = this.context;
		session.selectCohort( event.target.value );
	}

	renderCohortSelection() {
		const session = this.context;
		const cohorts = session.cohorts;
		if ( !isArray( cohorts ) ) {
			return null;
		}
		const select = ( <select
			id="instructor-view-cohort-select"
			onChange={this.onCohortChange} onBlur={this.onCohortChange}
			value={session.selectedCohort ? session.selectedCohort.title : 'all'}
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
			<label htmlFor="instructor-view-cohort-select" style={{ marginRight: 5 }}>Only show users from:</label>
			{select}
		</div> );
	}

	renderTabs = () => {
		// This is the button that toggles it
		const session = this.context;
		if ( this.state.hidden ) {
			return null;
		}
		const hasResponseVisualizers = !isEmptyObject( session.responseVisualizers );
		return (
			<Tabs
				activeKey={this.state.activeTab}
				id="instructor-view-tabs"
				onSelect={( eventKey ) => {
					this.setState({
						activeTab: eventKey
					});
				}}
			>
				{ hasResponseVisualizers ? <Tab eventKey="response_visualizers" title="Responses" >
					<ResponseVisualizers
						selectedCohort={session.selectedCohort}
						session={session}
						onThumbnailClick={( id ) => {
							debug( 'Go to actions with id '+id+'...' );
							this.setState({
								activeTab: 'action_log',
								selectedID: id
							});
						}}
					/>
				</Tab> : null }
					<Tab eventKey="active_users" title={<span>Active Users<Badge variant="secondary" style={{ marginLeft: 6 }} >{session.userList.length}</Badge></span>}>
					<UserList
						session={session}
						onThumbnailClick={( email ) => {
							debug( 'Go to actions from user '+email+'...' );
							this.setState({
								activeTab: 'action_log',
								selectedEmail: email
							});
						}}
					/>
				</Tab>
				<Tab eventKey="action_log" title="Action Log" >
					<ActionLog
						selectedEmail={this.state.selectedEmail}
						selectedID={this.state.selectedID}
					/>
				</Tab>
				<Tab eventKey="instructor_notes" title="Instructor Notes" >
					{ this.state.activeTab === 'instructor_notes' ? <InstructorNotes /> : null }
				</Tab>
			</Tabs>
		);
	}

	render() {
		return (
			<div
				className="instructor-view unselectable"
				ref={( instructorView ) => { this.instructorView = instructorView; }}
				style={{
					right: this.state.rightPos
				}}
			>
				<div className="instructor-view-top">
					<h3 style={{ marginTop: '20px' }}>Instructor Panel</h3>
					<hr style={{ background: '#333', backgroundImage: 'linear-gradient(to right, #ccc, #333, #ccc)', height: '1px', border: 0 }} />
				</div>
				<div className="instructor-view-middle">
					{this.renderTabs()}
					{this.renderCohortSelection()}
				</div>
				<div className="instructor-view-bottom"></div>
				<Tooltip tooltip={`${this.state.hidden ? 'Open' : 'Close'} instructor panel`} placement="left" >
					<div className="instructor-view-handler"
						role="button" tabIndex={0}
						onClick={this.toggleBar} onKeyPress={this.toggleBar}
						onMouseOver={this.onMouseOver} onFocus={this.onMouseOver}
						onMouseOut={this.onMouseOut} onBlur={this.onMouseOut}
						ref={( handler ) => { this.handler = handler; }}
						style={{
							right: this.state.hidden ? '102%' : '100%',
							borderWidth: this.state.hidden ? '15px 26px 15px 0' : '15px 0 15px 26px',
							borderColor: this.state.hidden ? 'transparent #fa9417 transparent transparent' : 'transparent transparent transparent #fa9417'
						}}
					>
					</div>
				</Tooltip>
			</div>
		);
	}
}


// TYPES //

InstructorView.contextType = SessionContext;


// EXPORTS //

export default InstructorView;
