// MODULES // //

import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import logger from 'debug';


// VARIABLES //

const debug = logger( 'isle:locales-editor' );


// MAIN //

const NAMESPACES = new Set();
const TRANSLATIONS = {
	'de': {
		'Editor': () => import( './editor/de.json' ),
		'EditorMenu': () => import( './editor-menu/de.json' )
	},
	'en': {
		'Editor': () => import( './editor/en.json' ),
		'EditorMenu': () => import( './editor-menu/en.json' )
	},
	'es': {
		'Editor': () => import( './editor/es.json' ),
		'EditorMenu': () => import( './editor-menu/es.json' )
	},
	'fr': {
		'Editor': () => import( './editor/fr.json' ),
		'EditorMenu': () => import( './editor-menu/fr.json' )
	},
	'it': {
		'Editor': () => import( './editor/it.json' ),
		'EditorMenu': () => import( './editor-menu/it.json' )
	},
	'ja': {
		'Editor': () => import( './editor/ja.json' ),
		'EditorMenu': () => import( './editor-menu/ja.json' )
	},
	'nl': {
		'Editor': () => import( './editor/nl.json' ),
		'EditorMenu': () => import( './editor-menu/nl.json' )
	},
	'pl': {
		'Editor': () => import( './editor/pl.json' ),
		'EditorMenu': () => import( './editor-menu/pl.json' )
	},
	'pt': {
		'Editor': () => import( './editor/pt.json' ),
		'EditorMenu': () => import( './editor-menu/pt.json' )
	},
	'ru': {
		'Editor': () => import( './editor/ru.json' ),
		'EditorMenu': () => import( './editor-menu/ru.json' )
	},
	'zh': {
		'Editor': () => import( './editor/zh.json' ),
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
		ns: [ 'Editor' ],
		defaultNS: 'Editor',
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
