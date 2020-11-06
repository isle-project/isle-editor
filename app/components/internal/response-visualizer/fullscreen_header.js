// MODULES //

import React from 'react';
import RangePicker from 'components/range-picker';
import Modal from 'react-bootstrap/Modal';
import isArray from '@stdlib/assert/is-array';


// MAIN //

const FullscreenHeader = ( props ) => {
	let select = null;
	if ( isArray( props.cohorts ) ) {
		select = ( <select
			title="Cohort"
			style={{ width: '150px', backgroundColor: 'ghostwhite', padding: '2px' }}
			onChange={props.onCohortChange} onBlur={props.onCohortChange}
			value={props.selectedCohort ? props.selectedCohort.title : 'all'}
		>
			<option value="all">{props.t('all-cohorts')}</option>
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
	let origin;
	const nActions = props.actions.length;
	if ( nActions > 0 ) {
		origin = props.actions[ nActions-1 ].absoluteTime;
	} else {
		origin = 0;
	}
	return (
		<Modal.Header style={{ paddingBottom: '5px' }} closeButton >
			<h4 style={{ float: 'left', margin: '2px 14px 2px 2px' }} >{props.actionLabel} {props.t('for')} {props.componentID}</h4>
			{select}
			<RangePicker
				style={{ float: 'left' }}
				size="sm"
				onChange={props.onPeriodChange}
				origin={origin}
			/>
		</Modal.Header>
	);
};


// EXPORTS //

export default FullscreenHeader;
