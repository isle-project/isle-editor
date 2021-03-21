// MODULES //

import React, { Profiler, useCallback, useState, useRef, useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';
import generateUID from '@isle-project/utils/uid';
import incrmean from '@stdlib/stats/incr/mean';


// VARIABLES //

const uid = generateUID( 'profiler' );


// MAIN //

const ProfilerWrapper = ( props ) => {
	const tagName = props.children.props.tagName;
	const id = useRef( tagName || props.id || uid( props ) );
	const baseRef = useRef( incrmean() );
	const actualRef = useRef( incrmean() );
	const [ counter, setCounter ] = useState( 0 );

	useEffect( () => {
		const interval = setInterval( () => {
			setCounter( counter + 1 );
		}, 5000 );
		return () => {
			clearInterval( interval );
		};
	});

	const logProfilingResults = useCallback( (
		id,
		phase, // either "mount" or "update"
		actualDuration, // time spent rendering the committed update
		baseDuration, // estimated time to render the entire sub-tree
		startTime,
		commitTime,
	) => {
		baseRef.current( baseDuration );
		actualRef.current( actualDuration );

		// eslint-disable-next-line no-console
		return console.table({
			identifier: `${id} - ${phase}`,
			actualDuration: `${actualDuration} (avg. duration: ${actualRef.current()})`,
			baseDuration: `${baseDuration} (avg. duration: ${baseRef.current()})`,
			timePeriod: `${startTime} - ${commitTime}`
		});
	}, [] );
	const baseAvg = baseRef.current() || 0;
	const actualAvg = actualRef.current() || 0;
	const alert = <Alert variant="info">
		{id.current} - base avg: {baseAvg.toFixed( 2 )}ms - actual avg: {actualAvg.toFixed( 2 )}ms
	</Alert>;
	return ( <Profiler id={id.current} onRender={logProfilingResults} >
		{props.children}
		{alert}
	</Profiler> );
};


// EXPORTS //

export default ProfilerWrapper;
