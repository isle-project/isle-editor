// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
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
						style={{ position: 'absolute', top: '10px', right: '32px' }}
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
							Decision Tree
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
						<div className="decision-tree decision-tree-fullscreen">
							{this.props.tree}
						</div>
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
	tree: PropTypes.node.isRequired
};


// EXPORTS //

export default FullscreenButton;
