// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import contains from '@stdlib/assert/contains';
import copy from '@stdlib/utils/copy';


// VARIABLES //

const debug = logger( 'isle-editor' );


// MAIN //

class RealTimeMetrics extends Component {
	constructor() {
		super();
		this.state = {
			actions: []
		};
	}

	componentDidMount() {
		this._isMounted = true;
		const { session } = this.context;
		if ( session ) {
			this.unsubscribe = session.subscribe( ( type, action ) => {
				if ( type === 'member_action' ) {
					if ( contains( this.props.for, action.id ) ) {
						let actions = copy( this.state.actions );
						actions.push( this.props.returnFullObject ? action : action.value );
						this.setState({
							actions
						}, () => {
							debug( 'A new value for the given IDs was submitted: ' + JSON.stringify( this.state.actions 	) );
							this.props.onData( this.state.actions );
							this.props.onDatum( this.state.actions[ this.state.actions.length-1 ]);
						});
					}
				}
				if ( this._isMounted ) {
					this.forceUpdate();
				}
			});
		}
	}

	componentWillUnmount() {
		this._isMounted = false;
		if ( this.unsubscribe ) this.unsubscribe();
	}

	render() {
		return (
			<div></div>
		);
	}
}


// TYPES //

RealTimeMetrics.defaultProps = {
	onData() {},
	onDatum() {},
	returnFullObject: false
};

RealTimeMetrics.propTypes = {
	for: PropTypes.string.isRequired,
	onData: PropTypes.func,
	onDatum: PropTypes.func,
	returnFullObject: PropTypes.bool
};

RealTimeMetrics.contextTypes = {
	session: PropTypes.object
};


// EXPORTS //

export default RealTimeMetrics;
