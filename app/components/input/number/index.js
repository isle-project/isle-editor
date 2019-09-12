// MODULES //

import React from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import Input from 'components/input/base';
import contains from '@stdlib/assert/contains';
import isnan from '@stdlib/math/base/assert/is-nan';
import { isPrimitive as isString } from '@stdlib/assert/is-string';
import isEmptyObject from '@stdlib/assert/is-empty-object';
import PINF from '@stdlib/constants/math/float64-pinf';
import NINF from '@stdlib/constants/math/float64-ninf';
import Tooltip from 'components/tooltip';
import SessionContext from 'session/context.js';
import './number.css';


// VARIABLES //

const debug = logger( 'isle:number-input' );


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
* A number input component. Can be used as part of an ISLE dashboard or standalone. In the latter case, you want to handle changes via the `onChange` attribute or bind the value to a global variable via the `bind` attribute.
*
* @property {string} bind - name of global variable for the number to be assigned to
* @property {number} value - number value (for controlled component)
* @property {number} defaultValue - value indicating the default value of the input at startup
* @property {boolean} disabled - boolean indicating whether the input is active or not
* @property {number} min - number indicating the smallest possible value that may be inserted
* @property {number} max - number indicating the maximum value that may be inserted
* @property {(number|string)} step - number indicating the incremental changes when using the increment arrows
* @property {number} width - number indicating the width of the input bar in pixels
* @property {boolean} inline - indicates whether the input is displayed inline
* @property {string} legend - string indicating the text displayed next to the number input
* @property {boolean} numbersOnly - controls whether only numbers are accepted
* @property {string} tooltipPlacement - direction of the tooltip
* @property {Object} style - CSS inline styles
* @property {Function} onBlur - callback function to be invoked when using a blur method
* @property {Function} onChange - callback function to be invoked when number input is changed
* @property {Function} onKeyPress - callback function to be invoked when any key is entered
* @property {Function} onKeyDown - callback function to be invoked when any key is pressed down
* @property {Function} onKeyUp - callback function to be invoked when key is released
*/
class NumberInput extends Input {
	constructor( props, context ) {
		super( props );

		const session = context;
		this.state = {
			value: props.value || (props.bind && session.state ?
				session.state[ props.bind ]:
				props.defaultValue),
			tooltip: createTooltip( props ),
			prevProps: props
		};
	}

	static getDerivedStateFromProps( nextProps, prevState ) {
		let newState = {};
		const { prevProps } = prevState;
		if ( nextProps.defaultValue !== prevProps.defaultValue ) {
			newState.value = nextProps.defaultValue;
		}
		else if ( nextProps.bind !== prevProps.bind ) {
			newState.value = global.lesson.state[ nextProps.bind ];
		}
		if ( nextProps.min !== prevProps.min || nextProps.max !== prevProps.max ) {
			newState.tooltip = createTooltip( nextProps );
		}
		if ( !isEmptyObject( newState ) ) {
			debug( 'Created new state from props...' );
			newState.prevProps = nextProps;
			return newState;
		}
		return null;
	}

	componentDidUpdate() {
		debug( 'Component did update...' );
		if ( this.props.bind ) {
			let globalVal = global.lesson.state[ this.props.bind ];
			if ( globalVal !== this.state.value ) {
				this.setState({
					value: globalVal
				});
			}
		}
	}

