// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactList from 'react-list';
import Highlighter from 'react-highlight-words';
import Alert from 'react-bootstrap/Alert';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Button from 'react-bootstrap/Button';
import Popover from 'react-bootstrap/Popover';
import PopoverTitle from 'react-bootstrap/PopoverTitle';
import PopoverContent from 'react-bootstrap/PopoverContent';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import hasOwnProp from '@stdlib/assert/has-own-property';
import isUndefinedOrNull from '@stdlib/assert/is-undefined-or-null';
import isStrictEqual from '@stdlib/assert/is-strict-equal';
import isPlainObject from '@stdlib/assert/is-plain-object';
import SearchBar from './search.js';
import TextSelect from './text_select.js';
import BoxPlot from 'components/plots/boxplot';
import BarChart from 'components/plots/barchart';
import ContourChart from 'components/plots/contourchart';
import HeatMap from 'components/plots/heatmap';
import Histogram from 'components/plots/histogram';
import LinePlot from 'components/plots/lineplot';
import Map from 'components/plots/map';
import MosaicPlot from 'components/plots/mosaicplot';
import PieChart from 'components/plots/piechart';
import QQPlot from 'components/plots/qqplot';
import ScatterPlotMatrix from 'components/plots/scatterplot-matrix';
import ScatterPlot from 'components/plots/scatterplot';
import ViolinPlot from 'components/plots/violinplot';
import { FrequencyTable } from './../frequency_table.js';
import { ContingencyTable } from './../contingency_table.js';


// FUNCTIONS //

function filterForWords( actions, word ) {
	const expr = new RegExp( word, 'i' );
	const out = [];
	for ( let i = 0; i < actions.length; i++ ) {
		const elem = actions[ i ];
		let keep = false;
		if ( elem.type.search( expr ) > -1 ) {
			keep = true;
		}
		else {
			for ( let key in elem.value ) {
				if (
					key.search( expr ) > -1 ||
					String( elem.value[ key ] ).search( expr ) > -1
				) {
					keep = true;
					break;
				}
			}
		}
		if ( keep ) {
			out.push( elem );
		}
	}
	return out;
}


// MAIN //

