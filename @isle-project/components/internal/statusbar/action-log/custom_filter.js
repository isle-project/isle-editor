// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import uppercase from '@stdlib/string/uppercase';


// MAIN //

class CustomFilter extends Component {
	constructor( props ) {
		super( props );

		this.options = [
			{ value: 'email', label: this.props.t('email' ) },
			{ value: 'name', label: this.props.t('name' ) },
			{ value: 'type', label: this.props.t('type' ) },
			{ value: 'id', label: this.props.t('id' ) },
			{ value: 'value', label: this.props.t('value' ) }
		];

		this.state = {
			type: null,
			value: ''
		};
	}

	handleSubmit = () => {
		const type = this.state.type.value;
		let value = this.state.value;
		if ( type === 'type' ) {
			value = uppercase( value );
		}
		this.props.onSubmit( type, value );
		this.setState({
			type: null,
			value: ''
		});
	};

	render() {
		const { style, t } = this.props;
		return ( <Form.Group controlId="custom-filter-form-group" style={{ ...style, width: 280 }}>
			<div style={{ width: 100, float: 'left' }} ><Select
				options={this.options}
				placeholder={t('filter')}
				value={this.state.type}
				onChange={( value ) => {
					this.setState({
						type: value
					});
				}}
			/></div>
			<Form.Control
				type="text"
				value={this.state.value}
				placeholder={t('contains')}
				style={{ width: 100, float: 'left' }}
				onChange={( event ) => {
					this.setState({
						value: event.target.value
					});
				}}
			/>
			<Button
				size="small" variant="light" style={{ float: 'left' }}
				onClick={this.handleSubmit}
				disabled={!this.state.type || !this.state.value}
			>
				<i className="fas fa-plus"></i>
			</Button>
		</Form.Group> );
	}
}


// PROPERTIES //

CustomFilter.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	style: PropTypes.object
};

CustomFilter.defaultProps = {
	style: {}
};


// EXPORTS //

export default CustomFilter;
