// MODULES //

import htmlToPdfMake from 'html-to-pdfmake';
import replace from '@stdlib/string/replace';
import max from '@stdlib/math/base/special/max';


// VARIABLES //

const RE_WIDTH = /width: (.+)px/g;
const RE_IMG_TOOLTIP = /<pre class="img-tooltip">[\s\S]*?<\/pre>/g;


// FUNCTIONS //

/**
 * Returns an object of styles.
 *
 * @private
 * @param {number} customFontSize - custom font size
 * @param {boolean} poster - whether to return styles for a report
 * @returns {Object} styles object
 */
function makeSTYLES( customFontSize = 12, poster = false ) {
	// the 16 (html font) is x + 4 --> 12 font
	const pdfSize = customFontSize - 4;
	return (
		{
			'html-h1': {
				fontSize: pdfSize + 16,
				color: '#2e4468',
				bold: true,
				alignment: poster ? 'center' : null
			},
			'html-h2': {
				fontSize: pdfSize + 14,
				color: '#3c763d',
				bold: true,
				alignment: poster ? 'center' : null
			},
			'html-h3': {
				fontSize: pdfSize + 8,
				color: '#2e4468',
				bold: true,
				alignment: poster ? 'center' : null
			},
			'html-h4': {
				fontSize: pdfSize + 4,
				color: '#ca5800',
				bold: true,
				alignment: poster ? 'center' : null
			},
			'html-img': {
				alignment: 'center'
			},
			'html-table': {
				alignment: 'center'
			}
		}
	);
}

/**
 * Returns a boolean indicating whether the provided configuration is for a poster.
 *
 * @private
 * @param {Object} config - configuration object
 * @returns {boolean} whether the provided configuration is for a poster
 */
function isPoster( config ) {
	if (
		config.pageSize.width === 72 * 42 &&
		config.pageSize.height === 72 * 30
	) {
		return true;
	}
	return false;
}


// MAIN //

/**
 * Generates a PDF document object.
 *
 * @param {string} html - html of report
 * @param {Object} config - configuration object
 * @param {number} standardFontSize - standard font size
 * @param {number} editorWidth - editor width
 * @returns {Object} PDF document object
 */
function generatePDF( html, config, standardFontSize, editorWidth ) {
	const widthReplacer = ( match, p1 ) => {
		const width = parseFloat( p1 ) * max( config.pageSize.width / editorWidth, 1 );
		return `width: ${width}px`; // eslint-disable-line i18next/no-literal-string
	};
	html = replace( html, RE_WIDTH, widthReplacer );
	html = replace( html, RE_IMG_TOOLTIP, '' );
	const nodes = htmlToPdfMake( html, {
		defaultStyles: {
			img: ''
		}
	});
	const isPosterBool = isPoster( config );
	const doc = {
		styles: makeSTYLES( standardFontSize, isPosterBool ),
		pageSize: config.pageSize,
		pageOrientation: config.pageOrientation,
		defaultStyle: {
			fontSize: standardFontSize - 4
		},
		pageMargins: [ 40, 60, 40, 60 ] // left top right bottom
	};
	doc.content = nodes;
	return doc;
}


// EXPORTS //

export default generatePDF;
