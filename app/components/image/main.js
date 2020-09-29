// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CopyToClipboard from 'react-copy-to-clipboard';
import ColorPicker from 'components/color-picker';
import randomstring from 'utils/randomstring/alphanumeric';
import Viewer from 'react-viewer';
import './load_translations.js';
import './image.css';


// MAIN //

/**
* Component to display an image.
*
* @property {string} id - component identifier
* @property {string} src - image source location
* @property {string} alt - image description
* @property {string} body - base64 encoded data of image
* @property {number} height - image height (in px)
* @property {number} width - image width (in px)
* @property {boolean} showModal - controls whether to display fullscreen modal view
* @property {string} className - class name
* @property {Object} style - CSS inline styles
* @property {Function} onShare - callback invoked with the image if the "share" button is clicked
*/
class Image extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			showModal: false,
			showPicker: false
		};
	}

	closeModal = () => {
		this.setState({ showModal: false });
	}

	renderModal() {
		if ( !this.state.showModal ) {
			this.containerDiv = null;
			return null;
		}
		return (
			<Fragment>
				<Modal
					show={this.state.showModal}
					onHide={this.closeModal}
					title={this.props.alt}
					backdrop={true}
					dialogClassName="modal-100w"
				>
					<Modal.Body
						style={{ height: 'calc(100vh - 80px)', 'position': 'relative' }}
					>
						<div style={{ height: '100%' }} ref={( div ) => {
							if ( !this.containerDiv ) {
								this.containerDiv = div;
								this.forceUpdate();
							}
						}} ></div>
						{ this.state.showPicker ? <ColorPicker
							variant="Compact"className="isle-image-picker"
							onChangeComplete={( value ) => {
								const div = document.getElementsByClassName( 'react-viewer-canvas' )[ 0 ];
								div.style.backgroundColor = value.hex;
							}}
						/> : null }
						{ this.containerDiv ? <Viewer
							container={this.containerDiv}
							visible={this.state.showModal}
							images={[
								{
									src: this.props.src,
									alt: this.props.alt
								}
							]}
							noNavbar noClose showTotal={false}
							downloadable={false}
							changeable={false}
							zoomSpeed={0.1}
							customToolbar={( toolbars ) => {
								return toolbars.concat([
									{
										key: 'Background',
										render: <i className="fas fa-tint"></i>,
										onClick: () => {
											this.setState({
												showPicker: !this.state.showPicker
											});
										}
									}
								]);
							}}
						/> : null }
					</Modal.Body>
					<Modal.Footer>
						{ this.props.body ?
							<CopyToClipboard text={this.props.body} onCopy={this.closeModal}>
								<Button variant="secondary">
									{this.props.t('copy-svg')}
								</Button>
							</CopyToClipboard> : null
						}
						{ this.props.onShare ?
							<Button variant="secondary" onClick={() => {
								this.props.onShare( this.props.src );
								this.closeModal();
							}}>
								{this.props.t('share')}
							</Button> : null
						}
						<CopyToClipboard text={`<img src="${this.props.src}" width="400" height="300" />`} onCopy={this.closeModal}>
							<Button variant="secondary">
								{this.props.t('copy-link')}
							</Button>
						</CopyToClipboard>
						<Button variant="secondary" href={this.props.src} download="image.png" >
							{this.props.t('save-image')}
						</Button>
						<Button variant="secondary" onClick={this.closeModal}>
							{this.props.t('close')}
						</Button>
					</Modal.Footer>
				</Modal>
			</Fragment>
		);
	}

	render() {
		return (
			<Fragment>
				<img
					className={`isle-image ${this.props.className}`}
					alt={this.props.alt}
					src={this.props.src}
					width={this.props.width}
					height={this.props.height}
					role="presentation"
					onClick={() => {
						if ( this.props.showModal ) {
							this.setState({
								showModal: true
							});
						}
					}}
					onDragStart={( ev ) => {
						const plotData = {
							key: `<!--IMAGE_LOG:${this.props.id}_${randomstring( 6 )}-->`,
							value: `<img src="${this.props.body}" width="400" height="300" style="display: block; margin: 0 auto;" />`
						};
						ev.dataTransfer.setData( 'text', `<img src="${this.props.src}" width="400" height="300" />` );
						ev.dataTransfer.setData( 'text/html', plotData.value );
						ev.dataTransfer.setData( 'text/plain', plotData.key );
					}}
					style={this.props.style}
				/>
				{this.renderModal()}
			</Fragment>
		);
	}
}


// PROPERTIES //

Image.propTypes = {
	src: PropTypes.string.isRequired,
	alt: PropTypes.string,
	body: PropTypes.string,
	height: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	]),
	width: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	]),
	id: PropTypes.string,
	showModal: PropTypes.bool,
	className: PropTypes.string,
	style: PropTypes.object,
	onShare: PropTypes.func
};

Image.defaultProps = {
	body: null,
	className: '',
	id: null,
	height: null,
	width: null,
	onShare: null,
	showModal: true,
	alt: '',
	style: {}
};


// EXPORTS //

export default withTranslation( 'image' )( Image );
