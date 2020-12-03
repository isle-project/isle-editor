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

import React, { Fragment, useState } from 'react';
import i18next from 'i18next';
import { withTranslation } from 'react-i18next';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './language_switcher.css';
import './load_translations.js';


// VARIABLES //

const SelectModal = ( props ) => {
	if ( !props.show ) {
		return null;
	}
	const changeLanguageFactory = ( lng ) => {
		return async () => {
			props.onHide();
			await i18next.changeLanguage( lng );
		};
	};
	const { t } = props;
	return (
		<Modal show onHide={props.onHide} >
			<Modal.Header closeButton >
				<Modal.Title as="h3">{t('choose-language')}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Button block onClick={changeLanguageFactory( 'en' )}>English - EN</Button>
				<Button block onClick={changeLanguageFactory( 'es' )}>Español - ES</Button>
				<Button block onClick={changeLanguageFactory( 'de' )}>Deutsch - DE</Button>
			</Modal.Body>
		</Modal>
	);
};


// MAIN //

const LanguageSwitcher = ( props ) => {
	const [ showSelectModal, setShowSelectModal ] = useState( false );
	const toggleSelectModal = () => {
		setShowSelectModal( !showSelectModal );
	};
	const { t } = props;
	return (
		<Fragment>
			<OverlayTrigger placement="left" overlay={<Tooltip id="language-switcher">{t('change-language')}</Tooltip>} >
				<button
					onClick={toggleSelectModal} className="language-switcher"
					aria-label={t('choose-language')}
				>
					<i className="fas fa-globe"></i>
				</button>
			</OverlayTrigger>
			<SelectModal
				show={showSelectModal} onHide={toggleSelectModal} t={t}
			/>
		</Fragment>
	);
};


// EXPORTS //

export default withTranslation()( LanguageSwitcher );
