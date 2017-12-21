// MODULES //

import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import landscape from '@stdlib/datasets/img-french-alpine-landscape';
import boats from '@stdlib/datasets/img-nagasaki-boats';
import airplane from '@stdlib/datasets/img-airplane-from-above';
import abs from '@stdlib/math/base/special/abs';
import CheckboxInput from 'components/input/checkbox';
import SelectInput from 'components/input/select';


// MAIN //

class ImagePixelPicker extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			clickedGrayscale: false,
			selectedData: false
		};
	}

	invert = () => {
		for ( let i = 0; i < this.data.length; i += 4 ) {
			this.data[ i ]     = 255 - this.data[ i ];     // red
			this.data[ i + 1 ] = 255 - this.data[ i + 1 ]; // green
			this.data[ i + 2 ] = 255 - this.data[ i + 2 ]; // blue
		}
		this.ctx.putImageData( this.imageData, 0, 0 );
	}

	grayscale = () => {
		for ( let i = 0; i < this.data.length; i += 4 ) {
			const avg = ( this.data[ i ] + this.data[ i + 1 ] + this.data[ i + 2 ]) / 3;
			this.data[ i ]     = avg; // red
			this.data[ i + 1 ] = avg; // green
			this.data[ i + 2 ] = avg; // blue
		}
		this.ctx.putImageData( this.imageData, 0, 0 );
		this.setState({
			clickedGrayscale: true
		});
	}

	drawImage = ( name ) => {
		const image = new Image();
		const canvas = document.getElementById( 'picker' );
		canvas.addEventListener( 'mousemove', this.handleMouseMove );
		this.canvas = canvas;

		this.ctx = canvas.getContext( '2d' );
		image.onload = () => {
			this.ctx.drawImage( image, 0, 0 );
			this.imageData = this.ctx.getImageData( 0, 0, canvas.width, canvas.height );
			this.data = this.imageData.data;
		};
		let buf;
		switch ( name ) {
		case 'Landscape':
		default:
			buf = landscape();
			break;
		case 'Boats':
			buf = boats();
			break;
		case 'Airplane':
			buf = airplane();
			break;
		}

		image.src = `data:image/jpeg;base64,${buf.toString( 'base64' )}`;
		const zoomctx = document.getElementById( 'zoom' ).getContext( '2d' );
		zoomctx.imageSmoothingEnabled = false;
		zoomctx.mozImageSmoothingEnabled = false;
		zoomctx.webkitImageSmoothingEnabled = false;
		zoomctx.msImageSmoothingEnabled = false;
		this.zoomctx = zoomctx;
		this.setState({
			selectedData: true,
			clickedGrayscale: false
		});
	}

	handleMouseMove = ( event ) => {
		const x = event.layerX;
		const y = event.layerY;
		const pixel = this.ctx.getImageData( x, y, 1, 1 );
		const data = pixel.data;
		const rgba = 'rgba(' + data[ 0 ] + ', ' + data[ 1 ] +
					', ' + data[ 2 ] + ', ' + ( data[ 3 ] / 255 ) + ')';
		const color = document.getElementById( 'color' );
		color.style.background = rgba;
		color.textContent = rgba;
		this.zoomctx.drawImage( this.canvas,
			abs( x - 5 ),
			abs( y - 5 ),
			10, 10,
			0, 0,
			200, 200
		);
	}

	render() {
		return (
			<div>
				<div>
					<SelectInput
						options={[ 'Landscape','Boats','Airplane' ]}
						onChange={this.drawImage}
					/>
					{ this.state.selectedData ?
						<span>
							<CheckboxInput inline
								disabled={this.state.clickedGrayscale}
								defaultValue={this.state.clickedGrayscale}
								legend="Grayscale" onChange={this.grayscale} />
							<CheckboxInput inline
								legend="Invert" onChange={this.invert} />
						</span> : null
					}
				</div>
				<Col md={8}>
					<canvas
						width="600" height="400"
						id="picker"
					/>
				</Col>
				<Col md={3}>
					<div
						id="color"
						style={{
							width: '250px',
							height: '50px',
							color: 'red'
						}}
					/>
					<canvas
						id="zoom"
						width="250" height="200"
					/>
				</Col>
			</div>
		);
	}
}


// EXPORTS //

export default ImagePixelPicker;
