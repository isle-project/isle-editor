// MODULES //

import React, { Component } from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ExportLesson from './export_lesson.js';
import UploadLesson from './upload_lesson.js';


// MAIN //

class ExportPage extends Component {
	constructor( props ) {
		super( props );
	}
	render() {
		return (
			<div
				style={{
					marginLeft: '20px',
					marginRight: '20px',
					marginTop: '20px'
				}}
			>
				<Link
					to="/"
					style={{
						float: 'right',
						color: 'silver',
						position: 'absolute',
						top: '12px',
						right: '12px',
						fontSize: '26px',
						zIndex: 2
					}}
				>Back to Editor</Link>
				<br />
				<br />
				<Grid>
					<Row>
						<Col md={4} >
							<UploadLesson {...this.props} />
						</Col>
						<Col md={2} >
							<h1 style={{ textAlign: 'center' }}> OR </h1>
						</Col>
						<Col md={6} >
							<ExportLesson {...this.props} />
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}
}


// EXPORTS //

export default ExportPage;
