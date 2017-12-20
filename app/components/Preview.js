// MODULES //

/*
	Disable no-unused-vars warning as modules might be consumed in evaluated user code:
*/
/* eslint no-unused-vars: 0 */

/*
	Disable no-eval warning as evaluating code in an editor
	is one of the few valid use-cases of this otherwise dangerous function:
*/
/* eslint no-eval: 0 */

const fs = require( 'fs' );
const path = require( 'path' );
const PropTypes = require( 'prop-types' );
const React = require( 'react' );
const ReactBootstrap = require( 'react-bootstrap' );
const render = require( 'react-dom' ).render;
const createReactClass = require( 'create-react-class' );
const NotificationSystem = require( 'react-notification-system' );
const contains = require( '@stdlib/assert/contains' );
const request = require( 'request' );
const debug = require( 'debug' )( 'isle-editor' );
const Session = require ( 'session' );

import { Component } from 'react';
import { transform } from 'babel-core';
import markdownToHTML from 'utils/markdown-to-html';


// E-LEARNING MODULE COMPONENTS //

// Babel does not support `eval`, so we have to require modules using CommonJS...
const Accordion = ReactBootstrap.Accordion;
const AcousticCSS = require( 'components/acoustic-css' );
const AcousticAssistant = require( 'components/acoustic-assistant' );
const Button = ReactBootstrap.Button;
const CheckboxInput = require( 'components/input/checkbox' );
const ColorPicker = require( 'components/color-picker' );
const Col = ReactBootstrap.Col;
const Dashboard = require( 'components/dashboard' );
const DataTable = require( 'components/data-table' );
const DensityPlot = require( 'components/d3/density-plot' );
const NetworkPlot = require( 'components/d3/network-plot' );
const DraggableList = require( 'components/draggable-list' );
const Editor = require( 'components/editor' );
const EnlargableGrid = require( 'components/enlargable-grid' );
// const Experiment = require( 'components/experiment' );
const FeedbackButtons = require( 'components/feedback' );
const FreeTextSurvey = require( 'components/free-text-survey' );
const FreeTextQuestion = require( 'components/free-text-question' );
const Gate = require( 'components/gate' );
const Grid = require( 'components/grid' );
const IFrame = require( 'components/iframe' );
const JSShell = require( 'components/js-shell' );
const LessonSubmit = require( 'components/lesson-submit' );
const Metrics = require( 'components/metrics/db' );
const Modal = ReactBootstrap.Modal;
const MultipleChoiceQuestion = require( 'components/multiple-choice-question' );
const MultipleChoiceSurvey = require( 'components/multiple-choice-survey' );
const SurveyGenerator = require( 'components/survey-generator' );
const MatchListQuestion = require( 'components/match-list-question' );
const Nav = ReactBootstrap.Nav;
const Navbar = ReactBootstrap.Navbar;
const NavItem = ReactBootstrap.NavItem;
const News = require( 'components/news' );
const NumberInput = require( 'components/input/number' );
const NumberQuestion = require( 'components/number-question' );
const NumberSurvey = require( 'components/number-survey' );
const Pages = require( 'components/pages' );
const Panel = ReactBootstrap.Panel;
const Plotly = require( 'components/plotly' );
const ProportionsInput = require( 'components/input/proportions' );
const ProportionsSurvey = require( 'components/proportions-survey' );
const Provider = require( 'components/provider' );
const RealtimeMetrics = require( 'components/metrics/realtime' );
const Recorder = require( 'components/recorder' );
const RPlot = require( 'components/r/plot' );
const RHelp = require( 'components/r/help' );
const RShell = require( 'components/r/shell' );
const RTable = require( 'components/r/table' );
const ROutput = require( 'components/r/output' );
const Row = ReactBootstrap.Row;
const Runner = require( 'components/runner' );
const SelectInput = require( 'components/input/select' );
const SelectQuestion = require( 'components/select-question' );
const SliderInput = require( 'components/input/slider' );
const Slider = require( 'components/slider' );
const SpeechRecognition = require( 'components/speech-recognition' );
const Spinner = require( 'components/spinner' );
const StatusBar = require( 'components/statusbar' );
const Switch = require( 'components/switch' );
const Tab = ReactBootstrap.Tab;
const Tabs = ReactBootstrap.Tabs;
const TeX = require( 'components/tex' );
const TextArea = require( 'components/text-area' );
const TextInput = require( 'components/input/text' );
const Text = require( 'components/text' );
const Timer = require( 'components/timer' );
const Tree = require( 'components/d3/tree' );
const VennDiagramBuilder = require( 'components/venn-diagram-builder' );
const Bar = require( 'victory' ).Bar;
// const Variant = require( 'react-ab-test' ).Variant;
const VictoryAnimation = require( 'victory' ).VictoryAnimation;
const VictoryArea = require( 'victory' ).VictoryArea;
const VictoryBar = require( 'victory' ).VictoryBar;
const VictoryBrushContainer = require( 'victory' ).VictoryBrushContainer;
const VictoryChart = require( 'victory' ).VictoryChart;
const VictoryContainer = require( 'victory' ).VictoryContainer;
const VictoryCursorContainer = require( 'victory' ).VictoryCursorContainer;
const VictoryGroup = require( 'victory' ).VictoryGroup;
const VictoryAxis = require( 'victory' ).VictoryAxis;
const VictoryErrorBar = require( 'victory' ).VictoryErrorBar;
const VictoryLabel = require( 'victory' ).VictoryLabel;
const VictoryLegend = require( 'victory' ).VictoryLegend;
const VictoryLine = require( 'victory' ).VictoryLine;
const VictoryPie = require( 'victory' ).VictoryPie;
const VictoryScatter = require( 'victory' ).VictoryScatter;
const VictoryStack = require( 'victory' ).VictoryStack;
const VictoryTheme = require( 'victory' ).VictoryTheme;
const VictoryTooltip = require( 'victory' ).VictoryTooltip;
const VictoryVoronoiContainer = require( 'victory' ).VictoryVoronoiContainer;
const VictoryZoomContainer = require( 'victory' ).VictoryZoomContainer;
const VideoPlayer = require( 'components/video-player' );
const Wikipedia = require( 'components/wikipedia' );

