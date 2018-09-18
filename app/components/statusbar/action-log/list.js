// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import ReactList from 'react-list';
import isEmptyObject from '@stdlib/assert/is-empty-object';
import objectEntries from '@stdlib/utils/entries';
import copy from '@stdlib/utils/copy';
import isObjectLike from '@stdlib/assert/is-object-like';
import Action from './action.js';


// VARIABLES //

const debug = logger( 'isle:statusbar:action-log' );
const LINE_HEIGHT = 20;
const TEXT_LINE_HEIGHT = 16;
const RE_NEWLINE = /\r?\n/g;


// MAIN //

class ActionList extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			actions: props.actions
		};
	}

	static getDerivedStateFromProps( props, state ) {
		if ( props.actions.length !== state.actions.length ) {
			const actions = new Array( props.actions.length );
			for ( let i = 0; i < props.actions.length; i++ ) {
				actions[ i ] = props.actions[ i ];
				const val = actions[ i ].value;
				if ( isObjectLike( val ) ) {
					actions[ i ].value = JSON.stringify( val, null, 2 );
				}
			}
			return {
				actions: props.actions
			};
		}
		return null;
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

	itemSizeGetter = ( index ) => {
		let lines = 2 * LINE_HEIGHT;
		const action = this.state.actions[ index ];
		const noLines = ( String( action.value ).match( RE_NEWLINE ) || '' ).length + 1;
		lines += noLines * TEXT_LINE_HEIGHT;
		lines += LINE_HEIGHT; // first "Value" line
		return lines;
	}

	renderItem = ( index, key ) => {
		debug( `Render ${index}th item` );
		const action = this.state.actions[ index ];
		let backgroundColor = index % 2 ? 'white' : 'lightgrey';
		let color;
		if ( action.owner ) {
			color = '#3c763d';
		} else {
			color = 'black';
		}
		return (
			<Action
				key={key}
				backgroundColor={backgroundColor}
				color={color}
				clickFactory={this.clickFactory}
				{...action}
			/>
		);
	}

	render() {
		const { height } = this.props;
		const { actions } = this.state;
		debug( 'Rendering list of actions...' );
		let list = null;
		if ( actions.length > 0 ) {
			debug( 'Received more than one action: '+actions.length );
			list = <ReactList
				itemRenderer={this.renderItem}
				length={actions.length}
				type="variable"
				pageSize={50}
				itemSizeGetter={this.itemSizeGetter}
			/>;
		}
		return (
			<div style={{ overflowY: 'scroll', height: height }}>
				{list}
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
