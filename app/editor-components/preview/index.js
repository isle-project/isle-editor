// MODULES //

/*
	Disable no-eval warning as evaluating code in an editor
	is one of the few valid use-cases of this otherwise dangerous function:
*/
/* eslint no-new-func: 0 */

import React, { Component } from 'react';
import { render } from 'react-dom';
import { transform } from 'babel-core';
import PropTypes from 'prop-types';
import NotificationSystem from 'react-notification-system';
import request from 'request';
import contains from '@stdlib/assert/contains';
import logger from 'debug';
import markdownToHTML from 'utils/markdown-to-html';
import pluginTransformJSX from 'babel-plugin-transform-react-jsx';
import Provider from 'components/provider';
import Loadable from 'editor-components/loadable';
import Session from 'session';
import Accordion from 'react-bootstrap/lib/Accordion';
import Button from 'react-bootstrap/lib/Button';
import Col from 'react-bootstrap/lib/Col';
import Modal from 'react-bootstrap/lib/Modal';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem from 'react-bootstrap/lib/NavItem';
import Row from 'react-bootstrap/lib/Row';
import Tab from 'react-bootstrap/lib/Tab';
import Tabs from 'react-bootstrap/lib/Tabs';
import Well from 'react-bootstrap/lib/Well';
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


// const Experiment = require( 'components/experiment' );
// const Variant = require( 'react-ab-test' ).Variant;


import { Bar, VictoryAnimation, VictoryArea, VictoryBar, VictoryBrushContainer, VictoryChart, VictoryContainer, VictoryCursorContainer, VictoryGroup, VictoryAxis, VictoryErrorBar, VictoryLabel, VictoryLegend, VictoryLine, VictoryPie, VictoryScatter, VictoryStack, VictoryTheme, VictoryTooltip, VictoryVoronoiContainer, VictoryZoomContainer } from 'victory';
import VictoryWrapper from 'components/victory-wrapper';
import { Appear, BlockQuote, Cite, Code, CodePane, ComponentPlayground, Deck, Fill, Fit, Heading, Image, Layout, ListItem, List, Quote, Slide, Table, TableRow, TableHeaderItem, TableItem, TableBody, TableHeader, Text as SText } from 'spectacle';


// VARIABLES //

const OPTS = {
	plugins: [ pluginTransformJSX ]
};
const debug = logger( 'isle-editor' );