const Appear = require( 'spectacle' ).Appear;
const BlockQuote = require( 'spectacle' ).BlockQuote;
const Cite = require( 'spectacle' ).Cite;
const Code = require( 'spectacle' ).Code;
const CodePane = require( 'spectacle' ).CodePane;
const ComponentPlayground = require( 'spectacle' ).ComponentPlayground;
const Deck = require( 'spectacle' ).Deck;
const Fill = require( 'spectacle' ).Fill;
const Fit = require( 'spectacle' ).Fit;
const Heading = require( 'spectacle' ).Heading;
const Image = require( 'spectacle' ).Image;
const Layout = require( 'spectacle' ).Layout;
const ListItem = require( 'spectacle' ).ListItem;
const List = require( 'spectacle' ).List;
const Quote = require( 'spectacle' ).Quote;
const Slide = require( 'spectacle' ).Slide;
const Table = require( 'spectacle' ).Table;
const TableRow = require( 'spectacle' ).TableRow;
const TableHeaderItem = require( 'spectacle' ).TableHeaderItem;
const TableItem = require( 'spectacle' ).TableItem;
const TableBody = require( 'spectacle' ).TableBody;
const TableHeader = require( 'spectacle' ).TableHeader;
const SText = require( 'spectacle' ).Text;
const createTheme = require( 'spectacle/lib/themes/default' ).default;
const theme = require( 'components/styles/theme.json' );
const Well = ReactBootstrap.Well;
const WordCloud = require( 'components/word-cloud' );


// LEARNING MODULES //

const DataExplorer = require( 'components/data-explorer' );
const Learn = require( 'components/learn' );

const pluginTransformJSX = require( 'babel-plugin-transform-react-jsx' );

// VARIABLES //

const OPTS = {
	plugins: [ pluginTransformJSX ]
};


// MAIN //

export default class Preview extends Component {

	renderErrorMessage( err ) {
		let code = `<div className="errorMessage">
			<h3>Encountered an error:</h3>
			<span>${err}</span>
		</div>`;
		code = `
			render(
				${code},
				document.getElementById( 'Preview' )
			)
		`;
		code = transform( code, OPTS ).code;
		eval( code );
	}

