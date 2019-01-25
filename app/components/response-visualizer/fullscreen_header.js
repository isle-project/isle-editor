// MODULES //

import React from 'react';
import RangePicker from 'components/range-picker';
import Modal from 'react-bootstrap/lib/Modal';
import isArray from '@stdlib/assert/is-array';


// MAIN //

const FullscreenHeader = ( props ) => {
	let select = null;
	if ( isArray( props.cohorts ) ) {
		select = ( <select
			style={{ width: '150px', backgroundColor: 'ghostwhite', padding: '2px' }}
			onChange={props.onCohortChange}
			value={props.selectedCohort ? props.selectedCohort.title : 'all'}
		>
			<option value="all">All Cohorts</option>
			{props.cohorts.map( ( v, key ) => {
				return (
					<option
						key={key}
						value={v.title}
					>{v.title}</option>
				);
			})}
		</select> );
	}
	return (
		<Modal.Header style={{ paddingBottom: '5px' }} closeButton >
			<h4 style={{ float: 'left', margin: '2px 14px 2px 2px' }} >{props.actionLabel} for {props.componentID}</h4>
			{select}
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
