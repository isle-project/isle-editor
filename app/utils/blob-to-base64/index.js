// MAIN //

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
