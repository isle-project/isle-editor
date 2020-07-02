global.Buffer = global.Buffer || require('buffer').Buffer;
if ( typeof window === 'undefined' ) {
	global.window = {};
}
global.localStorage = null;
