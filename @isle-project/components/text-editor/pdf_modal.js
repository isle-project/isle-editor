// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import SelectInput from '@isle-project/components/input/select';
import NumberInput from '@isle-project/components/input/number';
import pageSizes from './page_sizes.json';
import './pdf_modal.css';


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
	};

	savePDF = () => {
		const config = {};
		const pageDims = {};
		if ( this.state.useString ) {
			// If we use the string make page dimension the string:
			pageDims.width = 72 * pageSizes[this.state.pageSize].width;
			pageDims.height = 72 * pageSizes[this.state.pageSize].height;
		}
		if ( !this.state.useString || this.state.pageSize === 'POSTER' ) {
			if ( this.state.pageOptionOrientation === 'landscape' ) {
				pageDims.height = this.state.customWidth;
				pageDims.width = this.state.customHeight;
			} else {
				pageDims.height = this.state.customHeight;
				pageDims.width = this.state.customWidth;
			}
		}
		config.pageSize = pageDims;
		config.pageOrientation = this.state.pageOrientation;
		this.props.exportPDF( config );
	};

	clickHide = () => {
		this.setState( DEFAULT_STATE );
		this.props.onHide();
	};

	render() {
		return ( <Modal
			onHide={this.clickHide}
			show={this.props.show}
			id="save-modal"
		>
			<Modal.Header closeButton>
				<Modal.Title>{this.props.t('pdf-modal-title')}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Card border="primary" id="export-pdf-panel" >
					<Card.Body>
						<Row className="predefined-letter-button">
							<SelectInput
								legend={this.props.t('pick-predefined-value')}
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
								legend={this.props.t('pick-width')}
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
								legend={this.props.t('pick-height')}
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
									legend={this.props.t('orientation')}
									defaultValue={this.state.pageOrientation}
									options={['portrait', 'landscape']}
									onChange={( value )=>{
										if ( value !== this.state.pageOrientation ) {
											const oldWidth = this.state.visibleWidth;
											const oldHeight = this.state.visibleHeight;
											this.setState({
												pageOrientation: value,
												visibleWidth: oldHeight,
												visibleHeight: oldWidth,
												customWidth: 72 * oldHeight,
												customHeight: 72 * oldWidth
											});
										}
									}}
								/>
							</Col>
						</Row>
						<Button onClick={this.savePDF} block>{this.props.t('save')}</Button>
					</Card.Body>
				</Card>
			</Modal.Body>
		</Modal> );
	}
}


// PROPERTIES //

SaveModal.propTypes = {
	exportPDF: PropTypes.func,
	onHide: PropTypes.func,
	show: PropTypes.bool.isRequired
};

SaveModal.defaultProps = {
	exportPDF() {},
	onHide() {}
};


// EXPORTS //

export default SaveModal;
