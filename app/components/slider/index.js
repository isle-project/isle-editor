// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import Card from 'react-bootstrap/lib/Card';
import Alert from 'react-bootstrap/lib/Alert';
import isArray from '@stdlib/assert/is-array';
import NextArrow from './next_arrow';
import PrevArrow from './previous_arrow';
import './slick-theme.min.css';
import './slick.min.css';


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
* @property {boolean} swipeToSlide - enables drag/swipe behavior
* @property {Object} style - CSS inline styles
* @property {Function} onClick - callback invoked when clicking on the next/previous buttons
*/
class DefaultSlider extends Component {
	constructor( props ) {
		super( props );
		const childDivs = props.children && props.children.length > 0 ?
			React.Children.map( props.children, child => <div> {child} </div> ) :
			<div></div>;
		const settings = {
			className: 'centered',
			speed: 1000,
			slidesToShow: 1,
			slidesToScroll: 1,
			prevArrow: <PrevArrow onClick={props.onClick} />,
			nextArrow: <NextArrow onClick={props.onClick} />,
			...props
		};

		if ( props.interval ) {
			settings.autoplay = true;
			settings.autoplaySpeed = props.interval;
		}

		this.state = {
			childDivs,
			settings
		};
	}

	componentDidMount() {
		if ( this.slider ) {
			this.slider.slickGoTo( this.props.goto );
		}
	}

	componentDidUpdate( prevProps ) {
		if ( this.props.children !== prevProps.children ) {
			let childDivs = this.props.children && this.props.children.length > 0 ?
				React.Children.map( this.props.children, child => <div> {child} </div> ) :
				<div></div>;
			this.setState({
				childDivs
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
			</Card.Header>
		);
	}

	render() {
		if ( !isArray( this.props.children ) ) {
			return <Alert variant="danger" >The slider requires at least two child elements for it to be rendered.</Alert>;
		}
		return (
			<Card
				size="large"
				style={{
					margin: '0 auto',
					marginTop: '5px',
					marginBottom: '5px',
					paddingBottom: '20px',
					width: '100%',
					...this.props.style
				}}
			>
				{this.renderTitle()}
				<Card.Body>
					<Slider ref={( slider ) => { this.slider = slider; }} {...this.state.settings}>
						{ this.state.childDivs }
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
	draggable: true,
	goto: 0,
	infinite: false,
	interval: null,
	swipeToSlide: true,
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
	onClick: PropTypes.func,
	style: PropTypes.object,
	swipeToSlide: PropTypes.bool
};


// EXPORTS //

export default DefaultSlider;
