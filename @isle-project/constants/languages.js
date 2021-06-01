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
* along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

// EXPORTS //

export const LANGUAGES = [
	{ value: 'en', label: 'english' },
	{ value: 'bg', label: 'bulgarian' },
	{ value: 'cs', label: 'czech' },
	{ value: 'da', label: 'danish' },
	{ value: 'de', label: 'german' },
	{ value: 'el', label: 'greek' },
	{ value: 'es', label: 'spanish' },
	{ value: 'et', label: 'estonian' },
	{ value: 'fi', label: 'finnish' },
	{ value: 'fr', label: 'french' },
	{ value: 'hu', label: 'hungarian' },
	{ value: 'it', label: 'italian' },
	{ value: 'ja', label: 'japanese' },
	{ value: 'lt', label: 'lithuanian' },
	{ value: 'lv', label: 'latvian' },
	{ value: 'nl', label: 'dutch' },
	{ value: 'pl', label: 'polish' },
	{ value: 'pt', label: 'portuguese' },
	{ value: 'ro', label: 'romanian' },
	{ value: 'ru', label: 'russian' },
	{ value: 'sk', label: 'slovak' },
	{ value: 'sl', label: 'slovenian' },
	{ value: 'sv', label: 'swedish' },
	{ value: 'zh', label: 'chinese' }
];

export const LANGUAGE_CODES = [ 'bg', 'cs', 'da', 'de', 'el', 'es', 'et', 'fi', 'fr', 'hu', 'it', 'ja', 'lt', 'lv', 'nl', 'pl', 'pt', 'ro', 'ru', 'sk', 'sl', 'sv', 'zh' ];

export const languageLabel = ( code ) => {
	switch ( code ) {
	case 'en':
	default:
		return 'english';
	case 'bg':
		return 'bulgarian';
	case 'cs':
		return 'czech';
	case 'da':
		return 'danish';
	case 'de':
		return 'german';
	case 'el':
		return 'greek';
	case 'es':
		return 'spanish';
	case 'et':
		return 'estonian';
	case 'fi':
		return 'finnish';
	case 'fr':
		return 'french';
	case 'hu':
		return 'hungarian';
	case 'it':
		return 'italian';
	case 'ja':
		return 'japanese';
	case 'lt':
		return 'lithuanian';
	case 'lv':
		return 'latvian';
	case 'nl':
		return 'dutch';
	case 'pl':
		return 'polish';
	case 'pt':
		return 'portuguese';
	case 'ro':
		return 'romanian';
	case 'ru':
		return 'russian';
	case 'sk':
		return 'slovak';
	case 'sl':
		return 'slovenian';
	case 'sv':
		return 'swedish';
	case 'zh':
		return 'chinese';
	}
};

export const languageDescription = ( code ) => {
	switch ( code ) {
	case 'en':
	default:
		return 'English - EN';
	case 'bg':
		return 'Български - BG';
	case 'cs':
		return 'Česky - CS';
	case 'da':
		return 'Dansk - DA';
	case 'el':
		return 'Ελληνική - EL';
	case 'es':
		return 'Español - ES';
	case 'et':
		return 'Eesti - ET';
	case 'de':
		return 'Deutsch - DE';
	case 'fi':
		return 'Suomalainen - FI';
	case 'fr':
		return 'Français - FR';
	case 'hu':
		return 'Hungarian - HU';
	case 'it':
		return 'Italiano - IT';
	case 'ja':
		return 'にほんご - JA';
	case 'lt':
		return 'Lietuvių kalba - LT';
	case 'lv':
		return 'Latviešu - LV';
	case 'nl':
		return 'Nederlands - NL';
	case 'pl':
		return 'Polski - PL';
	case 'pt':
		return 'Porgtugês - PT';
	case 'ro':
		return 'Românesc - RO';
	case 'ru':
		return 'русский - RU';
	case 'sk':
		return 'Slovenská - SK';
	case 'sl':
		return 'Slovenski - SL';
	case 'sv':
		return 'Svenska - SV';
	case 'zh':
		return '中文 - ZH';
	}
};

export default LANGUAGES;
