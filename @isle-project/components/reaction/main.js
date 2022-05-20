// MODULES //

import React, { Fragment, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import { useTranslation } from 'react-i18next';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import SessionContext from '@isle-project/session/context.js';
import isObject from '@stdlib/assert/is-object';
import isFunction from '@stdlib/assert/is-function';
import Gate from '@isle-project/components/gate';
import { MEMBER_ACTION } from '@isle-project/constants/events.js';
import { withPropCheck } from '@isle-project/utils/prop-check';
import useForceUpdate from '@isle-project/utils/hooks/use-force-update';


// VARIABLES //

const debug = logger( 'isle:reaction' );
const ARROW_RIGHT = '→';


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
	const [ showAll, setShowAll ] = useState( false );
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
	let content;
	const isObj = isObject( props.show );
	if ( showAll ) {
		content = [];
		const keys = Object.keys( props.show );
		for ( let i = 0; i < keys.length; i++ ) {
			const key = keys[ i ];
			const value = props.show[ key ];
			content.push( <div>
				<h3>{props.actionID} {ARROW_RIGHT} {key} {ARROW_RIGHT}</h3>
				{value}
			</div> );
		}
	}
	else if ( session.currentUserActions ) {
		const visualizer = session.responseVisualizers[ props.actionID ];
		if ( visualizer ) {
			const { type } = visualizer;
			let actions = session.currentUserActions[ props.actionID ];
			if ( actions ) {
				actions = actions.filter( x => x.type === type );
				actions = actions.sort( ( a, b ) => a.absoluteTime - b.absoluteTime );
				const lastAction = actions[ actions.length-1 ];
				if ( isObj ) {
					content = props.show[ lastAction.value ] || props.show[ 'default' ] || props.banner;
				}
				else if ( isFunction( props.show ) ) {
					content = props.show( lastAction.value, lastAction ) || props.banner;
				}
			}
			content = props.banner;
		}
	} else {
		content = props.banner;
	}
	return ( <Fragment>
		{content}
		{isObj ? <Gate owner banner={null} >
			<Button variant="secondary" size="small" onClick={() => {
				setShowAll( !showAll );
			}} style={{ float: 'right' }} >
				<i className="fas fa-clock"></i> {t('toggle')}
			</Button>
		</Gate> : null}
	</Fragment> );
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
