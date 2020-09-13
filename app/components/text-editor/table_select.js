// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import noop from '@stdlib/utils/noop';
import './table_select.css';


// MAIN //

class TableSelect extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			rows: 4,
			cols: 3,
			hoverRow: 0,
			hoverCol: 0
		};
	}

	onClickFactory = (row, col) => {
		return () => {
			this.setState({
				rows: row,
				cols: col
			});
		};
	}

	onMouseOverFactory = (row, col) => {
		return () => {
			this.setState({
				hoverRow: row,
				hoverCol: col
			});
		};
	}

	createTable = () => {
		const rows = new Array( 8 );
		let cols;
		for ( let i = 9; i > 0; i-- ) {
			// Index is i - 1
			cols = new Array( 8 );
			for ( let j = 9; j > 0; j-- ) {
				const handleClick = this.onClickFactory( i, j );
				const handleMouseOver = this.onMouseOverFactory( i, j );
				if ( j <= this.state.cols && i <= this.state.rows ) {
					cols[ j-1 ] = <td
						key={`${i}-${j}`}
						className="grid_select"
					>
						<div
							role="button" onClick={handleClick} onKeyPress={handleClick}
							onMouseOver={handleMouseOver} onFocus={handleMouseOver}
							tabIndex={0}
						>{i}-{j}</div>
					</td>;
				} else {
					cols[ j-1 ] = <td
						key={`${i}-${j}`}
						className="cell"
					>
						<div
							role="button" tabIndex={0}
							onClick={handleClick} onKeyPress={handleClick}
							onMouseOver={handleMouseOver} onFocus={handleMouseOver}
						>{i}-{j}</div>
					</td>;
				}
			}
			rows[ i-1 ] = <tr key={i}>{cols}</tr>;
		}
		const header = new Array( 9 );
		for ( let z = 0; z < header.length; z++ ) {
			if ( z <= this.state.cols - 1 ) {
				header[z] = <th key={z} className="selected_cols">{z + 1}</th>;
			} else {
				header[z] = <th key={z} className="un_selected_cols">{z + 1}</th>;
			}
		}
		return (
			<table className="tableSelect" align="center">
				<thead>{header}</thead>
				<tbody>{rows}</tbody>
			</table>
		);
	}

	insertTable = () => {
		// Reset state:
		this.setState({
			rows: 4,
			cols: 3,
			hoverRow: 0,
			hoverCol: 0
		});
		this.props.onHide({ rowCount: this.state.rows, colCount: this.state.cols });
	}

	render() {
		return (
			<Modal
				onHide={this.props.onHide}
				show={this.props.show}
			>
				<Modal.Header closeButton>
					<Modal.Title as="h5">
						{this.props.t('choose-dimensions')}
						{this.props.t('row')}: {this.state.hoverRow} {this.props.t('col')}: {this.state.hoverCol}
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div>
						{this.createTable()}
						<Button
							block={true}
							className="insert_button"
							variant="primary"
							align="center"
							onClick={this.insertTable}
						>
							{this.props.t( 'insert-table-spec', {
								rows: this.state.rows,
								cols: this.state.cols
							})}
						</Button>
					</div>
				</Modal.Body>
			</Modal> );
	}
}


// PROPERTIES //

TableSelect.propTypes = {
	onHide: PropTypes.func,
	show: PropTypes.bool.isRequired
};

TableSelect.defaultProps = {
	onHide: noop
};


// EXPORTS //

export default TableSelect;
