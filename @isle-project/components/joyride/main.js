// MODULES //

import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Joyride from 'react-joyride';
import { useTranslation } from 'react-i18next';
import zIndexAdjustment from '@isle-project/utils/z-index-adjustment';


// VARIABLES //

const STYLES = {
	options: {
		arrowColor: '#fff',
		backgroundColor: '#fff',
		primaryColor: '#ca5800',
		textColor: '#333',
		overlayColor: 'rgba(0, 0, 0, 0.5)',
		spotlightShadow: '0 0 15px rgba(0, 0, 0, 0.5)',
		beaconSize: 36,
		zIndex: 100
	},
	tooltipContainer: {
		textAlign: 'left'
	}
};


// MAIN //

/**
* Wrapper around [react-joyride](https://github.com/gilbarbara/react-joyride) to create walk-throughs and guided tours.
*
* @property {Array} steps - array of step `objects`
* @property {boolean} scrollToSteps - controls whether the window should scroll to the current step
* @property {boolean} run - controls whether the guide is active
* @property {node} parentNode - node of parent element for z-index adjustment
* @property {Object} styles - object to override the [default styles](https://github.com/gilbarbara/react-joyride/blob/3e08384415a831b20ce21c8423b6c271ad419fbf/src/styles.js)
*/
const Wrapper = ( props ) => {
	const { t } = useTranslation( 'joyride' );
	const { parentNode } = props;
	const zIndex = useRef();

	useEffect( () => {
		zIndex.current = zIndexAdjustment( parentNode );
	}, [ parentNode ]);

	const styles = {
		...STYLES,
		...props.styles
	};
	if ( styles.options && styles.options.zIndex === 100 ) {
		styles.options.zIndex = zIndex.current + 100;
	}
	return (
		<Joyride
			showSkipButton
			{...props}
			run={props.run}
			steps={props.steps}
			styles={styles}
			locale={{
				back: t('back'),
				close: t('close'),
				last: t('last'),
				next: t('next'),
				skip: t('skip')
			}}
		/>
	);
};


// PROPERTIES //

Wrapper.propTypes = {
	run: PropTypes.bool,
	scrollToSteps: PropTypes.bool,
	steps: PropTypes.array.isRequired,
	parentNode: PropTypes.node,
	styles: PropTypes.object
};

Wrapper.defaultProps = {
	run: false,
	scrollToSteps: true,
	parentNode: null,
	styles: {}
};


// EXPORTS //

export default Wrapper;
