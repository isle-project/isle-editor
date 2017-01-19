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
const assignStdlib = require( '@stdlib/namespace' );
const request = require( 'request' );
const yaml = require( 'js-yaml' );
const Session = require ( 'api/session' );

import { Component, PropTypes } from 'react';
import { transform } from 'react-tools';
import markdownToHTML from 'utils/markdown-to-html';


// E-LEARNING MODULE COMPONENTS //

// Babel does not support `eval`, so we have to require modules using CommonJS...
const Button = ReactBootstrap.Button;
const CheckboxInput = require( 'components/input/checkbox' );
const ColorPicker = require( 'components/color-picker' );
const Column = ReactBootstrap.Col;
const Dashboard = require( 'components/dashboard' );
const DensityPlot = require( 'components/d3/density-plot' );
const DraggableList = require( 'components/draggable-list' );
const FeedbackButtons = require( 'components/feedback' );
const FreeTextQuestion = require( 'components/free-text-question' );
const Grid = require( 'components/grid' );
const LessonSubmit = require( 'components/lesson-submit' );
const MultipleChoiceQuestion = require( 'components/multiple-choice-question' );
const MatchListQuestion = require( 'components/match-list-question' );
const Nav = ReactBootstrap.Nav;
const NavItem = ReactBootstrap.NavItem;
const NumberInput = require( 'components/input/number' );
const Panel = ReactBootstrap.Panel;
const RPlot = require( 'components/r/plot' );
const RHelp = require( 'components/r/help' );
const RShell = require( 'components/r/shell' );
const RTable = require( 'components/r/table' );
const ROutput = require( 'components/r/output' );
const Row = ReactBootstrap.Row;
const SelectInput = require( 'components/input/select' );
const SliderInput = require( 'components/input/slider' );
const Slider = require( 'components/slider' );
const Spinner = require( 'components/spinner' );
const Switch = require( 'components/switch' );
const Tab = ReactBootstrap.Tab;
const Tabs = ReactBootstrap.Tabs;
const TeX = require( 'components/tex' );
const TextArea = require( 'components/text-area' );
const TextInput = require( 'components/input/text' );
const Text = require( 'components/text' );
const Timer = require( 'components/timer' );
const VictoryAnimation = require( 'victory' ).VictoryAnimation;
const VictoryArea = require( 'victory' ).VictoryArea;
const VictoryBar = require( 'victory' ).VictoryBar;
const VictoryChart = require( 'victory' ).VictoryChart;
const VictoryContainer = require( 'victory' ).VictoryContainer;
const VictoryGroup = require( 'victory' ).VictoryGroup;
const VictoryAxis = require( 'victory' ).VictoryAxis;
const VictoryErrorBar = require( 'victory' ).VictoryErrorBar;
const VictoryLabel = require( 'victory' ).VictoryLabel;
const VictoryLine = require( 'victory' ).VictoryLine;
const VictoryPie = require( 'victory' ).VictoryPie;
const VictoryStack = require( 'victory' ).VictoryStack;
const VictoryTheme = require( 'victory' ).VictoryTheme;
const VictoryTooltip = require( 'victory' ).VictoryTooltip;
const VictoryVoronoiTooltip = require( 'victory' ).VictoryVoronoiTooltip;
const VideoPlayer = require( 'components/video-player' );
const Well = ReactBootstrap.Well;


// Assign all stdlib modules to the GLOBAL.std namespace:
global.std = {};
assignStdlib( global.std );

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
