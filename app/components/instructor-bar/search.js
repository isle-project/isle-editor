// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/lib/Button';
import InputGroup from 'react-bootstrap/lib/InputGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Checkbox from 'components/input/checkbox';


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
				<FormGroup style={{ width: window.innerWidth * 0.3, padding: '0px', marginBottom: '0px' }} >
					<InputGroup size="small" >
						<FormControl
							type="text"
							placeholder="Enter text..."
							onChange={this.handleSearch}
						/>
						<Button
							onClick={this.handleSubmit}
						>
							Search
						</Button>
					</InputGroup>
				</FormGroup>
				<FormGroup style={{ float: 'left', margin: '4px' }} >
					<Checkbox size="small" inline onChange={this.props.onExact} legend="Whole Word" />
					<Checkbox size="small" inline legend="Case-sensitive" />
				</FormGroup>
				<Button style={{ float: 'left' }} size="small" onClick={this.handleReset} >
					Reset Search
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
