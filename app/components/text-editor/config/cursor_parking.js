/*
* Code adapted from https://discuss.prosemirror.net/t/cursor-parking-a-tool-to-help-handle-native-browser-issues/2107 by jessejorgenson.
*/

// MODULES //

import { Plugin, PluginKey } from 'prosemirror-state';


// VARIABLES //

export const pluginKey = new PluginKey( 'cursor-parking');


// EXPORTS //

export default () =>
	new Plugin({
		key: pluginKey,
		state: {
			init() {
				return {
					inCursorParking: false,
					storedMarks: null,
					bookmarkToRestore: null
				};
			},
			apply(tr, prevState) {
				const meta = tr.getMeta(this);
				if (meta) {
					if (meta.inCursorParking) {
						return {
							inCursorParking: true,
							storedMarks: tr.storedMarks,
							bookmarkToRestore: tr.selection.getBookmark()
						};
					}
					return {
						inCursorParking: false,
						storedMarks: null,
						bookmarkToRestore: null
					};
				}
				if (
					tr.docChanged &&
					prevState.inCursorParking &&
					prevState.bookmarkToRestore
				) {
					return {
						inCursorParking: true,
						storedMarks: prevState.storedMarks,
						bookmarkToRestore: prevState.bookmarkToRestore.map(tr.mapping)
					};
				}
				return prevState;
			}
		},
		view() {
			const cursorParking = document.createElement( 'cursor-parking' );
			cursorParking.setAttribute(
				'style',
				'width:1px;height:1px;top:-9999px;left:-9999px;position:absolute'
			);
			cursorParking.setAttribute( 'tabIndex', '-1' );
			cursorParking.setAttribute( 'contenteditable', 'true' );

			const selectCursorParkingContent = () => {
				const range = document.createRange();
				range.selectNodeContents(cursorParking.firstChild);
				const sel = window.getSelection();
				sel.removeAllRanges();
				sel.addRange(range);
			};
			const reinitializeCursorParkingContent = () => {
				cursorParking.innerHTML = '<div><br/></div>';
			};
			reinitializeCursorParkingContent();
			document.body.appendChild(cursorParking);
			return {
				update(view, prevState) {
					const prevInputState = pluginKey.getState(prevState);
					const inputState = pluginKey.getState(view.state);
					if (!prevInputState.inCursorParking && inputState.inCursorParking) {
						selectCursorParkingContent();
					}
					if (prevInputState.inCursorParking && !inputState.inCursorParking) {
						const {
							dispatch,
							state: { tr }
						} = view;
						if (prevInputState.bookmarkToRestore) {
							tr.setSelection(prevInputState.bookmarkToRestore.resolve(tr.doc));
						}
						if (prevInputState.storedMarks) {
							tr.setStoredMarks(prevInputState.storedMarks);
						}
						view.focus();
						dispatch(tr);
						reinitializeCursorParkingContent();
					}
				},
				destroy() {
					cursorParking.remove();
				}
			};
		}
	});

// If you just need a quick toggle
export const toggleCursorParking = async view => {
	view.dispatch(
		view.state.tr.setMeta(pluginKey, {
			inCursorParking: true
		})
	);
	await new Promise(resolve => setTimeout(resolve, 0));
	view.dispatch(
		view.state.tr.setMeta(pluginKey, {
			inCursorParking: false
		})
	);
};
