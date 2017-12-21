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

	componentWillMount() {
		this.width = window.innerWidth;
		this.height = window.innerHeight;
	}

	componentDidMount() {
		var el = document.getElementById( this.props.id );
		if ( el ) {
			this.correctedPos = this.getPos( el );
			this.setState({
				corrected: true
			});
		}
	}

	getPos( elem ) {
		const rect = elem.getBoundingClientRect();
		return {
			x: rect.left,
			y: rect.top
		};
	}

	renderFrame() {
		if ( this.state.corrected === false ) {
			return <div id={this.props.id}></div>;
		}
		var style = {
			position: 'absolute',
			left: '-' + this.correctedPos.x + 'px',
			top: '-' + this.correctedPos.y + 'px',
			width: this.width + 'px',
			height: this.height + 'px',
			display: 'inlineBlock'
		};
		return (
			<div id={this.props.id} style={style} >
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
			<div id={this.props.id}>
				{this.renderFrame()}
			</div>
		);
	}
}


// DEFAULT PROPERTIES //

IFrame.defaultProps = {
};


// PROPERTY TYPES //

IFrame.propTypes = {
	address: PropTypes.string.isRequired
};


// CONTEXT TYPES //

IFrame.contextTypes = {
};


// EXPORTS //

export default IFrame;
