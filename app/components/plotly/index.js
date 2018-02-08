// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';
import Plot from 'react-plotly.js';
import Plotly from 'plotly.js';
import { generate } from 'randomstring';
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
		this.plotData = {
			key: null,
			value: null
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
			editable: this.props.editable,
			displayModeBar: true,
			displaylogo: false,
			modeBarButtonsToRemove: this.props.removeButtons ? BUTTONS : [ 'sendDataToCloud', 'hoverClosestCartesian', 'hoverCompareCartesian' ],
			modeBarButtonsToAdd: buttonsToAdd
		};
	}

	onInitialized = ( gd ) => {
		this.gd = gd;
		this.drawPlot();
	}

	handleUpdate = () => {
		this.drawPlot();
	}

	onUpdate = () => {
		if ( this.debouncedChange ) {
			this.debouncedChange();
		} else {
			this.debouncedChange = debounce( this.handleUpdate, 2000 );
			this.debouncedChange();
		}
	}

	drawPlot = () => {
		const opts = { format: 'png', height: 400, width: 600 };
		Plotly.toImage( this.gd, opts )
			.then( ( data ) => {
				this.plotData = {
					key: `<!-- IMAGE_${generate( 6 )} -->`,
					value: `<img src="${data}" style="display: block; margin: 0 auto;" />`
				};
			});
	}

	toggleFullscreen = () => {
		this.setState({
			fullscreen: !this.state.fullscreen
		});
	}

	makeDraggable = ( div ) => {
		return ( <div
			draggable="true"
			style={{ height: '100%', width: '100%' }}
			onDragStart={( ev ) => {
				ev.dataTransfer.setData( 'text/html', this.plotData.value );
				ev.dataTransfer.setData( 'text/plain', this.plotData.key );
			}}
		>
			{div}
		</div> );
	}

	render() {
		const plot = this.makeDraggable( <Plot
			data={this.props.data}
			layout={this.props.layout}
			config={this.config}
			fit={this.props.fit}
			onInitialized={this.onInitialized}
			onUpdate={this.onUpdate}
		/> );
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
	editable: false,
	fit: false,
	layout: {},
	onShare: null,
	removeButtons: false,
	toggleFullscreen: true
};


// PROPERTY TYPES //

Wrapper.propTypes = {
	data: PropTypes.array.isRequired,
	editable: PropTypes.bool,
	fit: PropTypes.bool,
	layout: PropTypes.object,
	onShare: PropTypes.func,
	removeButtons: PropTypes.bool,
	toggleFullscreen: PropTypes.bool
};


// EXPORTS //

export default Wrapper;
