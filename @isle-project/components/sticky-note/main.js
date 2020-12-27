// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import isObject from '@stdlib/assert/is-plain-object';
import Draggable from '@isle-project/components/draggable';
import SessionContext from '@isle-project/session/context.js';
import { DELETE_STICKY_NOTE, STICKY_NOTE_TITLE, STICKY_NOTE_BODY, STICKY_NOTE_MOVE } from '@isle-project/constants/actions.js';
import './sticky_note.css';


// VARIABLES //

const debug = logger( 'isle:sticky-note' );


// MAIN //

/**
* A sticky note rendering some text.
*
* @property {string} title - note title
* @property {string} body - text of the note
* @property {string} color - either `red`, `green`, `blue`, `pink`, or `orange`
* @property {Object} style - CSS inline styles
* @property {boolean} draggable - controls whether one should be able to drag the note around
* @property {string} date - a date displayed for the note
* @property {boolean} editable - controls whether the component is editable
* @property {boolean} minimizable - controls whether the component is minimizable
* @property {boolean} minimized - if set, the component is minimized at the start
* @property {boolean} stain - controls whether to show a coffee stain
* @property {Function} onClick - callback function invoked when the note is clicked
* @property {boolean} removable - controls whether the note is removed when clicked
*/
class StickyNote extends Component {
	constructor( props ) {
		super( props );

		this.textareaRef = React.createRef();
		this.titleInputRef = React.createRef();

		let body = null;
		let title = null;
		if ( props.editable ) {
			title = props.title || 'Type in the title';
			body = props.body || 'Type in your notes';
		}
		this.state = {
			exit: false,
			minimized: props.minimized,
			editBody: false,
			editTitle: false,
			body: body,
			title: title
		};
	}

	handleClick = () => {
		debug( 'Handle click...' );
		if ( this.state.minimized && !this.isDragging ) {
			debug( 'Maximize note...' );
			this.setState({
				minimized: false
			});
		}
		if ( this.props.onClick ) {
			this.props.onClick( this.props.id );
		}
	}

	remove = ( evt ) => {
		evt.stopPropagation();
		this.setState({
			exit: true
		});
		if ( this.props.id ) {
			const session = this.context;
			session.log({
				id: this.props.id,
				type: DELETE_STICKY_NOTE,
				value: true
			});
		}
		this.props.onDelete();
	}

	minimize = ( event ) => {
		event.stopPropagation();
		this.setState({
			minimized: true
		});
	}

	// If a transform is set, this functions sets the scale manually:
	checkTransforms() {
		const style = { ...this.props.style };
		if ( style.transform ) {
			if ( this.state.minimized === true ) {
				style.transform += ' scale(0.15)';
			}
			else {
				style.transform += ' scale(1)';
			}
		}
		switch ( this.props.color ) {
			case 'blue':
				style.WebkitFilter = 'hue-rotate(166deg)';
				style.filter = 'hue-rotate(166deg)';
				break;
			case 'green':
				style.WebkitFilter = 'hue-rotate(88deg) saturate(70%)';
				style.filter = 'hue-rotate(88deg) saturate(70%)';
				break;
			case 'pink':
				style.WebkitFilter = 'hue-rotate(220deg) saturate(70%)';
				style.filter = 'hue-rotate(220deg) saturate(70%)';
				break;
			case 'red':
				style.WebkitFilter = 'hue-rotate(290deg) saturate(70%)';
				style.filter = 'hue-rotate(290deg) saturate(70%)';
				break;
			case 'orange':
				style.WebkitFilter = 'hue-rotate(320deg) saturate(70%)';
				style.filter = 'hue-rotate(320deg) saturate(70%)';
				break;
		}
		return style;
	}

	showContent() {
		return (
			<div className="sticky-note-content">
				<div className="sticky-note-title">
					{this.props.title}
				</div>
				<div className="sticky-note-date">
					{this.props.date}
				</div>
				<div className="sticky-note-body">
					{this.props.body}
				</div>
				{this.props.stain ? <div className="sticky-note-stain" /> : null }
			</div>
		);
	}

	editTitle = () => {
		this.setState({
			editTitle: true
		}, () => {
			this.titleInputRef.current.focus();
		});
	}

	editBody = () => {
		this.setState({
			editBody: true
		}, () => {
			this.textareaRef.current.focus();
		});
	}

	showTitle = () => {
		return (
			<div role="button" tabIndex={0} onClick={this.editTitle} onKeyPress={this.editTitle} className="sticky-note-title editable">
				{this.state.title}
			</div>
		);
	}

	checkTitle = ( event ) => {
		if ( event.keyCode === 13 ) {
			const title = event.target.value;
			if ( this.props.id ) {
				const session = this.context;
				session.log({
					id: this.props.id,
					type: STICKY_NOTE_TITLE,
					value: title
				});
			}
			this.props.onTitleChange( title );
			this.setState({
				title,
				editTitle: false
			});
		}
	}

	handleTitleBlur = () => {
		if ( this.props.id ) {
			const session = this.context;
			session.log({
				id: this.props.id,
				type: STICKY_NOTE_TITLE,
				value: this.state.title
			});
		}
		this.props.onTitleChange( this.state.title );
		this.setState({
			editTitle: false
		});
	}