class HistoryPanel extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			filtered: props.actions,
			searchWords: [],
			nActions: props.actions.length,
			notes: {}
		};
	}

	static getDerivedStateFromProps( nextProps, prevState ) {
		if ( nextProps.actions.length > prevState.nActions ) {
			return {
				filtered: nextProps.actions,
				nActions: nextProps.actions.length
			};
		}
		return null;
	}

	handleSearch = ( value ) => {
		if ( isStrictEqual( value, '' ) ) {
			this.setState({
				filtered: this.props.actions,
				searchWords: []
			});
		} else {
			this.setState({
				filtered: filterForWords( this.props.actions, value ),
				searchWords: [ value ]
			});
		}
	}

	renderListGroupItem = ( index, key ) => {
		const n = this.state.filtered.length - 1;
		const elem = this.state.filtered[ n - index ];
		const date = new Date( elem.absoluteTime );
		let printout = '';
		const value = elem.value;
		const title = `${elem.type} | Time: ${date.toLocaleTimeString()} - ${date.toLocaleDateString()}`;
		for ( let key in value ) {
			if ( hasOwnProp( value, key ) ) {
				const val = value[ key ];
				if ( !isUndefinedOrNull( val ) && key !== 'plotId' ) {
					printout += `${key}: ${isPlainObject( val ) ? JSON.stringify( val ) : val}`;
					printout += '\t';
				}
			}
		}
		const popover = <Popover id={`history-note-popover-${index}`} style={{ width: 250 }} >
			<PopoverTitle>Leave Note</PopoverTitle>
			<PopoverContent>
				<TextSelect options={[
					'Did you consider any confounding variables?',
					'You should check model diagnostics'
				]} onSubmit={({ value }) => {
					const notes = { ...this.state.notes };
					if ( notes[ index ] ) {
						notes[ index] += `\n${value}`;
					} else {
						notes[ index ] = value;
					}
					this.setState({
						notes
					});
				}} />
			</PopoverContent>
		</Popover>;
		return ( <ListGroupItem>
			<div className="actionNote">
				<span className="title">
					<Highlighter
						searchWords={this.state.searchWords}
						autoEscape={true}
						textToHighlight={title}
					/>
				</span>
			</div>
			<div className="actionNote">
				<Highlighter
					searchWords={this.state.searchWords}
					autoEscape={true}
					textToHighlight={printout}
				/>
			</div>
			{ this.state.notes[ index ] ?
				<Alert variant="warning" >
					{this.state.notes[ index ]}
				</Alert> :
				null
			}
				<OverlayTrigger trigger="click" placement="left" rootClose overlay={popover} >
					<Button
						variant="info"
						size="sm"
						style={{ position: 'absolute', top: 5, right: 45 }}
					>
						<i className="fas fa-sticky-note"></i>
					</Button>
				</OverlayTrigger>
				<Button
					variant="success"
					size="sm"
					onClick={this.handleRecreationFactory( index )}
					style={{ position: 'absolute', top: 5, right: 5 }}
				>
					<i className="fas fa-redo"></i>
				</Button>
		</ListGroupItem> );
	}

	handleRecreationFactory = ( idx ) => {
		const n = this.state.filtered.length - 1;
		const elem = this.state.filtered[ n - idx ];
		return () => {
			const params = { ...this.props, ...elem.value };
			let output;
			switch ( elem.type ) {
				case 'DATA_EXPLORER_BARCHART':
					output = <BarChart {...params} />;
					break;
				case 'DATA_EXPLORER_BOXPLOT':
					output = <BoxPlot {...params} />;
					break;
				case 'DATA_EXPLORER_CONTOURPLOT':
					output = <ContourChart {...params} />;
					break;
				case 'DATA_EXPLORER_HISTOGRAM':
					output = <Histogram {...params} />;
					break;
				case 'DATA_EXPLORER_HEATMAP':
					output = <HeatMap {...params} />;
					break;
				case 'DATA_EXPLORER_LINEPLOT':
					output = <LinePlot {...params} />;
					break;
				case 'DATA_EXPLORER_MAP':
					output = <Map {...params} />;
					break;
				case 'DATA_EXPLORER_MOSAIC':
					output = <MosaicPlot {...params} />;
					break;
				case 'DATA_EXPLORER_PIECHART':
					output = <PieChart {...params} />;
					break;
				case 'DATA_EXPLORER_QQPLOT':
					output = <QQPlot {...params} />;
					break;
				case 'DATA_EXPLORER_SCATTERPLOT':
					output = <ScatterPlot {...params} />;
					break;
				case 'DATA_EXPLORER_SPLOM':
					output = <ScatterPlotMatrix {...params} />;
					break;
				case 'DATA_EXPLORER_VIOLINPLOT':
					output = <ViolinPlot {...params} />;
					break;
				case 'DATA_EXPLORER_FREQUENCY_TABLE':
					output = <FrequencyTable {...params} />;
					break;
				case 'DATA_EXPLORER_CONTINGENCY_TABLE':
					output = <ContingencyTable {...params} />;
					break;
			}
			this.props.onCreated( output );
		};
	}

	render() {
		if ( !this.state.filtered ) {
			return null;
		}
		return (
			<div style={this.props.style} >
				<SearchBar
					onClick={this.handleSearch}
				/>
				<div style={{
					marginLeft: 0,
					overflowY: 'scroll',
					height: 0.75 * window.innerHeight,
					border: 'solid 1px rgba(0,0,0,0.125)'
				}} >
					<ReactList
						initialIndex={0}
						itemRenderer={this.renderListGroupItem}
						length={this.state.filtered.length}
						type="simple"
						pageSize={50}
						minSize={10}
					/>
				</div>
				<span className="title" style={{ float: 'right', marginRight: 20 }} >
					{this.state.filtered.length} actions
				</span>
			</div>
		);
	}
}


// PROPERTIES //

HistoryPanel.propTypes = {
	actions: PropTypes.array
};

HistoryPanel.defaultProps = {
	actions: []
};


// EXPORTS //

export default HistoryPanel;
