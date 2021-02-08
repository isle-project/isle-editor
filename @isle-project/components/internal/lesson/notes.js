// MODULES //

import React, { useContext, useEffect } from 'react';
import StickyNote from '@isle-project/components/sticky-note';
import SessionContext from '@isle-project/session/context.js';
import useForceUpdate from '@isle-project/utils/hooks/use-force-update';
import { STICKY_NOTES_UPDATED } from '@isle-project/constants/events.js';
import { TOGGLE_PRESENTATION_MODE } from '@isle-project/constants/actions.js';


// VARIABLES //

const STICKY_NOTE_COLORS = {
	private: 'green',
	public: 'orange',
	instructor: 'pink'
};


// MAIN //

const Notes = () => {
	const session = useContext( SessionContext );
	const forceUpdate = useForceUpdate();
	useEffect(() => {
		let unsubscribe;
		if ( session ) {
			unsubscribe = session.subscribe( ( type, action ) => {
				if ( type === STICKY_NOTES_UPDATED || type === TOGGLE_PRESENTATION_MODE ) {
					forceUpdate();
				}
			});
		}
		return () => {
			if ( unsubscribe ) {
				unsubscribe();
			}
		};
	}, [ forceUpdate, session ] );
	if ( session.presentationMode ) {
		return null;
	}
	return session.stickyNotes.map( ( elem, idx ) => {
		return ( <StickyNote
			color={STICKY_NOTE_COLORS[ elem.visibility ]}
			watermark={elem.visibility}
			editable minimizable removable
			key={elem._id}
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
	});
};


// EXPORTS //

export default Notes;
