// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';
import logger from 'debug';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import createPlotlyComponent from 'react-plotly.js/factory';
import Plotly from 'plotly.js';
const Plot = createPlotlyComponent( Plotly );
import jsonMarkup from 'json-markup';
import randomstring from 'utils/randomstring/alphanumeric';
import isUndefined from '@stdlib/assert/is-undefined';
import isEmptyObject from '@stdlib/assert/is-empty-object';
import deepEqual from '@stdlib/assert/deep-equal';
import copy from '@stdlib/utils/copy';
import SessionContext from 'session/context.js';
import { PLOT_UPDATE } from 'constants/actions.js';
import PlotlyIcons from './icons.js';
import calculateChanges from './calculate_changes.js';
import './plotly.css';
import './tooltip.css';
import { ACCESS_TOKEN } from 'constants/mapbox.js';


// VARIABLES //

const debug = logger( 'isle:plotly' );
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

Plotly.setPlotConfig({
	mapboxAccessToken: ACCESS_TOKEN
});


// MAIN //

/**
* Plotly visualization.
*
* @property {Array} data - data array
* @property {boolean} editable - controls whether labels of the created plot are editable
* @property {boolean} draggable - controls whether the plot should be draggable
* @property {string} id - component identifier
* @property {Object} layout - Plotly layout object
* @property {boolean} legendButtons - controls whether to display buttons for changing the legend
* @property {boolean} toggleFullscreen - controls whether to display the plot in fullscreen mode
* @property {boolean} removeButtons - controls whether to remove all buttons
* @property {Object} meta - plot meta-information
* @property {Function} onAfterPlot - callback function invoked each time a chart is plotted
* @property {Function} onSelected - callback function invoked when elements are selected
* @property {Function} onShare - callback function invoked when clicking on the "Share" button
*/
class Wrapper extends Component {
	constructor( props ) {
		super( props );

		const { layout } = props;
		layout.autosize = true;

		this.state = {
			fullscreen: false,
			oldLayout: copy( layout ),
			layout,
			oldPropLayout: layout
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
			modeBarButtonsToAdd: buttonsToAdd,
			...this.props.config
		};
	}

	static getDerivedStateFromProps( nextProps, prevState ) {
		debug( 'Get derived state from props...' );
		const newState = {};
		if ( !deepEqual( nextProps.layout, prevState.oldPropLayout ) ) {
			newState.oldPropLayout = nextProps.layout;
			newState.oldLayout = copy( prevState.layout );
			newState.layout = nextProps.layout;
		}
		if ( !isEmptyObject( newState ) ) {
			return newState;
		}
		return null;
	}

	onInitialized = ( figure ) => {
		this.figure = figure;
		this.drawPlot();
	}

	handleUpdate = () => {
		this.drawPlot();
		if ( this.props.id ) {
			const session = this.context;
			const changes = calculateChanges( this.figure.layout, this.state.oldLayout );
			if ( changes.length > 0 ) {
				session.log({
					id: this.props.id,
					type: PLOT_UPDATE,
					value: changes
				});
			}
		}
		this.setState({
			oldLayout: copy( this.figure.layout ),
			layout: this.figure.layout
		});
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
				const value = !this.props.meta ? `<img src="${data}" style="display: block; margin: 0 auto; max-width: 100%; max-height: 100%" />` : `<div class="img-container"><img src="${data}" style="display: block; margin: 0 auto; max-width: 100%; max-height: 100%"></img><div class="img-tooltip">${jsonMarkup(this.props.meta)}</div></div>`;
				this.plotData = {
					key: `<!--IMAGE_LOG:${this.props.id}_${randomstring( 6 )}-->`,
					value
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

	render() {
		let draggableBar;
		if ( this.props.draggable && !this.state.fullscreen ) {
			draggableBar = <div
				className="plotly-draggable-bar"
				draggable="true"
				onDragStart={( ev ) => {
					ev.dataTransfer.setData( 'text/html', this.plotData.value );
					ev.dataTransfer.setData( 'text/plain', this.plotData.key );
				}}
			>Drag Plot</div>;
		}
		let plot = <Fragment>
			{draggableBar}
			<Plot
				data={this.props.data}
				layout={this.state.layout}
				config={this.config}
				onInitialized={this.onInitialized}
				onUpdate={this.onUpdate}
				useResizeHandler
				onSelected={this.props.onSelected}
				onAfterPlot={this.props.onAfterPlot}
				onRelayout={this.props.onRelayout}
				style={{
					width: '100%',
					height: '100%',
					zIndex: 1
				}}
			/>
		</Fragment>;
		if ( this.state.fullscreen ) {
			return (
				<Modal
					show={this.state.fullscreen}
					onHide={this.toggleFullscreen}
					dialogClassName="modal-100w"
				>
					<Modal.Body
						style={{
							height: 0.80 * window.innerHeight,
							width: 0.90 * window.innerWidth,
							marginBottom: 50
						}}
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


// PROPERTIES //

Wrapper.defaultProps = {
	draggable: false,
	editable: false,
	id: null,
	layout: {},
	config: {},
	legendButtons: true,
	meta: null,
	onAfterPlot() {},
	onRelayout() {},
	onSelected() {},
	onShare: null,
	removeButtons: false,
	toggleFullscreen: true
};

Wrapper.propTypes = {
	data: PropTypes.array.isRequired,
	draggable: PropTypes.bool,
	editable: PropTypes.bool,
	id: PropTypes.string,
	layout: PropTypes.object,
	config: PropTypes.object,
	legendButtons: PropTypes.bool,
	meta: PropTypes.object,
	onAfterPlot: PropTypes.func,
	onRelayout: PropTypes.func,
	onSelected: PropTypes.func,
	onShare: PropTypes.func,
	removeButtons: PropTypes.bool,
	toggleFullscreen: PropTypes.bool
};

Wrapper.contextType = SessionContext;


// EXPORTS //

export default Wrapper;
