/* eslint-disable react/require-default-props */

/*
* The MIT License (MIT)
*
* Copyright (c) 2013-2018 Formidable Labs, Inc.
*
* Copyright (c) 2016-2018 Zachary Maybury, Kylie Stewart, and potentially other
* DefinitelyTyped contributors
*
* Permission is hereby granted, free of charge, to any person obtaining a copy of
* this software and associated documentation files (the "Software"), to deal in
* the Software without restriction, including without limitation the rights to
* use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
* the Software, and to permit persons to whom the Software is furnished to do so,
* subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
* FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
* COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
* IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
* CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import Controller from '../../utils/controller';
import Manager from '../manager';


// VARIABLES //

const debug = logger( 'isle:deck' );


// FUNCTIONS //

export function defaultOnStateChange( prevState, nextState ) {
	if ( nextState ) {
		document.documentElement.classList.add( nextState );
	}
	if ( prevState ) {
		document.documentElement.classList.remove( prevState );
	}
}


// MAIN //

class Deck extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			slideState: void 0,
			fragments: {},
			route: {
				slide: null,
				previousSlide: null,
				params: []
			},
			notes: {}
		};
	}

	componentWillUnmount() {
		// Cleanup default onStateChange
		if ( this.state.slideState && !this.props.onStateChange ) {
			document.documentElement.classList.remove( this.state.slideState );
		}
	}

	addFragment = ( action ) => {
		const { id, slide } = action;
		debug( `Adding a fragment with id ${id} for slide ${slide}...` );
		const fragments = this.state.fragments;
		fragments[ slide] = fragments[ slide ] || {};
		fragments[ slide ][ id ] = action;
		this.setState({
			fragments
		});
	};

	updateFragment = ( action ) => {
		const { fragment } = action;
		debug( `Updating fragment ${fragment.id}...` );
		const fragments = { ...this.state.fragments };
		fragments[ fragment.slide ][ fragment.id ].animations =
			action.animations;
		this.setState({
			fragments
		});
	};

	updateRoute = ( action ) => {
		const { location, slideCount } = action;
		const slideHash = location.pathname.replace( /\//g, '' );

		let slide;
		let proposedSlideIndex = parseInt( slideHash, 10 );
		if ( isNaN( proposedSlideIndex ) ) {
			slide = slideHash;
		} else {
			proposedSlideIndex -= 1;
			const isWithinBounds =
				proposedSlideIndex < slideCount && proposedSlideIndex >= 0;
			slide = isWithinBounds ? proposedSlideIndex : 0;
		}
		return this.setState({
			route: {
				slide,
				params: location.search.replace( '?', '' ).split( '&' ),
				previousSlide: this.state.route.slide || slide
			}
		});
	};

	updateNotes = ( newNotes, slide = null ) => {
		const notes = { ...this.state.notes };
		notes[ slide || this.state.route.slide ] = newNotes;
		this.setState({ notes });
	};

	handleStateChange = nextState => {
		const prevState = this.state.slideState;
		if ( prevState !== nextState ) {
			const onStateChange = this.props.onStateChange || defaultOnStateChange;
			onStateChange( prevState, nextState );
			this.setState({ slideState: nextState });
		}
	};

	render() {
		return (
			<Controller
				updateRoute={this.updateRoute}
				updateNotes={this.updateNotes}
				route={this.state.route}
				history={this.props.history}
				notes={this.state.notes}
				onStateChange={this.handleStateChange}
				contentHeight={this.props.contentHeight}
				contentWidth={this.props.contentWidth}
				fragments={this.state.fragments}
				updateFragment={this.updateFragment}
				addFragment={this.addFragment}
			>
				<Manager
					{...this.props}
					route={this.state.route}
					totalDuration={this.props.totalDuration}
				>{this.props.children}</Manager>
			</Controller>
		);
	}
}


// PROPERTIES //

Deck.propTypes = {
	autoplay: PropTypes.bool,
	autoplayDuration: PropTypes.number,
	autoplayLoop: PropTypes.bool,
	autoplayOnStart: PropTypes.bool,
	children: PropTypes.node,
	controls: PropTypes.bool,
	disableKeyboardControls: PropTypes.bool,
	disableTouchControls: PropTypes.bool,
	history: PropTypes.object,
	onStateChange: PropTypes.func,
	progress: PropTypes.oneOf([ 'bar', 'number', 'none' ]),
	showFullscreenControl: PropTypes.bool,
	transition: PropTypes.array,
	transitionDuration: PropTypes.number
};

Deck.defaultProps = {
	onStateChange: null,
	showFullscreenControl: true
};


// EXPORTS //

export default Deck;
