// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';
import ReactDom from 'react-dom';
import ReactTable from 'react-table';
import noop from '@stdlib/utils/noop';
import NumberInput from 'components/input/number';
import BootstrapTable from 'react-bootstrap-table-next';


// MAIN //


class TableSelect extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			rows: 4,
			cols: 3,
			dataArray: [ ['  ', '  ', '  '],
						['  ', '  ', '  '],
						['  ', '  ', '  '],
						['  ', '  ', '  ']],
			colNames: [
				{
					datafield: 'Column1',
					text: 'Column1'
				},
				{
					datafield: 'Column2',
					text: 'Column2'
				},
				{
					datafield: 'Column3',
					text: 'Column3'
				}],
			shouldUpdate: true,
			showTableText: false
		};
	}

	shouldComponentUpdate(nextProps, nextState, nextContext) {
		// Only update when we click the button
		return this.state.shouldUpdate;
	}

	makeInitialState = () => {
		var tblTextPart = '| Column1 | Column2 | Column3 |\n| --- | --- | --- |\n'; // eslint-disable-line no-unused-vars
		tblTextPart += '| Cell | Cell | Cell |\n| Cell | Cell | Cell |\n';
		tblTextPart += '| Cell | Cell | Cell |\n| Cell | Cell | Cell |\n';
		const newState = {
			rows: 4,
			cols: 3,
			dataArray: [ ['  ', '  ', '  '],
						['  ', '  ', '  '],
						['  ', '  ', '  '],
						['  ', '  ', '  '] ],
			colNames: [
				{
					datafield: 'Column1',
					text: 'Column1'
				},
				{
					datafield: 'Column2',
					text: 'Column2'
				},
				{
					datafield: 'Column3',
					text: 'Column3'
				}],
			tableText: <div>tblTextPart</div>
		};
		return newState;
	}

	updateData = (rows, cols) => {
		var datTmp = [];
		var sub;
		for ( var i = 0; i < rows; i++ ) {
			sub = new Array(cols);
			for ( var j = 0; j < cols; j++ ) {
				sub[j] = 'Cell' + (i + 1) + ',' + (j+ 1);
			}
			datTmp.push(sub);
		}
		return datTmp;
	}

	updateColNames = (cols) => {
		var colTmp = [];
		var subObj;
		for ( var i = 0; i < cols; i++ ) {
			subObj = {};
			subObj.datafield = 'Column' + (i + 1);
			subObj.text = 'Column' + (i + 1);
			colTmp.push(subObj);
		}
		return colTmp;
	}

	handleRowChange = ( value ) => {
		var newData = this.updateData(value, this.state.cols);
		this.setState({
			rows: value,
			dataArray: newData,
			shouldUpdate: true
		});
	}

	handleColChange = ( value ) => {
		var newData = this.updateData(this.state.rows, value);
		var newCols = this.updateColNames(value);
		this.setState({
			cols: value,
			dataArray: newData,
			colNames: newCols,
			shouldUpdate: true
		});
	}

	toggleTableText = () => {
		var tableStr = '|';

		// First make the header
		for ( var colStrIndex = 0; colStrIndex < this.state.cols; colStrIndex++ ) {
			tableStr += ' Column' + (colStrIndex + 1) + ' |';
		}
		tableStr += '\n';

		// Now make the split
		for ( var splitIndex = 0; splitIndex < this.state.cols; splitIndex++ ) {
			tableStr += '| --- ';
		}
		tableStr += '|\n';

		// Now add the cells
		for ( var rowCount = 0; rowCount < this.state.rows; rowCount++ ) {
			for ( var colInRow = 0; colInRow < this.state.cols; colInRow++ ) {
				tableStr += '| Cell ';
			}
			tableStr += '|\n';
		}
		tableStr += '\n';
		this.setState({
			tableText: <pre>{tableStr}</pre>,
			showTableText: !this.state.showTableText
		});
	}

	render() {
		return (
			<Modal
				onHide={this.props.onHide}
				show={this.props.show}
			>
				<Modal.Header closeButton>
					<Modal.Title>Table Dimensions</Modal.Title>
					<NumberInput
						legend="Number of Rows"
						min={1}
						max={9}
						defaultValue={this.state.rows}
						onChange={this.handleRowChange}
					/>
					<NumberInput
						legend="Number of Columns"
						min={1}
						max={9}
						defaultValue={this.state.cols}
						onChange={this.handleColChange}
					/>
				</Modal.Header>
				<Modal.Body>
					<div>
						<BootstrapTable
							data={this.state.dataArray}
							columns={this.state.colNames}
							keyField='Column1' />
						<Button
							bsStyle="primary"
							onClick={this.toggleTableText}
							>
							Show Table in Markdown Text! Remember to click it after each row update.
						</Button>
					</div>
					<div>
						<pre>{this.state.showTableText && this.state.tableText}</pre>
					</div>
				</Modal.Body>
			</Modal> );
	}
}

// PROPERTY TYPES //

TableSelect.propTypes = {
	onHide: PropTypes.func,
	show: PropTypes.bool.isRequired
};

TableSelect.defaultProps = {
	onHide: noop
};

// EXPORTS //

export default TableSelect;
