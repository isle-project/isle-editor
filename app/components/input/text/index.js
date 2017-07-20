// MODULES //

import React from 'react';
import PropTypes from 'prop-types';
import isEmptyObject from '@stdlib/assert/is-empty-object';
import Input from 'components/input';
import './text.css';


// MAIN //

class TextInput extends Input {

	constructor( props, context ) {
		super( props );

		const { session } = context;
		this.state = {
			value: !props.bind ?
				props.defaultValue :
				session.config.state[ props.bind ]
		};

		this.handleChange = ( event ) => {
			const value = event.target.value;
			this.setState({
				value
			}, () => {
				this.props.onChange( value );
				if ( this.props.bind ) {
					global.lesson.setState({
						[ this.props.bind ]: value
					}, () => {
						if ( this.context.autoUpdate ) {
							this.context.triggerDashboardClick();
						}
					});
				} else if ( this.context.autoUpdate ) {
					this.context.triggerDashboardClick();
				}
			});

		};
	}

	componentWillReceiveProps( nextProps ) {
		let newState = {};
		if ( nextProps.defaultValue !== this.props.defaultValue ) {
			newState.value = nextProps.defaultValue;
		} else if ( nextProps.bind !== this.props.bind ) {
			newState.value = global.lesson.state[ nextProps.bind ];
		}
		if ( !isEmptyObject( newState ) ) {
			this.setState( newState );
		}
	}

	render() {
		if ( this.props.inline ) {
			return (
				<span>
					{ this.props.legend ? <label>{this.props.legend}:</label> : <span /> }
					<input
						className="text-inline-input"
						type="text"
						name="input"
						value={this.state.value}
						style={{
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
				<div className="text-container-div" >
					<span style={{ marginLeft: '8px' }}>
						<label>{this.props.legend}:</label>
						{ this.props.description ?
							<span> {this.props.description}</span> :
							<span />
						}
					</span>
					<input
						className="text-input"
						type="text"
						name="input"
						value={this.state.value}
						style={{
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
	autoUpdate: PropTypes.bool,
	session: PropTypes.object
};


// EXPORTS //

export default TextInput;
