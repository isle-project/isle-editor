// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/lib/Button';
import InputGroup from 'react-bootstrap/lib/InputGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Form from 'react-bootstrap/lib/Form';


// MAIN //

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
	}

	handleSubmit = ( event ) => {
		// Need to get it back to the parent
		this.props.onClick( this.state.search );
	}

	handleReset = () => {
		this.props.onClick( '' );
	}

	render() {
		return (
			<Fragment>
				<FormGroup style={{ float: 'left', width: '300px' }} >
					<InputGroup size="small" >
						<FormControl
							size="small"
							type="text"
							placeholder="Enter text..."
							onChange={this.handleSearch}
						/>
						<InputGroup.Button size="small">
							<Button
								onClick={this.handleSubmit}
							>
								Search
							</Button>
						</InputGroup.Button>
					</InputGroup>
				</FormGroup>
				<FormGroup style={{ float: 'left', margin: '4px' }} >
					<Form.Check type="checkbox" size="small" inline onChange={this.props.onExact}>Whole Word</Form.Check >
					<Form.Check type="checkbox" size="small" inline >Case-sensitive</Form.Check >
				</FormGroup>
				<Button style={{ float: 'left' }} size="small" onClick={this.handleReset} >
					Reset
				</Button>
			</Fragment>
		);
	}
}


// PROPERTY TYPES //

Search.propTypes = {
	onClick: PropTypes.func,
	onExact: PropTypes.func
};

Search.defaultProps = {
	onClick() {},
	onExact() {}
};


// EXPORTS //

export default Search;
