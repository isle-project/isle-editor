// MODULES //

import React from 'react';
import Joyride, { EVENTS } from '@isle-project/components/joyride';
import { useTranslation } from 'react-i18next';


// MAIN //

const InterfaceTour = ( props ) => {
	const { t } = useTranslation( 'InterfaceTour' );
	return ( <Joyride
		{...props}
		showProgress
		continuous
		disableOverlayClose
		steps={[
			{
				target: '.statusbar',
				content: t('statusbar-info'),
				disableBeacon: true
			},
			{
				target: '.statusbar-voice',
				content: t('statusbar-voice-info')
			},
			{
				target: '.statusbar-presentation-mode',
				content: t('statusbar-presentation-mode')
			},
			{
				target: '.statusbar-blackscreen-mode',
				content: t('statusbar-blackscreen-mode')
			},
			{
				target: '.statusbar-group-manager',
				content: t('statusbar-group-manager')
			},
			{
				target: '.statusbar-presence',
				content: t('statusbar-presence')
			},
			{
				target: '.statusbar-username',
				content: t('statusbar-username')
			},
			{
				target: '#statusbar-login-button',
				content: t('statusbar-login-button')
			},
			{
				target: '#statusbar-signup-button',
				content: t('statusbar-signup-button')
			},
			{
				target: '#statusbar-logout-button',
				content: t('statusbar-logout-button')
			},
			{
				target: '#statusbar-dashboard-button',
				content: t('statusbar-dashboard-button')
			},
			{
				target: '.statusbar-video-chat',
				content: t('statusbar-video-chat')
			},
			{
				target: '.statusbar-text-chat',
				content: t('statusbar-text-chat')
			},
			{
				target: '.language-switcher',
				content: t('language-switcher')
			},
			{
				target: '.instructor-view-handler',
				content: t('instructor-view-handler')
			},
			{
				target: '.toolbar-buttongroup',
				content: t('toolbar-buttongroup')
			}
		]}
		callback={( tour ) => {
			const type = tour.type;
			if ( type === EVENTS.TOUR_END ) {
				props.onFinish();
			}
		}}
	/> );
};


// EXPORTS //

export default InterfaceTour;
