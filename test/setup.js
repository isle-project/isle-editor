// MODULES //

import 'babel-polyfill';
import jsdom from 'jsdom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


// VARIABLES //

const { JSDOM } = jsdom;
const { document } = ( new JSDOM( '<!doctype html><html><body></body></html>' ) ).window;
global.document = document;
global.window = document.defaultView;
global.navigator = global.window.navigator;

window.localStorage = window.sessionStorage = {
	getItem( key ) {
		return this[ key ];
	},
	setItem( key, value ) {
		this[ key ] = value;
	},
	removeItem( key ) {
		this[ key ] = undefined;
	},
};


// MAIN //

Enzyme.configure({ adapter: new Adapter() });
