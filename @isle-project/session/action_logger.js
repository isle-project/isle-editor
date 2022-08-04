// MODULES //

import React, { useContext } from 'react';
import isArray from '@stdlib/assert/is-array';
import isObject from '@stdlib/assert/is-object';
import SessionContext from '@isle-project/session/context.js';
import generateUID from '@isle-project/utils/uid';
import kebabcase from '@isle-project/utils/kebabcase';


// VARIABLES //

const uid = {};


// MAIN //

/**
* Hook for logging actions and registering scores.
*
* @param {string} componentType - component type
* @param {Object} props - component props
* @param {string} [props.id] -  string identifier
* @returns {Object} object with logging methods
*/
function useActionLogger( componentType, props ) {
	const session = useContext( SessionContext );
	let id = props.id;
	if ( !id ) {
		if ( !uid[ componentType ] ) {
			uid[ componentType ] = generateUID( kebabcase( componentType ) );
		}
		id = uid[ componentType ]( props );
	}
	return {
		logScore: ( score, metricName, tag ) => {
			session.recordCompletion( { id, componentType, score, metricName, tag } );
		},
		logAction: ( action, value, options = {}, recipients ) => {
			session.log({
				type: componentType + '_' + action,
				id,
				value: value || null,
				componentType: componentType,
				...options
			}, recipients );
		},
		retrieveLastAction: ( actionType ) => {
			const userActions = session.currentUserActions;
			const type = `${componentType}_${actionType}`;
			if ( isObject( userActions ) ) {
				let actions = userActions[ id ];
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
		},
		id
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
			const props = idAccessor ? { ...rest, id: idAccessor( rest ) }: rest;
			const { id, logAction, logScore, retrieveLastAction } = useActionLogger( componentType, props );
			return React.createElement( Component, { ...rest, logScore, logAction, retrieveLastAction, id, ref: forwardedRef } );
		}
		const forwardRef = ( props, ref ) => {
			return <WrappedComponent {...props} forwardedRef={ref} />;
		};
		return React.forwardRef( forwardRef );
	};
}


// EXPORTS //

export { withActionLogger, useActionLogger };
