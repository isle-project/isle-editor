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
			content: t('component-wizard-0'),
			disableBeacon: true
		},
		{
			target: '.playground-live-editor',
			content: t('component-wizard-1')
		},
		{
			target: '.playground-live-preview',
			content: t('component-wizard-2')
		},
		{
			target: '.table-striped',
			content: t('component-wizard-3'),
			disableBeacon: true
		},
		{
			target: 'tr > td:nth-of-type(1)',
			content: t('component-wizard-4'),
			disableBeacon: true
		},
		{
			target: 'tr > td:nth-of-type(2)',
			content: t('component-wizard-5'),
			disableBeacon: true
		},
		{
			target: 'tr > td:nth-of-type(3)',
			content: t('component-wizard-6'),
			disableBeacon: true
		},
		{
			target: 'tr > td:nth-of-type(4)',
			content: t('component-wizard-7'),
			disableBeacon: true
		},
		{
			target: 'tr > td:nth-of-type(5)',
			content: t('component-wizard-8'),
			disableBeacon: true
		},
		{
			target: '.configurator-option-filter-select',
			content: t('component-wizard-9'),
			disableBeacon: true
		},
		{
			target: '.configurator-searchbar',
			content: t('component-wizard-10'),
			disableBeacon: true
		},
		{
			target: '.table-striped',
			content: t('component-wizard-11'),
			disableBeacon: true
		},
		{
			target: '.modal-footer > .btn-success',
			content: t('component-wizard-12')
		},
		{
			target: '.modal-footer > .btn-primary',
			content: t('component-wizard-13')
		},
		{
			target: '.modal-footer > .btn-primary:nth-of-type(3)',
			content: t('component-wizard-14')
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
