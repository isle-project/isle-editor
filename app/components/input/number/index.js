// MODULES //

import React from 'react';
import PropTypes from 'prop-types';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Tooltip from 'react-bootstrap/lib/Tooltip';
import Input from 'components/input/base';
import contains from '@stdlib/assert/contains';
import isString from '@stdlib/assert/is-string';
import isEmptyObject from '@stdlib/assert/is-empty-object';
import PINF from '@stdlib/constants/math/float64-pinf';
import NINF from '@stdlib/constants/math/float64-ninf';
import './number.css';


// MAIN //

class NumberInput extends Input {
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
			value: props.value || (props.bind && session.state ?
				session.state[ props.bind ]:
				props.defaultValue),
			tooltip: this.createTooltip( props )
		};

		this.handleChange = ( event ) => {
			let valid = event.target.validity.valid;
			let value = event.target.value;
			this.setState({
				value
			}, () => {
				if (this.props.value || (valid && value !== '' && 
					value !== '-' && value !== '.' && value !== '-.')
				) {
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
			if ( contains( value, '/' ) ) {
				let vals = value.split( '/' );
				if ( vals[ 0 ] !== '' && vals[ 1 ] !== '' ) {
					value = parseFloat( vals[ 0 ]) / parseFloat( vals[ 1 ]);
				}
			}
			if (
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
			if ( value !== this.state.value ) {
				this.setState({
					value
				}, () => {
					this.props.onChange( value );
					this.props.onBlur( value );
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
		}
		else if ( nextProps.bind !== this.props.bind ) {
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
		if ( this.props.value ) {
			value = this.props.value;	
		}
		if ( this.props.inline === true ) {
			let input =
				<span style={{ padding: '5px' }}>
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
							paddingLeft: '2px',
							marginLeft: '3px',
							width: this.props.width
						}}
						onChange={this.handleChange}
						onBlur={this.finishChange}
					/>
					{ this.props.description ?
						<span>({this.props.description})</span> :
						<span />
					}
				</span>;
			return this.props.disabled ?
				input:
				<OverlayTrigger placement="top" overlay={<Tooltip id='numberInputTooltip'>{this.state.tooltip}</Tooltip>}>
					{input}
				</OverlayTrigger>;
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
				marginRight: '8px',
				paddingLeft: '16px',
				paddingRight: '4px',
				width: this.props.width,
				textAlign: 'left',
				float: 'right',
				...this.props.style
			}}
			onChange={this.handleChange}
			onBlur={this.finishChange}
		/>;
		return (
			<div style={{
				marginBottom: '4px',
				marginTop: '4px',
				clear: 'both'
			}}>
				<span style={{
					marginLeft: '8px'
				}}>
					<label>
						{isString( this.props.legend ) ?
							this.props.legend+':' :
							this.props.legend
						}
					</label>
					{ this.props.description ?
						<span> {this.props.description}</span> :
						<span />
					}
				</span>
				{this.props.disabled ?
					input:
					<OverlayTrigger placement="top" overlay={<Tooltip id='numberInputTooltip'>{this.state.tooltip}</Tooltip>}>
						{input}
					</OverlayTrigger>
				}
			</div>
		);
	}
}


// DEFAULT PROPERTIES //

NumberInput.defaultProps = {
	bind: '',
	disabled: false,
	min: NINF,
	max: PINF,
	step: 1,
	width: 80,
	defaultValue: 0,
	onBlur() {},
	onChange() {},
	inline: false,
	numbersOnly: true,
	value: null
};


// PROPERTY TYPES //

NumberInput.propTypes = {
	bind: PropTypes.string,
	defaultValue: PropTypes.number,
	disabled: PropTypes.bool,
	inline: PropTypes.bool,
	max: PropTypes.number,
	min: PropTypes.number,
	numbersOnly: PropTypes.bool,
	onBlur: PropTypes.func,
	onChange: PropTypes.func,
	step: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	]),
	width: PropTypes.number,
	value: PropTypes.number
};


// CONTEXT TYPES //

NumberInput.contextTypes = {
	session: PropTypes.object
};


// EXPORTS //

export default NumberInput;
