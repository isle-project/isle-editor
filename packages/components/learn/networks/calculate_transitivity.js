function countLinks( links, i, j, k ) {
	let count = 0;
	for ( let l = 0; l < links.length; l++ ) {
		const link = links[ l ];
		if ( link.source === i && link.target === j ) {
			count += 1;
		}
		if ( link.source === i && link.target === k ) {
			count += 1;
		}
		if ( link.source === j && link.target === k ) {
			count += 1;
		}
	}
	return count;
}


// MAIN //

function calculateTransitivity( nodes, links ) {
	let numTriangles = 0;
	let numTriples = 0;
	for ( let i = 0; i < nodes.length; i++ ) {
		for ( let j = 0; j < i; j++ ) {
			for ( let k = 0; k < j; k++ ) {
				const nLinks = countLinks( links, i, j, k );
				if ( nLinks === 2 ) {
					numTriples += 1;
				}
				if ( nLinks === 3 ) {
					numTriples += 3;
					numTriangles += 1;
				}
			}
		}
	}
	return ( 3 * numTriangles ) / numTriples;
}


// EXPORTS //

export default calculateTransitivity;
