// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isArray, contains } from '@stdlib/assert';
import { copy } from '@stdlib/utils';
const debug = require( 'debug' )( 'isle-editor' );


// MAIN //

class RealTimeMetrics extends Component {

	constructor() {
		super();

		this.state = {
			components: {}
		};

	}

	componentDidMount() {
		const { session } = this.context;
		this._isMounted = true;
		this.unsubscribe = session.subscribe( ( type, action ) => {
			if ( type === 'member_action' ) {
				if ( contains( this.props.for, action.id ) ) {
					let components = copy( this.state.components );
					let actions = components[ action.id ];
					if ( !isArray( actions ) ) {
						components[ action.id ] = [];
					}
					components[ action.id ].push( action.value );
					this.setState({
						components
					}, () => {
						debug( 'A new value for the given IDs was submitted: ' + JSON.stringify( this.state.components 	) );
						this.props.onData( this.state.components );
					});
				}
			}
			if ( this._isMounted ) {
				this.forceUpdate();
			}
		});
	}

	componentWillUnmount() {
		this._isMounted = false;
		this.unsubscribe();
	}

	render() {
		return (
			<div></div>
		);
	}

}


// DEFAULT PROPERTIES //

RealTimeMetrics.defaultProps = {
	onData() {}
};


// PROPERTY TYPES //

RealTimeMetrics.propTypes = {
	onData: PropTypes.func,
	for: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.array
	]).isRequired
};

RealTimeMetrics.contextTypes = {
	session: PropTypes.object
};


// EXPORTS //

export default RealTimeMetrics;
