// MODULES //


import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Plotly from 'plotly.js';
import createPlotlyComponent from 'react-plotly.js/factory';
const Plot = createPlotlyComponent( Plotly );
import { isPrimitive as isNumber } from '@stdlib/assert/is-number';
import { CAT20 as COLORS } from '@isle-project/constants/colors';


// VARIABLES //

const CLUSTER_LABELS = [ 'few-clusters', 'some-clusters', 'many-clusters' ];


// MAIN //

class ClusterModal extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			selectedCluster: null,
			modelIndex: props.modelIndex
		};
	}

	renderClusterPlot() {
		const arr = this.props.clusterCoordinates;
		const nClusters = this.props.clusterSizes[ this.state.modelIndex ];
		const data = [
			{
				x: arr.map( x => x[ 0 ] ),
				y: arr.map( x => x[ 1 ] ),
				text: arr.map( ( x, i ) => `${this.props.t('cluster')} ${i+1}` ),
				marker: {
					size: 40,
					color: COLORS.slice( 0, nClusters )
				},
				mode: 'markers',
				hoverinfo: 'text',
				type: 'scatter'
			}
		];
		return (
			<div style={{ height: 0.75 * window.innerHeight }}>
				<Plot
					data={data}
					layout={{
						hovermode: 'closest'
					}}
					useResizeHandler
					style={{
						width: '100%',
						height: '100%',
						zIndex: 1
					}}
					config={{
						displayModeBar: false
					}}
					onClick={( data ) => {
						const point = data.points[ data.points.length-1 ];
						this.setState({
							selectedCluster: point.pointIndex
						}, () => {
							this.props.onPointClick( this.state.selectedCluster );
						});
					}}
				/>
			</div>
		);
	}

	handleClusterCountChange = ( event ) => {
		const modelIndex = parseInt( event.target.value, 10 );
		if ( this.state.modelIndex !== modelIndex ) {
			this.setState({
				modelIndex
			});
			this.props.changeClusterCount( modelIndex );
		}
	};

	render() {
		let docDisplay;
		if ( isNumber( this.state.selectedCluster ) ) {
			docDisplay = <Fragment>
				<h4
					style={{
						padding: 10,
						color: COLORS[ this.state.selectedCluster ]
					}}
				>
					{this.props.t('representative-documents')} {this.state.selectedCluster+1}
				</h4>
				<div style={{ marginLeft: 0, overflowY: 'scroll', height: 0.70 * window.innerHeight }}>
					<ListGroup className="cluster-list">
					{this.props.representativeDocs.map( ( x, idx ) => {
						return (
							<ListGroup.Item className="cluster-list-item" key={`${this.state.selectedCluster}-${idx}`} >
								{x}
							</ListGroup.Item>
						);
					})}
					</ListGroup>
				</div>
			</Fragment>;
		} else {
			docDisplay = <h4 className="cluster-directive">{this.props.t('select-cluster-representative')}</h4>;
		}
		return ( <Modal
			show={this.props.show}
			onHide={this.props.onHide}
			dialogClassName="modal-100w"
		>
			<Modal.Header closeButton>
				<Modal.Title as="h3" >
					{this.props.t('clustering-results')}
				</Modal.Title>
				<span className="cluster-modal-select-wrapper">
					<select
						title={this.props.t('cluster-select')}
						className="cluster-select"
						onChange={this.handleClusterCountChange}
						onBlur={this.handleClusterCountChange}
						value={this.state.modelIndex}
					>
						{CLUSTER_LABELS.map( ( v, key ) => {
							return (
								<option
									key={key}
									value={key}
								>{this.props.t( v )}</option>
							);
						})}
					</select>
				</span>
			</Modal.Header>
			<Modal.Body style={{ minHeight: 0.75 * window.innerHeight, padding: 0 }} >
				<Row>
					<Col md={8}>
						{docDisplay}
					</Col>
					<Col md={4} style={{ overflowY: 'auto', maxWidth: '30%' }} >
						{this.props.clusterCoordinates ? this.renderClusterPlot() : null}
					</Col>
				</Row>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={this.props.onHide}>{this.props.t('close')}</Button>
			</Modal.Footer>
		</Modal> );
	}
}


// PROPERTIES //

ClusterModal.propTypes = {
	clusterSizes: PropTypes.array.isRequired,
	modelIndex: PropTypes.number.isRequired,
	show: PropTypes.bool.isRequired,
	onPointClick: PropTypes.func.isRequired,
	onHide: PropTypes.func.isRequired,
	clusterCoordinates: PropTypes.array.isRequired,
	changeClusterCount: PropTypes.func.isRequired,
	representativeDocs: PropTypes.array.isRequired
};


// EXPORT //

export default ClusterModal;
