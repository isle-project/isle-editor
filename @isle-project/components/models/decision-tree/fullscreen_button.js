// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
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
							{t('decision-tree')}
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
						<Button onClick={this.toggleFullscreen}>{t('close')}</Button>
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

export default withTranslation( 'models' )( FullscreenButton );
