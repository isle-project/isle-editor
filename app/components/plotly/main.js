// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';
import logger from 'debug';
import { withTranslation } from 'react-i18next';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import createPlotlyComponent from 'react-plotly.js/factory';
import Plotly from 'plotly.js';
const Plot = createPlotlyComponent( Plotly );
import jsyaml from 'js-yaml';
import omitBy from '@stdlib/utils/omit-by';
import isNull from '@stdlib/assert/is-null';
import isUndefined from '@stdlib/assert/is-undefined';
import isEmptyObject from '@stdlib/assert/is-empty-object';
import deepEqual from '@stdlib/assert/deep-equal';
import copy from '@stdlib/utils/copy';
import SessionContext from 'session/context.js';
import { PLOT_UPDATE } from 'constants/actions.js';
import PlotlyIcons from './icons.js';
import calculateChanges from './calculate_changes.js';
import './load_translations.js';
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
	'zoomIn2d',
	'zoomOut2d',
	'autoScale2d',
	'resetScale2d',
	'hoverClosestCartesian',
	'hoverCompareCartesian',
	'toggleHover',
	'resetViews'
];
const BUTTONS_TO_REMOVE = [
	'sendDataToCloud',
	'hoverClosestCartesian',
	'hoverCompareCartesian',
	'lasso2d',
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
* @property {boolean} toggleFullscreen - controls whether to allow displaying the plot in fullscreen mode
* @property {boolean} removeButtons - controls whether to remove all buttons (aside from fullscreen button if enabled)
* @property {Object} meta - plot meta-information
* @property {number} revision - when provided, causes the plot to update when the revision value is incremented
* @property {Object} style - CSS inline styles
* @property {Function} onAfterPlot - callback function invoked each time a chart is plotted
* @property {Function} onClick - callback function invoked when any element is clicked
* @property {Function} onRelayout - callback function invoked when relayout is triggered
* @property {Function} onLegendClick - callback function invoked when legend item is clicked
* @property {Function} onLegendDoubleClick - callback function invoked when legend item is double-clicked
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
			oldLayout: copy( layout, 1 ),
			layout,
			oldPropLayout: layout,
			finishedDrawing: false
		};
		this.plotData = null;

		const buttonsToAdd = [];
		if ( props.legendButtons && !props.removeButtons ) {
			buttonsToAdd.push({
				name: this.props.t('toggle-legend'),
				icon: PlotlyIcons[ 'legend' ],
				click: this.toggleLegend
			});
			buttonsToAdd.push({
				name: this.props.t('change-orientation'),
				icon: PlotlyIcons[ 'changeLegendOrientation' ],
				click: this.toggleLegendOrientation
			});
		}
		if ( props.onShare && !props.removeButtons ) {
			buttonsToAdd.push({
				name: this.props.t('share'),
				icon: PlotlyIcons[ 'share' ],
				click: props.onShare
			});
		}
		if ( props.toggleFullscreen ) {
			buttonsToAdd.push({
				name: this.props.t('toggle-fullscreen'),
				icon: PlotlyIcons[ 'fullscreen' ],
				click: this.toggleFullscreen
			});
		}

		this.config = {
			editable: this.props.editable,
			displayModeBar: true,
			displaylogo: false,
			modeBarButtonsToRemove: this.props.removeButtons ? BUTTONS : BUTTONS_TO_REMOVE,
			modeBarButtonsToAdd: buttonsToAdd,
			...this.props.config
		};
	}

	static getDerivedStateFromProps( nextProps, prevState ) {
		debug( 'Get derived state from props...' );
		const newState = {};
		if ( !deepEqual( nextProps.layout, prevState.oldPropLayout ) ) {
			newState.oldPropLayout = nextProps.layout;
			newState.oldLayout = copy( prevState.layout, 1 );
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
			oldLayout: copy( this.figure.layout, 1 ),
			layout: this.figure.layout
		}, this.drawPlot );
	}

	onUpdate = ( figure ) => {
		this.setState({
			finishedDrawing: false
		}, () => {
			this.figure = figure;
			if ( this.debouncedChange ) {
				this.debouncedChange();
			} else {
				this.debouncedChange = debounce( this.handleUpdate, 1000 );
				this.debouncedChange();
			}
		});
	}

	drawPlot = () => {
		const opts = { format: 'png', height: 425, width: 675 };
		Plotly.toImage( this.figure, opts )
			.then( ( data ) => {
				let value;
				if ( !this.props.meta ) {
					value = `<img src="${data}" style="display: block; margin: 0 auto;" />`;
				} else {
					let meta = this.props.meta;
					meta = omitBy( meta, ( _, value ) => {
						return isNull( value );
					});
					meta = jsyaml.safeDump( meta );
					value = `<img src="${data}" style="display: block; margin: 0 auto;" data-plot-id="${this.props.id}" data-plot-meta="${meta}"></img>`;
				}
				this.plotData = value;
				this.setState({
					finishedDrawing: true
				});
			});
	}

	toggleFullscreen = () => {
		const newLayout = copy( this.state.layout, 1 );
		if ( !this.state.fullscreen ) {
			newLayout.width = null;
			newLayout.height = null;
		} else {
			newLayout.width = this.props.layout.width;
			newLayout.height = this.props.layout.height;
		}
		this.setState({
			fullscreen: !this.state.fullscreen,
			layout: newLayout,
			oldLayout: this.state.layout
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
		const fullscreen = this.state.fullscreen;
		if ( this.props.draggable && !fullscreen ) {
			draggableBar = <div
				className="plotly-draggable-bar"
				draggable={this.state.finishedDrawing}
				onDragStart={( ev ) => {
					ev.dataTransfer.setData( 'text/html', this.plotData );
				}}
				style={{
					opacity: this.state.finishedDrawing ?
						0.6 :
						0.2
				}}
			>{this.props.t('drag-plot')}</div>;
		}
		const style = {
			width: this.state.layout.width ? this.props.layout.width : '100%',
			height: this.state.layout.height ? this.props.layout.height : '100%',
			zIndex: 1
		};
		const outerStyle = {
			...style,
			...this.props.style
		};
		let plot = <div className="plotly-container" style={outerStyle} >
			{draggableBar}
			<Plot
				className={this.props.draggable ? 'plotly-draggable' : null}
				data={this.props.data}
				layout={this.state.layout}
				config={this.config}
				onInitialized={this.onInitialized}
				onUpdate={this.onUpdate}
				useResizeHandler
				onClick={this.props.onClick}
				onSelected={this.props.onSelected}
				onAfterPlot={this.props.onAfterPlot}
				onRelayout={this.props.onRelayout}
				onLegendClick={this.props.onLegendClick}
				onLegendDoubleClick={this.props.onLegendDoubleClick}
				style={style}
				revision={this.props.revision}
			/>
		</div>;
		if ( fullscreen ) {
			return (
				<Modal
					show={fullscreen}
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
						<Button onClick={this.toggleFullscreen}>
							{this.props.t('close')}
						</Button>
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
	revision: null,
	style: {},
	onAfterPlot() {},
	onClick() {},
	onLegendClick() {},
	onLegendDoubleClick() {},
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
	revision: PropTypes.number,
	style: PropTypes.object,
	onAfterPlot: PropTypes.func,
	onClick: PropTypes.func,
	onLegendClick: PropTypes.func,
	onLegendDoubleClick: PropTypes.func,
	onRelayout: PropTypes.func,
	onSelected: PropTypes.func,
	onShare: PropTypes.func,
	removeButtons: PropTypes.bool,
	toggleFullscreen: PropTypes.bool
};

Wrapper.contextType = SessionContext;


// EXPORTS //

export default withTranslation( 'plotly' )( Wrapper );
