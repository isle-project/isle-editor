// MAIN //

function factorVariable( name, categories ) {
	const out = new String( name ); // eslint-disable-line no-new-wrappers
	out.categories = categories;
	return out;
}


// EXPORTS //

export default factorVariable;
