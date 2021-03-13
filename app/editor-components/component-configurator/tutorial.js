// MODULES //

import React, { useRef } from 'react';
import Joyride from '@isle-project/components/joyride';
import { useTranslation } from 'react-i18next';


// MAIN //

const ConfiguratorTutorial = ({ onFinish }) => {
	const { t } = useTranslation( 'Tutorial' );
	const steps = useRef([
		{
			target: '.modal-content',
			content: t('opened-wizard'),
			disableBeacon: true
		},
		{
			target: '.playground-live-editor',
			content: t('playground-editor')
		},
		{
			target: '.playground-live-preview',
			content: t('playground-preview')
		},
		{
			target: '.table-striped',
			content: t('list-of-attributes'),
			disableBeacon: true
		},
		{
			target: 'tr > td:nth-of-type(1)',
			content: t('toggle-option'),
			disableBeacon: true
		},
		{
			target: 'tr > td:nth-of-type(2)',
			content: t('option-description'),
			disableBeacon: true
		},
		{
			target: 'tr > td:nth-of-type(3)',
			content: t('set-option-value'),
			disableBeacon: true
		},
		{
			target: 'tr > td:nth-of-type(4)',
			content: t('option-data-type'),
			disableBeacon: true
		},
		{
			target: 'tr > td:nth-of-type(5)',
			content: t('default-option-value-if-not-set'),
			disableBeacon: true
		},
		{
			target: '.configurator-option-filter-select',
			content: t('filter-options'),
			disableBeacon: true
		},
		{
			target: '.configurator-searchbar',
			content: t('search-for-options'),
			disableBeacon: true
		},
		{
			target: '.table-striped',
			content: t('add-property'),
			disableBeacon: true
		},
		{
			target: '.modal-footer > .btn-success',
			content: t('click-to-accept-changes')
		},
		{
			target: '.modal-footer > .btn-primary',
			content: t('discard-changes')
		},
		{
			target: '.modal-footer > .btn-primary:nth-of-type(3)',
			content: t('discard-and-close')
		}
	]);
	return (
		<Joyride
			onFinish={onFinish}
			run={true}
			showProgress
			disableScrolling
			continuous
			spotlightPadding={5}
			spotlightClicks
			steps={steps.current}
			styles={{
				options: {
					zIndex: 1100
				}
			}}
		/>
	);
};


// EXPORTS //

export default ConfiguratorTutorial;
