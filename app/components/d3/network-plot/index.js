// MODULES //

import React from 'react';
import PropTypes from 'prop-types';
import D3Plot from 'components/d3';
import * as d3 from 'd3';
import './style.css';


// MAIN //

class NetworkPlot extends D3Plot {
	constructor( props ) {
		super( props );
	}

	drawPlot( chart, data ) {
		var link = chart.append( 'g' )
			.attr( 'class', 'links' )
			.selectAll( 'line' )
			.data( data.links )
			.enter()
			.append( 'line' )
			.attr( 'stroke-width', 2 );

		var node = chart.append( 'g' )
			.attr( 'class', 'nodes' )
			.selectAll( 'circle' )
			.data( data.nodes )
			.enter()
			.append( 'circle' )
			.attr( 'r', 5 )
			.call( d3.drag()
				.on( 'start', this.dragstarted )
				.on( 'drag', this.dragged )
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

		node.append( 'title' )
			.text( function txt( d ) {
				return `Number of edges: ${d.nEdges}`;
			});

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
		});
		node.on( 'mouseout', function onMouseOut() {
			link.style( 'stroke-width', 2 );
			link.style( 'stroke', '#999' );
		});
	}

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
	}

	dragged = ( d ) => {
		d.fx = d3.event.x;
		d.fy = d3.event.y;
	}

	dragended = ( d ) => {
		if ( !d3.event.active ) {
			this.simulation.alphaTarget( 0 );
		}
		d.fx = null;
		d.fy = null;
	}

	update( chart, data, opts ) {
		chart.selectAll( '.links' ).remove();
		chart.selectAll( '.nodes' ).remove();

		this.drawPlot( chart, data );

		this.simulation.alphaTarget( 0.3 ).restart();
	}
}


// DEFAULT PROPERTIES //

NetworkPlot.defaultProps = {
	width: 900,
	height: 600
};

NetworkPlot.propTupes = {
	width: PropTypes.number,
	height: PropTypes.number
};


// EXPORTS //

export default NetworkPlot;
