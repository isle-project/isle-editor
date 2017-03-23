// MODULES //

import React, { Component, PropTypes } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Dimensions from 'components/dimensions';
import CopyToClipboard from 'react-copy-to-clipboard';


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
						width,
						height: 'auto',
						cursor: 'zoom-in'
					}}
					role="presentation"
					src={ this.props.src }
					onClick={ () => {
						this.setState({
							showModal: true
						});
					}}
					onDragStart={ ( ev ) => {
						ev.dataTransfer.setData( 'text', `<img src=${this.props.src} width="400" height="300" />` );
					}}
				/>
				<Modal
					show={this.state.showModal}
					onHide={closeModal}
					dialogClassName="isleImageModal"
					title={this.props.title}
					backdrop={true}
					rootClose={true}
				>
					<Modal.Header closeButton>
						<Modal.Title id="contained-modal-title-lg">{this.props.title}</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<img
							src={ this.props.src }
							style={{
								margin: 'auto',
								display: 'block',
							}}
							width="100%"
						/>
					</Modal.Body>
					<Modal.Footer>
						{ this.props.body ?
							<CopyToClipboard text={this.props.body} onCopy={closeModal}><Button>Copy SVG</Button></CopyToClipboard> : null
						}
						<CopyToClipboard text={`<img src=${this.props.src} width="400" height="300" />`} onCopy={closeModal}><Button>Copy Link</Button></CopyToClipboard>
						<Button href={this.props.src} download="plot.png" >Save Plot</Button>
					</Modal.Footer>
				</Modal>
			</span>
		);
	}
}


// PROPERTY TYPES //

Image.propTypes = {
	src: PropTypes.string.isRequired,
	title: PropTypes.string
};


// DEFAULT PROPERTIES //

Image.defaultProps = {
	title: 'Image'
};


// EXPORTS //

export default Dimensions( Image );
