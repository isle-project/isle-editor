// MODULES //

import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import FormGroup from 'react-bootstrap/FormGroup';
import Checkbox from 'components/input/checkbox';


// MAIN //

const Search = ({ extended, onClick, t }) => {
	const [ search, setSearch ] = useState( '' );
	const [ caseSensitive, setCaseSensitive ] = useState( false );
	const [ exact, setExact ] = useState( false );

	const handleSearch = ( event ) => {
		setSearch( event.target.value );
	};
	useEffect( () => {
		onClick( search, caseSensitive, exact );
	}, [ caseSensitive, exact, search, onClick ]);

	const handleKeyPress = ( event ) => {
		if ( event.charCode === 13 ) {
			onClick( search, caseSensitive, exact );
		}
	};
	const handleReset = () => {
		setSearch( '' );
		onClick( '' );
	};
	return (
		<Fragment>
			<FormGroup style={{ width: window.innerWidth * 0.3, padding: '0px', marginBottom: '0px' }} >
				<InputGroup size="small" >
					<FormControl
						type="text"
						placeholder={t('enter-text')}
						onChange={handleSearch}
						onKeyPress={handleKeyPress}
						value={search}
					/>
					<Button
						onClick={() => {
							onClick( search, caseSensitive, exact );
						}}
					>
						{t('search')}
					</Button>
					<Button style={{ float: 'left' }} size="small" onClick={handleReset} >
						{t('reset')}
					</Button>
				</InputGroup>
			</FormGroup>
			<FormGroup style={{ float: 'left', margin: '4px' }} >
				<Checkbox
					tooltip={t('whole-word-tooltip')}
					tooltipPlacement="top"
					size="small" inline
					legend={t('whole-word')}
					style={{ fontSize: '0.9rem' }}
					onChange={( value ) => {
						setExact( value );
						onClick( search, caseSensitive, value );
					}}
				/>
				<Checkbox
					tooltip={t('toggle-sensitivity')} tooltipPlacement="top"
					size="small" inline
					legend={t('case-sensitive')}
					style={{ fontSize: '0.9rem' }}
					onChange={( value ) => {
						setCaseSensitive( value );
						onClick( search, value, exact );
					}}
				/>
			</FormGroup>
		</Fragment>
	);
};


// PROPERTIES //

Search.propTypes = {
	extended: PropTypes.string,
	onClick: PropTypes.func
};

Search.defaultProps = {
	extended: false,
	onClick() {}
};


// EXPORTS //

export default Search;
