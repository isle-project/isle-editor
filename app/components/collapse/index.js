// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import isBoolean from '@stdlib/assert/is-boolean';
import isNull from '@stdlib/assert/is-null';
import VSHeader from './vs-header.js';
import VSBody from './vs-body.js';
import './vertical-slider.css';


// VARIABLES //

const debug = logger( 'isle:vertical-slider' );


// FUNCTIONS //

function getClassName( val ) {
	if ( val === false ) {
		return 'vs-body vs-hidden';
	}
	return 'vs-body vs-display';
}


// MAIN //

/**
* An ISLE component that allows to slideDown and slideUp - JQuery style.
*
* @property {boolean} defaultVisible - if set, the body is visible right from the start
* @property {boolean} visible - controls whether slider is visible; turns it into a controlled component where state needs to be handled externally
* @property {string} header - header string
* @property {string} headerClassName - this overrules the given className of the header
* @property {object} headerStyle - one may also assign a style to the header bar
*/
class Collapse extends Component {
	constructor( props ) {
		super( props );
		const visible = props.visible || props.defaultVisible;
		this.state = {
			visible: visible,
			className: getClassName( visible )
		};
	}

	static getDerivedStateFromProps( nextProps, prevState ) {
		if ( !isNull( nextProps.visible ) && nextProps.visible !== prevState.visible ) {
			debug( 'Override visible state...' );
			const newState = {
				visible: nextProps.visible,
				className: getClassName( nextProps.visible )
			};
			return newState;
		}
		return null;
	}

	toggleVisibility = () => {
		this.props.onClick();
		if ( !isBoolean( this.props.visible ) ) {
			const v = !this.state.visible;
			this.setState({
				visible: v,
				className: getClassName( v )
			});
		}
	}

	renderHeader() {
		if ( this.props.headerClassName !== null ) {
			return (
				<VSHeader
					onClick={this.toggleVisibility}
				>
					<div className={this.props.headerClassName}>
						{this.props.header}
					</div>
				</VSHeader>
			);
		}
		return (
			<VSHeader
				onClick={this.toggleVisibility}
			>
				<h1 style={this.props.headerStyle}>{this.props.header}</h1>
			</VSHeader>
		);
	}

	render() {
		return (
			<div className="vertical-slider">
				{ this.renderHeader() }
				<VSBody className={this.state.className}>
					{this.props.children}
				</VSBody>
			</div>
		);
	}
}


// PROPERTIES //

Collapse.propTypes = {
	header: PropTypes.string,
	headerStyle: PropTypes.object,
	headerClassName: PropTypes.string,
	defaultVisible: PropTypes.bool,
	visible: PropTypes.bool,
	onClick: PropTypes.func
};

Collapse.defaultProps = {
	header: 'Header',
	headerClassName: null,
	headerStyle: null,
	defaultVisible: false,
	visible: null,
	onClick() {}
};


// EXPORTS //

export default Collapse;
