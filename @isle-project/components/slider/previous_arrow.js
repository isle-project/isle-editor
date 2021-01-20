// MODULES //

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';


// VARIABLES //

const RE = /disabled/;


// MAIN //

const PreviousArrow = ({ pagination, className, onClick, t }) => {
	const disabled = RE.test( className );
	return (
		<Fragment>
			{ pagination !== 'bottom' ? <Button className="slider-previous-button"
				size="small"
				onClick={onClick}
				style={{
					position: 'absolute',
					left: '-10px',
					top: '-30px'
				}}
				disabled={disabled}
			>{t('previous')}</Button> : null }
			{ pagination !== 'top' ? <Button className="slider-previous-button"
				size="small"
				onClick={onClick}
				style={{
					position: 'absolute',
					left: '-10px',
					bottom: '-25px'
				}}
				disabled={disabled}
			>{t('previous')}</Button> : null }
		</Fragment>
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

