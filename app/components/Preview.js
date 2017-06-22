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
const mustache = require( 'mustache' );
const render = require( 'react-dom' ).render;
const createReactClass = require( 'create-react-class' );
const NotificationSystem = require( 'react-notification-system' );
const contains = require( '@stdlib/assert/contains' );
const isAbsolutePath = require( '@stdlib/assert/is-absolute-path' );
const isObject = require( '@stdlib/assert/is-object' );
const request = require( 'request' );
const yaml = require( 'js-yaml' );
const css = require( 'css' );
const Session = require ( 'api/session' );

import { Component } from 'react';
import { transform } from 'react-tools';
import markdownToHTML from 'utils/markdown-to-html';


// E-LEARNING MODULE COMPONENTS //

// Babel does not support `eval`, so we have to require modules using CommonJS...
const Button = ReactBootstrap.Button;
const CheckboxInput = require( 'components/input/checkbox' );
const ColorPicker = require( 'components/color-picker' );
const Column = ReactBootstrap.Col;
const Dashboard = require( 'components/dashboard' );
const DataTable = require( 'components/data-table' );
const DensityPlot = require( 'components/d3/density-plot' );
const DraggableList = require( 'components/draggable-list' );
const Editor = require( 'components/editor' );
const FeedbackButtons = require( 'components/feedback' );
const FreeTextQuestion = require( 'components/free-text-question' );
const Gate = require( 'components/gate' );
const Grid = require( 'components/grid' );
const LessonSubmit = require( 'components/lesson-submit' );
const Metrics = require( 'components/metrics/db' );
const Modal = ReactBootstrap.Modal;
const MultipleChoiceQuestion = require( 'components/multiple-choice-question' );
const MultipleChoiceSurvey = require( 'components/multiple-choice-survey' );
const MatchListQuestion = require( 'components/match-list-question' );
const Nav = ReactBootstrap.Nav;
const Navbar = ReactBootstrap.Navbar;
const NavItem = ReactBootstrap.NavItem;
const NumberInput = require( 'components/input/number' );
const NumberSurvey = require( 'components/number-survey' );
const Panel = ReactBootstrap.Panel;
const Provider = require( 'components/provider' );
const RealtimeMetrics = require( 'components/metrics/realtime' );
const Recorder = require( 'components/recorder' );
const RPlot = require( 'components/r/plot' );
const RHelp = require( 'components/r/help' );
const RShell = require( 'components/r/shell' );
const RTable = require( 'components/r/table' );
const ROutput = require( 'components/r/output' );
const Row = ReactBootstrap.Row;
const SelectInput = require( 'components/input/select' );
const SelectQuestion = require( 'components/select-question' );
const SliderInput = require( 'components/input/slider' );
const Slider = require( 'components/slider' );
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
const VictoryScatter = require( 'victory' ).VictoryScatter;
const VictoryStack = require( 'victory' ).VictoryStack;
const VictoryTheme = require( 'victory' ).VictoryTheme;
const VictoryTooltip = require( 'victory' ).VictoryTooltip;
const VictoryVoronoiTooltip = require( 'victory' ).VictoryVoronoiTooltip;
const VictoryZoomContainer = require( 'victory' ).VictoryZoomContainer;
const VideoPlayer = require( 'components/video-player' );

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


// LEARNING MODULES //

const DataExplorer = require( 'components/data-explorer' );
const CrossValidation = require( 'components/learn/cross-validation' );


// VARIABLES //

var cssHash = {};
var lastCSS = null;					


// FUNCTIONS //

const injectStyle = ( style ) => {

	let previous = document.getElementById( 'mystyles' );
	if ( previous ) {
		previous.parentNode.removeChild( previous );
	}

	let node = document.createElement( 'style' );
	node.setAttribute( 'id', 'mystyles' );

	let cssObj = css.parse( style );
	let rules = cssObj.stylesheet.rules;
	rules = rules.map( rule => {
		rule.selectors = rule.selectors.map( s => '#Lesson ' + s );
		return rule;
	});

	node.innerHTML = css.stringify( cssObj );
	document.head.appendChild( node );
};

