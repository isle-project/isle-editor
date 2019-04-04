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
* @property {Object} style - CSS inline styles
* @property {string} date - a date displayed for the note
* @property {boolean} stain - controls whether to show a coffee stain
* @property {Function} onClick - callback function invoked when the note is clicked
* @property {boolean} removable - controls whether the note is removed when clicked
*/
class StickyNote extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			exit: false,
			minimized: false
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
		if (style.transform) {
			if (this.state.minimized === true) {
				style.transform += ' scale(0.15)';
			}
			else {
				style.transform += ' scale(1)';
			}
		}
		return style;
	}

	render() {
		let style = this.checkTransforms();

		let className = 'sticky-note';
		if ( this.state.exit === true ) {
			className += ' sticky-note-exit';
		}

		if (this.state.minimized === true) {
			className += ' sticky-note-minimized';
		}

		if ( this.props.onClick !== noop ) {
			className += ' sticky-note-callback';
		}
		const out = <div onClick={this.triggerClick} style={style} className={className}>
			<div className="sticky-note-wrapper">
				{this.props.minimizable ? <div onClick={this.minimize} className="sticky-note-minimizable">–</div> : null }
				{ this.props.removable ? <div onClick={this.remove} title="Click to remove note" className="sticky-note-pin-image-map" /> : null }
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
	style: PropTypes.object,
	date: PropTypes.string,
	draggable: PropTypes.bool,
	minimizable: PropTypes.bool,
	stain: PropTypes.bool,
	onClick: PropTypes.func,
	removable: PropTypes.bool
};

StickyNote.defaultProps = {
	title: 'Enter a title',
	body: 'Body of the note',
	date: '',
	draggable: false,
	minimizable: false,
	style: {},
	stain: null,
	onClick: noop,
	removable: false
};


// EXPORTS //

export default StickyNote;
