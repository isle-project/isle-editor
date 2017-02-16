// MODULES //

import React, { PropTypes } from 'react';
import Input from 'components/input';
import PINF from '@stdlib/math/constants/float64-pinf';
import NINF from '@stdlib/math/constants/float64-ninf';


// MAIN //

class NumberInput extends Input {

	constructor( props ) {
		super( props );

		this.handleChange = ( event ) => {
			let value = event.target.value;
			value = value.replace( /^0+/, '' );
			const { max, min } = this.props;
			if (
				( min === null || value >= min || min > 0 ) &&
				( max === null || value <= max )
			) {
				if ( value === '' ) {
					value = 0;
				}
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
				/>
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
