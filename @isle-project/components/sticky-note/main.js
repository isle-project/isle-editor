// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import { withTranslation } from 'react-i18next';
import isObject from '@stdlib/assert/is-plain-object';
import Draggable from '@isle-project/components/draggable';
import SessionContext from '@isle-project/session/context.js';
import { DELETE_STICKY_NOTE, STICKY_NOTE_TITLE, STICKY_NOTE_BODY, STICKY_NOTE_MOVE } from '@isle-project/constants/actions.js';
import pixelsToNumber from '@isle-project/utils/pixels-to-number';
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
* @property {boolean} resizable - controls whether the component is resizable
* @property {boolean} watermark - controls whether to display a watermark
* @property {Object} size - object with `width` and `height` properties specifying the default size of the note
* @property {Function} onBodyChange - callback function invoked with new text when user changes body of the note
* @property {Function} onDelete - callback function invoked when user deletes the note
* @property {Function} onResize - callback function invoked with object of new `width` and `height` when user re-sizes the note
* @property {Function} onTitleChange - callback function invoked with new title when user changes the title
* @property {Function} onClick - callback function invoked when the note is clicked
* @property {Function} onMove - callback function invoked with new position (an object with `top` and `left` properties) when the card is dragged
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
			title = props.title || props.t( 'custom-title' );
			body = props.body || props.t( 'type-in-your-note' );
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

	componentDidUpdate( prevProps ) {
		if ( this.props.editable & !prevProps.editable ) {
			this.setState({
				title: this.props.title || this.props.t( 'custom-title' ),
				body: this.props.body || this.props.t( 'type-in-your-note' )
			});
		}
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
	};

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
	};

	minimize = ( event ) => {
		event.stopPropagation();
		this.setState({
			minimized: true
		});
	};

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
				{this.props.watermark ? <div className="sticky-note-watermark" >
					{this.props.t( this.props.watermark )}
				</div> : null }
			</div>
		);
	}

	editTitle = () => {
		this.setState({
			editTitle: true
		}, () => {
			this.titleInputRef.current.focus();
		});
	};

	editBody = () => {
		this.setState({
			editBody: true
		}, () => {
			this.textareaRef.current.focus();
		});
	};

	showTitle = () => {
		return (
			<div role="button" tabIndex={0} onClick={this.editTitle} onKeyPress={this.editTitle} className="sticky-note-title editable">
				{this.state.title}
			</div>
		);
	};

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
	};

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
	};

	handleTitleChange = ( event ) => {
		this.setState({
			title: event.target.value
		});
	};

	handleDrag = () => {
		this.isDragging = true;
	};

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
	};

	handleResizeStop = ( e, direction, ref ) => {
		this.props.onResize({
			width: pixelsToNumber( ref.style.width ),
			height: pixelsToNumber( ref.style.height )
		});
	};

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
	};

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
	};

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
	};

	showEditableBody = () => {
		return (
			<div className="sticky-note-body" style={{ overflow: 'hidden' }}>
				<textarea ref={this.textareaRef} className="sticky-note-editable-body noDrag" cols="28">{ this.state.body }</textarea>
				<input onClick={this.submitBody} type="submit" value={this.props.t('save')} />
			</div>
		);
	};

	showEditableContent = () => {
		return (
			<div className="sticky-note-content">
				{ this.state.editTitle ? this.showEditableTitle() : this.showTitle() }
				{ this.state.editBody ? this.showEditableBody() : this.showBody() }
				{this.props.watermark ? <div className="sticky-note-watermark" >
					{this.props.t( this.props.watermark )}
				</div> : null }
			</div>
		);
	};

	removeButton = () => {
		return (
			<div
				className="sticky-note-remove-button"
				role="button"
				tabIndex={0}
				onClick={this.remove} onKeyPress={this.remove}
				title={this.props.t('click-to-remove')}
			>
				<i className="fas fa-times"></i>
			</div>
		);
	};

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
				<div className="sticky-note-controls">
					{this.props.minimizable ? <div
						onClick={this.minimize} className="sticky-note-minimizable"
						tabIndex={0} role="button" onKeyPress={this.minimize}
						title={this.props.t('click-to-minimize')}
					>
						<i className="fas fa-window-minimize"></i>
					</div> : null }
					{ this.props.removable ? this.removeButton() : null }
				</div>
				{this.props.editable ? this.showEditableContent() : this.showContent()}
			</div>
		</div>;
		const props = isObject( this.props.draggable ) ? this.props.draggable : {};
		if ( !props.default ) {
			props.default = { ...this.props.size };
		}
		if ( !props.default.width ) {
			props.default.width = 300;
		}
		if ( !props.default.width ) {
			props.default.height = 300;
		}
		return ( <Draggable
			bounds="#Lesson"
			cancel=".noDrag"
			onStop={this.handleDragStop}
			onDrag={this.handleDrag}
			onResizeStop={this.handleResizeStop}
			style={{
				position: 'absolute'
			}}
			minWidth={200}
			minHeight={200}
			maxHeight={500}
			maxWidth={500}
			disabled={!this.props.draggable}
			resizable
			{...props}
		>{out}</Draggable> );
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
	watermark: PropTypes.string,
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
	resizable: PropTypes.bool,
	size: PropTypes.object,
	onBodyChange: PropTypes.func,
	onClick: PropTypes.func,
	onDelete: PropTypes.func,
	onMove: PropTypes.func,
	onResize: PropTypes.func,
	onTitleChange: PropTypes.func,
	removable: PropTypes.bool
};

StickyNote.defaultProps = {
	title: null,
	body: null,
	watermark: null,
	color: null,
	date: '',
	draggable: false,
	editable: false,
	minimizable: false,
	minimized: false,
	resizable: false,
	size: null,
	style: {},
	onBodyChange() {},
	onClick: null,
	onDelete() {},
	onMove() {},
	onResize() {},
	onTitleChange() {},
	removable: false
};

StickyNote.contextType = SessionContext;


// EXPORTS //

export default withTranslation( 'sticky-note' )( StickyNote );
