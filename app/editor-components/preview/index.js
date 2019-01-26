// MODULES //

/*
	Disable no-new-func warning as evaluating code in an editor
	is one of the few valid use-cases of this otherwise dangerous function:
*/
/* eslint no-new-func: 0 */

import React, { Component } from 'react';
import { render } from 'react-dom';
import { transform } from 'babel-core';
import PropTypes from 'prop-types';
import NotificationSystem from 'react-notification-system';
import logger from 'debug';
import repeat from '@stdlib/string/repeat';
import markdownToHTML from 'utils/markdown-to-html';
import pluginTransformJSX from 'babel-plugin-transform-react-jsx';
import Provider from 'components/provider';
import Loadable from 'editor-components/loadable';
import Session from 'session';
import Alert from 'react-bootstrap/lib/Alert';
import Button from 'react-bootstrap/lib/Button';
import Card from 'react-bootstrap/lib/Card';
import Col from 'react-bootstrap/lib/Col';
import Form from 'react-bootstrap/lib/Form';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import Modal from 'react-bootstrap/lib/Modal';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem from 'react-bootstrap/lib/NavItem';
import Row from 'react-bootstrap/lib/Row';
import Tab from 'react-bootstrap/lib/Tab';
import Tabs from 'react-bootstrap/lib/Tabs';
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
import transformToPresentation from 'utils/transform-to-presentation';
import SPECTACLE_THEME from 'components/spectacle/theme.json';
import factor from 'utils/factor-variable';
import './preview.css';


// VARIABLES //

const OPTS = {
	plugins: [ pluginTransformJSX ]
};
const debug = logger( 'isle-editor' );
const RE_LINES = /\r?\n/g;
const SCOPE = {
	React,
	Component,
	render,
	factor,
	NotificationSystem,

	Accordion: Loadable( () => import( 'components/accordion' ) ),
	Animated: Loadable( () => import( 'components/animated' ) ),
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
	Container: Loadable( () => import( 'components/container' ) ),
	IFrame: Loadable( () => import( 'components/iframe' ) ),
	Joyride: Loadable( () => import( 'components/joyride' ) ),
	JSShell: Loadable( () => import( 'components/js-shell' ) ),
	KeyControls: Loadable( () => import( 'components/key-controls' ) ),
	LearnCrossValidation: Loadable( () => import( 'components/learn/cross-validation' ) ),
	LearnDiceThrowing: Loadable( () => import( 'components/learn/dice-throwing' ) ),
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
	Alert,
	Button,
	Card,
	Col,
	Form,
	ListGroup,
	ListGroupItem,
	Modal,
	Nav,
	Navbar,
	NavItem,
	Row,
	Tab,
	Tabs,

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
const createScope = ( session ) => {
	SCOPE.session = session;
	return SCOPE;
};


// MAIN //

class Preview extends Component {
	constructor( props ) {
		super( props );

		const offline = props.currentMode === 'offline';
		const session = new Session( props.preamble, offline );
		this.session = session;
		this.scope = createScope( session );
		const lessonState = session.config.state;
		this.state = {
			...lessonState
		};
		this.shouldRenderPreview = true;
	}

	componentDidMount() {
		debug( 'Preview did mount.' );
		global.lesson = this;
	}

	shouldComponentUpdate( nextProps, nextState ) {
		if (
			this.props.code !== nextProps.code ||
			this.props.preamble.server !== nextProps.preamble.server ||
			this.props.preamble.state !== nextProps.preamble.state ||
			this.props.preamble.require !== nextProps.preamble.require ||
			this.props.currentMode !== nextProps.currentMode ||
			this.props.currentRole !== nextProps.currentRole
		) {
			return true;
		}
		return false;
	}

	componentDidUpdate( prevProps ) {
		debug( 'Preview will update.' );
		if (
			this.props.preamble.server !== prevProps.preamble.server ||
			this.props.preamble.state !== prevProps.preamble.state ||
			this.props.preamble.require !== prevProps.preamble.require ||
			this.props.currentMode !== prevProps.currentMode ||
			this.props.currentRole !== prevProps.currentRole
		) {
			const offline = this.props.currentMode === 'offline';
			const session = new Session( this.props.preamble, offline );
			this.session = session;
			this.scope = createScope( session );
			let lessonState = session.config.state;
			this.setState({
				...lessonState
			});
		}
	}

	renderPreview = () => {
		debug( 'Should render the lesson...' );
		let es5code;
		let { code, preamble } = this.props;

		// Remove preamble and comments:
		let noEmptyLines = 0;
		const replacer = ( match, p1 ) => {
			noEmptyLines += ( p1.match( RE_LINES ) || '').length;
			return '';
		};
		code = code.replace( /---([\S\s]*)---/, replacer );
		code = code.replace( /<!--([\S\s]*)-->/, replacer );

		// Replace Markdown by HTML...
		code = markdownToHTML( code, {
			escapeBackslash: true,
			addEmptySpans: preamble.type !== 'presentation'
		});

		if ( preamble.type === 'presentation' ) {
			debug( 'Should render a presentation...' );
			code = transformToPresentation( code, preamble );
		}
		if ( !preamble.hideToolbar ) {
			noEmptyLines += 1;
			code = '<StatusBar className="fixedPos" />' + code;
		}

		// Prepend empty lines so line numbers in error stack traces match:
		code = repeat( '\n', noEmptyLines ) + code;
		code = `var out = <React.Fragment>${code}</React.Fragment>`;
		this.props.onCode( code );

		debug( 'Transpile code to ES5...' );
		es5code = transform( code, OPTS );
		es5code.code += '\n\n return out;';
		if ( es5code && es5code.code ) {
			const SCOPE_KEYS = Object.keys( this.scope );
			const SCOPE_VALUES = SCOPE_KEYS.map( key => this.scope[key] );
			const f = new Function( '_poly', ...SCOPE_KEYS, es5code.code ).bind( this );
			const out = f( '_poly', ...SCOPE_VALUES );
			return out;
		}
	}

	render() {
		debug( 'Rendering preview...' );
		const className = this.props.preamble.type === 'presentation' ? 'Presentation' : 'Lesson';
		return ( <div id="Lesson" className={className} >
			<Provider session={this.session} currentRole={this.props.currentRole}>
				{this.renderPreview()}
			</Provider>
			<NotificationSystem
				ref={( div ) => {
					this.notificationSystem = div;
				}}
				allowHTML={true}
			/>
		</div> );
	}
}


// DEFAULT PROPS //

Preview.defaultProps = {
	code: '',
	onCode() {}
};


// PROPERTY TYPES //

Preview.propTypes = {
	code: PropTypes.string,
	currentMode: PropTypes.string.isRequired,
	currentRole: PropTypes.string.isRequired,
	onCode: PropTypes.func,
	preamble: PropTypes.object.isRequired
};


// EXPORTS //

export default Preview;
