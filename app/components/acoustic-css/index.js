// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import VoiceInput from 'components/input/voice';
import camelcase from 'camelcase';
import './styles.css';


// MAIN //

class AcousticCSS extends Component {
	constructor( props, context ) {
		super( props );

		this.state = {
			class_name: 'css_logo'
		};
		this.click.bind( this );
	}

	componentDidMount() {
		if ( this.props.autoplay ) this.record();
	}

	onResult = ( event ) => {
	}


	onInput( value ) {
	}

	getResult( value ) {}

	click() {
		this.recognition.trigger();
		if ( this.recognition.state.isRecording === false ){
			// something should happen here
		}
	}

	setID( value ) {
		// This should be used to check that there is just one word
		// var list = value.split( ' ' );
		// functionality still missing

		this.props.targetID = value;
	}


	trigger( text ){
		function rgb( value ) {
			console.log( 'rgb wird aufgerufen');
			value = value.replace( 'rgba', 'rgba(' );
			value = value.replace( 'RGB', 'rgb(' );
			value += ')';
			console.log( value );
			return value;
		}

		function shadow( value ) {
			console.log( 'shadow wird aufgerufen' );
			var number = /number */g;
			value = value.replace( number, '' );
			value = value.split( ' ' );
			var s = '';
			for ( var i = 0; i < value.length; i++ ) {
				var item = value[ i ];
				if ( item === 'four' || item === 'for') item = 4;
				if ( item === 'one' ) item = 1;
				if ( i < 3 ) {
					item += 'px ';
				}
				s += item;
			}
			return s;
		}

		var RE = /(?:set|change|modify|alter) ([\s\S]*) to ([\s\S]*)/i;
		var matches = text.match( RE );
		if ( matches && matches[ 1 ] && matches[ 2 ]) {
			var property = matches[ 1 ];
			var value = matches[ 2 ];

			if ( property === 'in a text' ) 			property = 'inner text';
			if ( property === 'inner Html' ) 			property = 'inner HTML';

			if ( property === 'ID' ){
				this.setID( value );
			}

			property = camelcase( property );


			if ( property === 'colour' ) {
				property = 'color';
			}

			if ( property === 'color' || property === 'background') {
				var dark = /dark /;
				value = value.replace( dark, 'dark' );

				dark = /light /;
				value = value.replace( dark, 'light' );

				if ( value.search( 'RGB' ) !== -1 )		value = rgb( value );
				if ( value.search( 'rgba' ) !== -1 )	value = rgb( value );
			}

			if ( property === 'with' ) property = 'width';

			if ( property === 'textDecoration' ) {
				if ( value === 'line through' ) value = 'line-through';
			}

			if ( property === 'textShadow' || property === 'boxShadow' ) {
				value = shadow( value );
			}

			if ( property === 'textAlign' ) {
				if ( value === 'Centre' ) value = 'center';
			}

			var repix = / pixels*/;
			value = value.replace( repix, 'px' );

			var vw = / viewport*/;
			value = value.replace( vw, 'vw' );

			var div = document.getElementById( this.props.targetID );
			if ( div ) div.style[ property ] = value;

			if ( value === 'small caps' ) value = 'small-caps';
		}
		else {
			var resp = 'Sorry, I didn\'t get that.';
			var ssu = new SpeechSynthesisUtterance( resp );
			ssu.lang = 'en-US';
			window.speechSynthesis.speak( ssu );
		}
	}


	renderSpeech() {
		if ( this.props.speech === false ) return null;
		return (
			<div>
				<VoiceInput
					ref={( div ) => { this.recognition = div; }}
					name={this.props.name}
					showText
					language={this.props.language}
					onName={this.getResult.bind(this)}
				/>
			</div>
		);
	}

	renderLogo() {
		if ( !this.props.logo ) return null;
		return (
			<div onClick={this.click.bind(this)} className={this.state.class_name}>
				CSS
			</div>
		);
	}


	render() {
		return (
			<div className={this.props.className} id={this.props.id}>
				{ this.renderSpeech() }
				{ this.renderLogo() }
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
	autoplay: false
};


// PROPERTY TYPES //

AcousticCSS.propTypes = {
	autoplay: PropTypes.bool,
	className: PropTypes.string,
	id: PropTypes.string,
	language: PropTypes.string,
	logo: PropTypes.bool,
	name: PropTypes.string,
	speech: PropTypes.bool,
	targetID: PropTypes.string
};


// CONTEXT TYPES //

AcousticCSS.contextTypes = {
};


// EXPORTS //

export default AcousticCSS;