	handleChange = ( event ) => {
		debug( 'Handle change of input field...' );
		let valid = event.target.validity.valid;
		let value = event.target.value;
		this.setState({
			value
		}, () => {
			if ( this.props.value ||
				(valid && value !== '' &&
				value !== '-' && value !== '.' && value !== '-.' )
			) {
				value = parseFloat( value );
				if ( isnan( value ) ) {
					value = '';
				}
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

	finishChange = ( event ) => {
		const { max, min, step } = this.props;
		debug( 'Finished change...' );
		let value = event.target.value;
		if ( contains( value, '/' ) ) {
			debug( 'Encountered a fraction...' );
			let vals = value.split( '/' );
			if ( vals[ 0 ] !== '' && vals[ 1 ] !== '' ) {
				value = parseFloat( vals[ 0 ]) / parseFloat( vals[ 1 ]);
			}
		}
		if ( isnan( value ) ) {
			value = '';
		}
		else if (
			value !== '' && value !== '-' &&
			value !== '.' && value !== '-.'
		) {
			value = parseFloat( value );
		}
		if ( value > max ) {
			value = max;
		}
		else if ( value < min ) {
			value = min;
		}
		else if (
			step === 1.0 && value !== '' &&
			value !== '-' && value !== '.' && value !== '-.'
		) {
			value = value - value % this.props.step;
		}
		this.props.onChange( value );
		this.props.onBlur( value );
		if ( value !== this.state.value ) {
			this.setState({
				value
			}, () => {
				if ( this.props.bind ) {
					global.lesson.setState({
						[ this.props.bind ]: value
					});
				}
			});
		}
	}

	render() {
		let { value } = this.state;
		if ( this.props.value ) {
			value = this.props.value;
		}
		if ( this.props.inline === true ) {
			const input =
				<span className="input" style={{ padding: '5px', ...this.props.style }}>
					{ this.props.legend ? <label> {this.props.legend} =  </label> : null }
					<input
						type={this.props.numbersOnly ? 'number' : 'text'}
						name="input"
						className="number-number-input"
						disabled={this.props.disabled}
						value={value}
						step={this.props.step}
						min={this.props.min}
						max={this.props.max}
						style={{
							paddingLeft: '6px',
							marginLeft: '3px',
							width: this.props.width
						}}
						onChange={this.handleChange}
						onBlur={this.finishChange}
						onKeyPress={this.props.onKeyPress}
						onKeyDown={this.props.onKeyDown}
						onKeyUp={this.props.onKeyUp}
						autoComplete="off"
					/>
					{ this.props.description ?
						<span>({this.props.description})</span> :
						<span />
					}
				</span>;
			return this.props.disabled ?
				input:
				<Tooltip id="number-input-tooltip-inline" placement="top" tooltip={this.state.tooltip} >
					{input}
				</Tooltip>;
		}
		let input = <input
			type={this.props.numbersOnly ? 'number' : 'text'}
			name="input"
			className="number-number-input"
			disabled={this.props.disabled}
			value={value}
			step={this.props.step}
			min={this.props.min}
			max={this.props.max}
			style={{
				width: this.props.width,
				marginLeft: '24px'
			}}
			onChange={this.handleChange}
			onBlur={this.finishChange}
			onKeyPress={this.props.onKeyPress}
			onKeyDown={this.props.onKeyDown}
			onKeyUp={this.props.onKeyUp}
			autoComplete="off"
		/>;
		return ( <div className="input" style={{
			marginBottom: '4px',
			marginTop: '4px',
			...this.props.style
		}}>
			{ this.props.legend ?
				<span>
					<label style={{ padding: '3px' }}>
						{isString( this.props.legend ) ?
							this.props.legend+':' :
							this.props.legend
						}
					</label>
					{ this.props.description ?
						<span> {this.props.description}</span> :
						null
					}
				</span> : null
			}
			<Tooltip
				id="number-input-tooltip" placement={this.props.tooltipPlacement}
				tooltip={this.state.tooltip}
			><span className="input" >{input}</span></Tooltip>
		</div> );
	}
}


// PROPERTIES //

NumberInput.defaultProps = {
	bind: '',
	disabled: false,
	legend: null,
	min: NINF,
	max: PINF,
	step: 1,
	width: 80,
	defaultValue: 0,
	onBlur() {},
	onChange() {},
	onKeyDown() {},
	onKeyPress() {},
	onKeyUp() {},
	inline: false,
	numbersOnly: true,
	style: {},
	value: null,
	tooltipPlacement: 'right'
};

NumberInput.propTypes = {
	bind: PropTypes.string,
	defaultValue: PropTypes.number,
	disabled: PropTypes.bool,
	inline: PropTypes.bool,
	legend: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node
	]),
	max: PropTypes.number,
	min: PropTypes.number,
	numbersOnly: PropTypes.bool,
	onBlur: PropTypes.func,
	onChange: PropTypes.func,
	onKeyDown: PropTypes.func,
	onKeyPress: PropTypes.func,
	onKeyUp: PropTypes.func,
	step: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	]),
	style: PropTypes.object,
	value: PropTypes.number,
	width: PropTypes.number,
	tooltipPlacement: PropTypes.oneOf([ 'top', 'right', 'bottom', 'left' ])
};

NumberInput.contextType = SessionContext;


// EXPORTS //

export default NumberInput;
