// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import ReactList from 'react-list';
import isEmptyObject from '@stdlib/assert/is-empty-object';
import objectEntries from '@stdlib/utils/entries';
import copy from '@stdlib/utils/copy';
import Action from './action.js';


// VARIABLES //

const debug = logger( 'isle-editor' );


// MAIN //

class ActionList extends Component {
	constructor( props ) {
		super( props );
	}

	shouldComponentUpdate( nextProps, nextState ) {
		if (
			nextProps.period.from !== this.props.period.from ||
			nextProps.period.to !== this.props.period.to ||
			nextProps.filter !== this.props.filter ||
			nextProps.actions.length !== this.props.actions.length
		) {
			return true;
		}
		return false;
	}

	removeFactory = ( type ) => {
		const onRemoveClick = ( event ) => {
			event.stopPropagation();
			let newFilter = copy( this.props.filter );
			delete newFilter[ type ];
			if ( isEmptyObject( newFilter ) ) {
				newFilter = null;
			}
			const newHeader = this.createHeader( newFilter );
			this.props.onFilterChange( newFilter, newHeader );
		};
		return onRemoveClick;
	}

	createHeader = ( filter ) => {
		let entries = filter ? objectEntries( filter ) : [];
		let newHeader = <Fragment>
			<span style={{ display: 'inline' }} >Action Log</span>
			<div style={{ position: 'relative', width: 'auto', fontSize: '12px', fontFamily: 'Open Sans' }}>
				{entries.map( ( arr, idx ) => {
					return ( <span
						style={{ marginLeft: 10, background: 'lightcoral', cursor: 'pointer' }}
						onClick={this.removeFactory( arr[ 0 ])}
						key={idx}
					>{arr[ 0 ]}: {arr[ 1 ]}</span> );
				})}
			</div>
		</Fragment>;
		return newHeader;
	}

	clickFactory = ( type, value ) => {
		const onClick = () => {
			const newFilter = this.props.filter ? copy( this.props.filter ) : {};
			newFilter[ type ] = value;
			debug( 'The filter was successfully changed: ' + JSON.stringify( newFilter ) );
			const newHeader = this.createHeader( newFilter );
			this.props.onFilterChange( newFilter, newHeader );
		};
		return onClick;
	}

	renderItem = ( index, key ) => {
		const action = this.props.actions[ index ];
		return (
			<Action
				key={key}
				backgroundColor={key % 2 ? 'white' : 'lightgrey'}
				clickFactory={this.clickFactory}
				{...action}
			/>
		);
	}

	render() {
		return (
			<div style={{ overflowY: 'scroll', height: this.props.height }}>
				<ReactList
					itemRenderer={this.renderItem}
					length={this.props.actions.length}
					type="variable"
					pageSize={50}
				/>
			</div>
		);
	}
}


// DEFAULT PROPERTIES //

ActionList.defaultProps = {
	actions: [],
	filter: {},
	height: null,
	onFilterChange() {}
};


// TYPES //

ActionList.propTypes = {
	actions: PropTypes.array,
	filter: PropTypes.object,
	height: PropTypes.number,
	onFilterChange: PropTypes.func,
	period: PropTypes.shape(
		{
			from: PropTypes.object,
			to: PropTypes.object
		}
	).isRequired
};


// EXPORTS //

export default ActionList;
