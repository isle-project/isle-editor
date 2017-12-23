// MAIN //

function beforeUnload( e ) {
	let confirmationMessage = '\o/'; // eslint-disable-line no-useless-escape
	e.returnValue = confirmationMessage; // Gecko, Trident, Chrome 34+
	return confirmationMessage; // Gecko, WebKit, Chrome <34
}


// EXPORTS //

export default beforeUnload;
