// MODULES //

import React, { PropTypes } from 'react';
import Input from 'components/input';


// TEXT INPUT //

class TextInput extends Input {

	constructor( props ) {
		super( props );

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

	render() {
		if ( this.props.inline ) {
			return (
				<span>
					{ this.props.legend ? <label>{this.props.legend}:</label> : <span /> }
					<input
						type="text"
						name="input"
						value={this.state.value}
						style={{
							border: 'solid 1px darkgrey',
							background: 'gold',
							textAlign: 'left',
							display: 'inline',
							width: this.props.width
						}}
						onChange={this.handleChange}
					/>
					{ this.props.description ?
						<span> ({this.props.description}) </span> :
						<span />
					}
				</span>
			);
		} else {
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
						type="text"
						name="input"
						value={this.state.value}
						style={{
							marginRight: '8px',
							paddingLeft: '16px',
							paddingRight: '4px',
							border: 'solid 1px darkgrey',
							background: 'gold',
							textAlign: 'left',
							float: 'right',
							width: this.props.width
						}}
						onChange={this.handleChange}
					/>
				</div>
			);
		}
	}
}


// DEFAULT PROPERTIES //

TextInput.defaultProps = {
	defaultValue: '',
	width: 80,
	onChange(){},
	inline: false
};


// PROPERTY TYPES //

TextInput.propTypes = {
	defaultValue: PropTypes.string,
	inline: PropTypes.bool,
	width: PropTypes.number,
	onChange: PropTypes.func
};


// CONTEXT TYPES //

TextInput.contextTypes = {
	triggerDashboardClick: PropTypes.func,
	autoUpdate: PropTypes.bool
};


// EXPORTS //

export default TextInput;
