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
		'HintButton': () => import( './components/hint-button/de.json' ),
		'Iframe': () => import( './components/iframe/de.json' ),
		'Image': () => import( './components/image/de.json' ),
		'Login': () => import( './components/internal/login/de.json' ),
		'ResponseVisualizer': () => import( './components/internal/response-visualizer/de.json' ),
		'Signup': () => import( './components/internal/signup/de.json' ),
		'StatusBar': () => import( './components/internal/statusbar/de.json' ),
		'Toolbar': () => import( './components/internal/toolbar/de.json' ),
		'Calculator': () => import( './components/internal/toolbar/calculator/de.json' ),
		'Queue': () => import( './components/internal/toolbar/queue/de.json' ),
		'Link': () => import( './components/link/de.json' ),
		'Pages': () => import( './components/pages/de.json' ),
		'Sketchpad': () => import( './components/sketchpad/de.json' ),
		'TextEditor': () => import( './components/text-editor/de.json' ),
		'VideoChatButton': () => import( './components/video-chat-button/de.json' ),
		'VideoLecture': () => import( './components/video-lecture/de.json' ),
		'VideoPlayer': () => import( './components/video-player/de.json' ),
		'WordCloud': () => import( './components/word-cloud/de.json' )
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
		'HintButton': () => import( './components/hint-button/en.json' ),
		'Iframe': () => import( './components/iframe/en.json' ),
		'Image': () => import( './components/image/en.json' ),
		'Login': () => import( './components/internal/login/en.json' ),
		'ResponseVisualizer': () => import( './components/internal/response-visualizer/en.json' ),
		'Signup': () => import( './components/internal/signup/en.json' ),
		'StatusBar': () => import( './components/internal/statusbar/en.json' ),
		'Toolbar': () => import( './components/internal/toolbar/en.json' ),
		'Calculator': () => import( './components/internal/toolbar/calculator/en.json' ),
		'Queue': () => import( './components/internal/toolbar/queue/en.json' ),
		'Link': () => import( './components/link/en.json' ),
		'Pages': () => import( './components/pages/en.json' ),
		'Sketchpad': () => import( './components/sketchpad/en.json' ),
		'TextEditor': () => import( './components/text-editor/en.json' ),
		'VideoChatButton': () => import( './components/video-chat-button/en.json' ),
		'VideoLecture': () => import( './components/video-lecture/en.json' ),
		'VideoPlayer': () => import( './components/video-player/en.json' ),
		'WordCloud': () => import( './components/word-cloud/en.json' )
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
		'HintButton': () => import( './components/hint-button/es.json' ),
		'Iframe': () => import( './components/iframe/es.json' ),
		'Image': () => import( './components/image/es.json' ),
		'Login': () => import( './components/internal/login/es.json' ),
		'ResponseVisualizer': () => import( './components/internal/response-visualizer/es.json' ),
		'Signup': () => import( './components/internal/signup/es.json' ),
		'StatusBar': () => import( './components/internal/statusbar/es.json' ),
		'Toolbar': () => import( './components/internal/toolbar/es.json' ),
		'Calculator': () => import( './components/internal/toolbar/calculator/es.json' ),
		'Queue': () => import( './components/internal/toolbar/queue/es.json' ),
		'Link': () => import( './components/link/es.json' ),
		'Pages': () => import( './components/pages/es.json' ),
		'Sketchpad': () => import( './components/sketchpad/es.json' ),
		'TextEditor': () => import( './components/text-editor/es.json' ),
		'VideoChatButton': () => import( './components/video-chat-button/es.json' ),
		'VideoLecture': () => import( './components/video-lecture/es.json' ),
		'VideoPlayer': () => import( './components/video-player/es.json' ),
		'WordCloud': () => import( './components/word-cloud/es.json' )
	},
	'fr': {
		'Bibliography': () => import( './components/bibliography/fr.json' ),
		'ChatButton': () => import( './components/chat-button/fr.json' ),
		'Citation': () => import( './components/citation/fr.json' ),
		'Dashboard': () => import( './components/dashboard/fr.json' ),
		'DataExplorer': () => import( './components/data-explorer/fr.json' ),
		'DataSampler': () => import( './components/data-sampler/fr.json' ),
		'DataTable': () => import( './components/data-table/fr.json' ),
		'Feedback': () => import( './components/feedback/fr.json' ),
		'HintButton': () => import( './components/hint-button/fr.json' ),
		'Iframe': () => import( './components/iframe/fr.json' ),
		'Image': () => import( './components/image/fr.json' ),
		'Login': () => import( './components/internal/login/fr.json' ),
		'ResponseVisualizer': () => import( './components/internal/response-visualizer/fr.json' ),
		'Signup': () => import( './components/internal/signup/fr.json' ),
		'StatusBar': () => import( './components/internal/statusbar/fr.json' ),
		'Toolbar': () => import( './components/internal/toolbar/fr.json' ),
		'Calculator': () => import( './components/internal/toolbar/calculator/fr.json' ),
		'Queue': () => import( './components/internal/toolbar/queue/fr.json' ),
		'Link': () => import( './components/link/fr.json' ),
		'Pages': () => import( './components/pages/fr.json' ),
		'Sketchpad': () => import( './components/sketchpad/fr.json' ),
		'TextEditor': () => import( './components/text-editor/fr.json' ),
		'VideoChatButton': () => import( './components/video-chat-button/fr.json' ),
		'VideoLecture': () => import( './components/video-lecture/fr.json' ),
		'VideoPlayer': () => import( './components/video-player/fr.json' ),
		'WordCloud': () => import( './components/word-cloud/fr.json' )
	},
	'it': {
		'Bibliography': () => import( './components/bibliography/it.json' ),
		'ChatButton': () => import( './components/chat-button/it.json' ),
		'Citation': () => import( './components/citation/it.json' ),
		'Dashboard': () => import( './components/dashboard/it.json' ),
		'DataExplorer': () => import( './components/data-explorer/it.json' ),
		'DataSampler': () => import( './components/data-sampler/it.json' ),
		'DataTable': () => import( './components/data-table/it.json' ),
		'Feedback': () => import( './components/feedback/it.json' ),
		'HintButton': () => import( './components/hint-button/it.json' ),
		'Iframe': () => import( './components/iframe/it.json' ),
		'Image': () => import( './components/image/it.json' ),
		'Login': () => import( './components/internal/login/it.json' ),
		'ResponseVisualizer': () => import( './components/internal/response-visualizer/it.json' ),
		'Signup': () => import( './components/internal/signup/it.json' ),
		'StatusBar': () => import( './components/internal/statusbar/it.json' ),
		'Toolbar': () => import( './components/internal/toolbar/it.json' ),
		'Calculator': () => import( './components/internal/toolbar/calculator/it.json' ),
		'Queue': () => import( './components/internal/toolbar/queue/it.json' ),
		'Link': () => import( './components/link/it.json' ),
		'Pages': () => import( './components/pages/it.json' ),
		'Sketchpad': () => import( './components/sketchpad/it.json' ),
		'TextEditor': () => import( './components/text-editor/it.json' ),
		'VideoChatButton': () => import( './components/video-chat-button/it.json' ),
		'VideoLecture': () => import( './components/video-lecture/it.json' ),
		'VideoPlayer': () => import( './components/video-player/it.json' ),
		'WordCloud': () => import( './components/word-cloud/it.json' )
	},
	'nl': {
		'Bibliography': () => import( './components/bibliography/nl.json' ),
		'ChatButton': () => import( './components/chat-button/nl.json' ),
		'Citation': () => import( './components/citation/nl.json' ),
		'Dashboard': () => import( './components/dashboard/nl.json' ),
		'DataExplorer': () => import( './components/data-explorer/nl.json' ),
		'DataSampler': () => import( './components/data-sampler/nl.json' ),
		'DataTable': () => import( './components/data-table/nl.json' ),
		'Feedback': () => import( './components/feedback/nl.json' ),
		'HintButton': () => import( './components/hint-button/nl.json' ),
		'Iframe': () => import( './components/iframe/nl.json' ),
		'Image': () => import( './components/image/nl.json' ),
		'Login': () => import( './components/internal/login/nl.json' ),
		'ResponseVisualizer': () => import( './components/internal/response-visualizer/nl.json' ),
		'Signup': () => import( './components/internal/signup/nl.json' ),
		'StatusBar': () => import( './components/internal/statusbar/nl.json' ),
		'Toolbar': () => import( './components/internal/toolbar/nl.json' ),
		'Calculator': () => import( './components/internal/toolbar/calculator/nl.json' ),
		'Queue': () => import( './components/internal/toolbar/queue/nl.json' ),
		'Link': () => import( './components/link/nl.json' ),
		'Pages': () => import( './components/pages/nl.json' ),
		'Sketchpad': () => import( './components/sketchpad/nl.json' ),
		'TextEditor': () => import( './components/text-editor/nl.json' ),
		'VideoChatButton': () => import( './components/video-chat-button/nl.json' ),
		'VideoLecture': () => import( './components/video-lecture/nl.json' ),
		'VideoPlayer': () => import( './components/video-player/nl.json' ),
		'WordCloud': () => import( './components/word-cloud/nl.json' )
	},
	'ru': {
		'Bibliography': () => import( './components/bibliography/ru.json' ),
		'ChatButton': () => import( './components/chat-button/ru.json' ),
		'Citation': () => import( './components/citation/ru.json' ),
		'Dashboard': () => import( './components/dashboard/ru.json' ),
		'DataExplorer': () => import( './components/data-explorer/ru.json' ),
		'DataSampler': () => import( './components/data-sampler/ru.json' ),
		'DataTable': () => import( './components/data-table/ru.json' ),
		'Feedback': () => import( './components/feedback/ru.json' ),
		'HintButton': () => import( './components/hint-button/ru.json' ),
		'Iframe': () => import( './components/iframe/ru.json' ),
		'Image': () => import( './components/image/ru.json' ),
		'Login': () => import( './components/internal/login/ru.json' ),
		'ResponseVisualizer': () => import( './components/internal/response-visualizer/ru.json' ),
		'Signup': () => import( './components/internal/signup/ru.json' ),
		'StatusBar': () => import( './components/internal/statusbar/ru.json' ),
		'Toolbar': () => import( './components/internal/toolbar/ru.json' ),
		'Calculator': () => import( './components/internal/toolbar/calculator/ru.json' ),
		'Queue': () => import( './components/internal/toolbar/queue/ru.json' ),
		'Link': () => import( './components/link/ru.json' ),
		'Pages': () => import( './components/pages/ru.json' ),
		'Sketchpad': () => import( './components/sketchpad/ru.json' ),
		'TextEditor': () => import( './components/text-editor/ru.json' ),
		'VideoChatButton': () => import( './components/video-chat-button/ru.json' ),
		'VideoLecture': () => import( './components/video-lecture/ru.json' ),
		'VideoPlayer': () => import( './components/video-player/ru.json' ),
		'WordCloud': () => import( './components/word-cloud/ru.json' )
	},
	'pl': {
		'Bibliography': () => import( './components/bibliography/pl.json' ),
		'ChatButton': () => import( './components/chat-button/pl.json' ),
		'Citation': () => import( './components/citation/pl.json' ),
		'Dashboard': () => import( './components/dashboard/pl.json' ),
		'DataExplorer': () => import( './components/data-explorer/pl.json' ),
		'DataSampler': () => import( './components/data-sampler/pl.json' ),
		'DataTable': () => import( './components/data-table/pl.json' ),
		'Feedback': () => import( './components/feedback/pl.json' ),
		'HintButton': () => import( './components/hint-button/pt.json' ),
		'Iframe': () => import( './components/iframe/pl.json' ),
		'Image': () => import( './components/image/pl.json' ),
		'Login': () => import( './components/internal/login/pl.json' ),
		'ResponseVisualizer': () => import( './components/internal/response-visualizer/pl.json' ),
		'Signup': () => import( './components/internal/signup/pl.json' ),
		'StatusBar': () => import( './components/internal/statusbar/pl.json' ),
		'Toolbar': () => import( './components/internal/toolbar/pl.json' ),
		'Calculator': () => import( './components/internal/toolbar/calculator/pl.json' ),
		'Queue': () => import( './components/internal/toolbar/queue/pl.json' ),
		'Link': () => import( './components/link/pl.json' ),
		'Pages': () => import( './components/pages/pl.json' ),
		'Sketchpad': () => import( './components/sketchpad/pl.json' ),
		'TextEditor': () => import( './components/text-editor/pl.json' ),
		'VideoChatButton': () => import( './components/video-chat-button/pl.json' ),
		'VideoLecture': () => import( './components/video-lecture/pl.json' ),
		'VideoPlayer': () => import( './components/video-player/pl.json' ),
		'WordCloud': () => import( './components/word-cloud/pl.json' )
	},
	'ja': {
		'Bibliography': () => import( './components/bibliography/ja.json' ),
		'ChatButton': () => import( './components/chat-button/ja.json' ),
		'Citation': () => import( './components/citation/ja.json' ),
		'Dashboard': () => import( './components/dashboard/ja.json' ),
		'DataExplorer': () => import( './components/data-explorer/ja.json' ),
		'DataSampler': () => import( './components/data-sampler/ja.json' ),
		'DataTable': () => import( './components/data-table/ja.json' ),
		'Feedback': () => import( './components/feedback/ja.json' ),
		'HintButton': () => import( './components/hint-button/ja.json' ),
		'Iframe': () => import( './components/iframe/ja.json' ),
		'Image': () => import( './components/image/ja.json' ),
		'Login': () => import( './components/internal/login/ja.json' ),
		'ResponseVisualizer': () => import( './components/internal/response-visualizer/ja.json' ),
		'Signup': () => import( './components/internal/signup/ja.json' ),
		'StatusBar': () => import( './components/internal/statusbar/ja.json' ),
		'Toolbar': () => import( './components/internal/toolbar/ja.json' ),
		'Calculator': () => import( './components/internal/toolbar/calculator/ja.json' ),
		'Queue': () => import( './components/internal/toolbar/queue/ja.json' ),
		'Link': () => import( './components/link/ja.json' ),
		'Pages': () => import( './components/pages/ja.json' ),
		'Sketchpad': () => import( './components/sketchpad/ja.json' ),
		'TextEditor': () => import( './components/text-editor/ja.json' ),
		'VideoChatButton': () => import( './components/video-chat-button/ja.json' ),
		'VideoLecture': () => import( './components/video-lecture/ja.json' ),
		'VideoPlayer': () => import( './components/video-player/ja.json' ),
		'WordCloud': () => import( './components/word-cloud/ja.json' )
	},
	'zh': {
		'Bibliography': () => import( './components/bibliography/zh.json' ),
		'ChatButton': () => import( './components/chat-button/zh.json' ),
		'Citation': () => import( './components/citation/zh.json' ),
		'Dashboard': () => import( './components/dashboard/zh.json' ),
		'DataExplorer': () => import( './components/data-explorer/zh.json' ),
		'DataSampler': () => import( './components/data-sampler/zh.json' ),
		'DataTable': () => import( './components/data-table/zh.json' ),
		'Feedback': () => import( './components/feedback/zh.json' ),
		'HintButton': () => import( './components/hint-button/zh.json' ),
		'Iframe': () => import( './components/iframe/zh.json' ),
		'Image': () => import( './components/image/zh.json' ),
		'Login': () => import( './components/internal/login/zh.json' ),
		'ResponseVisualizer': () => import( './components/internal/response-visualizer/zh.json' ),
		'Signup': () => import( './components/internal/signup/zh.json' ),
		'StatusBar': () => import( './components/internal/statusbar/zh.json' ),
		'Toolbar': () => import( './components/internal/toolbar/zh.json' ),
		'Calculator': () => import( './components/internal/toolbar/calculator/zh.json' ),
		'Queue': () => import( './components/internal/toolbar/queue/zh.json' ),
		'Link': () => import( './components/link/zh.json' ),
		'Pages': () => import( './components/pages/zh.json' ),
		'Sketchpad': () => import( './components/sketchpad/zh.json' ),
		'TextEditor': () => import( './components/text-editor/zh.json' ),
		'VideoChatButton': () => import( './components/video-chat-button/zh.json' ),
		'VideoLecture': () => import( './components/video-lecture/zh.json' ),
		'VideoPlayer': () => import( './components/video-player/zh.json' ),
		'WordCloud': () => import( './components/word-cloud/zh.json' )
	},
	'pt': {
		'Bibliography': () => import( './components/bibliography/pt.json' ),
		'ChatButton': () => import( './components/chat-button/pt.json' ),
		'Citation': () => import( './components/citation/pt.json' ),
		'Dashboard': () => import( './components/dashboard/pt.json' ),
		'DataExplorer': () => import( './components/data-explorer/pt.json' ),
		'DataSampler': () => import( './components/data-sampler/pt.json' ),
		'DataTable': () => import( './components/data-table/pt.json' ),
		'Feedback': () => import( './components/feedback/pt.json' ),
		'HintButton': () => import( './components/hint-button/pt.json' ),
		'Iframe': () => import( './components/iframe/pt.json' ),
		'Image': () => import( './components/image/pt.json' ),
		'Login': () => import( './components/internal/login/pt.json' ),
		'ResponseVisualizer': () => import( './components/internal/response-visualizer/pt.json' ),
		'Signup': () => import( './components/internal/signup/pt.json' ),
		'StatusBar': () => import( './components/internal/statusbar/pt.json' ),
		'Toolbar': () => import( './components/internal/toolbar/pt.json' ),
		'Calculator': () => import( './components/internal/toolbar/calculator/pt.json' ),
		'Queue': () => import( './components/internal/toolbar/queue/pt.json' ),
		'Link': () => import( './components/link/pt.json' ),
		'Pages': () => import( './components/pages/pt.json' ),
		'Sketchpad': () => import( './components/sketchpad/pt.json' ),
		'TextEditor': () => import( './components/text-editor/pt.json' ),
		'VideoChatButton': () => import( './components/video-chat-button/pt.json' ),
		'VideoLecture': () => import( './components/video-lecture/pt.json' ),
		'VideoPlayer': () => import( './components/video-player/pt.json' ),
		'WordCloud': () => import( './components/word-cloud/pt.json' )
	}
};


// EXPORTS //

export const RESOURCES = {
	'de': {},
	'en': {},
	'es': {},
	'it': {},
	'fr': {},
	'pt': {},
	'nl': {},
	'pl': {},
	'ru': {},
	'ja': {},
	'zh': {}
};

export function changeLanguage( lng ) {
	const promises = [];
	NAMESPACES.forEach( ns => {
		if ( !i18next.hasResourceBundle( lng, ns ) ) {
			const res = TRANSLATIONS[ lng ][ ns ];
			if ( !res ) {
				debug( `Missing translations for ${ns} in language ${lng}...` );
			}
			const promise = res();
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
