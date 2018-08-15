// MODULES //

import React from 'react';
import PropTypes from 'prop-types';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Tooltip from 'react-bootstrap/lib/Tooltip';
import Input from 'components/input/base';
import roundn from '@stdlib/math/base/special/roundn';
import isEmptyObject from '@stdlib/assert/is-empty-object';
import PINF from '@stdlib/constants/math/float64-pinf';
import NINF from '@stdlib/constants/math/float64-ninf';
import './slider.css';


// MAIN //

class SliderInput extends Input {
	createTooltip( props ) {
		let tooltip = `Enter a${ props.step === 1 ? 'n integer' : ' number'} `;
		if ( props.max !== PINF && props.min !== NINF ) {
			tooltip += `between ${props.min} and ${props.max}:`;
		} else if ( props.min !== NINF ) {
			tooltip += `larger or equal to ${props.min}:`;
		} else if ( props.max !== PINF ) {
			tooltip += `smaller or equal to ${props.max}:`;
		} else {
			tooltip += ':';
		}
		return tooltip;
	}

	constructor( props, context ) {
		super( props );

		const { session } = context;
		this.state = {
			tooltip: this.createTooltip( props ),
			value: props.bind && session.state ?
				session.state[ props.bind ]:
				props.defaultValue
		};

		this.handleInputChange = ( event ) => {
			const valid = event.target.validity.valid;
			let value = event.target.value;
			this.setState({
				value
			}, () => {
				if ( valid && value !== '' ) {
					value = parseFloat( value );
					this.props.onChange( value );
					if ( this.props.bind ) {
						global.lesson.setState({
							[ this.props.bind ]: value
						});
					}
				} else if ( this.props.bind ) {
					global.lesson.setState({
						[ this.props.bind ]: value
					});
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
			else if ( step === 1.0 && value !== '' ) {
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
						});
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
		if ( nextProps.min !== this.props.min || nextProps.max !== this.props.max ) {
			newState.tooltip = this.createTooltip( nextProps );
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
			className="slider-range-input"
			min={this.props.min}
			max={this.props.max}
			step={this.props.step}
			value={value}
			disabled={this.props.disabled}
			onChange={this.handleInputChange}
			style={{
				width: this.props.width || '160px',
				float: this.props.inline ? 'none' : 'left',
				display: this.props.inline ? 'inline' : 'block'
			}}
		/>;
		const numberInput = <OverlayTrigger
			placement="top"
			overlay={
				<Tooltip id='inlineTooltip'>
					{ this.props.disabled ? 'The slider input is disabled right now.' : this.state.tooltip}
				</Tooltip>
			}
		>
			<input
				type="number"
				name="input"
				className="slider-number-input"
				disabled={this.props.disabled}
				min={this.props.min}
				max={this.props.max}
				step={this.props.step}
				value={value}
				onChange={this.handleInputChange}
				onBlur={this.finishChange}
				style={{
					float: this.props.inline ? 'none' : 'right'
				}}
			/>
		</OverlayTrigger>;

		if ( this.props.inline ) {
			return (
				<span style={{
					padding: '5px',
					opacity: this.props.disabled ? 0.2 : 1.0,
					...this.props.style
				}}>
					{ this.props.legend ?
						<label>{this.props.legend}:</label> :
						null
					}
					{rangeInput}
					{numberInput}
				</span>
			);
		}
		return (
			<div
				className="slider-outer-div"
				style={{
					opacity: this.props.disabled ? 0.2 : 1.0,
					...this.props.style
				}}
			>
				{ this.props.legend ?
					<label style={{
						marginLeft: '8px'
					}}>{this.props.legend}:</label> :
					null
				}
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
	legend: null,
	min: 0,
	max: 100,
	step: 1,
	defaultValue: 10,
	onChange() {},
	precision: 10,
	disabled: false,
	style: {}
};


// PROPERTY TYPES //

SliderInput.propTypes = {
	defaultValue: PropTypes.number,
	disabled: PropTypes.bool,
	inline: PropTypes.bool,
	max: PropTypes.number,
	min: PropTypes.number,
	onChange: PropTypes.func,
	precision: PropTypes.number,
	step: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	]),
	style: PropTypes.object
};


// CONTEXT TYPES //

SliderInput.contextTypes = {
	session: PropTypes.object
};


// EXPORTS //

export default SliderInput;
