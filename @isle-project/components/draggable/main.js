// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Rnd } from 'react-rnd';
import { Portal } from 'react-portal';
import omit from '@stdlib/utils/omit';
import KeyControls from '@isle-project/components/key-controls';
import './draggable.css';


// VARIABLES //

const ENABLE_RESIZING = {
	bottom: true,
	bottomLeft: true,
	bottomRight: true,
	left: true,
	right: true,
	top: true,
	topLeft: true,
	topRight: true
};


// FUNCTIONS //

/* Inspired by snippet shared by Jeremy Crane at: https://github.com/mzabriskie/react-draggable/issues/402 */
function onDraggableStop( event ) {
	const prevWindow = document.getElementsByClassName( 'react-draggable-last' );
	if ( event.path ) {
		let newWindow = event.path[ 1 ];
		for ( let i = 0; i < event.path.length; i++ ) {
			const elem = event.path[ i ];
			if ( elem.classList && elem.classList.contains( 'react-draggable-dragged' ) ) {
				newWindow = elem;
				break;
			}
		}
		setTimeout( () => {
			if ( prevWindow ) {
				for ( let i = 0; i < prevWindow.length; i++) {
					prevWindow[ i ].classList.remove( 'react-draggable-last' );
				}
			}
			newWindow.classList.add( 'react-draggable-last' );
		}, 0 );
	}
}


// MAIN //

/**
* A component for making a child component draggable and optionally resizable.
*
* @property {boolean} disabled - whether dragging should be disabled
* @property {boolean} resizable - whether resize handlers should be attached to the edges of the child element
* @property {Object} default - object with `width` and `height` property for default size and `x` and `y` for default positioning of the component
* @property {Object} position - object with `x` and `y` position numbers ( for controlled component )
* @property {Function} onStop - event handler called when dragging is stopped
* @property {Function} onEscape - event handler called when the escape key is pressed
* @property {Object} style - CSS inline styles
*/
class Draggable extends Component {
	handleStop = ( event, data ) => {
		onDraggableStop( event );
		this.props.onStop( event, data );
	};

	handleEscape = ( event ) => {
		this.props.onEscape( event );
	};

	updateSize = ({ width, height }) => {
		this.container.updateSize({ width, height });
	};

	render() {
		const dndProps = omit( this.props, [ 'onStop', 'onEscape' ] );
		let cancel = 'button, .btn, .nav';
		if ( dndProps.cancel ) {
			cancel += ', '+dndProps.cancel;
		}
		return (
			<Portal
				node={document.body}
			>
				<Rnd
					{...dndProps}
					cancel={cancel}
					onDragStop={this.handleStop}
					ref={( div ) => {
						this.container = div;
					}}
					default={{
						x: window.pageXOffset + 30,
						y: window.pageYOffset + 30,
						...this.props.default
					}}
					position={this.props.position}
					enableResizing={this.props.resizable ? ENABLE_RESIZING : false}
					enableUserSelectHack={false}
					style={{
						position: 'fixed',
						...this.props.style
					}}
					disableDragging={this.props.disabled}
				>
					{this.props.children}
				</Rnd>
				<KeyControls
					container={this.container}
					actions={{
						'Escape': this.handleEscape
					}}
				/>
			</Portal>
		);
	}
}


// PROPERTIES //

Draggable.propTypes = {
	disabled: PropTypes.bool,
	resizable: PropTypes.bool,
	position: PropTypes.shape({
		x: PropTypes.number,
		y: PropTypes.number
	}),
	style: PropTypes.object,
	onEscape: PropTypes.func,
	onStop: PropTypes.func
};

Draggable.defaultProps = {
	disabled: false,
	resizable: false,
	position: null,
	style: {},
	onEscape() {},
	onStop() {}
};


// EXPORTS //

export default Draggable;
