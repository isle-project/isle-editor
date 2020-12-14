// MODULES //

import React, { Fragment, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CopyToClipboard from 'react-copy-to-clipboard';
import ColorPicker from '@isle-project/components/color-picker';
import randomstring from '@isle-project/utils/randomstring/alphanumeric';
import Viewer from 'react-viewer';
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
const Image = ( props ) => {
	const [ showModal, setShowModal ] = useState( false );
	const [ showPicker, setShowPicker ] = useState( false );
	const [ attached, setAttached ] = useState( false );
	const containerDiv = useRef();
	const closeModal = () => {
		setShowModal( false );
		containerDiv.current = null;
	};
	let modal;
	if ( showModal ) {
		modal = <Fragment>
			<Modal
				show={showModal}
				onHide={closeModal}
				title={props.alt}
				backdrop={true}
				dialogClassName="modal-100w"
			>
				<Modal.Body
					style={{ height: 'calc(100vh - 80px)', 'position': 'relative' }}
				>
					<div style={{ height: '100%' }} ref={( div ) => {
						if ( !containerDiv.current ) {
							containerDiv.current = div;
							setAttached( !attached );
						}
					}} ></div>
					{ showPicker ? <ColorPicker
						variant="Compact"className="isle-image-picker"
						onChangeComplete={( value ) => {
							const div = document.getElementsByClassName( 'react-viewer-canvas' )[ 0 ];
							div.style.backgroundColor = value.hex;
						}}
					/> : null }
					<Viewer
						container={containerDiv.current}
						visible={showModal}
						images={[
							{
								src: props.src,
								alt: props.alt
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
										setShowPicker( !showPicker );
									}
								}
							]);
						}}
					/>
				</Modal.Body>
				<Modal.Footer>
					{ props.body ?
						<CopyToClipboard text={props.body} onCopy={closeModal}>
							<Button variant="secondary">
								{props.t('copy-svg')}
							</Button>
						</CopyToClipboard> : null
					}
					{ props.onShare ?
						<Button variant="secondary" onClick={() => {
							props.onShare( props.src );
							closeModal();
						}}>
							{props.t('share')}
						</Button> : null
					}
					<CopyToClipboard text={`<img src="${props.src}" width="400" height="300" />`} onCopy={closeModal}>
						<Button variant="secondary">
							{props.t('copy-link')}
						</Button>
					</CopyToClipboard>
					<Button variant="secondary" href={props.src} download="image.png" >
						{props.t('save-image')}
					</Button>
					<Button variant="secondary" onClick={closeModal}>
						{props.t('close')}
					</Button>
				</Modal.Footer>
			</Modal>
		</Fragment>;
	}
	return (
		<Fragment>
			<img
				className={`isle-image ${props.className}`}
				alt={props.alt}
				src={props.src}
				width={props.width}
				height={props.height}
				role="presentation"
				onClick={() => {
					if ( props.showModal ) {
						setShowModal( true );
					}
				}}
				onDragStart={( ev ) => {
					const plotData = {
						key: `<!--IMAGE_LOG:${props.id}_${randomstring( 6 )}-->`,
						value: `<img src="${props.body}" width="400" height="300" style="display: block; margin: 0 auto;" />`
					};
					ev.dataTransfer.setData( 'text', `<img src="${props.src}" width="400" height="300" />` );
					ev.dataTransfer.setData( 'text/html', plotData.value );
					ev.dataTransfer.setData( 'text/plain', plotData.key );
				}}
				style={props.style}
			/>
			{modal}
		</Fragment>
	);
};


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

export default withTranslation( 'Image' )( Image );
