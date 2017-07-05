// MODULES //

import React, { Component } from 'react';
import { Accordion, ButtonToolbar, ButtonGroup, Button, OverlayTrigger, Panel, Popover } from 'react-bootstrap';
import $ from 'jquery';
import moment from 'moment';
import ActionLog from './action_log.js';
import UserList from './user_list.js';
import max from '@stdlib/math/base/special/max';
import isElectron from 'utils/is-electron';
import PropTypes from 'prop-types';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
const debug = require( 'debug' )( 'isle-editor' );


// VARIABLES //

const EDITOR_OFFSET = isElectron ? '15px' : '0px';


// MAIN //

class InstructorView extends Component {

	constructor( props ) {
		super( props );

		this.state = {
			hidden: true,
			actionLogHeader: <h4>Action Log</h4>,
			period: {
				from: moment( 0 ).startOf( 'day' ),
				to: moment().endOf( 'day' )
			}
		};

		this.timeClickFactory = ( type ) => {
			let ret;
			switch ( type ) {
			case 'last_day':
				ret = () => {
					$( '.date-selection' ).removeClass( 'active-button' );
					$( '#last_day' ).addClass( 'active-button' );
					const from = moment().subtract( 1, 'minutes' ).startOf( 'day' );
					const to = moment().endOf( 'day' );
					this.setState({
						period: { from, to }
					});
				};
				return ret;
			case 'last_week':
				ret = () => {
					$( '.date-selection' ).removeClass( 'active-button' );
					$( '#last_week' ).addClass( 'active-button' );
					const from = moment().subtract( 7, 'days' ).startOf( 'day' );
					const to = moment().endOf( 'day' );
					this.setState({
						period: { from, to }
					});
				};
				return ret;
			case 'last_month':
				ret = () => {
					$( '.date-selection' ).removeClass( 'active-button' );
					$( '#last_month' ).addClass( 'active-button' );
					const from = moment().subtract( 30, 'days' ).startOf( 'day' );
					const to = moment().endOf( 'day' );
					this.setState({
						period: { from, to }
					});
				};
				return ret;
			case 'last_year':
				ret = () => {
					$( '.date-selection' ).removeClass( 'active-button' );
					$( '#last_year' ).addClass( 'active-button' );
					const from = moment().subtract( 365, 'days' ).startOf( 'day' );
					const to = moment().endOf( 'day' );
					this.setState({
						period: { from, to }
					});
				};
				return ret;
			case 'all_time':
				ret = () => {
					$( '.date-selection' ).removeClass( 'active-button' );
					$( '#all_time' ).addClass( 'active-button' );
					const from = moment( 0 ).startOf( 'day' );
					const to = moment().endOf( 'day' );
					this.setState({
						period: { from, to }
					});
				};
				return ret;
			}
		};

	}

