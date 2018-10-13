// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/lib/Button';
import VictoryChart from 'components/victory/chart';
import saveAs from 'utils/file-saver';
import Tooltip from 'components/tooltip';
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
		}} style={{ position: 'relative' }}>
			<Tooltip placement="left" tooltip="Save Plot" >
				<Button size="sm" variant="light" onClick={this.saveToPNG} style={{
						position: 'absolute',
						right: -12,
						top: -12,
						zIndex: 2
					}}
				>
					<div className="fa fa-save" />
				</Button>
			</Tooltip>
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
