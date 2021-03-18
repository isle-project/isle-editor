/**
* Copyright (C) 2016-present The ISLE Authors
*
* The isle-dashboard program is free software: you can redistribute it and/or modify
* it under the terms of the GNU Affero General Public License as
* published by the Free Software Foundation, either version 3 of the
* License, or (at your option) any later version.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU Affero General Public License for more details.
*
* You should have received a copy of the GNU Affero General Public License
* along with this program. If not, see <https://www.gnu.org/licenses/>.
*/

// MODULES //

import React, { Fragment, useCallback, useState } from 'react';
import { withTranslation } from 'react-i18next';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { addResources } from '@isle-project/locales';
import Loadable from '@isle-project/components/internal/loadable';
const SelectModal = Loadable( () => import( /* webpackChunkName: "LanguageSwitcherModal" */ './select_modal.js' ) );
import './language_switcher.css';


// VARIABLES //

addResources( 'LanguageSwitcher' );


// MAIN //

const LanguageSwitcher = ( props ) => {
	const [ showSelectModal, setShowSelectModal ] = useState( false );
	const [ isLoading, setIsLoading ] = useState( false );
	const toggleSelectModal = useCallback( () => {
		setShowSelectModal( !showSelectModal );
	}, [ showSelectModal ] );
	const { t } = props;
	return (
		<Fragment>
			{isLoading ? <div className="language-switcher-notification" >
				{t('loading-translations')}
			</div> : null}
			<OverlayTrigger placement="top" overlay={<Tooltip id="language-switcher">{t('change-language')}</Tooltip>} >
				<button
					onClick={toggleSelectModal} className="language-switcher"
					aria-label={t('choose-language')}
				>
					<i className="fas fa-globe"></i>
				</button>
			</OverlayTrigger>
			<SelectModal
				show={showSelectModal} onHide={toggleSelectModal} t={t}
				setIsLoading={setIsLoading}
			/>
		</Fragment>
	);
};


// EXPORTS //

export default withTranslation( 'LanguageSwitcher' )( LanguageSwitcher );
