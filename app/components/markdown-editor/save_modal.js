// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';
import Panel from 'react-bootstrap/lib/Panel';
import SelectInput from 'components/input/select';
import CheckboxInput from 'components/input/checkbox';
import NumberInput from 'components/input/number';

// MAIN //

class SaveModal extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			openPDF: false,
			pageSize: 'LETTER',
			customSize: false,
			customWidth: 11 * 72,
			customHeight: 8.5 * 72,
			useString: true,
			pageOrientation: 'portrait'
		};
	}

	togglePDFMenu = () => {
		this.setState({
			openPDF: !this.state.openPDF
		});
	}

	savePDF = () => {
		var config = {};
		var pageDims;
		if ( this.state.useString ) {
			// If we use the string make it the string
			pageDims = this.state.pageSize;
		} else {
			pageDims = {};
			pageDims.height = this.state.customHeight;
			pageDims.width = this.state.customWidth;
		}
		config.pageSize = pageDims;
		config.pageOrientation = this.state.pageOrientation;
		this.props.exportPDF(config);
	}

	clickHide = () => {
		this.setState({
			openPDF: false,
			customSize: false
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
								<CheckboxInput
									legend="Custom Page Dimensions?"
									defaultValue={false}
									onChange={( value )=>{
										this.setState({
											customSize: value
										});
									}}
								/>
								<SelectInput
									legend="Orientation"
									defaultValue={'portrait'}
									options={['portrait', 'landscape']}
									onChange={( value )=>{
										this.setState({
											pageOrientation: value
										});
									}}
								/>
								<Panel expanded={this.state.customSize}>
									<Panel.Collapse>
										<Panel.Body>
											<div>
												<SelectInput
													legend="Pick a predefined value"
													defaultValue={'LETTER'}
													options={['LETTER', 'A4', 'A5', 'A10', 'LEGAL', 'EXECUTIVE', 'TABLOID']}
													onChange={( value )=>{
														this.setState({
															pageSize: value,
															useString: true
														});
													}}
												/>
											</div>
											<div>
												<p>Custom Sizes</p>
												<NumberInput
													legend="Pick the width (Inches)"
													defaultValue={8.5}
													min={1}
													max={50}
													step={0.5}
													onChange={( value ) =>{
														this.setState({
															customWidth: 72 * value,
															useString: false
														});
													}}
												/>
												<NumberInput
													legend="Pick the height (Inches)"
													defaultValue={11.5}
													min={1}
													max={50}
													step={0.5}
													onChange={( value ) =>{
														this.setState({
															customHeight: 72 * value,
															useString: false
														});
													}}
												/>
											</div>
										</Panel.Body>
									</Panel.Collapse>
								</Panel>
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
