// MODULES //

import React from 'react';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import PropTypes from 'prop-types';
import { isPrimitive as isBoolean } from '@stdlib/assert/is-boolean';
import './action.css';


// MAIN //

const Action = ( props ) => {
	let value = props.value;
	if ( isBoolean( value ) ) {
		value = value ? 'true' : 'false';
	}
	const date = new Date( props.absoluteTime );
	return (
		<ListGroupItem style={{ background: props.backgroundColor, color: props.color, fontSize: 15, fontFamily: 'Open Sans', padding: '2px 1px 2px 1px', lineHeight: 1 }}>
			<div className="actionNote">
				<span className="title">Time:&nbsp;</span>
				{ date.toLocaleTimeString() } - { date.toLocaleDateString() }|
				<label htmlFor="action-email-button">User:&nbsp;</label>
				<button id="action-email-button" className="empty-button" onClick={props.clickFactory( 'email', props.email )} >{ props.email }</button>
			</div>
			<div className="actionNote">
				<label htmlFor="action-id-button">ID:&nbsp;</label>
				<button id="action-id-button" className="empty-button" onClick={props.clickFactory( 'id', props.id )} >{ props.id }</button> |
				<label htmlFor="action-type-button">Type:&nbsp;</label>
				<button id="action-type-button" className="empty-button" onClick={props.clickFactory( 'type', props.type )} >{ props.type }</button>
			</div>
			<div className="actionNote">
				<span className="title">Value:&nbsp;</span>
				<span style={{ 'userSelect': 'text' }} >
					{value}
				</span>
			</div>
		</ListGroupItem>
	);
};


// TYPES //

Action.propTypes = {
	absoluteTime: PropTypes.number.isRequired,
	backgroundColor: PropTypes.string.isRequired,
	color: PropTypes.string.isRequired,
	clickFactory: PropTypes.func.isRequired,
	email: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	value: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.string
	]).isRequired
};


// EXPORTS //

export default Action;
