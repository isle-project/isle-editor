// MODULES //

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { RESOURCES } from '@isle-project/locales';


// MAIN //

i18n.use( LanguageDetector )
	.use( initReactI18next )
	.init({
		debug: !!process.env.DEBUG_I18N, // eslint-disable-line no-process-env
		lng: localStorage.getItem( 'i18nextLng' ) || 'en',
		fallbackLng: 'en',
		ns: [ 'components' ],
		defaultNS: 'components',
		resources: RESOURCES,
		react: {
			bindI18n: 'languageChanged',
			bindI18nStore: 'added',
			wait: false
		},
		interpolation: {
			escapeValue: false // Not needed for React!
		}
	});


// EXPORTS //

export default i18n;

