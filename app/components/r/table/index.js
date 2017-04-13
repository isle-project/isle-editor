// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dimensions from 'components/dimensions';
import { Table, Column, Cell } from 'fixed-data-table';
import request from 'request';
import isArray from '@stdlib/utils/is-array';
import floor from '@stdlib/math/base/special/floor';
import Spinner from 'components/spinner';
import createPrependCode from 'components/r/utils/create-prepend-code';


// CONSTANTS //

import { OPEN_CPU_DEFAULT_SERVER, OPEN_CPU_IDENTITY } from 'constants/opencpu.js';
const STDOUT_REGEX = /stdout/;


// FUNCTIONS //

const createTable = ( data, { containerWidth, columnNames, columnWidth, maxHeight }, tableWidth ) => {
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


// MAIN //

class RTable extends Component {

	constructor( props ) {
		super( props );

		this.state = {
			data: null,
			last: '',
			waiting: false
		};

		this.getTable = ( nextProps ) => {
			let code;
			if ( nextProps ) {
				code = nextProps.code;
			} else {
				code = this.props.code;
			}
			if ( code !== this.state.last ) {
				this.setState({
					waiting: true,
					last: this.props.code,
				});
				let jsonCode = 'library( jsonlite );\n';
				let prependCode = createPrependCode( this.props.libraries, this.props.prependCode );

				jsonCode = jsonCode +
					prependCode +
					code.replace( /\n\s*([ A-Z0-9._\(\)]+)\n*$/i, '\n toJSON($1)' );

				const OPEN_CPU = global.ISLE.rshell && global.ISLE.rshell.server ?
					global.ISLE.rshell.server :
					OPEN_CPU_DEFAULT_SERVER;

				request.post( OPEN_CPU + OPEN_CPU_IDENTITY, {
					form: {
						x: jsonCode
					}
				}, ( error, response, body ) => {
					if ( !error ) {
						const arr = body.split( '\n' );
						for ( let i = 0; i < arr.length; i++ ) {
							let elem = arr[ i ];
							if ( STDOUT_REGEX.test( elem ) === true ) {
								request.get( OPEN_CPU + elem, ( err, getResponse, getBody ) => {
									this.setState({
										data: JSON.parse( getBody ),
										waiting: false
									});
								});
								break;
							}
						}
					}
				});
			}
		};
	}

	componentWillMount() {
		this.getTable();
	}

	componentWillReceiveProps( nextProps ) {
		this.getTable( nextProps );
	}

	render() {
		const margin = ( this.props.containerWidth * ( 1.0 - this.props.width ) ) / 2.0;
		const tableWidth = this.props.containerWidth - margin * 2.0;
		return (
			<div className="rtable" style={{
			}}>
				<Spinner running={this.state.waiting} width={256} height={128}/>
				{ this.state.data && !this.state.waiting ?
					<div
						style={{
							marginLeft: margin,
							marginRight: margin,
							marginTop: '10px',
							marginBottom: '10px'
						}}
					>
						{createTable( this.state.data, this.props, tableWidth )}
					</div> :
					<span />
				}
			</div>
		);
	}
}


// PROPERTY TYPES //

RTable.propTypes = {
	code: PropTypes.string,
	maxHeight: PropTypes.number,
	columnNames: PropTypes.array,
	columnWidth: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.arrayOf( PropTypes.number )
	]),
	libraries: PropTypes.array,
	prependCode: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.array
	]),
	width: PropTypes.number
};


// DEFAULT PROPERTIES //

RTable.defaultProps = {
	code: '',
	maxHeight: 400,
	width: 0.5,
	columnNames: null,
	columnWidth: null,
	libraries: [],
	prependCode: ''
};


// EXPORTS //

export default Dimensions( RTable );