	constructor( props ) {
		super( props );

		this.state = {
			preambleIsValid: !props.errorMsg
		};

		if ( this.state.preambleIsValid ) {
			const offline = props.currentMode === 'offline';
			global.session = new Session( props.preamble, offline );
		}

		this.shouldRenderPreview = true;
		this.renderPreview = () => {
			debug( 'Should render the lesson...' );
			let es5code;
			let { code, preamble, currentRole } = this.props;
			let session = global.session;

			// Remove preamble and comments:
			code = code.replace( /---([\S\s]*)---/, '' );
			code = code.replace( /<!--([\S\s]*)-->/, '' );

			// Replace Markdown by HTML...
			code = markdownToHTML( code );

			if ( preamble.type === 'presentation' ) {
				debug( 'Should render a presentation...' );
				let progress = 'number';
				if ( preamble.presentation ) {
					if ( preamble.presentation.progress ) {
						progress = preamble.presentation.progress;
					}
				}
				// Automatically insert <Slide> tags if not manually set...
				if ( !contains( code, '<Slide' ) || !contains( code, '</Slide>' ) ) {
					let pres = '<Slide>';
					let arr = code.split( '<p>===</p>' );
					pres += arr.join( '</Slide><Slide>' );
					pres += '</Slide>';
					pres = pres.replace( /<h([0-5])>(.*?)<\/h[0-5]>/g,'<Heading size={$1}>$2</Heading>' );
					pres = pres.replace( /<p[^>]*>([\s\S]+?)<\/p>/g, '<SText>$1</SText>' );
					pres = pres.replace( /<ul[^>]*>([\s\S]+?)<\/ul>/g, '<List>$1</List>' );
					pres = pres.replace( /<li[^>]*>([\s\S]+?)<\/li>/g, '<ListItem>$1</ListItem>' );
					code = pres;
				}
				code = `
					<Deck
						globalStyles={false}
						controls={true}
						progress="${progress}"
						transition={[]}
						theme={theme}
					>${code}</Deck>`;
			}

			const es6code = `class Lesson extends React.Component {
				constructor() {
					super();
					this.state = global.session.config.state || {};
				}
				componentDidMount() {
					global.lesson = this;
				}
				componentWillUnmount() {
					this.unmounted = true;
				}
				render() {
					return (
						<div id="Lesson" className="Lesson" >
							<StatusBar className="fixedPos" hidden={global.session.config.hideToolbar} />
							<div>${code}</div>
							<NotificationSystem
								ref={ ( div ) => this.notificationSystem = div }
								allowHTML={true}
							/>
						</div>
					);
				}
			}
			render(
				<Provider session={session} currentRole="${currentRole}" >
					<Lesson />
				</Provider>,
				document.getElementById( 'Preview' )
			);`;

			debug( 'Transpile code to ES5...' );
			try {
				es5code = transform( es6code, OPTS );
				console.log( es5code );
				if ( es5code && es5code.code ) {
					eval( es5code.code );
				}
			} catch ( err ) {
				this.renderErrorMessage( err.message );
			}
		};
	}

	componentWillReceiveProps( nextProps ) {
		debug( 'Preview will receive props.' );
		if ( nextProps.errorMsg ) {
			this.setState({
				preambleIsValid: false
			});
		} else {
			if ( !this.state.preambleIsValid ) {
				this.setState({
					preambleIsValid: true
				});
			}
		}
	}

	componentWillUpdate( nextProps ) {
		debug( 'Preview will update.' );
		if (
			nextProps.preamble.server !== this.props.preamble.server ||
			nextProps.preamble.state !== this.props.preamble.state ||
			nextProps.currentMode !== this.props.currentMode
		) {
			const offline = nextProps.currentMode === 'offline';
			global.session = new Session( nextProps.preamble, offline );
		}
		if ( nextProps.preamble.type !== this.props.preamble.type ) {
			if ( this.state.preambleIsValid ) {
				this.renderPreview();
			}
		}
	}

	componentDidMount() {
		debug( 'Preview did mount.' );
		if ( this.state.preambleIsValid ) {
			this.renderPreview();
		} else {
			this.renderErrorMessage( this.props.errorMsg );
		}
	}

	componentDidUpdate() {
		debug( 'Preview did update.' );
		if ( this.state.preambleIsValid ) {
			this.renderPreview();
		} else {
			this.renderErrorMessage( this.props.errorMsg );
		}
	}

	render() {
		return (
			<div ref="preview" className="Preview" id="Preview"></div>
		);
	}
}


// PROPERTY TYPES //

Preview.propTypes = {
	code: PropTypes.string,
	filePath: PropTypes.string,
	errorMsg: PropTypes.string
};


// EXPORTS //

module.exports = Preview;
