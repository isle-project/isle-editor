// MODULES //

import React from 'react';
import Alert from 'react-bootstrap/Alert';
import RPlot from '@isle-project/components/r/plot';
import PropTypes from 'prop-types';
import { i18n } from '@isle-project/locales';
import objectValues from '@stdlib/utils/values';
import hasOwnProp from '@stdlib/assert/has-own-property';
import { withPropCheck } from 'utils/prop-check';


// VARIABLES //

const AXIS_OPTIONS = [
	'parallel to the axis',
	'horizontal',
	'perpendicular to the axis',
	'vertical'
];


// FUNCTIONS //

export function generateMosaicPlotCode({ data, variables, showColors, axisLabels }) {
	const counts = {};
	const nObs = data[ variables[ 0 ] ].length;
	for ( let i = 0; i < nObs; i++ ) {
		let key = '';
		for ( let j = 0; j < variables.length; j++ ) {
			let x = variables[ j ];
			let datum = data[ x ][ i ];
			key += datum;
			if ( j < variables.length-1 ) {
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
	variables.forEach( () => {
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
	const code = `dat = data.frame( counts = c(${objectValues( counts )}), ${varArr.map( ( arr, idx ) => `${variables[ idx ]} = c( ${arr} )` ) })
		xytable = xtabs( counts ~ ., data = dat )
		mosaicplot( xytable, main = "${`${i18n.t('R:mosaic-plot-of')} ${variables.join( ', ' )}`}",
		cex=1, las=${las}, shade=${ showColors ? 'TRUE' : 'FALSE' } )`;
	return code;
}


// MAIN //

function MosaicPlot({ data, id, variables, showColors, axisLabels, action, onShare, onPlotDone }) {
	if ( !data ) {
		return <Alert variant="danger">{i18n.t('Plotly:data-missing')}</Alert>;
	}
	const code = generateMosaicPlotCode({ data, variables, showColors, axisLabels });
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


// PROPERTIES //

MosaicPlot.defaultProps = {
	showColors: false,
	axisLabels: 'parallel to the axis'
};

MosaicPlot.propTypes = {
	data: PropTypes.object.isRequired,
	variables: PropTypes.array.isRequired,
	showColors: PropTypes.bool,
	axisLabels: PropTypes.oneOf([ 'parallel to the axis', 'horizontal', 'perpendicular to the axis', 'vertical' ])
};


// EXPORTS //

/**
* A mosaic plot.
*
* @property {Object} data - object of value arrays for each variable
* @property {Array<string>} variables - array of variables to display
* @property {boolean} showColors - controls whether to display colors showing significance
* @property {string} axisLabels - grouping variable
*/
export default withPropCheck( MosaicPlot );
