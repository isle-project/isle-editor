// MODULES //

import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Alert from 'react-bootstrap/Alert';
import anova1 from '@stdlib/stats/anova1';
import { isPrimitive as isNumber } from '@stdlib/assert/is-number';
import isnan from '@stdlib/assert/is-nan';
import isNull from '@stdlib/assert/is-null';
import { withPropCheck } from '@isle-project/utils/prop-check';
import { Factor } from '@isle-project/utils/factor-variable';


// MAIN //

function Anova({ data, variable, group, showDecision }) {
	const { t } = useTranslation( 'tests' );
	if ( !data ) {
		return <Alert variant="danger">{t('data-missing')}</Alert>;
	}
	const vals = data[ variable ];
	const groups = data[ group ];
	const groupsFiltered = [];
	const valsFiltered = [];

	let nMissing = 0;
	for ( let i = 0; i < vals.length; i++ ) {
		if (
			( isNumber( vals[i] ) && !isnan( vals[i] ) ) &&
			( !isNull( groups[i] ) && groups[i] !== '' )
		) {
			valsFiltered.push( vals[ i ] );
			groupsFiltered.push( `"${groups[i]}"` );
		} else {
			nMissing += 1;
		}
	}
	return (
		<div style={{ overflowX: 'auto', width: '100%' }}>
			<label>{t('anova', { variable, group })}</label>
			<pre style={{ marginTop: 10 }}>{anova1( valsFiltered, groupsFiltered ).print({
				decision: showDecision
			})}</pre>
			{ nMissing > 0 && <small>{nMissing} missing observations were excluded from the data.</small>}
		</div>
	);
}


// PROPERTIES //

Anova.defaultProps = {
	showDecision: false
};

Anova.propTypes = {
	data: PropTypes.object.isRequired,
	variable: PropTypes.string.isRequired,
	group: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.instanceOf( Factor )
	]).isRequired,
	showDecision: PropTypes.bool
};


// EXPORTS //

/**
* Analysis of variance.
*
* @property {Object} data - object of value arrays
* @property {string} variable - name of variable to be displayed
* @property {(string|Factor)} group - name of grouping variable
* @property {boolean} showDecision - controls whether to display the test decision
*/
export default withPropCheck( Anova );
