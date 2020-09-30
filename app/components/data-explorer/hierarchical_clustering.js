// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import contains from '@stdlib/assert/contains';
import copy from '@stdlib/utils/copy';
import incrspace from '@stdlib/math/utils/incrspace';
import round from '@stdlib/math/base/special/round';
import SelectInput from 'components/input/select';
import CheckboxInput from 'components/input/checkbox';
import NumberInput from 'components/input/number';
import Dashboard from 'components/dashboard';
import factor from 'utils/factor-variable';
import randomstring from 'utils/randomstring/alphanumeric';
import { svgString2Image, getSVGString } from 'utils/svg';
import { DATA_EXPLORER_HIERARCHICAL_CLUSTERING } from 'constants/actions.js';
import QuestionButton from './question_button.js';
import Dendrogram from './hclust/dendrogram.js';
import FullscreenButton from './hclust/fullscreen_button.js';
import hclust from './hclust';


// VARIABLES //

const DESCRIPTION = '';
const DISTANCES = [ 'euclidean', 'chebyshev', 'cosine', 'hamming', 'manhattan' ];
const LINKAGE = [ 'complete', 'single' ];


// MAIN //

class HierarchicalClustering extends Component {
	constructor( props ) {
		super( props );
	}

	compute = ( variables, attach, K, linkage, distance ) => {
		const matrix = [];
		const n = this.props.data[ variables[ 0 ] ].length;
		for ( let i = 0; i < n; i++ ) {
			const row = [];
			for ( let j = 0; j < variables.length; j++ ) {
				row[ j ] = this.props.data[ variables[ j ] ][ i ];
			}
			matrix.push( row );
		}
		const result = hclust( matrix, {
			linkage,
			distance
		});
		const tree = result.getTree();

		if ( attach ) {
			const newData = copy( this.props.data, 1 );
			const newCategorical = this.props.categorical.slice();
			const suffix = variables.map( x => x[ 0 ] ).join( '' );
			const assignments = result.getClusterAssignments( K );
			const name = factor( 'hclust_cluster_' + suffix, incrspace( 0, K, 1 ).map( x => `Cluster ${x+1}` ) );
			newData[ name ] = assignments;
			if ( !contains( newCategorical, name ) ) {
				newCategorical.push( name );
			}
			this.props.onGenerate( newCategorical, newData );
		}

		this.props.logAction( DATA_EXPLORER_HIERARCHICAL_CLUSTERING, {
			variables, attach, K
		});

		const output = {
			variable: 'Hierarchical Clustering Summary',
			type: 'Hierarchical Clustering',
			value: <div style={{ overflowX: 'auto', width: '100%' }}>
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
							x={0} y={0} width={window.innerWidth} height={window.innerHeight-25} data={tree}
							cutoff={round( matrix.length / 20 )} fontSize={24}
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
							x={0} y={0} width={650} height={350} data={tree}
							cutoff={round( matrix.length / 20 )}
						/>;
					</svg>
				</div>
			</div>
		};
		this.props.onCreated( output );
	}

	render() {
		const { quantitative, originalQuantitative } = this.props;
		return (
			<Dashboard
				title={<span>Hierarchical Clustering<QuestionButton title="Hierarchical Clustering" content={DESCRIPTION} /></span>}
				autoStart={false}
				onGenerate={this.compute}
			>
				<SelectInput
					legend="Variables:" multi
					defaultValue={originalQuantitative}
					options={quantitative}
				/>
				<Row>
					<Col>
						<CheckboxInput
							legend="Attach clusters to table?"
							defaultValue={false}
						/>
					</Col>
					<Col>
						<NumberInput
							legend="Number of clusters"
							min={1}
							inline
							defaultValue={3}
						/>
					</Col>
				</Row>
				<Row>
					<Col>
						<SelectInput
							legend="Linkage"
							defaultValue={LINKAGE[ 0 ]}
							options={LINKAGE}
						/>
					</Col>
					<Col>
						<SelectInput
							legend="Distance"
							defaultValue={DISTANCES[ 0 ]}
							options={DISTANCES}
						/>
					</Col>
				</Row>
			</Dashboard>
		);
	}
}


// PROPERTIES //

HierarchicalClustering.defaultProps = {
	logAction() {}
};

HierarchicalClustering.propTypes = {
	categorical: PropTypes.array.isRequired,
	quantitative: PropTypes.array.isRequired,
	originalQuantitative: PropTypes.array.isRequired,
	data: PropTypes.object.isRequired,
	logAction: PropTypes.func,
	onGenerate: PropTypes.func.isRequired,
	onCreated: PropTypes.func.isRequired
};


// EXPORTS //

export default HierarchicalClustering;
