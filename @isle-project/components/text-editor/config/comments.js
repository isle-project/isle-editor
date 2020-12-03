/**
* Adapted from MIT-licensed code.
*/

/**
* Copyright (C) 2015-2017 by Marijn Haverbeke <marijnh@gmail.com> and others
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in
* all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
* THE SOFTWARE.
*/

// MODULES //

import { Plugin } from 'prosemirror-state';
import { Decoration, DecorationSet } from 'prosemirror-view';


// MAIN //

class Comment {
	constructor( text, id ) {
		this.id = id;
		this.text = text;
	}
}

function deco( from, to, comment ) {
	return Decoration.inline( from, to, { class: 'comment' }, { comment });
}

class CommentState {
	constructor( version, decos, unsent ) {
		this.version = version;
		this.decos = decos;
		this.unsent = unsent;
	}

	findComment( id ) {
		let current = this.decos.find();
		for ( let i = 0; i < current.length; i++ ) {
			if ( current[ i ].spec.comment.id === id ) {
				return current[ i ];
			}
		}
	}

	commentsAt( pos ) {
		return this.decos.find( pos, pos );
	}

	apply( tr ) {
		let action = tr.getMeta( commentPlugin ); // eslint-disable-line no-use-before-define
		let actionType = action && action.type;
		if ( !action && !tr.docChanged ) {
			return this;
		}
		let base = this; // eslint-disable-line consistent-this
		if ( actionType === 'receive' ) {
			base = base.receive( action, tr.doc );
		}
		let decos = base.decos;
		let unsent = base.unsent;
		decos = decos.map( tr.mapping, tr.doc );
		if ( actionType === 'newComment' ) {
			decos = decos.add( tr.doc, [deco(action.from, action.to, action.comment)] );
			unsent = unsent.concat( action );
		} else if ( actionType === 'deleteComment' ) {
			decos = decos.remove([ this.findComment( action.comment.id ) ]);
			unsent = unsent.concat( action );
		}
		return new CommentState( base.version, decos, unsent );
	}

	receive({ version, events, sent }, doc ) {
		let set = this.decos;
		for (let i = 0; i < events.length; i++) {
			let event = events[ i ];
			if ( event.type === 'delete' ) {
				let found = this.findComment( event.id );
				if (found) set = set.remove([ found ]);
			} else if ( !this.findComment( event.id ) ) {
				// type === 'create'
				set = set.add( doc, [
					deco( event.from, event.to, new Comment( event.text, event.id ) )
				]);
			}
		}
		return new CommentState( version, set, this.unsent.slice( sent ) );
	}

	unsentEvents() {
		let result = [];
		for ( let i = 0; i < this.unsent.length; i++ ) {
			let action = this.unsent[i];
			if ( action.type === 'newComment' ) {
				let found = this.findComment( action.comment.id );
				if ( found ) {
					result.push({
						type: 'create',
						id: action.comment.id,
						from: found.from,
						to: found.to,
						text: action.comment.text
					});
				}
			} else {
				result.push({ type: 'delete', id: action.comment.id });
			}
		}
		return result;
	}

	static init( config ) {
		let decos = config.comments.comments.map( c => deco( c.from, c.to, new Comment(c.text, c.id) ) );
		return new CommentState( config.comments.version, DecorationSet.create( config.doc, decos ), []);
	}
}

export const commentPlugin = new Plugin({
	state: {
		init: CommentState.init,
		apply( tr, prev ) {
			return prev.apply( tr );
		}
	},
	props: {
		decorations( state ) {
			return this.getState( state ).decos;
		}
	}
});

function randomID() {
	return Math.floor(Math.random() * 0xffffffff );
}

// Command for adding an annotation
export const addAnnotation = ( state, dispatch ) => {
	let sel = state.selection;
	if ( sel.empty ) {
		return false;
	}
	if ( dispatch ) {
		let text = prompt( 'Annotation text', '' );
		if ( text ) {
			dispatch( state.tr.setMeta( commentPlugin, {
				type: 'newComment',
				from: sel.from,
				to: sel.to,
				comment: new Comment( text, randomID() )
			}));
		}
	}
	return true;
};

// Comment UI

export const commentUI = (dispatch ) => {
	return new Plugin({
		props: {
			decorations( state ) {
				return commentTooltip( state, dispatch );
			}
		}
	});
};

function commentTooltip( state, dispatch ) {
	let sel = state.selection;
	if ( !sel.empty ) {
		return null;
	}
	let comments = commentPlugin.getState(state).commentsAt(sel.from);
	if ( !comments.length ) {
		return null;
	}
	return DecorationSet.create( state.doc, [
		Decoration.widget( sel.from, renderComments(comments, dispatch, state ) )
	]);
}

function renderComments( comments, dispatch, state ) {
	const div = document.createElement( 'div' );
	div.className = 'tooltip-wrapper';
	const ul = document.createElement( 'ul' );
	ul.className = 'commentList';
	for ( let i = 0; i < comments.length; i++ ) {
		const c = comments[ i ];
		const li = renderComment( c.spec.comment, dispatch, state);
		ul.appendChild( li );
	}
	div.appendChild( ul );
	return div;
}

function renderComment( comment, dispatch, state ) {
	const btn = document.createElement( 'button' );
	btn.className = 'commentDelete';
	btn.title = 'Delete annotation';
	btn.innerHTML = 'x';
	btn.addEventListener( 'click', () =>
		dispatch( state.tr.setMeta(commentPlugin, {
			type: 'deleteComment', comment
		}))
	);
	const li = document.createElement( 'li' );
	li.className = 'commentText';
	li.innerHTML = comment.text;
	li.appendChild( btn );
	return li;
}
