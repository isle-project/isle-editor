// MODULES //

import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';


// VARIABLES //

const RE = /disabled/;


// MAIN //

const PreviousArrow = ({ className, onClick, t }) => {
	const disabled = RE.test( className );
	return (
		<Button className="slider-previous-button"
			size="small"
			onClick={onClick}
			style={{
				position: 'absolute',
				display: 'block',
				left: '-10px',
				bottom: '-25px',
				zIndex: 100
			}}
			disabled={disabled}
		>{t('previous')}</Button>
	);
};


// PROPERTIES //

PreviousArrow.defaultProps = {
	className: '',
	onClick() {}
};

PreviousArrow.propTypes = {
	className: PropTypes.string,
	onClick: PropTypes.func
};


// EXPORTS //

export default PreviousArrow;

