// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isArray from '@stdlib/assert/is-array';


// MAIN //

/**
* Preload resources to avoid stutterring loading times.
*
* @property {(Array|string)} image - the image or the array of images that should be preloaded
*/
class Preload extends Component {
	constructor( props, context ) {
		super( props );
	}

	componentDidMount() {
        if (this.props.image !== null) {
			if (isArray(this.props.image)) {
				for (let i = 0; i < this.props.image.length; i++) {
					const img = new Image();
					img.src = this.props.image[i];
				}
			}
			else {
				const img = new Image();
				img.src = this.props.image;
			}

        }
	}

	/*
	* React component render method.
	*/
	render() {
		return null;
	}
}


// PROPERTIES //

Preload.defaultProps = {
	image: null
};

Preload.propTypes = {
    image: PropTypes.oneOf([PropTypes.string, PropTypes.array])
};


// EXPORTS //

export default Preload;
