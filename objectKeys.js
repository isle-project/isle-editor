'use strict';

// OBJECT KEYS //

const getKeys = Object.keys;

getKeys.shim = function getKeys() {
	return Object.keys;
};


// EXPORTS //

module.exports = getKeys;
