// MODULES //

import React, { useContext, useRef } from 'react';
import isArray from '@stdlib/assert/is-array';
import isObject from '@stdlib/assert/is-object';
import SessionContext from '@isle-project/session/context.js';


// MAIN //

/**
* Hook for logging actions and registering scores.
*
* @param {string} componentType - component type
* @param {(Function|string)} id - function for getting component id or string identifier
* @returns {Object} object with `logAction` and `logScore` methods
*/
function useActionLogger( componentType, id ) {
	const session = useContext( SessionContext );
	const isFn = typeof id === 'function';
	return {
		logScore: ( score, metricName, tag ) => {
			const component = isFn ? id() : id;
			session.recordCompletion( { component, componentType, score, metricName, tag } );
		},
		logAction: ( action, value, options = {} ) => {
			session.log({
				type: componentType + '_' + action,
				id: isFn ? id() : id,
				value: value || null,
				componentType: componentType,
				...options
			});
		},
		retrieveLastAction: ( actionType ) => {
			const userActions = session.currentUserActions;
			const type = `${componentType}_${actionType}`;
			if ( isObject( userActions ) ) {
				let actions = userActions[ isFn ? id() : id ];
				if ( isArray( actions ) ) {
					actions = actions.filter( action => {
						return action.type === type;
					});
					if ( actions.length > 0 ) {
						return actions[ 0 ].value;
					}
				}
			}
			return null;
		}
	};
}

/**
 * Higher-order component for logging actions and registering scores.
 *
 * @param {string} componentType - component type
 * @param {Function} idAccessor - function for getting component id
 * @returns {Function} higher-order component
 */
function withActionLogger( componentType, idAccessor ) {
	return ( Component ) => {
		function WrappedComponent({ forwardedRef, ...rest }) {
			const childRef = useRef( null );
			const id = idAccessor ? () => idAccessor( childRef.current.props ) : () => childRef.current.props.id;
			const { logAction, logScore, retrieveLastAction } = useActionLogger( componentType, id );
			const elem = React.createElement( Component, { ...rest, logScore, logAction, retrieveLastAction, ref: forwardedRef } );
			childRef.current = elem;
			return elem;
		}
		const forwardRef = ( props, ref ) => {
			return <WrappedComponent {...props} forwardedRef={ref} />;
		};
		return React.forwardRef( forwardRef );
	};
}


// EXPORTS //

export { withActionLogger, useActionLogger };
