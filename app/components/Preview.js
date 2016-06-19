// MODULES //

const React = require( 'react' );
const render = require( 'react-dom' ).render;
const yaml = require( 'js-yaml' );
const watch = require( 'watchjs' ).watch;


import { Component, PropTypes } from 'react';
import { transform } from 'react-tools';


// E-LEARNING MODULE COMPONENTS //

const TeX = require( './node_modules/learning/tex' );
const Switch = require( './node_modules/learning/switch' );
const RShell = require( './node_modules/learning/rshell' );


const md = require( 'markdown-it' )({
	html: true,
	xhtmlOut: true,
	breaks: true,
	typographer: false
});


export default class Preview extends Component {

	constructor( props ) {
		super( props );
	}

	renderPreview() {
		let es5code;
		let { code } = this.props;
		let preamble = code.match( /---([\S\s]*)---/ )[ 1 ];

		try {
			let { store={} } = yaml.load( preamble );
			global.store = store;

			code = code.replace( /---([\S\s]*)---/, '' );

			code = code.replace( /<md>([\S\s]*)<\/md>/g, ( match, p1 ) => {
				return md.render( p1 );
			});
			es5code = `
				var Lesson = React.createClass({
					componentDidMount: function() {
						var self = this;
						watch( global.store, function onChange() {
							self.forceUpdate();
						});
					},
					render: function() {
						return React.createElement(
							"div",
							{ className: "Lesson", markdown: 1 },
							${ transform( '<div>' + code + '</div>' ) }
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
			code = `<div>{ err.toString() }</div>`;
			es5code = `
				render(
					${transform( code )},
					document.getElementById( 'Preview' )
				)
			`;
			eval( es5code );
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
			<div className="Preview" id="Preview"></div>
		);
	}
}


// EXPORTS //

module.exports = Preview;
