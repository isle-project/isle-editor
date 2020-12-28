// MODULES //

import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';


// MAIN //

const Loading = ( props ) => {
	if ( props.error ) {
		return ( <span>
			{props.t('encountered-an-error')}
			<button onClick={props.retry}>{props.t('retry')}</button>
		</span> );
	} else if ( props.pastDelay ) {
		const spinner = <span className="isle-loadable sk-cube-grid" >
			<span className="sk-cube sk-cube1"></span>
			<span className="sk-cube sk-cube2"></span>
			<span className="sk-cube sk-cube3"></span>
			<span className="sk-cube sk-cube4"></span>
			<span className="sk-cube sk-cube5"></span>
			<span className="sk-cube sk-cube6"></span>
			<span className="sk-cube sk-cube7"></span>
			<span className="sk-cube sk-cube8"></span>
			<span className="sk-cube sk-cube9"></span>
		</span>;
		return spinner;
	}
	return null;
};


// PROPERTIES //

Loading.propTypes = {
	error: PropTypes.object,
	retry: PropTypes.func
};

Loading.defaultProps = {
	error: null,
	retry() {}
};


// EXPORTS //

export default withTranslation( 'General' )( Loading );
