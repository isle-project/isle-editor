/* eslint new-cap:0, max-statements:0, no-console:0, react/no-did-mount-set-state: 0, react/require-default-props: 0 */

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

import React, { Children, cloneElement, Component } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import ReactTransitionGroup from 'react-transition-group/TransitionGroup';
import filter from 'lodash/filter';
import size from 'lodash/size';
import findIndex from 'lodash/findIndex';
import get from 'lodash/get';
import isNil from 'lodash/isNil';
import { getSlideByIndex } from '../utils/slides';

import Presenter from './presenter';
import SlideWrapper from './slide-wrapper';
import Overview from './overview';

import AutoplayControls from './autoplay-controls';
import Fullscreen from './fullscreen';
import Progress from './progress';
import Controls from './controls';
import { toggleFullscreen } from '../utils/fullscreen';
import { SpectacleContext } from '../utils/context';


// VARIABLES //

const debug = logger( 'spectacle:manager' );


// FUNCTIONS //

/**
 * Returns the swipe direction for the given touch event.
 *
 * @private
 * @param {Object} touch - touch event
 * @returns {number} swipe direction (1, -1, or 0)
 */
function swipeDirection( touch ) {
	const xDist = touch.x1 - touch.x2;
	const yDist = touch.y1 - touch.y2;
	const r = Math.atan2(yDist, xDist);
	let swipeAngle = Math.round((r * 180) / Math.PI);
	if ( swipeAngle < 0 ) {
		swipeAngle = 360 - Math.abs(swipeAngle);
	}
	if ( swipeAngle <= 45 && swipeAngle >= 0 ) {
		return 1;
	}
	if ( swipeAngle <= 360 && swipeAngle >= 315 ) {
		return 1;
	}
	if ( swipeAngle >= 135 && swipeAngle <= 225 ) {
		return -1;
	}
	return 0;
}

function buildSlideReference( props ) {
	const slideReference = [];
	Children.toArray( props.children ).forEach( ( child, rootIndex ) => {
		if ( !child.props.hasSlideChildren ) {
			const reference = {
				id: child.props.id || slideReference.length + 1,
				rootIndex
			};
			if ( child.props.goTo ) {
				reference.goTo = child.props.goTo;
			}
			slideReference.push( reference );
		} else {
			child.props.children.forEach( ( setSlide, setIndex ) => {
				const reference = {
					id: setSlide.props.id || slideReference.length + 1,
					setIndex,
					rootIndex
				};
				if ( child.props.goTo ) {
					reference.goTo = child.props.goTo;
				}
				slideReference.push( reference );
			});
		}
	});
	return slideReference;
}

export class Manager extends Component {
	constructor(props) {
		super(...arguments);
		this.presentationConnection = null;

		this.state = {
			lastSlideIndex: null,
			slideReference: [],
			fullscreen: window.innerHeight === screen.height,
			mobile: window.innerWidth < this.props.contentWidth,
			autoplaying: this.props.autoplay ? this.props.autoplayOnStart : false
		};
		this.viewedIndexes = new Set();
		this.slideCache = null;
	}

	static getDerivedStateFromProps(nextProps) {
		return { slideReference: buildSlideReference(nextProps) };
	}

	componentDidMount() {
		const slideIndex = this._getSlideIndex();
		const autoplayOnStart = this.props.autoplay ? this.props.autoplayOnStart : false;
		this.setState({
			lastSlideIndex: slideIndex
		});
		this._attachEvents();
		if ( autoplayOnStart ) {
			this._startAutoplay();
		}
	}

	componentWillUnmount() {
		this._detachEvents();
		if ( this.autoplayTimeout ) {
			clearTimeout( this.autoplayTimeout );
		}
	}

