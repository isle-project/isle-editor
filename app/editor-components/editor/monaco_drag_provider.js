// MODULES //

import React from 'react';


// MAIN //

class MonacoDragNDropProvider {
	constructor( onDrop, editor, monaco, dropClassName = 'drop' ) {
		this.dropClassName = dropClassName;
		this.onDropHandler = onDrop;
		this.editor = editor;
		this.monaco = monaco;
	}

	onDrop = ( e ) => {
		if ( this.onDropHandler ) {
			this.onDropHandler( e, this.dragTarget, this.editor );
		}
		this.removeMouseDownWidget();
	};

	onDragOver = ( e ) => {
		const ins = this.editor;
		if ( ins ) {
			this.displayMouseDropPosition( ins, ins.getTargetAtClientPoint( e.clientX, e.clientY ) );
		}
		e.preventDefault();
	};

	removeMouseDownWidget = () => {
		const instance = this.editor;
		if ( instance && this.mouseDropWidget && this.domNode ) {
			instance.removeContentWidget( this.mouseDropWidget );
			this.mouseDropWidget = null;
		}
	};

	props = {
		onDragOver: this.onDragOver,
		onDropCapture: this.onDrop,
		onDragLeaveCapture: this.removeMouseDownWidget
	};

	buildMouseDropWidget = () => {
		if ( !this.domNode ) {
			this.domNode = document.createElement( 'div' );
			this.domNode.className = this.dropClassName;
			this.domNode.style.pointerEvents = 'none';
			this.domNode.style.borderLeft = '2px solid #ccc';
			this.domNode.innerHTML = '&nbsp;';
		}
		const { ContentWidgetPositionPreference } = this.monaco.editor;
		return {
			getId: () => 'drag',
			getDomNode: () => this.domNode,
			getPosition: () => ({
				position: this.dragTarget.position,
				preference: [ ContentWidgetPositionPreference.EXACT, ContentWidgetPositionPreference.EXACT]
			})
		};
	};

	displayMouseDropPosition = ( instance, target ) => {
		this.dragTarget = target;
		if ( this.mouseDropWidget ) {
			instance.layoutContentWidget( this.mouseDropWidget );
		} else {
			this.mouseDropWidget = this.buildMouseDropWidget();
			instance.addContentWidget( this.mouseDropWidget );
		}
	};
}


// EXPORTS //

export default MonacoDragNDropProvider;
