// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import NotificationSystem from 'react-notification-system';
import { ContextMenuTrigger, ContextMenu, MenuItem } from 'react-contextmenu';
import isObjectArray from '@stdlib/assert/is-object-array';
import StickyNote from 'components/sticky-note';
import randomstring from 'utils/randomstring/alphanumeric';
import SessionContext from 'session/context.js';
import { DELETE_STICKY_NOTE, INSERT_STICKY_NOTE, STICKY_NOTE_TITLE, STICKY_NOTE_BODY } from 'constants/actions.js';
import 'css/lesson.css';
import { STICKY_NOTE_MOVE } from '../../constants/actions';


// MAIN //

/**
* The main lesson component holding all other components.
*/
class Lesson extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			notes: []
		};
	}

	componentDidMount() {
		global.lesson = this;

		const session = this.context;
		this.unsubscribe = session.subscribe( ( type, value ) => {
			if ( type === 'retrieved_current_user_actions' ) {
				const currentUserActions = value;
				if ( isObjectArray( currentUserActions[ 'lesson' ] ) ) {
					this.restoreNotes( currentUserActions );
				}
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
			editable draggable minimizable removable
			key={this.state.notes.length} style={{
				position: 'absolute',
				top,
				left
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
					</div>
				</ContextMenuTrigger>
				<ContextMenu id="lessonWindow" >
					<MenuItem key={0} onClick={( event ) => {
						this.addNote({ left: event.pageX, top: event.pageY });
					}}>
						Add Note
					</MenuItem>
				</ContextMenu>
				<NotificationSystem
					ref={( div ) => {
						this.notificationSystem = div;
					}}
					allowHTML={true}
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

export default Lesson;
