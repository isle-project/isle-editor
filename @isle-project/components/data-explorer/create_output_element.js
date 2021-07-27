// MODULES //

import React, { Fragment } from 'react';
import { i18n } from '@isle-project/locales';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import logger from 'debug';
import replace from '@stdlib/string/replace';
import ContingencyTable from '@isle-project/components/tables/contingency-table';
import FrequencyTable from '@isle-project/components/tables/frequency-table';
import BoxPlot from '@isle-project/components/plots/boxplot';
import BarChart from '@isle-project/components/plots/barchart';
import ContourChart from '@isle-project/components/plots/contourchart';
import HeatMap from '@isle-project/components/plots/heatmap';
import Histogram from '@isle-project/components/plots/histogram';
import IntervalPlot from '@isle-project/components/plots/interval-plot';
import LinePlot from '@isle-project/components/plots/lineplot';
import Map from '@isle-project/components/plots/map';
import MosaicPlot from '@isle-project/components/plots/mosaicplot';
import PieChart from '@isle-project/components/plots/piechart';
import QQPlot from '@isle-project/components/plots/qqplot';
import ScatterPlotMatrix from '@isle-project/components/plots/scatterplot-matrix';
import ScatterPlot from '@isle-project/components/plots/scatterplot';
import ViolinPlot from '@isle-project/components/plots/violinplot';
import Plotly from '@isle-project/components/plotly';
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
import SummaryStatistics from '@isle-project/components/summary-statistics';
import html2clipboard from '@isle-project/utils/html-to-clipboard';
import ClearButton from './clear_button.js';
import FullscreenButton from './fullscreen_button.js';
import DatasetButton from './dataset_button.js';


// VARIABLES //

const debug = logger( 'isle:data-explorer' );
const RE_CLEAR_BUTTON = /<button[\s\S]*<\/button>/;


// FUNCTIONS //

const createButtons = ( header, table, clearOutput, idx, subsetFilters, onFilters, t ) => {
	return ( <ButtonGroup style={{ float: 'right', top: '-4px', zIndex: 2 }}>
		<DatasetButton filters={subsetFilters} onActivateFilters={onFilters} t={t} />
		<FullscreenButton header={header} body={table} t={t} />
		<ClearButton onClick={() => {
			debug( `Clear element with ID ${idx}` );
			clearOutput( idx );
		}} t={t} />
	</ButtonGroup> );
};


/**
* Wraps the supplied div element such that it can be dragged.
*/
const makeDraggable = ( div ) => {
	return (
		<Fragment>
			<button
				draggable={true}
				className="data-explorer-draggable-bar"
				onDragStart={( ev ) => {
					const div = ev.target.nextSibling;
					let markup = div.innerHTML;
					markup = replace( markup, RE_CLEAR_BUTTON, '' );
					ev.dataTransfer.setData( 'text/plain', markup );
					ev.dataTransfer.setData( 'text/html', markup );
				}}
				onClick={( ev ) => {
					const div = ev.target.nextSibling;
					let markup = div.outerHTML;
					markup = replace( markup, RE_CLEAR_BUTTON, '' );
					html2clipboard( markup );
				}}
			>
				{i18n.t('data-explorer:drag-table')}
			</button>
			{div}
		</Fragment>
	);
};


// MAIN //

function createOutputElement( e, idx, clearOutput, subsetFilters, onFilters, t ) {
	if (
		e.type === BoxPlot ||
		e.type === BarChart ||
		e.type === ContourChart ||
		e.type === HeatMap ||
		e.type === Histogram ||
		e.type === IntervalPlot ||
		e.type === LinePlot ||
		e.type === Map ||
		e.type === MosaicPlot ||
		e.type === PieChart ||
		e.type === QQPlot ||
		e.type === ScatterPlot ||
		e.type === ScatterPlotMatrix ||
		e.type === ViolinPlot ||
		e.type === Plotly
	) {
		const props = e.props;
		if ( props.meta && !props.meta.filters ) {
			props.meta.filters = subsetFilters;
		}
		return ( <div key={idx}>
			<ButtonGroup style={{ float: 'right', padding: '0.1rem 0.3rem', zIndex: 2 }}>
				<DatasetButton filters={subsetFilters} onActivateFilters={onFilters} t={t} />
				<ClearButton
					onClick={() => { clearOutput( idx ); }}
					t={t}
				/>
			</ButtonGroup>
			<div style={{
				position: 'relative',
				height: ( props.layout && props.layout.height ) ? props.layout.height : 300,
				marginTop: 0,
				marginBottom: 40,
				marginRight: 25
			}} >
				{e}
			</div>
		</div> );
	}
	else if (
		e.type === Anova ||
		e.type === CorrTest ||
		e.type === Chi2Test ||
		e.type === Kruskal ||
		e.type === MeanTest ||
		e.type === MeanTest2 ||
		e.type === PropTest ||
		e.type === PropTest2
	) {
		const elem = <pre key={idx} >
			{createButtons( t('output-test'), e, clearOutput, idx, subsetFilters, onFilters, t )}
			{e}
		</pre>;
		return elem;
	}
	else if (
		e.type === ContingencyTable ||
		e.type === FrequencyTable
	) {
		const elem = <pre key={idx} >
			{createButtons( t('output-table'), e, clearOutput, idx, subsetFilters, onFilters, t )}
			{makeDraggable( e )}
		</pre>;
		return elem;
	}
	else if (
		e.type === SimpleLinearRegression ||
		e.type === MultipleLinearRegression ||
		e.type === LassoRegression ||
		e.type === LogisticRegression ||
		e.type === PrincipalComponentAnalysis ||
		e.type === KMeans ||
		e.type === NaiveBayes ||
		e.type === RandomForest
	) {
		const elem = <pre key={idx} >
			{createButtons( t('output-model'), e, clearOutput, idx, subsetFilters, onFilters, t )}
			{makeDraggable( e )}
		</pre>;
		return elem;
	}
	else if (
		e.type === DecisionTree ||
		e.type === HierarchicalClustering
	) {
		const elem = <pre key={idx}>
			<ButtonGroup style={{ float: 'right', padding: '0.1rem 0.3rem', top: '-1px', zIndex: 2 }} >
				<DatasetButton
					filters={subsetFilters} onActivateFilters={onFilters}
					style={{
						right: 55, position: 'absolute'
					}}
					t={t}
				/>
				<ClearButton
					onClick={() => { clearOutput( idx ); }}
					style={{
						right: -5, position: 'absolute'
					}}
					t={t}
				/>
			</ButtonGroup>
			<div style={{ marginTop: 25 }}>{e}</div>
		</pre>;
		return elem;
	}
	else if ( e.type === SummaryStatistics ) {
		const elem = <pre key={idx} >
			{createButtons( t('summary-statistics' ), e, clearOutput, idx, subsetFilters, onFilters, t )}
			{makeDraggable( e )}
		</pre>;
		return elem;
	}
	return null;
}


// EXPORTS //

export default createOutputElement;
