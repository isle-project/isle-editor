// MODULES //

import React from 'react';
import PropTypes from 'prop-types';
import { ControlLabel, Form, FormControl, FormGroup } from 'react-bootstrap';
import isEmptyObject from '@stdlib/assert/is-empty-object';
import Input from 'components/input';


// MAIN //

class SelectInput extends Input {
	/**
	* Create a select input field.
	*
	* @param {Object} props - component properties (`onChange` callback and `defaultValue`)
	*/
	constructor( props ) {
		super( props );

		// Initialize state variables...
		this.state = {
			value: props.defaultValue
		};

		this.handleChange = ( event ) => {
			const value = event.target.value;
			this.setState({
				value
			}, () => {
				this.props.onChange( value );
				if ( this.context.autoUpdate ) {
					this.context.triggerDashboardClick();
				}
			});
		};
	}

	componentWillReceiveProps( nextProps ) {
		let newState = {};
		if ( nextProps.defaultValue !== this.props.defaultValue ) {
			newState.value = nextProps.defaultValue;
		}
		if ( !isEmptyObject( newState ) ) {
			this.setState( newState );
		}
	}

	/*
	* React component render method.
	*/
	render() {
		if ( this.props.inline ) {
			return (
				<FormControl
					value={this.state.value}
					defaultValue={this.props.defaultValue}
					componentClass="select"
					placeholder="select"
					onChange={this.handleChange}
					style={{
						width: 'auto',
						display: 'inline'
					}}
				>
					{this.props.options.map( e => {
						return <option value={e}>{e}</option>;
					})}
				</FormControl>
			);
		} else {
			return (
				<Form style={{ ...this.props.style }} >
					<FormGroup controlId="formControlsSelect">
						{ this.props.legend ?
							<ControlLabel>{this.props.legend}</ControlLabel> :
							null
						}
						<FormControl
							value={this.state.value}
							defaultValue={this.props.defaultValue}
							componentClass="select"
							placeholder="select"
							onChange={this.handleChange}
						>
							{this.props.options.map( e => {
								return <option value={e}>{e}</option>;
							})}
						</FormControl>
					</FormGroup>
				</Form>
			);
		}
	}
}


// DEFAULT PROPERTIES //

SelectInput.defaultProps = {
	bind: '',
	onChange() {},
	defaultValue: '',
	inline: false,
	legend: '',
	options: []
};


// PROPERTY TYPES //

SelectInput.propTypes = {
	bind: PropTypes.string,
	onChange: PropTypes.func,
	defaultValue: PropTypes.string,
	inline: PropTypes.bool,
	legend: PropTypes.string,
	options: PropTypes.array
};


// CONTEXT TYPES //

SelectInput.contextTypes = {
	triggerDashboardClick: PropTypes.func,
	autoUpdate: PropTypes.bool
};



// EXPORTS //

export default SelectInput;
