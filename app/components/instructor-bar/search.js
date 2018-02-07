// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/lib/Button';
import InputGroup from 'react-bootstrap/lib/InputGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import CheckboxInput from 'components/input/checkbox';

// MAIN //

class Search extends Component {
	constructor() {
		super();

		this.state = {
			search: '', 
			exact: false
		};
	}

	handleSearch = ( event ) => {
		this.setState({
			search: event.target.value
		});
	}

	handleClick = ( event ) => {
		// Need to get it back to the parent
		this.props.onClick( this.state.search );
	}

	handleBox = (event) => {
		// This is an issue for us negating it
		if ( this.state.exact ) {
			this.setState({
				exact: false
			});
		} else {
			this.setState({
				exact: true
			});
		}
	}

	render() {
		return (
			<FormGroup style={this.props.style} >
				<InputGroup bsSize="small" >
					<FormControl
						bsSize="xsmall"
						type="text"
						placeholder="Enter text..."
						onChange={this.handleSearch}
					/>
					<InputGroup.Button>
						<Button
							onClick={this.handleClick}
						>
							Search
						</Button>
					</InputGroup.Button>
					<CheckboxInput
						inline={true}
						legend="Exact Value?"
						defaultValue={false}
						onChange={this.handleBox}
					/>
				</InputGroup>
			</FormGroup>
		);
	}
}


// PROPERTY TYPES //

Search.propTypes = {
	onClick: PropTypes.func,
	style: PropTypes.object
};

Search.defaultProps = {
	onClick() {},
	style: {}
};


// EXPORTS //

export default Search;
