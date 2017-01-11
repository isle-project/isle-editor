// BEFORE UNLOAD //

function beforeUnload( e ) {
	let confirmationMessage = '\o/';
	e.returnValue = confirmationMessage; // Gecko, Trident, Chrome 34+
	return confirmationMessage; // Gecko, WebKit, Chrome <34
} // end FUNCTION beforeUnload()


// EXPORTS //

export default beforeUnload;