	_attachEvents = () => {
		window.addEventListener('storage', this._goToSlide);
		window.addEventListener('keydown', this._handleKeyPress);
		window.addEventListener('resize', this._handleScreenChange);
		if (
			(((navigator || {}).presentation || {}).receiver || {}).connectionList
		) {
			navigator.presentation.receiver.connectionList.then(list => {
				list.connections.forEach( connection => {
					this.presentationConnection = connection;
					connection.addEventListener('message', event => {
						this._goToSlide({ key: 'spectacle-slide', newValue: event.data });
					});
				});
				list.addEventListener('connectionavailable', e => {
					this.presentationConnection = e.connection;
					e.connection.addEventListener('message', event => {
						this._goToSlide({ key: 'spectacle-slide', newValue: event.data });
					});
				});
			});
		}
	};

	_detachEvents = () => {
		window.removeEventListener( 'storage', this._goToSlide );
		window.removeEventListener( 'keydown', this._handleKeyPress );
		window.removeEventListener( 'resize', this._handleScreenChange );
	};

	_createNextSlideTimeout = () => {
		const slideIndex = this._getSlideIndex();
		const slide = this._getSlideByIndex( slideIndex );
		let duration = slide.props.duration * 1000;
		if ( !duration ) {
			duration = this.props.autoplayDuration;
		}
		this.autoplayTimeout = setTimeout(() => {
			this._nextSlide();
			this._createNextSlideTimeout();
		}, duration );
	};

	_startAutoplay = () => {
		clearTimeout( this.autoplayTimeout );
		this.setState({ autoplaying: true });
		this._createNextSlideTimeout();
	};

	_stopAutoplay = () => {
		this.setState({ autoplaying: false });
		clearTimeout(this.autoplayTimeout);
	};

	_toggleAutoplaying = () => {
		if (this.state.autoplaying) {
			this._stopAutoplay();
		} else {
			this._startAutoplay();
		}
	};

	_handleEvent = (e) => {
		// eslint-disable-line complexity
		const event = window.event ? window.event : e;
		if (
			event.keyCode === 37 || // 'ArrowLeft'|
			event.keyCode === 33 || // 'PageUp'
			(event.keyCode === 32 && // 'Space'
				event.shiftKey)
		) {
			this._prevSlide();
			this._stopAutoplay();
		} else if (
			event.keyCode === 39 || // 'ArrowRight'
			event.keyCode === 34 || // 'PageDown'
			(event.keyCode === 32 && // 'Space'
				!event.shiftKey)
		) {
			this._nextSlide();
			this._stopAutoplay();
		} else if (
			event.altKey &&
			event.keyCode === 79 && // 'o'
			!event.ctrlKey &&
			!event.metaKey
		) {
			this._toggleOverviewMode();
		} else if (
			event.altKey &&
			event.keyCode === 80 && // 'p'
			!event.ctrlKey &&
			!event.metaKey
		) {
			this._togglePresenterMode();
		} else if (
			event.altKey &&
			event.keyCode === 65 && // 'a'
			!event.ctrlKey &&
			!event.metaKey &&
			this.props.autoplay
		) {
			this._toggleAutoplaying();
		} else if (
			event.altKey &&
			event.keyCode === 70 && // 'f'
			!event.ctrlKey &&
			!event.metaKey
		) {
			toggleFullscreen();
		}
	};

	_handleKeyPress = ( e ) => {
		const event = window.event ? window.event : e;
		if (
			event.target instanceof HTMLInputElement ||
			event.target.type === 'textarea' ||
			event.target.contentEditable === 'true' ||
			this.props.disableKeyboardControls
		) {
			return;
		}
		this._handleEvent( e );
	};

	_handleScreenChange = () => {
		this.setState({
			fullscreen: window.innerHeight === screen.height,
			mobile: window.innerWidth < this.props.contentWidth
		});
	};

	_toggleOverviewMode = () => {
		const suffix =
			this.context.route.params.indexOf( 'overview' ) !== -1 ? '' : '?overview';
		this.context.history.replace( `/${this.context.route.slide}${suffix}` );
	};