	handleTitleChange = ( event ) => {
		this.setState({
			title: event.target.value
		});
	}

	handleDrag = () => {
		this.isDragging = true;
	}

	handleDragStop = ( event, data ) => {
		debug( 'Stopped dragging...' );
		setTimeout( () => {
			this.isDragging = false;
		}, 200 );
		if ( this.props.id ) {
			const session = this.context;
			session.log({
				id: this.props.id,
				type: STICKY_NOTE_MOVE,
				value: {
					x: data.lastX,
					y: data.lastY
				}
			});
		}
		this.props.onMove({ left: data.lastX / window.innerWidth, top: data.lastY / window.innerHeight });
	}

	showEditableTitle = () => {
		return (
			<div className="sticky-note-title">
				<input
					className="sticky-note-editable-title noDrag"
					onKeyDown={this.checkTitle}
					onBlur={this.handleTitleBlur}
					onChange={this.handleTitleChange}
					type="text"
					name="fname"
					value={this.state.title}
					ref={this.titleInputRef}
				/>
			</div>
		);
	}

	showBody = () => {
		return (
			<div
				className="sticky-note-body editable"
				role="button" onClick={this.editBody} onKeyPress={this.editBody}
				tabIndex={0}
			>
				{this.state.body}
			</div>
		);
	}

	submitBody = () => {
		const body = this.textareaRef.current.value;
		if ( this.props.id ) {
			const session = this.context;
			session.log({
				id: this.props.id,
				type: STICKY_NOTE_BODY,
				value: body
			});
		}
		this.props.onBodyChange( body );
		this.setState({
			body,
			editBody: false
		});
	}

	showEditableBody = () => {
		return (
			<div className="sticky-note-body">
				<textarea ref={this.textareaRef} className="sticky-note-editable-body noDrag" rows="6" cols="28">{ this.state.body }</textarea>
				<input onClick={this.submitBody} type="submit" value="save" />
			</div>
		);
	}

	showEditableContent = () => {
		return (
			<div className="sticky-note-content">
				{ this.state.editTitle ? this.showEditableTitle() : this.showTitle() }
				{ this.state.editBody ? this.showEditableBody() : this.showBody() }
			</div>
		);
	}

	removeButton = () => {
		return (
			<div
				className="sticky-note-remove-button"
				role="button"
				tabIndex={0}
				onClick={this.remove} onKeyPress={this.remove}
				title="Click to remove"
			>
				<i className="fas fa-times"></i>
			</div>
		);
	}

	render() {
		const style = this.checkTransforms();
		let className = 'sticky-note';
		if ( this.state.exit === true ) {
			className += ' sticky-note-exit';
		}
		if ( this.state.minimized === true ) {
			className += ' sticky-note-minimized';
		}
		if ( this.props.onClick ) {
			className += ' sticky-note-callback';
		}
		const out = <div className="sticky-note-outer" style={style}>
			<div
				onClick={this.handleClick} className={className}
				onKeyPress={this.handleClick} tabIndex={0} role="button"
			>
				<div className="sticky-note-wrapper">
					<div className="sticky-note-controls">
						{this.props.minimizable ? <div
							onClick={this.minimize} className="sticky-note-minimizable"
							tabIndex={0} role="button" onKeyPress={this.minimize}
							title="Click to minimize"
						>
							<i className="fas fa-window-minimize"></i>
						</div> : null }
						{ this.props.removable ? this.removeButton() : null }
					</div>
					{ this.props.editable ? this.showEditableContent() : this.showContent() }
				</div>
			</div>
		</div>;
		if ( this.props.draggable ) {
			const props = isObject( this.props.draggable ) ? this.props.draggable : {};
			return ( <Draggable
				bounds="#Lesson"
				cancel=".noDrag"
				onStop={this.handleDragStop}
				onDrag={this.handleDrag}
				style={{
					position: 'absolute'
				}}
				{...props}
			>{out}</Draggable> );
		}
		return out;
	}
}


// PROPERTIES //

StickyNote.propTypes = {
	title: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node
	]),
	body: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node
	]),
	color: PropTypes.string,
	style: PropTypes.object,
	date: PropTypes.string,
	draggable: PropTypes.oneOfType([
		PropTypes.bool,
		PropTypes.object
	]),
	editable: PropTypes.bool,
	minimizable: PropTypes.bool,
	minimized: PropTypes.bool,
	stain: PropTypes.bool,
	onBodyChange: PropTypes.func,
	onClick: PropTypes.func,
	onDelete: PropTypes.func,
	onMove: PropTypes.func,
	onTitleChange: PropTypes.func,
	removable: PropTypes.bool
};

StickyNote.defaultProps = {
	title: 'Enter a title',
	body: 'Body of the note',
	color: null,
	date: '',
	draggable: false,
	editable: false,
	minimizable: false,
	minimized: false,
	style: {},
	stain: false,
	onBodyChange() {},
	onClick: null,
	onDelete() {},
	onMove() {},
	onTitleChange() {},
	removable: false
};

StickyNote.contextType = SessionContext;


// EXPORTS //

export default StickyNote;
