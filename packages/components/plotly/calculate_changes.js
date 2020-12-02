// FUNCTIONS //

function getText( layout, prop ) {
	let out;
	if ( !layout ) {
		return out;
	}
	if ( layout[ prop ] && layout[ prop ].text ) {
		out = layout[ prop ].text;
	} else {
		out = layout[ prop ];
	}
	return out;
}


// MAIN //

function calculateChanges( newLayout, oldLayout ) {
	const changes = [];
	const newTitle = getText( newLayout, 'title' );
	const oldTitle = getText( oldLayout, 'title' );
	if ( newTitle !== oldTitle ) {
		changes.push({
			name: 'title',
			old: oldTitle,
			new: newTitle
		});
	}
	if ( newLayout.showlegend !== oldLayout.showlegend ) {
		changes.push({
			name: 'showlegend',
			old: oldLayout.showlegend,
			new: newLayout.showlegend
		});
	}
	if ( newLayout.legend && oldLayout.legend ) {
		if ( newLayout.legend.orientation !== oldLayout.legend.orientation ) {
			changes.push({
				name: 'legend.orientation',
				old: oldLayout.legend.orientation,
				new: newLayout.legend.orientation
			});
		}
		if (
			newLayout.legend.x !== oldLayout.legend.x ||
			newLayout.legend.y !== oldLayout.legend.y
		) {
			changes.push({
				name: 'legend.position',
				old: [ oldLayout.legend.x, oldLayout.legend.y ],
				new: [ newLayout.legend.x, newLayout.legend.y ]
			});
		}
	}
	if ( newLayout.xaxis && oldLayout.xaxis ) {
		const newTitle = getText( newLayout.xaxis, 'title' );
		const oldTitle = getText( oldLayout.xaxis, 'title' );
		if ( newTitle !== oldTitle ) {
			changes.push({
				name: 'xaxis.title',
				old: oldTitle,
				new: newTitle
			});
		}
		if (
			newLayout.xaxis.range && oldLayout.xaxis.range &&
			(
				newLayout.xaxis.range[ 0 ] !== oldLayout.xaxis.range[ 0 ] ||
				newLayout.xaxis.range[ 1 ] !== oldLayout.xaxis.range[ 1 ]
			)
		) {
			changes.push({
				name: 'xaxis.range',
				old: oldLayout.xaxis.range,
				new: newLayout.xaxis.range
			});
		}
	}
	if ( newLayout.yaxis && oldLayout.yaxis ) {
		const newTitle = getText( newLayout.yaxis, 'title' );
		const oldTitle = getText( oldLayout.yaxis, 'title' );
		if ( newTitle !== oldTitle ) {
			changes.push({
				name: 'yaxis.title',
				old: oldTitle,
				new: newTitle
			});
		}
		if (
			newLayout.yaxis.range && oldLayout.yaxis.range &&
			(
				newLayout.yaxis.range[ 0 ] !== oldLayout.yaxis.range[ 0 ] ||
				newLayout.yaxis.range[ 1 ] !== oldLayout.yaxis.range[ 1 ]
			)
		) {
			changes.push({
				name: 'yaxis.range',
				old: oldLayout.yaxis.range,
				new: newLayout.yaxis.range
			});
		}
	}
	return changes;
}


// EXPORTS //

export default calculateChanges;
