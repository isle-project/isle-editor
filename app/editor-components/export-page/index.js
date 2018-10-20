// MODULES //

import React, { Component } from 'react';
import Container from 'react-bootstrap/lib/Container';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import { Link } from 'react-router-dom';
import ExportLesson from './export_lesson.js';
import UploadLesson from './upload_lesson.js';
import './export_page.css';


// MAIN //

class ExportPage extends Component {
	constructor( props ) {
		super( props );
	}
	render() {
		return (
			<div className="export-page">
				<Link
					to="/"
					className="export-page-link unselectable"
				>Back to Editor</Link>
				<br />
				<br />
				<Container>
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
				</Container>
			</div>
		);
	}
}


// EXPORTS //

export default ExportPage;
