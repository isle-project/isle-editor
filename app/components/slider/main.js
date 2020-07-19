// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import Slider from 'react-slick';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import isArray from '@stdlib/assert/is-array';
import isLineButtons from 'utils/is-line-buttons';
import closeHintButtons from 'utils/close-hint-buttons';
import NextArrow from './next_arrow';
import PrevArrow from './previous_arrow';
import './load_translations.js';
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
* @property {boolean} swipe - enables drag/swipe behavior
* @property {Object} style - CSS inline styles
* @property {Function} onClick - callback invoked when clicking on the next/previous buttons
*/
class DefaultSlider extends Component {
	constructor( props ) {
		super( props );
		const childDivs = props.children && props.children.length > 0 ?
			React.Children.map( props.children, ( child ) => {
				if ( isLineButtons( child ) ) {
					return null;
				}
				return ( <div> {child} </div> );
			}) : <div></div>;
		const settings = {
			className: 'centered',
			speed: 1000,
			slidesToShow: 1,
			slidesToScroll: 1,
			prevArrow: <PrevArrow onClick={props.onClick} />,
			nextArrow: <NextArrow onClick={props.onClick} />,
			...props,
			beforeChange: ( oldIndex, newIndex ) => {
				this.setState({ currentSlide: newIndex+1 });
				closeHintButtons( this.slider );
			}
		};

		if ( props.interval ) {
			settings.autoplay = true;
			settings.autoplaySpeed = props.interval;
		}

		this.state = {
			childDivs,
			settings,
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
			const childDivs = this.props.children && this.props.children.length > 0 ?
				React.Children.map( this.props.children, ( child ) => {
					if ( isLineButtons( child ) ) {
						return null;
					}
					return <div> {child} </div>;
				}) : <div></div>;
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
				<span style={{ float: 'right' }}>
					{this.state.currentSlide} / {this.state.childDivs.length}
				</span>
			</Card.Header>
		);
	}

	render() {
		if ( !isArray( this.props.children ) ) {
			return <Alert variant="danger" >{this.props.t('missing-children')}</Alert>;
		}
		return (
			<Card
				size="large"
				style={{
					marginLeft: 'auto',
					marginRight: 'auto',
					marginTop: '20px',
					marginBottom: '20px',
					maxWidth: '1200px',
					width: '100%',
					...this.props.style
				}}
			>
				{this.renderTitle()}
				<Card.Body style={{ paddingBottom: '40px' }}>
					<Slider ref={( slider ) => { this.slider = slider; }} {...this.state.settings} >
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
