// MODULES //

import React, { useContext, useRef } from 'react';
import SessionContext from '@isle-project/session/context.js';


// MAIN //

function useActionLogger( componentType, id ) {
	const session = useContext( SessionContext );
	const isFn = typeof id === 'function';
	return {
		logScore: ( ref, score, options ) => {
			// TODO: log completion score
		},
		logAction: ( action, value, options = {} ) => {
			session.log({
				type: componentType + '_' + action,
				id: isFn ? id() : id,
				value: value,
				...options
			});
		}
	};
}

function withActionLogger( componentType, idAccessor ) {
	return ( Component ) => {
		function WrappedComponent({ forwardedRef, ...rest }) {
			const childRef = useRef( null );
			const id = idAccessor ? () => idAccessor( childRef.current.props ) : () => childRef.current.props.id;
			const { logAction, logScore } = useActionLogger( componentType, id );
			const elem = React.createElement( Component, { ...rest, logScore, logAction, ref: forwardedRef } );
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
