// MODULES //

import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import normalizeLanguageCode from './normalize_language_code.js';
import HttpApi from 'i18next-http-backend';


// VARIABLES //

const windowGlobal = typeof window !== 'undefined' && window;


// EXPORTS //

export const i18n = i18next.createInstance();
i18n
	.use( LanguageDetector )
	.use( HttpApi )
	.init({
		debug: !!process.env.DEBUG_I18N, // eslint-disable-line no-process-env
		lng: windowGlobal.localStorage && windowGlobal.localStorage.getItem( 'i18nextLng' ) || 'en',
		fallbackLng: 'en',
		ns: [ 'general', 'session' ],
		defaultNS: 'general',
		backend: {
			loadPath: 'https://cdn.jsdelivr.net/npm/@isle-project/locales@0.50.46/components/{{ns}}/{{lng}}.json'
		},
		react: {
			bindI18n: 'languageChanged',
			useSuspense: false
		},
		interpolation: {
			escapeValue: false // Not needed for React!
		}
	});

export function changeLanguage( lng, callback = () => {} ) {
	lng = normalizeLanguageCode( lng || 'en' );
	i18n.changeLanguage( lng );
	callback();
}
