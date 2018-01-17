// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';
import Plot from 'react-plotly.js';
import PlotlyIcons from './icons.js';


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
				icon: PlotlyIcons[ 'plotlylogo' ],
				click: props.onShare
			});
		}
		if ( props.toggleFullscreen ) {
			buttonsToAdd.push({
				name: 'Toggle FullScreen',
				icon: PlotlyIcons[ 'zoombox' ],
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
	fit: false,
	layout: {},
	onShare: null,
	removeButtons: false,
	toggleFullscreen: true
};


// PROPERTY TYPES //

Wrapper.propTypes = {
	data: PropTypes.array.isRequired,
	fit: PropTypes.bool,
	layout: PropTypes.object,
	onShare: PropTypes.func,
	removeButtons: PropTypes.bool,
	toggleFullscreen: PropTypes.bool
};


// EXPORTS //

export default Wrapper;
