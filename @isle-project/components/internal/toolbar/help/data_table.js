// MODULES //

import React from 'react';
import Image from '@isle-project/components/image';


// MAIN //

const main = ({ t }) => {
	return (
		<div>
			<h2 style={{ textAlign: 'center' }}>{t('data-table-title')}</h2>
			<p>{t( 'data-table-p1' )}</p>

			<div className="centered" style={{ width: 'fit-content' }} >
				<Image alt={t('data-table-title')} src={`${location.origin}/screenshots/data_table_student.png`} width={600} height={300} />
			</div>

			<p>{t( 'data-explorer-p2' )}</p>
		</div>
	);
};


// EXPORTS //

export default main;
