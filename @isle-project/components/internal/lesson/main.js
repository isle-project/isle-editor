// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactNotificationSystem from 'react-notification-system';
import { I18nextProvider } from 'react-i18next';
import { i18n } from '@isle-project/locales';
import { ContextMenuTrigger } from '@isle-project/components/internal/contextmenu';
import LanguageSwitcher from '@isle-project/components/internal/language-switcher';
import randomstring from '@isle-project/utils/randomstring/alphanumeric';
import SessionContext from '@isle-project/session/context.js';
import { INSERT_STICKY_NOTE } from '@isle-project/constants/actions.js';
import { RECEIVED_LESSON_INFO, RECEIVED_USER_RIGHTS } from '@isle-project/constants/events.js';
import InterfaceTourButton from './interface_tour_button.js';
import LessonContextMenu from './contextmenu.js';
import Forbidden from './forbidden.js';
import StickyNotes from './notes.js';
import './lesson.css';


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


// FUNCTIONS //

/**
* Creates a document fragment from a string of HTML.
*
* @private
* @param {string} selector - CSS selector
*/
function queryCheck( s ) {
	document.createDocumentFragment().querySelector( s );
}

/**
* Tests if a value is a valid CSS selector.
*
* @private
* @param {string} selector - CSS selector
* @returns {boolean} - true if the selector is valid, false otherwise
*/
function isSelectorValid( selector ) {
	try {
		queryCheck( selector );
	} catch {
		return false;
	}
	return true;
}

/**
* Scrolls to the element corresponding to the location hash.
*
* @private
*/
function scrollToAnchor() {
	const anchor = window.location.hash;
	if ( isSelectorValid( anchor ) ) {
		const domElement = document.querySelector( anchor );
		if ( domElement ) {
			domElement.scrollIntoView();
		}
	}
}


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
			if (
				type === RECEIVED_LESSON_INFO ||
				type === RECEIVED_USER_RIGHTS
			) {
				this.setState({
					visible: session.isActive() || session.isOwner()
				});
			}
		});
		scrollToAnchor();
		window.addEventListener( 'hashchange', scrollToAnchor );
	}

	componentWillUnmount() {
		this.unsubscribe();
		window.removeEventListener( 'hashchange', scrollToAnchor );
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
	};

	render() {
		if ( !this.state.visible ) {
			return (
				<I18nextProvider i18n={i18n} >
					<Forbidden />
				</I18nextProvider>
			);
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
						<StickyNotes />
						<InterfaceTourButton />
						<LanguageSwitcher />
					</div>
				</ContextMenuTrigger>
				<LessonContextMenu
					addNote={this.addNote}
					session={this.context}
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

export default Lesson;