	componentDidMount() {
		const { session } = this.context;
		this.unsubscribe = session.subscribe( ( type ) => {
			if ( type === 'logout' ) {
				debug( 'Should reset the filters after user logout:' );
				this.setState({
					actionLogHeader: <h4>Action Log</h4>
				});
			}
		});
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	toggleBar() {
		if ( this.state.hidden ) {
			$( this.instructorView ).animate({ right: EDITOR_OFFSET }, 400 );
			$( this.handler ).css( 'opacity', 0.7 );
			this.setState({
				hidden: false
			});
		} else {
			$( this.instructorView ).animate({ right: -max( window.innerWidth * 0.45, 400 ) }, 400 );
			$( this.handler ).css( 'opacity', 0.7 );
			this.setState({
				hidden: true
			});
		}
	}

	onMouseOver() {
		if ( this.state.hidden ) {
			$( this.handler ).css( 'opacity', 1.0 );
		}
	}

	onMouseOut() {
		if ( this.state.hidden ) {
			$( this.handler ).css( 'opacity', 0.7 );
		}
	}

	render() {
		const { session } = this.context;
		return (
			<div
				className="instructorView unselectable"
				ref={( instructorView ) => { this.instructorView = instructorView; }}
				style={{
					width: '45%',
					minWidth: '400px',
					position: 'fixed',
					top: 0,
					right: -max( window.innerWidth * 0.45, 400 ),
					height: '100%',
					zIndex: 1001
				}}
			>
				<div className="instructorTop" style={{
					top: 0,
					position: 'absolute',
					height: '10%',
					width: '100%',
					backgroundColor: 'rgb(232, 232, 232)',
					borderLeft: 'solid 2px darkgrey',
					borderTopLeftRadius: '50%',
					textAlign: 'center',
					marginRight: '30px'
				}}>
					<p style={{ marginTop: '20px', fontFamily: 'Open Sans', fontSize: 20 }}>Instructor Panel</p>
					<hr style={{ background: '#333',  backgroundImage: 'linear-gradient(to right, #ccc, #333, #ccc)', height: '1px', border: 0 }} />
				</div>
				<div className="instructorMiddle" style={{
					position: 'absolute',
					top: '10%',
					height: '80%',
					width: '100%',
					backgroundColor: 'rgb(232, 232, 232)',
					borderLeft: 'solid 2px darkgrey'
				}}>
					<Accordion>
						<Panel header="Active Users" eventKey="1">
							<UserList session={session} />
						</Panel>
						<Panel header={this.state.actionLogHeader} eventKey="2">
							<ButtonToolbar style={{ marginBottom: '10px' }} >
								<ButtonGroup bsSize="xsmall">
									<Button
										className="date-selection"
										id="last_day"
										onClick={this.timeClickFactory( 'last_day' )}
									>Last Day</Button>
									<Button
										className="date-selection"
										id="last_week"
										onClick={this.timeClickFactory( 'last_week' )}
									>Last Week</Button>
									<Button
										className="date-selection"
										id="last_month"
										onClick={this.timeClickFactory( 'last_month' )}
									>Last Month</Button>
									<Button
										className="date-selection"
										id="last_year"
										onClick={this.timeClickFactory( 'last_year' )}
									>Last Year</Button>
								</ButtonGroup>
								<ButtonGroup bsSize="xsmall">
									<Button
										className="date-selection active-button"
										id="all_time"
										onClick={this.timeClickFactory( 'all_time' )}
									>All Data</Button>
									<DateRangePicker
										startDate={this.state.period.from}
										endDate={this.state.period.to}
										onDatesChange={({ startDate, endDate }) => {
											const newPeriod = {
												from: startDate,
												to: endDate
											};
											console.log( newPeriod );
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
							<ActionLog period={this.state.period} onFilter={ ( newHeader ) => {
								this.setState({
									actionLogHeader: newHeader
								});
							}} />
						</Panel>
					</Accordion>
				</div>
				<div className="instructorBottom" style={{
					position: 'absolute',
					top: '90%',
					height: '10%',
					width: '100%',
					backgroundColor: 'rgb(232, 232, 232)',
					borderLeft: 'solid 2px darkgrey',
					borderBottomLeftRadius: '50%'
				 }}>
				</div>
				<div className="viewhandler"
					onClick={this.toggleBar.bind( this )}
					onMouseOver={this.onMouseOver.bind( this )}
					onMouseOut={this.onMouseOut.bind( this )}
					ref={( handler ) => { this.handler = handler; }}
					style={{
						position: 'absolute',
						opacity: 0.7,
						cursor: 'pointer',
						top: '43%',
						right: this.state.hidden ? '110%' : '105%',
						width: 0,
						height: 0,
						borderStyle: 'solid',
						borderWidth: this.state.hidden ? '20px 34.6px 20px 0' : '20px 0 20px 34.6px',
						borderColor: this.state.hidden ? 'transparent #fa9417 transparent transparent' : 'transparent transparent transparent silver'
					}}>
				</div>
			</div>
		);
	}
}


// TYPES //

InstructorView.contextTypes = {
	session: PropTypes.object
};


// EXPORTS //

export default InstructorView;
