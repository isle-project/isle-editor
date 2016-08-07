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
const render = require( 'react-dom' ).render;
const namespace = require( '@stdlib/namespace' );
const yaml = require( 'js-yaml' );

import { Component, PropTypes } from 'react';
import { transform } from 'react-tools';
import jsx from 'markdown-it-jsx';


// E-LEARNING MODULE COMPONENTS //
const Pane = require( 'general/pane' );
const Dashboard = require( 'general/dashboard' );
const CheckboxInput = require( 'general/checkbox-input' );
const NumberInput = require( 'general/number-input' );
const SliderInput = require( 'general/slider-input' );


const FeedbackButtons = require( './node_modules/learning/feedback' );
const FunctionPlot = require( './node_modules/learning/function-plot' );
const TeX = require( './node_modules/learning/tex' );
const Switch = require( './node_modules/learning/switch' );
const RShell = require( './node_modules/learning/rshell' );
const VideoPlayer = require( './node_modules/learning/video-player' );


// Markdown parser rendering markdown inside <md></md> tags...
const md = require( 'markdown-it' )({
	html: true,
	xhtmlOut: true,
	breaks: true,
	typographer: false
});
md.use( jsx );

// Assign all stdlib modules to the GLOBAL.std namespace:
global.std = {};
namespace( global.std );


export default class Preview extends Component {
	componentDidMount() {
		this.renderPreview();
	}
	componentDidUpdate() {
		this.renderPreview();
	}
	renderPreview() {
		let es5code;
		let { code } = this.props;
		const preamble = code.match( /---([\S\s]*)---/ )[ 1 ];

		try {
			const { store = {} } = yaml.load( preamble );
			global.store = store;

			code = code.replace( /---([\S\s]*)---/, '' );

			// Replace Markdown by HTML...
			code = md.render( code );

			es5code = `
				var Lesson = React.createClass({
					componentDidMount: function() {
						global.lesson = this;
						this.forceUpdate();
					},
					componentWillUnmount: function() {
						this.unmounted = true;
					},
					render: function() {
						return React.createElement(
							"div",
							{
								className: "Lesson",
								id: "LessonWindow",
								style: {
									marginLeft: '20px',
									marginRight: '20px'
								}
							},
							${transform( '<div>' + code + '</div>' )}
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
