// MODULES //

import React, { Fragment, useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import usePrevious from '@isle-project/utils/hooks/use-previous';


// MAIN //

/**
* The expire component will cause all of its children to become invisible after a specified amount of time.
*
* @property {boolean} active - controls whether the counter should be active
* @property {number} delay - number of milliseconds before component disappears
*/
const Expire = ( props ) => {
	const { active, children, delay } = props;
	const [ visible, setVisible ] = useState( active );
	const prevChildren = usePrevious( props.children );
	const timerRef = useRef( null );

	const setTimer = useCallback( () => {
		if ( timerRef.current ) {
			clearTimeout( timerRef.current );
		}
		timerRef.current = setTimeout( () => {
			setVisible( false );
			timerRef.current = null;
		}, delay );
	}, [ delay ] );

	useEffect( () => {
		if ( active ) {
			setTimer();
		}
		return () => {
			if ( timerRef.current ) {
				clearTimeout( timerRef.current );
			}
		};
	}, [ active, setTimer ] );

	useEffect( () => {
		if ( children !== prevChildren ) {
			setVisible( true );
			if ( active ) {
				setTimer();
			}
		}
	}, [ active, setTimer, children, prevChildren ] );

	return visible ? <Fragment>{children}</Fragment> : <span />;
};


// PROPERTIES //

Expire.defaultProps = {
	active: false,
	delay: 1000
};

Expire.propTypes = {
	active: PropTypes.bool,
	delay: PropTypes.number
};


// EXPORTS //

export default Expire;
