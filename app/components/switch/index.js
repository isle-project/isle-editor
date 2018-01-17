// MODULES //

import React from 'react';
import Tooltip from 'react-bootstrap/lib/Tooltip';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import PropTypes from 'prop-types';
import copy from '@stdlib/utils/copy';
import isArray from '@stdlib/assert/is-array';
import './switch.css';


// FUNCTIONS //

const makeTooltip = ( text ) => (
	<Tooltip id="tooltip">{text}</Tooltip>
);


// MAIN //

class Switch extends React.Component {
	constructor() {
		super();
		this.state = {
			pos: 0
		};
	}

	handleClick = () => {
		const newState = copy( this.state );
		if ( !isArray( this.props.children ) ) {
			return null;
		}
		if ( newState.pos + 1 >= this.props.children.length ) {
			newState.pos = 0;
		} else {
			newState.pos += 1;
		}
		this.setState( newState );
		this.props.onChange( newState.pos );
	}

	makeVisible( element, index ) {
		const o = ( index !== this.state.pos ) ?
			{
				style: { display: 'none' }
			} :
			{
				style: { display: 'inline' }
			};
		return React.cloneElement( element, o );
	}

	render() {
		let children = React.Children.map( this.props.children, this.makeVisible.bind( this ) );
		let className = 'switch';
		if ( this.props.className ) {
			className += ' '+this.props.className;
		}
		const content =
			<span
				className={className}
				onClick={this.handleClick}
				style={this.props.style}
			>
				{children}
			</span>;

		if ( this.props.tooltip === '' ) {
			return content;
		}
		return (
			<OverlayTrigger
				placement={this.props.tooltipPos}
				overlay={makeTooltip( this.props.tooltip )}
			>
				{content}
			</OverlayTrigger>
		);
	}
}


// PROPERTY TYPES //

Switch.propTypes = {
	className: PropTypes.string,
	onChange: PropTypes.func,
	style: PropTypes.object,
	tooltip: PropTypes.string,
	tooltipPos: PropTypes.string
};


// DEFAULT PROPERTIES //

Switch.defaultProps = {
	className: '',
	onChange() {},
	style: {},
	tooltip: 'Click to cycle through available options.',
	tooltipPos: 'top'
};


// EXPORTS //

export default Switch;
