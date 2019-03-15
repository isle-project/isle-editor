// MODULES //

import React, { Component } from 'react';
import { render } from 'react-dom';
import NotificationSystem from 'react-notification-system';
import Loadable from 'components/loadable';
import EnlargeableGrid from 'components/enlargeable-grid';
import TeX from 'components/tex';
import Dashboard from 'components/dashboard';
import CheckboxInput from 'components/input/checkbox';
import NumberInput from 'components/input/number';
import ProportionsInput from 'components/input/proportions';
import SelectInput from 'components/input/select';
import SliderInput from 'components/input/slider';
import TextInput from 'components/input/text';
import VoiceInput from 'components/input/voice';
import SPECTACLE_THEME from 'components/spectacle/theme.json';
import factor from 'utils/factor-variable';


// VARIABLES //

const SCOPE = {
	React,
	Component,
	render,
	factor,
	NotificationSystem,

	Accordion: Loadable( () => import( 'components/accordion' ) ),
	Animated: Loadable( () => import( 'components/animated' ) ),
	Background: Loadable( () => import( 'components/background' ) ),
	BeaconTooltip: Loadable( () => import( 'components/beacon-tooltip' ) ),
	CheckboxInput: CheckboxInput,
	Calculator: Loadable( () => import( 'components/calculator' ) ),
	Clock: Loadable( () => import( 'components/clock' ) ),
	Collapse: Loadable( () => import( 'components/collapse' ) ),
	ColorPicker: Loadable( () => import( 'components/color-picker' ) ),
	Dashboard,
	DataExplorer: Loadable( () => import( 'components/data-explorer' ) ),
	DataTable: Loadable( () => import( 'components/data-table' ) ),
	DateDisplay: Loadable( () => import( 'components/date-display' ) ),
	DensityPlot: Loadable( () => import( 'components/d3/density-plot' ) ),
	DraggableGrid: Loadable( () => import( 'components/draggable-grid' ) ),
	DraggableList: Loadable( () => import( 'components/draggable-list' ) ),
	EnlargeableGrid,
	Expire: Loadable( () => import( 'components/expire' ) ),
	FeedbackButtons: Loadable( () => import( 'components/feedback' ) ),
	FlippableCard: Loadable( () => import( 'components/flippable-card' ) ),
	FreeTextSurvey: Loadable( () => import( 'components/free-text-survey' ) ),
	FreeTextQuestion: Loadable( () => import( 'components/free-text-question' ) ),
	Gate: Loadable( () => import( 'components/gate' ) ),
	Generator: Loadable( () => import( 'components/generator' ) ),
	Container: Loadable( () => import( 'components/container' ) ),
	IFrame: Loadable( () => import( 'components/iframe' ) ),
	Joyride: Loadable( () => import( 'components/joyride' ) ),
	JSShell: Loadable( () => import( 'components/js-shell' ) ),
	KeyControls: Loadable( () => import( 'components/key-controls' ) ),
	LearnCrossValidation: Loadable( () => import( 'components/learn/cross-validation' ) ),
	LearnDiceThrowing: Loadable( () => import( 'components/learn/dice-throwing' ) ),
	LearnBinomialDistribution: Loadable( () => import( 'components/learn/distribution-binomial' ) ),
	LearnExponentialDistribution: Loadable( () => import( 'components/learn/distribution-exponential' ) ),
	LearnNormalDistribution: Loadable( () => import( 'components/learn/distribution-normal' ) ),
	LearnTDistribution: Loadable( () => import( 'components/learn/distribution-t' ) ),
	LearnUniformDistribution: Loadable( () => import( 'components/learn/distribution-uniform' ) ),
	LearnStandardize: Loadable( () => import( 'components/learn/standardize' ) ),
	LearnContinuousCLT: Loadable( () => import( 'components/learn/clt-continuous' ) ),
	LearnDiscreteCLT: Loadable( () => import( 'components/learn/clt-discrete' ) ),
	LearnSampleCLT: Loadable( () => import( 'components/learn/clt-sample' ) ),
	LearnConfidenceCoverageBinomial: Loadable( () => import( 'components/learn/confidence-coverage-binomial') ),
	LearnConfidenceCoverageNormal: Loadable( () => import( 'components/learn/confidence-coverage-normal' ) ),
	LearnMeanTest: Loadable( () => import( 'components/learn/hypothesis-testing-mean' ) ),
	LearnProportionTest: Loadable( () => import( 'components/learn/hypothesis-testing-proportion' ) ),
	LearnMeanVSMedian: Loadable( () => import( 'components/learn/mean-vs-median' ) ),
	LearnConditionalProbability: Loadable( () => import( 'components/learn/conditional-probability' ) ),
	LearnVennDiagramBuilder: Loadable( () => import( 'components/learn/venn-diagram-builder' ) ),
	LearnWordVennDiagram: Loadable( () => import( 'components/learn/word-venn-diagram' ) ),
	LearnImagePixelPicker: Loadable( () => import( 'components/learn/image-pixel-picker' ) ),
	LessonSubmit: Loadable( () => import( 'components/lesson-submit' ) ),
	LikertScale: Loadable( () => import( 'components/likert-scale' ) ),
	MarkdownEditor: Loadable( () => import( 'components/markdown-editor' ) ),
	MatchListQuestion: Loadable( () => import( 'components/match-list-question' ) ),
	Metrics: Loadable( () => import( 'components/metrics/db' ) ),
	MultiCards: Loadable( () => import( 'components/multi-cards' ) ),
	MultipleChoiceMatrix: Loadable( () => import( 'components/multiple-choice-matrix' ) ),
	MultipleChoiceQuestion: Loadable( () => import( 'components/multiple-choice-question' ) ),
	MultipleChoiceSurvey: Loadable( () => import( 'components/multiple-choice-survey' ) ),
	NetworkPlot: Loadable( () => import( 'components/d3/network-plot' ) ),
	News: Loadable( () => import( 'components/news' ) ),
	NumberInput,
	NumberQuestion: Loadable( () => import( 'components/number-question' ) ),
	NumberSurvey: Loadable( () => import( 'components/number-survey' ) ),
	OrderQuestion: Loadable( () => import( 'components/order-question' ) ),
	Pages: Loadable( () => import( 'components/pages' ) ),
	Panel: Loadable( () => import( 'components/panel' ) ),
	Playground: Loadable( () => import( 'components/playground' ) ),
	Plotly: Loadable( () => import( 'components/plotly' ) ),
	Preload: Loadable( () => import( 'components/preload' ) ),
	ProportionsInput,
	ProportionsSurvey: Loadable( () => import( 'components/proportions-survey' ) ),
	QuestionForm: Loadable( () => import( 'components/question-form' ) ),
	Queue: Loadable( () => import( 'components/queue' ) ),
	Quiz: Loadable( () => import( 'components/quiz' ) ),
	RangeQuestion: Loadable( () => import('components/range-question' ) ),
	RealtimeMetrics: Loadable( () => import( 'components/metrics/realtime' ) ),
	Recorder: Loadable( () => import( 'components/recorder' ) ),
	Revealer: Loadable( () => import('components/revealer') ),
	RPlot: Loadable( () => import( 'components/r/plot' ) ),
	RHelp: Loadable( () => import( 'components/r/help' ) ),
	RShell: Loadable( () => import( 'components/r/shell' ) ),
	RTable: Loadable( () => import( 'components/r/table' ) ),
	ROutput: Loadable( () => import( 'components/r/output' ) ),
	Runner: Loadable( () => import( 'components/runner' ) ),
	Score: Loadable( () => import( 'components/score' ) ),
	SelectInput,
	SelectQuestion: Loadable( () => import( 'components/select-question' ) ),
	Sketchpad: Loadable( () => import( 'components/sketchpad' ) ),
	SliderInput,
	Slider: Loadable( () => import( 'components/slider' ) ),
	Spinner: Loadable( () => import( 'components/spinner' ) ),

	StatusBar: Loadable( () => import( 'components/statusbar' ) ),
	SurveyGenerator: Loadable( () => import( 'components/survey-generator' ) ),
	Switch: Loadable( () => import( 'components/switch' ) ),

	TeX,
	TextArea: Loadable( () => import( 'components/input/text-area' ) ),
	TextInput,
	Text: Loadable( () => import( 'components/text' ) ),
	Timer: Loadable( () => import( 'components/timer' ) ),
	Tooltip: Loadable( () => import( 'components/tooltip' ) ),
	Tree: Loadable( () => import( 'components/d3/tree' ) ),
	Typewriter: Loadable( () => import( 'components/typewriter' ) ),
	Unveil: Loadable( () => import( 'components/unveil' ) ),

	VideoPlayer: Loadable( () => import( 'components/video-player' ) ),
	VoiceInput,
	VoiceControl: Loadable( () => import( 'components/voice-control' ) ),
	Weather: Loadable( () => import( 'components/weather' ) ),
	Wikipedia: Loadable( () => import( 'components/wikipedia' ) ),
	WordCloud: Loadable( () => import( 'components/word-cloud' ) ),

	// REACT BOOTSTRAP //
	Alert: Loadable( () => import( 'react-bootstrap/Alert' ) ),
	Button: Loadable( () => import( 'react-bootstrap/Button' ) ),
	Card: Loadable( () => import( 'react-bootstrap/Card' ) ),
	Col: Loadable( () => import( 'react-bootstrap/Col' ) ),
	Form: Loadable( () => import( 'react-bootstrap/Form' ) ),
	ListGroup: Loadable( () => import( 'react-bootstrap/ListGroup' ) ),
	ListGroupItem: Loadable( () => import( 'react-bootstrap/ListGroupItem' ) ),
	Modal: Loadable( () => import( 'react-bootstrap/Modal' ) ),
	Nav: Loadable( () => import( 'react-bootstrap/Nav' ) ),
	Navbar: Loadable( () => import( 'react-bootstrap/Navbar' ) ),
	NavItem: Loadable( () => import( 'react-bootstrap/NavItem' ) ),
	Row: Loadable( () => import( 'react-bootstrap/Row' ) ),
	Tab: Loadable( () => import( 'react-bootstrap/Tab' ) ),
	Tabs: Loadable( () => import( 'react-bootstrap/Tabs' ) ),

	// VICTORY //
	VictoryAnimation: Loadable( () => import( 'components/victory/animation' ) ),
	VictoryArea: Loadable( () => import( 'components/victory/area' ) ),
	VictoryBar: Loadable( () => import( 'components/victory/bar' ) ),
	VictoryBrushContainer: Loadable( () => import( 'components/victory/brush-container' ) ),
	VictoryChart: Loadable( () => import( 'components/victory/chart' ) ),
	VictoryContainer: Loadable( () => import( 'components/victory/container' ) ),
	VictoryCursorContainer: Loadable( () => import( 'components/victory/cursor-container' ) ),
	VictoryGroup: Loadable( () => import( 'components/victory/group' ) ),
	VictoryAxis: Loadable( () => import( 'components/victory/axis' ) ),
	VictoryErrorBar: Loadable( () => import( 'components/victory/error-bar' ) ),
	VictoryLabel: Loadable( () => import( 'components/victory/label' ) ),
	VictoryLegend: Loadable( () => import( 'components/victory/legend' ) ),
	VictoryLine: Loadable( () => import( 'components/victory/line' ) ),
	VictoryPie: Loadable( () => import( 'components/victory/pie' ) ),
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
	Image: Loadable( () => import( 'components/spectacle/image' ) ),
	Layout: Loadable( () => import( 'components/spectacle/layout' ) ),
	ListItem: Loadable( () => import( 'components/spectacle/list-item' ) ),
	List: Loadable( () => import( 'components/spectacle/list' ) ),
	Notes: Loadable( () => import( 'components/spectacle/notes' ) ),
	Quote: Loadable( () => import( 'components/spectacle/quote' ) ),
	Slide: Loadable( () => import( 'components/spectacle/slide' ) ),
	Table: Loadable( () => import( 'components/spectacle/table' ) ),
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
	SCOPE.session = session;
	return SCOPE;
};


// EXPORTS //

export default createScope;
