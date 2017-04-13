// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Panel } from 'react-bootstrap';
import Slider from 'react-slick';


// VARIABLES //

const RE = /disabled/;


// COMPONENTS //

class NextArrow extends Component {
	render() {
		const disabled = RE.test( this.props.className );
		return (
			<Button
				bsSize="small"
				onClick={this.props.onClick}
				style={{
					position: 'absolute',
					display: 'block',
					right: '-10px',
					bottom: '-25px',
					zIndex: 100
				}}
				disabled={disabled}
			>Next</Button>
		);
	}
}

class PrevArrow extends Component {
	render() {
		const disabled = RE.test( this.props.className );
		return (
			<Button
				bsSize="small"
				onClick={this.props.onClick}
				style={{
					position: 'absolute',
					display: 'block',
					left: '-10px',
					bottom: '-25px',
					zIndex: 100
				}}
				disabled={disabled}
			>Previous</Button>
		);
	}
}



// DEFAULT SLIDER //

class DefaultSlider extends Component {

	constructor( props ) {
		super( props );

		let childDivs = props.children && props.children.length > 0 ?
			React.Children.map( props.children, child => <div> {child} </div> ) :
			<div></div>;

		this.state = {
			childDivs
		};
	}

	componentDidMount() {
		this.refs.slider.slickGoTo( this.props.goto );
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
			this.refs.slider.slickGoTo( nextProps.goto );
		}
	}

	render() {
		const settings = {
			className: 'center',
			speed: 1000,
			slidesToShow: 1,
			slidesToScroll: 1,
			prevArrow: <PrevArrow />,
			nextArrow: <NextArrow />,
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
					height: '100%'
				}}
				header={<h4>{this.props.title}</h4>}
			>
				<Slider ref='slider' {...settings}>
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
	swipeToSlide: PropTypes.bool,
	title: PropTypes.string
};


// EXPORTS //

export default DefaultSlider;
