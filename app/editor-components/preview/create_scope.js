// MODULES //

import React, { Component } from 'react';
import { render } from 'react-dom';
import Draggable from 'react-draggable';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import copy from '@stdlib/utils/copy';
import Loadable from 'components/internal/loadable';
import EnlargeableGrid from 'components/enlargeable-grid';
import TeX from 'components/tex';
import Dashboard from 'components/dashboard';
import CheckboxInput from 'components/input/checkbox';
import NumberInput from 'components/input/number';
import ProportionsInput from 'components/input/proportions';
import SelectInput from 'components/input/select';
import SliderInput from 'components/input/slider';
import TextInput from 'components/input/text';
import TextArea from 'components/input/text-area';
import VoiceInput from 'components/input/voice';
import VictoryAxis from 'components/victory/axis';
import SPECTACLE_THEME from 'components/spectacle/theme.json';
import factor from 'utils/factor-variable';


// VARIABLES //

export const SCOPE = {
	Accordion: Loadable( () => import( /* webpackChunkName: "Accordion" */ 'components/accordion' ) ),
	Animated: Loadable( () => import( /* webpackChunkName: "Animated" */ 'components/animated' ) ),
	Background: Loadable( () => import( /* webpackChunkName: "Background" */ 'components/background' ) ),
	BeaconTooltip: Loadable( () => import( /* webpackChunkName: "BeaconTooltip" */ 'components/beacon-tooltip' ) ),
	Bibliography: Loadable( () => import( /* webpackChunkName: "Bibliography" */ 'components/bibliography' ) ),
	CheckboxInput: CheckboxInput,
	Calculator: Loadable( () => import( /* webpackChunkName: "Calculator" */ 'components/calculator' ) ),
	Citation: Loadable( () => import( /* webpackChunkName: "Citation" */ 'components/citation' ) ),
	Clock: Loadable( () => import( /* webpackChunkName: "Clock" */ 'components/clock' ) ),
	Collapse: Loadable( () => import( /* webpackChunkName: "Collapse" */ 'components/collapse' ) ),
	ColorPicker: Loadable( () => import( /* webpackChunkName: "ColorPicker" */ 'components/color-picker' ) ),
	Dashboard,
	DataExplorer: Loadable( () => import( /* webpackChunkName: "DataExplorer" */ 'components/data-explorer' ) ),
	DataTable: Loadable( () => import( /* webpackChunkName: "DataTable" */ 'components/data-table' ) ),
	DataSampler: Loadable( () => import( /* webpackChunkName: "DataSampler" */ 'components/data-sampler' ) ),
	DateDisplay: Loadable( () => import( /* webpackChunkName: "DateDisplay" */ 'components/date-display' ) ),
	DensityPlot: Loadable( () => import( /* webpackChunkName: "DensityPlot" */ 'components/d3/density-plot' ) ),
	DraggableGrid: Loadable( () => import( /* webpackChunkName: "DraggableGrid" */ 'components/draggable-grid' ) ),
	DraggableList: Loadable( () => import( /* webpackChunkName: "DraggableList" */ 'components/draggable-list' ) ),
	EnlargeableGrid,
	Expire: Loadable( () => import( /* webpackChunkName: "Expire" */ 'components/expire' ) ),
	FeedbackButtons: Loadable( () => import( /* webpackChunkName: "Feedback" */ 'components/feedback' ) ),
	ImageQuestion: Loadable( () => import( /* webpackChunkName: "ImageQuestion" */ 'components/image-question' ) ),
	FlippableCard: Loadable( () => import( /* webpackChunkName: "FlippableCard" */ 'components/flippable-card' ) ),
	FreeTextSurvey: Loadable( () => import( /* webpackChunkName: "FreeTextSurvey" */ 'components/free-text-survey' ) ),
	FreeTextQuestion: Loadable( () => import( /* webpackChunkName: "FreeTextQuestion" */ 'components/free-text-question' ) ),
	Gate: Loadable( () => import( /* webpackChunkName: "Gate" */ 'components/gate' ) ),
	Generator: Loadable( () => import( /* webpackChunkName: "Generator" */ 'components/generator' ) ),
	Container: Loadable( () => import( /* webpackChunkName: "Container" */ 'components/container' ) ),
	IFrame: Loadable( () => import( /* webpackChunkName: "IFrame" */ 'components/iframe' ) ),
	Image: Loadable( () => import( /* webpackChunkName: "Image" */ 'components/image' ) ),
	Joyride: Loadable( () => import( /* webpackChunkName: "Joyride" */ 'components/joyride' ) ),
	JSShell: Loadable( () => import( /* webpackChunkName: "JSShell" */ 'components/js-shell' ) ),
	KeyControls: Loadable( () => import( /* webpackChunkName: "KeyControls" */ 'components/key-controls' ) ),
	Lesson: Loadable( () => import( /* webpackChunkName: "Lesson" */ 'components/internal/lesson' ) ),
	LearnCrossValidation: Loadable( /* webpackChunkName: "LearnCrossValidation" */ () => import( 'components/learn/cross-validation' ) ),
	LearnDiceThrowing: Loadable( /* webpackChunkName: "LearnDiceThrowing" */ () => import( 'components/learn/dice-throwing' ) ),
	LearnBetaDistribution: Loadable( /* webpackChunkName: "LearnBetaDistribution" */ () => import( 'components/learn/distribution-beta' ) ),
	LearnBinomialDistribution: Loadable( /* webpackChunkName: "LearnBinomialDistribution" */ () => import( 'components/learn/distribution-binomial' ) ),
	LearnChisquareDistribution: Loadable( /* webpackChunkName: "LearnChisquareDistribution" */ () => import( 'components/learn/distribution-chisquare' ) ),
	LearnExponentialDistribution: Loadable( /* webpackChunkName: "LearnExponentialDistribution" */ () => import( 'components/learn/distribution-exponential' ) ),
	LearnFDistribution: Loadable( () => import( /* webpackChunkName: "LearnFDistribution" */ 'components/learn/distribution-f' ) ),
	LearnGammaDistribution: Loadable( () => import( /* webpackChunkName: "LearnGammaDistribution" */ 'components/learn/distribution-gamma' ) ),
	LearnGeometricDistribution: Loadable( () => import( /* webpackChunkName: "LearnGeometricDistribution" */ 'components/learn/distribution-geometric' ) ),
	LearnHypergeometricDistribution: Loadable( () => import( /* webpackChunkName: "LearnHypergeometricDistribution" */ 'components/learn/distribution-hypergeometric' ) ),
	LearnNegativeBinomialDistribution: Loadable( () => import( /* webpackChunkName: "LearnNegativeBinomialDistribution" */ 'components/learn/distribution-negative-binomial' ) ),
	LearnNormalDistribution: Loadable( () => import( /* webpackChunkName: "LearnNormalDistribution" */ 'components/learn/distribution-normal' ) ),
	LearnPoissonDistribution: Loadable( () => import( /* webpackChunkName: "LearnPoissonDistribution" */ 'components/learn/distribution-poisson' ) ),
	LearnTDistribution: Loadable( () => import( /* webpackChunkName: "LearnTDistribution" */ 'components/learn/distribution-t' ) ),
	LearnUniformDistribution: Loadable( () => import( /* webpackChunkName: "LearnUniformDistribution" */ 'components/learn/distribution-uniform' ) ),
	LearnStandardize: Loadable( () => import( /* webpackChunkName: "LearnStandardize" */ 'components/learn/standardize' ) ),
	LearnContinuousCLT: Loadable( () => import( /* webpackChunkName: "LearnContinuousCLT" */ 'components/learn/clt-continuous' ) ),
	LearnDiscreteCLT: Loadable( () => import( /* webpackChunkName: "LearnDiscreteCLT" */ 'components/learn/clt-discrete' ) ),
	LearnNetworks: Loadable( () => import( /* webpackChunkName: "LearnNetworks" */ 'components/learn/networks' ) ),
	LearnSampleCLT: Loadable( () => import( /* webpackChunkName: "LearnSampleCLT" */ 'components/learn/clt-sample' ) ),
	LearnConfidenceCoverageBinomial: Loadable( () => import( /* webpackChunkName: "LearnConfidenceCoverageBinomial" */ 'components/learn/confidence-coverage-binomial') ),
	LearnConfidenceCoverageNormal: Loadable( () => import( /* webpackChunkName: "LearnConfidenceCoverageNormal" */ 'components/learn/confidence-coverage-normal' ) ),
	LearnContinuousDistribution: Loadable( () => import( /* webpackChunkName: "LearnContinuousDistribution" */ 'components/learn/continuous-distribution' ) ),
	LearnDiscreteDistribution: Loadable( () => import( /* webpackChunkName: "LearnDiscreteDistribution" */ 'components/learn/discrete-distribution' ) ),
	LearnMeanTest: Loadable( () => import( /* webpackChunkName: "LearnMeanTest" */ 'components/learn/hypothesis-testing-mean' ) ),
	LearnProportionTest: Loadable( () => import( /* webpackChunkName: "LearnProportionTest" */ 'components/learn/hypothesis-testing-proportion' ) ),
	LearnMeanVSMedian: Loadable( () => import( /* webpackChunkName: "LearnMeanVSMedian" */ 'components/learn/mean-vs-median' ) ),
	LearnStatisticalModels: Loadable( () => import( /* webpackChunkName: "LearnStatisticalModels" */ 'components/learn/statistical-models' ) ),
	LearnSOTU: Loadable( () => import( /* webpackChunkName: "LearnSOTU" */ 'components/learn/sotu' ) ),
	LearnConditionalProbability: Loadable( () => import( /* webpackChunkName: "LearnConditionalProbability" */ 'components/learn/conditional-probability' ) ),
	LearnVennDiagramBuilder: Loadable( () => import( /* webpackChunkName: "LearnVennDiagramBuilder" */ 'components/learn/venn-diagram-builder' ) ),
	LearnWordVennDiagram: Loadable( () => import( /* webpackChunkName: "LearnWordVennDiagram" */ 'components/learn/word-venn-diagram' ) ),
	LearnImagePixelPicker: Loadable( () => import( /* webpackChunkName: "LearnImagePixelPicker" */ 'components/learn/image-pixel-picker' ) ),
	LessonSubmit: Loadable( () => import( /* webpackChunkName: "LessonSubmit" */ 'components/lesson-submit' ) ),
	LikertScale: Loadable( () => import( /* webpackChunkName: "LikertScale" */ 'components/likert-scale' ) ),
	Link: Loadable( () => import( /* webpackChunkName: "Link" */ 'components/link' ) ),
	MatchListQuestion: Loadable( () => import( /* webpackChunkName: "MatchListQuestion" */ 'components/match-list-question' ) ),
	Metrics: Loadable( () => import( /* webpackChunkName: "Metrics" */ 'components/metrics/db' ) ),
	MetricsContingencyTable: Loadable( () => import( /* webpackChunkName: "MetricsContingencyTable" */ 'components/metrics/contingency-table' ) ),
	MultiCards: Loadable( () => import( /* webpackChunkName: "MultiCards" */ 'components/multi-cards' ) ),
	MultipleChoiceMatrix: Loadable( () => import( /* webpackChunkName: "MultipleChoiceMatrix" */ 'components/multiple-choice-matrix' ) ),
	MultipleChoiceQuestion: Loadable( () => import( /* webpackChunkName: "MultipleChoiceQuestion" */ 'components/multiple-choice-question' ) ),
	MultipleChoiceSurvey: Loadable( () => import( /* webpackChunkName: "MultipleChoiceSurvey" */'components/multiple-choice-survey' ) ),
	NetworkPlot: Loadable( () => import( /* webpackChunkName: "NetworkPlot" */ 'components/d3/network-plot' ) ),
	News: Loadable( () => import( /* webpackChunkName: "News" */ 'components/news' ) ),
	NumberInput,
	NumberQuestion: Loadable( () => import( /* webpackChunkName: "NumberQuestion" */ 'components/number-question' ) ),
	NumberSurvey: Loadable( () => import( /* webpackChunkName: "NumberSurvey" */ 'components/number-survey' ) ),
	OrderQuestion: Loadable( () => import( /* webpackChunkName: "OrderQuestion" */ 'components/order-question' ) ),
	Pages: Loadable( () => import( /* webpackChunkName: "Pages" */ 'components/pages' ) ),
	Panel: Loadable( () => import( /* webpackChunkName: "Panel" */ 'components/panel' ) ),
	Playground: Loadable( () => import( /* webpackChunkName: "Playground" */ 'components/playground' ) ),
	Plotly: Loadable( () => import( /* webpackChunkName: "Plotly" */ 'components/plotly' ) ),
	Polaroid: Loadable( () => import( /* webpackChunkName: "Polaroid" */ 'components/polaroid' ) ),
	QRCode: Loadable( () => import( /* webpackChunkName: "QRCode" */ 'components/qrcode' ) ),
	StickyNote: Loadable( () => import( /* webpackChunkName: "StickyNote" */ 'components/sticky-note' ) ),
	Preload: Loadable( () => import( /* webpackChunkName: "Preload" */ 'components/preload' ) ),
	ProportionsInput,
	ProportionsSurvey: Loadable( () => import( /* webpackChunkName: "ProportionsSurvey" */ 'components/proportions-survey' ) ),
	QuestionForm: Loadable( () => import( /* webpackChunkName: "QuestionForm" */ 'components/question-form' ) ),
	Queue: Loadable( () => import( /* webpackChunkName: "Queue" */ 'components/queue' ) ),
	Quiz: Loadable( () => import( /* webpackChunkName: "Quiz" */ 'components/quiz' ) ),
	RandomVideo: Loadable( () => import( /* webpackChunkName: "RandomVideo" */ 'components/random-video' ) ),
	RangeQuestion: Loadable( () => import( /* webpackChunkName: "RangeQuestion" */ 'components/range-question' ) ),
	Reaction: Loadable( () => import( /* webpackChunkName: "Reaction" */ 'components/reaction' ) ),
	RealTimeMetrics: Loadable( () => import( /* webpackChunkName: "RealTimeMetrics" */ 'components/metrics/realtime' ) ),
	Recorder: Loadable( () => import( /* webpackChunkName: "Recorder" */ 'components/recorder' ) ),
	Revealer: Loadable( () => import( /* webpackChunkName: "Revealer" */ 'components/revealer') ),
	RPlot: Loadable( () => import( /* webpackChunkName: "RPlot" */ 'components/r/plot' ) ),
	RHelp: Loadable( () => import( /* webpackChunkName: "RHelp" */ 'components/r/help' ) ),
	RShell: Loadable( () => import( /* webpackChunkName: "RShell" */ 'components/r/shell' ) ),
	RTable: Loadable( () => import( /* webpackChunkName: "RTable" */ 'components/r/table' ) ),
	ROutput: Loadable( () => import( /* webpackChunkName: "ROutput" */ 'components/r/output' ) ),
	Runner: Loadable( () => import( /* webpackChunkName: "Runner" */ 'components/runner' ) ),
	Seal: Loadable( () => import( /* webpackChunkName: "Seal" */ 'components/seal' ) ),
	ScrollingText: Loadable( () => import( /* webpackChunkName: "ScrollingText" */ 'components/scrolling-text' ) ),
	SelectInput,
	SelectQuestion: Loadable( () => import( /* webpackChunkName: "SelectQuestion" */ 'components/select-question' ) ),
	SelectQuestionMatrix: Loadable( () => import( /* webpackChunkName: "SelectQuestionMatrix" */ 'components/select-question-matrix' ) ),
	ShapedForm: Loadable( () => import( /* webpackChunkName: "ShapedForm" */ 'components/shaped-form' ) ),
	ShapedImage: Loadable( () => import( /* webpackChunkName: "ShapedImage" */ 'components/shaped-image' ) ),
	Sketchpad: Loadable( () => import( /* webpackChunkName: "Sketchpad" */ 'components/sketchpad' ) ),
	SliderInput,
	Slider: Loadable( () => import( /* webpackChunkName: "Slider" */ 'components/slider' ) ),
	Spinner: Loadable( () => import( /* webpackChunkName: "Spinner" */ 'components/spinner' ) ),
	StatusBar: Loadable( () => import( /* webpackChunkName: "StatusBar" */ 'components/internal/statusbar' ) ),
	TextEditor: Loadable( () => import( /* webpackChunkName: "TextEditor" */ 'components/text-editor' ) ),
	Toolbar: Loadable( () => import( /* webpackChunkName: "Toolbar" */ 'components/internal/toolbar' ) ),
	Sunburst: Loadable( () => import( /* webpackChunkName: "Sunburst" */ 'components/d3/sunburst' ) ),
	Switch: Loadable( () => import( /* webpackChunkName: "Switch" */ 'components/switch' ) ),
	Table: Loadable( () => import( /* webpackChunkName: "Table" */ 'components/table' ) ),

	TeX,
	TextArea,
	TextInput,
	Text: Loadable( () => import( /* webpackChunkName: "Text" */ 'components/text' ) ),
	TimedButton: Loadable( () => import( /* webpackChunkName: "TimedButton" */ 'components/timed-button' ) ),
	Timer: Loadable( () => import( /* webpackChunkName: "Timer" */ 'components/timer' ) ),
	Tooltip: Loadable( () => import( /* webpackChunkName: "Tooltip" */ 'components/tooltip' ) ),
	SortableTree: Loadable( () => import( /* webpackChunkName: "SortableTree" */ 'components/sortable-tree' ) ),
	Typewriter: Loadable( () => import( /* webpackChunkName: "Typewriter" */ 'components/typewriter' ) ),
	Unveil: Loadable( () => import( /* webpackChunkName: "Unveil" */ 'components/unveil' ) ),

	VideoLecture: Loadable( () => import( /* webpackChunkName: "VideoLecture" */ 'components/video-lecture' ) ),
	VideoPlayer: Loadable( () => import( /* webpackChunkName: "VideoPlayer" */ 'components/video-player' ) ),
	VoiceInput,
	VoiceControl: Loadable( () => import( /* webpackChunkName: "VoiceControl" */ 'components/internal/voice-control' ) ),
	Weather: Loadable( () => import( /* webpackChunkName: "Weather" */ 'components/weather' ) ),
	Wikipedia: Loadable( () => import( /* webpackChunkName: "Wikipedia" */ 'components/wikipedia' ) ),
	WordCloud: Loadable( () => import( /* webpackChunkName: "WordCloud" */ 'components/word-cloud' ) ),

	// REACT BOOTSTRAP //
	Alert: Loadable( () => import( 'react-bootstrap/Alert' ) ),
	Badge: Loadable( () => import( 'react-bootstrap/Badge' ) ),
	Button: Loadable( () => import( 'react-bootstrap/Button' ) ),
	Card,
	Col: Loadable( () => import( 'react-bootstrap/Col' ) ),
	Form,
	FormControl: Loadable( () => import( 'react-bootstrap/FormControl' ) ),
	ListGroup: Loadable( () => import( 'react-bootstrap/ListGroup' ) ),
	ListGroupItem: Loadable( () => import( 'react-bootstrap/ListGroupItem' ) ),
	Modal,
	Nav: Loadable( () => import( 'react-bootstrap/Nav' ) ),
	Navbar: Loadable( () => import( 'react-bootstrap/Navbar' ) ),
	NavItem: Loadable( () => import( 'react-bootstrap/NavItem' ) ),
	NavLink: Loadable( () => import( 'react-bootstrap/NavLink' ) ),
	Row: Loadable( () => import( 'react-bootstrap/Row' ) ),
	Tab: Loadable( () => import( 'react-bootstrap/Tab' ) ),
	Tabs: Loadable( () => import( 'react-bootstrap/Tabs' ) ),

	// VICTORY //
	VictoryAnimation: Loadable( () => import( 'components/victory/animation' ) ),
	VictoryArea: Loadable( () => import( 'components/victory/area' ) ),
	VictoryBar: Loadable( () => import( 'components/victory/bar' ) ),
	VictoryBoxPlot: Loadable( () => import( 'components/victory/boxplot' ) ),
	VictoryBrushContainer: Loadable( () => import( 'components/victory/brush-container' ) ),
	VictoryCandlestick: Loadable( () => import( 'components/victory/candlestick' ) ),
	VictoryChart: Loadable( () => import( 'components/victory/chart' ) ),
	VictoryContainer: Loadable( () => import( 'components/victory/container' ) ),
	VictoryCursorContainer: Loadable( () => import( 'components/victory/cursor-container' ) ),
	VictoryGroup: Loadable( () => import( 'components/victory/group' ) ),
	VictoryAxis,
	VictoryErrorBar: Loadable( () => import( 'components/victory/error-bar' ) ),
	VictoryLabel: Loadable( () => import( 'components/victory/label' ) ),
	VictoryLegend: Loadable( () => import( 'components/victory/legend' ) ),
	VictoryLine: Loadable( () => import( 'components/victory/line' ) ),
	VictoryPie: Loadable( () => import( 'components/victory/pie' ) ),
	VictoryPolarAxis: Loadable( () => import( 'components/victory/polaraxis' ) ),
	VictoryScatter: Loadable( () => import( 'components/victory/scatter' ) ),
	VictoryStack: Loadable( () => import( 'components/victory/stack' ) ),
	VictoryTheme: Loadable( () => import( 'components/victory/theme' ) ),
	VictoryTooltip: Loadable( () => import( 'components/victory/tooltip' ) ),
	VictoryVoronoiContainer: Loadable( () => import( 'components/victory/voronoi-container' ) ),
	VictoryZoomContainer: Loadable( () => import( 'components/victory/zoom-container' ) ),
	VictoryWrapper: Loadable( () => import( 'components/victory/wrapper' ) ),

	// SPECTACLE //
	Appear: Loadable( () => import( 'components/spectacle/appear' ) ),
	BlockQuote: Loadable( () => import( 'components/spectacle/block-quote' ) ),
	Cite: Loadable( () => import( 'components/spectacle/cite' ) ),
	Code: Loadable( () => import( 'components/spectacle/code' ) ),
	CodePane: Loadable( () => import( 'components/spectacle/code-pane' ) ),
	CodeSlide: Loadable( () => import( 'components/spectacle/code-slide' ) ),
	Deck: Loadable( () => import( 'components/spectacle/deck' ) ),
	Fill: Loadable( () => import( 'components/spectacle/fill' ) ),
	Fit: Loadable( () => import( 'components/spectacle/fit' ) ),
	Heading: Loadable( () => import( 'components/spectacle/heading' ) ),
	SImage: Loadable( () => import( 'components/spectacle/image' ) ),
	Layout: Loadable( () => import( 'components/spectacle/layout' ) ),
	ListItem: Loadable( () => import( 'components/spectacle/list-item' ) ),
	List: Loadable( () => import( 'components/spectacle/list' ) ),
	Notes: Loadable( () => import( 'components/spectacle/notes' ) ),
	Quote: Loadable( () => import( 'components/spectacle/quote' ) ),
	Slide: Loadable( () => import( 'components/spectacle/slide' ) ),
	STable: Loadable( () => import( 'components/spectacle/table' ) ),
	TableRow: Loadable( () => import( 'components/spectacle/table-row' ) ),
	TableHeaderItem: Loadable( () => import( 'components/spectacle/table-header-item' ) ),
	TableItem: Loadable( () => import( 'components/spectacle/table-item' ) ),
	TableBody: Loadable( () => import( 'components/spectacle/table-body' ) ),
	TableHeader: Loadable( () => import( 'components/spectacle/table-header' ) ),
	SText: Loadable( () => import( 'components/spectacle/text' ) ),
	SPECTACLE_THEME
};


// MAIN //

const createScope = ( session ) => {
	const scope = copy( SCOPE, 1 );
	scope.session = session;
	scope.React = React;
	scope.Component = Component;
	scope.render = render;
	scope.factor = factor;
	scope.Draggable = Draggable;
	return scope;
};


// EXPORTS //

export default createScope;