	_togglePresenterMode = () => {
		const presenting = this.context.route.params.indexOf( 'presenter' ) !== -1;
		const suffix = presenting ? '' : '?presenter';
		const originalLocation = location.href;
		this.context.history.replace(`/${this.context.route.slide}${suffix}`);
		if ( presenting === false && window.PresentationRequest ) {
			const presentationRequest = new PresentationRequest([
				`${originalLocation}`
			]);
			navigator.presentation.defaultRequest = presentationRequest;
			presentationRequest.start().then(connection => {
				this.presentationConnection = connection;
				this.presentationConnection.addEventListener( 'message', data => {
					this._goToSlide({ key: 'spectacle-slide', newValue: data.data });
				});
			});
		} else if ( this.presentationConnection ) {
			this.presentationConnection.terminate();
		}
	};

	_getSuffix = () => {
		if ( this.context.route.params.indexOf( 'presenter') !== -1 ) {
			return '?presenter';
		} else if ( this.context.route.params.indexOf('overview') !== -1 ) {
			return '?overview';
		}
		return '';
	};

	_goToSlide = ( e ) => {
		let data = null;
		let canNavigate = true;
		let offset = 0;
		if ( e.key === 'spectacle-slide' ) {
			data = JSON.parse( e.newValue );
			canNavigate = this._checkFragments( this.context.route.slide, data.forward );
		}
		else if ( e.slide ) {
			data = e;
			offset = 1;
			const index = isNaN( parseInt( data.slide, 10 ) ) ? get(
						this.state.slideReference.find(slide => slide.id === data.slide),
						'rootIndex',
						0
					) : data.slide - 1;

			const msgData = JSON.stringify({
				slide: this._getHash( index ),
				forward: false,
				time: Date.now()
			});
			localStorage.setItem( 'spectacle-slide', msgData );
			if ( this.presentationConnection ) {
				this.presentationConnection.send( msgData );
			}
		} else {
			return;
		}
		const slideIndex = this._getSlideIndex();
		this.setState({
			lastSlideIndex: slideIndex || 0
		});

		if ( canNavigate ) {
			let slide = data.slide;
			if ( !isNaN( parseInt( slide, 10 ) ) ) {
				slide = parseInt( slide, 10 ) - offset + 1;
			}
			this.context.history.replace( `/${slide}${this._getSuffix()}` );
		}
	};

	_resetViewedIndexes = () => {
		this.viewedIndexes = new Set();
	};

	_prevSlide = () => {
		const slideIndex = this._getSlideIndex();
		this.setState({
			lastSlideIndex: slideIndex
		});
		this.viewedIndexes.delete( slideIndex );
		if (
			this._checkFragments( this.context.route.slide, false ) ||
			this.context.route.params.indexOf( 'overview' ) !== -1
		) {
			if ( slideIndex > 0 ) {
				this.context.history.replace(
					`/${this._getHash( slideIndex - 1 )}${this._getSuffix()}`
				);
				const msgData = JSON.stringify({
					slide: this._getHash( slideIndex - 1 ),
					forward: false,
					time: Date.now()
				});
				localStorage.setItem( 'spectacle-slide', msgData );
				if ( this.presentationConnection ) {
					this.presentationConnection.send( msgData );
				}
			}
		} else if ( slideIndex > 0 ) {
			const msgData = JSON.stringify({
				slide: this._getHash( slideIndex ),
				forward: false,
				time: Date.now()
			});
			localStorage.setItem( 'spectacle-slide', msgData );
			if ( this.presentationConnection ) {
				this.presentationConnection.send( msgData );
			}
		}
	};

	_nextUnviewedIndex = () => {
		const sortedIndexes = Array.from( this.viewedIndexes ).sort((a, b) => a - b);
		return Math.min(
			( sortedIndexes[sortedIndexes.length - 1] || 0 ) + 1,
			this.state.slideReference.length - 1
		);
	};

