// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/lib/Button';
import InputGroup from 'react-bootstrap/lib/InputGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Checkbox from 'react-bootstrap/lib/Checkbox';


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
					<InputGroup bsSize="small" >
						<FormControl
							bsSize="small"
							type="text"
							placeholder="Enter text..."
							onChange={this.handleSearch}
						/>
						<InputGroup.Button bsSize="small">
							<Button
								onClick={this.handleSubmit}
							>
								Search
							</Button>
						</InputGroup.Button>
					</InputGroup>
				</FormGroup>
				<FormGroup style={{ float: 'left', margin: '4px' }} >
					<Checkbox bsSize="small" inline onChange={this.props.onExact}>Whole Word</Checkbox>
					<Checkbox bsSize="small" inline >Case-sensitive</Checkbox>
				</FormGroup>
				<Button style={{ float: 'left' }} bsSize="small" onClick={this.handleReset} >
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
