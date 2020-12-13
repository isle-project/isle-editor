// MODULES //

import i18next from 'i18next';
import logger from 'debug';


// VARIABLES //

const debug = logger( 'isle:locales' );
const NAMESPACES = new Set();
const TRANSLATIONS = {
	'de': {
		'Bibliography': () => import( './components/bibliography/de.json' ),
		'ChatButton': () => import( './components/chat-button/de.json' ),
		'Citation': () => import( './components/citation/de.json' ),
		'Dashboard': () => import( './components/dashboard/de.json' ),
		'DataExplorer': () => import( './components/data-explorer/de.json' ),
		'DataSampler': () => import( './components/data-sampler/de.json' ),
		'DataTable': () => import( './components/data-table/de.json' ),
		'Feedback': () => import( './components/feedback/de.json' ),
		'VideoPlayer': () => import( './components/video-player/de.json' ),
		'WordCloud': () => import( './components/word-cloud/de.json' ),
		'Login': () => import( './components/internal/login/de.json' ),
		'ResponseVisualizer': () => import( './components/internal/response-visualizer/de.json' ),
		'Signup': () => import( './components/internal/signup/de.json' ),
		'StatusBar': () => import( './components/internal/statusbar/de.json' ),
		'Toolbar': () => import( './components/internal/toolbar/de.json' ),
		'Calculator': () => import( './components/internal/toolbar/calculator/de.json' ),
		'Queue': () => import( './components/internal/toolbar/queue/de.json' ),
		'Pages': () => import( './components/pages/de.json' ),
		'Sketchpad': () => import( './components/sketchpad/de.json' ),
		'TextEditor': () => import( './components/text-editor/de.json' )
	},
	'en': {
		'Bibliography': () => import( './components/bibliography/en.json' ),
		'ChatButton': () => import( './components/chat-button/en.json' ),
		'Citation': () => import( './components/citation/en.json' ),
		'Dashboard': () => import( './components/dashboard/en.json' ),
		'DataExplorer': () => import( './components/data-explorer/en.json' ),
		'DataSampler': () => import( './components/data-sampler/en.json' ),
		'DataTable': () => import( './components/data-table/en.json' ),
		'Feedback': () => import( './components/feedback/en.json' ),
		'VideoPlayer': () => import( './components/video-player/en.json' ),
		'WordCloud': () => import( './components/word-cloud/en.json' ),
		'Login': () => import( './components/internal/login/en.json' ),
		'ResponseVisualizer': () => import( './components/internal/response-visualizer/en.json' ),
		'Signup': () => import( './components/internal/signup/en.json' ),
		'StatusBar': () => import( './components/internal/statusbar/en.json' ),
		'Toolbar': () => import( './components/internal/toolbar/en.json' ),
		'Calculator': () => import( './components/internal/toolbar/calculator/en.json' ),
		'Queue': () => import( './components/internal/toolbar/queue/en.json' ),
		'Pages': () => import( './components/pages/en.json' ),
		'Sketchpad': () => import( './components/sketchpad/en.json' ),
		'TextEditor': () => import( './components/text-editor/en.json' )
	},
	'es': {
		'Bibliography': () => import( './components/bibliography/es.json' ),
		'ChatButton': () => import( './components/chat-button/es.json' ),
		'Citation': () => import( './components/citation/es.json' ),
		'Dashboard': () => import( './components/dashboard/es.json' ),
		'DataExplorer': () => import( './components/data-explorer/es.json' ),
		'DataSampler': () => import( './components/data-sampler/es.json' ),
		'DataTable': () => import( './components/data-table/es.json' ),
		'Feedback': () => import( './components/feedback/es.json' ),
		'VideoPlayer': () => import( './components/video-player/es.json' ),
		'WordCloud': () => import( './components/word-cloud/es.json' ),
		'Login': () => import( './components/internal/login/es.json' ),
		'ResponseVisualizer': () => import( './components/internal/response-visualizer/es.json' ),
		'Signup': () => import( './components/internal/signup/es.json' ),
		'StatusBar': () => import( './components/internal/statusbar/es.json' ),
		'Toolbar': () => import( './components/internal/toolbar/es.json' ),
		'Calculator': () => import( './components/internal/toolbar/calculator/es.json' ),
		'Queue': () => import( './components/internal/toolbar/queue/es.json' ),
		'Pages': () => import( './components/pages/es.json' ),
		'Sketchpad': () => import( './components/sketchpad/es.json' ),
		'TextEditor': () => import( './components/text-editor/es.json' )
	}
};


// EXPORTS //

export const RESOURCES = {
	'de': {},
	'en': {},
	'es': {}
};

export function changeLanguage( lng ) {
	const promises = [];
	NAMESPACES.forEach( ns => {
		if ( !i18next.hasResourceBundle( lng, ns ) ) {
			const promise = TRANSLATIONS[ lng ][ ns ]();
			promise.then( ( data ) => {
				i18next.addResources( lng, ns, data );
			});
			promises.push( promise );
		}
	});
	Promise.all( promises ).then( () => {
		i18next.changeLanguage( lng );
	});
}

export function addResources( ns ) {
	const lng = i18next.language || localStorage.getItem( 'i18nextLng' ) || 'en';
	debug( `Loading translations for ${ns} in language ${lng}...` );
	NAMESPACES.add( ns );
	const res = TRANSLATIONS[ lng ][ ns ];
	if ( res ) {
		res().then( ( data ) => {
			if ( i18next.addResources ) {
				i18next.addResources( lng, ns, data );
			} else {
				RESOURCES[ lng ][ ns ] = data;
			}
		});
	}
}
