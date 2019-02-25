// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Worker from 'worker-loader!./worker.js';
import ClusterModal from './cluster_modal.js';
import './text_clustering.css';


// VARIABLES //

const CLUSTER_SIZES = [ 5, 7, 9 ];
const CLUSTER_LABELS = [ 'Few clusters', 'Some clusters', 'Many clusters' ];


// MAIN //

class TextClustering extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			isClustering: false,
			showClusterModal: false,
			modelIndex: 0,
			clusterCoordinates: null,
			representativeDocs: []
		};
	}

	componentWillUnmount() {
		if ( this.worker ) {
			this.worker.terminate();
		}
	}

	clusterDocuments = () => {
		this.worker = new Worker();
		this.worker.onmessage = ( event ) => {
			const data = event.data;
			switch ( data.type ) {
				case 'CLUSTERS':
					this.props.onClusters( data.value.clusters._buffer );
				break;
				case 'CLUSTER_COORDINATES':
					this.setState({
						clusterCoordinates: data.value.coordinates,
						modelIndex: data.value.modelIndex
					});
				break;
				case 'REPRESENTATIVE_DOCUMENTS': {
					const representative = data.value;
					const docs = [];
					for ( let i = 0; i < representative.length; i++ ) {
						docs.push( this.props.texts[ representative[ i ].idx ] );
					}
					this.setState({
						representativeDocs: docs
					});
				}
			}
		};
		this.worker.postMessage({
			type: 'ADD_DOCUMENTS',
			value: this.props.texts
		});
		this.worker.postMessage({
			type: 'GET_CLUSTERS',
			value: this.state.modelIndex
		});
		this.worker.postMessage({
			type: 'GET_CLUSTER_COORDINATES',
			value: this.state.modelIndex
		});
		this.setState({
			isClustering: true
		});
	}

	handleClusterCountChange = ( event ) => {
		const modelIndex = parseInt( event.target.value, 10 );
		this.changeClusterCount( modelIndex );
		this.setState({
			modelIndex
		});
	}

	changeClusterCount = ( modelIndex ) => {
		if ( this.worker ) {
			this.worker.postMessage({
				type: 'GET_CLUSTERS',
				value: modelIndex
			});
			this.worker.postMessage({
				type: 'GET_CLUSTER_COORDINATES',
				value: modelIndex
			});
		}
	}

	toggleClusterModal = () => {
		this.setState({
			showClusterModal: !this.state.showClusterModal
		});
	}

	render() {
		return (
			<div className="cluster-wrapper">
				<label>Cluster {this.props.actionLabel}</label>
				<span className="cluster-select-wrapper">
					<select
						className="cluster-select"
						onChange={this.handleClusterCountChange}
						value={this.state.modelIndex}
					>
						{CLUSTER_LABELS.map( ( v, key ) => {
							return (
								<option
									key={key}
									value={key}
								>{v}</option>
							);
						})}
					</select>
				</span>
				<ButtonGroup>
					<Button variant="secondary" onClick={this.clusterDocuments}>Start</Button>
					<Button variant="secondary" disabled={!this.state.isClustering} onClick={this.toggleClusterModal}>Show Clusters</Button>
					{ this.state.showClusterModal ? <ClusterModal
						show={this.state.showClusterModal}
						onHide={this.toggleClusterModal}
						clusterSizes={CLUSTER_SIZES}
						clusterCoordinates={this.state.clusterCoordinates}
						representativeDocs={this.state.representativeDocs}
						modelIndex={this.state.modelIndex}
						changeClusterCount={this.changeClusterCount}
						onPointClick={( selectedCluster ) => {
							console.log( 'Retrieve representative documents...' );
							this.worker.postMessage({
								type: 'GET_REPRESENTATIVE_DOCUMENTS',
								value: {
									cluster: selectedCluster,
									modelIndex: this.state.modelIndex
								}
							});
						}}
					/> : null }
				</ButtonGroup>
			</div>
		);
	}
}


// PROPERTIES //

TextClustering.propTypes = {
	actionLabel: PropTypes.string.isRequired,
	texts: PropTypes.array.isRequired,
	onClusters: PropTypes.func.isRequired
};


// EXPORTS //

export default TextClustering;
