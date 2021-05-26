// MODULES //

import React from 'react';
import { withTranslation } from 'react-i18next';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Button from 'react-bootstrap/Button';
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
	let name;
	let email;
	if ( props.anonymized ) {
		name = props.userHash.name[ props.name ] || props.name;
		email = props.userHash.email[ props.email ] || props.email;
	} else {
		name = props.name;
		email = props.email;
	}
	return (
		<ListGroupItem style={{ background: props.backgroundColor, color: props.color, fontSize: 15, fontFamily: 'Open Sans', padding: '2px 1px 2px 1px', lineHeight: 1 }}>
			<div className="actionNote">
				<label htmlFor="action-email-button">{props.t( 'name' )}:&nbsp;</label>
				<button id="action-name-button" className="empty-button" onClick={props.clickFactory( 'name', props.name )} >{name}</button>
				{' | '}
				<label htmlFor="action-email-button">{props.t( 'email' )}:&nbsp;</label>
				<button id="action-email-button" className="empty-button" onClick={props.clickFactory( 'email', props.email )} >{email}</button>
			</div>
			<div className="actionNote">
				<span className="title">{props.t( 'time' )}:&nbsp;</span>
				{ date.toLocaleTimeString() } - { date.toLocaleDateString() }
			</div>
			<div className="actionNote">
				<label htmlFor="action-id-button">{props.t( 'id')}:&nbsp;</label>
				<button id="action-id-button" className="empty-button" onClick={props.clickFactory( 'id', props.id )} >{ props.id }</button> |
				<label htmlFor="action-type-button">{props.t( 'type' )}:&nbsp;</label>
				<button id="action-type-button" className="empty-button" onClick={props.clickFactory( 'type', props.type )} >{ props.type }</button>
			</div>
			<div className="actionNote">
				<span className="title">{props.t( 'value' )}:&nbsp;</span>
				<span style={{ 'userSelect': 'text' }} >
					{value}
				</span>
			</div>
			<Button
				variant="outline-danger"
				size="sm"
				onClick={() => {
					props.onDelete( props.sessiondataID );
				}}
				aria-label={props.t('delete')}
				style={{
					position: 'absolute',
					top: 6,
					right: 6
				}}
			>
				<span className="fa fa-trash" />
			</Button>
		</ListGroupItem>
	);
};


// PROPERTIES //

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
	]).isRequired,
	anonymized: PropTypes.bool.isRequired,
	userHash: PropTypes.object.isRequired
};


// EXPORTS //

export default withTranslation( 'internal/statusbar' )( Action );
