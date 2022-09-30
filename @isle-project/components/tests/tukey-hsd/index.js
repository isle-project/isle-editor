// MODULES //

import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Alert from 'react-bootstrap/Alert';
import { isPrimitive as isNumber } from '@stdlib/assert/is-number';
import isnan from '@stdlib/assert/is-nan';
import isNull from '@stdlib/assert/is-null';
import ROutput from '@isle-project/components/r/output';
import RPlot from '@isle-project/components/r/plot';
import { withPropCheck } from '@isle-project/utils/prop-check';
import { Factor } from '@isle-project/utils/factor-variable';


// MAIN //

function TukeyHSD({ data, variable, group, confidenceLevel }) {
	const { t } = useTranslation( 'tests' );
	if ( !data ) {
		return <Alert variant="danger">{t('data-missing')}</Alert>;
	}
	const vals = data[ variable ];
	const groups = data[ group ];
	const groupsFiltered = [];
	const valsFiltered = [];
	for ( let i = 0; i < vals.length; i++ ) {
		if (
			( isNumber( vals[i] ) && !isnan( vals[i] ) ) &&
			( !isNull( groups[i] ) && groups[i] !== '' )
		) {
			valsFiltered.push( vals[ i ] );
			groupsFiltered.push( `"${groups[i]}"` );
		}
	}
	return (
		<div style={{ overflowX: 'auto', width: '100%' }}>
			<ROutput code={`
				\`${variable}\` = c(${valsFiltered.join( ',' )})
				\`${group}\` = c(${groupsFiltered.join( ',' )})
				model <- aov( ${variable} ~ ${group} )
				fit <- TukeyHSD( model, conf.level = ${confidenceLevel} )
				fit`}
			/>
			<RPlot code={`
				\`${variable}\` = c(${valsFiltered.join( ',' )})
				\`${group}\` = c(${groupsFiltered.join( ',' )})
				model <- aov( ${variable} ~ ${group} )
				fit <- TukeyHSD( model, conf.level = ${confidenceLevel} )
				plot( fit, las = 2)
			`} />
		</div>
	);
}


// PROPERTIES //

TukeyHSD.defaultProps = {
	confidenceLevel: 0.95
};

TukeyHSD.propTypes = {
	data: PropTypes.object.isRequired,
	variable: PropTypes.string.isRequired,
	group: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.instanceOf( Factor )
	]).isRequired,
	confidenceLevel: PropTypes.number
};


// EXPORTS //

/**
* Tukey's HSD test for equality of means of multiple groups.
*
* @property {Object} data - object of value arrays
* @property {string} variable - name of variable to be displayed
* @property {(string|Factor)} group - name of grouping variable
* @property {number} confidenceLevel - confidence level
*/
export default withPropCheck( TukeyHSD );
