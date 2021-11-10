// MODULES //

import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';
import isArray from '@stdlib/assert/is-array';


// MAIN //

class SaveModal extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			ownerFile: null
		};
	}

	componentDidMount() {
		this.props.session.getLessonOwnerFiles( ( err, files ) => {
			if ( isArray( files ) && files.length > 0 ) {
				files = files.filter( x => x.title === this.props.id+'.pdf' );
				this.setState({
					ownerFile: files[ files.length - 1 ]
				});
			}
		});
	}

	clickHide = () => {
		this.props.onHide();
	};

	handlePDFExport = () => {
		this.props.saveAsPDF();
		this.props.onHide();
	};

	handlePNGExport = () => {
		this.props.saveAsPNG();
		this.props.onHide();
	};

	render() {
		const session = this.props.session;
		let ownerDate;
		let ownerName;
		if ( this.state.ownerFile ) {
			ownerDate = new Date( this.state.ownerFile.updatedAt );
			ownerName = this.state.ownerFile.name;
		}
		const { t } = this.props;
		return ( <Modal
			onHide={this.clickHide}
			show={this.props.show}
			dialogClassName="modal-w30"
		>
			<Modal.Header closeButton>
				<Modal.Title as="h4">{t('download')}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<div className="d-grid gap-2" >
					{ this.props.pdf ? <Button className="sketchpad-download-link-btn" size="large" variant="secondary" onClick={this.clickHide} >
						<a className="unstyled-link sketchpad-download-link" href={this.props.pdf} download >
							{t('download-original')}
						</a>
					</Button> : null }
					{ this.state.ownerFile ? <Button size="large" variant="secondary" onClick={this.clickHide}>
						<a className="unstyled-link" href={session.server+'/'+this.state.ownerFile.filename} download>
							{t('download-instructor-annotations')}<br />
							<small>({t('last-updated')}: {ownerDate.toDateString() + ', ' + ownerDate.toLocaleTimeString()} {t('by')} {ownerName})</small>
						</a>
					</Button> : null }
					<Button variant="secondary" size="large" onClick={this.handlePDFExport} >
						{t('export-pdf')}
					</Button>
					<Button variant="secondary" size="large" onClick={this.handlePNGExport} >
						{t('export-png')}
					</Button>
				</div>
			</Modal.Body>
		</Modal> );
	}
}


// PROPERTIES //

SaveModal.propTypes = {
	id: PropTypes.string.isRequired,
	onHide: PropTypes.func,
	pdf: PropTypes.string,
	saveAsPDF: PropTypes.func.isRequired,
	saveAsPNG: PropTypes.func.isRequired,
	session: PropTypes.object.isRequired,
	show: PropTypes.bool.isRequired
};

SaveModal.defaultProps = {
	pdf: null,
	onHide() {}
};


// EXPORTS //

export default SaveModal;
