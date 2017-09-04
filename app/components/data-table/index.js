// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';
import 'react-table/react-table.css';


// MAIN //

class DataTable extends Component {

	constructor( props ) {
		super( props );

		const keys = Object.keys( props.data );
		const nRows = props.data[ keys[ 0 ] ].length;
		const rows = new Array( nRows );
		for ( let i = 0; i < nRows; i++ ) {
			rows[ i ] = {};
			rows[ i ][ 'id' ] = i;
			for ( let j = 0; j < keys.length; j++ ) {
				let key = keys[ j ];
				rows[ i ][ key ] = props.data[ key ][ i ];
			}
		}
		if ( props.showRemove ) {
			for ( let i = 0; i < nRows; i++ ) {
				if ( !rows[ i ][ 'remove' ]) {
					rows[ i ][ 'remove' ] = false;
				}
			}
		}

		const columns = keys.map( key => {
			return {
				Header: key,
				accessor: key
			};
		});
		columns.unshift({
			Header: 'id',
			accessor: 'id'
		});
		if ( props.showRemove ) {
			columns.push({
				Header: "Remove",
				accessor: "remove",
				Cell: this.renderCheckboxRemovable,
				filterable: false
			});
		}

		this.state = {
			rows,
			columns
		};
	}

	renderCheckboxRemovable = ( cellInfo ) => {
		return (
			<input
				id="checkBox" type="checkbox"
				onClick={ e => {
					const rows = [ ...this.state.rows ];
					rows[ cellInfo.index ][ cellInfo.column.id ] = e.target.checked;
					this.setState({ rows });
					this.props.onClickRemove( rows );
				}}
			/>
		);
	  }

	render() {
		return <ReactTable
			data={this.state.rows}
			columns={this.state.columns}
			showPagination={true}
			sortable={true}
			resizable={true}
			filterable={true}
			showPageSizeOptions={false}
			defaultPageSize={50}
			style={{
				maxHeight: 500,
				fontSize: '12px',
				...this.props.style
			}}
		/>;
	}
}


// DEFAULT PROPERTIES //

DataTable.defaultProps = {
	maxHeight: 400,
	width: 600,
	style: {},
	onClickRemove(){},
	showRemove: false
};


// PROPERTY TYPES //

DataTable.propTypes = {
	data: PropTypes.oneOfType([
		PropTypes.array,
		PropTypes.object
	]).isRequired,
	maxHeight: PropTypes.number,
	width: PropTypes.number,
	onClickRemove: PropTypes.func,
	showRemove: PropTypes.bool
};


// EXPORTS //

export default DataTable;

