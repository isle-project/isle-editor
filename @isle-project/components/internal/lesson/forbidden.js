// MODULES //

import React from 'react';
import { withTranslation } from 'react-i18next';
import './forbidden.css';


// MAIN //

const Forbidden = ( props ) => {
	return (
		<div className="forbidden-wrapper" >
			<h3 className="forbidden-header" >{props.t('not-available-yet')}</h3>
		</div>
	);
};


// EXPORTS //

export default withTranslation( 'internal/lesson' )( Forbidden );
