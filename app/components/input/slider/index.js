// MODULES //

import React from 'react';
import PropTypes from 'prop-types';
import Input from 'components/input/base';
import roundn from '@stdlib/math/base/special/roundn';
import isEmptyObject from '@stdlib/assert/is-empty-object';
import './slider.css';


// MAIN //

class SliderInput extends Input {

	constructor( props, context ) {
		super( props );

		const { session } = context;
		this.state = {
			value: !props.bind ?
				props.defaultValue :
				session.config.state[ props.bind ]
		};

		this.handleInputChange = ( event ) => {
			const valid = event.target.validity.valid;
			let value = event.target.value;
			this.setState({
				value
			}, () => {
				console.log( value );
				if ( valid && value !== '' ) {
					value = parseFloat( value );
					this.props.onChange( value );
					if ( this.props.bind ) {
						global.lesson.setState({
							[ this.props.bind ]: value
						}, () => {
							if ( this.context.autoUpdate ) {
								this.context.triggerDashboardClick();
							}
						});
					} else {
						if ( this.context.autoUpdate ) {
							this.context.triggerDashboardClick();
						}
					}
				} else {
					if ( this.props.bind ) {
						global.lesson.setState({
							[ this.props.bind ]: value
						});
					}
				}
			});
		};

		this.finishChange = ( event ) => {
			const { max, min, step } = this.props;
			let value = event.target.value;
			if ( value !== '' ) {
				value = parseFloat( value );
			}
			if ( value > max ) {
				value = max;
			}
			else if ( value < min ) {
				value = min;
			}
			else if ( step == 1.0 && value !== '' ) {
				value = value - value % this.props.step;
			}
			if ( value !== this.state.value ) {
				this.setState({
					value
				}, () => {
					this.props.onChange( value );
					if ( this.props.bind ) {
						global.lesson.setState({
							[ this.props.bind ]: value
						}, () => {
							if ( this.context.autoUpdate ) {
								this.context.triggerDashboardClick();
							}
						});
					} else {
						if ( this.context.autoUpdate ) {
							this.context.triggerDashboardClick();
						}
					}
				});
			}
		};
	}

	componentDidUpdate() {
		if ( this.props.bind ) {
			let globalVal = global.lesson.state[ this.props.bind ];
			if ( globalVal !== this.state.value ) {
				this.setState({
					value: globalVal
				});
			}
		}
	}

	componentWillReceiveProps( nextProps ) {
		let newState = {};
		if ( nextProps.defaultValue !== this.props.defaultValue ) {
			newState.value = nextProps.defaultValue;
		} else if ( nextProps.bind !== this.props.bind ) {
			newState.value = global.lesson.state[ nextProps.bind ];
		}
		if ( !isEmptyObject( newState ) ) {
			this.setState( newState );
		}
	}

	render() {
		let { value } = this.state;
		if ( value !== '' ) {
			roundn( value, ( -1.0 )*this.props.precision );
		}
		const rangeInput = <input
			type="range"
			min={this.props.min}
			max={this.props.max}
			step={this.props.step}
			style={{
				width: '50%',
				marginBottom: '4px',
				marginLeft: '8px',
				float: 'left'
			}}
			value={value}
			onChange={this.handleInputChange}
		/>;
		const numberInput = <input
			type="number"
			name="input"
			style={{
				width: '80px',
				marginRight: '8px',
				marginBottom: '4px',
				paddingLeft: '16px',
				paddingRight: '4px',
				background: 'rgb(186, 204, 234)',
				border: 'solid 1px darkgrey',
				borderRadius: '2px',
				textAlign: 'center',
				float: 'right',
			}}
			min={this.props.min}
			max={this.props.max}
			step={this.props.step}
			value={value}
			onChange={this.handleInputChange}
			onBlur={this.finishChange}
		/>;

		if ( this.props.inline ) {
			return (
				<span style={{
					padding: '5px'
				}}>
					<label>{this.props.legend}:</label>
					{rangeInput}
					{numberInput}
				</span>
			);
		}
		return (
			<div className="slider-outer-div">
				<label style={{
					marginLeft: '8px',
				}}>{this.props.legend}:</label>
				<br />
				{rangeInput}
				{numberInput}
				<br />
			</div>
		);
	}
}


// DEFAULT PROPERTIES //

SliderInput.defaultProps = {
	inline: false,
	min: 0,
	max: 100,
	step: 1,
	defaultValue: 10,
	onChange() {},
	precision: 10
};


// PROPERTY TYPES //

SliderInput.propTypes = {
	inline: PropTypes.bool,
	min: PropTypes.number,
	max: PropTypes.number,
	precision: PropTypes.number,
	step: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	]),
	defaultValue: PropTypes.number,
	onChange: PropTypes.func
};


// CONTEXT TYPES //

SliderInput.contextTypes = {
	triggerDashboardClick: PropTypes.func,
	autoUpdate: PropTypes.bool,
	session: PropTypes.object
};


// EXPORTS //

export default SliderInput;
