// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import './wikipedia.css';
import SpeechRecognition from 'components/speech-recognition';
const debug = require( 'debug' )( 'isle-editor' );


// MAIN //

class Wikipedia extends Component {
	constructor( props, context ) {
		super( props );

		this.state = {
			recognized: 'recognized text',
			text:  '',
			response: ''
		};
	
		this.keyDown.bind( this );
		this.click.bind( this );
	}

	componentDidMount() {
		if ( this.props.autoplay ) this.record();
	}



	onResult = ( event ) => {
		
	}

	


	renderText () {
		if ( this.props.showSearch ) {
			return (
				<div class = "wikipedia_search">
					Hier kommt der Suchbegriff
				</div>
			);
		}
	}

	get_result ( value ) {
		console.log( value );
		var marker = "about";

		switch ( this.props.language ) {
		case "en-US": 
			marker = "about";	
			break;
		case "de-DE": 
			marker = "über";	
			break;
		case "fr-FR": 
			marker = "sur";	
			break;
		}

		var x = value.search( marker );
		if ( x !== -1 ){
			console.log( "gefunden" );
			x += ( marker.length +1 );
			var text = value.substring( x, value.length );
			this.wikipedia_iframe( text );
		}
	}



	wikipedia_iframe ( text ) {
		this.setState({
			response: this.set_iframe( text )
		});
	}

	set_iframe( text ) {
		var text = text.replace( " ", "_" );
		
		var lang = "en";
		
		switch ( this.props.language ) {
		case 'en-US':
			lang = "en";
			break;
		case 'de-DE':
			lang = "de";
			break;
		case 'fr-FR':
			lang = "fr";
			break;
		}


		var s = 'https://' + lang + '.wikipedia.org/wiki/' + text;
		// var t = '<iframe style = "iframe_style" src = "' + s + '" width = "100%" height=600 />';
		return s;
	}


	click() {
		this.refs.recognition.trigger();
	}

	keyDown( event ) {
		switch ( event.keyCode ) {
		case 13:
			this.wikipedia_iframe( this.state.text );
			break;
		}
	} 

	change( event ) {
		this.setState({
			text: event.target.value
		});

	}

	render_speech () {
		var name = "Wikipedia";
		if ( this.props.language === "fr-FR")  {
			name = "Wikipédia";
		}

		if ( this.props.speech ) {
			return (
				<div class = "mike">
					<SpeechRecognition
						ref = "recognition"
						name = { name }
						showText
						language = { this.props.language }
						onName = { this.get_result.bind( this ) }
					
					/>
				</div>
			);
		}
	}

	render_search() {
		if ( this.props.showSearch ) {
			return (
				<input 
					onKeyDown = { this.keyDown.bind( this )}
					onChange = { this.change.bind( this ) }
					type = "text" class = "wikipedia_search">
				</input>
			);
		}
	}

	render_logo () {
		if ( this.props.speech ) {
			return (
				<div
					onClick = { this.click.bind( this ) } 
					class = "wikipedia_logo">
				</div>
			);
		}
	}


	render_result () {
		if ( this.state.response === '' ) return null;

		return (
			<div class = "wikipedia_result">
				<iframe 
					src = { this.state.response } 
					width = { "100%" } 
					height = { 600 }  />
			</div>
		);
	}


	render() {
		return (
			<div class = { this.props.className } id = { this.props.id }>
				{ this.render_search() }
				{ this.render_logo() }
				{ this.render_speech() }
				<div class = "seperator"></div>
				{ this.render_result() }
			</div>
		);
	}
}


// DEFAULT PROPERTIES //

Wikipedia.defaultProps = {
	id: 'Wikipedia',
	className: 'wikipedia',
	showSearch: false,
	speech: false,
	language: 'en-US',
	onFinalText: function() {},
	onName: function() {},
	autoplay: false,
	read: false
};


// PROPERTY TYPES //

Wikipedia.propTypes = {
	id: PropTypes.string,
	showSearch: PropTypes.bool,
	speech: PropTypes.bool,
	className: PropTypes.string,
	name: PropTypes.string,
	nonames: PropTypes.array,
	language: PropTypes.string,
	onSegment: PropTypes.func,
	onFinalText: PropTypes.func,
	onName: PropTypes.func,
	autoplay: PropTypes.bool
};


// CONTEXT TYPES //

Wikipedia.contextTypes = {
};


// EXPORTS //

export default Wikipedia;
