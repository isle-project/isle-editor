// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import noop from '@stdlib/utils/noop';
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';
import Panel from 'react-bootstrap/lib/Panel';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import SelectInput from 'components/input/select';
import CheckboxInput from 'components/input/checkbox';
import NumberInput from 'components/input/number';
import pageSizes from './page_sizes.json';
import './save_modal.css';


// VARIABLES //

const DEFAULT_STATE = {
	openPDF: false,
	pageSize: 'LETTER',
	customSize: true,
	showPageOptions: false,
	pageOptionConfig: 'Predefined',
	customWidth: 8.5 * 72,
	customHeight: 11 * 72,
	useString: true,
	pageOrientation: 'portrait',
	visibleWidth: 8.5,
	visibleHeight: 11
};


// MAIN //

class SaveModal extends Component {
	constructor( props ) {
		super( props );

		this.state = DEFAULT_STATE;
	}

	togglePDFMenu = () => {
		if ( this.state.openPDF && this.state.showPageOptions ) {
			this.setState({
				openPDF: !this.state.openPDF,
				showPageOptions: !this.state.showPageOptions
			});
		} else {
			this.setState({
				openPDF: !this.state.openPDF
			});
		}
	}

	savePDF = () => {
		var config = {};
		var pageDims = {};
		if ( this.state.useString ) {
			// If we use the string make page dimension the string:
			pageDims.width = 72 * pageSizes[this.state.pageSize].width;
			pageDims.height = 72 * pageSizes[this.state.pageSize].height;
		}
		if ( !this.state.useString || this.state.pageSize === 'POSTER' ) {
			pageDims.height = this.state.customHeight;
			pageDims.width = this.state.customWidth;
		}
		config.pageSize = pageDims;
		config.pageOrientation = this.state.pageOrientation;
		this.props.exportPDF( config );
	}

	clickHide = () => {
		this.setState( DEFAULT_STATE );
		this.props.onHide();
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
					<div>
						<Button onClick={this.props.handleSave} bsStyle="primary" bsSize="large" block>
							Save (in browser)
						</Button>
					</div>
					<div>
						<Button onClick={this.props.exportHTML} bsStyle="primary" bsSize="large" block>
							Export as HTML
						</Button>
					</div>
					<div>
						<Button onClick={this.togglePDFMenu} bsStyle="primary" bsSize="large" block>
							Export as PDF
						</Button>
						<Panel id="export-pdf-panel" expanded={this.state.openPDF} onToggle={noop} >
							<Panel.Collapse>
								<Panel.Body>
									<Row className="predefined-letter-button">									
										<SelectInput
											legend="Pick a predefined value"
											defaultValue={this.state.pageSize}
											options={['LETTER', 'LEGAL', 'A4', 'B5', 'TABLOID', 'EXECUTIVE', 'POSTER', 'CUSTOM']}
											onChange={( value )=>{
												if ( value !== 'CUSTOM' ) {
													this.setState({
														pageSize: value,
														useString: true,
														visibleHeight: pageSizes[value].height,
														visibleWidth: pageSizes[value].width,
														customHeight: pageSizes[value].height * 72,
														customWidth: pageSizes[value].width * 72,
														pageOrientation: 'portrait'
													});
												} else {
													this.setState({
														pageSize: value,
														useString: false
													});
												}
											}}
										/>
									</Row>
									<Row className="dimension-select">
										<NumberInput
											legend="Pick the width (Inches)"
											defaultValue={this.state.visibleWidth}
											min={1}
											max={50}
											step={0.5}
											onChange={( value ) =>{
												// Make it custom if changed
												this.setState({
													pageSize: 'CUSTOM',
													customWidth: 72 * value,
													useString: false,
													visibleWidth: value
												});
											}}
										/>
										<NumberInput
											legend="Pick the height (Inches)"
											defaultValue={this.state.visibleHeight}
											min={1}
											max={50}
											step={0.5}
											onChange={( value ) =>{
												this.setState({
													pageSize: 'CUSTOM',
													customHeight: 72 * value,
													useString: false,
													visibleHeight: value
												});
											}}
										/>
									</Row>
									<Row className="showDimensions">
										<Col xs={6} md={6}>
											<SelectInput
												legend="Orientation"
												defaultValue={'portrait'}
												options={['portrait', 'landscape']}
												onChange={( value )=>{
													var oldWidth = this.state.visibleWidth;
													var oldHeight = this.state.visibleHeight;
													this.setState({
														pageOrientation: value,
														visibleWidth: oldHeight,
														visibleHeight: oldWidth
													});
												}}
											/>
										</Col>
									</Row>
									<Button onClick={this.savePDF} block>Save</Button>
								</Panel.Body>
							</Panel.Collapse>
						</Panel>
					</div>
					<div>
					<Button onClick={this.props.saveMarkdown} bsSize="large" block>
						Export Markdown Source (to restore later)
					</Button>
					</div>
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
