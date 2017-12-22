// MODULES //

import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import isObject from '@stdlib/assert/is-object';
import objectEntries from '@stdlib/utils/entries';
import copy from '@stdlib/utils/copy';
import PropTypes from 'prop-types';
import isEmptyObject from '@stdlib/assert/is-empty-object';
import hasOwnProp from '@stdlib/assert/has-own-property';
const debug = require( 'debug' )( 'isle-editor' );


// VARIABLES //

const Action = ( props ) => {
	return (
		<ListGroupItem style={{ background: props.backgroundColor, fontSize: 15, fontFamily: 'Open Sans', padding: '2px 1px 2px 1px', lineHeight: 1 }}>
			<div className="actionNote">
				<label>Time:&nbsp;</label>
				{ new Date( props.absoluteTime ).toLocaleTimeString() }|
				<label>User:&nbsp;</label><span className="clickable" onClick={props.clickFactory( 'email', props.email )} >{ props.email }</span>
			</div>
			<div className="actionNote">
				<label>ID:&nbsp;</label><span className="clickable" onClick={props.clickFactory( 'id', props.id )} >{ props.id }</span> |
				<label>Type:&nbsp;</label><span className="clickable" onClick={props.clickFactory( 'type', props.type )} >{ props.type }</span>
			</div>
			<div className="actionNote">
				<label>Value:&nbsp;</label>
				<span style={{ 'userSelect': 'text' }} >
					{ isObject( props.value ) ? JSON.stringify( props.value, null, 2 ) : props.value }
				</span>
			</div>
		</ListGroupItem>
	);
};


// MAIN //

class ActionLog extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			displayedActions: [],
			filter: null
		};

		this.removeFactory = ( type ) => {
			const onRemoveClick = ( event ) => {
				event.stopPropagation();
				let newFilter = copy( this.state.filter );
				delete newFilter[ type ];
				if ( isEmptyObject( newFilter ) ) {
					newFilter = null;
				}
				this.setState({
					filter: newFilter
				}, () => {
					const newHeader = this.createHeader( newFilter );
					const nActions = this.state.displayedActions.length;
					this.props.onFilter( newHeader, nActions );
				});
			};
			return onRemoveClick;
		};

		this.createHeader = ( filter ) => {
			let entries = filter ? objectEntries( filter ) : [];
			let newHeader = <div>
				<h4 style={{ display: 'inline' }} >Action Log</h4>
				<div style={{ position: 'relative', width: 'auto', fontSize: '12px', fontFamily: 'Open Sans' }}>
					{entries.map( ( arr, idx ) => {
						return ( <span
							style={{ marginLeft: 10, background: 'lightcoral', cursor: 'pointer' }}
							onClick={this.removeFactory( arr[ 0 ])}
							key={idx}
						>{arr[ 0 ]}: {arr[ 1 ]}</span> );
					})}
				</div>
			</div>;
			return newHeader;
		};

		this.clickFactory = ( type, value ) => {
			const onClick = () => {
				const newFilter = this.state.filter ? copy( this.state.filter ) : {};
				newFilter[ type ] = value;
				this.setState({
					filter: newFilter
				}, () => {
					debug( 'The filter was successfully changed: ' + JSON.stringify( this.state.filter ) );
					const newHeader = this.createHeader( newFilter );
					const nActions = this.state.displayedActions.length;
					this.props.onFilter( newHeader, nActions );
				});
			};
			return onClick;
		};
	}

	componentDidMount() {
		const { session } = this.context;
		this.unsubscribe = session.subscribe( ( type ) => {
			if ( session.socketActions.length === 0 && this.state.filter !== null ) {
				this.setState({
					filter: null
				}, () => {
					const newHeader = this.createHeader( null );
					const nActions = this.state.displayedActions.length;
					this.props.onFilter( newHeader, nActions );
				});
			}
			else if ( type === 'member_action' ) {
				this.buildActionsArray( this.props );
			} else if ( type === 'retrieved_user_actions' ) {
				this.buildActionsArray( this.props );
			}
		});
	}

	componentWillReceiveProps( nextProps ) {
		if (
			nextProps.period.from !== this.props.period.from ||
			nextProps.period.to !== this.props.period.to
		) {
			this.buildActionsArray( nextProps, this.props.onTimeRangeChange );
		}
	}

	componentDidUpdate( prevProps, prevState ) {
		if ( this.state.filter !== prevState.filter ) {
			debug( 'Should filter out actions...' );
			this.buildActionsArray( this.props );
		}
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	removeMarkedActions( displayedActions ) {
		for ( let i = displayedActions.length - 1; i >= 0; i-- ) {
			let action = displayedActions[ i ];
			let markedForRemoval = false;
			for ( let key in this.state.filter ) {
				if ( hasOwnProp( this.state.filter, key ) ) {
					let val = this.state.filter[ key ];
					if ( action[ key ] !== val ) {
						markedForRemoval = true;
					}
				}
			}
			if ( markedForRemoval ) {
				displayedActions.splice( i, 1 );
			}
		}
	}

	buildActionsArray( props, clbk ) {
		let { from, to } = props.period;
		if ( from && to ) {
			from = from.toDate();
			to = to.toDate();
			const { session } = this.context;
			let displayedActions = [];

			for ( let i = 0; i < session.socketActions.length; i++ ) {
				let action = session.socketActions[ i ];
				if ( action.absoluteTime > from && action.absoluteTime < to ) {
					displayedActions.push( action );
				}
			}
			if ( this.state.filter ) {
				debug( 'Should filter actions: ' + displayedActions.length );
				this.removeMarkedActions( displayedActions );
			}
			this.setState({
				displayedActions
			}, () => {
				if ( clbk ) {
					clbk( from, to, displayedActions.length );
				}
			});
		}
	}

	render() {
		return ( <ListGroup style={{ overflowY: 'scroll', height: window.innerHeight / 2 }}>
			{this.state.displayedActions.map( ( action, idx ) => <Action key={idx} {...action} backgroundColor={idx % 2 ? 'white' : 'lightgrey'} clickFactory={this.clickFactory} /> )}
		</ListGroup> );
	}
}

// DEFAULT PROPERTIES //

ActionLog.defaultProps = {
	onTimeRangeChange() {}
};

ActionLog.propTypes = {
	onTimeRangeChange: PropTypes.func,
	period: PropTypes.shape(
		{
			from: PropTypes.object,
			to: PropTypes.object
		}
	).isRequired
};

// TYPES //

ActionLog.contextTypes = {
	session: PropTypes.object

};


// EXPORTS //

export default ActionLog;
