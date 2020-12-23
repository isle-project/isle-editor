// MODULES //

import React from 'react';


// MAIN //

const Shorthand = ({ t }) => {
	/* eslint-disable i18next/no-literal-string */
	return (
		<div>
			<p>{t('anim-setting-8-parameters')}</p>
			<div className="sample">
				<code>{t('anim-animation')}<span className="green">crazy 4s ease-in-out 0.5s 12 backwards</span></code>
			</div>
			<br />
			<p>{t('anim-1')} <span className="green">crazy</span>{t('anim-2')}</p>
			<p>{t('anim-3')}<span className="green">4s</span>{t('anim-4')}</p>
			<p><span className="green">ease-in-out</span>{t('anim-5')}</p>
			<p><span className="green">0.5s</span>{t('anim-6')}</p>
			<p>{t('anim-3')}<span className="green">12</span>{t('anim-7')}</p>
			<p>{t('anim-8')}<span className="green">backwards</span>{t('anim-9')}</p>
			<div>
				{t('anim-explanation')}
			</div>
		</div>
	);
	/* eslint-enable i18next/no-literal-string */
};


// EXPORTS //

export default Shorthand;
