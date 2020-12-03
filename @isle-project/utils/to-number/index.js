// MODULES //

import trim from '@stdlib/string/trim';


// MAIN //

function toNumber( val ) {
	val = trim( val );
	switch ( val ) {
	case 'zeroth':
	case 'zero':
	case '0':
		return 0;
	case 'first':
	case 'one':
	case '1':
		return 1;
	case 'second':
	case 'two':
	case '2':
		return 2;
	case 'third':
	case 'three':
	case '3':
		return 3;
	case 'fourth':
	case 'four':
	case '4':
		return 4;
	case 'fifth':
	case 'five':
	case '5':
		return 5;
	case 'sixth':
	case 'six':
	case '6':
		return 6;
	case 'sevent':
	case 'seven':
	case '7':
		return 7;
	case 'eighth':
	case 'eight':
	case '8':
		return 8;
	case 'ninth':
	case 'nine':
	case '9':
		return 9;
	case 'tenth':
	case 'ten':
	case '10':
		return 10;
	}
}


// EXPORTS //

export default toNumber;
