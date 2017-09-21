// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal } from 'react-bootstrap';
import randomstring from 'randomstring';
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

class Plot extends Component {

	constructor( props ) {
		super( props );

		this.state = {
			plotID: randomstring.generate(),
			fullscreen: false
		};
	}

	toggleFullscreen = () => {
		this.setState({
			fullscreen: !this.state.fullscreen
		});
	}

	drawPlot = ( plotID ) => {

		const buttonsToAdd = [];
		if ( this.props.onShare ) {
			buttonsToAdd.push({
				name: 'Share',
				icon: Plotly.Icons[ 'plotlylogo' ],
				click: this.props.onShare
			});
		}
		buttonsToAdd.push({
			name: 'Toggle FullScreen',
			icon: Plotly.Icons[ 'zoombox' ],
			click: this.toggleFullscreen
		});

		Plotly.newPlot(
			plotID,
			this.props.data,
			this.props.layout,
			{
				displayModeBar: true,
				displaylogo: false,
				modeBarButtonsToRemove: this.props.removeButtons ? BUTTONS : [ 'sendDataToCloud', 'hoverClosestCartesian', 'hoverCompareCartesian' ],
				modeBarButtonsToAdd: buttonsToAdd
			}
		);
	}

	componentDidMount() {
		this.drawPlot( this.state.plotID );
	}

	componentDidUpdate() {
		this.drawPlot( this.state.plotID );
	}

	render() {
		if ( this.state.fullscreen ) {
			return (
				<Modal
					show={this.state.fullscreen}
					onHide={this.toggleFullscreen}
					dialogClassName="fullscreen-modal"
				>
					<Modal.Body className="fullscreen-modal-content">
						<div id={this.state.plotID} ></div>
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={this.toggleFullscreen}>Close</Button>
					</Modal.Footer>
				</Modal>
			);
		}
		return <div id={this.state.plotID} ></div>;
	}
}


// DEFAULT PROPERTIES //

Plotly.defaultProps = {
	layout: {},
	removeButtons: false,
	onShare: null
};


// PROPERTY TYPES //

Plotly.propTypes = {
	data: PropTypes.array.isRequired,
	layout: PropTypes.object,
	removeButtons: PropTypes.bool,
	onShare: PropTypes.func
};


// EXPORTS //

export default Plot;
