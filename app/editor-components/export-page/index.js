// MODULES //

import React, { Component, Fragment } from 'react';
import Container from 'react-bootstrap/lib/Container';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import ExportLesson from './export_lesson.js';
import UploadLesson from './upload_lesson.js';
import HeaderUpperBar from 'editor-components/header-upper-bar';
import './export_page.css';


// MAIN //

class ExportPage extends Component {
	constructor( props ) {
		super( props );
	}
	render() {
		return (
			<Fragment>
				<HeaderUpperBar backToEditor title="Export" />
				<div className="export-page">
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
			</Fragment>
		);
	}
}


// EXPORTS //

export default ExportPage;
