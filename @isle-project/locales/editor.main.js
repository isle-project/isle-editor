// MODULES // //

import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import logger from 'debug';


// VARIABLES //

const debug = logger( 'isle:locales-editor-main' );


// MAIN //

const NAMESPACES = new Set();
const TRANSLATIONS = {
	'de': {
		'EditorMenu': () => import( './editor-menu/de.json' )
	},
	'en': {
		'EditorMenu': () => import( './editor-menu/en.json' )
	},
	'es': {
		'EditorMenu': () => import( './editor-menu/es.json' )
	},
	'fr': {
		'EditorMenu': () => import( './editor-menu/fr.json' )
	},
	'it': {
		'EditorMenu': () => import( './editor-menu/it.json' )
	},
	'ja': {
		'EditorMenu': () => import( './editor-menu/ja.json' )
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
	'ru': {
		'EditorMenu': () => import( './editor-menu/ru.json' )
	},
	'zh': {
		'EditorMenu': () => import( './editor-menu/zh.json' )
	}
};


// EXPORTS //

export const RESOURCES = {
	'de': {},
	'en': {},
	'es': {},
	'fr': {},
	'it': {},
	'ja': {},
	'nl': {},
	'pl': {},
	'pt': {},
	'ru': {},
	'zh': {}
};

export const i18n = i18next.createInstance();
i18n.use( LanguageDetector )
	.init({
		debug: !!process.env.DEBUG_I18N, // eslint-disable-line no-process-env
		fallbackLng: 'en',
		ns: [ 'EditorMenu' ],
		defaultNS: 'EditorMenu',
		resources: RESOURCES,
		interpolation: {
			escapeValue: false // Not needed for React!
		}
	});

export function changeLanguage( lng ) {
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
	const lng = i18n.language || 'en';
	debug( `Loading translations for ${ns} in language ${lng}...` );
	NAMESPACES.add( ns );
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
