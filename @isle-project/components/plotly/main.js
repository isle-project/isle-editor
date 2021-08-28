// MODULES //

import React, { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';
import logger from 'debug';
import { useTranslation } from 'react-i18next';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import createPlotlyComponent from 'react-plotly.js/factory';
import Plotly from 'plotly.js';
const Plot = createPlotlyComponent( Plotly );
import jsyaml from 'js-yaml';
import omitBy from '@stdlib/utils/omit-by';
import objectKeys from '@stdlib/utils/keys';
import isNull from '@stdlib/assert/is-null';
import isUndefined from '@stdlib/assert/is-undefined';
import SessionContext from '@isle-project/session/context.js';
import { PLOT_UPDATE } from '@isle-project/constants/actions.js';
import html2clipboard from '@isle-project/utils/html-to-clipboard';
import { ACCESS_TOKEN } from '@isle-project/constants/mapbox.js';
import { withPropCheck } from '@isle-project/utils/prop-check';
import usePrevious from '@isle-project/utils/hooks/use-previous';
import StyleMenu from './style_menu.js';
import PlotlyIcons from './icons.js';
import calculateChanges from './calculate_changes.js';
import './plotly.css';
import './tooltip.css';


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
* [Plotly](https://plotly.com/javascript/) visualization.
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
* @property {Object} config - Plotly configuration options (see: https://plotly.com/javascript/configuration-options/)
* @property {number} revision - when provided, causes the plot to update when the revision value is incremented
* @property {Object} style - CSS inline styles
* @property {Function} onAfterPlot - callback function invoked each time a chart is plotted
* @property {Function} onClick - callback function invoked when any element is clicked
* @property {Function} onInitialized - callback invoked once plot is initialized; called with figure (object with three keys corresponding to input props: `data`, `layout`, and `frames`) and the DOM node `graphDiv`
* @property {Function} onRelayout - callback function invoked when relayout is triggered
* @property {Function} onLegendClick - callback function invoked when legend item is clicked
* @property {Function} onLegendDoubleClick - callback function invoked when legend item is double-clicked
* @property {Function} onSelected - callback function invoked when elements are selected
* @property {Function} onShare - callback function invoked when clicking on the "Share" button
*/
const Wrapper = ( props ) => {
	const { t } = useTranslation( 'plotly' );
	const [ layout, setLayout ] = useState({
		...props.layout,
		autosize: true
	});
	const [ layoutUpdate, setLayoutUpdate ] = useState( 0 );
	const oldPropsLayout = usePrevious( props.layout );
	const oldLayout = usePrevious( layout );

	const [ fullscreen, setFullscreen ] = useState( false );
	const [ finishedDrawing, setFinishedDrawing ] = useState( false );
	const [ showStyleMenu, setShowStyleMenu ] = useState( false );
	const figure = useRef();
	const plotDataRef = useRef( null );
	const debouncedChange = useRef();
	const session = useContext( SessionContext );

	const toggleFullscreen = useCallback( () => {
		debug( 'Toggle fullscreen view...' );
		const newLayout = { ...layout };
		if ( !fullscreen ) {
			newLayout.width = null;
			newLayout.height = null;
		} else {
			newLayout.width = props.layout.width;
			newLayout.height = props.layout.height;
		}
		setFullscreen( !fullscreen );
		setLayout( newLayout );
	}, [ layout, fullscreen, props.layout ] );

	const toggleStyleMenu = useCallback( () => {
		setShowStyleMenu( !showStyleMenu );
	}, [ showStyleMenu ] );
	useEffect( () => {
		let hasChanged = false;
		if ( oldPropsLayout ) {
			const keys = objectKeys( props.layout );
			for ( let i = 0; i < keys.length; i++ ) {
				const key = keys[ i ];
				if ( props.layout[ key ] !== oldPropsLayout[ key ] ) {
					hasChanged = true;
					break;
				}
			}
			if ( hasChanged ) {
				debug( 'Layout property has changed...' );
				setLayout({
					...props.layout,
					autosize: true
				});
			}
		}
	}, [ oldPropsLayout, props.layout ] );

	const config = useMemo( () => {
		const toggleLegend = () => {
			debug( 'Toggle legend...' );
			const newLayout = { ...layout };
			if (
				isUndefined( layout.showlegend ) ||
				layout.showlegend === true
			) {
				newLayout.showlegend = false;
			} else {
				newLayout.showlegend = true;
			}
			setLayout( newLayout );
			setLayoutUpdate( layoutUpdate + 1 );
		};
		const toggleLegendOrientation = () => {
			debug( 'Toggle legend orientation...' );
			const newLayout = { ...layout };
			let newPos = 'h';
			if ( newLayout.legend && newLayout.legend.orientation === 'h' ) {
				newPos = 'v';
			}
			newLayout.legend = {
				'orientation': newPos
			};
			setLayout( newLayout );
			setLayoutUpdate( layoutUpdate + 1 );
		};
		const buttonsToAdd = [];
		if ( props.legendButtons && !props.removeButtons ) {
			buttonsToAdd.push({
				name: t('toggle-legend'),
				icon: PlotlyIcons[ 'legend' ],
				click: toggleLegend
			});
			buttonsToAdd.push({
				name: t('change-orientation'),
				icon: PlotlyIcons[ 'changeLegendOrientation' ],
				click: toggleLegendOrientation
			});
		}
		if ( props.onShare && !props.removeButtons ) {
			buttonsToAdd.push({
				name: t('share'),
				icon: PlotlyIcons[ 'share' ],
				click: props.onShare
			});
		}
		if ( props.toggleFullscreen ) {
			buttonsToAdd.push({
				name: t('toggle-fullscreen'),
				icon: PlotlyIcons[ 'fullscreen' ],
				click: toggleFullscreen
			});
		}
		return {
			editable: props.editable,
			displayModeBar: true,
			displaylogo: false,
			modeBarButtonsToRemove: props.removeButtons ? BUTTONS : BUTTONS_TO_REMOVE,
			modeBarButtonsToAdd: buttonsToAdd,
			...props.config
		};
	}, [ layout, layoutUpdate, props.config, props.editable, props.legendButtons, props.onShare, props.removeButtons, props.toggleFullscreen, toggleFullscreen, t ] );
	const drawPlot = useCallback( () => {
		const opts = { format: 'png', height: 425, width: 675 };
		Plotly.toImage( figure.current, opts )
			.then( ( data ) => {
				let value;
				if ( !props.meta ) {
					value = `<img src="${data}" style="display: block; margin: 0 auto;" />`;
				} else {
					let meta = props.meta;
					meta = omitBy( meta, ( _, value ) => {
						return isNull( value );
					});
					meta = jsyaml.dump( meta );
					value = `<img src="${data}" style="display: block; margin: 0 auto;" data-plot-id="${props.id}" data-plot-meta="${meta}"></img>`;
				}
				plotDataRef.current = value;
				setFinishedDrawing( true );
			});
	}, [ props.id, props.meta ] );
	const onInitialized = ( figure, gd ) => {
		debug( 'Initialize plot...' );
		figure.current = figure;
		drawPlot();
		props.onInitialized( figure, gd );
	};
	const handleUpdate = useCallback( () => {
		if ( props.id ) {
			const changes = calculateChanges( figure.current.layout, oldLayout );
			if ( changes.length > 0 ) {
				session.log({
					id: props.id,
					type: PLOT_UPDATE,
					value: changes
				});
			}
		}
		setLayout( figure.current.layout );
		drawPlot();
	}, [ drawPlot, oldLayout, props.id, session ] );
	const onUpdate = useCallback( ( newFigure ) => {
		setFinishedDrawing( false );
		figure.current = newFigure;
		if ( debouncedChange.current ) {
			debouncedChange.current();
		} else {
			debouncedChange.current = debounce( handleUpdate, 1000 );
			debouncedChange.current();
		}
	}, [ handleUpdate ] );
	let draggableBar;
	if ( props.draggable && !fullscreen ) {
		draggableBar = <button
			className="plotly-draggable-bar"
			draggable={finishedDrawing}
			onDragStart={( ev ) => {
				ev.dataTransfer.setData( 'text/html', plotDataRef.current );
			}}
			disabled={!finishedDrawing}
			onClick={() => {
				html2clipboard( plotDataRef.current );
				session.addNotification({
					title: t('copied-to-clipboard'),
					message: t('plot-copied-to-clipboard'),
					level: 'success',
					position: 'tr'
				});
			}}
			style={{
				opacity: finishedDrawing ? 0.6 : 0.2
			}}
		>{t('drag-plot')}</button>;
	}
	const style = {
		width: layout.width ? layout.width : '100%',
		height: layout.height ? layout.height : '100%',
		zIndex: 1
	};
	const outerStyle = {
		...style,
		...props.style
	};
	let plot = <div className="plotly-container" style={outerStyle} >
		{draggableBar}
		<Plot
			key={layoutUpdate}
			className={props.draggable ? 'plotly-draggable' : null}
			data={props.data}
			layout={layout}
			config={config}
			onInitialized={onInitialized}
			onUpdate={onUpdate}
			useResizeHandler
			onClick={props.onClick}
			onSelected={props.onSelected}
			onAfterPlot={props.onAfterPlot}
			onRelayout={( event ) => {
				setLayout({
					...layout,
					datarevision: layout.datarevision ? layout.datarevision + 1 : 1
				});
				props.onRelayout( event );
			}}
			onLegendClick={props.onLegendClick}
			onLegendDoubleClick={props.onLegendDoubleClick}
			style={style}
			revision={props.revision}
		/>
	</div>;
	if ( fullscreen ) {
		return (
			<Modal
				show={fullscreen}
				onHide={toggleFullscreen}
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
					<Button onClick={toggleStyleMenu} >
						{t('layout')}
					</Button>
					<Button onClick={toggleFullscreen} >
						{t('close')}
					</Button>
				</Modal.Footer>
				{ showStyleMenu ? <StyleMenu
					t={t}
					onHide={toggleStyleMenu}
					layout={layout}
					layoutUpdate={layoutUpdate}
					setLayout={setLayout}
					setLayoutUpdate={setLayoutUpdate}
				/> : null }
			</Modal>
		);
	}
	return plot;
};


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
	onInitialized() {},
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
	onInitialized: PropTypes.func,
	onLegendClick: PropTypes.func,
	onLegendDoubleClick: PropTypes.func,
	onRelayout: PropTypes.func,
	onSelected: PropTypes.func,
	onShare: PropTypes.func,
	removeButtons: PropTypes.bool,
	toggleFullscreen: PropTypes.bool
};


// EXPORTS //

export default withPropCheck( Wrapper );
