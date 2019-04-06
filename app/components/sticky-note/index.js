// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Draggable from 'react-draggable';
import noop from '@stdlib/utils/noop';
import './sticky_note.css';


// MAIN //

/**
* A sticky note rendering some text.
*
* @property {string} title - note title
* @property {string} body - text of the note
* @property {string} color - available options: red, green, blue, pink, orange
* @property {Object} style - CSS inline styles
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

		let body = null;
		let title = null;

		if (props.editable) {
			body = 'Type in the title';
			title = 'Type in your notes';
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

	triggerClick = () => {
		if (this.state.minimized === true) {
			this.setState({
				minimized: false
			});
		}
		else {
			this.props.onClick( this.props.id );
		}
	}

	remove = ( evt ) => {
		evt.stopPropagation();
		this.setState({
			exit: true
		});
	}

	minimize = (evt) => {
		evt.stopPropagation();
		this.setState({
			minimized: true
		});
	}

	// if a transform is set, this functions sets the scale manually
	checkTransforms() {
		let style = Object.assign({}, this.props.style);
		if ( style.transform ) {
			if ( this.state.minimized === true ) {
				style.transform += ' scale(0.15)';
			}
			else {
				style.transform += ' scale(1)';
			}
		}
		if ( this.props.color ) {
			switch ( this.props.color ) {
				case 'blue':
					style.webkitFilter = 'hue-rotate(166deg)';
					style.filter = 'hue-rotate(166deg)';
				break;

				case 'green':
					style.webkitFilter = 'hue-rotate(88deg) saturate(70%)';
					style.filter = 'hue-rotate(88deg) saturate(70%)';
				break;

				case 'pink':
					style.webkitFilter = 'hue-rotate(220deg) saturate(70%)';
					style.filter = 'hue-rotate(220deg) saturate(70%)';
				break;

				case 'red':
					style.webkitFilter = 'hue-rotate(290deg) saturate(70%)';
					style.filter = 'hue-rotate(290deg) saturate(70%)';
				break;

				case 'orange':
					style.webkitFilter = 'hue-rotate(320deg) saturate(70%)';
					style.filter = 'hue-rotate(320deg) saturate(70%)';
				break;
			}
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
		});
	}

	editBody = () => {
		this.setState({
			editBody: true
		});
	}

	showTitle = () => {
		return (
			<div onClick={this.editTitle} className="sticky-note-title editable">
				{this.state.title}
			</div>
		);
	}

	checkTitle = (event) => {
		if (event.keyCode === 13) {
			this.setState({
				title: event.target.value,
				editTitle: false
			});
		}
	}

	showEditableTitle = () => {
		return (
			<div className="sticky-note-title">
				<input className="sticky-note-editable-title" onKeyUp={this.checkTitle} type="text" name="fname"></input>
			</div>
		);
	}


	showBody = () => {
		return (
			<div onClick={this.editBody} className="sticky-note-body editable">
				{this.state.body}
			</div>
		);
	}


	submitBody = () => {
		this.setState({
			body: this.textareaRef.current.value,
			editBody: false
		});
	}

	showEditableBody = () => {
		return (
			<div className="sticky-note-body">
				<textarea ref={this.textareaRef} className="sticky-note-editable-body" rows="6" cols="28">{ this.state.body }</textarea>
				<input onClick={this.submitBody} type="submit" value="send" />
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
			<div onClick={this.remove} className="sticky-note-remove-button">×</div>
		);
	}

	render() {
		let style = this.checkTransforms();
		let className = 'sticky-note';
		if ( this.state.exit === true ) {
			className += ' sticky-note-exit';
		}
		if ( this.state.minimized === true ) {
			className += ' sticky-note-minimized';
		}
		if ( this.props.onClick !== noop ) {
			className += ' sticky-note-callback';
		}
		const out = <div className="sticky-note-outer" style={style}>
			<div onClick={this.triggerClick} className={className}>
				<div className="sticky-note-wrapper">
					<div className="sticky-note-controls">
						{this.props.minimizable ? <div onClick={this.minimize} className="sticky-note-minimizable">–</div> : null }
						{ this.props.removable ? this.removeButton() : null }
					</div>
					{ this.props.removable ? <div onClick={this.remove} title="Click to remove note" className="sticky-note-pin-image-map" /> : null }
					{ this.props.editable ? this.showEditableContent() : this.showContent() }
				</div>
			</div>
		</div>;
		if ( this.props.draggable ) {
			return <Draggable>{out}</Draggable>;
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
	draggable: PropTypes.bool,
	editable: PropTypes.bool,
	minimizable: PropTypes.bool,
	minimized: PropTypes.bool,
	stain: PropTypes.bool,
	onClick: PropTypes.func,
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
	stain: null,
	onClick: noop,
	removable: false
};


// EXPORTS //

export default StickyNote;
