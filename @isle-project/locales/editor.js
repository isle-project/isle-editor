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
		'Editor': () => import( './editor/de.json' )
	},
	'en': {
		'Editor': () => import( './editor/en.json' )
	},
	'es': {
		'Editor': () => import( './editor/es.json' )
	},
	'fr': {
		'Editor': () => import( './editor/fr.json' )
	},
	'it': {
		'Editor': () => import( './editor/it.json' )
	},
	'ja': {
		'Editor': () => import( './editor/ja.json' )
	},
	'nl': {
		'Editor': () => import( './editor/nl.json' )
	},
	'pl': {
		'Editor': () => import( './editor/pl.json' )
	},
	'pt': {
		'Editor': () => import( './editor/pt.json' )
	},
	'ru': {
		'Editor': () => import( './editor/ru.json' )
	},
	'zh': {
		'Editor': () => import( './editor/zh.json' )
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
	let lng = i18n.language || 'en';
	if ( lng === 'en-gb' || lng === 'en-us' ) {
		lng = 'en';
	} else if ( lng === 'pt-br' ) {
		lng = 'pt';
	}
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
