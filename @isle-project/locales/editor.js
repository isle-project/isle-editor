// MODULES // //

import i18next from 'i18next';
import Store from 'electron-store';
import LanguageDetector from 'i18next-browser-languagedetector';
import logger from 'debug';
import normalizeLanguageCode from './normalize_language_code.js';


// VARIABLES //

const debug = logger( 'isle:locales-editor' );
const rendererStore = new Store( 'isle-renderer' );


// MAIN //

const NAMESPACES = new Set();
const TRANSLATIONS = {
	'bg': {
		'Editor': () => import( './editor/bg.json' ),
		'ComponentDocs': () => import( './editor/component-docs/bg.json' ),
		'Tutorial': () => import( './editor-tutorial/bg.json' )
	},
	'cs': {
		'Editor': () => import( './editor/cs.json' ),
		'ComponentDocs': () => import( './editor/component-docs/cs.json' ),
		'Tutorial': () => import( './editor-tutorial/cs.json' )
	},
	'da': {
		'Editor': () => import( './editor/da.json' ),
		'ComponentDocs': () => import( './editor/component-docs/da.json' ),
		'Tutorial': () => import( './editor-tutorial/da.json' )
	},
	'de': {
		'Editor': () => import( './editor/de.json' ),
		'ComponentDocs': () => import( './editor/component-docs/de.json' ),
		'Tutorial': () => import( './editor-tutorial/de.json' )
	},
	'el': {
		'Editor': () => import( './editor/el.json' ),
		'ComponentDocs': () => import( './editor/component-docs/el.json' ),
		'Tutorial': () => import( './editor-tutorial/el.json' )
	},
	'en': {
		'Editor': () => import( './editor/en.json' ),
		'ComponentDocs': () => import( './editor/component-docs/en.json' ),
		'Tutorial': () => import( './editor-tutorial/en.json' )
	},
	'es': {
		'Editor': () => import( './editor/es.json' ),
		'ComponentDocs': () => import( './editor/component-docs/es.json' ),
		'Tutorial': () => import( './editor-tutorial/es.json' )
	},
	'et': {
		'Editor': () => import( './editor/et.json' ),
		'ComponentDocs': () => import( './editor/component-docs/et.json' ),
		'Tutorial': () => import( './editor-tutorial/et.json' )
	},
	'fi': {
		'Editor': () => import( './editor/fi.json' ),
		'ComponentDocs': () => import( './editor/component-docs/fi.json' ),
		'Tutorial': () => import( './editor-tutorial/fi.json' )
	},
	'fr': {
		'Editor': () => import( './editor/fr.json' ),
		'ComponentDocs': () => import( './editor/component-docs/fr.json' ),
		'Tutorial': () => import( './editor-tutorial/fr.json' )
	},
	'hu': {
		'Editor': () => import( './editor/hu.json' ),
		'ComponentDocs': () => import( './editor/component-docs/hu.json' ),
		'Tutorial': () => import( './editor-tutorial/hu.json' )
	},
	'it': {
		'Editor': () => import( './editor/it.json' ),
		'ComponentDocs': () => import( './editor/component-docs/it.json' ),
		'Tutorial': () => import( './editor-tutorial/it.json' )
	},
	'ja': {
		'Editor': () => import( './editor/ja.json' ),
		'ComponentDocs': () => import( './editor/component-docs/ja.json' ),
		'Tutorial': () => import( './editor-tutorial/ja.json' )
	},
	'lt': {
		'Editor': () => import( './editor/lt.json' ),
		'ComponentDocs': () => import( './editor/component-docs/lt.json' ),
		'Tutorial': () => import( './editor-tutorial/lt.json' )
	},
	'lv': {
		'Editor': () => import( './editor/lv.json' ),
		'ComponentDocs': () => import( './editor/component-docs/lv.json' ),
		'Tutorial': () => import( './editor-tutorial/lv.json' )
	},
	'nl': {
		'Editor': () => import( './editor/nl.json' ),
		'ComponentDocs': () => import( './editor/component-docs/nl.json' ),
		'Tutorial': () => import( './editor-tutorial/nl.json' )
	},
	'pl': {
		'Editor': () => import( './editor/pl.json' ),
		'ComponentDocs': () => import( './editor/component-docs/pl.json' ),
		'Tutorial': () => import( './editor-tutorial/pl.json' )
	},
	'pt': {
		'Editor': () => import( './editor/pt.json' ),
		'ComponentDocs': () => import( './editor/component-docs/pt.json' ),
		'Tutorial': () => import( './editor-tutorial/pt.json' )
	},
	'ro': {
		'Editor': () => import( './editor/ro.json' ),
		'ComponentDocs': () => import( './editor/component-docs/ro.json' ),
		'Tutorial': () => import( './editor-tutorial/ro.json' )
	},
	'ru': {
		'Editor': () => import( './editor/ru.json' ),
		'ComponentDocs': () => import( './editor/component-docs/ru.json' ),
		'Tutorial': () => import( './editor-tutorial/ru.json' )
	},
	'sk': {
		'Editor': () => import( './editor/sk.json' ),
		'ComponentDocs': () => import( './editor/component-docs/sk.json' ),
		'Tutorial': () => import( './editor-tutorial/sk.json' )
	},
	'sl': {
		'Editor': () => import( './editor/sl.json' ),
		'ComponentDocs': () => import( './editor/component-docs/sl.json' ),
		'Tutorial': () => import( './editor-tutorial/sl.json' )
	},
	'sv': {
		'Editor': () => import( './editor/sv.json' ),
		'ComponentDocs': () => import( './editor/component-docs/sv.json' ),
		'Tutorial': () => import( './editor-tutorial/sv.json' )
	},
	'zh': {
		'Editor': () => import( './editor/zh.json' ),
		'ComponentDocs': () => import( './editor/component-docs/zh.json' ),
		'Tutorial': () => import( './editor-tutorial/zh.json' )
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
		fallbackLng: 'en',
		ns: [ 'Editor' ],
		lng: rendererStore.get( 'i18nLanguage' ),
		defaultNS: 'Editor',
		resources: RESOURCES,
		interpolation: {
			escapeValue: false // Not needed for React!
		}
	})
	.then( () => {
		debug( 'Localization initialized for renderer process...' );
		addResources( 'Editor' );
		addResources( 'ComponentDocs' );
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
