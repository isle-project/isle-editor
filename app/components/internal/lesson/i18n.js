// MODULES //

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import IS_ELECTRON from 'utils/is-electron';


// MAIN //

i18n.use( LanguageDetector )
	.use( initReactI18next )
	.init({
		debug: IS_ELECTRON,
		lng: 'en',
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

