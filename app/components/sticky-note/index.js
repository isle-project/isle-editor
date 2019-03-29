// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
			exit: false
		};
	}

	triggerClick = () => {
		this.props.onClick( this.props.id );
	}

	remove = ( evt ) => {
		evt.stopPropagation();
		this.setState({
			exit: true
		});
	}

	render() {
		let className = 'sticky-note';
		if ( this.state.exit === true ) {
			className += ' sticky-note-exit';
		}
		if ( this.props.onClick ) {
			className += ' sticky-note-callback';
		}
		return (
			<div onClick={this.triggerClick} style={this.props.style} className={className}>
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
		);
	}
}


// PROPERTIES //

StickyNote.propTypes = {
	title: PropTypes.string,
	body: PropTypes.string,
	style: PropTypes.object,
	date: PropTypes.string,
	stain: PropTypes.bool,
	onClick: PropTypes.func,
	removable: PropTypes.bool
};

StickyNote.defaultProps = {
	title: 'Enter a title',
	body: 'Body of the note',
	date: '',
	style: {},
	stain: null,
	onClick() {},
	removable: false
};


// EXPORTS //

export default StickyNote;
