// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SpeechRecognition from 'components/speech-recognition';
import Wikipedia from 'components/wikipedia';
import AcousticCSS from 'components/acoustic-css';
import './styles.css';


// MAIN //

class AcousticAssistant extends Component {
	constructor( props, context ) {
		super( props );

		this.state = {
			text:  ''
		};
	}

	componentDidMount() {
		if ( this.props.autoplay ) this.refs.recognition.trigger();
	}


	onResult = ( event ) => {	
	}

	
	// this function gets the result of the speech recognition
	get_result ( text ) {
		if ( this.props.wikipedia !== '' ) {
			var x = text.search( this.props.wikipedia );
			if ( x !== -1 )  {
				console.log( "Wikipedia triggered" );
				this.refs.wikipedia.trigger( text );
			}
		}

		if ( this.props.css !== '' ) {
			var x = text.search( this.props.css );
			if ( x !== -1 )  {
				console.log( "css triggered" );
				this.refs.css.trigger( text );
			}
		}
	}

	render_wikipedia () {
		if ( this.props.wikipedia === '' ) return null;

		return (
			<Wikipedia
				ref = "wikipedia"
				language = { this.props.language }
			></Wikipedia>
		);
	}

	render_css () {
		if ( this.props.css === '' ) return null;
		return (
			<AcousticCSS
				ref = "css"
				showSearch
				logo = { false }
				language = { this.props.language }
			></AcousticCSS>
		);
	}

	render_speech () {
		return (
			<div>
				<SpeechRecognition
					ref = "recognition"
					name = { name }
					showText
					language = { this.props.language }
					onFinalText = { this.get_result.bind( this ) }
				/>
			</div>
		);
	}

	render() {
		return (
			<div class = { this.props.className } id = { this.props.id }>
				{ this.render_speech() }
				{ this.render_wikipedia() }
				{ this.render_css() }
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
};


// PROPERTY TYPES //

AcousticAssistant.propTypes = {
	id: PropTypes.string,
	className: PropTypes.string,
	language: PropTypes.string,
	autoplay: PropTypes.bool,
	wikipedia: PropTypes.string,
	css: PropTypes.string,
	name: PropTypes.string
};


// CONTEXT TYPES //

AcousticAssistant.contextTypes = {
};


// EXPORTS //

export default AcousticAssistant;
