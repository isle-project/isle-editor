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
import { withTranslation } from 'react-i18next';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { changeLanguage } from '@isle-project/locales';
import { addResources } from '@isle-project/locales';
import './language_switcher.css';


// VARIABLES //

addResources( 'LanguageSwitcher' );
const SelectModal = ( props ) => {
	if ( !props.show ) {
		return null;
	}
	const changeLanguageFactory = ( lng ) => {
		return () => {
			props.onHide();
			props.setIsLoading( true );
			changeLanguage( lng, () => {
				props.setIsLoading( false );
			});
		};
	};
	const { t } = props;

	/* eslint-disable  i18next/no-literal-string */
	return (
		<Modal show onHide={props.onHide} >
			<Modal.Header closeButton >
				<Modal.Title as="h3">{t('choose-language')}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Button block onClick={changeLanguageFactory( 'en' )}>English - EN</Button>
				<Button block onClick={changeLanguageFactory( 'es' )}>Español - ES</Button>
				<Button block onClick={changeLanguageFactory( 'de' )}>Deutsch - DE</Button>
				<Button block onClick={changeLanguageFactory( 'fr' )}>Français - FR</Button>
				<Button block onClick={changeLanguageFactory( 'it' )}>Italiano - IT</Button>
				<Button block onClick={changeLanguageFactory( 'ja' )}>にほんご - JA</Button>
				<Button block onClick={changeLanguageFactory( 'nl' )}>Nederlands - NL</Button>
				<Button block onClick={changeLanguageFactory( 'pt' )}>Porgtugês - PT</Button>
				<Button block onClick={changeLanguageFactory( 'pl' )}>Polski - PL</Button>
				<Button block onClick={changeLanguageFactory( 'ru' )}>русский - RU</Button>
				<Button block onClick={changeLanguageFactory( 'zh' )}>中文 - ZH</Button>
			</Modal.Body>
		</Modal>
	);
	/* eslint-enable  i18next/no-literal-string */
};


// MAIN //

const LanguageSwitcher = ( props ) => {
	const [ showSelectModal, setShowSelectModal ] = useState( false );
	const [ isLoading, setIsLoading ] = useState( false );
	const toggleSelectModal = () => {
		setShowSelectModal( !showSelectModal );
	};
	const { t } = props;
	return (
		<Fragment>
			{isLoading ? <div className="language-switcher-notification" >
				{t('loading-translations')}
			</div> : null}
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
				setIsLoading={setIsLoading}
			/>
		</Fragment>
	);
};


// EXPORTS //

export default withTranslation( 'LanguageSwitcher' )( LanguageSwitcher );
