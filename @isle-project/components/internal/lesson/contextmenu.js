// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import logger from 'debug';
import { ContextMenu, MenuItem } from '@isle-project/components/internal/contextmenu';
import isEmptyArray from '@stdlib/assert/is-empty-array';


// VARIABLES //

const debug = logger( 'isle:lesson:contextmenu' );


// MAIN //

class LessonContextMenu extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			lastRange: null,
			lastText: '',
			contextMenuIsOpen: false
		};
	}

	componentDidMount() {
		document.addEventListener( 'selectionchange', this.handleSelectionChange );
	}

	componentWillUnmount() {
		document.removeEventListener( 'selectionchange', this.handleSelectionChange );
	}

	handleSelectionChange = ( event ) => {
		if ( this.state.contextMenuIsOpen ) {
			return;
		}
		const selection = window.getSelection();
		if ( !selection.isCollapsed || selection.type === 'Range' ) {
			this.lastSelection = selection;
			if ( selection.getRangeAt && selection.rangeCount ) {
				const range = selection.getRangeAt( 0 );
				const text = selection.toString();
				this.setState({
					lastRange: range,
					lastText: text
				});
			}
		} else {
			setTimeout( () => {
				this.forceUpdate();
			}, 150 );
		}
	};

	highlightText = ( event ) => {
		debug( 'Highlight the selected text...' );
		document.designMode = 'on';
		const sel = window.getSelection();
		sel.removeAllRanges();
		sel.addRange( this.state.lastRange );
		document.execCommand( 'styleWithCSS', false, true );
		document.execCommand( 'backColor', false, 'yellow' );
		document.designMode = 'off';
	};

	removeHighlight = ( event ) => {
		debug( 'Highlight the selected text...' );
		const sel = window.getSelection();
		sel.removeAllRanges();
		sel.addRange( this.state.lastRange );
		document.designMode = 'on';
		document.execCommand( 'styleWithCSS', false, true );
		document.execCommand( 'backColor', false, 'inherit' );
		document.designMode = 'off';
	};

	copyToClipboard = ( event ) => {
		debug( 'Copying selection to clipboard... ' );
		navigator.clipboard.writeText( this.state.lastText );
	};

	textToSpeech = () => {
		const str = this.state.lastText;
		debug( 'Read aloud: '+str );
		const session = this.props.session;
		if ( isEmptyArray( window.speechSynthesis.getVoices() ) ) {
			return session.addNotification({
				title: this.props.t( 'voice-not-supported' ),
				message: this.props.t( 'voice-not-supported-message' ),
				level: 'error',
				position: 'tr'
			});
		}
		const ssu = new SpeechSynthesisUtterance( str );
		ssu.lang = session.config.language || 'en-US';
		window.speechSynthesis.speak( ssu );
	};

	handleShow = () => {
		debug( 'Context menu has been opened...' );
		this.setState({ contextMenuIsOpen: true });
	};

	handleHide = () => {
		debug( 'Context menu has been closed...' );
		this.setState({ contextMenuIsOpen: false });
	};

	handleStudentNoteAddition = ( event ) => {
		const xPercent = event.pageX / window.innerWidth;
		const yPercent = event.pageY / window.innerHeight;
		this.props.addNote({ left: xPercent, top: yPercent, visibility: 'public' });
	};

	handlePersonalNoteAddition = ( event ) => {
		const xPercent = event.pageX / window.innerWidth;
		const yPercent = event.pageY / window.innerHeight;
		this.props.addNote({ left: xPercent, top: yPercent, visibility: 'private' });
	};

	handleInstructorNoteAddition = ( event ) => {
		const xPercent = event.pageX / window.innerWidth;
		const yPercent = event.pageY / window.innerHeight;
		this.props.addNote({ left: xPercent, top: yPercent, visibility: 'instructor' });
	};

	render() {
		const menuItems = [];
		const sel = window.getSelection();
		if ( !sel.isCollapsed || sel.type === 'Range' ) {
			menuItems.push( <MenuItem key={1} onClick={this.copyToClipboard}>
				{this.props.t( 'copy' )}
			</MenuItem> );
			menuItems.push( <MenuItem key={2} onClick={this.textToSpeech}>
				{this.props.t( 'read-aloud' )}
			</MenuItem> );
			menuItems.push( <MenuItem key={3} onClick={this.highlightText}>
				{this.props.t( 'highlight' )}
			</MenuItem> );
			if ( sel && sel.focusNode ) {
				const elem = sel.focusNode.parentElement;
				if ( elem && elem.style && elem.style.backgroundColor === 'yellow' ) {
					menuItems.push( <MenuItem key={4} onClick={this.removeHighlight}>
						{this.props.t( 'remove-highlight' )}
					</MenuItem> );
				}
			}
		}
		menuItems.push(
			<MenuItem key={6} onClick={this.handlePersonalNoteAddition} >
				{this.props.t( 'add-personal-note' )}
			</MenuItem>
		);
		if ( this.props.session.isOwner() ) {
			menuItems.push(
				<MenuItem key={7} onClick={this.handleInstructorNoteAddition} >
					{this.props.t( 'add-instructor-note' )}
				</MenuItem>
			);
			menuItems.push(
				<MenuItem key={8} onClick={this.handleStudentNoteAddition} >
					{this.props.t( 'add-student-note' )}
				</MenuItem>
			);
		}
		return ( <ContextMenu
			id="lessonWindow"
			onShow={this.handleShow}
			onHide={this.handleHide}
			disableIfShiftIsPressed
		>
			{menuItems}
		</ContextMenu> );
	}
}


// PROPERTIES //

LessonContextMenu.propTypes = {
	addNote: PropTypes.func.isRequired,
	session: PropTypes.object.isRequired
};


// EXPORTS //

export default withTranslation( 'internal/lesson' )( LessonContextMenu );
