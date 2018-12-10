// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import VSHeader from './vs-header.js';
import VSBody from './vs-body.js';
import './vertical-slider.css';

// MAIN //

/**
* An ISLE component that allows to slideDown and slideUp - JQUery stale
* @property {string} groupID - if set, the slider will refer to a group of slider. This will allow to control a multitude of sliders
* @property {boolear} visible - if set, the body is visible right from the start
* @property {string} headerClassName - this overrules the given className of the header
* @property {object} headerStyle - one may also assign a style to the headerbar
*/


class VerticalSlider extends Component {
	constructor( props ) {
        super( props );
		this.state = {
			visible: props.visible,
			className: this.getClassName(props.visible)
        };
    }

	register() {
		if (this.props.groupID) console.log('this should register the component');
		// not implemented yet
	}

	getClassName(val) {
		if (val === false) return 'vs-body vs-hidden';
		return 'vs-body vs-display';
	}


	toggleVisibility = () => {
		var v = !this.state.visible;
		console.log( this.state.className);

		this.setState({
			visible: v,
			className: this.getClassName(v)
		});
	}

	renderHeader() {
		if (this.props.headerClassName !== null) {
			return (
				<VSHeader
					onClick={this.toggleVisibility}>
                    <div className={this.props.headerClassName}>{this.props.header}</div>
                </VSHeader>
			);
		}

		return (
			<VSHeader
				onClick={this.toggleVisibility}>
				<h1 style={this.props.headerStyle}>{this.props.header}</h1>
			</VSHeader>
		);
	}


	render() {
		return (
            <div className="vertical-slider">
				{ this.renderHeader() }
                <VSBody className={this.state.className}>
                    <Fragment>{this.props.children}</Fragment>
                </VSBody>
            </div>
        );
	}
}


// PROPERTIES //

VerticalSlider.propTypes = {
    groupID: PropTypes.string,
    header: PropTypes.string,
	headerStyle: PropTypes.object,
	headerClassName: PropTypes.string,
	visible: PropTypes.bool

};

VerticalSlider.defaultProps = {
    groupID: null,
	header: 'Header',
	headerClassName: null,
	headerStyle: null,
	visible: false
};

// EXPORTS //

export default VerticalSlider;
