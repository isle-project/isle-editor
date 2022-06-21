// MODULES //

import React, { Component, Fragment } from 'react';
import logger from 'debug';
import FocusTrap from 'focus-trap-react';
import { withTranslation } from 'react-i18next';
import Badge from 'react-bootstrap/Badge';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import isEmptyObject from '@stdlib/assert/is-empty-object';
import max from '@stdlib/math/base/special/max';
import isElectron from '@isle-project/utils/is-electron';
import ActionLog from '@isle-project/components/internal/statusbar/action-log';
import InstructorNotesEditor from '@isle-project/components/internal/statusbar/instructor-notes-editor';
import animatePosition from '@isle-project/utils/animate-position';
import Tooltip from '@isle-project/components/tooltip';
import KeyControls from '@isle-project/components/key-controls';
import SessionContext from '@isle-project/session/context.js';
import { RECEIVED_USERS, SELECTED_COHORT, USER_FINALLY_REMOVED, USER_JOINED, USER_LEFT } from '@isle-project/constants/events.js';
import UserList from './user_list.js';
import ResponseVisualizers from './response_visualizers.js';
import StudentResponses from './student_responses.js';
import CohortSelect from './../cohort_select.js';
import './instructor_view.css';


// VARIABLES //

const EDITOR_OFFSET = isElectron ? 15 : 0;
const debug = logger( 'isle:statusbar-instructor-view' );
const I = '(I)';
const FOCUS_TRAP_OPTIONS = {
	clickOutsideDeactivates: true
};


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
		if ( this.unsubscribe ) {
			this.unsubscribe();
		}
	}
	toggleHidden = () => {
		this.setState({
			hidden: !this.state.hidden
		});
	};

	toggleBar = () => {
		if ( this.state.hidden ) {
			this.toggleHidden();
			animatePosition( this.instructorView, 'right', EDITOR_OFFSET, 400 );
			this.handler.style.opacity = 0.7;
		} else {
			animatePosition( this.instructorView, 'right', this.state.rightPos, 400, this.toggleHidden );
			setTimeout( this.toggleHidden, 400 );
			this.handler.style.opacity = 0.7;
		}
	};

	onMouseOver = () => {
		if ( this.state.hidden ) {
			this.handler.style.opacity = 1.0;
		}
	};

	onMouseOut = () => {
		if ( this.state.hidden ) {
			this.handler.style.opacity = 0.7;
		}
	};

	renderTabs = () => {
		const { t } = this.props;
		const session = this.context;
		if ( this.state.hidden ) {
			return null;
		}
		const hasResponseVisualizers = !isEmptyObject( session.responseVisualizers );
		return (
			<FocusTrap focusTrapOptions={FOCUS_TRAP_OPTIONS} >
				<div>
					<Tabs
						activeKey={this.state.activeTab}
						id="instructor-view-tabs"
						onSelect={( eventKey ) => {
							this.setState({
								activeTab: eventKey
							});
						}}
					>
						{ hasResponseVisualizers ? <Tab eventKey="response_visualizers" title={t( 'activity' )} >
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
								t={t}
							/>
						</Tab> : null }
						{ hasResponseVisualizers ? <Tab eventKey="student_responses" title={t( 'responses' )} >
							<StudentResponses
								selectedCohort={session.selectedCohort}
								session={session}
								t={t}
								activeTab={this.state.activeTab}
							/>
						</Tab> : null }
							<Tab eventKey="active_users" title={<span>{t( 'active-users' )}<Badge bg="secondary" style={{ marginLeft: 6 }} >{session.userList.length}</Badge></span>}>
							<UserList
								session={session}
								onThumbnailClick={( email ) => {
									debug( 'Go to actions from user '+email+'...' );
									this.setState({
										activeTab: 'action_log',
										selectedEmail: email
									});
								}}
								t={t}
							/>
						</Tab>
						<Tab eventKey="action_log" title={t( 'action-log' )} >
							<ActionLog
								selectedEmail={this.state.selectedEmail}
								selectedID={this.state.selectedID}
								t={t}
							/>
						</Tab>
						<Tab eventKey="instructor_notes" title={t( 'instructor-notes' )} >
							{ this.state.activeTab === 'instructor_notes' ? <InstructorNotesEditor /> : null }
						</Tab>
					</Tabs>
					{this.renderHandler()}
				</div>
			</FocusTrap>
		);
	};

	renderHandler() {
		const { t } = this.props;
		return (
			<Tooltip tooltip={`${this.state.hidden ? t( 'instructor-panel-open' ) : t( 'instructor-panel-close' )} ${I}`} placement="left" >
				<div className="instructor-view-handler"
					role="button" tabIndex={0}
					aria-label={this.state.hidden ? t( 'instructor-panel-open' ) : t( 'instructor-panel-close' )}
					onClick={this.toggleBar} onKeyPress={this.toggleBar}
					onMouseOver={this.onMouseOver} onFocus={this.onMouseOver}
					onMouseOut={this.onMouseOut} onBlur={this.onMouseOut}
					ref={( handler ) => { this.handler = handler; }}
					style={{
						right: EDITOR_OFFSET + 12,
						borderWidth: this.state.hidden ? '15px 26px 15px 0' : '15px 0 15px 26px',
						borderColor: this.state.hidden ? 'transparent #c95d0a transparent transparent' : 'transparent transparent transparent #c95d0a'
					}}
				>
				</div>
			</Tooltip>
		);
	}

	render() {
		const { t } = this.props;
		return (
			<Fragment>
				<div
					className="instructor-view unselectable"
					ref={( instructorView ) => { this.instructorView = instructorView; }}
					style={{
						right: this.state.rightPos,
						display: this.state.hidden ? 'none' : 'inherit',
						width: this.state.activeTab === 'student_responses' ? '68%' : '45%'
					}}
					tabIndex="-1"
				>
					<div className="instructor-view-top">
						<h3 style={{ marginTop: '20px' }}>{t( 'instructor-panel' )}</h3>
						<hr style={{ background: '#333', backgroundImage: 'linear-gradient(to right, #ccc, #333, #ccc)', height: '1px', border: 0 }} />
					</div>
					<div className="instructor-view-middle">
						{this.renderTabs()}
						<CohortSelect
							id="instructor-view-cohort-select"
							label={t( 'only-show-users-from')}
							session={this.context}
							t={t}
						/>
					</div>
					<div className="instructor-view-bottom"></div>
				</div>
				{this.state.hidden ? this.renderHandler() : null}
				<KeyControls
					actions={{
						'i': this.toggleBar
					}}
				/>
			</Fragment>
		);
	}
}


// TYPES //

InstructorView.contextType = SessionContext;


// EXPORTS //

export default withTranslation( 'internal/statusbar' )( InstructorView );
