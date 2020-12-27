// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import { withTranslation } from 'react-i18next';
import Alert from 'react-bootstrap/Alert';
import SessionContext from '@isle-project/session/context.js';
import isObject from '@stdlib/assert/is-object';
import isFunction from '@stdlib/assert/is-function';
import { MEMBER_ACTION } from '@isle-project/constants/events.js';


// VARIABLES //

const debug = logger( 'isle:reaction' );


// MAIN //

/**
* Shows different components depending on user actions.
*
* @property {string} actionID - ID of component to watch
* @property {(Object|Function)} show - hash table of components to display given the different responses (if no `key` matches the response, the value corresponding to the `default` key will be displayed if set) or a function that returns a component to display (sole argument of function is the latest result)
*/
class Reaction extends Component {
	constructor( props ) {
		super( props );
	}

	componentDidMount() {
		const session = this.context;
		this.unsubscribe = session.subscribe( ( type, action ) => {
			if ( type === MEMBER_ACTION && action.id === this.props.actionID ) {
				this.forceUpdate();
			}
		});
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	render() {
		debug( 'Render component...' );
		const session = this.context;
		if ( !this.props.actionID ) {
			return <Alert variant="danger">{this.props.t('supply-component-id')}</Alert>;
		}
		if ( session.currentUserActions ) {
			const visualizer = session.responseVisualizers[ this.props.actionID ];
			if ( visualizer ) {
				const { type } = visualizer;
				let actions = session.currentUserActions[ this.props.actionID ];
				if ( actions ) {
					actions = actions.filter( x => x.type === type );
					actions = actions.sort( ( a, b ) => a.absoluteTime - b.absoluteTime );
					const lastAction = actions[ actions.length-1 ];
					if ( isObject( this.props.show ) ) {
						return this.props.show[ lastAction.value ] || this.props.show[ 'default' ] || null;
					}
					if ( isFunction( this.props.show ) ) {
						return this.props.show( lastAction.value, lastAction ) || null;
					}
				}
				return null;
			}
		}
		return null;
	}
}


// PROPERTIES //

Reaction.propTypes = {
	actionID: PropTypes.string.isRequired,
	show: PropTypes.oneOfType([ PropTypes.object, PropTypes.func ])
};

Reaction.defaultProps = {
	show: {}
};

Reaction.contextType = SessionContext;


// EXPORTS //

export default withTranslation( 'General' )( Reaction );
