// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Tooltip from 'components/tooltip';
import Gate from 'components/gate';


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
				<Gate owner >
					<Tooltip
						id="fullscreen_tooltip"
						placement="bottom"
						tooltip={this.props.t('fullscreen-tooltip')}
					>
						<Button
							variant="outline-secondary"
							size="sm"
							onClick={this.toggleFullscreen}
							style={{
								position: 'absolute',
								top: 0,
								right: 0,
								fontSize: 12
							}}
						>
							<span className="fa fa-window-maximize" />
						</Button>
					</Tooltip>
				</Gate>
				<Modal
					show={this.state.fullscreen}
					onHide={this.toggleFullscreen}
					dialogClassName="modal-100w"
				>
					<Modal.Header closeButton>
						<Modal.Title as="h1">
							{this.props.header || this.props.t('fullscreen-header')}
						</Modal.Title>
					</Modal.Header>
					<Modal.Body
						style={{
							height: 0.75 * window.innerHeight
						}}
					>
						<Card body
							className={`${this.props.className} panel-fullscreen-view`}
						>
							{this.props.body}
						</Card>
					</Modal.Body>
					<Modal.Footer>
						{this.props.footer}
						<Button onClick={this.toggleFullscreen}>
							{this.props.t('close')}
						</Button>
					</Modal.Footer>
				</Modal>
			</Fragment>
		);
	}
}


// PROPERTIES //

FullscreenButton.propTypes = {
	className: PropTypes.string,
	header: PropTypes.string,
	body: PropTypes.node.isRequired
};

FullscreenButton.defaultProps = {
	className: '',
	header: null
};


// EXPORTS //

export default FullscreenButton;
