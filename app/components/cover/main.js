// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';


// MAIN //

class Cover extends Component {
	constructor( props ) {
		super( props );

		this.state = {
		};
	}

	componentDidMount() {
	}

	componentWillUnmount() {
	}

	render() {
		return (
			<div style={this.props.style}>
				COVER
			</div>
		);
	}
}


// PROPERTY TYPES //

Cover.propTypes = {
	'style': PropTypes.object
};

Cover.defaultProps = {
	'style': {}
};


// EXPORTS //

export default Cover;
