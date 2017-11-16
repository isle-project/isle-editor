// MODULES //

import React, { Component } from 'react';
import { Accordion, Panel } from 'react-bootstrap';
import moment from 'moment';
import $ from 'jquery';
import ActionLog from './action_log.js';
import UserList from './user_list.js';
import max from '@stdlib/math/base/special/max';
import isElectron from 'utils/is-electron';
import PropTypes from 'prop-types';
import RangePicker from 'components/range-picker';
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
			},
			nActions: null
		};
	}

	componentDidMount() {
		const { session } = this.context;

		this.setState({
			nActions: session.socketActions.length
		});

		this.unsubscribe = session.subscribe( ( type, value ) => {
			if ( type === 'logout' ) {
				debug( 'Should reset the filters after user logout:' );
				this.setState({
					actionLogHeader: <h4>Action Log</h4>
				});
			}
			else if ( type === 'member_action' ) {
				const { session } = this.context;
				this.setState({
					nActions: session.socketActions.length
				});
			}
			else if ( type === 'retrieved_user_actions' ) {
				this.setState({
					nActions: value.length
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
					<h3 style={{ marginTop: '20px' }}>Instructor Panel</h3>
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
							<RangePicker onChange={( newPeriod ) => {
								this.setState({
									period: newPeriod
								});
							}} />
							<span style={{ fontSize: '12px', fontWeight: 600 }}>
								{'# '+this.state.nActions}
							</span>
							<ActionLog
								period={this.state.period}
								onFilter={ ( newHeader, nActions ) => {
									this.setState({
										actionLogHeader: newHeader,
										nActions: nActions
									});
								}}
								onTimeRangeChange={ ( from, to, nActions ) => {
									this.setState({
										nActions
									});
								}}
							/>
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
						right: this.state.hidden ? '105%' : '102%',
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
