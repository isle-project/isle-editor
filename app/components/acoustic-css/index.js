// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SpeechRecognition from 'components/speech-recognition';
import './styles.css';
import camelcase from 'camelcase';

// MAIN //

class AcousticCSS extends Component {
	constructor( props, context ) {
		super( props );

		this.state = {
			recognized: 'recognized text',
			text:  '',
			class_name: 'css_logo'
		};
	
		this.click.bind( this );
	}

	componentDidMount() {
		if ( this.props.autoplay ) this.record();
	}



	onResult = ( event ) => {
		
	}


	onInput ( value ) {
		
	}
	
	get_result ( value ) {
		alert( value );
	}

	click() {
		this.refs.recognition.trigger();
		if ( this.refs.recognition.state.isRecording === false ) {

		}
	}


	change( event ) {
		this.setState({
			text: event.target.value
		});

	}

	setID ( value ) {
		// this should be used to check that there is just one word 
		var list = value.split( " " );
		// functionality still missing

		this.props.targetID = value;
	}


	trigger( text ) {

		var rgb = function( value ) {
			console.log( "rgb wird aufgerufen" );
			value = value.replace( "rgba", "rgba(" );
			value = value.replace( "RGB", "rgb(" );
			value += ")";
			console.log( value );
			return value;
		};
	
		var shadow = function( value ) {
			console.log( "shadow wird aufgerufen" );
			var number = /number */g;
			value = value.replace( number, "" );	
			value = value.split( " " );
			var s = "";
			for ( var i = 0; i < value.length; i++ ) {
				var item = value[ i ];
				if ( item === "four" || item === "for") item = 4;	
				if ( item === "one" ) item = 1;	
				if ( i < 3 ) {
					item += "px ";
				}
				s += item;
			}
			return s;
		};
	
	
		var RE = /(?:set|change|modify|alter) ([\s\S]*) to ([\s\S]*)/i;
		var matches = text.match( RE );
		if ( matches && matches[ 1 ] && matches[ 2 ]) {
			var property = matches[ 1 ]
			var value = matches[ 2 ];
			
			console.log( matches );
			console.log( camelcase( property ) );
			
			if ( property === "in a text" ) 			property = "inner text";
			if ( property === "inner Html" ) 			property = "inner HTML";
	
			if ( property === "ID" ) {
				this.setID( value );
			}
	
			property = camelcase( property );
	
			
			if ( property === "colour" ) {
				property = "color";
			}
	
			if ( property === "color" || property === "background") { 
				var dark = /dark /;
				value = value.replace( dark, "dark" );
	
				var dark = /light /;
				value = value.replace( dark, "light" );
	
				if ( value.search( "RGB" ) !== -1 )  value = rgb( value );
				if ( value.search( "rgba" ) !== -1 ) value = rgb( value );
			}
			
			if ( property === "with" ) property = "width";
	
			if ( property === "textDecoration" ) {
				if ( value === "line through" ) value = "line-through";
			}
	
			if ( property === "textShadow" || property === "boxShadow" ) {
				value = shadow( value );
			}
	
			if ( property === "textAlign" ) {
				if ( value === "Centre" ) value = "center";
			}
	
			var repix = / pixels*/;
			value = value.replace( repix, "px" );
			console.log( value );
	
			var vw = / viewport*/;
			value = value.replace( vw, "vw" );
	

			var div = document.getElementById( this.props.targetID );
			if ( div ) div.style[ property ] = value;
	
			if ( value === "small caps" ) value = "small-caps";
	
		}
		else {
			var resp = "Sorry, I didn't get that.";
			var ssu = new SpeechSynthesisUtterance( resp );
			ssu.lang = "en-US";
			window.speechSynthesis.speak( ssu );
		}
	}


	render_speech () {
		if ( this.props.speech === false ) return null;
		return (
			<div>
				<SpeechRecognition
					ref = "recognition"
					name = { this.props.name }
					showText
					language = { this.props.language }
					onName = { this.get_result.bind( this ) }
				
				/>
			</div>
		);
	}

	render_logo() {
		if ( ! this.props.logo ) return null;
		return (
			<div onClick = {  this.click.bind( this ) } class = { this.state.class_name }>
				CSS
			</div>
		);
	}


	render() {
		return (
			<div class = { this.props.className } id = { this.props.id }>
				{ this.render_speech() }
				{ this.render_logo() }
			</div>
		);
	}
}


// DEFAULT PROPERTIES //

AcousticCSS.defaultProps = {
	id: 'AcousticCSS',
	className: 'AcousticCSS',
	language: 'en-US',
	logo: true,
	targetID: '',
	speech: false,
	name: 'CSS',
	onFinalText: function() {},
	onName: function() {},
	autoplay: false,
	read: false
};


// PROPERTY TYPES //

AcousticCSS.propTypes = {
	id: PropTypes.string,
	speech: PropTypes.bool,
	targetID: PropTypes.string,
	className: PropTypes.string,
	name: PropTypes.string,
	language: PropTypes.string,
	autoplay: PropTypes.bool
};


// CONTEXT TYPES //

AcousticCSS.contextTypes = {
};


// EXPORTS //

export default AcousticCSS;
