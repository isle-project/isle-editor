// MODULES //

import React, { Component, PropTypes } from 'react';
import Dimensions from 'components/dimensions';
import { Table, Column, Cell } from 'fixed-data-table';
import floor from '@stdlib/math/base/special/floor';
import isArray from '@stdlib/utils/is-array';


// FUNCTIONS //

const createTableFromArray = (
	data,
	{ containerWidth, columnNames, columnWidth, maxHeight },
	tableWidth
) => {
	const keys = Object.keys( data[ 0 ]);
	if ( !columnWidth ) {
		columnWidth = floor( ( tableWidth - 15 ) / keys.length );
	}
	return (
		<Table
			rowHeight={30}
			rowsCount={data.length}
			width={tableWidth}
			maxHeight={maxHeight}
			headerHeight={30}
		>
			{keys.map( ( key, idx ) => {
				return (
					<Column
						key={idx}
						header={<Cell>{columnNames ? columnNames[ idx ] : key}</Cell>}
						cell={ ({rowIndex, ...props }) => (
							<Cell {...props}>
								{ data[ rowIndex ][ key ] }
							</Cell>
						)}
						width={ isArray( columnWidth ) ? columnWidth[ idx ] : columnWidth }
					>
					</Column>
				);
			})}
		</Table>
	);
};

const createTableFromObject = (
	data,
	{ containerWidth, columnNames, columnWidth, maxHeight },
	tableWidth
) => {
	const keys = Object.keys( data );
	const nRows = data[ keys[ 0 ] ].length;
	if ( !columnWidth ) {
		columnWidth = floor( ( tableWidth - 15 ) / keys.length );
	}
	return (
		<Table
			rowHeight={30}
			rowsCount={nRows}
			width={tableWidth}
			maxHeight={maxHeight}
			headerHeight={30}
		>
			{keys.map( ( key, idx ) => {
				return (
					<Column
						key={idx}
						header={<Cell>{columnNames ? columnNames[ idx ] : key}</Cell>}
						cell={ ({rowIndex, ...props }) => (
							<Cell {...props}>
								{ data[ key ][ rowIndex ] }
							</Cell>
						)}
						width={ isArray( columnWidth ) ? columnWidth[ idx ] : columnWidth }
					>
					</Column>
				);
			})}
		</Table>
	);
};


// MAIN //

class DataTable extends Component {

	constructor( props ) {
		super( props );

		const margin = ( props.containerWidth * ( 1.0 - props.width ) ) / 2.0;
		const tableWidth = props.containerWidth - margin * 2.0;

		this.state = {
			table: createTableFromObject( props.data, props, tableWidth )
		};

		console.log( this.state.table )
	}

	componentWillReceiveProps( nextProps ) {
		if ( this.props.data !== nextProps.data ) {
			const margin = ( this.props.containerWidth * ( 1.0 - this.props.width ) ) / 2.0;
			const tableWidth = this.props.containerWidth - margin * 2.0;
			const table = createTableFromObject( nextProps.data, nextProps, tableWidth );
			this.setState({
				table
			});
		}
	}

	render() {
		return <div style={this.props.style}>
			{this.state.table}
		</div>;
	}

}


// DEFAULT PROPERTIES //

DataTable.defaultProps = {
	maxHeight: 400,
	width: 0.5,
	columnNames: null,
	columnWidth: null,
	style: {}
};


// PROPERTY TYPES //

DataTable.propTypes = {
	columnNames: PropTypes.array,
	columnWidth: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.arrayOf( PropTypes.number )
	]),
	data: PropTypes.oneOf(
		PropTypes.array,
		PropTypes.object
	).isRequired,
	maxHeight: PropTypes.number,
	width: PropTypes.number
};


// EXPORTS //

export default Dimensions( DataTable );

