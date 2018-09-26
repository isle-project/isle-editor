// MODULES //

import React, { Component } from 'react';
import Container from 'react-bootstrap/lib/Container';
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
			<Container>
				{chunks.map( ( chunk, id ) => {
					return (
						<Row key={`row${id}`} >
							{chunk}
						</Row>
					);
				})}
			</Container>
		);
	}
}


// EXPORTS //

export default GridLayout;
