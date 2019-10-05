// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SessionContext from 'session/context.js';


// MAIN //

/**
* Citation component.
*
* @property {string} ref - item reference
*/
class Citation extends Component {
	render() {
		const session = this.context;
		const item = session.config.references[ this.props.citeKey ];
		console.log( item );

		// Return value to render...
		return <div></div>;
	}
}


// PROPERTIES //

Citation.propTypes = {
	citeKey: PropTypes.string.isRequired
};

Citation.defaultProps = {
};

Citation.contextType = SessionContext;


// EXPORTS //

export default Citation;
