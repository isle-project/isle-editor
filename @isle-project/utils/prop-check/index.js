// MODULES //

import React from 'react';
import PropTypes from 'prop-types';
import ErrorBoundary from '@isle-project/components/internal/error-boundary';


// FUNCTIONS //

/* eslint-disable no-console */
const consoleErrorFcn = console.error;
if ( console.error === consoleErrorFcn ) {
	console.error = function onWarning() {
		if ( arguments[ 0 ].includes( 'prop type' ) ) {
			throw new Error( arguments[ 0 ] );
		} else {
			consoleErrorFcn.apply( console, arguments );
		}
	};
}
/* eslint-enable no-console */


// MAIN //

export function withPropCheck( Component ) {
	console.log( PropTypes.checkPropTypes );
	function WrappedComponent({ forwardedRef, ...rest }) {
		if ( Component.propTypes ) {
			PropTypes.checkPropTypes( Component.propTypes, rest, 'prop', Component.name );
		}
		return React.createElement( Component, { ...rest, ref: forwardedRef } );
	}
	const forwardRef = ( props, ref ) => {
		return ( <ErrorBoundary component={Component.name} >
			<WrappedComponent {...props} forwardedRef={ref} />
		</ErrorBoundary> );
	};
	return React.forwardRef( forwardRef );
}
