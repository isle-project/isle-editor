// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Panel from 'react-bootstrap/lib/Panel';
import Slider from 'react-slick';
import NextArrow from './next_arrow';
import PrevArrow from './previous_arrow';
import './slick-theme.min.css';
import './slick.min.css';


// MAIN //

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

		if (props.interval) {
			settings.autoplay = true;
			settings.autoplaySpeed = props.interval;
		}

		this.state = {
			childDivs,
			settings

		};
	}

	componentDidMount() {
		this.slider.slickGoTo( this.props.goto );
	}

	componentWillReceiveProps( nextProps ) {
		if ( nextProps.children !== this.props.children ) {
			let childDivs = nextProps.children && nextProps.children.length > 0 ?
				React.Children.map( nextProps.children, child => <div> {child} </div> ) :
				<div></div>;
			this.setState({
				childDivs
			});
		}
		if ( nextProps.goto !== this.props.goto ) {
			this.slider.slickGoTo( nextProps.goto );
		}
	}

	renderTitle() {
		if (this.props.title === '') return null;
		return (
			<Panel.Heading>
				<Panel.Title componentClass="h3">
					{this.props.title}
				</Panel.Title>
			</Panel.Heading>
		);
	}

	render() {
		return (
			<Panel
				bsSize="large"
				style={{
					margin: '0 auto',
					marginTop: '5px',
					marginBottom: '5px',
					paddingBottom: '20px',
					width: '100%',
					height: '100%',
					...this.props.style
				}}
			>
				{this.renderTitle()}
				<Panel.Body>
					<Slider ref={( slider ) => { this.slider = slider; }} {...this.state.settings}>
						{ this.state.childDivs }
					</Slider>
				</Panel.Body>
			</Panel>
		);
	}
}


// DEFAULT PROPERTIES //

DefaultSlider.defaultProps = {
	dots: true,
	draggable: true,
	fade: false,
	goto: 0,
	infinite: false,
	interval: null,
	onClick() {},
	style: {},
	swipeToSlide: true,
	title: ''
};


// PROPERTY TYPES //

DefaultSlider.propTypes = {
	dots: PropTypes.bool,
	draggable: PropTypes.bool,
	fade: PropTypes.bool,
	goto: PropTypes.number,
	infinite: PropTypes.bool,
	interval: PropTypes.number,
	onClick: PropTypes.func,
	style: PropTypes.object,
	swipeToSlide: PropTypes.bool,
	title: PropTypes.string
};


// EXPORTS //

export default DefaultSlider;
