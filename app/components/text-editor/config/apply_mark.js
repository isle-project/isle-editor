/*
* Adapted from: https://github.com/chanzuckerberg/czi-prosemirror/blob/master/src/applyMark.js
*
* MIT License
*
* Copyright (c) 2018 Chan Zuckerberg Initiative
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/


// FUNCTIONS //

function markApplies( doc, ranges, type ) {
	for ( let i = 0; i < ranges.length; i++ ) {
		const { $from, $to } = ranges[i];
		let can = $from.depth === 0 ? doc.type.allowsMarkType( type ) : false;
		doc.nodesBetween( $from.pos, $to.pos, node => {
			if ( can ) {
				return false;
			}
			can = node.inlineContent && node.type.allowsMarkType( type );
			return true;
		});
		if ( can ) {
			return true;
		}
	}
	return false;
}


// MAIN //

// https://github.com/ProseMirror/prosemirror-commands/blob/master/src/commands.js
function applyMark(
	tr,
	schema,
	markType,
	attrs
) {
	if (!tr.selection || !tr.doc || !markType) {
		return tr;
	}
	const { empty, $cursor, ranges } = tr.selection;
	if ((empty && !$cursor) || !markApplies(tr.doc, ranges, markType)) {
		return tr;
	}

	if ( $cursor ) {
		tr = tr.removeStoredMark( markType );
		return attrs ? tr.addStoredMark( markType.create( attrs ) ) : tr;
	}
	let has = false;
	for ( let i = 0; !has && i < ranges.length; i++ ) {
		const { $from, $to } = ranges[i];
		has = tr.doc.rangeHasMark($from.pos, $to.pos, markType);
	}
	for ( let i = 0; i < ranges.length; i++ ) {
		const { $from, $to } = ranges[i];
		if ( has ) {
			tr = tr.removeMark( $from.pos, $to.pos, markType );
		}
		if ( attrs ) {
			tr = tr.addMark( $from.pos, $to.pos, markType.create( attrs ) );
		}
	}
	return tr;
}


// EXPORTS //

export default applyMark;
