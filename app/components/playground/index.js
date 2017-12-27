// MODULES //

import React, { Component } from 'react';
import ComponentPlayground from 'component-playground';
import PropTypes from 'prop-types';
import Provider from 'components/provider';
import './syntax.css';
import './codemirror.css';
import './playground.css';


// MAIN //

class Playground extends Component {
	constructor( props ) {
		super( props );
	}
	render() {
		const scope = {
			React,
			Provider,
			...this.props.scope
		};
		return (
			<div className="component-documentation" style={this.props.style}>
				<div className="playground-editable">EDITABLE SOURCE</div>
				<ComponentPlayground codeText={this.props.code} scope={scope} />
			</div>
		);
	}
}


// DEFAULT PROPS //

Playground.defaultProps = {
	code: '',
	scope: {},
	style: {}
};

// PROPERTY TYPES //

Playground.propTypes = {
	code: PropTypes.string,
	scope: PropTypes.object,
	style: PropTypes.object
};


// EXPORTS //

export default Playground;
