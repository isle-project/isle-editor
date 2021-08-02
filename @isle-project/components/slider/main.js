// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import Slider from 'react-slick';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import isLineButtons from '@isle-project/utils/is-line-buttons';
import closeHintButtons from '@isle-project/utils/close-hint-buttons';
import { withPropCheck } from '@isle-project/utils/prop-check';
import NextArrow from './next_arrow';
import PrevArrow from './previous_arrow';
import './slick-theme.min.css';
import './slick.css';
import './slider.css';


// MAIN //

/**
* A component which displays its children in a slideshow or carousel.
*
* @property {(string|node)} title - title for the slideshow / carousel to be displayed at its top
* @property {boolean} dots - display dots at the bottom for quickly navigating to any slide
* @property {boolean} fade - controls whether fading is used for transitioning between the slides
* @property {string} pagination - whether to show the pagination either on the `top`, `bottom`, or `both
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
		this.state = {
			nChildren: 0,
			childDivs: null,
			currentSlide: 1
		};
	}

	componentDidMount() {
		this.createSlides();
		if ( this.slider ) {
			this.slider.slickGoTo( this.props.goto );
		}
	}

	componentDidUpdate( prevProps ) {
		if ( this.props.children !== prevProps.children ) {
			this.createSlides();
		}
		if ( this.props.goto !== prevProps.goto && this.slider ) {
			this.slider.slickGoTo( this.props.goto );
		}
	}

	createSlides() {
		let nChildren = 0;
		const childDivs = this.props.children && this.props.children.length > 0 ?
			React.Children.map( this.props.children, ( child ) => {
				if ( isLineButtons( child ) ) {
					return null;
				}
				nChildren += 1;
				return <div hidden={this.state.currentSlide !== nChildren ? true : void 0} > {child} </div>;
			}) : <div></div>;
		this.setState({
			childDivs,
			nChildren
		});
	}

	renderTitle() {
		if ( !this.props.title ) {
			return null;
		}
		const currentSlideDisplay = <span style={{ float: 'right' }}>
			{this.state.currentSlide} / {this.state.childDivs.length}
		</span>;
		if ( isString( this.props.title ) ) {
			return (
				<Card.Header as="h3" >
					{this.props.title}
					{currentSlideDisplay}
				</Card.Header>
			);
		}
		return (
			<Card.Header >
				{this.props.title}
				{currentSlideDisplay}
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
			prevArrow: <PrevArrow pagination={this.props.pagination} onClick={this.props.onClick} t={this.props.t} />,
			nextArrow: <NextArrow pagination={this.props.pagination} onClick={this.props.onClick} t={this.props.t} />,
			...this.props,
			beforeChange: ( oldIndex, newIndex ) => {
				this.setState({ currentSlide: newIndex+1 }, this.createSlides );
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
				<Card.Body style={{ paddingBottom: 40, paddingTop: this.props.pagination !== 'bottom' ? 40 : 0 }}>
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
	title: null,
	dots: true,
	fade: false,
	draggable: false,
	pagination: 'bottom',
	goto: 0,
	infinite: false,
	interval: null,
	swipe: false,
	style: {},
	onClick() {}
};

DefaultSlider.propTypes = {
	title: PropTypes.oneOfType( [
		PropTypes.string,
		PropTypes.node
	] ),
	dots: PropTypes.bool,
	fade: PropTypes.bool,
	draggable: PropTypes.bool,
	pagination: PropTypes.oneOf([
		'top',
		'bottom',
		'both'
	]),
	goto: PropTypes.number,
	infinite: PropTypes.bool,
	interval: PropTypes.number,
	swipe: PropTypes.bool,
	style: PropTypes.object,
	onClick: PropTypes.func
};


// EXPORTS //

export default withTranslation( 'slider' )( withPropCheck( DefaultSlider ) );
