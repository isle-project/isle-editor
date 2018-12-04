// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './score.css';


// MAIN //

/**
* An ISLE component that allows you display the user's score
*
* @property {boolean} duration - indicates whether the time is displayed as a duration - beginning with session start
* @property {string} format - sets the format of the time string
* @property {string} type - sets the type of the score UI - available options: 'default', 'bottom'
*/

class DateDisplay extends Component {
	constructor( props ) {
		super( props );

		this.state = {
		};
	}


    renderType() {
        if (this.props.type === 'default') {
            return (
            <div className="date-default">
                <div className='date-default-month'>DEC</div>
                <div className='date-default-day'>22</div>
                <div className='date-default-year'>2018</div>
                <Clock></Clock>
            </div>
            );
        }
    }


	render() {
		return (
			<div>
				{this.renderType()}
			</div>
		);
	}
}


// PROPERTIES //

DateDisplay.propTypes = {
    months: PropTypes.arrayOf(string),
    type: PropTypes.string

};

DateDisplay.defaultProps = {
    months: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
    type: 'default'
};


// EXPORTS //

export default DateDisplay;
