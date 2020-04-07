// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Rnd } from 'react-rnd';
import KeyControls from 'components/key-controls';
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

class Draggable extends Component {
	handleStop = ( event, data ) => {
		onDraggableStop( event );
		this.props.onStop( event, data );
	}

	handleEscape = ( event ) => {
		this.props.onEscape( event );
	}

	updateSize = ({ width, height }) => {
		this.container.updateSize({ width, height });
	}

	render() {
		return (
			<Fragment>
				<Rnd
					{...this.props}
					onDragStop={this.handleStop}
					ref={( div ) => {
						this.container = div;
					}}
					default={{
						x: window.pageXOffset + 50,
						y: window.pageYOffset + 30,
						...this.props.default
					}}
					enableResizing={this.props.resizable ? ENABLE_RESIZING : false}
					enableUserSelectHack={false}
					style={{
						position: 'fixed',
						...this.props.style
					}}
				>
					{this.props.children}
				</Rnd>
				<KeyControls
					container={this.container}
					actions={{
						'Escape': this.handleEscape
					}}
				/>
			</Fragment>
		);
	}
}


// PROPERTIES //

Draggable.propTypes = {
	resizable: PropTypes.bool,
	onStop: PropTypes.func,
	onEscape: PropTypes.func
};

Draggable.defaultProps = {
	resizable: false,
	onStop() {},
	onEscape() {}
};


// EXPORTS //

export default Draggable;
