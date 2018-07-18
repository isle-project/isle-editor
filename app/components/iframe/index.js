// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';


// MAIN //

class IFrame extends Component {
	constructor( props ) {
		super( props );
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
		let style;
		if ( !this.state.corrected ) {
			style = {};
		} else {
			style = {
				position: 'absolute',
				left: '-' + this.correctedPos.x + 'px',
				top: '-' + this.correctedPos.y + 'px',
				width: this.width + 'px',
				height: this.height + 'px',
				display: 'inlineBlock'
			};
		}
		return (
			<div id={this.props.id} ref={this.saveRef} style={style} >
				{ this.state.corrected ? <iframe
					src={this.props.src}
					width={this.width}
					height={this.height}
				/> : null }
			</div>
		);
	}
}


// TYPES //

IFrame.propDescriptions = {
	src: 'source URL'
};

IFrame.propTypes = {
	src: PropTypes.string.isRequired
};

IFrame.defaultProps = {};


// EXPORTS //

export default IFrame;
