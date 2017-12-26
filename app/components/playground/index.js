// MODULES //

import React, { Component } from 'react';
import ComponentPlayground from 'component-playground';
import PropTypes from 'prop-types';
import hasOwnProp from '@stdlib/assert/has-own-property';
import './syntax.css';
import './codemirror.css';
import './playground.css';


// MAIN //

class Playground extends Component {
	constructor( props, context ) {
		super( props );
		for ( let key in props.scope ) {
			if ( hasOwnProp( props.scope, key ) ) {
				props.scope[ key ].context = context;
			}
		}
	}
	render() {
		const scope = {
			React,
			...this.props.scope
		};
		return (
			<div className="component-documentation">
				<ComponentPlayground codeText={this.props.code} scope={scope} />
			</div>
		);
	}
}


// DEFAULT PROPS //

Playground.defaultProps = {
	code: '',
	scope: {}
};

// PROPERTY TYPES //

Playground.propTypes = {
	code: PropTypes.string,
	scope: PropTypes.object
};

Playground.contextTypes = {
	session: PropTypes.object
};


// EXPORTS //

export default Playground;
