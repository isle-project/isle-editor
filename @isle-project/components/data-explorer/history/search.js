// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import FormGroup from 'react-bootstrap/FormGroup';


// MAIN //

/**
 * Displays a search input.
 */
class Search extends Component {
	constructor() {
		super();

		this.state = {
			search: ''
		};
	}

	handleSearch = ( event ) => {
		this.setState({
			search: event.target.value
		});
		this.props.onClick( event.target.value );
	};

	render() {
		return (
			<FormGroup>
				<InputGroup size="small" >
					<FormControl
						aria-label="Search"
						type="text"
						placeholder="Search actions..."
						onChange={this.handleSearch}
						onKeyPress={this.handleKeyPress}
						value={this.state.search}
					/>
				</InputGroup>
			</FormGroup>
		);
	}
}


// PROPERTIES //

Search.propTypes = {
	onClick: PropTypes.func
};

Search.defaultProps = {
	onClick() {}
};


// EXPORTS //

export default Search;
