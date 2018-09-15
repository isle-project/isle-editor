// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import copy from '@stdlib/utils/copy';
import isArray from '@stdlib/assert/is-array';
import Tooltip from 'components/tooltip';
import './switch.css';


// MAIN //

/**
* The Switch component allows the display of one element out of a list of several elements. Users can cycle through the different children of the Switch tag by clicking on the currently displayed one.
*
* @property {string} tooltip - tooltip displayed when hovering over the switch element
* @property {string} tooltipPos - placement of the tooltip (either `top`, `left`, `right`, or `bottom`)
* @property {string} className - class name for the enclosing span element
* @property {Object} style - CSS inline styles
* @property {Function} onChange - callback invoked when elements are switched. Receives as its first argument the index of the currently displayed child
*/
class Switch extends Component {
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
			<Tooltip
				placement={this.props.tooltipPos}
				tooltip={this.props.tooltip}
			>
				{content}
			</Tooltip>
		);
	}
}


// PROPERTIES //

Switch.propTypes = {
	tooltip: PropTypes.string,
	tooltipPos: PropTypes.string,
	className: PropTypes.string,
	style: PropTypes.object,
	onChange: PropTypes.func
};

Switch.defaultProps = {
	tooltip: 'Click to cycle through available options.',
	tooltipPos: 'top',
	className: '',
	style: {},
	onChange() {}
};


// EXPORTS //

export default Switch;
