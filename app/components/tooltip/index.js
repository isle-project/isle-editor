// MODULES //

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './tooltip.css';


// MAIN //

class Tooltip extends React.Component {
	/*
	* Create a Tooltip.
	*/
	constructor( props ) {
		super( props );
	}

	/*
	* Invoked once on client after the initial rendering. Handles fade-in animation.
	*/
	componentDidMount() {
		const elem = ReactDOM.findDOMNode( this );
		elem.style.opacity = 0;
		window.requestAnimationFrame( () => {
			// Set a transition on the opacity...
			elem.style.transition = 'opacity 250ms';
			elem.style.opacity = 1;
		});
	}

	/*
	* React component render method.
	*/
	render() {
		return (
			<div
				className="tooltip"
				style={{ display: this.props.visible ? 'inline' : 'none' }}
			>
				<div
					key="tooltip"
					className="tooltip-inner"
					style={{ left: this.props.left, top: this.props.top }}
				>
					{this.props.text}
				</div>
			</div>
		);
	}
}


// DEFAULT PROPERTIES //

Tooltip.defaultProps = {
	top: -40,
	left: -50,
	visible: false
};


// PROPERTY TYPES //

Tooltip.propTypes = {
	left: PropTypes.number,
	text: PropTypes.string.isRequired,
	top: PropTypes.number,
	visible: PropTypes.bool
};


// EXPORTS //

export default Tooltip;
