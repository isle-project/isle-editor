// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';
import Panel from 'react-bootstrap/lib/Panel';


// MAIN //

class SaveModal extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			openPDF: false
		};
	}

	togglePDFMenu = () => {
		this.setState({
			openPDF: !this.state.openPDF
		});
	}

	savePDF = () => {
		this.props.exportPDF();
	}

	clickHide = () => {
		this.setState({
			openPDF: false
		}, () => {
			this.props.onHide();
		});
	}

	render() {
		return ( <Modal
			onHide={this.clickHide}
			show={this.props.show}
		>
			<Modal.Header closeButton>
				<Modal.Title>Save Report</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<div className="well">
					<Button onClick={this.props.handleSave} bsStyle="primary" bsSize="large" block>
						Save (in browser)
					</Button>
					<Button onClick={this.props.exportHTML} bsStyle="primary" bsSize="large" block>
						Export as HTML
					</Button>
					<Button onClick={this.togglePDFMenu} bsStyle="primary" bsSize="large" block>
						Export as PDF
					</Button>
					<Panel id="export-pdf-panel" expanded={this.state.openPDF}>
						<Panel.Collapse>
							<Panel.Body>
								<Button onClick={this.savePDF} >Save</Button>
							</Panel.Body>
						</Panel.Collapse>
					</Panel>
					<Button onClick={this.props.saveMarkdown} bsSize="large" block>
						Export Markdown Source (to restore later)
					</Button>
				</div>
			</Modal.Body>
		</Modal> );
	}
}


// PROPERTY TYPES //

SaveModal.propTypes = {
	exportHTML: PropTypes.func.isRequired,
	exportPDF: PropTypes.func.isRequired,
	handleSave: PropTypes.func.isRequired,
	onHide: PropTypes.func,
	saveMarkdown: PropTypes.func.isRequired,
	show: PropTypes.bool.isRequired
};

SaveModal.defaultProps = {
	onHide() {}
};


// EXPORTS //

export default SaveModal;
