// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Clock from 'components/clock';
import './score.css';


// MAIN //

/**
* An ISLE component that allows you display the user's score
*
* @property {boolean} duration - indicates whether the time is displayed as a duration - beginning with session start
* @property {string} format - sets the format of the time string
*/

class Score extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			score: 72
		};
	}

	render() {
        const clock={
            fontWeight: 800,
            fontFamily: 'Open Sans',
            padding: 0
        };

		return (
            <div className="score">
                <div className="score-header">SCORE</div>
                <div className="score-timer">
                    <Clock duration={this.props.duration} style={clock} format={this.props.format}></Clock>
                </div>
                <div className="score-outer-circle2 i-rotating" />
                <div className="score-outer-circle i-rotating" />
                <div className="score-circle" />
                <div className="score-half-circle rotating" />

                <div className="score-points">
                    { this.state.score }
                </div>


			</div>
		);
	}
}


// PROPERTIES //

Score.propTypes = {
    duration: PropTypes.bool,
	format: PropTypes.string
};

Score.defaultProps = {
    duration: false,
    format: 'HH:MM'
};


// EXPORTS //

export default Score;
