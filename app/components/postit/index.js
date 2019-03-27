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
	}

	render() {
		return (
			<div style={this.props.style} className="Postit">
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
	stain: PropTypes.bool
};

Postit.defaultProps = {
	title: 'The postit-title',
	body: 'Here comes the body',
	date: '',
	style: {},
	stain: null
};


// EXPORTS //

export default Postit;
