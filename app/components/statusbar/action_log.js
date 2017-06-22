// MODULES //

import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import objectEntries from '@stdlib/utils/entries';
import copy from '@stdlib/utils/copy';
import isEmptyObject from '@stdlib/assert/is-empty-object';


// VARIABLES //

const Action = ( props ) => {
	return ( 
		<ListGroupItem style={{ background: props.backgroundColor, fontSize: 12, fontFamily: 'monospace', padding: '2px 1px 2px 1px', lineHeight: 1 }}> 
			<div className="actionNote">
				<label>Time:&nbsp;</label>{ new Date( props.absoluteTime ).toLocaleTimeString() } | 
				<label>User:&nbsp;</label><span className="clickable" onClick={props.clickFactory( 'email', props.email )} >{ props.email }</span>
			</div>
			<div className="actionNote">
				<label>ID:&nbsp;</label><span className="clickable" onClick={props.clickFactory( 'id', props.id )} >{ props.id }</span> | 
				<label>Type:&nbsp;</label><span className="clickable" onClick={props.clickFactory( 'type', props.type )} >{ props.type }</span>
			</div>
			<div className="actionNote">
				<label>Value:&nbsp;</label>{ props.value }
			</div>
		</ListGroupItem> 
	);
};


// MAIN //

class ActionLog extends Component {

	constructor( props ) {
		super( props );

		this.state = {
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
					this.props.onFilter( newHeader );
				});
			};
			return onRemoveClick;
		};

		this.createHeader = ( filter ) => {
			let entries = filter ? objectEntries( filter ) : [];
			let newHeader = <div>
				<h4 style={{ display: 'inline' }} >Action Log</h4> 
				<div style={{ position: 'relative', width: 'auto', fontSize: '10px', fontFamily: 'Arial' }}>
					{entries.map( ( arr, idx ) => {
						return <span 
							style={{ marginLeft: 10, background: 'lightcoral', cursor: 'pointer' }} 
							onClick={this.removeFactory( arr[ 0 ])}
							key={idx}
						>{arr[ 0 ]}: {arr[ 1 ]}</span>;
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
					const newHeader = this.createHeader( newFilter );
					this.props.onFilter( newHeader );
				});
			};
			return onClick;
		};

	}

	render() {
		const { session } = this.props;
		let displayedActions = copy( session.socketActions );
		if ( this.state.filter ) {
			for ( let i = session.socketActions.length - 1; i > 0; i-- ) {
				let action = session.socketActions[ i ];
				let markedForRemoval = false;
				for ( let key in this.state.filter ) {
					let val = this.state.filter[ key ];
					if ( action[ key ] !== val ) {
						markedForRemoval = true;
					}
				}
				if ( markedForRemoval ) {
					displayedActions.splice( i, 1 );
				}
			}
		}
		return ( <ListGroup style={{ overflowY: 'scroll', height: window.innerHeight / 2 }}>
			{displayedActions.map( ( action, idx ) => <Action key={idx} {...action} backgroundColor={ idx % 2 ? 'white' : 'lightgrey' } clickFactory={this.clickFactory} /> )}
		</ListGroup> );
	}
}


// EXPORTS //

export default ActionLog;
