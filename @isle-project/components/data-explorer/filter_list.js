// MODULES //

import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import isPlainObject from '@stdlib/assert/is-plain-object';
import isArray from '@stdlib/assert/is-array';
import { isPrimitive as isString } from '@stdlib/assert/is-string';
import objectKeys from '@stdlib/utils/keys';


// MAIN //

const FilterList = ( props ) => {
	let listItems = [];
	for ( let i = 0; i < props.filters.length; i++ ) {
		const filter = props.filters[ i ];
		let value;
		if ( isArray( filter.value ) ) {
			value = filter.value.map( ( x, i ) => <Badge bg="secondary" key={i} style={{ marginRight: 4 }} >{x}</Badge> );
		}
		else if ( isString( filter.value ) ) {
			value = <Badge bg="secondary" style={{ marginRight: 4 }} >{filter.value}</Badge>;
		}
		else if ( isPlainObject( filter.value ) ) {
			const keys = objectKeys( filter.value );
			value = new Array( keys.length );
			for ( let i = 0; i < keys.length; i++ ) {
				const key = keys[ i ];
				value[ i ] = <Badge key={key} bg="secondary" style={{ marginRight: 4 }} >
					<b>{key}: </b>
					{filter.value[ key ]}
				</Badge>;
			}
		}
		listItems.push( <ListGroup.Item key={i} >
			<span className="title">{filter.id}: </span>
			{value}
			{props.removeButtons ? <Button
				variant="danger" size="sm"
				style={{
					float: 'right'
				}}
				onClick={() => {
					props.onRemove( i );
				}}
				aria-label="remove"
			>
				<i className="fas fa-times"></i>
			</Button> : null}
		</ListGroup.Item> );
	}
	return (
		<ListGroup>
			{listItems}
		</ListGroup>
	);
};


// EXPORTS //

export default FilterList;
