// MODULES //

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


// EXPORTS //

export default SelectModal;
