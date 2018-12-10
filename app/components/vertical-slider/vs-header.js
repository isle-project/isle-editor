// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import './vertical-slider.css';

// MAIN //

/**
* An ISLE component that allows to slideDown and slideUp - JQUery stale - the header section
*
*/
class VSHeader extends Component {
	constructor( props ) {
        super( props );
		this.state = {
        };
    }


	render() {
		return (
            <div onClick={this.props.onClick} className="vertical-slider-header">
                <Fragment>{this.props.children}</Fragment>
            </div>
        );
	}
}


// PROPERTIES //

VSHeader.propTypes = {
    onClick: PropTypes.func.isRequired
};

VSHeader.defaultProps = {

};

// EXPORTS //

export default VSHeader;
