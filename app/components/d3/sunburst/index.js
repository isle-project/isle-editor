/**
* Adapted from: https://bl.ocks.org/kerryrodden/766f8f6d31f645c39f488a0befa1e3c8
*
* Copyright 2013 Google Inc. All Rights Reserved.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';
import logger from 'debug';
import sqrt from '@stdlib/math/base/special/sqrt';
import min from '@stdlib/math/base/special/min';
import PI from '@stdlib/constants/math/float64-pi';
import { CAT20 as COLORS } from 'constants/colors';
import randomstring from 'utils/randomstring/alphanumeric';
import './style.css';


// VARIABLES //

const debug = logger( 'isle:sunburst' );

// FUNCTIONS //

function createColorMapping( categories ) {
	const out = {};
	for ( let i = 0; i < categories.length; i++ ) {
		out[ categories[i] ] = COLORS[ i % 20 ];
	}
	return out;
}


// MAIN //

/**
* A d3-based sunburst plot for displaying pathways.
*
* @property {number} width - width of the plot (in px)
* @property {number} height - height of the plot (in px)
* @property {Object} data - data object
*/
class Sunburst extends Component {
	constructor( props ) {
		super( props );

		this.id = props.id || randomstring( 6 );
	}

	componentDidMount() {
		this.initialize();
	}

	initializeBreadcrumbTrail = () => {
		// Add the svg area.
		const trail = d3.select( this.sequence ).append( 'svg:svg' )
			.attr( 'width', this.props.width )
			.attr( 'height', 50 )
			.attr( 'id', `${this.id}_trail` );
		// Add the label at the end, for the percentage.
		trail.append( 'svg:text' )
			.attr( 'id', `${this.id}_endlabel` )
			.style( 'fill', '#000' );
	}

	initialize() {
		const { width, height } = this.props;
		const radius = min( width, height ) / 2;

		// Breadcrumb dimensions: width, height, spacing, width of tip/tail.
		this.b = {
			w: 250, h: 50, s: 5, t: 15
		};

		// Mapping of step names to colors.
		this.colors = createColorMapping( this.props.categories );

		// Total size of all segments; we set this later, after loading the data.
		this.totalSize = 0;

		this.vis = d3.select( this.chart ).append( 'svg:svg' )
			.attr( 'width', width )
			.attr( 'height', height )
			.append( 'svg:g' )
			.attr( 'id', `${this.id}_container` )
			.attr( 'transform', 'translate(' + width / 2 + ',' + height / 2 + ')' );

		this.partition = d3.partition()
			.size([ 2.0 * PI, radius * radius ]);

		this.arc = d3.arc()
			.startAngle( d => d.x0 )
			.endAngle( d => d.x1 )
			.innerRadius( d => sqrt( d.y0 ) )
			.outerRadius( d => sqrt( d.y1 ) );

		this.initializeBreadcrumbTrail();
		this.createVisualization( this.props.data );
	}

	// Basic setup of page elements.
	createVisualization = ( json ) => {
		// Bounding circle underneath the sunburst, to make it easier to detect
		// when the mouse leaves the parent g.
		this.vis.append( 'svg:circle' )
			.attr( 'r', this.radius )
			.style( 'opacity', 0 );

		// Turn the data into a d3 hierarchy and calculate the sums.
		const root = d3.hierarchy( json )
			.sum( d => d.size )
			.sort( ( a, b ) => b.value - a.value );

		// For efficiency, filter nodes to keep only those large enough to see.
		const nodes = this.partition( root ).descendants()
			.filter( ( d ) => {
				return ( d.x1 - d.x0 > 0.005 ); // 0.005 radians = 0.29 degrees
			});

		const path = this.vis.data([ json ]).selectAll( 'path' )
			.data( nodes )
			.enter().append( 'svg:path' )
			.attr( 'display', d => d.depth ? null : 'none' )
			.attr( 'd', this.arc )
			.attr( 'fill-rule', 'evenodd' )
			.style( 'fill', d => this.colors[ d.data.name ] )
			.style( 'opacity', 1 )
			.on( 'mouseover', this.mouseover );

		// Add the mouseleave handler to the bounding circle.
		d3.select( `#${this.id}_container` ).on( 'mouseleave', this.mouseleave );

		// Get total size of the tree = value of root node from partition.
		this.totalSize = path.datum().value;
	}

