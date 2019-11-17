// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputRange from 'react-input-range';
import round from '@stdlib/math/base/special/round';


// MAIN //

class FilterInputRange extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			currentValue: props.defaultValue,
			defaultValue: props.defaultValue
		};
	}

	static getDerivedStateFromProps( nextProps, prevState ) {
		if ( nextProps.defaultValue !== prevState.defaultValue ) {
			const newState = {
				currentValue: nextProps.defaultValue,
				defaultValue: nextProps.defaultValue
			};
			return newState;
		}
		return null;
	}

	render() {
		const { currentValue } = this.state;
		return ( <div className="input-range-wrapper" >
			<InputRange
				allowSameValues
				maxValue={this.props.maxValue}
				minValue={this.props.minValue}
				value={currentValue}
				onChange={( currentValue ) => {
					this.setState({ currentValue });
				}}
				onChangeComplete={( newValue ) => {
					this.props.onChange( newValue );
				}}
				formatLabel={( val ) => {
					return round( val );
				}}
			/>
		</div> );
	}
}


// PROPERTIES //

FilterInputRange.propTypes = {
	defaultValue: PropTypes.object.isRequired,
	maxValue: PropTypes.number.isRequired,
	minValue: PropTypes.number.isRequired,
	onChange: PropTypes.func.isRequired
};


// EXPORTS //

export default FilterInputRange;
