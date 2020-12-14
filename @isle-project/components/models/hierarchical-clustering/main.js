// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import Alert from 'react-bootstrap/Alert';
import round from '@stdlib/math/base/special/round';
import randomstring from '@isle-project/utils/randomstring/alphanumeric';
import { svgString2Image, getSVGString } from '@isle-project/utils/svg';
import blobToBase64 from '@isle-project/utils/blob-to-base64';
import Dendrogram from './hclust/dendrogram.js';
import FullscreenButton from './hclust/fullscreen_button.js';
import hclust from './hclust';
import './hierarchical_clustering.css';


// FUNCTIONS //

const fitModel = ({ data, variables, linkage, distance }) => {
	try {
		const matrix = [];
		const n = data[ variables[ 0 ] ].length;
		for ( let i = 0; i < n; i++ ) {
			const row = [];
			for ( let j = 0; j < variables.length; j++ ) {
				row[ j ] = data[ variables[ j ] ][ i ];
			}
			matrix.push( row );
		}
		const result = hclust( matrix, {
			linkage: linkage,
			distance: distance
		});
		const tree = result.getTree();
		return {
			matrix,
			result,
			tree
		};
	} catch ( _ ) {
		return {};
	}
};


// MAIN //

/**
* Hierarchical Clustering.
*
* @property {Object} data - object of value arrays
* @property {Array<string>} variables - names of variables used for clustering
* @property {string} linkage - either `complete` or `single`
* @property {string} distance - used distance (`euclidean`, `chebyshev`, `cosine`, `hamming`, or `manhattan`)
* @property {Function} onResult - callback invoked with model object
*/
class HierarchicalClustering extends Component {
	constructor( props ) {
		super( props );

		const { data, variables, linkage, distance } = props;
		this.state = {
			...fitModel({ data, variables, linkage, distance }),
			...props
		};
		props.onResult( this.state.result );
	}

	static getDerivedStateFromProps( nextProps, prevState ) {
		if (
			nextProps.data !== prevState.data ||
			nextProps.variables !== prevState.variables ||
			nextProps.linkage !== prevState.linkage ||
			nextProps.distance !== prevState.distance
		) {
			const { data, variables, linkage, distance } = nextProps;
			const newState = {
				...fitModel({ data, variables, linkage, distance }),
				...nextProps
			};
			nextProps.onResult( newState.result );
			return newState;
		}
		return null;
	}

	render() {
		const { result } = this.state;
		if ( !result ) {
			return <Alert variant="danger">{this.props.t('missing-attributes')}</Alert>;
		}
		return (
			<div style={{ overflowX: 'auto', width: '100%' }} >
				<span className="title" >Hierarchical Clustering Summary</span>
				<div
					className="hierarchical-clustering-draggable-bar"
					draggable="true"
					onDragStart={( ev ) => {
						ev.dataTransfer.setData( 'text/html', this.plotValue );
						console.log( this.plotValue );
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
							x={0} y={0} width={window.innerWidth} height={window.innerHeight-25} data={this.state.tree}
							cutoff={round( this.state.matrix.length / 20 )} fontSize={24}
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
								blobToBase64( dataBlob ).then( str => {
									const value = `<img src="${str}" style="display: block; margin: 0 auto; max-width: 100%; max-height: 100%" />`;
									this.plotKey = `<!--IMAGE_LOG:${randomstring( 6 )}_${randomstring( 6 )}-->`;
									this.plotValue = value;
								});
							});
						}
					}}>
						<Dendrogram
							x={0} y={0} width={650} height={350} data={this.state.tree}
							cutoff={round( this.state.matrix.length / 20 )}
						/>;
					</svg>
				</div>
			</div>
		);
	}
}

// PROPERTIES //

HierarchicalClustering.defaultProps = {
	linkage: 'complete',
	distance: 'euclidean',
	onResult() {}
};

HierarchicalClustering.propTypes = {
	data: PropTypes.object.isRequired,
	variables: PropTypes.arrayOf( PropTypes.string ).isRequired,
	linkage: PropTypes.oneOf([ 'complete', 'single' ]),
	distance: PropTypes.oneOf([ 'euclidean', 'chebyshev', 'cosine', 'hamming', 'manhattan' ]),
	onResult: PropTypes.func
};


// EXPORTS //

export default withTranslation( 'StatisticalModels' )( HierarchicalClustering );
