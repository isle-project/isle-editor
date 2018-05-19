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
		this.width = window.innerWidth;
		this.height = window.innerHeight;
	}

	componentDidMount() {
		this.correctedPos = this.getPos( this.wrapper );
		this.setState({
			corrected: true
		});
	}

	getPos( elem ) {
		const rect = elem.getBoundingClientRect();
		return {
			x: rect.left,
			y: rect.top
		};
	}

	saveRef = ( div ) => {
		this.wrapper = div;
	}

	render() {
		if ( this.state.corrected === false ) {
			return <div id={this.props.id} ref={this.saveRef}></div>;
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
			<div id={this.props.id} ref={this.saveRef} style={style} >
				<iframe
					src={this.props.src}
					width={this.width}
					height={this.height}
				></iframe>
			</div>
		);
	}
}


// DEFAULT PROPERTIES //

IFrame.defaultProps = {
};


// PROPERTY TYPES //

IFrame.propTypes = {
	src: PropTypes.string.isRequired
};


// CONTEXT TYPES //

IFrame.contextTypes = {
};


// EXPORTS //

export default IFrame;
