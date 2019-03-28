// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './postit.css';


// MAIN //

/**
* A dynamic background component that changes a background image at a specified interval.
*
* @property {Array} images - list of image URLs to be displayed
*/
class Postit extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			exit: false
		};
	}

	triggerClick = () => {
		if (this.props.callback) {
			this.props.callback(this.props.id);
		}
	}

	remove = (evt) => {
		evt.stopPropagation();
		this.setState({
			exit: true
		});
	}

	render() {
		let postitClass = 'Postit';

		if (this.props.callback) {
			postitClass = 'Postit postit-callback';
		}

		if (this.state.exit === true) {
			postitClass = 'Postit postit-exit';
		}


		return (
			<div onClick={this.triggerClick} style={this.props.style} className={postitClass}>
				{ this.props.removable ? <div onClick={this.remove} title="remove PostIt" className={'PostitPinImageMap'} /> : null }
				<div className="PostitContent">
					<div className="PostitTitle">
						{ this.props.title }
					</div>
					<div className="PostitDate">
						{ this.props.date }
					</div>
					<div className="PostitBody">
						{ this.props.body }
					</div>
					{this.props.stain ? <div className={'PostitStain'} /> : null }
				</div>
			</div>
		);
	}
}


// PROPERTIES //

Postit.propTypes = {
	title: PropTypes.string,
	body: PropTypes.string,
	style: PropTypes.object,
	date: PropTypes.string,
	stain: PropTypes.bool,
	callback: PropTypes.func,
	removable: PropTypes.bool
};

Postit.defaultProps = {
	title: 'The postit-title',
	body: 'Here comes the body',
	date: '',
	style: {},
	stain: null,
	callback: null,
	removable: false
};


// EXPORTS //

export default Postit;
