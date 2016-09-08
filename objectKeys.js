'use strict';

// OBJECT KEYS //

const getKeys = Object.keys;

getKeys.shim = function() {
	return Object.keys;
};


// EXPORTS //

module.exports = getKeys;
