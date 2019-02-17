// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
import * as d3 from 'd3';


// FUNCTIONS //

function getOptions( propOps ) {
	const options = ( typeof propOps === 'undefined' ) ? {} : propOps;
	return {
		margin: {
			top: 20,
			bottom: 30,
			left: 50,
			right: 50
		},
		xaxis: { orientation: 'bottom' },
		yaxis: { orientation: 'left' },
		...options
	};
}


// MAIN //

class D3Plot extends Component {
	constructor( props ) {
		super( props );
		this.opts = getOptions( props.options );
	}

	componentDidMount() {
		this.chart = d3.select( findDOMNode( this ) )
			.append( 'g' )
			.attr( 'transform', 'translate(' + this.opts.margin.left + ',' + this.opts.margin.top + ')' );

		this.initialize(
			this.chart,
			this.props.data,
			this.opts
		);
	}

	componentDidUpdate() {
		this.update(
			this.chart,
			this.props.data,
			this.opts
		);
	}

	componentWillUnmount() {
		this.destroy();
	}

	render() {
		const { className, width, height, options } = this.props;
		const opts = getOptions( options );
		let classes = 'd3-plot';
		if ( className ) {
			classes = classes.concat( ' ', this.props.className );
		}
		return (
			<svg
				className={classes}
				width={width + opts.margin.left + opts.margin.right}
				height={height + opts.margin.top + opts.margin.bottom}
				style={{
					display: 'block',
					margin: 'auto'
				}}
			></svg>
		);
	}
}


// PROPERTIES //

D3Plot.propTypes = {
	className: PropTypes.string,
	data: PropTypes.oneOfType([
		PropTypes.array,
		PropTypes.object
	]).isRequired,
	height: PropTypes.number.isRequired,
	options: PropTypes.object,
	width: PropTypes.number.isRequired
};

D3Plot.defaultProps = {
	className: '',
	options: {}
};


// EXPORTS //

export default D3Plot;
