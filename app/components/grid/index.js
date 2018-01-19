// MODULES //

import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import PropTypes from 'prop-types';


// MAIN //

class myGrid extends Component {
	render() {
		let { fluid, ...other } = this.props;
		fluid = true;
		return (
			<Grid fluid={fluid} {...other}></Grid>
		);
	}
}

// TYPES //

myGrid.defaultProps = {
	fluid: false
};

myGrid.propTypes = {
	fluid: PropTypes.bool
};


// EXPORTS //

export default myGrid;
