// MODULES //

import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import chunkify from 'compute-chunkify';


// MAIN //

class GridLayout extends Component {
	render() {
		const chunks = chunkify( this.props.children, 4 );
		for ( let i = 0; i < chunks.length; i++ ) {
			let chunk = chunks[ i ];
			for ( let j = 0; j < chunk.length; j++ ) {
				if ( chunk[ j ]) {
					chunk[ j ] = <Col key={`cell${i}${j}`} xs={6} md={3}>
						{chunk[ j ]}
					</Col>;
				} else {
					chunk[ j ] = null;
				}
			}
		}
		return (
			<Grid>
				{chunks.map( ( chunk, id ) => {
					return (
						<Row key={`row${id}`} >
							{chunk}
						</Row>
					);
				})}
			</Grid>
		);
	}
}


// EXPORTS //

export default GridLayout;
