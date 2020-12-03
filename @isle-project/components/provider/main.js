// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SessionContext from '@isle-project/session/context.js';
import RoleContext from '@isle-project/session/role_context.js';


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


// PROPERTIES //

Provider.propTypes = {
	currentRole: PropTypes.string,
	session: PropTypes.object.isRequired
};

Provider.defaultProps = {
	currentRole: 'anonymous'
};


// EXPORTS //

export default Provider;
