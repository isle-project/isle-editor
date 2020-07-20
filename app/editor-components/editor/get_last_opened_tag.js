// VARIABLES //

const RE_TAG = /<\/*(?=\S*)([a-zA-Z-]+)/g;
const RE_QUOTES = /"/g;
const RE_OPENING_BRACES = /{/g;
const RE_CLOSING_BRACES = /}/g;
const RE_LAST_ATTRIBUTE = /([a-z]+)=[^=]*?$/i;
const RE_CLOSING_ANGLE = /[^=]>/;


// FUNCTIONS //

function indexOfClosingAngle( text ) {
	return text.search( RE_CLOSING_ANGLE );
}


// MAIN //

/**
* Returns the last opened tag.
*
* ## Notes
*
* -   Code adapted from https://github.com/isimic413/monaco-editor-custom-intellisense/blob/master/sample-editor/completion-provider.js
*
* @author {Ivana Šimić}
* @license {MIT}
* @param {string} text - input text
* @returns {Object} object with `tagName` holding the name of the last opened tag and boolean `inTagAttributes` indicating whether we are inside the tag attributes or its children
*/
function getLastOpenedTag( text ) {
	const tags = text.match( RE_TAG );
	if ( !tags ) {
		return;
	}
	const closingTags = [];
	for ( let i = tags.length - 1; i >= 0; i-- ) {
		if ( tags[i].indexOf( '</' ) === 0 ) {
			closingTags.push( tags[i].substring( '</'.length ) );
		}
		else {
			// Get the last position of the tag:
			const tagPosition = text.lastIndexOf( tags[i] );
			const tag = tags[i].substring( '<'.length );
			const closingBracketIdx = text.indexOf( '/>', tagPosition );
			// If the tag wasn't closed...
			if ( closingBracketIdx === -1 ) {
				// If there are no closing tags or the current tag wasn't closed...
				if ( !closingTags.length || closingTags[closingTags.length - 1] !== tag ) {
					// We found our tag, but let's get the information if we are looking for a child element or an attribute:
					text = text.substring( tagPosition );
					const nOpeningBraces = text.match( RE_OPENING_BRACES ) || [];
					const nClosingBraces = text.match( RE_CLOSING_BRACES ) || [];
					const out = {
						tagName: tag,
						inTagAttributes: text.indexOf( '<' ) > indexOfClosingAngle( text ),
						inAttribute: (
							( text.match( RE_QUOTES ) || [] ).length % 2 === 1 ||
							nOpeningBraces.length - nClosingBraces.length >= 1
						)
					};
					if ( out.inAttribute ) {
						const match = text.match( RE_LAST_ATTRIBUTE );
						out.attributeName = match ? match[ 1 ] : null;
					}
					return out;
				}
				// Remove the last closed tag:
				closingTags.splice( closingTags.length - 1, 1 );
			}
			// Remove the last checked tag and continue processing the rest of the content:
			text = text.substring( 0, tagPosition );
		}
	}
}


// EXPORTS //

export default getLastOpenedTag;
