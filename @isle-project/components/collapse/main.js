// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import { isPrimitive as isBoolean } from '@stdlib/assert/is-boolean';
import isNull from '@stdlib/assert/is-null';
import { withPropCheck } from '@isle-project/utils/prop-check';
import VSHeader from './vs-header.js';
import createClass from './create_class.js';
import './vertical-slider.css';


// VARIABLES //

const debug = logger( 'isle:vertical-slider' );


// MAIN //

/**
* An ISLE component that allows to slideDown and slideUp - JQuery style.
*
* @property {boolean} defaultVisible - if set, the body is visible right from the start
* @property {boolean} visible - controls whether slider is visible; turns it into a controlled component where state needs to be handled externally
* @property {(string|node)} header - header content
* @property {string} headerClassName - overrules the given class name of the header
* @property {Object} headerStyle - one may also assign a style to the header bar
* @property {string} className - class name
* @property {Object} style - inline CSS styles for outer container
* @property {Function} onClick - event handler invoked when header is clicked
*/
class Collapse extends Component {
	constructor( props ) {
		super( props );
		const visible = props.visible || props.defaultVisible;
		this.state = {
			visible: visible,
			className: createClass( visible )
		};
	}

	static getDerivedStateFromProps( nextProps, prevState ) {
		if ( !isNull( nextProps.visible ) && nextProps.visible !== prevState.visible ) {
			debug( 'Override visible state...' );
			const newState = {
				visible: nextProps.visible,
				className: createClass( nextProps.visible )
			};
			return newState;
		}
		return null;
	}

	toggleVisibility = () => {
		if ( !isBoolean( this.props.visible ) ) {
			const v = !this.state.visible;
			this.props.onClick( v );
			this.setState({
				visible: v,
				className: createClass( v )
			});
		} else {
			this.props.onClick( this.props.visible );
		}
	};

	renderHeader() {
		if ( this.props.headerClassName !== null ) {
			return (
				<VSHeader
					onClick={this.toggleVisibility}
					className={this.props.headerClassName}
					style={this.props.headerStyle}
				>
					{this.props.header}
				</VSHeader>
			);
		}
		return (
			<VSHeader
				onClick={this.toggleVisibility}
				style={this.props.headerStyle}
			>
				{this.props.header}
			</VSHeader>
		);
	}

	render() {
		return (
			<div className={`${this.props.className} vertical-slider`} style={this.props.style} >
				{ this.renderHeader() }
				<div className={this.state.className}>
					{this.props.children}
				</div>
			</div>
		);
	}
}


// PROPERTIES //

Collapse.propTypes = {
	header: PropTypes.oneOfType([ PropTypes.string, PropTypes.node ]),
	headerStyle: PropTypes.object,
	headerClassName: PropTypes.string,
	defaultVisible: PropTypes.bool,
	visible: PropTypes.bool,
	className: PropTypes.string,
	style: PropTypes.object,
	onClick: PropTypes.func
};

Collapse.defaultProps = {
	header: 'Header',
	headerClassName: null,
	headerStyle: null,
	defaultVisible: false,
	visible: null,
	className: '',
	style: {},
	onClick() {}
};


// EXPORTS //

export default withPropCheck( Collapse );
