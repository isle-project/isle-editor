// MODULES //

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';


// VARIABLES //

const RE = /disabled/;


// MAIN //

const NextArrow = ({ pagination, className, onClick, t }) => {
	const disabled = RE.test( className );
	return (
		<Fragment>
			{ pagination !== 'bottom' ? <Button className='slider-next-button'
				size="small"
				onClick={onClick}
				style={{
					position: 'absolute',
					right: '-10px',
					top: '-30px'
				}}
				disabled={disabled}
			>{t('next')}</Button> : null }
			{ pagination !== 'top' ? <Button className='slider-next-button'
				size="small"
				onClick={onClick}
				style={{
					position: 'absolute',
					right: '-10px',
					bottom: '-25px'
				}}
				disabled={disabled}
			>{t('next')}</Button> : null }
		</Fragment>
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
