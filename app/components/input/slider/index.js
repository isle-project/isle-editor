// MODULES //

import React, { PropTypes } from 'react';
import Input from 'components/input';


// SLIDER INPUT //

class SliderInput extends Input {

	constructor( props ) {
		super( props );

		this.handleInputChange = ( event ) => {
			const value = event.target.value;
			const { min, max } = this.props;

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
		return (
			<div style={{
				marginBottom: '4px',
				marginTop: '4px',
				clear: 'both'
			}}>
				<label style={{
					marginLeft: '8px',
				}}>{this.props.legend}:</label>
				<br />
				<input
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
					value={this.state.value}
					onChange={this.handleInputChange}
				/>
				<input
					type="number"
					name="input"
					style={{
						width: '80px',
						marginRight: '8px',
						marginBottom: '4px',
						paddingLeft: '16px',
						paddingRight: '4px',
						background: 'gold',
						border: 'solid 1px darkgrey',
						borderRadius: '2px',
						textAlign: 'center',
						float: 'right',
					}}
					min={this.props.min}
					max={this.props.max}
					step={this.props.step}
					defaultValue={this.props.defaultValue}
					value={this.props.fractionDigits ?
						parseFloat( this.state.value ).toFixed( this.props.fractionDigits ) :
						this.state.value
					}
					onChange={this.handleInputChange}
				/>
				<br />
			</div>
		);
	}
}


// DEFAULT PROPERTIES //

SliderInput.defaultProps = {
	min: 0,
	max: 100,
	step: 1,
	defaultValue: 10,
	onChange() {},
	fractionDigits: null
};


// PROPERTY TYPES //

SliderInput.propTypes = {
	min: PropTypes.number,
	max: PropTypes.number,
	step: PropTypes.number,
	defaultValue: PropTypes.number,
	onChange: PropTypes.func,
	fractionDigits: PropTypes.number
};


// CONTEXT TYPES //

SliderInput.contextTypes = {
	triggerDashboardClick: PropTypes.func,
	autoUpdate: PropTypes.bool
};


// EXPORTS //

export default SliderInput;
