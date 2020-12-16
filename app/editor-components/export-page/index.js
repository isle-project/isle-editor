// MODULES //

import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Loadable from '@isle-project/components/internal/loadable';
const ExportLesson = Loadable( () => import( './export_lesson.js' ) );
const UploadLesson = Loadable( () => import( './upload_lesson.js' ) );
import './export_page.css';


// MAIN //

class ExportPage extends Component {
	constructor( props ) {
		super( props );
	}
	render() {
		const { t } = this.props;
		return (
			<Container className="export-page">
				<Row>
					<Col md={5} >
						<UploadLesson {...this.props} />
					</Col>
					<Col md={2} >
						<h1 style={{ textAlign: 'center' }}> {t('or')} </h1>
					</Col>
					<Col md={5} >
						<ExportLesson {...this.props} />
					</Col>
				</Row>
			</Container>
		);
	}
}


// EXPORTS //

export default withTranslation( 'Editor' )( ExportPage );
