// MODULES //

import React, { Component, PropTypes } from 'react';
import { Grid } from 'react-bootstrap';


// ISLE GRID //

class myGrid extends Component {
	render() {
		let { fluid, ...other } = this.props;
		fluid = true;
		return (
			<Grid fluid={fluid} {...other}></Grid>
		);
	}
}


// EXPORTS //

export default myGrid;
