/* eslint-disable react/no-deprecated */

// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import SimpleMDE from 'simplemde';
import markdownIt from 'markdown-it';
import katex from 'markdown-it-katex';
import markdownSub from 'markdown-it-sub';
import markdownIns from 'markdown-it-ins';
import markdownContainer from 'markdown-it-container';
import FileSaver from 'file-saver';
import startsWith from '@stdlib/string/starts-with';
import endsWith from '@stdlib/string/ends-with';
import uppercase from '@stdlib/string/uppercase';
import removeLast from '@stdlib/string/remove-last';
import removeFirst from '@stdlib/string/remove-first';
import isEmptyObject from '@stdlib/assert/is-empty-object';
import 'simplemde/dist/simplemde.min.css';
import './instructor-notes.css';
import { clearInterval } from 'timers';


// VARIABLES //

const md = markdownIt({
	html: true,
	xhtmlOut: true,
	breaks: true,
	typographer: false
});
md.use( katex, {
	throwOnError: false,
	errorColor: '#cc0000'
});
md.use( markdownSub );
md.use( markdownContainer, 'center' );
md.use( markdownIns );


// FUNCTIONS //

function replacer( key, value ) {
	if ( key === 'origin' ) {
		return void 0;
	}
	if ( key === 'sticky' ) {
		return void 0;
	}
	return value;
}


// MAIN //

class InstructorNotes extends Component {
	constructor( props ) {
		super( props );

		var value = props.defaultValue;
		if ( props.id && props.autoSave ) {
			value = localStorage.getItem( props.id );
		}

		this.state = {
			change: {
				text: '',
				removed: ''
			},
			value: value
		};
	}

	componentDidMount() {
		this.interval = setInterval( this.handleAutosave, this.props.intervalTime );
		this.initializeEditor();
	}

	componentWillReceiveProps( nextProps ) {
		let newState = {};
		if ( nextProps.defaultValue !== this.props.defaultValue ) {
			newState.value = nextProps.defaultValue;
		}
		if ( !isEmptyObject( newState ) ) {
			this.setState( newState, () => {
				this.simplemde.toTextArea(); // Reset text area to remove SimpleMDE instance...
				this.initializeEditor();
			});
		}
	}

	componentDidUpdate() {
		this.simplemde.codemirror.refresh();
	}

	omponentWillUnmoun() {
		clearInterval( this.interval );
	}

	logChange() {
		const { change } = this.state;
		if ( change.origin && change.text.length > 0 ) {
			let origin = change.origin;
			if ( startsWith( origin, '+' ) ) {
				origin = removeFirst( origin );
			}
			if ( this.props.id ) {
				const { session } = this.context;
				session.log({
					id: this.props.id,
					type: 'INSTRUCTOR_NOTES_'+uppercase( origin ),
					value: JSON.stringify( change, replacer )
				});
			}
			return true;
		}
		return false;
	}

	initializeEditor() {
		this.simplemde = new SimpleMDE({
			element: this.simplemdeRef,
			initialValue: this.state.value,
			previewRender: this.previewRender,
			toolbar: this.createToolbar(),
			status: [ 'lines', 'words' ],
			indentWithTabs: false,
			tabSize: 2,
			...this.props.options
		});

		// Add event listeners:
		this.simplemde.codemirror.on( 'change', ( instance, change ) => {
			let obj = this.state.change;
			if ( !obj.origin ) {
				obj.origin = change.origin;
			}
			else if ( change.origin !== obj.origin ) {
				this.logChange();
				obj = {
					'text': '',
					'removed': ''
				};
			}
			if ( !obj.from ) {
				obj.from = change.from;
			} else {
				if ( change.from.line < obj.from.line ) {
					obj.from.line = change.from.line;
				}
				if ( change.from.ch < obj.from.ch ) {
					obj.from.ch = change.from.ch;
				}
			}
			if ( !obj.to || change.to.ch > obj.to.ch ) {
				obj.to = change.to;
			} else {
				if ( change.to.line > obj.to.line ) {
					obj.to.line = change.to.line;
				}
				if ( change.to.ch > obj.to.ch ) {
					obj.to.ch = change.to.ch;
				}
			}
			if ( change.origin === '+input' ) {
				obj.text += change.text.join( '\n' );
				obj.removed += change.removed.join( '\n' );
			}
			else if ( change.origin === '+delete' ) {
				obj.text += change.text.join( '\n' );
				obj.removed += change.removed.join( '\n' );
			}
			else if ( change.origin === 'paste' ) {
				obj.text += change.text.join( '\n' );
				obj.removed += change.removed.join( '\n' );
			}
			this.setState({
				change: obj,
				value: this.simplemde.value()
			}, () => {
				this.props.onChange( this.state.value );
			});
		});
	}

