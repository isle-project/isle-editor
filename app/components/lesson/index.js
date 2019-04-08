// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import NotificationSystem from 'react-notification-system';
import { ContextMenuTrigger, ContextMenu, MenuItem } from 'react-contextmenu';
import StickyNote from 'components/sticky-note';
import SessionContext from 'session/context.js';


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
	}

	addNote = ( event ) => {
		const note = <StickyNote editable draggable minimizable removable key={this.state.notes.length} style={{
			position: 'absolute',
			top: event.pageY,
			left: event.pageX
		}} />;
		const notes = this.state.notes.slice();
		notes.push( note );
		this.setState({
			notes
		});
	}

	render() {
		return (
			<Fragment>
				<ContextMenuTrigger id="lessonWindow" style={{ height: '100%', width: '100%' }} >
					<div id="Lesson" className={this.props.className}>
						{this.props.children}
						{this.state.notes}
					</div>
				</ContextMenuTrigger>
				<ContextMenu id="lessonWindow" >
					<MenuItem key={0} onClick={this.addNote}>
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
	className: PropTypes.string
};

Lesson.defaultProps = {
	className: ''
};

Lesson.contextType = SessionContext;


// EXPORTS //

export default Lesson;
