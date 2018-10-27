// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import Tabs from 'react-bootstrap/lib/Tabs';
import Tab from 'react-bootstrap/lib/Tab';
import max from '@stdlib/math/base/special/max';
import isElectron from 'utils/is-electron';
import ActionLog from 'components/statusbar/action-log';
import InstructorNotes from 'components/statusbar/instructor-notes';
import animatePosition from 'utils/animate-position';
import SessionContext from 'session/context.js';
import UserList from './user_list.js';
import './instructor_view.css';


// VARIABLES //

const EDITOR_OFFSET = isElectron ? 15 : 0;
const debug = logger( 'isle:statusbar-instructor-view' );


// MAIN //

class InstructorView extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			hidden: true,
			rightPos: -max( window.innerWidth * 0.45, 400 )
		};
	}

	componentDidMount() {
		this.windowResize = window.addEventListener( 'resize', () => {
			debug( 'Process a `window.resize` event...' );
			this.setState({
				rightPos: -max( window.innerWidth * 0.45, 400 )
			});
		});
	}

	componentWillUnmount() {
		if ( this.windowResize ) {
			window.removeEventListener( 'resize', this.windowResize );
		}
	}

	toggleBar() {
		if ( this.state.hidden ) {
			animatePosition( this.instructorView, 'right', EDITOR_OFFSET, 400 );
			this.handler.style.opacity = 0.7;
			this.setState({
				hidden: false
			});
		} else {
			animatePosition( this.instructorView, 'right', this.state.rightPos, 400 );
			this.handler.style.opacity = 0.7;
			this.setState({
				hidden: true
			});
		}
	}

	onMouseOver() {
		if ( this.state.hidden ) {
			this.handler.style.opacity = 1.0;
		}
	}

	onMouseOut() {
		if ( this.state.hidden ) {
			this.handler.style.opacity = 0.7;
		}
	}

	renderTabs = () => {
		// This is the button that toggles it
		const session = this.context;
		if ( this.state.hidden ) {
			return null;
		}
		return (
			<Tabs defaultActiveKey="active_users" id="instructor-view-tabs">
				<Tab eventKey="active_users" title="Active Users">
					<UserList session={session} />
				</Tab>
				<Tab eventKey="action_log" title="Action Log">
					<ActionLog />
				</Tab>
				<Tab eventKey="instructor_notes" title="Instructor Notes">
					<InstructorNotes
						id={session.lessonID+'instructor_notebook'}
						className="instructor_notebook"
					/>
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
				</div>
				<div className="instructor-view-bottom"></div>
				<div className="instructor-view-handler"
					onClick={this.toggleBar.bind( this )}
					onMouseOver={this.onMouseOver.bind( this )}
					onMouseOut={this.onMouseOut.bind( this )}
					ref={( handler ) => { this.handler = handler; }}
					style={{
						right: this.state.hidden ? '105%' : '102%',
						borderWidth: this.state.hidden ? '20px 34.6px 20px 0' : '20px 0 20px 34.6px',
						borderColor: this.state.hidden ? 'transparent #fa9417 transparent transparent' : 'transparent transparent transparent silver'
					}}>
				</div>
			</div>
		);
	}
}


// TYPES //

InstructorView.contextType = SessionContext;


// EXPORTS //

export default InstructorView;
