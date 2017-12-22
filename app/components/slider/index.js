// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Panel } from 'react-bootstrap';
import Slider from 'react-slick';
import NextArrow from './next_arrow';
import PrevArrow from './previous_arrow';


// MAIN //

class DefaultSlider extends Component {
	constructor( props ) {
		super( props );
		const childDivs = props.children && props.children.length > 0 ?
			React.Children.map( props.children, child => <div> {child} </div> ) :
			<div></div>;
		this.state = {
			childDivs
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

	render() {
		const settings = {
			className: 'center',
			speed: 1000,
			slidesToShow: 1,
			slidesToScroll: 1,
			prevArrow: <PrevArrow onClick={this.props.onClick} />,
			nextArrow: <NextArrow onClick={this.props.onClick} />,
			...this.props
		};
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
				header={<h3>{this.props.title}</h3>}
			>
				<Slider ref={( slider ) => { this.slider = slider; }} {...settings}>
					{ this.state.childDivs }
				</Slider>
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
	onClick: PropTypes.func,
	style: PropTypes.object,
	swipeToSlide: PropTypes.bool,
	title: PropTypes.string
};


// EXPORTS //

export default DefaultSlider;
