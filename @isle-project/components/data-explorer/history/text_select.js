/**
* Copyright (C) 2016-present The ISLE Authors
*
* The isle-dashboard program is free software: you can redistribute it and/or modify
* it under the terms of the GNU Affero General Public License as
* published by the Free Software Foundation, either version 3 of the
* License, or (at your option) any later version.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU Affero General Public License for more details.
*
* You should have received a copy of the GNU Affero General Public License
* along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import CreatableSelect from 'react-select/creatable';


// FUNCTIONS //

const createOption = ( label ) => ({
	label,
	value: label
});


// MAIN //

/**
 * A select component for selecting a text.
 */
class TextSelect extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			value: null
		};
	}

	handleChange = ( value ) => {
		this.props.onChange( value );
		this.setState({
			value
		});
	};

	handleSubmission = () => {
		this.props.onSubmit( this.state.value );
	};

	render() {
		return (
			<Fragment>
				<CreatableSelect
					inputId={this.props.id}
					isClearable={this.props.isClearable}
					onChange={this.handleChange}
					options={this.props.options.map( createOption )}
					placeholder="Leave note..."
				/>
				<Button
					size="sm"
					onClick={this.handleSubmission}
					style={{ marginTop: 4 }}
				>{this.props.t('submit')}</Button>
			</Fragment>
		);
	}
}


// PROPERTIES //

TextSelect.propTypes = {
	options: PropTypes.array,
	isClearable: PropTypes.bool,
	onChange: PropTypes.func,
	onSubmit: PropTypes.func
};

TextSelect.defaultProps = {
	options: [],
	isClearable: false,
	onChange() {},
	onSubmit() {}
};


// EXPORTS //

export default TextSelect;
