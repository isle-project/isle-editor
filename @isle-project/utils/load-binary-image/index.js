// MAIN //

/**
 * Loads a binary image.
 *
 * @param {string} file - image path
 * @returns {Promise} a promise which resolves with an object containing the image data and metadata
 */
function loadBinaryImage( file ) {
	return new Promise( ( resolve, reject ) => {
		const { FileReader } = window;
		if ( FileReader ) {
			const reader = new FileReader();
			reader.onload = event => {
				// base64 encoded url.
				const src = event.target.result;
				resolve({
					src, height: 0, width: 0, id: ''
				});
			};
			reader.onerror = () => {
				reject(new Error('FileReader failed'));
			};
			reader.readAsDataURL(file);
		} else {
			reject( new Error( 'FileReader is not available' ) );
		}
	});
}


// EXPORTS //

export default loadBinaryImage;
