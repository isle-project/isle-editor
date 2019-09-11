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
	}

	handlePDFExport = () => {
		this.props.saveAsPDF();
		this.props.onHide();
	}

	handlePNGExport = () => {
		this.props.saveAsPNG();
		this.props.onHide();
	}

	render() {
		const session = this.props.session;
		let ownerDate;
		let ownerName;
		if ( this.state.ownerFile ) {
			ownerDate = new Date( this.state.ownerFile.updatedAt );
			ownerName = this.state.ownerFile.name;
		}
		return ( <Modal
			onHide={this.clickHide}
			show={this.props.show}
			container={this.props.container}
			dialogClassName="modal-w30"
		>
			<Modal.Header closeButton>
				<Modal.Title as="h4">Download Slides</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				{ this.props.pdf ? <Button size="large" variant="secondary" block onClick={this.clickHide} >
					<a className="unstyled-link" href={this.props.pdf} download >
						Download original PDF
					</a>
				</Button> : null }
				{ this.state.ownerFile ? <Button size="large" variant="secondary" block onClick={this.clickHide}>
					<a className="unstyled-link" href={session.server+'/'+this.state.ownerFile.filename} download>
						Download PDF with instructor annotations <br />
						<small>(last updated: {ownerDate.toDateString() + ', ' + ownerDate.toLocaleTimeString()} by {ownerName})</small>
					</a>
				</Button> : null }
				<Button variant="secondary" size="large" onClick={this.handlePDFExport} block >
					Export my annotations as PDF
				</Button>
				<Button variant="secondary" size="large" onClick={this.handlePNGExport} block >
					Export current slide as PNG
				</Button>
			</Modal.Body>
		</Modal> );
	}
}


// PROPERTIES //

SaveModal.propTypes = {
	container: PropTypes.object.isRequired,
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
