// MODULES //

import React, { Fragment, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import SessionContext from '@isle-project/session/context.js';
import Loadable from '@isle-project/components/internal/loadable';
import DropdownItem from 'react-bootstrap/DropdownItem';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Tab from 'react-bootstrap/Tab';

const ContingencyTable = Loadable( () => import( /* webpackChunkName: "ContingencyTableMenu" */ '@isle-project/components/data-explorer/menu/contingency_table' ) );
const FrequencyTable = Loadable( () => import( /* webpackChunkName: "FrequencyTableMenu" */ '@isle-project/components/data-explorer/menu/frequency_table' ) );
const SummaryStatistics = Loadable( () => import( /* webpackChunkName: "SummaryStatisticsMenu" */ '@isle-project/components/data-explorer/summary_statistics' ) );
const VariableTransformer = Loadable( () => import( /* webpackChunkName: "VariableTransformerMenu" */ '@isle-project/components/data-explorer/variable-transformer' ) );

// MODEL COMPONENTS //

const DecisionTree = Loadable( () => import( /* webpackChunkName: "DecisionTreeMenu" */ '@isle-project/components/data-explorer/menu/decision_tree.js' ) );
const LassoRegression = Loadable( () => import( /* webpackChunkName: "LassoRegressionMenu" */ '@isle-project/components/data-explorer/menu/lasso_regression.js' ) );
const LogisticRegression = Loadable( () => import( /* webpackChunkName: "LogisticRegressionMenu" */ '@isle-project/components/data-explorer/menu/logistic_regression' ) );
const MultipleLinearRegression = Loadable( () => import( /* webpackChunkName: "MultipleLinearRegressionMenu" */ '@isle-project/components/data-explorer/menu/multiple_linear_regression' ) );
const RandomForest = Loadable( () => import( /* webpackChunkName: "RandomForestMenu" */ '@isle-project/components/data-explorer/menu/random_forest.js' ) );
const SimpleLinearRegression = Loadable( () => import( /* webpackChunkName: "SimpleLinearRegressionMenu" */ '@isle-project/components/data-explorer/menu/simple_linear_regression' ) );
const PrincipalComponentAnalysis = Loadable( () => import( /* webpackChunkName: "PrincipalComponentAnalysisMenu" */ '@isle-project/components/data-explorer/menu/principal_component_analysis' ) );
const HierarchicalClustering = Loadable( () => import( /* webpackChunkName: "HierarchicalClusteringMenu" */ '@isle-project/components/data-explorer/menu/hierarchical_clustering.js' ) );
const KMeans = Loadable( () => import( /* webpackChunkName: "KMeansMenu" */ '@isle-project/components/data-explorer/menu/kmeans' ) );
const NaiveBayes = Loadable( () => import( /* webpackChunkName: "NaiveBayesMenu" */ '@isle-project/components/data-explorer/menu/naive_bayes.js' ) );

// TEST COMPONENTS //

const Anova = Loadable( () => import( /* webpackChunkName: "AnovaMenu" */ '@isle-project/components/data-explorer/menu/anova' ) );
const Chi2Test = Loadable( () => import( /* webpackChunkName: "Chi2TestMenu" */ '@isle-project/components/data-explorer/menu/chi2' ) );
const CorrTest = Loadable( () => import( /* webpackChunkName: "CorrTestMenu" */ '@isle-project/components/data-explorer/menu/corrtest' ) );
const Kruskal = Loadable( () => import( /* webpackChunkName: "KruskalMenu" */ '@isle-project/components/data-explorer/menu/kruskal' ) );
const MeanTest = Loadable( () => import( /* webpackChunkName: "MeanTestMenu" */ '@isle-project/components/data-explorer/menu/meantest' ) );
const MeanTest2 = Loadable( () => import( /* webpackChunkName: "MeanTest2Menu" */ '@isle-project/components/data-explorer/menu/meantest2' ) );
const PropTest = Loadable( () => import( /* webpackChunkName: "PropTestMenu" */ '@isle-project/components/data-explorer/menu/proptest' ) );
const PropTest2 = Loadable( () => import( /* webpackChunkName: "PropTest2Menu" */ '@isle-project/components/data-explorer/menu/proptest2' ) );
const TukeyHSDTest = Loadable( () => import( /* webpackChunkName: "TukeyHSDTestMenu" */ '@isle-project/components/data-explorer/menu/tukey_hsd' ) );

// PLOT COMPONENTS //

const Barchart = Loadable( () => import( /* webpackChunkName: "BarchartMenu" */ '@isle-project/components/data-explorer/menu/barchart' ) );
const Boxplot = Loadable( () => import( /* webpackChunkName: "BoxplotMenu" */ '@isle-project/components/data-explorer/menu/boxplot' ) );
const Heatmap = Loadable( () => import( /* webpackChunkName: "HeatmapMenu" */ '@isle-project/components/data-explorer/menu/heatmap' ) );
const Histogram = Loadable( () => import( /* webpackChunkName: "HistogramMenu" */ '@isle-project/components/data-explorer/menu/histogram' ) );
const IntervalPlot = Loadable( () => import( /* webpackChunkName: "IntervalplotMenu" */ '@isle-project/components/data-explorer/menu/intervalplot' ) );
const Lineplot = Loadable( () => import( /* webpackChunkName: "LineplotMenu" */'@isle-project/components/data-explorer/menu/lineplot' ) );
const Map = Loadable( () => import( /* webpackChunkName: "MapMenu" */ '@isle-project/components/data-explorer/menu/map' ) );
const MosaicPlot = Loadable( () => import( /* webpackChunkName: "MosaicPlotMenu" */ '@isle-project/components/data-explorer/menu/mosaicplot' ) );
const Piechart = Loadable( () => import( /* webpackChunkName: "PiechartMenu" */ '@isle-project/components/data-explorer/menu/piechart' ) );
const QQPlot = Loadable( () => import( /* webpackChunkName: "QQPlotMenu" */ '@isle-project/components/data-explorer/menu/qqplot' ) );
const Scatterplot = Loadable( () => import( /* webpackChunkName: "ScatterplotMenu" */ '@isle-project/components/data-explorer/menu/scatterplot' ) );
const ScatterplotMatrix = Loadable( () => import( /* webpackChunkName: "ScatterplotMatrixMenu" */ '@isle-project/components/data-explorer/menu/scatterplot_matrix' ) );
const Violinplot = Loadable( () => import( /* webpackChunkName: "ViolinplotMenu" */ '@isle-project/components/data-explorer/menu/violinplot' ) );
const ContourChart = Loadable( () => import( /* webpackChunkName: "ContourChartMenu" */ '@isle-project/components/data-explorer/menu/contourchart.js' ) );


// MAIN //

const ToolboxTabs = ({ categorical, quantitative, originalQuantitative, groupingVariables, logAction, data,
	statistics, tables, models, plots, tests, showHistogramDensityOption, showTestDecisions,
	transformer, onBarchartSelection, onCategoricalGenerate, onCreated, onGenerateTransformedVariable,
	onHistogramSelection, onPlotDone, onQuantitativeGenerate, onTransformerBeingActive, onPredict,
	on2dSelection, onQQPlotSelection
}) => {
	const nStatistics = statistics.length;
	const { t } = useTranslation( 'data-explorer' );
	const session = useContext( SessionContext );
	let defaultActiveKey = '1';
	if ( nStatistics === 0 ) {
		if ( tables.length > 0 ) {
			defaultActiveKey = '2.1';
		}
		else {
			defaultActiveKey = '3.1';
		}
	}
	const categoricalProps = {
		data: data,
		variables: categorical,
		groupingVariables,
		onCreated: onCreated,
		onPlotDone: onPlotDone
	};
	const quantitativeProps = {
		data: data,
		variables: quantitative,
		groupingVariables,
		onCreated: onCreated,
		onPlotDone: onPlotDone
	};
	const navbar = <div className="nav nav-tabs" role="tablist" >
		{ nStatistics > 0 ?
			<Nav.Item className="nav-statistics" >
				<Nav.Link eventKey="1">{t('statistics')}</Nav.Link>
			</Nav.Item> : null
		}
		{ tables.length > 0 && categorical.length > 0 ?
			<NavDropdown
				title={t('tables')}
				className="nav-tables"
			>
				{ tables.map(
					( e, i ) => ( <DropdownItem key={i} eventKey={`2.${i+1}`} >
						{t( e )}
					</DropdownItem> )
				) }
			</NavDropdown> : null
		}
		{ plots.length > 0 ?
			<NavDropdown
				title={t('plots')}
				className="nav-plots"
			>
				{ plots.map( ( e, i ) => {
					const item = <DropdownItem key={i} eventKey={`3.${i+1}`}>{t( e )}</DropdownItem>;
					if (
						e === 'Histogram' && plots[ i-1 ] === 'Mosaic Plot' ||
						e === 'Line Plot' && plots[ i-1 ] === 'Box Plot'
					) {
						return ( <Fragment key={i} >
							<NavDropdown.Divider key={`${i}-div`} />
							{item}
						</Fragment> );
					}
					return item;
				})}
			</NavDropdown> : null
		}
		{ tests.length > 0 ?
			<NavDropdown
				title={t('tests')}
				className="nav-tests"
			>
				{ tests.map( ( e, i ) => {
					const item = <DropdownItem key={i} eventKey={`4.${i+1}`}>{t( e )}</DropdownItem>;
					if (
						e === 'One-Sample Proportion Test' && tests[ i-1 ] === 'One-Way ANOVA' ||
						e === 'Correlation Test' && tests[ i-1 ] === 'Two-Sample Proportion Test'
					) {
						return ( <Fragment key={i} >
							<NavDropdown.Divider key={`${i}-div`} />
							{item}
						</Fragment> );
					}
					return item;
				}) }
			</NavDropdown> : null
		}
		{ models.length > 0 ?
			<NavDropdown
				title={t('models')}
				className="nav-models"
			>
				{models.map( ( e, i ) => {
					const item = <DropdownItem key={i} eventKey={`5.${i+1}`}>{t( e )}</DropdownItem>;
					if (
						e === 'Decision Tree' && models[ i-1 ] === 'LASSO' ||
						e === 'PCA' && models[ i-1 ] === 'Naive Bayes'
					) {
						return ( <Fragment key={i} >
							<NavDropdown.Divider key={`${i}-div`} />
							{item}
						</Fragment> );
					}
					return item;
				})}
			</NavDropdown> : null
		}
		{ transformer ?
			<Nav.Item className="nav-transform" >
				<Nav.Link eventKey="6">{t('transform')}</Nav.Link>
			</Nav.Item> : null
		}
	</div>;
	const tabs = <Tab.Content>
		<Tab.Pane eventKey="1">
			<SummaryStatistics
				{...quantitativeProps}
				statistics={statistics}
				logAction={logAction}
				t={t}
			/>
		</Tab.Pane>
		{tables.map( ( e, i ) => {
			let content = null;
			switch ( e ) {
			case 'Frequency Table':
				content = <FrequencyTable
					{...categoricalProps}
					logAction={logAction}
					t={t}
				/>;
				break;
			case 'Contingency Table':
				content = <ContingencyTable
					{...categoricalProps}
					logAction={logAction}
					session={session}
					t={t}
				/>;
				break;
			}
			return ( <Tab.Pane key={i} eventKey={`2.${i+1}`}>
				{content}
			</Tab.Pane> );
		})}
		{plots.map( ( e, i ) => {
			let content = null;
			switch ( e ) {
			case 'Bar Chart':
				content = <Barchart
					{...categoricalProps}
					quantitative={quantitative}
					logAction={logAction}
					session={session}
					onSelected={onBarchartSelection}
					t={t}
				/>;
				break;
			case 'Box Plot':
				content = <Boxplot
					{...quantitativeProps}
					logAction={logAction}
					session={session}
					t={t}
				/>;
				break;
			case 'Contour Chart':
				content = <ContourChart
					{...quantitativeProps}
					logAction={logAction}
					session={session}
					onSelected={on2dSelection}
					t={t}
				/>;
				break;
			case 'Heat Map':
				content = <Heatmap
					{...quantitativeProps}
					logAction={logAction}
					session={session}
					onSelected={on2dSelection}
					t={t}
				/>;
				break;
			case 'Histogram':
				content = <Histogram
					{...quantitativeProps}
					logAction={logAction}
					session={session}
					showDensityOption={showHistogramDensityOption}
					onSelected={onHistogramSelection}
					t={t}
				/>;
				break;
			case 'Interval Plot':
				content = <IntervalPlot
					{...quantitativeProps}
					logAction={logAction}
					session={session}
					t={t}
				/>;
				break;
			case 'Line Plot':
				content = <Lineplot
					{...quantitativeProps}
					categorical={categorical}
					logAction={logAction}
					session={session}
					t={t}
				/>;
				break;
			case 'Mosaic Plot':
				content = <MosaicPlot
					{...categoricalProps}
					logAction={logAction}
					session={session}
					t={t}
				/>;
				break;
			case 'Pie Chart':
				content = <Piechart
					{...categoricalProps}
					quantitative={quantitative}
					logAction={logAction}
					session={session}
					t={t}
				/>;
				break;
			case 'QQ Plot':
				content = <QQPlot
					{...quantitativeProps}
					logAction={logAction}
					session={session}
					onSelected={onQQPlotSelection}
					t={t}
				/>;
				break;
			case 'Scatterplot':
				content = <Scatterplot
					{...quantitativeProps}
					logAction={logAction}
					session={session}
					onSelected={on2dSelection}
					t={t}
				/>;
				break;
			case 'Scatterplot Matrix':
				content = <ScatterplotMatrix
					{...quantitativeProps}
					logAction={logAction}
					session={session}
					onSelected={on2dSelection}
					t={t}
				/>;
				break;
			case 'Violin Plot':
				content = <Violinplot
					{...quantitativeProps}
					logAction={logAction}
					session={session}
					t={t}
				/>;
				break;
			case 'Map':
				content = <Map
					{...quantitativeProps}
					logAction={logAction}
					session={session}
					t={t}
				/>;
				break;
			}
			return ( <Tab.Pane key={i} eventKey={`3.${i+1}`}>
				{content}
			</Tab.Pane> );
		})}
		{tests.map( ( e, i ) => {
			let content = null;
			switch ( e ) {
			case 'One-Sample Mean Test':
				content = <MeanTest
					onCreated={onCreated}
					data={data}
					quantitative={quantitative}
					logAction={logAction}
					showDecision={showTestDecisions}
					t={t}
				/>;
				break;
			case 'Two-Sample Mean Test':
				content = <MeanTest2
					onCreated={onCreated}
					data={data}
					quantitative={quantitative}
					categorical={categorical}
					logAction={logAction}
					session={session}
					showDecision={showTestDecisions}
					t={t}
				/>;
				break;
			case 'One-Sample Proportion Test':
				content = <PropTest
					onCreated={onCreated}
					data={data}
					categorical={categorical}
					logAction={logAction}
					showDecision={showTestDecisions}
					t={t}
				/>;
				break;
			case 'Two-Sample Proportion Test':
				content = <PropTest2
					onCreated={onCreated}
					data={data}
					categorical={categorical}
					logAction={logAction}
					session={session}
					showDecision={showTestDecisions}
					t={t}
				/>;
				break;
			case 'One-Way ANOVA':
				content = <Anova
					onCreated={onCreated}
					data={data}
					quantitative={quantitative}
					categorical={categorical}
					logAction={logAction}
					showDecision={showTestDecisions}
					t={t}
				/>;
				break;
			case 'Correlation Test':
				content = <CorrTest
					onCreated={onCreated}
					data={data}
					quantitative={quantitative}
					logAction={logAction}
					showDecision={showTestDecisions}
					t={t}
				/>;
				break;
			case 'Chi-squared Independence Test':
			case 'Chi-square Independence Test':
				content = <Chi2Test
					onCreated={onCreated}
					data={data}
					categorical={categorical}
					logAction={logAction}
					showDecision={showTestDecisions}
					t={t}
				/>;
				break;
			case 'Kruskal-Wallis Test':
				content = <Kruskal
					onCreated={onCreated}
					data={data}
					quantitative={quantitative}
					categorical={categorical}
					logAction={logAction}
					showDecision={showTestDecisions}
					t={t}
				/>;
				break;
			case 'Tukey HSD Test':
				content = <TukeyHSDTest
					onCreated={onCreated}
					data={data}
					quantitative={quantitative}
					categorical={categorical}
					logAction={logAction}
					t={t}
				/>;
				break;
			}
			return ( <Tab.Pane key={i} eventKey={`4.${i+1}`}>
				{content}
			</Tab.Pane> );
		})}
		{models.map( ( e, i ) => {
			let content = null;
			switch ( e ) {
			case 'Multiple Linear Regression':
				content = <MultipleLinearRegression
					categorical={categorical}
					quantitative={quantitative}
					onCreated={onCreated}
					data={data}
					logAction={logAction}
					session={session}
					onPredict={onPredict['multiple-linear-regression']}
					t={t}
				/>;
			break;
			case 'Decision Tree':
				content = <DecisionTree
					categorical={categorical}
					quantitative={quantitative}
					onCreated={onCreated}
					data={data}
					logAction={logAction}
					session={session}
					onPredict={onPredict['decision-tree']}
					t={t}
				/>;
			break;
			case 'Random Forest':
				content = <RandomForest
					categorical={categorical}
					quantitative={quantitative}
					onCreated={onCreated}
					data={data}
					logAction={logAction}
					session={session}
					onPredict={onPredict['random-forest']}
					t={t}
				/>;
			break;
			case 'LASSO':
				content = <LassoRegression
					categorical={categorical}
					quantitative={quantitative}
					onCreated={onCreated}
					data={data}
					logAction={logAction}
					session={session}
					onPredict={onPredict['lasso']}
					t={t}
				/>;
			break;
			case 'Logistic Regression':
				content = <LogisticRegression
					categorical={categorical}
					quantitative={quantitative}
					onCreated={onCreated}
					data={data}
					logAction={logAction}
					session={session}
					onPredict={onPredict['logistic']}
					t={t}
				/>;
			break;
			case 'Simple Linear Regression':
				content = <SimpleLinearRegression
					categorical={categorical}
					quantitative={quantitative}
					onCreated={onCreated}
					data={data}
					logAction={logAction}
					session={session}
					onPredict={onPredict['simple-linear-regression']}
					t={t}
				/>;
				break;
			case 'PCA':
				content = <PrincipalComponentAnalysis
					quantitative={quantitative}
					originalQuantitative={originalQuantitative}
					onCreated={onCreated}
					onGenerate={onQuantitativeGenerate}
					data={data}
					logAction={logAction}
					session={session}
					t={t}
				/>;
				break;
			case 'Hierarchical Clustering':
				content = <HierarchicalClustering
					quantitative={quantitative}
					categorical={categorical}
					originalQuantitative={quantitative}
					onCreated={onCreated}
					onGenerate={onCategoricalGenerate}
					data={data}
					logAction={logAction}
					session={session}
					t={t}
				/>;
				break;
			case 'kmeans':
				content = <KMeans
					quantitative={quantitative}
					categorical={categorical}
					originalQuantitative={quantitative}
					onCreated={onCreated}
					onGenerate={onCategoricalGenerate}
					data={data}
					logAction={logAction}
					session={session}
					t={t}
				/>;
				break;
				case 'Naive Bayes':
					content = <NaiveBayes
						categorical={categorical}
						quantitative={quantitative}
						onCreated={onCreated}
						data={data}
						logAction={logAction}
						session={session}
						onPredict={onPredict['naive-bayes']}
						t={t}
					/>;
				break;
			}
			return ( <Tab.Pane key={i} eventKey={`5.${i+1}`}>
				{content}
			</Tab.Pane> );
		})}
		{ transformer ?
			<Tab.Pane eventKey="6" >
				<VariableTransformer
					data={data}
					quantitative={quantitative}
					categorical={categorical}
					logAction={logAction}
					session={session}
					onGenerate={onGenerateTransformedVariable}
					onActive={onTransformerBeingActive}
					t={t}
				/>
			</Tab.Pane> : null
		}
	</Tab.Content>;
	return (
		<Tab.Container defaultActiveKey={defaultActiveKey} mountOnEnter >
			{navbar}
			{tabs}
		</Tab.Container>
	);
};


// EXPORTS //

export default ToolboxTabs;