	_getOffset = ( slideIndex ) => {
		const { goTo } = this.state.slideReference[ slideIndex ];
		const nextUnviewedIndex = this._nextUnviewedIndex();
		if ( goTo && !isNaN( parseInt( goTo, 10 ) ) ) {
			const goToIndex = () => {
				if ( this.viewedIndexes.has( goTo - 1 ) ) {
					return this._nextUnviewedIndex();
				}
				return goTo - 1;
			};
			return goToIndex() - slideIndex;
		}
		return nextUnviewedIndex - slideIndex;
	};

	_nextSlide = () => {
		const slideIndex = this._getSlideIndex();
		debug( 'Go to next slide... (new index: '+slideIndex+')' );
		this.setState({
			lastSlideIndex: slideIndex
		});
		const slideReference = this.state.slideReference;
		if (
			this._checkFragments( this.context.route.slide, true ) ||
			this.context.route.params.indexOf( 'overview' ) !== -1
		) {
			if ( slideIndex === slideReference.length - 1 ) {
				// On last slide, loop to first slide
				if (
					this.props.autoplay &&
					this.props.autoplayLoop &&
					this.state.autoplaying
				) {
					const slideData = '{ "slide": "0", "forward": "false" }';
					this._goToSlide({ key: 'spectacle-slide', newValue: slideData });
					this._resetViewedIndexes();
				}
			} else if ( slideIndex < slideReference.length - 1 ) {
				this.viewedIndexes.add( slideIndex );
				const offset = this._getOffset( slideIndex );
				this.context.history.replace(
					`/${this._getHash( slideIndex + offset ) + this._getSuffix()}`
				);
				const msgData = JSON.stringify({
					slide: this._getHash( slideIndex + offset ),
					forward: true,
					time: Date.now()
				});
				localStorage.setItem( 'spectacle-slide', msgData );
				if ( this.presentationConnection ) {
					this.presentationConnection.send( msgData );
				}
			}
		} else if ( slideIndex < slideReference.length ) {
			const msgData = JSON.stringify({
				slide: this._getHash( slideIndex ),
				forward: true,
				time: Date.now()
			});
			localStorage.setItem( 'spectacle-slide', msgData );
			if ( this.presentationConnection ) {
				this.presentationConnection.send( msgData );
			}
		}
	};

	_getHash = ( slideIndex ) => {
		const reference = this.state.slideReference[ slideIndex ];
		if ( !reference ) {
			return 0;
		}
		return reference.id;
	};

	_updateFragment = ( fragData ) => {
		return this.context.updateFragment( fragData );
	};

	_checkFragments = ( slide, forward ) => {
		const fragments = this.context.fragments;
		if ( slide in fragments ) {
			const currentSlideFragments = fragments[ slide ];
			const count = size(currentSlideFragments);
			const fullyAnimated = filter(currentSlideFragments, frag =>
				frag.animations.every( anim => anim === true )
			);
			const notFullyAnimated = filter(
				currentSlideFragments,
				frag => !frag.animations.every(anim => anim === true)
			);

			if ( forward === true && fullyAnimated.length !== count ) {
				const target = notFullyAnimated[0];
				target.animations[target.animations.indexOf(false)] = true;
				this._updateFragment({
					fragment: target,
					animations: target.animations
				});
				return false;
			}
			if ( forward === false ) {
				if (
					notFullyAnimated.length === count &&
					notFullyAnimated.every(frag =>
						frag.animations.every(anim => anim === false)
					)
				) {
					// If every fragment is animated back to square one, then switch slides
					return true;
				}
				let target;
				const lastFullyAnimatedFragment =
					fullyAnimated[size(fullyAnimated) - 1];
				const lastNotFullyAnimatedFragment = notFullyAnimated[0];
				if (
					fullyAnimated.length === count ||
					lastNotFullyAnimatedFragment.animations.every(a => a === false)
				) {
					// if all fragments are fully animated, target the last fully animated fragment
					target = lastFullyAnimatedFragment;
				} else if (notFullyAnimated !== count) {
					// if some fragments are not fully animated, continue targeting that fragment
					target = lastNotFullyAnimatedFragment;
				}
				target.animations[target.animations.lastIndexOf(true)] = false;
				this._updateFragment({
					fragment: target,
					animations: target.animations
				});
				return false;
			}
			return true;
		}
		return true;
	};

