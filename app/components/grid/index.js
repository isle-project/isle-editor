// MODULES //

import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';


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


// EXPORTS //

export default myGrid;
