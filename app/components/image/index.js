// MODULES //

import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import Dimensions from 'components/dimensions';


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
				/>
				<Modal
					show={this.state.showModal}
					onHide={closeModal}
					bsSize="lg"
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
								display: 'block'
							}}
						/>
					</Modal.Body>
				</Modal>
			</span>
		);
	}
}


// PROPERTY TYPES //

Image.propTypes = {
	src: React.PropTypes.string.isRequired,
	title: React.PropTypes.string
};


// DEFAULT PROPERTIES //

Image.defaultProps = {
	title: 'Image'
};


// EXPORTS //

export default Dimensions( Image );
