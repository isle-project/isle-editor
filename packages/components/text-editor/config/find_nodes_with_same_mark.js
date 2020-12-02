/*
* Adapted from: https://github.com/chanzuckerberg/czi-prosemirror/blob/master/src/findNodesWithSameMark.js
*
* MIT License
*
* Copyright (c) 2019 Chan Zuckerberg Initiative
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

// EXPORTS //

// If nodes within the same range have the same mark, returns the first node.
export default function findNodesWithSameMark(
	doc,
	from,
	to,
	markType
) {
	let ii = from;
	const finder = mark => mark.type === markType;
	let firstMark = null;
	let fromNode = null;
	let toNode = null;

	while (ii <= to) {
		const node = doc.nodeAt(ii);
		if (!node || !node.marks) {
			return null;
		}
		const mark = node.marks.find(finder);
		if (!mark) {
			return null;
		}
		if (firstMark && mark !== firstMark) {
			return null;
		}
		fromNode = fromNode || node;
		firstMark = firstMark || mark;
		toNode = node;
		ii++;
	}

	let fromPos = from;
	let toPos = to;

	let jj = 0;
	ii = from - 1;
	while (ii > jj) {
		const node = doc.nodeAt(ii);
		const mark = node && node.marks.find(finder);
		if (!mark || mark !== firstMark) {
			break;
		}
		fromPos = ii;
		fromNode = node;
		ii--;
	}

	ii = to + 1;
	jj = doc.nodeSize - 2;
	while (ii < jj) {
		const node = doc.nodeAt(ii);
		const mark = node && node.marks.find(finder);
		if (!mark || mark !== firstMark) {
			break;
		}
		toPos = ii;
		toNode = node;
		ii++;
	}
	return {
		mark: firstMark,
		from: {
			node: fromNode,
			pos: fromPos
		},
		to: {
			node: toNode,
			pos: toPos
		}
	};
}
