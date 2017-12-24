// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './wikipedia.css';
import SpeechRecognition from 'components/speech-recognition';


// MAIN //

class Wikipedia extends Component {
	constructor( props, context ) {
		super( props );

		this.state = {
			text: '',
			response: ''
		};

		this.keyDown.bind( this );
	}

	componentDidMount() {
		if ( this.props.autoplay ) this.click();
	}


	onResult = ( event ) => {

	}

	renderText() {
		if ( this.props.showSearch ) {
			return (
				<div className="wikipedia_search">
					Hier kommt der Suchbegriff
				</div>
			);
		}
	}

	// this is externally triggered
	trigger( value ) {
		this.getResult( value );
	}

	getResult( value ) {
		console.log( value );
		var marker = 'about';

		switch ( this.props.language ) {
		case 'en-US':
			marker = 'about';
			break;
		case 'de-DE':
			marker = 'über';
			break;
		case 'fr-FR':
			marker = 'sur';
			break;
		default:
			marker= 'about';
			break;
		}

		var x = value.search( marker );
		if ( x !== -1 ){
			console.log( 'gefunden' );
			x += ( marker.length +1 );
			var text = value.substring( x, value.length );
			this.wikipediaIFrame( text );
		}
		else console.log( 'marker not found' );
	}


	wikipediaIFrame( text ) {
		this.setState({
			response: this.setIFrame( text )
		});
	}

	setIFrame( text ) {
		text = text.replace( ' ', '_' );
		var lang = 'en';

		switch ( this.props.language ) {
		case 'en-US':
			lang = 'en';
			break;
		case 'de-DE':
			lang = 'de';
			break;
		case 'fr-FR':
			lang = 'fr';
			break;
		default:
			lang = 'en';
			break;
		}

		var s = 'https://' + lang + '.wikipedia.org/wiki/' + text;
		return s;
	}


	click = () => {
		this.recognition.trigger();
	}

	keyDown( event ) {
		switch ( event.keyCode ) {
		case 13:
			this.wikipediaIFrame( this.state.text );
			break;
		default:
			break;
		}
	}

	change( event ) {
		this.setState({
			text: event.target.value
		});
	}

	renderSpeech() {
		var name = 'Wikipedia';
		if ( this.props.language === 'fr-FR') {
			name = 'Wikipédia';
		}

		if ( this.props.speech ) {
			return (
				<div className="mike">
					<SpeechRecognition
						ref={( div ) => { this.recognition = div; }}
						name={name}
						showText
						language={this.props.language}
						onName={this.getResult.bind(this)}
					/>
				</div>
			);
		}
	}

	renderSearch() {
		if ( this.props.showSearch ) {
			return (
				<input
					onKeyDown={this.keyDown.bind( this )}
					onChange={this.change.bind( this )}
					type="text" className="wikipedia_search" />
			);
		}
	}

	renderLogo() {
		if ( this.props.speech ) {
			return (
				<div
					onClick={this.click}
					className="wikipedia_logo">
				</div>
			);
		}
	}


	renderResult() {
		if ( this.state.response === '' ) return null;

		return (
			<div className="wikipedia_result">
				<iframe
					src={this.state.response}
					width="100%"
					height={600} />
			</div>
		);
	}


	render() {
		return (
			<div className={this.props.className} id={this.props.id}>
				{ this.renderSearch() }
				{ this.renderLogo() }
				{ this.renderSpeech() }
				<div className="seperator"></div>
				{ this.renderResult() }
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
	autoplay: false
};


// PROPERTY TYPES //

Wikipedia.propTypes = {
	autoplay: PropTypes.bool,
	className: PropTypes.string,
	id: PropTypes.string,
	language: PropTypes.string,
	showSearch: PropTypes.bool,
	speech: PropTypes.bool
};


// CONTEXT TYPES //

Wikipedia.contextTypes = {
};


// EXPORTS //

export default Wikipedia;
