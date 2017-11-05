// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal } from 'react-bootstrap';
import Plot from 'react-plotly.js';
import Plotly from 'plotly.js';


// VARIABLES //

const BUTTONS = [
	'toImage',
	'sendDataToCloud',
	'zoom2d',
	'pan2d',
	'select2d',
	'lasso2d',
	'zoomIn2d',
	'zoomOut2d',
	'autoScale2d',
	'resetScale2d',
	'hoverClosestCartesian',
	'hoverCompareCartesian',
	'toggleHover',
	'resetViews',
	'toggleSpikelines'
];


// MAIN //

class Wrapper extends Component {

	constructor( props ) {
		super( props );

		this.state = {
			fullscreen: false
		};

		const buttonsToAdd = [];
		if ( props.onShare ) {
			buttonsToAdd.push({
				name: 'Share',
				icon: Plotly.Icons[ 'plotlylogo' ],
				click: props.onShare
			});
		}
		if ( props.toggleFullscreen ) {
			buttonsToAdd.push({
				name: 'Toggle FullScreen',
				icon: Plotly.Icons[ 'zoombox' ],
				click: this.toggleFullscreen
			});
		}
		this.config = {
			displayModeBar: true,
			displaylogo: false,
			modeBarButtonsToRemove: this.props.removeButtons ? BUTTONS : [ 'sendDataToCloud', 'hoverClosestCartesian', 'hoverCompareCartesian' ],
			modeBarButtonsToAdd: buttonsToAdd
		};
	}

	toggleFullscreen = () => {
		this.setState({
			fullscreen: !this.state.fullscreen
		});
	}

	render() {
		const plot = <Plot
			data={this.props.data}
			layout={this.props.layout}
			config={this.config}
			fit={this.props.fit}
		/>;
		if ( this.state.fullscreen ) {
			return (
				<Modal
					show={this.state.fullscreen}
					onHide={this.toggleFullscreen}
					dialogClassName="fullscreen-modal"
				>
					<Modal.Body
						style={{
							height: 0.80 * window.innerHeight,
							width: 0.90 * window.innerWidth,
							marginBottom: 50
						}}
						className="fullscreen-modal-content"
					>
						{plot}
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={this.toggleFullscreen}>Close</Button>
					</Modal.Footer>
				</Modal>
			);
		}
		return plot;
	}
}


// DEFAULT PROPERTIES //

Wrapper.defaultProps = {
	layout: {},
	removeButtons: false,
	toggleFullscreen: true,
	onShare: null,
	fit: false
};


// PROPERTY TYPES //

Wrapper.propTypes = {
	data: PropTypes.array.isRequired,
	layout: PropTypes.object,
	removeButtons: PropTypes.bool,
	toggleFullscreen: PropTypes.bool,
	onShare: PropTypes.func,
	fit: PropTypes.bool
};


// EXPORTS //

export default Wrapper;
