// MODULES //

import RPlot from 'components/r/plot';
import objectValues from '@stdlib/utils/values';
import hasOwnProp from '@stdlib/assert/has-own-property';


// VARIABLES //

const AXIS_OPTIONS = [
	'parallel to the axis',
	'horizontal',
	'perpendicular to the axis',
	'vertical'
];


// FUNCTIONS //

export function generateMosaicPlotCode({ data, vars, showColors, axisLabels }) {
	const counts = {};
	const nObs = data[ vars[ 0 ] ].length;
	for ( let i = 0; i < nObs; i++ ) {
		let key = '';
		for ( let j = 0; j < vars.length; j++ ) {
			let x = vars[ j ];
			let datum = data[ x ][ i ];
			key += datum;
			if ( j < vars.length-1 ) {
				key += ':';
			}
		}
		if ( hasOwnProp( counts, key ) ) {
			counts[ key ] += 1;
		} else {
			counts[ key ] = 1;
		}
	}
	const varArr = [];
	vars.forEach( () => {
		varArr.push([]);
	});
	const keys = Object.keys( counts );
	for ( let k = 0; k < keys.length; k++ ) {
		let names = keys[ k ].split( ':' );
		for ( let i = 0; i < names.length; i++ ) {
			varArr[ i ].push( `'${names[ i ]}'` );
		}
	}
	let las = 0;
	if ( axisLabels ) {
		las = AXIS_OPTIONS.indexOf( axisLabels );
	}
	const code = `dat = data.frame( counts = c(${objectValues( counts )}), ${varArr.map( ( arr, idx ) => `${vars[ idx ]} = c( ${arr} )` ) })
		xytable = xtabs( counts ~ ., data = dat )
		mosaicplot( xytable, main = "${`Mosaic Plot of ${vars.join( ', ' )}`}",
		cex=1, las=${las}, shade=${ showColors ? 'TRUE' : 'FALSE' } )`;
	return code;
}

export function MosaicPlot({ data, id, vars, showColors, axisLabels, action, onShare, onPlotDone }) {
	const code = generateMosaicPlotCode({ data, vars, showColors, axisLabels });
	return (
		<RPlot
			code={code}
			id={id}
			draggable
			meta={action}
			libraries={[ 'MASS' ]}
			onDone={onPlotDone}
			width="auto"
			height="300px"
			className="center"
			onShare={onShare}
		/>
	);
}


// EXPORTS //

export default MosaicPlot;
