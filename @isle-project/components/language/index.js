// MODULES //

import React, { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import SessionContext from '@isle-project/session/context.js';
import Chinese from './chinese.js';
import English from './english.js';
import French from './french.js';
import German from './german.js';
import Italian from './italian.js';
import Japanese from './japanese.js';
import Netherlandish from './netherlandish.js';
import Polish from './polish.js';
import Portuguese from './portuguese.js';
import Russian from './russian.js';
import Spanish from './spanish.js';


// MAIN //

/**
* Language component, which expects several language-specific tags (e.g., <Language.Spanish>) as its children. If a the component has as its child a language tag for the currently selected language, then its contents will be displayed. If no language-specific tag is available, the tag for the default language (as specified in the preamble of the ISLE lesson) or, if also not available, the first language-specific tag and its contents will be displayed

* @property {Array} children - language-specific tags (e.g., <Language.Spanish>) including their content in the respective language
*/
const Language = ({ children }) => {
	const [ availableLanguages, setAvailableLanguages ] = useState( new Set() );
	const session = useContext( SessionContext );
	const { i18n } = useTranslation();
	const defaultLanguage = session.config.language;
	const selectedLanguage = i18n.language;

	useEffect( () => {
		const newAvailableLanguages = new Set( availableLanguages );
		React.Children.forEach( children, child => {
			if ( child.type.languageCode ) {
				newAvailableLanguages.add( child.type.languageCode );
			}
		});
		if ( newAvailableLanguages.size !== availableLanguages.size ) {
			setAvailableLanguages( newAvailableLanguages );
		}
	}, [ availableLanguages, children ]);

	const hasDefault = availableLanguages.has( defaultLanguage );
	const selectedIsPresent = availableLanguages.has( selectedLanguage );
	if ( selectedIsPresent ) {
		return React.Children.map( children, child => {
			if ( child.type.languageCode === selectedLanguage ) {
				return child;
			}
			return null;
		});
	}
	else if ( hasDefault ) {
		return React.Children.map( children, child => {
			if ( child.type.languageCode === defaultLanguage ) {
				return child;
			}
			return null;
		});
	}
	let first = false;
	return React.Children.map( children, ( child ) => {
		if ( !child.type.languageCode ) {
			return child;
		}
		if ( !first ) {
			first = true;
			return child;
		}
		return null;
	});
};


// PROPERTIES //

Language.Chinese = Chinese;
Language.English = English;
Language.French = French;
Language.German = German;
Language.Italian = Italian;
Language.Japanese = Japanese;
Language.Netherlandish = Netherlandish;
Language.Portuguese = Portuguese;
Language.Polish = Polish;
Language.Russian = Russian;
Language.Spanish = Spanish;


// EXPORTS //

export default Language;