	_getTouchEvents = () => {
		if ( this.props.disableTouchControls ) {
			return {};
		}
		const self = this;
		return {
			onTouchStart(e) {
				self.touchObject = {
					startX: e.touches[0].pageX,
					startY: e.touches[0].pageY
				};
			},
			onTouchMove(e) {
				const direction = swipeDirection({
					x1: self.touchObject.startX,
					x2: e.touches[0].pageX,
					y1: self.touchObject.startY,
					y2: e.touches[0].pageY
				});

				self.touchObject = {
					startX: self.touchObject.startX,
					startY: self.touchObject.startY,
					endX: e.clientX,
					endY: e.clientY,
					length: Math.round(
						Math.sqrt(Math.pow(e.touches[0].pageX - self.touchObject.startX, 2))
					),
					direction
				};

				if (direction !== 0) {
					e.preventDefault();
				}
			},
			onTouchEnd(e) {
				self._handleSwipe(e);
			},
			onTouchCancel(e) {
				self._handleSwipe(e);
			}
		};
	};

	preventPropagation = ( e ) => {
		if ( this.clickSafe === true ) {
			e.preventDefault();
			e.stopPropagation();
			e.nativeEvent.stopPropagation();
		}
	};

	_handleSwipe = () => {
		if (
			typeof this.touchObject.length !== 'undefined' &&
			this.touchObject.length > 44
		) {
			this.clickSafe = true;
		} else {
			this.clickSafe = false;
		}
		if ( Math.abs(this.touchObject.length) > 20 ) {
			if ( this.touchObject.direction === 1 ) {
				this._nextSlide();
			} else if ( this.touchObject.direction === -1 ) {
				this._prevSlide();
			}
		}
		this.touchObject = {};
	};

	_getSlideIndex = () => {
		let index = parseInt( this.context.route.slide, 10 );
		if ( !Number.isFinite( index ) ) {
			const foundIndex = findIndex( this.state.slideReference, reference => {
				return this.context.route.slide === reference.id;
			});
			index = foundIndex >= 0 ? foundIndex : 0;
		}
		return index;
	};

	_getSlideByIndex = ( index ) => {
		return getSlideByIndex(
			this.props.children,
			this.state.slideReference,
			index
		);
	};

	_renderSlide = () => {
		const slideIndex = this._getSlideIndex();
		const slide = this._getSlideByIndex( slideIndex );
		if ( !slide ) {
			return null;
		}
		const targetProps = {
			fragments: this.context.fragments,
			export: this.context.route.params.indexOf('export') !== -1,
			hash: this.context.route.slide,
			slideIndex,
			lastSlideIndex: this.state.lastSlideIndex,
			transition: (slide.props.transition || {}).length ?
				slide.props.transition : this.props.transition,
			transitionDuration: !isNil(slide.props.transitionDuration) ?
				slide.props.transitionDuration : this.props.transitionDuration,
			slideReference: this.state.slideReference
		};
		return (
			<SlideWrapper key={slideIndex} {...slide.props} {...targetProps}>
				{cloneElement(slide, { ...slide.props, ...targetProps })}
			</SlideWrapper>
		);
	};

	_getProgressStyles = () => {
		const slideIndex = this._getSlideIndex();
		const slide = this._getSlideByIndex(slideIndex);

		if (slide && slide.props.progressColor) {
			return slide.props.progressColor;
		}
		return null;
	};

	_getControlStyles = () => {
		const slideIndex = this._getSlideIndex();
		const slide = this._getSlideByIndex( slideIndex );
		if ( slide && slide.props.controlColor ) {
			return slide.props.controlColor;
		}
		return null;
	};

