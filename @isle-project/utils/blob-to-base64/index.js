// MAIN //

/**
 * Returns a promise resolving to a base64 string representing the blob.
 *
 * @param {Blob} blob - blob to convert
 * @returns {Promise} promise resolving to a base64 string representing the blob
 */
const blobToBase64 = ( blob ) => {
	const { FileReader } = window;
	const reader = new FileReader();
	reader.readAsDataURL( blob );
	return new Promise(resolve => {
		reader.onloadend = () => {
			resolve(reader.result);
		};
	});
};


// EXPORTS //

export default blobToBase64;
