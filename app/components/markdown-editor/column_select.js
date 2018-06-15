// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';
import ReactDom from 'react-dom';
import ReactTable from 'react-table';
import noop from '@stdlib/utils/noop';
import NumberInput from 'components/input/number';
// import './column-select.css';


// MAIN //


class ColumnSelect extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			columns: 2
		};
	}

	insertColumn = () => {
		var lines = 1;
		var colText = '<!--Column1-->';
		for ( var i = 1; i < this.state.columns; i++ ) {
			colText += '\n\n<!--Column' + (i + 1) + '-->';
			lines += 2;
		}
		colText += '\n\n<!--Column-ENDCOUNT-' + (i + 1) + '-->\n';
		lines += 3;
		this.props.onClick(colText, lines);
		// Reset the state
		this.setState({
			columns: 2
		});
		this.props.onHide();
	}

	render() {
		return (
			<Modal
				onHide={this.props.onHide}
				show={this.props.show}
			>
				<Modal.Header closeButton>
					<Modal.Title className="columnSelect">Select Columns</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<NumberInput
						legend="Select Number of Columns"
						defaultValue={2}
						min={2}
						max={10}
						step={1}
						onChange={( value ) => {
							this.setState({
								columns: value
							});
						}}
					/>
					<div>
						<Button
							block={true}
							className="insert_button"
							bsStyle="primary"
							align="center"
							onClick={this.insertColumn}
							>
							Insert {this.state.columns} Columns
						</Button>
					</div>
				</Modal.Body>
			</Modal> );
	}
}

// PROPERTY TYPES //

ColumnSelect.propTypes = {
	onClick: PropTypes.func,
	onHide: PropTypes.func,
	show: PropTypes.bool.isRequired
};

ColumnSelect.defaultProps = {
	onClick: noop,
	onHide: noop
};

// EXPORTS //

export default ColumnSelect;
