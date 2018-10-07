// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';
import Tooltip from 'components/tooltip';


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
	}

	render() {
		return (
			<Fragment>
				<Tooltip
					id="fullscreen_tooltip"
					placement="bottom"
					tooltip="Toggle FullScreen"
				>
					<Button
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
							{this.props.header}
						</Modal.Title>
					</Modal.Header>
					<Modal.Body
						style={{
							height: 0.75 * window.innerHeight,
							width: '100%',
							fontSize: 32,
							overflow: 'scroll'
						}}
					>
						{this.props.table}
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={this.toggleFullscreen}>Close</Button>
					</Modal.Footer>
				</Modal>
			</Fragment>
		);
	}
}


// PROPERTIES //

FullscreenButton.propTypes = {
	header: PropTypes.string,
	table: PropTypes.node.isRequired
};

FullscreenButton.defaultProps = {
	header: 'Fullscreen Display'
};


// EXPORTS //

export default FullscreenButton;
