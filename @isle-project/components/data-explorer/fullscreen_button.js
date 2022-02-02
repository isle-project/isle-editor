// MODULES //

import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Tooltip from '@isle-project/components/tooltip';


// MAIN //

const FullscreenButton = ( props ) => {
	const [ showModal, setShowModal ] = useState( false );
	const toggleFullscreen = () => {
		setShowModal( !showModal );
	};
	const { t } = props;
	return (
		<Fragment>
			<Tooltip
				id="fullscreen_tooltip"
				placement="bottom"
				tooltip={t('toggle-fullscreen')}
			>
				<Button
					aria-label={t('toggle-fullscreen')}
					variant="outline-danger"
					size="sm"
					onClick={toggleFullscreen}
				>
					<div className="fa fa-window-maximize" />
				</Button>
			</Tooltip>
			<Modal
				show={showModal}
				onHide={toggleFullscreen}
				dialogClassName="modal-100w"
				backdrop={true}
				alt="fullscreen"
			>
				<Modal.Header closeButton>
					<Modal.Title as="h1">
						{props.header ? props.header : t('fullscreen-display')}
					</Modal.Title>
				</Modal.Header>
				<Modal.Body
					className="data-explorer-fullscreen-output"
					style={{
						height: 0.75 * window.innerHeight
					}}
				>
					{props.body}
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={toggleFullscreen}>
						{t('close')}
					</Button>
				</Modal.Footer>
			</Modal>
		</Fragment>
	);
};


// PROPERTIES //

FullscreenButton.propTypes = {
	header: PropTypes.string,
	body: PropTypes.node.isRequired
};

FullscreenButton.defaultProps = {
	header: null
};


// EXPORTS //

export default FullscreenButton;
