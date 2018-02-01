import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';
import InputGroup from 'react-bootstrap/lib/InputGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';

// Got the preview with npm run dev

class Search extends Component {
	constructor() {
		super();

		this.state = {
			search: ''
		};
	}

	render() {
		console.log('I am here');

		return ( 
			
				<FormGroup controlId="Frank" style={{width: '500px'}}>
					<InputGroup>
						<FormControl
							type="text"
							placeholder="Search! :)"
							onChange={ this.handleSearch }
						/>
						<InputGroup.Button>
							<Button
								onClick={ this.handleClick }>
								Search Me!
							</Button>
						</InputGroup.Button>
					</InputGroup>
				</FormGroup>
			);
	}

	handleSearch = ( event ) => {
		this.setState({search: event.target.value});
	}

	handleClick = ( event ) => {
		// Need to get it back to the parent
		this.props.onClick(this.state.search);
	}



}

export default Search;
