// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import VoiceInput from 'components/input/voice';
import logger from 'debug';
import './wikipedia.css';


// VARIABLES //

var debug = logger( 'isle:wikipedia' );


// MAIN //

/**
* The **Wikipedia** component scans the **Wikipedia** and returns an article - if anything valid is found under the entered search tem
*
* @property {boolean} invisible - controls whether to display a text input field to search for Wikipedia articles
* @property {string} language - language identifier
*/
class Wikipedia extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			text: '',
			response: ''
		};
	}

	// This is externally triggered
	trigger( value ) {
		this.getResult( value );
	}

	getResult = ( value ) => {
		let marker = 'about';
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
			debug( 'Found a marker...' );
			x += ( marker.length +1 );
			var text = value.substring( x, value.length );
			this.wikipediaIFrame( text );
		}
		else {
			debug( 'Marker not found, use entire text...' );
			this.wikipediaIFrame( value );
		}
	}

	wikipediaIFrame( text ) {
		this.setState({
			response: this.setIFrame( text )
		});
	}

	setIFrame( text ) {
		debug( 'Sets the iFrame: ' + text );
		text = text.replace( ' ', '_' );
		let lang = 'en';
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
		return 'https://' + lang + '.wikipedia.org/wiki/' + text;
	}

	handleClick = () => {
		this.getResult( this.state.text );
	}

	changeVoiceHandler = ( text ) => {
		this.setState({
			text
		});
	}

	renderSpeech() {
		if ( !this.props.invisible ) {
			return (
				<VoiceInput
					style={{ float: 'left' }}
					language={this.props.language}
					onChange={this.changeVoiceHandler}
					onSubmit={this.getResult}
					onFinalText={this.getResult}
				/>
			);
		}
	}

	renderLogo() {
		if ( !this.props.invisible ) {
			return (
				<div
					onClick={this.handleClick}
					className="wikipedia-logo">
				</div>
			);
		}
	}

	renderResult() {
		if ( this.state.response === '' ) {
			return null;
		}
		return (
			<div className="wikipedia-result">
				<iframe
					src={this.state.response}
					width="100%"
					height={600}
				/>
			</div>
		);
	}

	render() {
		return (
			<div className="wikipedia" >
				{this.renderSpeech()}
				{this.renderLogo()}
				<div className="wikipedia-separator"></div>
				{this.renderResult()}
			</div>
		);
	}
}


// PROPERTIES //

Wikipedia.defaultProps = {
	invisible: false,
	language: 'en-US'
};

Wikipedia.propTypes = {
	invisible: PropTypes.bool,
	language: PropTypes.string
};

Wikipedia.contextTypes = {
	session: PropTypes.object
};


// EXPORTS //

export default Wikipedia;