const loadRequires = ( libs, filePath ) => {
	let dirname = path.dirname( filePath );
	if ( isObject( libs ) ) {
		for ( let key in libs ) {
			if ( libs.hasOwnProperty( key ) ) {
				let lib = libs[ key ];
				if ( isAbsolutePath( lib ) || /\.\//.test( lib ) ) {
					lib = path.join( dirname, libs[ key ]);
				} else if ( /@stdlib/.test( lib ) ) {
					lib = libs[ key ].replace( '@stdlib', '@stdlib/stdlib/lib/node_modules/@stdlib' );
				}
				if ( /\.svg$/.test( lib ) ) {
					let content = fs.readFileSync( lib ).toString();
					eval( `global[ '${key}' ] = \`${content};\`` );
				} else {
					eval( `global[ '${key}' ] = require( '${lib}' );` );
				}
			}
		}
	}
};


// MAIN //

export default class Preview extends Component {
	constructor( props ) {
		super( props );

		let { code, preamble } = props;
		global.ISLE = preamble;
		global.session = new Session( global.ISLE );

		this.state = {
			preamble,
			requires: preamble.require || []
		};

		this.shouldRenderPreview = true;
		this.renderPreview = () => {
			let es5code;
			let { code } = this.props;
			let session = global.session;
			try {
				if ( this.state.requires !== global.ISLE.require ) {
					this.state.requires.forEach( lib => delete global[ lib ]);
					loadRequires( global.ISLE.require, this.props.filePath || '' );
				}

				// Remove preamble and comments:
				code = code.replace( /---([\S\s]*)---/, '' );
				code = code.replace( /<!--([\S\s]*)-->/, '' );

				// Apply styles:
				let css = '';
				if ( global.ISLE.css ) {
					if ( cssHash[ global.ISLE.css ]) {
						css += cssHash[ global.ISLE.css ];
					} else {
						let fpath = global.ISLE.css;
						if ( !isAbsolutePath( fpath ) ) {
							fpath = path.join( path.dirname( this.props.filePath ), fpath );
						}
						css += fs.readFileSync( fpath ).toString();
					}
				}
				if ( global.ISLE.style ) {
					let { style } = global.ISLE;
					css += '\n';
					css += style;
				}
				if ( global.ISLE.style || global.ISLE.css ) {
					if ( css !== lastCSS ) {
						injectStyle( css );
					}
					lastCSS = css;
				}

				// Replace Markdown by HTML...
				code = markdownToHTML( code );

				if ( global.ISLE.type === 'presentation' ) {
					let progress = 'number';

					if ( global.ISLE.presentation ) {
						if ( global.ISLE.presentation.progress ) {
							progress = global.ISLE.presentation.progress;
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
				es5code = `
					var lessonConfig = {
						componentDidMount: function() {
							global.lesson = this;
						},
						getInitialState: function() {
							return global.ISLE.state;
						},
						sendMail: function( name, to ) {
							var mailOptions = global.ISLE.mails[ name ] || {};
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
								React.createElement( StatusBar ),
								${transform( '<div>' + code + '</div>' )},
								React.createElement(
									NotificationSystem,
									{ ref: "notificationSystem", allowHTML: true }
								)
							);
						}
					};
					var Lesson = createReactClass( lessonConfig );
					render(
						React.createElement( Provider, { session: session },
							${transform( '<Lesson />' )}
						),
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

	componentWillUpdate( nextProps ) {
		if ( nextProps.preamble.server !== this.props.preamble.server ) {
			global.ISLE = nextProps.preamble;
			global.session = new Session( global.ISLE );
		}
		if ( nextProps.preamble.state !== this.props.preamble.state ) {
			global.ISLE = nextProps.preamble;
		}
	}

	componentDidMount() {
		this.renderPreview();
	}

	componentDidUpdate() {
		this.renderPreview();
	}

	render() {
		return (
			<div ref="preview" className="Preview" id="Preview">
			</div>
		);
	}
}


// PROPERTY TYPES //

Preview.propTypes = {
	code: PropTypes.string,
	filePath: PropTypes.string
};


// EXPORTS //

module.exports = Preview;
