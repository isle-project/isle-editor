// MODULES //

import React, { useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Panel from '@isle-project/components/panel';
import generateUID from '@isle-project/utils/uid';


// VARIABLES //

const uid = generateUID( 'generator' );


// MAIN //

/**
* A component for generating other components (e.g., automatically generated questions).
*
* @property {boolean} autoStart - controls whether to automatically invoke the generator after mounting
* @property {(string|node)} buttonLabel - label for button
* @property {Function} onGenerate - function invoked that should return a new component to be rendered in the lesson
*/
const Generator = ({ id, autoStart, buttonLabel, onGenerate }) => {
	const idRef = useRef( id || uid({ autoStart, buttonLabel, onGenerate }) );
	const [ element, setElement ] = useState( null );
	const generateRef = useRef();

	useEffect(() => {
		generateRef.current = onGenerate;
	});
	const handleClick = useCallback( () => {
		let elem = generateRef.current();
		if ( elem ) {
			elem = React.cloneElement( elem, {
				id: idRef.current
			});
			setElement( elem );
		}
	}, [] );

	useEffect( () => {
		if ( autoStart ) {
			handleClick();
		}
	}, [ autoStart, handleClick ] );

	return (
		<Panel>
			{element}
			<div className="d-grid" >
				<Button onClick={handleClick}>{buttonLabel}</Button>
			</div>
		</Panel>
	);
};


// PROPERTIES //

Generator.propTypes = {
	autoStart: PropTypes.bool,
	buttonLabel: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node
	]),
	onGenerate: PropTypes.func.isRequired
};

Generator.defaultProps = {
	autoStart: true,
	buttonLabel: 'Generate'
};


// EXPORTS //

export default Generator;
