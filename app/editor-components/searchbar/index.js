// MODULES //

import React from 'react';
import FormGroup from 'react-bootstrap/FormGroup';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';


// MAIN //

const SearchBar = ( props ) => {
	return (
		<FormGroup className={props.className} style={props.style} >
			<InputGroup>
				<InputGroup.Prepend>
					<Button size={props.buttonSize} aria-label="search-field-icon" disabled variant="outline-secondary" style={{ cursor: 'auto' }}>
						<i className="fa fa-search"></i>
					</Button>
				</InputGroup.Prepend>
				<FormControl
					className="editor-searchbar"
					type="text"
					placeholder={props.placeholder}
					value={props.value}
					onChange={props.onChange}
					aria-label="search-field"
				/>
				{props.onClear ? <InputGroup.Append>
					<Button
						size={props.buttonSize}
						aria-label="search-field-icon"
						variant="outline-secondary"
						onClick={props.onClear}
					>
						<i className="fas fa-times"></i>
					</Button>
				</InputGroup.Append> : null}
			</InputGroup>
		</FormGroup>
	);
};


// PROPERTIES //

SearchBar.defaultProps = {
	buttonSize: null,
	onClear: null
};


// EXPORTS //

export default SearchBar;
