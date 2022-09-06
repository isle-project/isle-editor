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

import React, { cloneElement, Component } from 'react';
import PropTypes from 'prop-types';
import { getSlideByIndex } from '../utils/slides';
import { SpectacleContext } from '../utils/context';
import './overview.css';


// MAIN //

class Overview extends Component {
	constructor() {
		super(...arguments);
		this.resizeHandler = this.resizeHandler.bind(this);
		this.state = {
			overviewWidth: document.documentElement.clientWidth
		};
	}

	componentDidMount() {
		this.resizeHandler();
		window.addEventListener('resize', this.resizeHandler);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.resizeHandler);
	}

	_getHash( slideIndex ) {
		return this.props.slideReference[ slideIndex ].id;
	}

	_renderSlides() {
		const slideIndex = this.props.slideIndex;
		const screen = this.state.overviewWidth;
		return this.props.slideReference.map((reference, index) => {
			const slide = getSlideByIndex(
				this.props.slides,
				this.props.slideReference,
				index
			);
			const el = cloneElement(slide, {
				key: index,
				slideIndex: index,
				export: this.props.route.params.indexOf('export') !== -1,
				transition: [],
				transitionDuration: 0,
				appearOff: true
			});
			const slideClicked = () => {
				this.props.resetViewedIndexes();
				this.context.history.replace(`/${this._getHash( index )}`);
			};
			return (
				<div
					className="spectacle-slide-thumbnail"
					key={index}
					role="button" tabIndex={0}
					onClick={slideClicked}
					onKeyPress={slideClicked}
					style={{
						height: `${(screen / 3) * 0.7}px`,
						opacity: index === slideIndex ? 1 : 0.5,
						width: `${( screen - 21 ) / 3}px`,
						border: index === slideIndex ? 'solid 1px red' : 'none'
					}}
				>
					{el}
				</div>
			);
		});
	}

	resizeHandler() {
		this.setState({
			overviewWidth: document.documentElement.clientWidth
		});
	}

	render() {
		return ( <div className="spectacle-overview-container">
			{this._renderSlides()}
		</div> );
	}
}


// PROPERTIES //

Overview.propTypes = {
	resetViewedIndexes: PropTypes.func,
	route: PropTypes.object,
	slideIndex: PropTypes.number,
	slideReference: PropTypes.array,
	slides: PropTypes.array
};

Overview.contextType = SpectacleContext;


// EXPORTS //

export default Overview;
