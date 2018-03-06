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
import Loadable from 'components/loadable';
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
import SPECTACLE_THEME from 'components/spectacle/theme.json';

// const Experiment = require( 'components/experiment' );
// const Variant = require( 'react-ab-test' ).Variant;


import { Bar, VictoryAnimation, VictoryArea, VictoryBar, VictoryBrushContainer, VictoryChart, VictoryContainer, VictoryCursorContainer, VictoryGroup, VictoryAxis, VictoryErrorBar, VictoryLabel, VictoryLegend, VictoryLine, VictoryPie, VictoryScatter, VictoryStack, VictoryTheme, VictoryTooltip, VictoryVoronoiContainer, VictoryZoomContainer } from 'victory';
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

		AcousticAssistant: Loadable( () => import( 'components/acoustic-css' ), session ),
		AcousticCSS: Loadable( () => import( 'components/acoustic-css' ), session ),
		CheckboxInput: Loadable( () => import( 'components/input/checkbox' ), session ),
		Clock: Loadable( () => import( 'components/clock' ), session ),
		ColorPicker: Loadable( () => import( 'components/color-picker' ), session ),
		Dashboard: Loadable( () => import( 'components/dashboard' ), session ),
		DataExplorer: Loadable( () => import( 'components/data-explorer' ), session ),
		DataTable: Loadable( () => import( 'components/data-table' ), session ),
		DensityPlot: Loadable( () => import( 'components/d3/density-plot' ), session ),
		DraggableGrid: Loadable( () => import( 'components/draggable-grid' ), session ),
		DraggableList: Loadable( () => import( 'components/draggable-list' ), session ),
		EnlargeableGrid: Loadable( () => import( 'components/enlargeable-grid' ), session ),
		Expire: Loadable( () => import( 'components/expire' ), session ),
		FeedbackButtons: Loadable( () => import( 'components/feedback' ), session ),
		FreeTextSurvey: Loadable( () => import( 'components/free-text-survey' ), session ),
		FreeTextQuestion: Loadable( () => import( 'components/free-text-question' ), session ),
		Gate: Loadable( () => import( 'components/gate' ), session ),
		Grid: Loadable( () => import( 'components/grid' ), session ),
		IFrame: Loadable( () => import( 'components/iframe' ), session ),
		JSShell: Loadable( () => import( 'components/js-shell' ), session ),
		Learn: Loadable( () => import( 'components/learn' ), session ),
		LessonSubmit: Loadable( () => import( 'components/lesson-submit' ), session ),
		MarkdownEditor: Loadable( () => import( 'components/markdown-editor' ), session ),
		MatchListQuestion: Loadable( () => import( 'components/match-list-question' ), session ),
		Metrics: Loadable( () => import( 'components/metrics/db' ), session ),
		MultipleChoiceQuestion: Loadable( () => import( 'components/multiple-choice-question' ), session ),
		MultipleChoiceSurvey: Loadable( () => import( 'components/multiple-choice-survey' ), session ),
		NetworkPlot: Loadable( () => import( 'components/d3/network-plot' ), session ),
		News: Loadable( () => import( 'components/news' ), session ),
		NumberInput: Loadable( () => import( 'components/input/number' ), session ),
		NumberQuestion: Loadable( () => import( 'components/number-question' ), session ),
		NumberSurvey: Loadable( () => import( 'components/number-survey' ), session ),
		Pages: Loadable( () => import( 'components/pages' ), session ),
		Panel: Loadable( () => import( 'components/panel' ), session ),
		Playground: Loadable( () => import( 'components/playground' ), session ),
		Plotly: Loadable( () => import( 'components/plotly' ), session ),
		ProportionsInput: Loadable( () => import( 'components/input/proportions' ), session ),
		ProportionsSurvey: Loadable( () => import( 'components/proportions-survey' ), session ),
		RealtimeMetrics: Loadable( () => import( 'components/metrics/realtime' ), session ),
		Recorder: Loadable( () => import( 'components/recorder' ), session ),
		RPlot: Loadable( () => import( 'components/r/plot' ), session ),
		RHelp: Loadable( () => import( 'components/r/help' ), session ),
		RShell: Loadable( () => import( 'components/r/shell' ), session ),
		RTable: Loadable( () => import( 'components/r/table' ), session ),
		ROutput: Loadable( () => import( 'components/r/output' ), session ),
		Runner: Loadable( () => import( 'components/runner' ), session ),
		SelectInput: Loadable( () => import( 'components/input/select' ), session ),
		SelectQuestion: Loadable( () => import( 'components/select-question' ), session ),
		SliderInput: Loadable( () => import( 'components/input/slider' ), session ),
		Slider: Loadable( () => import( 'components/slider' ), session ),
		SpeechRecognition: Loadable( () => import( 'components/speech-recognition' ), session ),
		Spinner: Loadable( () => import( 'components/spinner' ), session ),

		StatusBar: Loadable( () => import( 'components/statusbar' ), session ),
		SurveyGenerator: Loadable( () => import( 'components/survey-generator' ), session ),
		Switch: Loadable( () => import( 'components/switch' ), session ),

		TeX: Loadable( () => import( 'components/text' ), session ),
		TextArea: Loadable( () => import( 'components/text-area' ), session ),
		TextInput: Loadable( () => import( 'components/input/text' ), session ),
		Text: Loadable( () => import( 'components/text' ), session ),
		Timer: Loadable( () => import( 'components/timer' ), session ),
		Tree: Loadable( () => import( 'components/d3/tree' ), session ),
		VideoPlayer: Loadable( () => import( 'components/video-player' ), session ),
		VoiceInput: Loadable( () => import( 'components/input/voice' ), session ),
		Weather: Loadable( () => import( 'components/weather' ), session ),
		Wikipedia: Loadable( () => import( 'components/wikipedia' ), session ),
		WordCloud: Loadable( () => import( 'components/word-cloud' ), session ),

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
			this.scope = createScope( session );
			lessonState = session.config.state;
		}
		this.state = {
			preambleIsValid,
			...lessonState
		};
		this.shouldRenderPreview = true;
	}

	componentDidMount() {
		debug( 'Preview did mount.' );
		global.lesson = this;
	}

	componentWillReceiveProps( nextProps ) {
		debug( 'Preview will receive props.' );
		if ( nextProps.errorMsg ) {
			this.setState({
				preambleIsValid: false
			});
		} else if ( !this.state.preambleIsValid ) {
			this.setState({
				preambleIsValid: true
			});
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
			const session = new Session( nextProps.preamble, offline );
			this.scope = createScope( session );
		}
	}

	renderPreview = () => {
		debug( 'Should render the lesson...' );
		let es5code;
		let { code, preamble, currentRole } = this.props;

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
			code = `
			<Deck
				globalStyles={false}
				controls={true}
				progress="${progress}"
				transition={[]}
				theme={SPECTACLE_THEME}
			>${code}</Deck>`;
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
				global.SCOPE_VALUES = SCOPE_VALUES;
				const out = f( '_poly', ...SCOPE_VALUES );
				return out;
			}
		} catch ( err ) {
			console.log( err );
			return this.renderErrorMessage( err.message );
		}
	}

	renderErrorMessage( err ) {
		return ( <div className="error-message">
			<h3>Encountered an error:</h3>
			<span>${err}</span>
		</div> );
	}

	render() {
		if ( !this.state.preambleIsValid ) {
			return this.renderErrorMessage( 'The preamble cannot be parsed. Please check the syntax.' );
		}
		return ( <div id="Lesson" className="Lesson" >
			{this.renderPreview()}
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
	errorMsg: ''
};


// PROPERTY TYPES //

Preview.propTypes = {
	code: PropTypes.string,
	currentMode: PropTypes.string.isRequired,
	currentRole: PropTypes.string.isRequired,
	errorMsg: PropTypes.string,
	preamble: PropTypes.object.isRequired
};


// EXPORTS //

module.exports = Preview;
