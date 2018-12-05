// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './progressbar.css';


// MAIN //

/**
* An ISLE component that displays a progressbar
*
* @property {boolean} duration - indicates whether the time is displayed as a duration - beginning with session start
* @property {string} format - sets the format of the time string
* @property {string} type - sets the type of the score UI - available options: 'default', 'bottom'
*/

class Progressbar extends Component {
	constructor( props ) {
		super( props );

		this.state = {
            progress: 63
		};
	}

    test = () => {
        var value = this.state.progress + 10;
        console.log('Der neue Pogress-Wert: ' + value );

        this.setState({
            progress: value
        });
    }


	render() {
        var size = 100 - this.state.progress;
        var clip = 'inset(0 ' + size + '% 0 0)';
        console.log(clip);

        const progress ={
            clipPath: clip
        };

		return (
			<div onClick={this.test} className="progressbar">
                <div className="progressbar-range">
                    <div style={progress} className="progressbar-progress"></div>

                    <div className="progressbar-marker"></div>
                    <div className="progressbar-marker"></div>
                    <div className="progressbar-marker"></div>
                    <div className="progressbar-marker"></div>
                    <div className="progressbar-marker"></div>

                    <div className="progressbar-marker"></div>
                    <div className="progressbar-marker"></div>
                    <div className="progressbar-marker"></div>
                    <div className="progressbar-marker"></div>
                </div>
			</div>
		);
	}
}


// PROPERTIES //

Progressbar.propTypes = {
};

Progressbar.defaultProps = {
};


// EXPORTS //

export default Progressbar;
