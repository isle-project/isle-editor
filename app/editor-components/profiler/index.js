// MODULES //

import React, { Profiler, useEffect, useRef } from 'react';
import generateUID from '@isle-project/utils/uid';
import incrmean from '@stdlib/stats/incr/mean';


// VARIABLES //

const uid = generateUID( 'profiler' );
const baseAccumulators = {};
const actualAccumulators = {};
const logProfilingResults = (
	id,
	phase, // either "mount" or "update"
	actualDuration, // time spent rendering the committed update
	baseDuration, // estimated time to render the entire sub-tree
	startTime,
	commitTime,
) => {
	if ( !baseAccumulators[ id ] || !actualAccumulators[ id ] ) {
		return;
	}
	baseAccumulators[ id ]( baseDuration );
	actualAccumulators[ id ]( actualDuration );

	// eslint-disable-next-line no-console
	return console.table({
		identifier: `${id} - ${phase}`,
		actualDuration: `${actualDuration} (avg. duration: ${actualAccumulators[ id ]()})`,
		baseDuration: `${baseDuration} (avg. duration: ${baseAccumulators[ id ]()})`,
		timePeriod: `${startTime} - ${commitTime}`
	});
};


// MAIN //

const ProfilerWrapper = ( props ) => {
	const id = useRef( props.id || uid( props ) );
	useEffect( () => {
		baseAccumulators[ id.current ] = incrmean();
		actualAccumulators[ id.current ] = incrmean();
	}, [] );
	return ( <Profiler id={id.current} onRender={logProfilingResults} >
		{props.children}
	</Profiler> );
};


// EXPORTS //

export default ProfilerWrapper;
