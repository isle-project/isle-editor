// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import { withTranslation } from 'react-i18next';
import Card from 'react-bootstrap/Card';
import VoiceInput from '@isle-project/components/input/voice';
import SessionContext from '@isle-project/session/context.js';
import { addResources } from '@isle-project/locales';
import './wikipedia.css';


// VARIABLES //

addResources( 'Wikipedia' );
const debug = logger( 'isle:wikipedia' );


// MAIN //

/**
* The **Wikipedia** component scans the **Wikipedia** and returns an article if anything valid is found under the entered search term.
*
* @property {string} language - language identifier
* @property {Object} style - CSS inline styles
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
		let x = value.search( marker );
		if ( x !== -1 ){
			debug( 'Found a marker...' );
			x += ( marker.length +1 );
			const text = value.substring( x, value.length );
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
					className="wikipedia-voice-input"
					language={this.props.language}
					onChange={this.changeVoiceHandler}
					onSubmit={this.getResult}
					onFinalText={this.getResult}
					placeholder={this.props.t('enter-text-and-click-globe')}
				/>
			);
		}
	}

	renderLogo() {
		if ( !this.props.invisible ) {
			return (
				<button
					onClick={this.handleClick}
					className="wikipedia-logo"
				>
				</button>
			);
		}
	}

	renderResult() {
		if ( this.state.response === '' ) {
			return null;
		}
		return (
			<div className="wikipedia-result" >
				<iframe
					title={this.props.t('wikipedia-page')}
					src={this.state.response}
					width="100%"
					height={600}
				/>
			</div>
		);
	}

	render() {
		return (
			<Card className="wikipedia" style={this.props.style} >
				<Card.Header>
					<Card.Title as="h3">
						{this.props.t('browse-wikipedia')}
					</Card.Title>
				</Card.Header>
				<Card.Body>
					{this.renderSpeech()}
					{this.renderLogo()}
					<div className="wikipedia-separator"></div>
					{this.renderResult()}
				</Card.Body>
			</Card>
		);
	}
}


// PROPERTIES //

Wikipedia.defaultProps = {
	language: 'en-US',
	style: {}
};

Wikipedia.propTypes = {
	language: PropTypes.string,
	style: PropTypes.object
};

Wikipedia.contextType = SessionContext;


// EXPORTS //

export default withTranslation( 'Wikipedia' )( Wikipedia );
