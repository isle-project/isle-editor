// MODULES //

import React, { useContext, useRef } from 'react';
import isArray from '@stdlib/assert/is-array';
import isObject from '@stdlib/assert/is-object';
import isFunction from '@stdlib/assert/is-function';
import isUndefined from '@stdlib/assert/is-undefined';
import SessionContext from '@isle-project/session/context.js';
import generateUID from '@isle-project/utils/uid';
import kebabcase from '@isle-project/utils/kebabcase';
import { MEMBER_ACTION } from '@isle-project/constants/events.js';


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
			uid[ componentType ] = generateUID( `dynamic-${kebabcase( componentType )}` ); // eslint-disable-line i18next/no-literal-string
		}
		id = uid[ componentType ]( props );
	}
	const idRef = useRef( id );
	return {
		onAction( fcnMap ) {
			let unsubscribe;
			if ( isObject( fcnMap ) ) {
				console.log( 'Registering action listeners for component: ', componentType, id );
				unsubscribe = session.subscribe( ( type, action ) => {
					if ( type === MEMBER_ACTION && action.id === id ) {
						const fcn = fcnMap[ action.type.substring( componentType.length + 1 ) ];
						if ( fcn ) {
							fcn( action );
						}
					}
				} );
			}
			else if ( isFunction( fcnMap ) ) {
				console.log( 'Registering action listener for component: ', componentType, id );
				unsubscribe = session.subscribe( ( type, action ) => {
					if ( type === MEMBER_ACTION && action.id === id ) {
						action = { ...action, type: action.type.substring( componentType.length + 1 ) };
						fcnMap( action );
					}
				} );
			}
			else {
				throw new Error( 'Invalid argument. Argument must be an object or a function.' );
			}
			return unsubscribe;
		},
		logScore: ( score, metricName, tag ) => {
			session.recordCompletion( { id, componentType, score, metricName, tag } );
		},
		logAction: ( action, value, options = {}, recipients ) => {
			session.log({
				type: componentType + '_' + action,
				id: idRef.current,
				value: !isUndefined( value ) ? value : null,
				componentType: componentType,
				...options
			}, recipients );
		},
		retrieveLastAction: ( actionType ) => {
			const userActions = session.currentUserActions;
			const type = `${componentType}_${actionType}`;
			if ( isObject( userActions ) ) {
				let actions = userActions[ idRef.current ];
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
		id: idRef.current
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
			const { id, logAction, logScore, retrieveLastAction, onAction } = useActionLogger( componentType, props );
			return React.createElement( Component, { ...rest, logScore, logAction, retrieveLastAction, onAction, id, ref: forwardedRef } );
		}
		const forwardRef = ( props, ref ) => {
			return <WrappedComponent {...props} forwardedRef={ref} />;
		};
		return React.forwardRef( forwardRef );
	};
}


// EXPORTS //

export { withActionLogger, useActionLogger };
