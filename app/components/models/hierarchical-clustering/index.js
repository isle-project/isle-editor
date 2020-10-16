// MODULES //

import React, { Component } from 'react';
import round from '@stdlib/math/base/special/round';
import randomstring from 'utils/randomstring/alphanumeric';
import { svgString2Image, getSVGString } from 'utils/svg';
import Dendrogram from './hclust/dendrogram.js';
import FullscreenButton from './hclust/fullscreen_button.js';
import hclust from './hclust';
import PropTypes from '../../../../scripts/prop_types.js';


// MAIN //

/**
* Hierarchical Clustering.
*
* @property {Object} data - object of value arrays
* @property {Array<string>} variables - names of variables used for clustering
* @property {number} K - number of clusters
* @property {string} linkage - either `complete` or `single`
* @property {string} distance - used distance (`euclidean`, `chebyshev`, `cosine`, `hamming`, or `manhattan`)
* @property {Function} onResult - callback invoked with model object
*/
class HierarchicalClustering extends Component {
	constructor( props ) {
		super( props );

		const matrix = [];
		const n = props.data[ props.variables[ 0 ] ].length;
		for ( let i = 0; i < n; i++ ) {
			const row = [];
			for ( let j = 0; j < props.variables.length; j++ ) {
				row[ j ] = props.data[ props.variables[ j ] ][ i ];
			}
			matrix.push( row );
		}
		this.matrix = matrix;
		this.result = hclust( matrix, {
			linkage: props.linkage,
			distance: props.distance
		});
		this.tree = this.result.getTree();
		props.onResult( this.result );
	}

	render() {
		return (
			<div style={{ overflowX: 'auto', width: '100%' }}>
				<span className="title" >Hierarchical Clustering Summary</span>
				<div
					className="decision-tree-draggable-bar"
					draggable="true"
					onDragStart={( ev ) => {
						ev.dataTransfer.setData( 'text/html', this.plotValue );
						ev.dataTransfer.setData( 'text/plain', this.plotKey );
					}}
				>Drag Plot</div>
				<FullscreenButton
					variant="outline-danger"
					size="sm"
					onClick={() => {
						this.setState({ fullscreen: !this.state.fullscreen });
					}}
					dendrogram={<svg width={window.innerWidth} height={window.innerHeight}>
						<Dendrogram
							x={0} y={0} width={window.innerWidth} height={window.innerHeight-25} data={this.tree}
							cutoff={round( this.matrix.length / 20 )} fontSize={24}
						/>;
					</svg>}
				>
					<div className="fa fa-times" />
				</FullscreenButton>
				<div>
					<svg width={650} height={375} ref={svg => {
						if ( !this.svg ) {
							this.svg = svg;
							const width = 650;
							const height = 375;
							const svgString = getSVGString( this.svg );
							svgString2Image( svgString, 2.0*width, 2.0*height, ( dataBlob ) => {
								const value = `<img src="${dataBlob}" style="display: block; margin: 0 auto; max-width: 100%; max-height: 100%" />`;
								this.plotKey = `<!--IMAGE_LOG:${randomstring( 6 )}_${randomstring( 6 )}-->`;
								this.plotValue = value;
								this.plotData = dataBlob;
							});
						}
					}}>
						<Dendrogram
							x={0} y={0} width={650} height={350} data={this.tree}
							cutoff={round( this.matrix.length / 20 )}
						/>;
					</svg>
				</div>
			</div>
		);
	}
}

// PROPERTIES //

HierarchicalClustering.defaultProps = {
	K: 3,
	linkage: 'complete',
	distance: 'euclidean',
	onResult() {}
};

HierarchicalClustering.propTypes = {
	data: PropTypes.object.isRequired,
	variables: PropTypes.arrayOf( PropTypes.string ).isRequired,
	K: PropTypes.number,
	linkage: PropTypes.oneOf([ 'complete', 'single' ]),
	distance: PropTypes.oneOf([ 'euclidean', 'chebyshev', 'cosine', 'hamming', 'manhattan' ]),
	onResult: PropTypes.func
};




// EXPORTS //

export default HierarchicalClustering;
