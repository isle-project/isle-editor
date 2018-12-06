// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';


// MAIN //

/**
* An ISLE component that allows you display the user's score
*
* @property {number} deviation - allows you to specify the randomness
* @property {number} interval - the interval of the typewriter
* @property {bool} random -if random is set, the keyforms will be performed with a certain, "humane" randomness
* @property {bool} interval - the typed keystroke will be also heard
* @property {object} style - the css style to be applied
* @property {string} text - the full text to be displayed
*/

class Typewriter extends Component {
	constructor( props ) {
		super( props );

		this.state = {
            actualText: '',
            ct: 0
		};
	}

    playAudio = (key) => {
        var randomVolume = Math.random() * 0.7;
        randomVolume += 0.3;
        if (!this.audio) this.audio = new Audio('https://isle.heinz.cmu.edu/keystroke2_1544120411143.ogg');
        this.audio.volume = randomVolume;
        console.log( randomVolume );
        this.audio.play();
    }

    setText = () => {
        if (this.state.ct < this.props.text.length) {
            var n = this.state.ct + 1;
            var text = this.props.text.slice(0, n);
            if (this.props.sound) this.playAudio();

            this.setState({
                ct: n,
                actualText: text
            });
        }
    }

    next() {
        var next = this.props.interval;
        if (this.props.random === true) {
            next = (Math.random() * this.props.deviation) - (this.props.deviation*0.5);
            next = parseInt(next, 10);
            next += this.props.interval;
        }
    setTimeout( this.setText, next);
    }

    process() {
        if (this.state.started === false ) {
            this.init();
        }
        else this.next();
    }

    type( ) {
        this.process();
        return (
            <div style={this.props.style}>
                {this.state.actualText}
            </div>
        );
    }

	render() {
		return (
			<div>
				{this.type()}
			</div>
		);
	}
}


// PROPERTIES //

Typewriter.propTypes = {
    deviation: PropTypes.number,
    interval: PropTypes.number,
    random: PropTypes.bool,
    sound: PropTypes.bool,
    style: PropTypes.object,
    text: PropTypes.string
};

Typewriter.defaultProps = {
    deviation: 30,
    interval: 100,
    random: false,
    sound: false,
    style: null,
    text: ''
};


// EXPORTS //

export default Typewriter;
