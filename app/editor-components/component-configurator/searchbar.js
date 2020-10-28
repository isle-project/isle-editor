// MODULES //

import React from 'react';
import FormGroup from 'react-bootstrap/FormGroup';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';


// MAIN //

const SearchBar = ( props ) => {
	return (
		<FormGroup style={{ width: '14vw', minWidth: '120px', float: 'right', marginBottom: 2, ...props.style }}>
			<InputGroup>
				<FormControl
					className="header-bar-search"
					type="text"
					placeholder={props.placeholder}
					value={props.value}
					onChange={props.onChange}
					aria-label="search-field"
				/>
					<InputGroup.Append>
						<Button aria-label="search-field-icon" disabled variant="secondary" style={{ cursor: 'auto' }}>
							<i className="fa fa-search"></i>
						</Button>
					</InputGroup.Append>
			</InputGroup>
		</FormGroup>
	);
};


// EXPORTS //

export default SearchBar;