const createScope = ( session ) => {
	const SCOPE = {
		React,
		Component,
		render,
		session,
		NotificationSystem,
		request,

		AcousticAssistant: Loadable( () => import( 'components/acoustic-css' ) ),
		AcousticCSS: Loadable( () => import( 'components/acoustic-css' ) ),
		BeaconTooltip: Loadable( () => import( 'components/beacon-tooltip' ) ),
		CheckboxInput: CheckboxInput,
		Clock: Loadable( () => import( 'components/clock' ) ),
		ColorPicker: Loadable( () => import( 'components/color-picker' ) ),
		Dashboard,
		DataExplorer: Loadable( () => import( 'components/data-explorer' ) ),
		DataTable: Loadable( () => import( 'components/data-table' ) ),
		DensityPlot: Loadable( () => import( 'components/d3/density-plot' ) ),
		DraggableGrid: Loadable( () => import( 'components/draggable-grid' ) ),
		DraggableList: Loadable( () => import( 'components/draggable-list' ) ),
		EnlargeableGrid,
		Expire: Loadable( () => import( 'components/expire' ) ),
		FeedbackButtons: Loadable( () => import( 'components/feedback' ) ),
		FreeTextSurvey: Loadable( () => import( 'components/free-text-survey' ) ),
		FreeTextQuestion: Loadable( () => import( 'components/free-text-question' ) ),
		Gate: Loadable( () => import( 'components/gate' ) ),
		Grid: Loadable( () => import( 'components/grid' ) ),
		IFrame: Loadable( () => import( 'components/iframe' ) ),
		Joyride: Loadable( () => import( 'components/joyride' ) ),
		JSShell: Loadable( () => import( 'components/js-shell' ) ),
		KeyControls: Loadable( () => import( 'components/key-controls' ) ),
		LearnCrossValidation: Loadable( () => import( 'components/learn/cross-validation' ) ),
		LearnDiceThrowing: Loadable( () => import( 'components/learn/dice-throwing' ) ),
		LearnExponentialDistribution: Loadable( () => import( 'components/learn/distribution/exponential' ) ),
		LearnNormalDistribution: Loadable( () => import( 'components/learn/distribution/normal' ) ),
		LearnTDistribution: Loadable( () => import( 'components/learn/distribution/t' ) ),
		LearnUniformDistribution: Loadable( () => import( 'components/learn/distribution/uniform' ) ),
		LearnStandardize: Loadable( () => import( 'components/learn/standardize' ) ),
		LearnContinuousCLT: Loadable( () => import( 'components/learn/clt/continuous' ) ),
		LearnDiscreteCLT: Loadable( () => import( 'components/learn/clt/discrete' ) ),
		LearnSampleCLT: Loadable( () => import( 'components/learn/clt/sample' ) ),
		LearnConfidenceCoverageBinomial: Loadable( () => import( 'components/learn/confidence-coverage-binomial') ),
		LearnConfidenceCoverageNormal: Loadable( () => import( 'components/learn/confidence-coverage-normal' ) ),
		LearnMeanTest: Loadable( () => import( 'components/learn/hypothesis-testing/mean' ) ),
		LearnProportionTest: Loadable( () => import( 'components/learn/hypothesis-testing/proportion' ) ),
		LearnMeanVSMedian: Loadable( () => import( 'components/learn/mean-vs-median' ) ),
		LearnConditionalProbability: Loadable( () => import( 'components/learn/conditional-probability' ) ),
		LearnVennDiagramBuilder: Loadable( () => import( 'components/learn/venn-diagram-builder' ) ),
		LearnWordVennDiagram: Loadable( () => import( 'components/learn/word-venn-diagram' ) ),
		LearnImagePixelPicker: Loadable( () => import( 'components/learn/image-pixel-picker' ) ),
		LessonSubmit: Loadable( () => import( 'components/lesson-submit' ) ),
		MarkdownEditor: Loadable( () => import( 'components/markdown-editor' ) ),
		MatchListQuestion: Loadable( () => import( 'components/match-list-question' ) ),
		Metrics: Loadable( () => import( 'components/metrics/db' ) ),
		MultipleChoiceQuestion: Loadable( () => import( 'components/multiple-choice-question' ) ),
		MultipleChoiceSurvey: Loadable( () => import( 'components/multiple-choice-survey' ) ),
		NetworkPlot: Loadable( () => import( 'components/d3/network-plot' ) ),
		News: Loadable( () => import( 'components/news' ) ),
		NumberInput,
		NumberQuestion: Loadable( () => import( 'components/number-question' ) ),
		NumberSurvey: Loadable( () => import( 'components/number-survey' ) ),
		Pages: Loadable( () => import( 'components/pages' ) ),
		Panel: Loadable( () => import( 'components/panel' ) ),
		Playground: Loadable( () => import( 'components/playground' ) ),
		Plotly: Loadable( () => import( 'components/plotly' ) ),
		ProportionsInput,
		ProportionsSurvey: Loadable( () => import( 'components/proportions-survey' ) ),
		RangeQuestion: Loadable( () => import('components/range-question' ) ),
		RealtimeMetrics: Loadable( () => import( 'components/metrics/realtime' ) ),
		Recorder: Loadable( () => import( 'components/recorder' ) ),
		RPlot: Loadable( () => import( 'components/r/plot' ) ),
		RHelp: Loadable( () => import( 'components/r/help' ) ),
		RShell: Loadable( () => import( 'components/r/shell' ) ),
		RTable: Loadable( () => import( 'components/r/table' ) ),
		ROutput: Loadable( () => import( 'components/r/output' ) ),
		Runner: Loadable( () => import( 'components/runner' ) ),
		SelectInput,
		SelectQuestion: Loadable( () => import( 'components/select-question' ) ),
		SliderInput,
		Slider: Loadable( () => import( 'components/slider' ) ),
		SpeechRecognition: Loadable( () => import( 'components/speech-recognition' ) ),
		Spinner: Loadable( () => import( 'components/spinner' ) ),

		StatusBar: Loadable( () => import( 'components/statusbar' ) ),
		SurveyGenerator: Loadable( () => import( 'components/survey-generator' ) ),
		Switch: Loadable( () => import( 'components/switch' ) ),

		TeX,
		TextArea: Loadable( () => import( 'components/text-area' ) ),
		TextInput,
		Text: Loadable( () => import( 'components/text' ) ),
		Timer: Loadable( () => import( 'components/timer' ) ),
		Tree: Loadable( () => import( 'components/d3/tree' ) ),
		VideoPlayer: Loadable( () => import( 'components/video-player' ) ),
		VoiceInput,
		Weather: Loadable( () => import( 'components/weather' ) ),
		Wikipedia: Loadable( () => import( 'components/wikipedia' ) ),
		WordCloud: Loadable( () => import( 'components/word-cloud' ) ),

		// REACT BOOTSTRAP //
		Accordion,
		Button,
		Col,
		Modal,
		Nav,
		Navbar,
		NavItem,
		Row,
		Tab,
		Tabs,
		Well,

		// VICTORY //
		Bar,
		VictoryAnimation,
		VictoryArea,
		VictoryBar,
		VictoryBrushContainer,
		VictoryChart,
		VictoryContainer,
		VictoryCursorContainer,
		VictoryGroup,
		VictoryAxis,
		VictoryErrorBar,
		VictoryLabel,
		VictoryLegend,
		VictoryLine,
		VictoryPie,
		VictoryScatter,
		VictoryStack,
		VictoryTheme,
		VictoryTooltip,
		VictoryVoronoiContainer,
		VictoryZoomContainer,
		VictoryWrapper,

		// SPECTACLE //
		Appear,
		BlockQuote,
		Cite,
		Code,
		CodePane,
		ComponentPlayground,
		Deck,
		Fill,
		Fit,
		Heading,
		Image,
		Layout,
		ListItem,
		List,
		Quote,
		Slide,
		Table,
		TableRow,
		TableHeaderItem,
		TableItem,
		TableBody,
		TableHeader,
		SText,
		SPECTACLE_THEME
	};
	return SCOPE;
};


