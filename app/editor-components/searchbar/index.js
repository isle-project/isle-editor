// MODULES //

import React from 'react';
import FormGroup from 'react-bootstrap/FormGroup';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';


// MAIN //

const SearchBar = ( props ) => {
	return (
		<FormGroup style={props.style} >
			<InputGroup>
				<FormControl
					className="editor-searchbar"
					type="text"
					placeholder={props.placeholder}
					value={props.value}
					onChange={props.onChange}
					aria-label="search-field"
				/>
					<InputGroup.Append>
						<Button size={props.buttonSize} aria-label="search-field-icon" disabled variant="secondary" style={{ cursor: 'auto' }}>
							<i className="fa fa-search"></i>
						</Button>
					</InputGroup.Append>
			</InputGroup>
		</FormGroup>
	);
};

// PROPERTIES //

SearchBar.defaultProps = {
	buttonSize: null
};


// EXPORTS //

export default SearchBar;
