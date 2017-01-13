// MODULES //

import React, { PropTypes } from 'react';
import Input from 'components/input';


// MAIN //

class NumberInput extends Input {

	constructor( props ) {
		super( props );

		this.handleChange = ( event ) => {
			const value = event.target.value;
			const { max, min } = this.props;

			if (
				( min === null || value >= min || min > 0 ) &&
				( max === null || value <= max )
			) {
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

	render() {

		if ( this.props.inline === true ) {
			return (
				<span style={{ padding: '5px' }}>
					<label> {this.props.legend} = </label>
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
					defaultValue={this.props.defaultValue}
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
						float: 'right'
					}}
					onChange={this.handleChange}
				/>
			</div>
		);
	}
}


// DEFAULT PROPERTIES //

NumberInput.defaultProps = {
	min: 0,
	max: 100,
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
