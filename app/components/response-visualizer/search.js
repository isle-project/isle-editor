// MODULES //

import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import FormGroup from 'react-bootstrap/FormGroup';
import Checkbox from 'components/input/checkbox';


// MAIN //

const Search = ( props ) => {
	const [ search, setSearch ] = useState( '' );
	const [ caseSensitive, setCaseSensitive ] = useState( false );
	const [ exact, setExact ] = useState( false );

	const handleSearch = ( event ) => {
		setSearch( event.target.value );
	};

	const handleSubmit = () => {
		props.onClick( search, caseSensitive, exact );
	};
	useEffect( () => {
		handleSubmit();
	}, [ props.extended ]);

	const handleKeyPress = ( event ) => {
		if ( event.charCode === 13 ) {
			handleSubmit();
		}
	};
	const handleReset = () => {
		setSearch( '' );
		props.onClick( '' );
	};
	return (
		<Fragment>
			<FormGroup style={{ width: window.innerWidth * 0.3, padding: '0px', marginBottom: '0px' }} >
				<InputGroup size="small" >
					<FormControl
						type="text"
						placeholder={props.t('enter-text')}
						onChange={handleSearch}
						onKeyPress={handleKeyPress}
						value={search}
					/>
					<Button
						onClick={handleSubmit}
					>
						{props.t('search')}
					</Button>
					<Button style={{ float: 'left' }} size="small" onClick={handleReset} >
						{props.t('reset')}
					</Button>
				</InputGroup>
			</FormGroup>
			<FormGroup style={{ float: 'left', margin: '4px' }} >
				<Checkbox
					tooltip={props.t('whole-word-tooltip')}
					tooltipPlacement="top"
					size="small" inline
					legend={props.t('whole-word')}
					style={{ fontSize: '0.9rem' }}
					onChange={( value ) => {
						setExact( value );
						props.onClick( search, caseSensitive, value );
					}}
				/>
				<Checkbox
					tooltip={props.t('toggle-sensitivity')} tooltipPlacement="top"
					size="small" inline
					legend={props.t('case-sensitive')}
					style={{ fontSize: '0.9rem' }}
					onChange={( value ) => {
						setCaseSensitive( value );
						props.onClick( search, value, exact );
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