	handleAutosave = () => {
		if ( this.props.id ) {
			let text = this.state.value;
			localStorage.setItem( this.props.id, text );
			const logged = this.logChange();
			if ( logged ) {
				this.setState({
					change: {
						'text': []
					}
				});
			}
		}
	}

	handleFileSelect = ( evt ) => {
		const files = evt.target.files;
		const reader = new FileReader();
		reader.onload = () => {
			const text = reader.result;
			this.simplemde.codemirror.execCommand( 'selectAll' );
			this.simplemde.codemirror.replaceSelection( text );
		};
		reader.readAsText( files[ 0 ] );
	}

	createToolbar() {
		const toolbar = [
			'bold', 'italic', {
				name: 'underline',
				action: ( editor ) => {
					const cm = this.simplemde.codemirror;
					const start = '++';
					const end = '++';
					const startPoint = cm.getCursor( 'start' );
					const endPoint = cm.getCursor( 'end' );
					let text = cm.getSelection();
					if (
						startsWith( text, start ) &&
						endsWith( text, end )
					) {
						text = removeLast( text );
						text = removeLast( text );
						text = removeFirst( text );
						text = removeFirst( text );
						cm.replaceSelection( text );
					} else {
						const wrappedStart = {
							line: startPoint.line,
							ch: startPoint.ch - 2
						};
						const wrappedEnd = {
							line: endPoint.line,
							ch: endPoint.ch + 2
						};
						let wrapped = cm.getRange( wrappedStart, wrappedEnd );
						if (
							startsWith( wrapped, start ) &&
							endsWith( wrapped, end )
						) {
							cm.replaceRange( text, wrappedStart, wrappedEnd );
						} else {
							text = text.split( '++' ).join( '' );
							cm.replaceSelection( start + text + end );

							startPoint.ch += 2;
							endPoint.ch = startPoint.ch + text.length;
							cm.setSelection( startPoint, endPoint );
						}
					}
					cm.focus();
				},
				className: 'fa fa-underline',
				title: 'Underline Text'
			},
			{
				name: 'newLine',
				action: ( editor ) => {
					const cm = this.simplemde.codemirror;
					// When we get the cursor we want to get the head
					// Add the newline to the left of the cursor
					const startPoint = cm.getCursor( 'start' );
					const endPoint = cm.getCursor( 'end' );
					while (startPoint.line !== endPoint.line) {
						var currentLine = cm.getLine(startPoint.line);
						if ( endsWith(currentLine, '\\') ) {
							cm.replaceRange( removeLast(currentLine),
								{ line: startPoint.line, ch: 0 },
								{ line: startPoint.line, ch: 99999999999999 }
							);
						} else {
							cm.replaceRange(currentLine + '\\',
								{ line: startPoint.line, ch: 0 },
								{ line: startPoint.line, ch: 99999999999999 }
							);
						}
						startPoint.line += 1;
					}
					cm.focus();
				},
				className: 'fa fa-arrow-down',
				title: 'Add new line separator'
			},
			{
				name: 'center',
				action: ( editor ) => {
					const cm = this.simplemde.codemirror;
					const start = '::: center';
					const end = ':::';
					const startPoint = cm.getCursor( 'start' );
					const endPoint = cm.getCursor( 'end' );

					const startLine = cm.getLine( startPoint.line );
					const endLine = cm.getLine( endPoint.line );
					const prevLine = cm.getLine( startPoint.line - 1 );
					const nextLine = cm.getLine( endPoint.line + 1 );
					if (
						startsWith( startLine, '::: center' ) &&
						startsWith( endLine, ':::' )
					) {
						cm.replaceRange( '',
							{ line: startPoint.line, ch: 0 },
							{ line: startPoint.line, ch: 99999999999999 }
						);
						cm.replaceRange( '',
							{ line: endPoint.line, ch: 0 },
							{ line: endPoint.line, ch: 99999999999999 }
						);
					}
					else if (
						prevLine && nextLine &&
						startsWith( prevLine, '::: center' ) &&
						startsWith( nextLine, ':::' )
					) {
						cm.replaceRange( '',
							{ line: startPoint.line - 1, ch: 0 },
							{ line: startPoint.line - 1, ch: 99999999999999 }
						);
						cm.replaceRange( '',
							{ line: endPoint.line + 1, ch: 0 },
							{ line: endPoint.line + 1, ch: 99999999999999 }
						);
					}
					else {
						let text = cm.getSelection();
						text = text.split( ':::' ).join( '' );
						cm.replaceSelection( start + '\n' + text + '\n' + end );

						startPoint.ch = 0;
						endPoint.ch = 3;
						endPoint.line += 2;
						cm.setSelection( startPoint, endPoint );
						cm.focus();
					}
				},
				className: 'fa fa-align-center',
				title: 'Center Element'
			}, '|',
			{
				name: 'insert_new_table',
				action: ( editor ) => {
					const cm = this.simplemde.codemirror;
					const tbl = '| Column1 | Column2 |\n| --- | --- |\n| Row1.1 | Row1.2 |\n| Row2.1 | Row2.2 |';
					const startPoint = cm.getCursor( 'start' );
					cm.replaceRange( tbl,
						{ line: startPoint.line, ch: 0 },
						{ line: startPoint.line, ch: 99999999999999 }
					);
					startPoint.line += 4;
					cm.focus();
				},
				className: 'fa fa-table',
				title: 'Insert Table'
			}, 'heading', 'unordered-list', 'ordered-list', 'link', '|', 'preview', '|'
		];
		toolbar.push({
			name: 'open_markdown',
			action: (editor) => {
				const input = document.createElement( 'input' );
				input.type = 'file';
				input.accept = '.md';
				input.addEventListener( 'change', this.handleFileSelect, false );
				input.click();
			},
			className: 'fa fa-folder-open',
			title: 'Open Markdown File'
		});
		toolbar.push({
			name: 'save',
			action: ( editor ) => {
				this.context.session.addNotification({
					title: 'Notes saved',
					message: 'Notes have been saved in the local storage of the current browser.',
					level: 'success',
					position: 'tr',
					action: {
						label: 'Save Markdown File',
						callback: () => {
							this.saveMarkdown();
						}
					}
				});
				this.handleAutosave();
			},
			className: 'fa fa-save',
			title: 'Save Notes'
		});
		return toolbar;
	}

	previewRender = ( plainText ) => {
		return md.render( plainText );
	}

	saveMarkdown = () => {
		const title = document.title+'_notes' || 'notes';
		const text = this.simplemde.value();
		const blob = new Blob([ text ], {
			type: 'text/html'
		});
		FileSaver.saveAs( blob, title+'.md' );
	}

	render() {
		return (
			<Fragment>
				<div className="instructor-notes">
					<textarea ref={( area ) => { this.simplemdeRef = area; }} autoComplete="off" {...this.props.options} />
				</div>
			</Fragment>
		);
	}
}


// DEFAULT PROPERTIES //

InstructorNotes.defaultProps = {
	autoSave: true,
	defaultValue: '',
	intervalTime: 60000,
	onChange() {},
	options: {}
};


// PROPERTY TYPES //

InstructorNotes.propTypes = {
	autoSave: PropTypes.bool,
	defaultValue: PropTypes.string,
	intervalTime: PropTypes.number,
	onChange: PropTypes.func,
	options: PropTypes.object
};

InstructorNotes.contextTypes = {
	session: PropTypes.object
};


// EXPORTS //

export default InstructorNotes;
