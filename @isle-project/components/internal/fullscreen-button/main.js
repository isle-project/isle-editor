// MODULES //

import React, { Component, Fragment } from 'react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Tooltip from '@isle-project/components/tooltip';
import Gate from '@isle-project/components/gate';


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
		return (
			<Fragment>
				<Gate banner={null} showOwnerInPresentationMode={false} {...this.props} >
					<Tooltip
						id="fullscreen_tooltip"
						placement="bottom"
						tooltip={this.props.t('fullscreen-tooltip')}
					>
						<Button
							variant={this.props.variant}
							size="sm"
							onClick={this.toggleFullscreen}
							style={{
								position: 'absolute',
								top: 0,
								right: 0,
								fontSize: 12,
								width: 'fit-content',
								...this.props.style
							}}
							aria-label={this.props.t('fullscreen-tooltip')}
						>
							<span className="fa fa-window-maximize" />
						</Button>
					</Tooltip>
				</Gate>
				{this.state.fullscreen ? <Modal
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
						{this.props.wrapInCard ? <Card body
							className={`${this.props.className} panel-fullscreen-view`}
						>
							{this.props.body}
						</Card> : this.props.body}
					</Modal.Body>
					<Modal.Footer>
						{this.props.footer}
						<Button onClick={this.toggleFullscreen}>
							{this.props.t('close')}
						</Button>
					</Modal.Footer>
				</Modal> : null}
			</Fragment>
		);
	}
}


// PROPERTIES //

FullscreenButton.propTypes = {
	className: PropTypes.string,
	header: PropTypes.string,
	body: PropTypes.node.isRequired,
	wrapInCard: PropTypes.bool,
	variant: PropTypes.string,
	style: PropTypes.object
};

FullscreenButton.defaultProps = {
	className: '',
	header: null,
	wrapInCard: true,
	variant: 'outline-secondary',
	style: {}
};


// EXPORTS //

export default withTranslation( 'internal/fullscreen-button' )( FullscreenButton );
