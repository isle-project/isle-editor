// MODULES //

import {
	ellipsis,
	emDash,
	inputRules,
	smartQuotes,
	textblockTypeInputRule,
	wrappingInputRule,
	InputRule
} from 'prosemirror-inputrules';
import schema from './schema';


// FUNCTIONS //

function markInputRule( regexp, markType, getAttrs ) {
	return new InputRule(regexp, (state, match, start, end) => {
		let attrs = getAttrs instanceof Function ? getAttrs( match ) : getAttrs;
		let tr = state.tr;
		if ( match[1] ) {
			let textStart = start + match[0].indexOf(match[1]);
			let textEnd = textStart + match[1].length;
			if (textEnd < end) tr.delete(textEnd, end);
			if (textStart > start) tr.delete(start, textStart);
			end = start + match[1].length;
		}
		tr.addMark(start, end, markType.create(attrs));
		tr.removeStoredMark( markType );
		return tr;
	});
}


// MAIN //

const main = inputRules({
	rules: [
		...smartQuotes,
		ellipsis,
		emDash,

		// > blockquote
		wrappingInputRule(/^\s*>\s$/, schema.nodes.blockquote),

		// 1. ordered list
		wrappingInputRule(
			/^(\d+)\.\s$/,
			schema.nodes.ordered_list,
			match => ({ order: +match[1] }),
			(match, node) => node.childCount + node.attrs.order === +match[1],
		),

		// * bullet list
		wrappingInputRule( /^\s*([-+*])\s$/, schema.nodes.bullet_list ),

		// ``` code block
		textblockTypeInputRule( /^```$/, schema.nodes.code_block ),

		// ` inline code
		markInputRule( /(?:^|[^`])`([^`]+)`$/, schema.marks.code ),

		// strong
		markInputRule( /(?:\*\*|__)([^*_]+)(?:\*\*|__)$/, schema.marks.strong ),

		// emphasis
		markInputRule( /(?:^|[^*_])(?:\*|_)([^*_]+)(?:\*|_)$/, schema.marks.em ),

		// underline
		markInputRule( /(?:\+\+)([^+]+)(?:\+\+)$/, schema.marks.underline ),

		// strikethrough
		markInputRule( /(?:~~)([^~]+)(?:~~)$/, schema.marks.strikethrough ),

		// # heading
		textblockTypeInputRule(
			new RegExp('^(#{1,6})\\s$'),
			schema.nodes.heading,
			match => ({ level: match[1].length }),
		)
	]
});


// EXPORTS //

export default main;
