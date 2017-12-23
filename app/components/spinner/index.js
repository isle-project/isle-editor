// MODULES //

import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import PI from '@stdlib/math/constants/float64-pi';


// MAIN //

class Spinner extends Component {
	constructor( props ) {
		super( props );

		this.startSpinner = () => {
			const canvas = findDOMNode( this );
			const context = canvas.getContext( '2d' );
			this.context = context;
			const start = new Date();
			const lines = this.props.lines;
			const cW = context.canvas.width;
			const cH = context.canvas.height;

			const draw = () => {
				const num = ( ( new Date() - start ) / 1000 ) * lines;
				const rotation = parseInt( num, 10 ) / lines;
				context.save();
				context.clearRect( 0, 0, cW, cH );
				context.translate( cW / 2.0, cH / 2.0 );
				context.rotate( PI * 2 * rotation );
				for ( let i = 0; i < lines; i++ ) {
					context.beginPath();
					context.rotate( PI * 2.0 / lines );
					context.moveTo( cW / 10, 0 );
					context.lineTo( cW / 4, 0 );
					context.lineWidth = cW / 30;
					context.strokeStyle = 'rgba(0, 0, 0,' + i / lines + ')';
					context.stroke();
				}
				context.restore();
			};
			this.activeSpinner = window.setInterval( draw, 50 );
		};
	}

	componentDidUpdate() {
		if ( this.activeSpinner && this.context.canvas ) {
			clearInterval( this.activeSpinner );
			this.context.clearRect( 0, 0, this.context.canvas.width, this.context.canvas.height );
		}
		if ( this.props.running === true ) {
			this.startSpinner();
		}
	}

	render() {
		return (
			<canvas
				style={{
					width: this.props.width,
					height: this.props.height,
					display: this.props.running ? this.props.display : 'none',
					margin: 'auto',
					...this.props.style
				}}
			/>
		);
	}
}


// DEFAULT PROPERTIES //

Spinner.defaultProps = {
	display: 'block',
	height: 64,
	lines: 16,
	style: {},
	width: 128
};


// PROPERTY TYPES //

Spinner.propTypes = {
	display: PropTypes.string,
	height: PropTypes.number,
	lines: PropTypes.number,
	running: PropTypes.bool.isRequired,
	style: PropTypes.object,
	width: PropTypes.number
};


// EXPORTS //

export default Spinner;
