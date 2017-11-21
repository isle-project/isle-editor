// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';


// MAIN //

class IFrame extends Component {

	constructor( props, context ) {
		super( props );
		this.state = {
			corrected: false
		};
	}


	getPos( elem ) {
 		var rect=elem.getBoundingClientRect();
     	return {x:rect.left,y:rect.top};
	}


	componentDidMount() {
		var el = document.getElementById( this.props.identifier );

		if ( el ) {
			console.log( "I FRAME CONTAINER " );

			this.corrected_pos = this.getPos( el );
			console.log( this.corrected_pos );

			console.log( "KORREKTUR" );


			this.setState ({
				corrected: true
			});


		}
		else console.log( "konnte das Element nicht einlesen" );

	}

	componentWillMount() {
		this.width = window.innerWidth;
		this.height = window.innerHeight;
	}

	renderFrame() {
		if ( this.state.corrected === false ) {
			return <div id={this.props.identifier}></div>;
		}
		var style = {
			position: "absolute",
			left: "-" + this.corrected_pos.x + "px",
			top: "-" + this.corrected_pos.y + "px",
			width:  this.width + "px",
			height: this.height + "px",
			display: "inlineBlock"
		};
		return (
			<div id={this.props.identifier} style={style} >
				<iframe
					src={this.props.address}
					width={this.width}
					height={this.height}
				></iframe>
			</div>
		);
	}

	render() {
		return (
			<div id = { this.props.identifier }>
				{ this.renderFrame() }
			</div>
		);
	}
}


// DEFAULT PROPERTIES //

IFrame.defaultProps = {
	height: 600,
	identifier: "ExtendedIFrame",
	address: "http://burckhardt.ludicmedia.de/#/blog",
	fullscreen: true
};


// PROPERTY TYPES //

IFrame.propTypes = {
	height: PropTypes.number,
	adress: PropTypes.string,
	fullscreen: PropTypes.bool
};


// CONTEXT TYPES //

IFrame.contextTypes = {
};


// EXPORTS //

export default IFrame;
