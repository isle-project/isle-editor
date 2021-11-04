// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import Button from 'react-bootstrap/Button';
import VictoryChart from '@isle-project/components/victory/chart';
import saveAs from '@isle-project/utils/file-saver';
import Tooltip from '@isle-project/components/tooltip';
import { svgString2Image, getSVGString } from '@isle-project/utils/svg';


// VARIABLES //

const BUTTON_STYLE = {
	position: 'absolute',
	right: -12,
	top: -12,
	zIndex: 2
};


// MAIN //

/**
* Wrapper for Victory plots.
*
* @property {number} height - height in pixels
* @property {number} width - width in pixels
*/
class VictoryWrapper extends Component {
	saveToPNG = () => {
		let { width, height } = this.props;
		width = width || 350;
		height = height || 250;
		const svgs = this.victoryWrapper.getElementsByTagName( 'svg' );
		const svgString = getSVGString( svgs[ 0 ] );
		svgString2Image( svgString, 2.0*width, 2.0*height, save );

		let name;
		if ( this.props.id ) {
			name = this.props.id+'.png';
		} else {
			name = 'plot.png';
		}
		function save( dataBlob, filesize ) {
			saveAs( dataBlob, name );
		}
	};

	render() {
		return ( <div ref={( div ) => {
			this.victoryWrapper = div;
		}} style={{ position: 'relative' }}>
			<Tooltip placement="left" tooltip={this.props.t('save-plot')} >
				<Button
					aria-label={this.props.t('save-plot')}
					size="sm" variant="light" onClick={this.saveToPNG}
					style={BUTTON_STYLE}
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

export default withTranslation( 'victory' )( VictoryWrapper );
