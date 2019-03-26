// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';


import './polaroid.css';

// MAIN //

/**
* A dynamic background component that changes a background image at a specified interval.
*
* @property {Array} image - the image which is displayed in the polaroid frame
*/

class Polaroid extends Component {
	constructor( props ) {
		super( props );

		this.state = {
            height: '100%',
            width: 'auto'
		};
	}


	componentDidMount() {
        var self = this;

        if (this.props.image) {
            var image = new Image();
            image.src = this.props.image;
            image.onload = function loadImage() {
                if (this.height > this.width) {
                   self.setFormat('high');
                }
                else self.setFormat('wide');
            };
        }
	}


    setFormat(type) {
        let width = '100%';
        let height = 'auto';

        if (type === 'wide') {
            width = 'auto';
            height = '100%';
        }

        this.setState({
            width: width,
            height: height
        });
    }

    render() {
        let format = this.state.width + ' ' + this.state.height;

        const background = {
            backgroundImage: 'url(' + this.props.image + ')',
            backgroundSize: format,
            backgroundPosition: 'center',
            filter: 'sepia(50%)'
        };


        return (
            <div style={this.props.style} className="Polaroid">
                { this.props.stain ? <div className={'PolaroidStain'} /> : null }
                <div style={background} className="PolaroidImage">
                </div>
                { this.props.showPin ? <div className={'PolaroidPin'} /> : null }
            </div>
        );
    }
}


// PROPERTIES //

Polaroid.propTypes = {
    style: PropTypes.object,
    image: PropTypes.string,
    showPin: PropTypes.bool

};

Polaroid.defaultProps = {
    image: null,
    showPin: false,
    style: {}
};


// EXPORTS //

export default Polaroid;
