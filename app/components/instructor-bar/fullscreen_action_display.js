// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/lib/Button';
import Col from 'react-bootstrap/lib/Col';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import Modal from 'react-bootstrap/lib/Modal';
import Well from 'react-bootstrap/lib/Well';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import RangePicker from 'components/range-picker';


// MAIN //

class FullscreenActionDisplay extends Component {

	constructor( props ) {
		super( props );

		this.state = {};
	}

	renderListGroupItem = ( elem, idx ) => {
		return ( <ListGroupItem key={idx}>
			{ this.state.showExtended ?
				<span style={{ textAlign: 'left' }}>
					<b>{elem.name}:</b> {elem.value}
				</span> :
				<span style={{ textAlign: 'left' }}>
					{elem.value}
				</span>
			}
			{ this.state.showExtended ?
				<Button
					bsSize="xs"
					style={{ float: 'right' }}
					onClick={this.props.deleteFactory( idx )}
				>
					<span>&times;</span>
				</Button> :
				null
			}
		</ListGroupItem> );
	}

	render() {
		return ( <Modal
			show={this.props.show}
			onHide={this.props.toggleActions}
			dialogClassName="fullscreen-modal"
		>
			<Modal.Header closeButton>
				<Modal.Title>Actions</Modal.Title>
				<RangePicker onChange={this.props.onPeriodChange} />
			</Modal.Header>
			<Modal.Body style={{ height: 0.75 * window.innerHeight, width: 0.90 * window.innerWidth }} >
				<Grid>
					<Row>
						<Col md={6}>
							{ this.props.actions.length > 0 ?
								<ListGroup fill style={{ marginLeft: 0, overflowY: 'scroll', height: 0.73 * window.innerHeight }}>
									{this.props.actions.map(
										this.renderListGroupItem
									)}
								</ListGroup> :
								<Well>
									<h2>There is no data for the selected time period</h2>
								</Well>
							}
						</Col>
						<Col md={6}>
							{this.props.colplot}
						</Col>
					</Row>
				</Grid>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={this.toggleExtended}>{ this.props.showExtended ? 'Hide Extended' : 'Show Extended' }</Button>
				<Button onClick={this.toggleActions}>Close</Button>
			</Modal.Footer>
		</Modal> );
	}
}


// PROPERTY TYPES //

FullscreenActionDisplay.propTypes = {
	actions: PropTypes.array.isRequired,
	colplot: PropTypes.node.isRequired,
	deleteFactory: PropTypes.func.isRequired,
	onPeriodChange: PropTypes.func.isRequired,
	show: PropTypes.bool.isRequired,
	showExtended: PropTypes.bool.isRequired,
	toggleActions: PropTypes.func.isRequired
};


// EXPORTS //


export default FullscreenActionDisplay;
