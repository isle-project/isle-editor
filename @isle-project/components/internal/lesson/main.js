// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactNotificationSystem from 'react-notification-system';
import { ContextMenuTrigger } from 'react-contextmenu';
import { withTranslation, I18nextProvider } from 'react-i18next';
import { i18n } from '@isle-project/locales';
import LanguageSwitcher from '@isle-project/components/internal/language-switcher';
import StickyNote from '@isle-project/components/sticky-note';
import randomstring from '@isle-project/utils/randomstring/alphanumeric';
import SessionContext from '@isle-project/session/context.js';
import { INSERT_STICKY_NOTE } from '@isle-project/constants/actions.js';
import { RECEIVED_LESSON_INFO, RECEIVED_USER_RIGHTS, STICKY_NOTES_UPDATED } from '@isle-project/constants/events.js';
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
const STICKY_NOTE_COLORS = {
	private: 'green',
	public: 'orange',
	instructor: 'pink'
};


// MAIN //

/**
* The main lesson component holding all other components.
*/
class Lesson extends Component {
	constructor( props, session ) {
		super( props );

		this.state = {
			visible: session.lessonID ? ( session.isActive() || session.isOwner() ) : true
		};
	}

	componentDidMount() {
		const session = this.context;
		session.onLessonMount();
		this.unsubscribe = session.subscribe( ( type, value ) => {
			if ( type === STICKY_NOTES_UPDATED ) {
				this.forceUpdate();
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

	addNote = ({ left, top, visibility, noteID }) => {
		const session = this.context;
		session.saveStickyNote({
			left, top, visibility
		});
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
	}

	render() {
		const session = this.context;
		if ( !this.state.visible ) {
			return <Forbidden t={this.props.t} />;
		}
		return (
			<I18nextProvider i18n={i18n} >
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
						{session.stickyNotes.map( ( elem, idx ) => {
							return ( <StickyNote
								color={STICKY_NOTE_COLORS[ elem.visibility ]}
								editable minimizable removable
								key={idx}
								draggable={{
									default: {
										x: elem.left * window.innerWidth,
										y: elem.top * window.innerHeight
									}
								}}
								title={elem.title}
								body={elem.body}
								onDelete={() => {
									session.deleteStickyNote( elem._id );
								}}
								onMove={({ top, left }) => {
									session.updateStickyNote({
										noteID: elem._id,
										top,
										left
									});
								}}
								onTitleChange={( title ) => {
									session.updateStickyNote({
										noteID: elem._id,
										title: title
									});
								}}
								onBodyChange={( body ) => {
									session.updateStickyNote({
										noteID: elem._id,
										body: body
									});
								}}
							/> );
						})}
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
			</I18nextProvider>
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
