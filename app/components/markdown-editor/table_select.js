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
import './table-select.css';


// MAIN //


class TableSelect extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			rows: 4,
			cols: 3,
			shouldUpdate: true,
			hoverRow: 0,
			hoverCol: 0
		};
	}

	shouldComponentUpdate(nextProps, nextState, nextContext) {
		return this.state.shouldUpdate;
	}

	onClickFactory = (row, col) => {
		return () => {
			this.setState({
				rows: row,
				cols: col,
				shouldUpdate: true
			});
		};
	}

	onMouseOverFactory = (row, col) => {
		return () => {
			this.setState({
				hoverRow: row,
				hoverCol: col,
				shouldUpdate: true
			});
		};
	}

	createTable = () => {
		var rows = new Array(8);
		var cols;
		for ( var i = 9; i > 0; i-- ) {
			// Index is i - 1
			cols = new Array(8);
			for ( var j = 9; j > 0; j-- ) {
				if ( (j <= this.state.cols) && (i <= this.state.rows) ) {
					cols[j - 1] = <td className="grid_select"
						onClick={this.onClickFactory(i, j)}
						onMouseOver={this.onMouseOverFactory(i, j)}
						>Cell</td>; // eslint-disable-line
				} else {
					cols[j - 1] = <td className="cell"
						onClick={this.onClickFactory(i, j)}
						onMouseOver={this.onMouseOverFactory(i, j)}
						>Cell</td>; // eslint-disable-line
				}
			}
			rows[i - 1] = <tr>{cols}</tr>;
		}
		return <table className="tableSelect" align="center"><tbody>{rows}</tbody></table>;
	}

	insertTableText = () => {
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
		this.props.onClick(tableStr, this.state.rows, this.state.cols);
		this.props.onHide();
	}

	render() {
		return (
			<Modal
				onHide={this.props.onHide}
				show={this.props.show}
			>
				<Modal.Header closeButton>
					<Modal.Title>Insert New Table</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<h4>Choose Table Dimensions</h4>
					<div>
						<p>Row: {this.state.hoverRow}</p>
						<p>Col: {this.state.hoverCol}</p>
						{this.createTable()}
						<Button
							bsStyle="primary"
							onClick={this.insertTableText}
							>
							Insert {this.state.rows} x {this.state.cols} table
						</Button>
					</div>
				</Modal.Body>
			</Modal> );
	}
}

// PROPERTY TYPES //

TableSelect.propTypes = {
	onClick: PropTypes.func,
	onHide: PropTypes.func,
	show: PropTypes.bool.isRequired
};

TableSelect.defaultProps = {
	onClick: noop,
	onHide: noop
};

// EXPORTS //

export default TableSelect;
