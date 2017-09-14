// MODULES //

import React from 'react';
import PropTypes from 'prop-types';
import Input from 'components/input/base';


// MAIN //

class CheckboxInput extends Input {

	constructor( props ) {
		super( props );

		/**
		* Event handler invoked once the checkbox is clicked by the user. Changes the
		* `isChecked` property and then invokes the user-supplied `onChange` callback function.
		*/
		this.handleChange = ( event ) => {
			this.setState({
				value: event.target.checked
			}, () => {
				this.props.onChange( this.state.value );
				if ( this.context.autoUpdate ) {
					this.context.triggerDashboardClick();
				}
			});
		};
	}

	render() {
		const input = <input
			type="checkbox"
			checked={this.state.value}
			value="checkbox"
			onChange={this.handleChange}
			style={{
				verticalAlign: 'bottom',
				width: '24px',
				height: '24px'
			}}
		></input>;
		if ( this.props.inline === true ) {
			return (
				<span style={{ marginLeft: '8px', ...this.props.style }}>
					{input}
					<span
						style={{
							marginLeft: '12px'
						}}
					>{this.props.legend}</span>
				</span>
			);
		} else {
			return (
				<div style={{
					marginTop: '8px',
					marginLeft: '8px',
					marginBottom: '8px',
					...this.props.style
				}}>
					{input}
					<span
						style={{
							marginLeft: '12px'
						}}
					>{this.props.legend}</span>
				</div>
			);
		}
	}
}


// DEFAULT PROPERTIES //

CheckboxInput.defaultProps = {
	onChange() {},
	defaultValue: false,
	inline: false
};


// PROPERTY TYPES //

CheckboxInput.propTypes = {
	onChange: PropTypes.func,
	defaultValue: PropTypes.bool,
	inline: PropTypes.bool
};


// CONTEXT TYPES //

CheckboxInput.contextTypes = {
	triggerDashboardClick: PropTypes.func,
	autoUpdate: PropTypes.bool
};


// EXPORTS //

export default CheckboxInput;
