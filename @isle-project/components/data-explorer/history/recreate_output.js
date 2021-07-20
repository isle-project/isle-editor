// MODULES //

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
import SummaryStatistics from '@isle-project/components/summary-statistics';


// MAIN //

/**
 * Recreates output.
 *
 * @param {Object} action - action object
 * @param {Object} props - data explorer props
 * @returns {Node} output element
 */
function recreateOutput( action, props ) {
	const params = { ...props, ...action.value };
	let output;
	switch ( action.type ) {
		case 'DATA_EXPLORER_SUMMARY_STATISTICS':
			output = <SummaryStatistics {...params} />;
			break;
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
	return output;
}


// EXPORTS //

export default recreateOutput;
