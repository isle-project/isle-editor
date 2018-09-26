// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';
import CopyToClipboard from 'react-copy-to-clipboard';
import { generate } from 'randomstring';
import Dimensions from 'components/dimensions';
import './image.css';


// FUNCTIONS //

const calculateMargin = ( containerWidth ) => {
	let sizeType = 0;
	if ( containerWidth <= 1400 && containerWidth >= 1024 ) {
		sizeType = 1;
	}
	else if ( containerWidth < 1024 && containerWidth >= 800 ) {
		sizeType = 2;
	}
	else if ( containerWidth < 800 ) {
		sizeType = 3;
	}
	switch ( sizeType ) {
	default:
	case 0:
		return {
			width: containerWidth * 0.6,
			margin: ( containerWidth - ( containerWidth * 0.6 ) ) / 2.0
		};
	case 1:
		return {
			width: containerWidth * 0.7,
			margin: ( containerWidth - ( containerWidth * 0.7 ) ) / 2.0
		};
	case 2:
		return {
			width: containerWidth * 0.8,
			margin: ( containerWidth - ( containerWidth * 0.8 ) ) / 2.0
		};
	case 3:
		return {
			width: containerWidth * 0.9,
			margin: ( containerWidth - ( containerWidth * 0.9 ) ) / 2.0
		};
	}
};


// MAIN //

/**
* Component to display an image.
*
* @property {string} src - image source location
* @property {string} body - base64 encoded data of image
* @property {number} containerWidth - width of container (in px)
* @property {number} height - image height (in px)
* @property {number} width - image width (in px)
* @property {string} id - component identifier
* @property {boolean} showModal - controls whether to display fullscreen modal view
* @property {string} title - image title
* @property {Function} onShare - callback invoked with the image if the "share" button is clicked
*/
class Image extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			showModal: false
		};
	}

	render() {
		const { width, margin } = calculateMargin( this.props.containerWidth );
		const closeModal = () => this.setState({ showModal: false });
		return (
			<span>
				<img
					style={{
						marginLeft: margin,
						marginRight: margin,
						width: this.props.width ? this.props.width : width,
						height: this.props.height ? this.props.height : 'auto',
						cursor: 'zoom-in'
					}}
					role="presentation"
					src={this.props.src}
					onClick={() => {
						if ( this.props.showModal ) {
							this.setState({
								showModal: true
							});
						}
					}}
					onDragStart={( ev ) => {
						const plotData = {
							key: `<!--IMAGE_LOG:${this.props.id}_${generate( 6 )}-->`,
							value: `<img src="${this.props.body}" width="400" height="300" style="display: block; margin: 0 auto;" />`
						};
						ev.dataTransfer.setData( 'text', `<img src="${this.props.src}" width="400" height="300" />` );
						ev.dataTransfer.setData( 'text/html', plotData.value );
						ev.dataTransfer.setData( 'text/plain', plotData.key );
					}}
				/>
				<Modal
					show={this.state.showModal}
					onHide={closeModal}
					dialogClassName="image-modal"
					title={this.props.title}
					backdrop={true}
					rootClose={true}
				>
					<Modal.Header closeButton>
						<Modal.Title id="contained-modal-title-lg">{this.props.title}</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<img
							src={this.props.src}
							style={{
								margin: 'auto',
								display: 'block'
							}}
							width="100%"
						/>
					</Modal.Body>
					<Modal.Footer>
						{ this.props.body ?
							<CopyToClipboard text={this.props.body} onCopy={closeModal}><Button variant="secondary">Copy SVG</Button></CopyToClipboard> : null
						}
						{ this.props.onShare ?
							<Button variant="secondary" onClick={() => {
								this.props.onShare( this.props.src );
								closeModal();
							}}>
								Share
							</Button> : null
						}
						<CopyToClipboard text={`<img src="${this.props.src}" width="400" height="300" />`} onCopy={closeModal}><Button variant="secondary">Copy Link</Button></CopyToClipboard>
						<Button variant="secondary" href={this.props.src} download="plot.png" >Save Plot</Button>
						<Button variant="secondary" onClick={closeModal}>Close</Button>
					</Modal.Footer>
				</Modal>
			</span>
		);
	}
}


// PROPERTY TYPES //

Image.propTypes = {
	body: PropTypes.string,
	containerWidth: PropTypes.number.isRequired,
	height: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	]).isRequired,
	width: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	]),
	id: PropTypes.string,
	onShare: PropTypes.func,
	showModal: PropTypes.bool,
	src: PropTypes.string.isRequired,
	title: PropTypes.string
};


// DEFAULT PROPERTIES //

Image.defaultProps = {
	body: null,
	id: null,
	width: null,
	onShare: null,
	showModal: true,
	title: 'Image'
};


// EXPORTS //

export default Dimensions( Image );
