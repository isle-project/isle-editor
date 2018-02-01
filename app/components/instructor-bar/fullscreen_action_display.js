// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import contains from '@stdlib/assert/contains';
import isEmptyObject from '@stdlib/assert/is-empty-object';
import Button from 'react-bootstrap/lib/Button';
import Col from 'react-bootstrap/lib/Col';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import Modal from 'react-bootstrap/lib/Modal';
import Well from 'react-bootstrap/lib/Well';
import ReactList from 'react-list';
import RangePicker from 'components/range-picker';
import Search from 'components/instructor-bar/search';

// MAIN //

class FullscreenActionDisplay extends Component {
	constructor( props ) {
		super( props );

		this.state = {filtered: props.actions };
	}

	componentWillReceiveProps( nextProps ) {
		let newState = {};
		if ( nextProps.actions !== this.props.actions ) {
			newState.filtered = nextProps.actions;
		} 

		if ( !isEmptyObject( newState ) ) {
			this.setState( newState );
		}
	}

	searchFilter = (value) => {
		const { filtered } = this.state;
		var i;
		var newFilter;
		newFilter = [];

		for ( i = 0; i < this.props.actions.length; i++ ) {
			// Now search for value
			if ( contains(this.props.actions[i].value, value) ) {
				newFilter.push(this.props.actions[i]);
			}
		}

		this.setState( { filtered: newFilter } );

	};

	renderListGroupItem = ( index, key ) => {
		const elem = this.state.filtered[ index ];
		return ( <ListGroupItem key={key}>
			{ this.props.showExtended ?
				<span style={{ textAlign: 'left' }}>
					<b>{elem.name}:</b> {elem.value}
				</span> :
				<span style={{ textAlign: 'left' }}>
					{elem.value}
				</span>
			}
			{ this.props.showExtended ?
				<Button
					bsSize="xs"
					style={{ float: 'right' }}
					onClick={this.props.deleteFactory( index )}
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
				<Search onClick={this.searchFilter}/>
			</Modal.Header>
			<Modal.Body style={{ height: 0.75 * window.innerHeight, width: 0.90 * window.innerWidth }} >
				<Grid>
					<Row>
						<Col md={6}>
							{ this.state.filtered.length > 0 ?
								<div style={{ marginLeft: 0, overflowY: 'scroll', height: 0.73 * window.innerHeight }}>
									<ReactList
										itemRenderer={this.renderListGroupItem}
										length={this.state.filtered.length}
										type="variable"
										pageSize={50}
									/>
								</div> :
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
				<Button onClick={this.props.toggleExtended}>{ this.props.showExtended ? 'Hide Extended' : 'Show Extended' }</Button>
				<Button onClick={this.props.toggleActions}>Close</Button>
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
	toggleActions: PropTypes.func.isRequired,
	toggleExtended: PropTypes.func.isRequired
};


// EXPORTS //


export default FullscreenActionDisplay;
