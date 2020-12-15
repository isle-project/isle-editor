// MODULES //

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import { useTranslation } from 'react-i18next';
import isArray from '@stdlib/assert/is-array';
import Alert from 'react-bootstrap/Alert';
import Collapse from '@isle-project/components/collapse';
import isLineButtons from '@isle-project/utils/is-line-buttons';
import './accordion.css';


// VARIABLES //

const debug = logger( 'isle:accordion' );


// MAIN //

/**
* An accordion component controlling vertical sliders.
*
* @property {number} active - index of slider to be opened at the beginning
* @property {Array} headers - array of header names
* @property {boolean} canCloseAll - whether one can collapse all headers
* @property {string} headerClassName - this overrules the given class name of the headers
* @property {Object} headerStyle - one may also assign a style to the header bars
* @property {Function} onChange - callback invoked with index of new active vertical slider
* @property {string} className - class name for outer div
* @property {Object} style - CSS inline styles for outer div
*/
const Accordion = ( props ) => {
	debug( 'Rendering accordion...' );
	const [ isActive, setIsActive ] = useState( props.active );
	const [ prevActive, setPrevActive ] = useState( props.active );
	const { t } = useTranslation( 'Accordion' );
	if ( props.active !== prevActive ) {
		setIsActive( props.active );
		setPrevActive( props.active );
		props.onChange( props.active );
	}
	if ( !isArray( props.children ) ) {
		return <Alert variant="danger" >{t('children-missing')}</Alert>;
	}
	const clickFactory = ( len, idx ) => {
		if ( props.canCloseAll ) {
			return () => {
				const newIdx = ( isActive === idx ) ? null : idx;
				setIsActive( newIdx );
				props.onChange( newIdx );
			};
		}
		return () => {
			const newIdx = ( isActive === idx ) ? (idx+1) % len : idx;
			setIsActive( newIdx );
			props.onChange( newIdx );
		};
	};
	const out = [];
	const headers = props.headers || [];
	let count = 0;
	for ( let i = 0; i < props.children.length; i++ ) {
		const child = props.children[ i ];
		if ( !isLineButtons( child ) ) {
			const style = {
				boxShadow: '0 0 -4px rgba(92, 92, 92, 0.5)'
			};
			if ( count === 0 ) {
				style.borderTopLeftRadius = 6;
				style.borderTopRightRadius = 6;
			}
			if ( i === isActive ) {
				style.background = 'rgba(201, 93, 10, 0.2)';
			}
			const elem = (
				<Collapse
					key={i}
					visible={i === isActive}
					header={headers[ count ] || `Header ${count}`}
					headerClassName={props.headerClassName}
					headerStyle={{
						...style,
						...props.headerStyle
					}}
					onClick={clickFactory( props.children.length, i )}
				>
					{child}
				</Collapse>
			);
			count += 1;
			out.push( elem );
		}
	}
	return (
		<div
			className={`accordion ${props.className}`}
			style={props.style}
		>
			{out}
		</div>
	);
};


// PROPERTIES //

Accordion.defaultProps = {
	active: null,
	canCloseAll: false,
	headers: null,
	headerClassName: null,
	headerStyle: null,
	onChange() {},
	className: '',
	style: null
};

Accordion.propTypes = {
	active: PropTypes.number,
	canCloseAll: PropTypes.bool,
	headers: PropTypes.arrayOf( PropTypes.oneOfType([
		PropTypes.string, PropTypes.node
	]) ),
	headerStyle: PropTypes.object,
	headerClassName: PropTypes.string,
	onChange: PropTypes.func,
	className: PropTypes.string,
	style: PropTypes.object
};


// EXPORTS //

export default Accordion;
