// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
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

	componentDidMount() {
		Plotly.plot( this.hiddenDiv, this.props.data, this.props.layout )
			.then( ( gd ) => {
				const opts = { format: 'png', height: 300, width: 450 };
				Plotly.toImage( gd, opts )
					.then( ( data ) => {
						this.plotData = `<img src="${data}" style="display: block;
						margin: 0 auto;" />`;
					});
		});
	}

	toggleFullscreen = () => {
		this.setState({
			fullscreen: !this.state.fullscreen
		});
	}

	makeDraggable = ( div ) => {
		let plain = `<!-- PLOT_${generate( 3 )} -->`;
		return ( <div
			draggable="true"
			style={{ height: '100%', width: '100%' }}
			onDragStart={( ev ) => {
				ev.dataTransfer.setData( 'text/html', this.plotData );
				ev.dataTransfer.setData( 'text/plain', plain );
			}}
		>
			{div}
		</div> );
	}

	render() {
		let plot = this.makeDraggable( <Plot
			data={this.props.data}
			layout={this.props.layout}
			config={this.config}
			fit={this.props.fit}
		/> );
		plot = <Fragment>
			{plot}
			<div
				ref={(div) => { this.hiddenDiv = div; }}
				style={{ display: 'none' }}
			/>
		</Fragment>;
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
