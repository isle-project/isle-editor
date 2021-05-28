// MODULES //

import React, { useContext } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { changeLanguage } from '@isle-project/locales';
import { LANGUAGE_CODES, languageDescription } from '@isle-project/constants/languages';
import SessionContext from '@isle-project/session/context.js';


// MAIN //

const SelectModal = ( props ) => {
	const session = useContext( SessionContext );
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
	const availableLanguages = session.settings.availableLanguages || LANGUAGE_CODES;

	/* eslint-disable  i18next/no-literal-string */
	return (
		<Modal show onHide={props.onHide} >
			<Modal.Header closeButton >
				<Modal.Title as="h3">{t('choose-language')}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<ButtonGroup size="sm" vertical style={{ width: '100%' }} >
					{availableLanguages.map( ( x, idx ) => {
						return ( <Button
							key={idx} variant="outline-primary"
							onClick={changeLanguageFactory( x )}
						>{languageDescription( x )}</Button> );
					})}
				</ButtonGroup>
			</Modal.Body>
		</Modal>
	);
	/* eslint-enable  i18next/no-literal-string */
};


// EXPORTS //

export default SelectModal;
