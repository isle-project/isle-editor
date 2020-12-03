// MODULES //

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import isArray from '@stdlib/assert/is-array';
import Tooltip from '@isle-project/components/tooltip';
import './switch.css';


// VARIABLES //

const debug = logger( 'isle:switch' );


// MAIN //

/**
* The Switch component allows the display of one element out of a list of several elements. Users can cycle through the different children of the Switch tag by clicking on the currently displayed one.
*
* @property {boolean} active - controls whether the switch is active or not
* @property {string} tooltip - tooltip displayed when hovering over the switch element
* @property {string} tooltipPos - placement of the tooltip (either `top`, `left`, `right`, or `bottom`)
* @property {string} className - class name for the enclosing span element
* @property {Object} style - CSS inline styles
* @property {Function} onChange - callback invoked when elements are switched. Receives as its first argument the index of the currently displayed child
*/
const Switch = ({ active, tooltip, tooltipPos, className, style, onChange, children }) => {
	const [ pos, setPos ] = useState( 0 );

	const mappedChildren = React.Children.map( children, ( elem, idx ) => {
		const props = { style: {}};

		debug( `Check whether idx = ${idx} is equal to pos = ${pos}` );
		if ( idx !== pos ) {
			props.style.display = 'none';
		} else {
			props.style.display = 'inline';
		}
		return React.cloneElement( elem, props );
	});
	const handleClick = () => {
		if ( !isArray( children ) ) {
			return null;
		}
		const newPos = pos + 1;

		debug( 'Handle click: New position is '+ newPos );
		if ( newPos >= children.length ) {
			setPos( 0 );
			onChange( 0 );
		} else {
			setPos( newPos );
			onChange( newPos );
		}
	};
	let fullClassName = active ? 'switch active' : 'switch';
	if ( className ) {
		fullClassName += ' '+className;
	}
	if ( !active ) {
		return ( <span
			className={fullClassName}
			style={style}
		>
			{mappedChildren}
		</span> );
	}
	const content =
		<span
			role="button" tabIndex={0}
			className={fullClassName}
			onClick={handleClick}
			onKeyPress={handleClick}
			style={style}
		>
			{mappedChildren}
		</span>;

	if ( tooltip === '' || !active ) {
		return content;
	}
	return (
		<Tooltip
			placement={tooltipPos}
			tooltip={tooltip}
		>
			{content}
		</Tooltip>
	);
};


// PROPERTIES //

Switch.propTypes = {
	active: PropTypes.bool,
	tooltip: PropTypes.string,
	tooltipPos: PropTypes.string,
	className: PropTypes.string,
	style: PropTypes.object,
	onChange: PropTypes.func
};

Switch.defaultProps = {
	active: true,
	tooltip: 'Click to cycle through available options.',
	tooltipPos: 'top',
	className: '',
	style: {},
	onChange() {}
};


// EXPORTS //

export default Switch;
