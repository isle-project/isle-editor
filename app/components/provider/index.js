// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SessionContext from 'session/context.js';
import RoleContext from 'session/role_context.js';


// MAIN //

/**
* Component supplying the session object to all its children.
*
* @property {string} currentRole - current user role (used in editor)
* @property {Object} session - active session
*/
class Provider extends Component {
	render() {
		return (
			<SessionContext.Provider value={this.props.session} >
				<RoleContext.Provider value={this.props.currentRole} >
					{this.props.children}
				</RoleContext.Provider>
			</SessionContext.Provider>
		);
	}
}


// TYPES //

Provider.childContextTypes = {
	session: PropTypes.object,
	currentRole: PropTypes.string
};

Provider.propTypes = {
	currentRole: PropTypes.string.isRequired,
	session: PropTypes.object.isRequired
};


// EXPORTS //

export default Provider;
