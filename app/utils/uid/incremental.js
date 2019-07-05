// MAIN //

function generateUID( prefix ) {
	let counter = 1;

	const uid = () => {
		counter += 1;
		return `${prefix}-${counter}`;
	};
	return uid;
}


// EXPORTS //

export default generateUID;
