// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import ReactNotificationSystem from 'react-notification-system';
import { ContextMenuTrigger } from 'react-contextmenu';
import { withTranslation } from 'react-i18next';
import isObjectArray from '@stdlib/assert/is-object-array';
import LanguageSwitcher from '@isle-project/components/internal/language-switcher';
import StickyNote from '@isle-project/components/sticky-note';
import randomstring from '@isle-project/utils/randomstring/alphanumeric';
import SessionContext from '@isle-project/session/context.js';
import { DELETE_STICKY_NOTE, INSERT_STICKY_NOTE, STICKY_NOTE_TITLE, STICKY_NOTE_BODY, STICKY_NOTE_MOVE } from '@isle-project/constants/actions.js';
import { RECEIVED_LESSON_INFO, RECEIVED_USER_RIGHTS, RETRIEVED_CURRENT_USER_ACTIONS } from '@isle-project/constants/events.js';
import LessonContextMenu from './contextmenu.js';
import Forbidden from './forbidden.js';


// VARIABLES //

const NOTIFICATION_STYLE = {
	Containers: {
		tc: {
			margin: '30px auto 0px auto'
		}
	},
	NotificationItem: { // Override the notification item
		info: {
			border: 'solid 8px #007bff',
			borderRadius: 6,
			padding: 20
		},
		success: {
			boxShadow: '1px 1px 3px 1px darkslategrey'
		}
	},
	Title: {
		success: {
			color: '#3c763d'
		}
	}
};


// MAIN //

/**
* The main lesson component holding all other components.
*/
class Lesson extends Component {
	constructor( props, session ) {
		super( props );

		this.state = {
			visible: session.lessonID ? ( session.isActive() || session.isOwner() ) : true,
			notes: []
		};
	}

	componentDidMount() {
		const session = this.context;
		session.onLessonMount();
		this.unsubscribe = session.subscribe( ( type, value ) => {
			if ( type === RETRIEVED_CURRENT_USER_ACTIONS ) {
				const currentUserActions = value;
				if ( isObjectArray( currentUserActions[ 'lesson' ] ) ) {
					this.restoreNotes( currentUserActions );
				}
			}
			else if (
				type === RECEIVED_LESSON_INFO ||
				type === RECEIVED_USER_RIGHTS
			) {
				this.setState({
					visible: session.isActive() || session.isOwner()
				});
			}
		});
	}

	restoreNotes = ( currentUserActions ) => {
		const actions = currentUserActions[ 'lesson' ];
		for ( let i = 0; i < actions.length; i++ ) {
			const action = actions[ i ];
			if ( action.type === INSERT_STICKY_NOTE ) {
				let { left, top, noteID } = action.value;
				let isDeleted = false;
				let deltaX = 0;
				let deltaY = 0;
				let body = null;
				let title = null;
				const manipulations = currentUserActions[ noteID ];
				if ( manipulations ) {
					for ( let j = manipulations.length - 1; j >= 0; j-- ) {
						switch ( manipulations[ j ].type ) {
							case DELETE_STICKY_NOTE:
								isDeleted = true;
								break;
							case STICKY_NOTE_TITLE:
								title = manipulations[ j ].value;
								break;
							case STICKY_NOTE_BODY:
								body = manipulations[ j ].value;
								break;
							case STICKY_NOTE_MOVE:
								deltaX += manipulations[ j ].value.x;
								deltaY += manipulations[ j ].value.y;
								break;
						}
					}
				}
				left += deltaX;
				top += deltaY;
				if ( !isDeleted ) {
					this.addNote({ left, top, noteID, title, body });
				}
			}
		}
	}

	addNote = ({ left, top, noteID, body, title }) => {
		if ( !noteID ) {
			noteID = randomstring( 3 );
			const session = this.context;
			session.log({
				id: 'lesson',
				type: INSERT_STICKY_NOTE,
				value: {
					top,
					left,
					noteID
				}
			});
		}
		const note = <StickyNote
			id={noteID}
			color="green"
			editable minimizable removable
			key={this.state.notes.length}
			draggable={{
				default: {
					x: left,
					y: top
				}
			}}
			title={title}
			body={body}
		/>;
		const notes = this.state.notes.slice();
		notes.push( note );
		this.setState({
			notes
		});
	}

	render() {
		if ( !this.state.visible ) {
			return <Forbidden t={this.props.t} />;
		}
		return (
			<Fragment>
				<ContextMenuTrigger
					attributes={{
						className: 'contextmenu-fullscreen'
					}}
					holdToDisplay={-1}
					disableIfShiftIsPressed
					id="lessonWindow"
				>
					<div
						id="Lesson"
						className={this.props.className}
						style={this.props.style}
					>
						{this.props.children}
						{this.state.notes}
						<LanguageSwitcher />
					</div>
				</ContextMenuTrigger>
				<LessonContextMenu
					addNote={this.addNote}
					session={this.context}
					t={this.props.t}
				/>
				<ReactNotificationSystem
					ref={( div ) => {
						global.notificationSystemISLE = div;
					}}
					allowHTML={true}
					style={NOTIFICATION_STYLE}
				/>
			</Fragment>
		);
	}
}


// PROPERTIES //

Lesson.propTypes = {
	className: PropTypes.string,
	style: PropTypes.object
};

Lesson.defaultProps = {
	className: '',
	style: {}
};

Lesson.contextType = SessionContext;


// EXPORTS //

export default withTranslation( 'Lesson' )( Lesson );
