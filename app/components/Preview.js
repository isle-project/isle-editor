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

const React = require( 'react' );
const ReactBootstrap = require( 'react-bootstrap' );
const mustache = require( 'mustache' );
const render = require( 'react-dom' ).render;
const NotificationSystem = require( 'react-notification-system' );
const assignMath = require( '@stdlib/namespace/lib/math' );
const request = require( 'request' );
const yaml = require( 'js-yaml' );
const Session = require ( './../api/session' );

import { Component, PropTypes } from 'react';
import { transform } from 'react-tools';
import markdownToHTML from 'utils/markdown-to-html';


// E-LEARNING MODULE COMPONENTS //

// Babel does not support `eval`, so we have to require modules using CommonJS...
const Button = ReactBootstrap.Button;
const ColorPicker = require( 'general/color-picker' );
const DraggableList = require( 'general/draggable-list' );
const Grid = require( 'general/grid' );
const Panel = ReactBootstrap.Panel;
const Row = ReactBootstrap.Row;
const Column = ReactBootstrap.Col;
const Slider = require( 'general/slider' );
const Spinner = require( 'general/spinner' );
const Nav = ReactBootstrap.Nav;
const NavItem = ReactBootstrap.NavItem;
const Tab = ReactBootstrap.Tab;
const Tabs = ReactBootstrap.Tabs;
const Dashboard = require( 'general/dashboard' );
const CheckboxInput = require( 'general/checkbox-input' );
const NumberInput = require( 'general/number-input' );
const SelectInput = require( 'general/select-input' );
const SliderInput = require( 'general/slider-input' );
const TextInput = require( 'general/text-input' );
const LessonSubmit = require( 'general/lesson-submit' );
const Timer = require( 'general/timer' );
const Well = ReactBootstrap.Well;


const DensityPlot = require( 'learning/d3/density-plot' );
const FeedbackButtons = require( 'learning/feedback' );
const FreeTextQuestion = require( 'learning/free-text-question' );
const FunctionPlot = require( 'learning/function-plot' );
const MultipleChoiceQuestion = require( 'learning/multiple-choice-question' );
const MatchListQuestion = require( 'learning/match-list-question' );
const RPlot = require( 'learning/r/plot' );
const RHelp = require( 'learning/rhelp' );
const RShell = require( 'learning/rshell' );
const RTable = require( 'learning/r/table' );
const ROutput = require( 'learning/r/output' );
const Switch = require( 'learning/switch' );
const TeX = require( 'learning/tex' );
const VideoPlayer = require( 'learning/video-player' );

const VictoryAnimation = require( 'victory' ).VictoryAnimation;
const VictoryArea = require( 'victory' ).VictoryArea;
const VictoryBar = require( 'victory' ).VictoryBar;
const VictoryChart = require( 'victory' ).VictoryChart;
const VictoryContainer = require( 'victory' ).VictoryContainer;
const VictoryGroup = require( 'victory' ).VictoryGroup;
const VictoryAxis = require( 'victory' ).VictoryAxis;
const VictoryErrorBar = require( 'victory' ).VictoryErrorBar;
const VictoryLine = require( 'victory' ).VictoryLine;
const VictoryPie = require( 'victory' ).VictoryPie;
const VictoryStack = require( 'victory' ).VictoryStack;
const VictoryTheme = require( 'victory' ).VictoryTheme;
const VictoryTooltip = require( 'victory' ).VictoryTooltip;
const VictoryVoronoiTooltip = require( 'victory' ).VictoryVoronoiTooltip;


// Assign all stdlib modules to the GLOBAL.std namespace:
global.std = {};
assignMath( global.std );


export default class Preview extends Component {
	constructor() {
		super();

		this.shouldRenderPreview = true;
		this.renderPreview = () => {
			let es5code;
			let { code } = this.props;
			const preamble = code.match( /---([\S\s]*)---/ )[ 1 ];

			try {
				global.ISLE = yaml.load( preamble );

				// Remove preamble and comments:
				code = code.replace( /---([\S\s]*)---/, '' );
				code = code.replace( /<!--([\S\s]*)-->/, '' );

				// Replace Markdown by HTML...
				code = markdownToHTML( code );

				es5code = `
					var lessonConfig = {
						componentDidMount: function() {
							global.lesson = this;
						},
						getInitialState: function() {
							return global.ISLE.state;
						},
						session: new Session( global.ISLE ),
						sendMail: function( name, to ) {
							var mailOptions = global.ISLE.mails[ name ];
							if ( !mailOptions.hasOwnProperty( 'from' ) ) {
								mailOptions.from = ISLE.email || 'robinson@isle.cmu.edu';
							}
							if ( mailOptions.hasOwnProperty( 'text' ) ) {
								mailOptions.text = mustache.render( mailOptions.text, global.lesson );
							}
							console.log( mailOptions )
							mailOptions.to = to;
							request.post( ISLE.server + '/mail', {
								form: mailOptions
							}, ( error, response, body ) => {
								console.log( error );
							});
						},
						addNotification: function( config ) {
							this.refs.notificationSystem.addNotification( config );
						},
						componentWillUnmount: function() {
							this.unmounted = true;
						},
						render: function() {
							return React.createElement(
								"div",
								{
									className: "Lesson",
									id: "Lesson"
								},
								${transform( '<div>' + code + '</div>' )},
								React.createElement(
									NotificationSystem,
									{ ref: "notificationSystem", allowHTML: true }
								)
							);
						}
					};
					var Lesson = React.createClass( lessonConfig );
					render(
						${transform( '<Lesson />' )},
						document.getElementById( 'Preview' )
					)
				`;
				eval( es5code );
			} catch ( err ) {
				code = `<div>${err.toString()}</div>`;
				es5code = `
					render(
						${transform( code )},
						document.getElementById( 'Preview' )
					)
				`;
				eval( es5code );
			}
		};
	}
	componentDidMount() {
		this.renderPreview();
	}
	componentDidUpdate() {
		this.renderPreview();
	}
	render() {
		return (
			<div ref="preview" className="Preview" id="Preview"></div>
		);
	}
}


// PROPERTY TYPES //

Preview.propTypes = {
	code: PropTypes.string
};


// EXPORTS //

module.exports = Preview;
