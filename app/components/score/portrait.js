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

class Portrait extends Component {
	constructor( props ) {
		super( props );

		this.state = {
		};
	}


    renderType() {
        if (this.props.type === 'default') {
            return (
            <div className="portrait-default">
                <img src={this.props.avatar} />
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

Portrait.propTypes = {
    avatar: PropTypes.string,
    type: PropTypes.string

};

Portrait.defaultProps = {
    avatar: 'https://avatars2.githubusercontent.com/u/1913638?s=460&v=4',
    type: 'default'
};


// EXPORTS //

export default Portrait;
