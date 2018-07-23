// MODULES //

import React, { Component } from 'react';
import ComponentPlayground from 'component-playground';
import PropTypes from 'prop-types';
import hasOwnProp from '@stdlib/assert/has-own-property';
import Provider from 'components/provider';
import './codemirror.css';
import './syntax.css';
import './playground.css';


// MAIN //

class Playground extends Component {
	constructor( props, context ) {
		super( props );

		const wrappedScope = {};
		for ( let key in props.scope ) {
			if ( hasOwnProp( props.scope, key ) ) {
				let Comp = props.scope[ key ];
				wrappedScope[ key ] = class Wrapper extends Component {
					render() {
						return ( <Provider session={context.session} >
							<Comp {...this.props} />
						</Provider> );
					}
				};
			}
		}
		this.wrappedScope = wrappedScope;
	}

	componentDidMount() {
		this.forceUpdate();
	}

	render() {
		const scope = {
			React,
			...this.wrappedScope
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

Playground.propDescriptions = {
	code: 'The code to be displayed in the playground box. This code will be editable by the user in the brower or lesson',
	scope: 'scope object with variables / components which should be made available to the executed code; most often this is the name of the component you wish to display',
	style: 'CSS inline styles'
};

Playground.propTypes = {
	code: PropTypes.string,
	scope: PropTypes.object,
	style: PropTypes.object
};

Playground.contextTypes = {
	session: PropTypes.object
};


// EXPORTS //

export default Playground;
