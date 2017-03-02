// MODULES //

import React, { PropTypes } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import Input from 'components/input';
import PINF from '@stdlib/math/constants/float64-pinf';
import NINF from '@stdlib/math/constants/float64-ninf';


// MAIN //

class NumberInput extends Input {

	constructor( props ) {
		super( props );

		let tooltip = `Enter a${ props.step === 1 ? 'n integer' : ' number'} `;
		if ( props.max !== PINF && props.min !== NINF ) {
			tooltip += `between ${props.min} and ${props.max}:`;
		} else if ( props.min !== NINF ) {
			tooltip += `larger than ${props.min}:`;
		} else if ( props.max !== PINF ) {
			tooltip += `smaller than ${props.max}:`;
		} else {
			tooltip += ':';
		}

		this.state = {
			showTooltip: false,
			value: props.defaultValue,
			tooltip: tooltip
		};

		this.handleChange = ( event ) => {
			let value = event.target.value;
			value = value.replace( /^0+/, '' );

			const { max, min, step } = this.props;
			if (
				value !== '' &&
				( min === NINF || value >= min ) &&
				( max === PINF || value <= max ) &&
				( value % step === 0 )
			) {
				this.setState({
					value
				}, () => {
					this.props.onChange( value );
					if ( this.context.autoUpdate ) {
						this.context.triggerDashboardClick();
					}
				});
			} else {
				this.setState({
					value
				});
			}
		};

		this.finishChange = ( event ) => {
			let value = event.target.value;
			const { defaultValue, max, min } = this.props;

			if ( value === '' ) {
				value = defaultValue;
			}
			else if ( value > max ) {
				value = max;
			}
			else if ( value < min ) {
				value = min;
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
		if ( nextProps.defaultValue !== this.props.defaultValue ) {
			this.setState({
				value: nextProps.defaultValue
			});
		}
	}

	render() {

		if ( this.props.inline === true ) {
			return (
				<span style={{ padding: '5px' }}>
					{ this.props.legend ? <label> {this.props.legend} = </label> : null }
					<OverlayTrigger placement="top" overlay={<Tooltip>{this.state.tooltip}
					</Tooltip>}>
						<input
							type="number"
							name="input"
							defaultValue={this.props.defaultValue}
							value={this.state.value}
							step={this.props.step}
							min={this.props.min}
							max={this.props.max}
							style={{
								paddingLeft: '2px',
								width: '75px'
							}}
							onChange={this.handleChange}
						/>
					</OverlayTrigger>
					{ this.props.description ?
						<span>({this.props.description})</span> :
						<span />
					}
				</span>
			);
		}

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
				<OverlayTrigger placement="left" overlay={<Tooltip>{this.state.tooltip}</Tooltip>}>
					<input
						type="number"
						name="input"
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
					/>
				</OverlayTrigger>
			</div>
		);
	}
}


// DEFAULT PROPERTIES //

NumberInput.defaultProps = {
	min: NINF,
	max: PINF,
	step: 1,
	defaultValue: 0,
	onChange(){},
	inline: false
};


// PROPERTY TYPES //

NumberInput.propTypes = {
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
