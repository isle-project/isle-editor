// MODULES //

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';


// MAIN //

i18n.use( LanguageDetector )
	.use( initReactI18next )
	.init({
		debug: !!process.env.DEBUG_I18N, // eslint-disable-line no-process-env
		lng: localStorage.getItem( 'i18nextLng' ) || 'en',
		fallbackLng: 'en',
		ns: [ 'components' ],
		defaultNS: 'components',
		resources: {},
		react: {
			wait: true
		},
		interpolation: {
			escapeValue: false // Not needed for React!
		}
	});


// EXPORTS //

export default i18n;

