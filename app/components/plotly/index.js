// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';
import Plot from 'react-plotly.js';
import Plotly from 'plotly.js';
import { generate } from 'randomstring';
import isUndefined from '@stdlib/assert/is-undefined';
import copy from '@stdlib/utils/copy';
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

		const { layout } = props;
		layout.autosize = true;

		this.state = {
			fullscreen: false,
			layout
		};
		this.plotData = {
			key: null,
			value: null
		};

		const buttonsToAdd = [];
		if ( props.legendButtons && !props.removeButtons ) {
			buttonsToAdd.push({
				name: 'Toggle Legend',
				icon: PlotlyIcons[ 'legend' ],
				click: this.toggleLegend
			});
			buttonsToAdd.push({
				name: 'Change Legend Orientation',
				icon: PlotlyIcons[ 'changeLegendOrientation' ],
				click: this.toggleLegendOrientation
			});
		}
		if ( props.onShare && !props.removeButtons ) {
			buttonsToAdd.push({
				name: 'Share',
				icon: PlotlyIcons[ 'share' ],
				click: props.onShare
			});
		}
		if ( props.toggleFullscreen && !props.removeButtons ) {
			buttonsToAdd.push({
				name: 'Toggle FullScreen',
				icon: PlotlyIcons[ 'fullscreen' ],
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

	onInitialized = ( figure ) => {
		this.figure = figure;
		this.drawPlot();
	}

	handleUpdate = () => {
		this.drawPlot();
		this.setState( this.figure );
	}

	onUpdate = ( figure ) => {
		this.figure = figure;
		if ( this.debouncedChange ) {
			this.debouncedChange();
		} else {
			this.debouncedChange = debounce( this.handleUpdate, 2000 );
			this.debouncedChange();
		}
	}

	drawPlot = () => {
		const opts = { format: 'png', height: 400, width: 600 };
		Plotly.toImage( this.figure, opts )
			.then( ( data ) => {
				this.plotData = {
					key: `<!--IMAGE_${generate( 6 )}-->`,
					value: `<img src="${data}" style="display: block; margin: 0 auto; max-width: 100%; max-height: 100%" />`
				};
			});
	}

	toggleFullscreen = () => {
		this.setState({
			fullscreen: !this.state.fullscreen
		});
	}

	toggleLegend = () => {
		const newLayout = copy( this.state.layout );
		if (
			isUndefined( this.state.layout.showlegend ) ||
			this.state.layout.showlegend === true
		) {
			newLayout.showlegend = false;
		} else {
			newLayout.showlegend = true;
		}
		this.setState({
			layout: newLayout
		});
	}

	toggleLegendOrientation = () => {
		const newLayout = copy( this.state.layout );
		let newPos = 'h';
		if ( newLayout.legend && newLayout.legend.orientation === 'h' ) {
			newPos = 'v';
		}
		newLayout.legend = {
			'orientation': newPos
		};
		this.setState({
			layout: newLayout
		});
	}

	makeDraggable = ( div ) => {
		return ( <div
			draggable="true"
			style={{ height: '100%', width: '100%', cursor: 'move' }}
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
			layout={this.state.layout}
			config={this.config}
			onInitialized={this.onInitialized}
			onUpdate={this.onUpdate}
			useResizeHandler
			style={{
				width: '100%',
				height: '100%'
			}}
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
	layout: {},
	legendButtons: true,
	onShare: null,
	removeButtons: false,
	toggleFullscreen: true
};


// PROPERTY TYPES //

Wrapper.propTypes = {
	data: PropTypes.array.isRequired,
	editable: PropTypes.bool,
	layout: PropTypes.object,
	legendButtons: PropTypes.bool,
	onShare: PropTypes.func,
	removeButtons: PropTypes.bool,
	toggleFullscreen: PropTypes.bool
};


// EXPORTS //

export default Wrapper;
