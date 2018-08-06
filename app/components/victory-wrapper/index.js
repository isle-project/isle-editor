// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/lib/Button';
import { VictoryChart } from 'victory';
import saveAs from 'utils/file-saver';
import { svgString2Image, getSVGString } from 'utils/svg';


// MAIN //

class VictoryWrapper extends Component {
	saveToPNG = () => {
		let { width, height } = this.props;
		width = width || 350;
		height = height || 250;
		const svgs = this.victoryWrapper.getElementsByTagName( 'svg' );
		const svgString = getSVGString( svgs[ 0 ] );
		svgString2Image( svgString, 2.0*width, 2.0*height, 'png', save );

		let name;
		if ( this.props.id ) {
			name = this.props.id+'.png';
		} else {
			name = 'plot.png';
		}
		function save( dataBlob, filesize ) {
			saveAs( dataBlob, name );
		}
	}

	render() {
		return ( <div ref={( div ) => {
			this.victoryWrapper = div;
		}}>
			<Button bsSize="xsmall" onClick={this.saveToPNG} style={{
				position: 'relative',
				top: '0px',
				left: '5px'
			}}>Save Image</Button>
			<VictoryChart {...this.props}>{this.props.children}</VictoryChart>
		</div> );
	}
}

// TYPES //

VictoryWrapper.propTypes = {
	height: PropTypes.number,
	width: PropTypes.number
};

VictoryWrapper.defaultProps = {
	height: null,
	width: null
};


// EXPORTS //

export default VictoryWrapper;
