// MODULES //

import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from 'react-bootstrap/Button';
import ReactDateTimePicker from 'react-datetime-picker';


// MAIN //

const DateTimePicker = ({ prop, onChange, onHide }) => {
	const [ selectedDate, setSelectedDate ] = useState( new Date() );
	const { t } = useTranslation( 'Editor' );
	useEffect( () => {
		const date = selectedDate;

		// eslint-disable-next-line i18next/no-literal-string
		const insertion = `date({ year: ${date.getFullYear()}, month: ${date.getMonth()+1}, day: ${date.getDate()}, hour: ${date.getHours()}, minute: ${date.getMinutes()}, second: ${date.getSeconds()}, utcOffset: ${date.getTimezoneOffset() / 60} })`;
		onChange( prop, insertion );
	}, [ prop, selectedDate, onChange ] );
	if ( !prop ) {
		return null;
	}
	return (
		<div className="configurator-date-time-picker-modal" >
			<h3 className="configurator-date-time-picker-header" >
				{t('pick-date-and-time')}
			</h3>
			<Button
				size="sm" variant="warning"
				className="configurator-date-time-picker-close-button" onClick={onHide}
			>
				<div className="fa fa-times" />
			</Button>
			<ReactDateTimePicker
				value={selectedDate}
				onChange={setSelectedDate}
				isCalendarOpen
				clearIcon={null}
				className="configurator-clock"
			/>
		</div>
	);
};


// EXPORTS //

export default DateTimePicker;
