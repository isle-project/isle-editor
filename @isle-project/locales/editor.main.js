// MODULES // //

import i18next from 'i18next';
import Store from 'electron-store';
import LanguageDetector from 'i18next-browser-languagedetector';
import logger from 'debug';
import normalizeLanguageCode from './normalize_language_code.js';


// VARIABLES //

const debug = logger( 'isle:locales-editor-main' );
const mainStore = new Store( 'isle-main' );


// MAIN //

const NAMESPACES = new Set();
const TRANSLATIONS = {
	'bg': {
		'EditorMenu': () => import( './editor-menu/bg.json' )
	},
	'cs': {
		'EditorMenu': () => import( './editor-menu/cs.json' )
	},
	'da': {
		'EditorMenu': () => import( './editor-menu/da.json' )
	},
	'de': {
		'EditorMenu': () => import( './editor-menu/de.json' )
	},
	'el': {
		'EditorMenu': () => import( './editor-menu/el.json' )
	},
	'en': {
		'EditorMenu': () => import( './editor-menu/en.json' )
	},
	'es': {
		'EditorMenu': () => import( './editor-menu/es.json' )
	},
	'et': {
		'EditorMenu': () => import( './editor-menu/et.json' )
	},
	'fi': {
		'EditorMenu': () => import( './editor-menu/fi.json' )
	},
	'fr': {
		'EditorMenu': () => import( './editor-menu/fr.json' )
	},
	'hu': {
		'EditorMenu': () => import( './editor-menu/hu.json' )
	},
	'it': {
		'EditorMenu': () => import( './editor-menu/it.json' )
	},
	'ja': {
		'EditorMenu': () => import( './editor-menu/ja.json' )
	},
	'lt': {
		'EditorMenu': () => import( './editor-menu/lt.json' )
	},
	'lv': {
		'EditorMenu': () => import( './editor-menu/lv.json' )
	},
	'nl': {
		'EditorMenu': () => import( './editor-menu/nl.json' )
	},
	'pl': {
		'EditorMenu': () => import( './editor-menu/pl.json' )
	},
	'pt': {
		'EditorMenu': () => import( './editor-menu/pt.json' )
	},
	'ro': {
		'EditorMenu': () => import( './editor-menu/ro.json' )
	},
	'ru': {
		'EditorMenu': () => import( './editor-menu/ru.json' )
	},
	'sk': {
		'EditorMenu': () => import( './editor-menu/sk.json' )
	},
	'sl': {
		'EditorMenu': () => import( './editor-menu/sl.json' )
	},
	'sv': {
		'EditorMenu': () => import( './editor-menu/sv.json' )
	},
	'zh': {
		'EditorMenu': () => import( './editor-menu/zh.json' )
	}
};


// EXPORTS //

export const RESOURCES = {
	'bg': {},
	'cs': {},
	'da': {},
	'de': {},
	'el': {},
	'en': {},
	'es': {},
	'et': {},
	'fi': {},
	'fr': {},
	'hu': {},
	'it': {},
	'ja': {},
	'lt': {},
	'lv': {},
	'nl': {},
	'pl': {},
	'pt': {},
	'ro': {},
	'ru': {},
	'sk': {},
	'sl': {},
	'sv': {},
	'zh': {}
};

export const i18n = i18next.createInstance();
i18n.use( LanguageDetector )
	.init({
		debug: !!process.env.DEBUG_I18N, // eslint-disable-line no-process-env
		lng: mainStore.get( 'i18nLanguage' ),
		fallbackLng: 'en',
		ns: [ 'EditorMenu' ],
		defaultNS: 'EditorMenu',
		resources: RESOURCES,
		interpolation: {
			escapeValue: false // Not needed for React!
		}
	})
	.then( () => {
		debug( 'Localization initialized for main process...' );
		addResources( 'EditorMenu' );
	});

export function changeLanguage( lng ) {
	lng = normalizeLanguageCode( lng || 'en' );
	const promises = [];
	NAMESPACES.forEach( ns => {
		if ( !i18n.hasResourceBundle( lng, ns ) ) {
			const res = TRANSLATIONS[ lng ][ ns ];
			if ( !res ) {
				debug( `Missing translations for ${ns} in language ${lng}...` );
			} else {
				const promise = res();
				promise.then( ( data ) => {
					i18n.addResources( lng, ns, data );
				});
				promises.push( promise );
			}
		}
	});
	Promise.all( promises ).then( () => {
		i18n.changeLanguage( lng );
	});
}

export function addResources( ns ) {
	let lng = normalizeLanguageCode( i18n.language || 'en' );
	debug( `Loading translations for ${ns} in language ${lng}...` );
	NAMESPACES.add( ns );
	if ( !TRANSLATIONS[ lng ] ) {
		lng = 'en';
	}
	const res = TRANSLATIONS[ lng ][ ns ];
	if ( res ) {
		res().then( ( data ) => {
			if ( i18n.addResources ) {
				i18n.addResources( lng, ns, data );
			} else {
				RESOURCES[ lng ][ ns ] = data;
			}
		});
	}
}