	mouseleave = ( d ) => {
		debug( 'Restore everything to full opacity when moving off the visualization...' );
		// Hide the breadcrumb trail
		d3.select( `#${this.id}_trail` ).style( 'visibility', 'hidden' );

		// Transition each segment to full opacity and then reactivate it.
		d3.selectAll( 'path' )
			.transition()
			.duration( 500 )
			.style( 'opacity', 1 );

		d3.select( this.explanation ).style( 'visibility', 'hidden' );
	}

	// Fade all but the current sequence, and show it in the breadcrumb trail.
	mouseover = ( d ) => {
		console.log( 'Handle mouseover...' );
		const percentage = ( 100 * d.value / this.totalSize ).toPrecision(3);
		let percentageString = percentage + '%';
		if ( percentage < 0.1 ) {
			percentageString = '< 0.1%';
		}
		d3.select( this.percentage ).text( percentageString );

		d3.select( this.explanation ).style( 'visibility', '' );

		const sequenceArray = d.ancestors().reverse();
		sequenceArray.shift(); // remove root node from the array
		this.updateBreadcrumbs( sequenceArray, percentageString );

		// Fade all the segments.
		d3.selectAll( 'path' )
			.style( 'opacity', 0.3 );

		// Then highlight only those that are an ancestor of the current segment.
		this.vis.selectAll( 'path' )
			.filter( node => sequenceArray.indexOf( node ) >= 0 )
			.style( 'opacity', 1 );
	}


	// Update the breadcrumb trail to show the current sequence and percentage.
	updateBreadcrumbs = ( nodeArray, percentageString ) => {
		// Data join; key function combines name and depth (= position in sequence).
		var trail = d3.select( `#${this.id}_trail` )
			.selectAll( 'g' )
			.data( nodeArray, d => d.data.name + d.depth );

		// Remove exiting nodes.
		trail.exit().remove();

		// Add breadcrumb and label for entering nodes.
		var entering = trail.enter().append( 'svg:g' );

		entering.append( 'svg:polygon' )
			.attr( 'points', this.breadcrumbPoints )
			.style( 'fill', d => this.colors[ d.data.name ] );

		const b = this.b;
		entering.append( 'svg:text' )
			.attr( 'x', ( b.w + b.t ) / 2 )
			.attr( 'y', b.h / 2 )
			.attr( 'dy', '0.35em' )
			.attr( 'text-anchor', 'middle' )
			.text( d => d.data.name );

		// Merge enter and update selections; set position for all nodes.
		entering.merge( trail ).attr( 'transform', ( d, i ) => {
			return 'translate(' + i * ( b.w + b.s ) + ', 0)';
		});

		// Now move and update the percentage at the end.
		d3.select( `#${this.id}_trail` ).select( `#${this.id}_endlabel` )
			.attr( 'x', (nodeArray.length + 0.5) * (b.w + b.s) )
			.attr( 'y', b.h / 2 )
			.attr( 'dy', '0.35em' )
			.attr( 'text-anchor', 'middle' )
			.text( percentageString );

		// Make the breadcrumb trail visible, if it's hidden.
		d3.select( `#${this.id}_trail` ).style( 'visibility', '' );
	}

	// Generate a string that describes the points of a breadcrumb polygon.
	breadcrumbPoints = ( d, i ) => {
		const b = this.b;
		const points = [];
		points.push( '0,0' );
		points.push( b.w + ',0' );
		points.push( b.w + b.t + ',' + (b.h / 2) );
		points.push( b.w + ',' + b.h );
		points.push( '0,' + b.h );
		if ( i > 0 ) { // Leftmost breadcrumb; don't include 6th vertex.
			points.push( b.t + ',' + (b.h / 2) );
		}
		return points.join( ' ' );
	}

	render() {
		return ( <div className="sunburst" style={this.props.style} >
			<div className="sunburst-sequence" ref={( div ) => {
				this.sequence = div; }}></div>
			<div className="sunburst-chart" ref={( div ) => {
				this.chart = div; }}
			>
				<div className="sunburst-explanation" ref={( div ) => {
				this.explanation = div; }} style={{ visibility: 'hidden' }}>
					<span className="sunburst-percentage" ref={( div ) => {
				this.percentage = div; }}></span>
				</div>
			</div>
		</div> );
	}
}


// PROPERTIES //

Sunburst.defaultProps = {
	width: 750,
	height: 600,
	style: {}
};

Sunburst.propTypes = {
	categories: PropTypes.array.isRequired,
	data: PropTypes.object.isRequired,
	width: PropTypes.number,
	height: PropTypes.number,
	style: PropTypes.object
};


// EXPORTS //

export default Sunburst;
