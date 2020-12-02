// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import Slider from 'react-slick';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import isLineButtons from 'utils/is-line-buttons';
import closeHintButtons from 'utils/close-hint-buttons';
import NextArrow from './next_arrow';
import PrevArrow from './previous_arrow';
import './load_translations.js';
import './slick-theme.min.css';
import './slick.css';
import './slider.css';


// MAIN //

/**
* A component which displays its children in a slideshow or carousel.
*
* @property {string} title - title for the slideshow / carousel to be displayed at its top
* @property {boolean} dots - display dots at the bottom for quickly navigating to any slide
* @property {boolean} fade - controls whether fading is used for transitioning between the slides
* @property {boolean} draggable - controls whether users can drag the slides to navigate between them
* @property {number} goto - If property is changed, the component jumps to the slide with the selected index
* @property {boolean} infinite - controls whether the slideshow wraps around it's contents
* @property {number} interval - sets a time interval for an automatic slide change
* @property {boolean} swipe - enables drag/swipe behavior
* @property {Object} style - CSS inline styles
* @property {Function} onClick - callback invoked when clicking on the next/previous buttons
*/
class DefaultSlider extends Component {
	constructor( props ) {
		super( props );
		let nChildren = 0;
		const childDivs = props.children && props.children.length > 0 ?
			React.Children.map( props.children, ( child ) => {
				if ( isLineButtons( child ) ) {
					return null;
				}
				nChildren += 1;
				return ( <div> {child} </div> );
			}) : <div></div>;
		this.state = {
			nChildren,
			childDivs,
			currentSlide: 1
		};
	}

	componentDidMount() {
		if ( this.slider ) {
			this.slider.slickGoTo( this.props.goto );
		}
	}

	componentDidUpdate( prevProps ) {
		if ( this.props.children !== prevProps.children ) {
			let nChildren = 0;
			const childDivs = this.props.children && this.props.children.length > 0 ?
				React.Children.map( this.props.children, ( child ) => {
					if ( isLineButtons( child ) ) {
						return null;
					}
					nChildren += 1;
					return <div> {child} </div>;
				}) : <div></div>;
			this.setState({
				childDivs,
				nChildren
			});
		}
		if ( this.props.goto !== prevProps.goto && this.slider ) {
			this.slider.slickGoTo( this.props.goto );
		}
	}

	renderTitle() {
		if ( this.props.title === '' ) {
			return null;
		}
		return (
			<Card.Header as="h3">
				{this.props.title}
				<span style={{ float: 'right' }}>
					{this.state.currentSlide} / {this.state.childDivs.length}
				</span>
			</Card.Header>
		);
	}

	render() {
		if ( this.state.nChildren <= 1 ) {
			return <Alert variant="danger" >{this.props.t('missing-children')}</Alert>;
		}
		const settings = {
			className: 'centered',
			speed: 1000,
			slidesToShow: 1,
			slidesToScroll: 1,
			prevArrow: <PrevArrow onClick={this.props.onClick} />,
			nextArrow: <NextArrow onClick={this.props.onClick} />,
			...this.props,
			beforeChange: ( oldIndex, newIndex ) => {
				this.setState({ currentSlide: newIndex+1 });
				closeHintButtons( this.slider );
			},
			style: {
				userSelect: this.props.draggable ? 'none' : 'inherit'
			}
		};
		if ( this.props.interval ) {
			settings.autoplay = true;
			settings.autoplaySpeed = this.props.interval;
		}
		return (
			<Card
				size="large"
				className="slider-card"
				style={this.props.style}
			>
				{this.renderTitle()}
				<Card.Body style={{ paddingBottom: '40px' }}>
					<Slider
						ref={( slider ) => { this.slider = slider; }}
						{...settings}
					>
						{this.state.childDivs}
					</Slider>
				</Card.Body>
			</Card>
		);
	}
}


// PROPERTIES //

DefaultSlider.defaultProps = {
	title: '',
	dots: true,
	fade: false,
	draggable: false,
	goto: 0,
	infinite: false,
	interval: null,
	swipe: false,
	style: {},
	onClick() {}
};

DefaultSlider.propTypes = {
	title: PropTypes.string,
	dots: PropTypes.bool,
	fade: PropTypes.bool,
	draggable: PropTypes.bool,
	goto: PropTypes.number,
	infinite: PropTypes.bool,
	interval: PropTypes.number,
	swipe: PropTypes.bool,
	style: PropTypes.object,
	onClick: PropTypes.func
};


// EXPORTS //

export default withTranslation( 'slider' )( DefaultSlider );
