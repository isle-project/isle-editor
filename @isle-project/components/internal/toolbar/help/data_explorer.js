// MODULES //

import React from 'react';
import Image from '@isle-project/components/image';


// MAIN //

const main = ({ t }) => {
	return (
		<div>
			<h2 style={{ textAlign: 'center' }}>{t('data-explorer-title')}</h2>

			<p>{t( 'data-explorer-p1' )}</p>

			<div className="centered" style={{ width: 'fit-content' }} >
				<Image alt="Explorer View" src={`${location.origin}/screenshots/data_explorer_view.jpg`} width={400} height={200} />
			</div>

			<p>{t( 'data-explorer-p2' )}</p>

			<div className="centered" style={{ width: 'fit-content' }} >
				<Image className="centered" alt="Explorer Output" src={`${location.origin}/screenshots/data_explorer_outputs.jpg`} width={400} height={200} />
			</div>

			<p>{t( 'data-explorer-p3' )}</p>

			<p>{t( 'data-explorer-p4' )}</p>
		</div>
	);
};


// EXPORTS //

export default main;
