// MODULES //

import React from 'react';
import RangePicker from 'components/range-picker';
import Modal from 'react-bootstrap/lib/Modal';


// MAIN //

const FullscreenHeader = ( props ) => {
	return (
		<Modal.Header style={{ paddingBottom: '5px' }} closeButton >
			<h4 style={{ float: 'left', margin: '2px 14px 2px 2px' }} >{props.actionLabel} for {props.componentID}</h4>
			<RangePicker
				style={{ float: 'left' }}
				size="sm"
				onChange={props.onPeriodChange}
			/>
		</Modal.Header>
	);
};


// EXPORTS //

export default FullscreenHeader;
