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
		steps={[
			{
				target: '.statusbar',
				disableBeacon: true,
				content: t('statusbar-info')
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
				target: '.statusbar-video-chat',
				content: t('statusbar-video-chat')
			},
			{
				target: '.statusbar-text-chat',
				content: t('statusbar-text-chat')
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
