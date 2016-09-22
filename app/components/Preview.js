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
const yaml = require( 'js-yaml' );

import { Component, PropTypes } from 'react';
import { transform } from 'react-tools';
import request from 'request';
import jsx from 'markdown-it-jsx';

import Session from './../api/session';


// E-LEARNING MODULE COMPONENTS //

// Babel does not support `eval`, so we have to require modules using CommonJS...
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
const Dashboard = require( 'general/dashboard' );
const CheckboxInput = require( 'general/checkbox-input' );
const NumberInput = require( 'general/number-input' );
const SelectInput = require( 'general/select-input' );
const SliderInput = require( 'general/slider-input' );
const TextInput = require( 'general/text-input' );
const LessonSubmit = require( 'general/lesson-submit' );
const Timer = require( 'general/timer' );

const DensityPlot = require( 'learning/d3/density-plot' );
const FeedbackButtons = require( 'learning/feedback' );
const FreeTextQuestion = require( 'learning/free-text-question' );
const FunctionPlot = require( 'learning/function-plot' );
const MultipleChoiceQuestion = require( 'learning/multiple-choice-question' );
const RPlot = require( 'learning/r/plot' );
const RHelp = require( 'learning/rhelp' );
const RShell = require( 'learning/rshell' );
const RTable = require( 'learning/r/table' );
const Switch = require( 'learning/switch' );
const TeX = require( 'learning/tex' );
const VideoPlayer = require( 'learning/video-player' );


// Markdown parser rendering markdown inside <md></md> tags...
const md = require( 'markdown-it' )({
	html: true,
	xhtmlOut: true,
	breaks: false,
	typographer: false
});
md.use( jsx );

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
				global.store = global.ISLE.store;

				if ( global.ISLE.server ) {
					global.ISLE.session = new Session( global.ISLE );
				}
				if ( global.ISLE.mails ) {
					global.ISLE.sendMail = function sendMail( name, to ) {
						var mailOptions = global.ISLE.mails[ name ];
						if ( !mailOptions.hasOwnProperty( 'from' ) ) {
							mailOptions.from = ISLE.email || 'robinson@isle.cmu.edu';
						}
						if ( mailOptions.hasOwnProperty( 'text' ) ) {
							mailOptions.text = mustache.render( mailOptions.text, global );
						}
						mailOptions.to = to;
						request.post( ISLE.server + '/mail', {
							form: mailOptions
						}, ( error, response, body ) => {
							console.log( error );
						});
					};
				}

				code = code.replace( /---([\S\s]*)---/, '' );

				// Replace Markdown by HTML...
				code = md.render( code );

				es5code = `
					var Lesson = React.createClass({
						componentDidMount: function() {
							global.lesson = this;
							this._notificationSystem = this.refs.notificationSystem;
							this.forceUpdate();
						},
						addNotification: function( config ) {
							this._notificationSystem.addNotification( config );
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
					});
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
			<div className="Preview" id="Preview"></div>
		);
	}
}


// PROPERTY TYPES //

Preview.propTypes = {
	code: PropTypes.string
};


// EXPORTS //

module.exports = Preview;
