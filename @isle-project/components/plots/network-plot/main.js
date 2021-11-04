// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';
import i18next from 'i18next';
import { withTranslation } from 'react-i18next';
import { findDOMNode } from 'react-dom';
import { withPropCheck } from '@isle-project/utils/prop-check';
import './style.css';


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

function dragged( d ) {
	d.fx = d3.event.x;
	d.fy = d3.event.y;
}


// MAIN //

/**
* A d3-based network plot.
*
* @property {number} width - width of the plot (in px)
* @property {number} height - height of the plot (in px)
* @property {Object} data - object with `nodes` and `links`; `nodes` should be an object array of elements with an `id` property, `links` an object array with elements having a `source` and `target` id
*/
class NetworkPlot extends Component {
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

	drawPlot = ( chart, data ) => {
		const link = chart.append( 'g' )
			.attr( 'class', 'links' )
			.selectAll( 'line' )
			.data( data.links )
			.enter()
			.append( 'line' )
			.attr( 'stroke-width', 2 );

		const node = chart.append( 'g' )
			.attr( 'class', 'nodes' )
			.selectAll( 'circle' )
			.data( data.nodes )
			.enter()
			.append( 'circle' )
			.attr( 'r', 5 )
			.call( d3.drag()
				.on( 'start', this.dragstarted )
				.on( 'drag', dragged )
				.on( 'end', this.dragended )
			);

		this.simulation
			.nodes( data.nodes )
			.on( 'tick', ticked );

		this.simulation.force( 'link' )
			.links( data.links );


		data.nodes = data.nodes.map( node => {
			let nEdges = 0;
			for ( let i = 0; i < data.links.length; i++ ) {
				if (
					data.links[ i ].source.id === node.id ||
					data.links[ i ].target.id === node.id
				) {
					nEdges += 1;
				}
			}
			node.nEdges = nEdges;
			return node;
		});

		function ticked() {
			link
				.attr( 'x1', function x1( d ) { return d.source.x; })
				.attr( 'y1', function y1( d ) { return d.source.y; })
				.attr( 'x2', function x2( d ) { return d.target.x; })
				.attr( 'y2', function y2( d ) { return d.target.y; });

			node
				.attr( 'cx', function cx( d ) { return d.x; })
				.attr( 'cy', function cy( d ) { return d.y; });
		}

		const tooltip = d3.select( 'body' ).append( 'div' )
			.attr( 'class', 'network-tooltip' )
			.style( 'opacity', 0 );
		const t = this.props.t;
		node.on( 'mouseover', function onMouseOver( d ) {
			link.style( 'stroke-width', function strokeWidth( l ) {
				if ( d === l.source || d === l.target ) {
					return 4;
				}
				return 2;
			});
			link.style( 'stroke', function stroke( l ) {
				if ( d === l.source || d === l.target ) {
					return 'red';
				}
				return '#999';
			});
			tooltip.transition()
				.duration(200)
				.style( 'opacity', 0.9 );
			tooltip
				.html( i18next.exists( 'plotly:number-of-edges' ) ?
					t( 'plotly:number-of-edges', { nEdges: d.nEdges }) :
					'Number of Edges: '+d.nEdges
				)
				.style( 'left', (d3.event.pageX) + 'px' )
				.style( 'top', (d3.event.pageY - 28) + 'px' );
		});
		node.on( 'mouseout', function onMouseOut() {
			link.style( 'stroke-width', 2 );
			link.style( 'stroke', '#999' );
			tooltip
				.transition()
				.duration( 500 )
				.style( 'opacity', 0 );
		});
	};

	initialize( chart, data, opts ) {
		this.simulation = d3.forceSimulation()
			.force( 'link', d3.forceLink()
				.id( ( d ) => { return d.id; })
				.distance( () => 120 )
			)
			.force( 'charge', d3.forceManyBody()
				.strength( () => -10 )
				.distanceMax( () => 500 )
			)
			.force( 'center', d3.forceCenter( this.props.width / 2, this.props.height / 2 ) );

		this.drawPlot( chart, data );
	}

	dragstarted = ( d ) => {
		if ( !d3.event.active ) {
			this.simulation.alphaTarget( 0.3 ).restart();
		}
		d.fx = d.x;
		d.fy = d.y;
	};

	dragended = ( d ) => {
		if ( !d3.event.active ) {
			this.simulation.alphaTarget( 0 );
		}
		d.fx = null;
		d.fy = null;
	};

	update( chart, data, opts ) {
		chart.selectAll( '.links' ).remove();
		chart.selectAll( '.nodes' ).remove();

		this.drawPlot( chart, data );
		this.simulation.alphaTarget( 0.3 ).restart();
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

NetworkPlot.defaultProps = {
	width: 900,
	height: 600
};

NetworkPlot.propTypes = {
	data: PropTypes.shape({
		nodes: PropTypes.array,
		links: PropTypes.array
	}).isRequired,
	width: PropTypes.number,
	height: PropTypes.number
};


// EXPORTS //

export default withTranslation( 'plotly' )( withPropCheck( NetworkPlot ) );
