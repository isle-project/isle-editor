// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Tooltip from '@isle-project/components/tooltip';


// MAIN //

class FullscreenButton extends Component {
	constructor() {
		super();

		this.state = {
			fullscreen: false
		};
	}

	toggleFullscreen = () => {
		this.setState({
			fullscreen: !this.state.fullscreen
		});
	};

	render() {
		const { t } = this.props;
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
						onClick={this.toggleFullscreen}
					>
						<div className="fa fa-window-maximize" />
					</Button>
				</Tooltip>
				<Modal
					show={this.state.fullscreen}
					onHide={this.toggleFullscreen}
					dialogClassName="modal-100w"
				>
					<Modal.Header closeButton>
						<Modal.Title as="h1">
							{this.props.header ? this.props.header : t('fullscreen-display')}
						</Modal.Title>
					</Modal.Header>
					<Modal.Body
						className="data-explorer-fullscreen-output"
						style={{
							height: 0.75 * window.innerHeight
						}}
					>
						{this.props.body}
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={this.toggleFullscreen}>
							{t('close')}
						</Button>
					</Modal.Footer>
				</Modal>
			</Fragment>
		);
	}
}


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
