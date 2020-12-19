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
import BoxPlot from '@isle-project/components/plots/boxplot';
import BarChart from '@isle-project/components/plots/barchart';
import ContourChart from '@isle-project/components/plots/contourchart';
import HeatMap from '@isle-project/components/plots/heatmap';
import Histogram from '@isle-project/components/plots/histogram';
import LinePlot from '@isle-project/components/plots/lineplot';
import Map from '@isle-project/components/plots/map';
import MosaicPlot from '@isle-project/components/plots/mosaicplot';
import PieChart from '@isle-project/components/plots/piechart';
import QQPlot from '@isle-project/components/plots/qqplot';
import ScatterPlotMatrix from '@isle-project/components/plots/scatterplot-matrix';
import ScatterPlot from '@isle-project/components/plots/scatterplot';
import ViolinPlot from '@isle-project/components/plots/violinplot';
import FrequencyTable from '@isle-project/components/tables/frequency-table';
import ContingencyTable from '@isle-project/components/tables/contingency-table';
import Anova from '@isle-project/components/tests/anova';
import Chi2Test from '@isle-project/components/tests/chi2';
import CorrTest from '@isle-project/components/tests/corrtest';
import Kruskal from '@isle-project/components/tests/kruskal';
import MeanTest from '@isle-project/components/tests/meantest';
import MeanTest2 from '@isle-project/components/tests/meantest2';
import PropTest from '@isle-project/components/tests/proptest';
import PropTest2 from '@isle-project/components/tests/proptest2';
import DecisionTree from '@isle-project/components/models/decision-tree';
import LassoRegression from '@isle-project/components/models/lasso-regression';
import LogisticRegression from '@isle-project/components/models/logistic-regression';
import MultipleLinearRegression from '@isle-project/components/models/multiple-linear-regression';
import RandomForest from '@isle-project/components/models/random-forest';
import SimpleLinearRegression from '@isle-project/components/models/simple-linear-regression';
import PrincipalComponentAnalysis from '@isle-project/components/models/principal-component-analysis';
import HierarchicalClustering from '@isle-project/components/models/hierarchical-clustering';
import KMeans from '@isle-project/components/models/kmeans';
import NaiveBayes from '@isle-project/components/models/naive-bayes';
import SearchBar from './search.js';
import TextSelect from './text_select.js';


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
		const title = `${elem.type} | Time: ${date.toLocaleTimeString()} - ${date.toLocaleDateString()}`; // eslint-disable-line i18next/no-literal-string
		for ( let key in value ) {
			if ( hasOwnProp( value, key ) && key !== 'showDecision' ) {
				const val = value[ key ];
				if ( !isUndefinedOrNull( val ) && key !== 'plotId' ) {
					printout += `${key}: ${isPlainObject( val ) ? JSON.stringify( val ) : val}`;
					printout += '\t';
				}
			}
		}
		const popover = <Popover id={`history-note-popover-${index}`} style={{ width: 250 }} >
			<PopoverTitle>{this.props.t('leave-note')}</PopoverTitle>
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
			{ this.props.instructorFeedback ?
				<OverlayTrigger trigger="click" placement="left" rootClose overlay={popover} >
					<Button
						variant="info"
						size="sm"
						style={{ position: 'absolute', top: 5, right: 45 }}
					>
						<i className="fas fa-sticky-note"></i>
					</Button>
				</OverlayTrigger> :
				null
			}
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
				case 'DATA_EXPLORER_TESTS_ANOVA':
					output = <Anova {...params} />;
					break;
				case 'DATA_EXPLORER_TESTS_KRUSKAL':
					output = <Kruskal {...params} />;
					break;
				case 'DATA_EXPLORER_TESTS_MEAN':
					output = <MeanTest {...params} />;
					break;
				case 'DATA_EXPLORER_TESTS_TWO_SAMPLE_MEAN':
					output = <MeanTest2 {...params} />;
					break;
				case 'DATA_EXPLORER_TESTS_CHISQUARE':
					output = <Chi2Test {...params} />;
					break;
				case 'DATA_EXPLORER_TESTS_CORRTEST':
					output = <CorrTest {...params} />;
					break;
				case 'DATA_EXPLORER_TESTS_PROPTEST':
					output = <PropTest {...params} />;
					break;
				case 'DATA_EXPLORER_TESTS_TWO_SAMPLE_PROPTEST':
					output = <PropTest2 {...params} />;
					break;
				case 'DATA_EXPLORER_KMEANS':
					output = <KMeans {...params} />;
					break;
				case 'DATA_EXPLORER_HIERARCHICAL_CLUSTERING':
					output = <HierarchicalClustering {...params} />;
					break;
				case 'DATA_EXPLORER_DECISION_TREE':
					output = <DecisionTree {...params} />;
					break;
				case 'DATA_EXPLORER_LASSO_REGRESSION':
					output = <LassoRegression {...params} />;
					break;
				case 'DATA_EXPLORER_LINEAR_REGRESSION':
					output = <SimpleLinearRegression {...params} />;
					break;
				case 'DATA_EXPLORER_LOGISTIC_REGRESSION':
					output = <LogisticRegression {...params} />;
					break;
				case 'DATA_EXPLORER_MULTIPLE_REGRESSION':
					output = <MultipleLinearRegression {...params} />;
					break;
				case 'DATA_EXPLORER_NAIVE_BAYES':
					output = <NaiveBayes {...params} />;
					break;
				case 'DATA_EXPLORER_PCA':
					output = <PrincipalComponentAnalysis {...params} />;
					break;
				case 'DATA_EXPLORER_RANDOM_FOREST':
					output = <RandomForest {...params} />;
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
					{this.state.filtered.length} {this.props.t('actions')}
				</span>
			</div>
		);
	}
}


// PROPERTIES //

HistoryPanel.propTypes = {
	actions: PropTypes.array,
	instructorFeedback: PropTypes.bool
};

HistoryPanel.defaultProps = {
	actions: [],
	instructorFeedback: false
};


// EXPORTS //

export default HistoryPanel;
