// MODULES //

import React, { Component } from 'react';
import hasOwnProp from '@stdlib/assert/has-own-property';
import Session from 'session';
import Provider from 'components/provider';
import Components from 'components/index.js';
import 'css/lesson.css';
import './i18n.js';


// VARIABLES //

const session = new Session({}, true );
const WrappedComponents = {};
for ( let key in Components ) {
	if ( hasOwnProp( Components, key ) ) {
		const Comp = Components[ key ];
		WrappedComponents[ key ] = class Wrapper extends Component {
			render() {
				return ( <Provider session={session} >
					<Comp {...this.props} />
				</Provider> );
			}
		};
		Object.defineProperty( WrappedComponents[ key ], 'name', {
			value: Comp.name
		});
	}
}


// MAIN //

// Add react-live imports you need here
const ReactLiveScope = {
	React,
	...React,
	...WrappedComponents
};


// EXPORTS //

export default ReactLiveScope;
