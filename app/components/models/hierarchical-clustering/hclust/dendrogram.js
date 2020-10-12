/**
* Code by Micah Stubbs, Apache 2.0 licensed
*/

// MODULES //

import React from 'react';
import * as d3 from 'd3';
import D3blackbox from './blackbox.js';


// MAIN //

const Dendrogram = D3blackbox( ( anchor, props, state ) => {
	const svg = d3.select( anchor.current );

	const { width, height, data } = props;

	// define some constants
	const margin = { top: 40, left: 40, bottom: 0, right: 0 };
	const innerWidth = width - margin.left - margin.right;
	const innerHeight = height - margin.top - margin.bottom;
	const fontSize = props.fontSize || 16;
	const magicWidthDivisor = 1.35;

	// call the draw function
	draw(data);

	// define the draw function
	function draw(data) {
		// define the tree layout function
		const tree = data => {
			const root = d3
				.hierarchy(data);

			root.dx = 15;
			root.dy = innerWidth / (root.height + 1);
			return d3.cluster().size([innerHeight, innerWidth / magicWidthDivisor])(root);
		};

		// call the tree layout function on the data
		const root = tree(data);

		// draw the visualization
		let x0 = Infinity;
		let x1 = -x0;
		root.each(d => {
			if (d.x > x1) x1 = d.x;
			if (d.x < x0) x0 = d.x;
		});


		function collapse( d ) {
			if ( d.children ) {
				d._children = d.children;
				d._children.forEach( collapse );
				if ( d.value < props.cutoff ) {
					d.children = null;
				}
			}
		}
		root.children.forEach( collapse );

		const magicXTranslateDivisor = 6;
		const xTranslate = root.dy / magicXTranslateDivisor + margin.left;
		const yTranslate = root.dx - x0 + margin.top;
		const g = svg
			.append('g')
			.attr('font-family', 'sans-serif')
			.attr('font-size', fontSize)
			.attr(
				'transform',
				`translate(${xTranslate},${yTranslate})`
			);

		g.append('g')
			.attr('fill', 'none')
			.attr('stroke', '#555')
			.attr('stroke-opacity', 0.4)
			.attr('stroke-width', 1.0 )
			.selectAll('path')
			.data(root.links())
			.join('path')
			.attr(
				'd',
				d => `
				M${d.target.y},${d.target.x}
				C${d.source.y + root.dy / 2},${d.target.x}
				 ${d.source.y + root.dy / 2},${d.source.x}
				 ${d.source.y},${d.source.x}
			`
			);

		const node = g
			.append('g')
			.attr('stroke-linejoin', 'round')
			.attr('stroke-width', 0.1875 * fontSize )
			.selectAll('g')
			.data(root.descendants().reverse())
			.join( 'g' )
			.attr( 'transform', d => `translate(${d.y},${d.x})` );

		node
			.append('circle')
			.attr('fill', d => (d.children ? '#555' : '#999'))
			.attr('r', fontSize * 0.15 )
			.on( 'click', d => {
				d.children = d.children ? null : d._children;
			});

		node
			.append('text')
			.attr('dy', '0.1em')
			.attr('x', d => (d.children ? -6 : 6))
			.attr('font-size', fontSize )
			.text(d => d.data.name)
			.filter(d => d.children)
			.attr('text-anchor', 'end')
			.clone(true)
			.lower()
			.attr('stroke', 'white');
	}
});


// EXPORTS //

export default Dendrogram;
