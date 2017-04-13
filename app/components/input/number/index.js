// MODULES //

import React from 'react';
import PropTypes from 'prop-types';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import Input from 'components/input';
import isEmptyObject from '@stdlib/utils/is-empty-object';
import PINF from '@stdlib/math/constants/float64-pinf';
import NINF from '@stdlib/math/constants/float64-ninf';


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

	constructor( props ) {
		super( props );

		this.state = {
			showTooltip: false,
			value: props.defaultValue,
			tooltip: this.createTooltip( props )
		};

		this.handleChange = ( event ) => {
			const valid = event.target.validity.valid;
			let value = event.target.value;
			this.setState({
				value
			}, () => {
				if ( valid && value !== '' ) {
					value = parseFloat( value );
					this.props.onChange( value );
					if ( this.context.autoUpdate ) {
						this.context.triggerDashboardClick();
					}
				}
			});
		};

		this.finishChange = ( event ) => {
			const { defaultValue, max, min, step } = this.props;
			let value = event.target.value;
			if ( value === '' ) {
				value = defaultValue;
			}
			value = parseFloat( value );
			if ( value > max ) {
				value = max;
			}
			else if ( value < min ) {
				value = min;
			}
			else if ( step == 1.0 ) {
				value = value - value % this.props.step;
			}
			if ( value !== this.state.value ) {
				this.setState({
					value
				}, () => {
					this.props.onChange( value );
					if ( this.context.autoUpdate ) {
						this.context.triggerDashboardClick();
					}
				});
			}
		};
	}

	componentWillReceiveProps( nextProps ) {
		let newState = {};
		if ( nextProps.defaultValue !== this.props.defaultValue ) {
			newState.value = nextProps.defaultValue;
		}
		if ( nextProps.min !== this.props.min || nextProps.max !== this.props.max ) {
			newState.tooltip = this.createTooltip( nextProps );
		}
		if ( !isEmptyObject( newState ) ) {
			this.setState( newState );
		}
	}

	render() {

		if ( this.props.inline === true ) {
			return (
				<span style={{ padding: '5px' }}>
					{ this.props.legend ? <label> {this.props.legend} =  </label> : null }
					<OverlayTrigger placement="top" overlay={<Tooltip id='inlineTooltip'>{this.state.tooltip}
					</Tooltip>}>
						<input
							type="number"
							name="input"
							value={this.state.value}
							step={this.props.step}
							min={this.props.min}
							max={this.props.max}
							style={{
								paddingLeft: '2px',
								width: '75px'
							}}
							onChange={this.handleChange}
							onBlur={this.finishChange}
						/>
					</OverlayTrigger>
					{ this.props.description ?
						<span>({this.props.description})</span> :
						<span />
					}
				</span>
			);
		}

		let input = <input
			type="number"
			name="input"
			disabled={this.props.disabled}
			value={this.state.value}
			step={this.props.step}
			min={this.props.min}
			max={this.props.max}
			style={{
				marginRight: '8px',
				paddingLeft: '16px',
				paddingRight: '4px',
				border: 'solid 1px darkgrey',
				borderRadius: '2px',
				background: 'gold',
				width: '80px',
				textAlign: 'center',
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
					<label>{this.props.legend}:</label>
					{ this.props.description ?
						<span> {this.props.description}</span> :
						<span />
					}
				</span>
				{this.props.disabled ?
					input:
					<OverlayTrigger placement="left" overlay={<Tooltip id='standardTooltip'>{this.state.tooltip}</Tooltip>}>
						{input}
					</OverlayTrigger>
				}
			</div>
		);
	}
}


// DEFAULT PROPERTIES //

NumberInput.defaultProps = {
	disabled: false,
	min: NINF,
	max: PINF,
	step: 1,
	defaultValue: 0,
	onChange(){},
	inline: false
};


// PROPERTY TYPES //

NumberInput.propTypes = {
	disabled: PropTypes.bool,
	min: PropTypes.number,
	max: PropTypes.number,
	step: PropTypes.number,
	defaultValue: PropTypes.number,
	onChange: PropTypes.func,
	inline: PropTypes.bool
};

// CONTEXT TYPES //

NumberInput.contextTypes = {
	triggerDashboardClick: PropTypes.func,
	autoUpdate: PropTypes.bool
};


// EXPORTS //

export default NumberInput;
