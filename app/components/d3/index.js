// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
import d3 from 'd3';


// MAIN //

class D3Plot extends Component {

	constructor( props ) {
		super( props );
		this.opts = this._getOptions( props.options );
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

	initialize( chart, data, options ) {}
	update( chart, data, options ) {}
	destroy() {}

	componentWillUnmount() {
		this.destroy.call( this );
	}

	_getOptions( propOps ) {
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

	render() {
		const { className, width, height, options } = this.props;
		const opts = this._getOptions( options );
		let classes = 'd3-plot';
		if ( className ) {
			classes = classes.concat( ' ', this.props.className );
		}

		return (
			<svg
				className={ classes }
				width={ width + opts.margin.left + opts.margin.right }
				height={ height + opts.margin.top + opts.margin.bottom }
				style={{
					display: 'block',
					margin: 'auto'
				}}
			></svg>
		);
	}
}


// PROPERTY TYPES //

D3Plot.propTypes = {
	data: PropTypes.oneOfType([
		PropTypes.array,
		PropTypes.object
	]).isRequired,
	width: PropTypes.number.isRequired,
	height: PropTypes.number.isRequired,
	options: PropTypes.object
};


// EXPORTS //

export default D3Plot;
