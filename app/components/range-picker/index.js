// MODULES //

import React, { Component } from 'react';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import Button from 'react-bootstrap/lib/Button';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import DateRangePicker from 'react-dates/esm/components/DateRangePicker';
import './_datepicker.css';


// MAIN //

class RangePicker extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			period: {
				from: dayjs( 0 ).subtract( 60, 'minutes' ),
				to: dayjs()
			},
			active: 5
		};
	}

	timeClickFactory = ( type ) => {
		let ret;
		switch ( type ) {
		case 'last_hour':
			ret = () => {
				const from = dayjs().subtract( 60, 'minutes' );
				const to = dayjs();
				this.updatePeriod( from, to, 0 );
			};
			return ret;
		default:
		case 'last_day':
			ret = () => {
				const from = dayjs().
					subtract( 1, 'minutes' ).
					startOf( 'day' );
				const to = dayjs().endOf( 'day' );
				this.updatePeriod( from, to, 1 );
			};
			return ret;
		case 'last_week':
			ret = () => {
				const from = dayjs().
					subtract( 7, 'days' ).
					startOf( 'day' );
				const to = dayjs().endOf( 'day' );
				this.updatePeriod( from, to, 2 );
			};
			return ret;
		case 'last_month':
			ret = () => {
				const from = dayjs().
					subtract( 30, 'days' ).
					startOf( 'day' );
				const to = dayjs().endOf( 'day' );
				this.updatePeriod( from, to, 3 );
			};
			return ret;
		case 'last_year':
			ret = () => {
				const from = dayjs().
					subtract( 365, 'days' ).
					startOf( 'day' );
				const to = dayjs().endOf( 'day' );
				this.updatePeriod( from, to, 4 );
			};
			return ret;
		case 'all_time':
			ret = () => {
				const from = dayjs( 0 ).startOf( 'day' );
				const to = dayjs().endOf( 'day' );
				this.updatePeriod( from, to, 5 );
			};
			return ret;
		}
	}

	updatePeriod = ( from, to, active ) => {
		this.setState({
			period: { from, to },
			active: active
		}, () => {
			this.props.onChange( this.state.period );
		});
	}

	render() {
		const activeStyle = {
			background: 'slategray',
			color: 'white',
			textShadow: 'none'
		};
		return (
			<ButtonToolbar style={{ marginBottom: '10px', ...this.props.style }} >
				<ButtonGroup bsSize={this.props.bsSize}>
					<Button
						className="date-selection"
						id="last_hour"
						onClick={this.timeClickFactory( 'last_hour' )}
						style={this.state.active === 0 ? activeStyle : {}}
					>Last Hour</Button>
					<Button
						className="date-selection"
						id="last_day"
						onClick={this.timeClickFactory( 'last_day' )}
						style={this.state.active === 1 ? activeStyle : {}}
					>Day</Button>
					<Button
						className="date-selection"
						id="last_week"
						onClick={this.timeClickFactory( 'last_week' )}
						style={this.state.active === 2 ? activeStyle : {}}
					>Week</Button>
					<Button
						className="date-selection"
						id="last_month"
						onClick={this.timeClickFactory( 'last_month' )}
						style={this.state.active === 3 ? activeStyle : {}}
					>Month</Button>
					<Button
						className="date-selection"
						id="last_year"
						onClick={this.timeClickFactory( 'last_year' )}
						style={this.state.active === 4 ? activeStyle : {}}
					>Year</Button>
				</ButtonGroup>
				<ButtonGroup bsSize={this.props.bsSize}>
					<Button
						className="date-selection"
						id="all_time"
						onClick={this.timeClickFactory( 'all_time' )}
						style={this.state.active === 5 ? activeStyle : {}}
					>All Data</Button>
					<DateRangePicker
						startDate={this.state.period.from}
						endDate={this.state.period.to}
						onDatesChange={({ startDate, endDate }) => {
							const newPeriod = {
								from: startDate,
								to: endDate
							};
							this.setState({
								period: newPeriod
							});
						}}
						focusedInput={this.state.focusedInput}
						onFocusChange={focusedInput => this.setState({ focusedInput })}
						isOutsideRange={() => false}
					/>
				</ButtonGroup>
			</ButtonToolbar>
		);
	}
}


// PROPERTY TYPES //

RangePicker.propTypes = {
	bsSize: PropTypes.oneOf(
		[
			'xsmall',
			'xs',
			'small',
			'sm',
			'large',
			'lg'
		]
	),
	onChange: PropTypes.func,
	style: PropTypes.object
};


// DEFAULT PROPERTIES //

RangePicker.defaultProps = {
	bsSize: 'xsmall',
	onChange() {},
	style: {}
};


// EXPORTS //

export default RangePicker;
