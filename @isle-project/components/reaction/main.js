// MODULES //

import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import { useTranslation } from 'react-i18next';
import Alert from 'react-bootstrap/Alert';
import SessionContext from '@isle-project/session/context.js';
import isObject from '@stdlib/assert/is-object';
import isFunction from '@stdlib/assert/is-function';
import { MEMBER_ACTION } from '@isle-project/constants/events.js';
import { withPropCheck } from '@isle-project/utils/prop-check';
import useForceUpdate from '@isle-project/utils/hooks/use-force-update';


// VARIABLES //

const debug = logger( 'isle:reaction' );


// MAIN //

/**
* Shows different components depending on user actions.
*
* @property {string} actionID - ID of component to watch
* @property {(Object|Function)} show - hash table of components to display given the different responses (if no `key` matches the response, the value corresponding to the `default` key will be displayed if set) or a function that returns a component to display (sole argument of function is the latest result)
* @property {Node} banner - custom message displayed if the user has not yet performed the action
*/
const Reaction = ( props ) => {
	debug( 'Render component...' );
	const session = useContext( SessionContext );
	const forceUpdate = useForceUpdate();
	const { t } = useTranslation( 'general' );
	useEffect( () => {
		const unsubscribe = session.subscribe( ( type, action ) => {
			if ( type === MEMBER_ACTION && action.id === props.actionID ) {
				forceUpdate();
			}
		});
		return () => {
			unsubscribe();
		};
	});
	if ( !props.actionID ) {
		return <Alert variant="danger">{t('supply-component-id')}</Alert>;
	}
	if ( session.currentUserActions ) {
		const visualizer = session.responseVisualizers[ props.actionID ];
		if ( visualizer ) {
			const { type } = visualizer;
			let actions = session.currentUserActions[ props.actionID ];
			if ( actions ) {
				actions = actions.filter( x => x.type === type );
				actions = actions.sort( ( a, b ) => a.absoluteTime - b.absoluteTime );
				const lastAction = actions[ actions.length-1 ];
				if ( isObject( props.show ) ) {
					return props.show[ lastAction.value ] || props.show[ 'default' ] || props.banner;
				}
				if ( isFunction( props.show ) ) {
					return props.show( lastAction.value, lastAction ) || props.banner;
				}
			}
			return props.banner;
		}
	}
	return props.banner;
};


// PROPERTIES //

Reaction.propTypes = {
	actionID: PropTypes.string.isRequired,
	banner: PropTypes.node,
	show: PropTypes.oneOfType([ PropTypes.object, PropTypes.func ])
};

Reaction.defaultProps = {
	banner: null,
	show: {}
};


// EXPORTS //

export default withPropCheck( Reaction );
