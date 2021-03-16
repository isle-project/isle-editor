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
import { useTranslation } from 'react-i18next';
import { ipcRenderer } from 'electron';
import electronStore from 'store/electron.js';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { changeLanguage } from '@isle-project/locales/editor';


// VARIABLES //

const SelectModal = ( props ) => {
	if ( !props.show ) {
		return null;
	}
	const changeLanguageFactory = ( lng ) => {
		return () => {
			props.onHide();
			changeLanguage( lng );
			electronStore.set( 'i18nLanguage', lng );
			ipcRenderer.send( 'change-language', { lng });
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
	const toggleSelectModal = useCallback( () => {
		setShowSelectModal( !showSelectModal );
	}, [ showSelectModal ] );
	const { t } = useTranslation( 'Editor' );
	return (
		<Fragment>
			<button
				onClick={toggleSelectModal}
				aria-label={t('switch-editor-language')}
			>
				<i className="fas fa-globe" style={{ marginRight: 8 }}></i>
				<span className="title">{t('switch-editor-language')}</span>
			</button>
			<SelectModal
				show={showSelectModal} onHide={toggleSelectModal} t={t}
			/>
		</Fragment>
	);
};


// EXPORTS //

export default LanguageSwitcher;
