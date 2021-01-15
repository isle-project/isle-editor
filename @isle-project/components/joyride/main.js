// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Joyride from 'react-joyride';
import { withTranslation } from 'react-i18next';
import zIndexAdjustment from '@isle-project/utils/z-index-adjustment';
import { addResources } from '@isle-project/locales';


// VARIABLES //

addResources( 'Joyride' );
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
* Wrapper around [react-joyride](https://github.com/gilbarbara/react-joyride) to create walkthroughs and guided tours.
*
* @property {Array} steps - array of step `objects`
* @property {boolean} scrollToSteps - controls whether the window should scroll to the current step
* @property {boolean} run - controls whether the guide is active
*/
class Wrapper extends Component {
	constructor( props ) {
		super( props );
		this.zIndexAdjustment = zIndexAdjustment( props.parentNode );
	}

	componentDidUpdate( prevProps ) {
		if ( this.props.parentNode !== prevProps.parentNode ) {
			this.zIndexAdjustment = zIndexAdjustment( this.props.parentNode );
		}
	}

	render() {
		const { t } = this.props;
		const styles = { ...STYLES };
		styles.options.zIndex = this.zIndexAdjustment + 100;
		return (
			<Joyride
				showSkipButton
				{...this.props}
				run={this.props.run}
				steps={this.props.steps}
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
	}
}


// PROPERTIES //

Wrapper.propTypes = {
	run: PropTypes.bool,
	scrollToSteps: PropTypes.bool,
	steps: PropTypes.array.isRequired,
	parentNode: PropTypes.node
};

Wrapper.defaultProps = {
	run: false,
	scrollToSteps: true,
	parentNode: null
};


// EXPORTS //

export default withTranslation( 'Joyride' )( Wrapper );
