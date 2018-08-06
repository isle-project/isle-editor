/*
* Adapted from:
*
* FileSaver.js
* A saveAs() FileSaver implementation.
* 1.3.8
* 2018-03-22 14:03:47
*
* By Eli Grey, https://eligrey.com
* License: MIT
*   See https://github.com/eligrey/FileSaver.js/blob/master/LICENSE.md
*
* @source http://purl.eligrey.com/github/FileSaver.js/blob/master/src/FileSaver.js
*/

// VARIABLES //

const RE_AUTO_BOM = /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i;
const ARBITRARY_REVOKE_TIMEOUT = 1000 * 40; // in ms


// FUNCTIONS //

function click(node) {
	var event = new MouseEvent( 'click' );
	node.dispatchEvent( event );
}

function throwOutside( ex ) {
	setImmediate(function throwEx() {
		throw ex;
	}, 0 );
}

function autoBOM( blob ) {
	// Prepend BOM for UTF-8 XML and text/* types (including HTML). Note: your browser will automatically convert UTF-16 U+FEFF to EF BB BF
	if ( RE_AUTO_BOM.test( blob.type ) ) {
		return new Blob([ String.fromCharCode(0xFEFF), blob ], {
			type: blob.type
		});
	}
	return blob;
}

function dispatch( filesaver, eventTypes, event ) {
	eventTypes = [].concat( eventTypes );
	var i = eventTypes.length;
	while ( i-- ) {
		var listener = filesaver[ 'on' + eventTypes[i] ];
		if ( typeof listener === 'function' ) {
			try {
				listener.call( filesaver, event || filesaver );
			} catch ( ex ) {
				throwOutside( ex );
			}
		}
	}
}


// MAIN //

function saveFactory( view ) {
	if (
		typeof view === 'undefined' ||
		typeof navigator !== 'undefined' && /MSIE [1-9]\./.test(navigator.userAgent)
	) {
		return;
	}
	var doc = view.document;
	// only get URL when necessary in case Blob.js hasn't overridden it yet
	function getURL() {
		return view.URL || view.webkitURL || view;
	}
	function revoke( file ) {
		function revoker() {
			if (typeof file === 'string') { // file is an object URL
				getURL().revokeObjectURL(file);
			} else { // file is a File
				file.remove();
			}
		}
		setTimeout( revoker, ARBITRARY_REVOKE_TIMEOUT );
	}

	var saveLink = doc.createElementNS( 'http://www.w3.org/1999/xhtml', 'a' );
	var canUseSaveLink = 'download' in saveLink;
	var isSafari = /constructor/i.test( view.HTMLElement ) || view.safari;
	var isChromeIOS =/CriOS\/[\d]+/.test( navigator.userAgent );
	var setImmediate = view.setImmediate || view.setTimeout;
	var forceSavableType = 'application/octet-stream';

	function FileSaver(blob, name, noAutoBOM ) {
		if (!noAutoBOM ) {
			blob = autoBOM(blob);
		}
		// First try a.download, then web filesystem, then object URLs
		var self = this;
		var type = blob.type;
		var force = type === forceSavableType;
		var objectURL;
		function dispatchAll() {
			dispatch( self, 'writestart progress write writeend'.split(' ') );
		}
		// on any filesys errors revert to saving with object URLs
		function fsError() {
			if ((isChromeIOS || (force && isSafari)) && view.FileReader) {
				// Safari doesn't allow downloading of blob urls
				var reader = new FileReader();
				reader.onloadend = function onLoadEnd() {
					var url = isChromeIOS ? reader.result : reader.result.replace(/^data:[^;]*;/, 'data:attachment/file;');
					var popup = view.open(url, '_blank');
					if ( !popup ) {
						view.location.href = url;
					}
					url = void 0; // release reference before dispatching
					self.readyState = self.DONE;
					dispatchAll();
				};
				reader.readAsDataURL(blob);
				self.readyState = self.INIT;
				return;
			}
			// don't create more object URLs than needed
			if (!objectURL) {
				objectURL = getURL().createObjectURL(blob);
			}
			if ( force ) {
				view.location.href = objectURL;
			} else {
				var opened = view.open( objectURL, '_blank' );
				if ( !opened ) {
					// Apple does not allow window.open, see https://developer.apple.com/library/safari/documentation/Tools/Conceptual/SafariExtensionGuide/WorkingwithWindowsandTabs/WorkingwithWindowsandTabs.html
					view.location.href = objectURL;
				}
			}
			self.readyState = self.DONE;
			dispatchAll();
			revoke( objectURL );
		}
		self.readyState = self.INIT;

		if ( canUseSaveLink ) {
			objectURL = getURL().createObjectURL(blob);
			setImmediate(function save() {
				saveLink.href = objectURL;
				saveLink.download = name;
				click( saveLink );
				dispatchAll();
				revoke( objectURL );
				self.readyState = self.DONE;
			}, 0);
			return;
		}

		fsError();
	}
	var proto = FileSaver.prototype;
	function saveAs( blob, name, noAutoBOM ) {
		return new FileSaver(blob, name || blob.name || 'download', noAutoBOM );
	}

	// IE 10+ (native saveAs)
	if ( typeof navigator !== 'undefined' && navigator.msSaveOrOpenBlob ) {
		return function saveAs( blob, name, noAutoBOM ) {
			name = name || blob.name || 'download';
			if ( !noAutoBOM ) {
				blob = autoBOM( blob );
			}
			return navigator.msSaveOrOpenBlob(blob, name);
		};
	}

	proto.abort = function abort(){};
	proto.readyState = proto.INIT = 0;
	proto.WRITING = 1;
	proto.DONE = 2;

	proto.error = null;
	proto.onwritestart = null;
	proto.onprogress = null;
	proto.onwrite = null;
	proto.onabort = null;
	proto.onerror = null;
	proto.onwriteend = null;

	return saveAs;
}

const saveAs = window.saveAs || saveFactory(
	typeof self !== 'undefined' && self ||
	typeof window !== 'undefined' && window ||
	this
);


// EXPORTS //

export default saveAs;
