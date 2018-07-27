// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import VoiceInput from 'components/input/voice';
import Wikipedia from 'components/wikipedia';
import AcousticCSS from 'components/acoustic-css';
import News from 'components/news';
import './styles.css';


// VARIABLES //

var debug = logger( 'isle-editor:acoustic-assistant' );


// MAIN //

class AcousticAssistant extends Component {
	constructor( props, context ) {
		super( props );

		this.state = {};
	}

	componentDidMount() {
		if ( this.props.autoplay ) this.recognition.trigger();
	}


	onResult = ( event ) =>{
	}

	// This function gets the result of the speech recognition
	getResult( text ) {
		if ( this.props.wikipedia !== '' ) {
			let x = text.search( this.props.wikipedia );
			if ( x !== -1 ) {
				debug( 'Wikipedia triggered...' );
				this.wikipediaref.trigger( text );
			}
		}

		if ( this.props.css !== '' ) {
			let x = text.search( this.props.css );
			if ( x !== -1 ) {
				debug( 'CSS triggered...' );
				this.cssref.trigger( text );
			}
		}

		if ( this.props.news !== '' ) {
			var x = text.search( this.props.news );
			if ( x !== -1 ) {
				debug( 'News triggered...' );
				this.newsref.trigger( text );
			}
		}
	}

	renderNews() {
		if ( this.props.news === '' ) return null;
		return (
			<News
				ref={( div ) => { this.newsref = div; }}
				language={this.props.language}
			/>
		);
	}

	renderWikipedia() {
		if ( this.props.wikipedia === '' ) return null;

		return (
			<Wikipedia
				ref={( div ) => { this.wikipediaref = div; }}
				language={this.props.language}
			/>
		);
	}

	renderCSS() {
		if ( this.props.css === '' ) return null;
		return (
			<AcousticCSS
				ref={( div ) => { this.cssref = div; }}
				showSearch
				logo={false}
				language={this.props.language}
			/>
		);
	}

	renderSpeech() {
		return (
			<div>
				<VoiceInput
					ref={( div ) => { this.recognition = div; }}
					name={name}
					showText
					language={this.props.language}
					onFinalText={this.getResult.bind( this )}
				/>
			</div>
		);
	}

	render() {
		return (
			<div className={this.props.className} id={this.props.id}>
				{ this.renderSpeech() }
				{ this.renderWikipedia() }
				{ this.renderCSS() }
				{ this.renderNews() }
			</div>
		);
	}
}


// DEFAULT PROPERTIES //

AcousticAssistant.defaultProps = {
	id: 'AcousticAssistant',
	className: 'AcousticAssistant',
	language: 'en-US',
	autoplay: false,
	wikipedia: '',
	css: '',
	news: '',
	name: 'Olivia'
};


// PROPERTY TYPES //

AcousticAssistant.propTypes = {
	autoplay: PropTypes.bool,
	className: PropTypes.string,
	css: PropTypes.string,
	id: PropTypes.string,
	language: PropTypes.string,
	name: PropTypes.string,   // eslint-disable-line
	news: PropTypes.string,
	wikipedia: PropTypes.string
};


// CONTEXT TYPES //

AcousticAssistant.contextTypes = {
};


// EXPORTS //

export default AcousticAssistant;
