// MODULES //

import React from 'react';
import Provider from '@isle-project/components/internal/provider';
import Session from '@isle-project/session';
import './i18n.js';

import Loadable from '@isle-project/components/internal/loadable';
import EnlargeableGrid from '@isle-project/components/enlargeable-grid';
import TeX from '@isle-project/components/tex';
import Dashboard from '@isle-project/components/dashboard';
import CheckboxInput from '@isle-project/components/input/checkbox';
import NumberInput from '@isle-project/components/input/number';
import ProportionsInput from '@isle-project/components/input/proportions';
import SelectInput from '@isle-project/components/input/select';
import SliderInput from '@isle-project/components/input/slider';
import TextInput from '@isle-project/components/input/text';
import TextArea from '@isle-project/components/input/text-area';
import VoiceInput from '@isle-project/components/input/voice';

import Accordion from '@isle-project/components/accordion';
import Animated from '@isle-project/components/animated';
import BeaconTooltip from '@isle-project/components/beacon-tooltip';
import Bibliography from '@isle-project/components/bibliography';
import Citation from '@isle-project/components/citation';
import Clock from '@isle-project/components/clock';
import Collapse from '@isle-project/components/collapse';
import ColorPicker from '@isle-project/components/color-picker';
import DataExplorer from '@isle-project/components/data-explorer';
import DataTable from '@isle-project/components/data-table';
import DataSampler from '@isle-project/components/data-sampler';
import DateDisplay from '@isle-project/components/date-display';
import DraggableGrid from '@isle-project/components/draggable-grid';
import DraggableList from '@isle-project/components/draggable-list';
import Expire from '@isle-project/components/expire';
import FeedbackButtons from '@isle-project/components/feedback';
import ImageQuestion from '@isle-project/components/questions/image';
import FileQuestion from '@isle-project/components/questions/file';
import FlippableCard from '@isle-project/components/flippable-card';
import FreeTextSurvey from '@isle-project/components/free-text-survey';
import FreeTextQuestion from '@isle-project/components/questions/free-text';
import Gate from '@isle-project/components/gate';
import Generator from '@isle-project/components/generator';
import Container from '@isle-project/components/container';
import IFrame from '@isle-project/components/iframe';
import Image from '@isle-project/components/image';
import Joyride from '@isle-project/components/joyride';
import JSShell from '@isle-project/components/js-shell';
import KeyControls from '@isle-project/components/key-controls';
import Language from '@isle-project/components/language';
import Lesson from '@isle-project/components/internal/lesson';
import LearnCausalityDiagram from '@isle-project/components/learn/causality-diagram';
import LearnCrossValidation from '@isle-project/components/learn/cross-validation';
import LearnDiceThrowing from '@isle-project/components/learn/dice-throwing';
import LearnBetaDistribution from '@isle-project/components/learn/distribution-beta';
import LearnBinomialDistribution from '@isle-project/components/learn/distribution-binomial';
import LearnChisquareDistribution from '@isle-project/components/learn/distribution-chisquare';
import LearnExponentialDistribution from '@isle-project/components/learn/distribution-exponential';
import LearnFDistribution from '@isle-project/components/learn/distribution-f';
import LearnGammaDistribution from '@isle-project/components/learn/distribution-gamma';
import LearnGeometricDistribution from '@isle-project/components/learn/distribution-geometric';
import LearnHypergeometricDistribution from '@isle-project/components/learn/distribution-hypergeometric';
import LearnNegativeBinomialDistribution from '@isle-project/components/learn/distribution-negative-binomial';
import LearnNormalDistribution from '@isle-project/components/learn/distribution-normal';
import LearnPoissonDistribution from '@isle-project/components/learn/distribution-poisson';
import LearnTDistribution from '@isle-project/components/learn/distribution-t';
import LearnUniformDistribution from '@isle-project/components/learn/distribution-uniform';
import LearnStandardize from '@isle-project/components/learn/standardize';
import LearnContinuousCLT from '@isle-project/components/learn/clt-continuous';
import LearnDiscreteCLT from '@isle-project/components/learn/clt-discrete';
import LearnNetworks from '@isle-project/components/learn/networks';
import LearnSampleCLT from '@isle-project/components/learn/clt-sample';
import LearnConfidenceCoverageBinomial from '@isle-project/components/learn/confidence-coverage-binomial';
import LearnConfidenceCoverageNormal from '@isle-project/components/learn/confidence-coverage-normal';
import LearnConfidenceCoverageSample from '@isle-project/components/learn/confidence-coverage-sample';
import LearnContinuousDistribution from '@isle-project/components/learn/continuous-distribution';
import LearnDiscreteDistribution from '@isle-project/components/learn/discrete-distribution';
import LearnMeanTest from '@isle-project/components/learn/hypothesis-testing-mean';
import LearnProportionTest from '@isle-project/components/learn/hypothesis-testing-proportion';
import LearnMeanVSMedian from '@isle-project/components/learn/mean-vs-median';
import LearnStatisticalModels from '@isle-project/components/learn/statistical-models';
import LearnSOTU from '@isle-project/components/learn/sotu';
import LearnConditionalProbability from '@isle-project/components/learn/conditional-probability';
import LearnVennDiagramBuilder from '@isle-project/components/learn/venn-diagram-builder';
import LearnWordVennDiagram from '@isle-project/components/learn/word-venn-diagram';
import LearnImagePixelPicker from '@isle-project/components/learn/image-pixel-picker';
import LessonSubmit from '@isle-project/components/lesson-submit';
import LikertScale from '@isle-project/components/likert-scale';
import Link from '@isle-project/components/link';
import MatchListQuestion from '@isle-project/components/questions/match-list';
import Metrics from '@isle-project/components/metrics/db';
import MetricsContingencyTable from '@isle-project/components/metrics/contingency-table';
import MultiCards from '@isle-project/components/multi-cards';
import MultipleChoiceMatrix from '@isle-project/components/questions/multiple-choice-matrix';
import MultipleChoiceQuestion from '@isle-project/components/questions/multiple-choice';
import MultipleChoiceSurvey from '@isle-project/components/multiple-choice-survey';
import NetworkPlot from '@isle-project/components/plots/network-plot';
import NumberQuestion from '@isle-project/components/questions/number';
import NumberSurvey from '@isle-project/components/number-survey';
import OrderQuestion from '@isle-project/components/questions/order';
import Pages from '@isle-project/components/pages';
import Panel from '@isle-project/components/panel';
import Plotly from '@isle-project/components/plotly';
import Polaroid from '@isle-project/components/polaroid';
import QRCode from '@isle-project/components/qrcode';
import StickyNote from '@isle-project/components/sticky-note';
import ProportionsSurvey from '@isle-project/components/proportions-survey';
import QuestionForm from '@isle-project/components/questions/question-form';
import Quiz from '@isle-project/components/questions/quiz';
import RandomVideo from '@isle-project/components/random-video';
import RangeQuestion from '@isle-project/components/questions/range';
import Reaction from '@isle-project/components/reaction';
import RealTimeMetrics from '@isle-project/components/metrics/realtime';
import Recorder from '@isle-project/components/recorder';
import Revealer from '@isle-project/components/revealer';
import RPlot from '@isle-project/components/r/plot';
import RHelp from '@isle-project/components/r/help';
import RShell from '@isle-project/components/r/shell';
import RTable from '@isle-project/components/r/table';
import ROutput from '@isle-project/components/r/output';
import Runner from '@isle-project/components/runner';
import Seal from '@isle-project/components/seal';
import ScrollingText from '@isle-project/components/scrolling-text';
import SelectQuestion from '@isle-project/components/questions/select';
import SelectQuestionMatrix from '@isle-project/components/questions/select-matrix';
import ShapedForm from '@isle-project/components/shaped-form';
import Sketchpad from '@isle-project/components/sketchpad';
import Slider from '@isle-project/components/slider';
import Spinner from '@isle-project/components/internal/spinner';
import StatusBar from '@isle-project/components/internal/statusbar';
import TextEditor from '@isle-project/components/text-editor';
import Toolbar from '@isle-project/components/internal/toolbar';
import Sunburst from '@isle-project/components/plots/sunburst';
import Switch from '@isle-project/components/switch';
import Table from '@isle-project/components/table';

