// MAIN //

/**
* Assigns a non-empty string to the `returnValue` property of the unload event, which causes a dialog box to appear, asking the user for confirmation to leave the page.
*
* @param {Event} event - unload event
* @returns {string} confirmation message
*/
function beforeUnload( event ) {
	let confirmationMessage = '\o/'; // eslint-disable-line no-useless-escape
	event.returnValue = confirmationMessage; // Gecko, Trident, Chrome 34+
	return confirmationMessage; // Gecko, WebKit, Chrome <34
}


// EXPORTS //

export default beforeUnload;
