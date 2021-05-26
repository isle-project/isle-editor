// MODULES //

import React, { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import SessionContext from '@isle-project/session/context.js';
import Bulgarian from './bulgarian.js';
import Chinese from './chinese.js';
import Czech from './czech.js';
import Danish from './danish.js';
import English from './english.js';
import Estonian from './estonian';
import Finnish from './finnish.js';
import French from './french.js';
import German from './german.js';
import Greek from './greek.js';
import Hungarian from './hungarian.js';
import Italian from './italian.js';
import Japanese from './japanese.js';
import Latvian from './latvian.js';
import Lithuanian from './lithuanian.js';
import Netherlandish from './netherlandish.js';
import Polish from './polish.js';
import Portuguese from './portuguese.js';
import Romanian from './romanian.js';
import Russian from './russian.js';
import Slovak from './slovak.js';
import Slovenian from './slovenian.js';
import Spanish from './spanish.js';
import Swedish from './swedish.js';


// MAIN //

/**
* Language component, which expects several language-specific tags (e.g., Language.Spanish) as its children. If a the component has as its child a language tag for the currently selected language, then its contents will be displayed. If no language-specific tag is available, the tag for the default language (as specified in the preamble of the ISLE lesson) or, if also not available, the first language-specific tag and its contents will be displayed
*
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

Language.Bulgarian = Bulgarian;
Language.Chinese = Chinese;
Language.Czech = Czech;
Language.Danish = Danish;
Language.English = English;
Language.Estonian = Estonian;
Language.Finnish = Finnish;
Language.French = French;
Language.German = German;
Language.Greek = Greek;
Language.Hungarian = Hungarian;
Language.Italian = Italian;
Language.Japanese = Japanese;
Language.Latvian = Latvian;
Language.Lithuanian = Lithuanian;
Language.Netherlandish = Netherlandish;
Language.Portuguese = Portuguese;
Language.Polish = Polish;
Language.Romanian = Romanian;
Language.Russian = Russian;
Language.Slovak = Slovak;
Language.Slovenian = Slovenian;
Language.Spanish = Spanish;
Language.Swedish = Swedish;


// EXPORTS //

export default Language;
