// MODULES //

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import WordCloud from 'react-d3-cloud';


// MAIN //

class Wrapper extends Component {

	constructor( props ) {
		super( props );

		this.state = {
		};
	}

	render() {
		return (
			<WordCloud
				data={this.props.data}
				fontSizeMapper={this.props.fontSizeMapper}
				rotate={this.props.rotate}
				width={this.props.width}
				height={this.props.height}
			/>
		);
	}
}


// DEFAULT PROPERTIES //

Wrapper.defaultProps = {
	fontSizeMapper: word => Math.log2( word.value ) * 5,
	rotate: word => word.value % 360
};


// PROPERTY TYPES //

Wrapper.propTypes = {
};


// EXPORTS //

export default Wrapper;
