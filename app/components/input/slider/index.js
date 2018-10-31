// MODULES //

import React from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import Input from 'components/input/base';
import Tooltip from 'components/tooltip';
import roundn from '@stdlib/math/base/special/roundn';
import isEmptyObject from '@stdlib/assert/is-empty-object';
import PINF from '@stdlib/constants/math/float64-pinf';
import NINF from '@stdlib/constants/math/float64-ninf';
import SessionContext from 'session/context.js';
import './slider.css';


// VARIABLES //

const debug = logger( 'isle:slider-input' );


// FUNCTIONS //

function createTooltip( props ) {
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


// MAIN //

/**
* A slider input component. Can be used as part of an ISLE dashboard or standalone. In the latter case, you want to handle changes via the `onChange` attribute or bind the value to a global variable via the `bind` attribute.
*
* @property {string} legend - caption of the input
* @property {number} defaultValue - The starting value of the slider
* @property {number} min - The minimum value of the slider
* @property {number} max - The maximum value of the slider
* @property {(number|string)} step - step size of the slider
* @property {boolean} inline - controls whether to place the slider inline with text or outside
* @property {number} precision - rounding of the input. The value will be rounded to have no more significant digits than the precision. For example, if one wishes to only use integers, a precision of 10 would be used, while if one wishes to round to the hundreds place, one would use a precision of 0.001
* @property {boolean} disabled - controls whether the slider input is active or not. If set to true, the slider will be present on the screen, albeit greyed-out
* @property {Object} style - CSS inline styles
* @property {Function} onChange - callback invoked with the new value when the slider value changes
*/
class SliderInput extends Input {
	constructor( props, context ) {
		super( props );

		const session = context;
		this.state = {
			tooltip: createTooltip( props ),
			value: props.bind && session.state ?
				session.state[ props.bind ]:
				props.defaultValue
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
			newState.tooltip = createTooltip( nextProps );
		}
		if ( !isEmptyObject( newState ) ) {
			this.setState( newState );
		}
	}

	finishChange = ( event ) => {
		debug( 'Finalizing change...' );
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
		debug( `Setting state value to: ${value}...` );
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
	}

	handleInputChange = ( event ) => {
		const valid = event.target.validity.valid;
		let value = event.target.value;
		debug( `Input value changed to ${value}` );
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
		const numberInput = <input
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
		/>;

		if ( this.props.inline ) {
			return (
				<span className="input" style={{
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
			<Tooltip
				id="inlineTooltip"
				placement="top"
				tooltip={this.props.disabled ? 'The slider input is disabled right now.' : this.state.tooltip}
			>
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
			</Tooltip>
		);
	}
}


// PROPERTIES //

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

SliderInput.propTypes = {
	defaultValue: PropTypes.number,
	disabled: PropTypes.bool,
	inline: PropTypes.bool,
	legend: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node
	]),
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

SliderInput.contextType = SessionContext;


// EXPORTS //

export default SliderInput;
