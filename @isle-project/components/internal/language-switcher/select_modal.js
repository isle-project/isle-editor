// MODULES //

import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { changeLanguage } from '@isle-project/locales';


// MAIN //

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
				<ButtonGroup size="sm" vertical style={{ width: '100%' }} >
					<Button variant="outline-primary" onClick={changeLanguageFactory( 'en' )}>English - EN</Button>
					<Button variant="outline-primary" onClick={changeLanguageFactory( 'bg' )}>Български - BG</Button>
					<Button variant="outline-primary" onClick={changeLanguageFactory( 'cs' )}>Česky - CS</Button>
					<Button variant="outline-primary" onClick={changeLanguageFactory( 'da' )}>Dansk - DA</Button>
					<Button variant="outline-primary" onClick={changeLanguageFactory( 'el' )}>Ελληνική - EL</Button>
					<Button variant="outline-primary" onClick={changeLanguageFactory( 'es' )}>Español - ES</Button>
					<Button variant="outline-primary" onClick={changeLanguageFactory( 'et' )}>Eesti - ET</Button>
					<Button variant="outline-primary" onClick={changeLanguageFactory( 'de' )}>Deutsch - DE</Button>
					<Button variant="outline-primary" onClick={changeLanguageFactory( 'fi' )}>Suomalainen - FI</Button>
					<Button variant="outline-primary" onClick={changeLanguageFactory( 'fr' )}>Français - FR</Button>
					<Button variant="outline-primary" onClick={changeLanguageFactory( 'hu' )}>English - HU</Button>
					<Button variant="outline-primary" onClick={changeLanguageFactory( 'it' )}>Italiano - IT</Button>
					<Button variant="outline-primary" onClick={changeLanguageFactory( 'ja' )}>にほんご - JA</Button>
					<Button variant="outline-primary" onClick={changeLanguageFactory( 'lt' )}>Lietuvių kalba - LT</Button>
					<Button variant="outline-primary" onClick={changeLanguageFactory( 'lv' )}>Latviešu - LV</Button>
					<Button variant="outline-primary" onClick={changeLanguageFactory( 'nl' )}>Nederlands - NL</Button>
					<Button variant="outline-primary" onClick={changeLanguageFactory( 'pl' )}>Polski - PL</Button>
					<Button variant="outline-primary" onClick={changeLanguageFactory( 'pt' )}>Porgtugês - PT</Button>
					<Button variant="outline-primary" onClick={changeLanguageFactory( 'ro' )}>Românesc - RO</Button>
					<Button variant="outline-primary" onClick={changeLanguageFactory( 'ru' )}>русский - RU</Button>
					<Button variant="outline-primary" onClick={changeLanguageFactory( 'sk' )}>Slovenská - SK</Button>
					<Button variant="outline-primary" onClick={changeLanguageFactory( 'sl' )}>Slovenski - SL</Button>
					<Button variant="outline-primary" onClick={changeLanguageFactory( 'sv' )}>Svenska - SV</Button>
					<Button variant="outline-primary" onClick={changeLanguageFactory( 'zh' )}>中文 - ZH</Button>
				</ButtonGroup>
			</Modal.Body>
		</Modal>
	);
	/* eslint-enable  i18next/no-literal-string */
};


// EXPORTS //

export default SelectModal;