	render() {
		if ( this.context.route.slide === null ) {
			return false;
		}
		let componentToRender;
		const children = Children.toArray( this.props.children );
		if ( this.context.route.params.indexOf('presenter') !== -1 ) {
			componentToRender = (
				<Presenter
					slides={children}
					slideReference={this.state.slideReference}
					slideIndex={this._getSlideIndex()}
					hash={this.context.route.slide}
					route={this.context.route}
					lastSlideIndex={this.state.lastSlideIndex}
					totalDuration={this.props.totalDuration}
				/>
			);
		} else if (this.context.route.params.indexOf('overview') !== -1) {
			componentToRender = (
				<Overview
					slides={children}
					slideReference={this.state.slideReference}
					slideIndex={this._getSlideIndex()}
					route={this.context.route}
					resetViewedIndexes={this._resetViewedIndexes}
				/>
			);
		} else {
			componentToRender = (
				<ReactTransitionGroup component="div" style={{
					height: '100vh',
					width: '100%',
					perspective: 1000,
					transformStyle: 'flat'
				}}>
					{this._renderSlide()}
				</ReactTransitionGroup>
			);
		}

		const showControls =
			!this.state.fullscreen &&
			!this.state.mobile &&
			this.context.route.params.indexOf('overview') === -1;

		/* eslint-disable jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */
		return (
			<div
				className="spectacle-deck"
				style={{
					backgroundColor: (
						this.context.route.params.indexOf('presenter') !== -1 ||
						this.context.route.params.indexOf('overview') !== -1 ) ?
						'black' : ''
				}}
				onClick={this.preventPropagation}
				{...this._getTouchEvents()}
			>
				{this.props.controls && showControls && (
					<Controls
						currentSlideIndex={this._getSlideIndex()}
						totalSlides={this.state.slideReference.length}
						onPrev={this._prevSlide.bind(this)}
						onNext={this._nextSlide.bind(this)}
						controlColor={this._getControlStyles()}
					/>
				)}

				{componentToRender}

				{this.context.route.params.indexOf('export') === -1 &&
				this.context.route.params.indexOf('overview') === -1 ? (
					<Progress
						items={this.state.slideReference}
						currentSlideIndex={this._getSlideIndex()}
						type={this.props.progress}
						progressColor={this._getProgressStyles()}
					/>
				) : (
					''
				)}

				{this.props.showFullscreenControl &&
					!this.context.route.params.includes('export') && <Fullscreen />}

				{this.props.autoplay ? (
					<AutoplayControls
						autoplaying={this.state.autoplaying}
						onPlay={this._startAutoplay}
						onPause={this._stopAutoplay}
					/>
				) : (
					''
				)}
			</div>
		);
		/* eslint-enable jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */
	}
}


// PROPERTIES //

Manager.propTypes = {
	autoplay: PropTypes.bool,
	autoplayDuration: PropTypes.number,
	autoplayLoop: PropTypes.bool,
	autoplayOnStart: PropTypes.bool,
	children: PropTypes.node,
	contentHeight: PropTypes.number,
	contentWidth: PropTypes.number,
	controls: PropTypes.bool,
	disableKeyboardControls: PropTypes.bool,
	disableTouchControls: PropTypes.bool,
	fragment: PropTypes.object,
	progress: PropTypes.oneOf(['bar', 'number', 'none']),
	route: PropTypes.object,
	showFullscreenControl: PropTypes.bool,
	transition: PropTypes.array,
	transitionDuration: PropTypes.number
};

Manager.defaultProps = {
	autoplay: false,
	autoplayDuration: 7000,
	autoplayLoop: true,
	autoplayOnStart: true,
	contentWidth: 1000,
	contentHeight: 700,
	disableKeyboardControls: false,
	disableTouchControls: false,
	transition: [],
	transitionDuration: 500,
	progress: 'pacman',
	controls: true
};

Manager.contextType = SpectacleContext;


// EXPORTS //

export default Manager;
