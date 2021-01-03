// MODULES //

import React from 'react';


// FUNCTIONS //

const StatusBar = ( props ) => {
	return ( <div className="prose-statusbar">
		<span>{props.t('words')}: {props.nWords}</span>
		<span style={{ marginLeft: 5 }}>{props.t('characters')}: {props.nChars}</span>
	</div> );
};


// EXPORTS //

export default StatusBar;
