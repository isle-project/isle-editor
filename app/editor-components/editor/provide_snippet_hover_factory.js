// MODULES //

import getLastOpenedTag from './get_last_opened_tag.js';
import COMPONENT_DOCS from '@isle-project/components/documentation.json';


// MAIN //

function factory( monaco ) {
	return provideHoverItems;

	function provideHoverItems( model, position ) {
		let word = model.getWordAtPosition( position );
		word = word && word.word;
		if ( !word ) {
			return null;
		}
		const contents = [];
		const doc = COMPONENT_DOCS[ word ];
		if ( doc ) {
			contents.push({
				value: `__${word}__: ${doc.description}`
			});
			return {
				contents
			};
		}
		const textUntilPosition = model.getValueInRange({
			startLineNumber: 0,
			startColumn: 1,
			endLineNumber: position.lineNumber,
			endColumn: position.column
		});
		const tag = getLastOpenedTag( textUntilPosition );
		if ( tag && tag.tagName && tag.inTagAttributes ) {
			const docs = COMPONENT_DOCS[ tag.tagName ];
			if ( docs && !tag.inAttribute ) {
				for ( let i = 0; i < docs.props.length; i++ ) {
					const prop = docs.props[ i ];
					if ( prop.name === word ) {
						contents.push({
							value: `__${prop.name}__: ${prop.description}`
						});
						contents.push({
							value: `__type__: _${prop.type}_`
						});
					}
				}
				return {
					contents
				};
			}
		}
		return null;
	}
}


// EXPORTS //

export default factory;