// MAIN //

export default class Preview extends Component {
	constructor( props ) {
		super( props );

		let lessonState = {};
		const preambleIsValid = !props.errorMsg;
		if ( preambleIsValid ) {
			const offline = props.currentMode === 'offline';
			const session = new Session( props.preamble, offline );
			this.session = session;
			this.scope = createScope( session );
			this.props.onScope( this.scope );
			lessonState = session.config.state;
		}
		this.state = {
			preambleIsValid,
			...lessonState
		};
		this.shouldRenderPreview = true;
	}

	static getDerivedStateFromProps( nextProps, prevState ) {
		debug( 'Preview will receive props.' );
		if ( nextProps.errorMsg ) {
			return {
				preambleIsValid: false
			};
		} else if ( !prevState.preambleIsValid ) {
			return {
				preambleIsValid: true
			};
		}
		return null;
	}

	componentDidMount() {
		debug( 'Preview did mount.' );
		global.lesson = this;
	}

	componentDidUpdate( prevProps ) {
		debug( 'Preview will update.' );
		if (
			this.props.preamble.server !== prevProps.preamble.server ||
			this.props.preamble.state !== prevProps.preamble.state ||
			this.props.currentMode !== prevProps.currentMode
		) {
			const offline = this.props.currentMode === 'offline';
			const session = new Session( this.props.preamble, offline );
			this.session = session;
			this.scope = createScope( session );
			this.props.onScope( this.scope );
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
				pres = pres.replace( /<h([0-5])>(.*?)<\/h[0-5]>/g, '<Heading size={$1}>$2</Heading>' );
				pres = pres.replace( /<p[^>]*>([\s\S]+?)<\/p>/g, '<SText>$1</SText>' );
				pres = pres.replace( /<ul[^>]*>([\s\S]+?)<\/ul>/g, '<List>$1</List>' );
				pres = pres.replace( /<li[^>]*>([\s\S]+?)<\/li>/g, '<ListItem>$1</ListItem>' );
				code = pres;
			}
			code = `<div>
				<KeyControls actions={{
					'ArrowUp': function() {
						const e = new KeyboardEvent( 'keydown', { 'bubbles': true, 'key': 'ArrowRight', 'code': 'ArrowRight' });
						delete e.keyCode;
						Object.defineProperty( e, 'keyCode', { 'value' : 39 });
						document.dispatchEvent( e );
					},
					'ArrowDown': function() {
						const e = new KeyboardEvent( 'keydown', { 'bubbles': true, 'key': 'ArrowLeft', 'code': 'ArrowLeft' });
						delete e.keyCode;
						Object.defineProperty( e, 'keyCode', { 'value' : 37 });
						document.dispatchEvent( e );
					}
				}}/>
				<Deck
					globalStyles={false}
					controls={true}
					progress="${progress}"
					transition={[]}
					theme={SPECTACLE_THEME}
				>
					${code}
				</Deck>
			</div>`;
		}
		if ( !preamble.hideToolbar ) {
			code = '<StatusBar className="fixedPos" />\n' + code;
		}
		debug( 'Transpile code to ES5...' );
		try {
			es5code = transform( `var out = <React.Fragment>${code}</React.Fragment>`, OPTS );
			es5code.code += '\n\n return out;';
			if ( es5code && es5code.code ) {
				const SCOPE_KEYS = Object.keys( this.scope );
				const SCOPE_VALUES = SCOPE_KEYS.map( key => this.scope[key] );
				const f = new Function( '_poly', ...SCOPE_KEYS, es5code.code ).bind( this );
				const out = f( '_poly', ...SCOPE_VALUES );
				return out;
			}
		} catch ( err ) {
			return this.renderErrorMessage( err.message );
		}
	}

	renderErrorMessage( err ) {
		return ( <div className="error-message">
			<h3>Encountered an error:</h3>
			<span>{err}</span>
		</div> );
	}

	render() {
		if ( !this.state.preambleIsValid ) {
			return this.renderErrorMessage( 'The preamble cannot be parsed. Please check the syntax.' );
		}
		return ( <div id="Lesson" className="Lesson" >
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
	errorMsg: '',
	onScope() {}
};


// PROPERTY TYPES //

Preview.propTypes = {
	code: PropTypes.string,
	currentMode: PropTypes.string.isRequired,
	currentRole: PropTypes.string.isRequired,
	errorMsg: PropTypes.string,
	onScope: PropTypes.func,
	preamble: PropTypes.object.isRequired
};


// EXPORTS //

module.exports = Preview;
