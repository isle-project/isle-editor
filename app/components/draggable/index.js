// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import ReactDraggable from 'react-draggable';
import KeyControls from 'components/key-controls';
import './draggable.css';


// FUNCTIONS //

/* Inspired by snippet shared by Jeremy Crane at: https://github.com/mzabriskie/react-draggable/issues/402 */
function onDraggableStop( event ) {
	const prevWindow = document.getElementsByClassName( 'react-draggable-last' );
	if ( event.path ) {
		const newWindow = event.path[ 3 ];
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

	render() {
		return (
			<Fragment>
				<ReactDraggable
					{...this.props}
					onStop={this.handleStop}
				>
					{this.props.children}
				</ReactDraggable>
				<KeyControls
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
	onStop: PropTypes.func,
	onEscape: PropTypes.func
};

Draggable.defaultProps = {
	onStop() {},
	onEscape() {}
};


// EXPORTS //

export default Draggable;
