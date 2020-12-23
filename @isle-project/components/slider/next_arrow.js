// MODULES //

import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';


// VARIABLES //

const RE = /disabled/;


// MAIN //

const NextArrow = ({ className, onClick, t }) => {
	const disabled = RE.test( className );
	return (
		<Button className='slider-next-button'
			size="small"
			onClick={onClick}
			style={{
				position: 'absolute',
				display: 'block',
				right: '-10px',
				bottom: '-25px',
				zIndex: 100
			}}
			disabled={disabled}
		>{t('next')}</Button>
	);
};


// PROPERTIES //

NextArrow.defaultProps = {
	className: '',
	onClick() {}
};

NextArrow.propTypes = {
	className: PropTypes.string,
	onClick: PropTypes.func
};


// EXPORTS //

export default NextArrow;
