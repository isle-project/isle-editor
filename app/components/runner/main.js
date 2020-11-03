// MODULES //

import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';


// MAIN //

/**
* The runner component will execute a supplied function either once or at a given interval.
*
* @property {boolean} active - controls whether the runner should be active. Upon activation, the `onEvaluate` function is called in the given interval (or once)
* @property {number} interval - number of milliseconds between invocations of `onEvaluate`. If no interval is set, the function is only invoked once
* @property {Function} onEvaluate - function to be invoked
*/
const Runner = ({ active, interval, onEvaluate }) => {
	let intervalID = useRef( null );
	useEffect( () => {
		if ( active ) {
			if ( interval ) {
				if ( intervalID.current ) {
					window.clearInterval( intervalID.current );
				}
				intervalID.current = window.setInterval( onEvaluate, interval );
			} else {
				onEvaluate();
			}
		}
		return () => {
			if ( intervalID.current ) {
				window.clearInterval( intervalID.current );
			}
		};
	}, [ active, interval, onEvaluate ]);
	return null;
};


// PROPERTIES //

Runner.defaultProps = {
	active: true,
	interval: null,
	onEvaluate() {}
};

Runner.propTypes = {
	active: PropTypes.bool,
	interval: PropTypes.number,
	onEvaluate: PropTypes.func
};


// EXPORTS //

export default Runner;