import Text from '@isle-project/components/text';
import TimedButton from '@isle-project/components/timed-button';
import Timer from '@isle-project/components/timer';
import Tooltip from '@isle-project/components/tooltip';
import SortableTree from '@isle-project/components/sortable-tree';
import Typewriter from '@isle-project/components/typewriter';
import Unveil from '@isle-project/components/unveil';

import VideoLecture from '@isle-project/components/video-lecture';
import VideoPlayer from '@isle-project/components/video-player';
import VoiceControl from '@isle-project/components/internal/voice-control';
import Weather from '@isle-project/components/weather';
import Wikipedia from '@isle-project/components/wikipedia';
import WordCloud from '@isle-project/components/word-cloud';

import BarChart from '@isle-project/components/plots/barchart';
import BoxPlot from '@isle-project/components/plots/boxplot';
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
import ContingencyTable from '@isle-project/components/tables/contingency-table';
import FrequencyTable from '@isle-project/components/tables/frequency-table';
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


// VARIABLES //

const session = new Session({}, true );

const Components = {
	session,
	Provider,
	Loadable,
	EnlargeableGrid,
	TeX,
	Dashboard,
	CheckboxInput,
	NumberInput,
	ProportionsInput,
	SelectInput,
	SliderInput,
	TextInput,
	TextArea,
	VoiceInput,

	Accordion,
	Animated,
	BeaconTooltip,
	Bibliography,
	Citation,
	Clock,
	Collapse,
	ColorPicker,
	DataExplorer,
	DataTable,
	DataSampler,
	DateDisplay,
	DraggableGrid,
	DraggableList,
	Expire,
	FeedbackButtons,
	ImageQuestion,
	FileQuestion,
	FlippableCard,
	FreeTextSurvey,
	FreeTextQuestion,
	Gate,
	Generator,
	Container,
	IFrame,
	Image,
	Joyride,
	JSShell,
	KeyControls,
	Language,
	Lesson,
	LearnCausalityDiagram,
	LearnCrossValidation,
	LearnDiceThrowing,
	LearnBetaDistribution,
	LearnBinomialDistribution,
	LearnChisquareDistribution,
	LearnExponentialDistribution,
	LearnFDistribution,
	LearnGammaDistribution,
	LearnGeometricDistribution,
	LearnHypergeometricDistribution,
	LearnNegativeBinomialDistribution,
	LearnNormalDistribution,
	LearnPoissonDistribution,
	LearnTDistribution,
	LearnUniformDistribution,
	LearnStandardize,
	LearnContinuousCLT,
	LearnDiscreteCLT,
	LearnNetworks,
	LearnSampleCLT,
	LearnConfidenceCoverageBinomial,
	LearnConfidenceCoverageNormal,
	LearnConfidenceCoverageSample,
	LearnContinuousDistribution,
	LearnDiscreteDistribution,
	LearnMeanTest,
	LearnProportionTest,
	LearnMeanVSMedian,
	LearnStatisticalModels,
	LearnSOTU,
	LearnConditionalProbability,
	LearnVennDiagramBuilder,
	LearnWordVennDiagram,
	LearnImagePixelPicker,
	LessonSubmit,
	LikertScale,
	Link,
	MatchListQuestion,
	Metrics,
	MetricsContingencyTable,
	MultiCards,
	MultipleChoiceMatrix,
	MultipleChoiceQuestion,
	MultipleChoiceSurvey,
	NetworkPlot,
	NumberQuestion,
	NumberSurvey,
	OrderQuestion,
	Pages,
	Panel,
	Plotly,
	Polaroid,
	QRCode,
	StickyNote,
	ProportionsSurvey,
	QuestionForm,
	Quiz,
	RandomVideo,
	RangeQuestion,
	Reaction,
	RealTimeMetrics,
	Recorder,
	Revealer,
	RPlot,
	RHelp,
	RShell,
	RTable,
	ROutput,
	Runner,
	Seal,
	ScrollingText,
	SelectQuestion,
	SelectQuestionMatrix,
	ShapedForm,
	Sketchpad,
	Slider,
	Spinner,
	StatusBar,
	TextEditor,
	Toolbar,
	Sunburst,
	Switch,
	Table,

	Text,
	TimedButton,
	Timer,
	Tooltip,
	SortableTree,
	Typewriter,
	Unveil,

	VideoLecture,
	VideoPlayer,
	VoiceControl,
	Weather,
	Wikipedia,
	WordCloud,

	BarChart,
	BoxPlot,
	ContourChart,
	HeatMap,
	Histogram,
	IntervalPlot,
	LinePlot,
	Map,
	MosaicPlot,
	PieChart,
	QQPlot,
	ScatterPlotMatrix,
	ScatterPlot,
	ViolinPlot,

	ContingencyTable,
	FrequencyTable,

	Anova,
	Chi2Test,
	CorrTest,
	Kruskal,
	MeanTest,
	MeanTest2,
	PropTest,
	PropTest2,

	DecisionTree,
	HierarchicalClustering,
	LassoRegression,
	LogisticRegression,
	MultipleLinearRegression,
	NaiveBayes,
	PrincipalComponentAnalysis,
	RandomForest,
	SimpleLinearRegression,
	KMeans,

	SummaryStatistics
};


// EXPORTS //

export default Components;
