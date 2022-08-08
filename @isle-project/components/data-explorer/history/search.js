// MODULES //

import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import FormGroup from 'react-bootstrap/FormGroup';


// MAIN //

/**
 * Displays a search input.
 */
const Search = ({ onClick }) => {
	const [ search, setSearch ] = useState( '' );
	const handleSearch = useCallback( ( event ) => {
		setSearch( event.target.value );
		onClick( event.target.value );
	}, [ onClick ]);
	return (
		<FormGroup>
			<InputGroup size="small" >
				<FormControl
					aria-label="Search"
					type="text"
					placeholder="Search actions..."
					onChange={handleSearch}
					value={search}
				/>
			</InputGroup>
		</FormGroup>
	);
};


// PROPERTIES //

Search.propTypes = {
	onClick: PropTypes.func
};

Search.defaultProps = {
	onClick() {}
};


// EXPORTS //

export default Search;
