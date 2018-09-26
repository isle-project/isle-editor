/* eslint-disable */

// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import noop from '@stdlib/utils/noop';
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';
import Card from 'react-bootstrap/lib/Card';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import CheckboxInput from 'components/input/checkbox';
import NumberInput from 'components/input/number';
import OutputPanel from '../data-explorer/output_panel.js';
import pageSizes from './page_sizes.json';
import './figure_insert.css';

// ASSUME WE ARE IN A data-explorer

// FUNCTIONS //

function cutArray(arr, elems) {
	if ( arr.length <= elems ) {
		console.log('short circuiting early');
		return arr;
	}

	const len = arr.length;
	return arr.slice(len - elems, len);
}

// MAIN //

class FigureInsert extends Component {
	constructor( props ) {
		super( props );

		// Cut the array

		this.state = {
			rows: 2,
			cols: 2,
			htmlTableText: ''
		};
	}

	render() {
		return ( <Modal
			onHide={this.props.onHide}
			show={this.props.show}
		>
			<Modal.Header closeButton>
				<Modal.Title>Insert Plots</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Row>
					<Col xs={7} md={7}>
						<p>HTML table</p>
					</Col>
					<Col xs={5} md={5}>
						<h3 id="plot_side_insert">Plots</h3>
						{OutputPanel( this.props.studentPlots, noop )}
					</Col>
				</Row>
			</Modal.Body>
		</Modal> );
	}
}


// PROPERTY TYPES //

FigureInsert.propTypes = {
	graphsToShow: PropTypes.number,
	onHide: PropTypes.func,
	show: PropTypes.bool.isRequired,
	studentPlots: PropTypes.array,
	insertFunction: PropTypes.func
};

FigureInsert.defaultProps = {
	onHide() {},
	studentPlots: [],
	graphsToShow: 6,
	insertFunction: noop
};


// EXPORTS //

export default FigureInsert;
