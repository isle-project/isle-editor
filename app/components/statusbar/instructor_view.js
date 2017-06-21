// MODULES //

import React, { Component } from 'react';
import { Accordion, Panel } from 'react-bootstrap';
import $ from 'jquery';
import ActionLog from './action_log.js';
import UserList from './user_list.js';
import max from '@stdlib/math/base/special/max';


// MAIN //

class InstructorView extends Component {

	constructor( props ) {
		super( props );

		this.state = {
			hidden: true,
			actionLogHeader: <h4>Action Log</h4>
		};

	}

	toggleBar() {
		if ( this.state.hidden ) {
			$( this.instructorView ).animate({ right: '15px' }, 300 );
			$( this.handler ).css( 'opacity', 0.7 );
			this.setState({
				hidden: false
			});
		} else {
			$( this.instructorView ).animate({ right: -max( window.innerWidth * 0.25, 400 ) }, 300 );
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
		const { session } = this.props;
		return (
			<div
				className="instructorView unselectable"
				ref={( instructorView ) => { this.instructorView = instructorView; }}
				style={{
					width: '25%',
					minWidth: '400px',
					position: 'fixed',
					top: 0,
					right: -max( window.innerWidth * 0.25, 400 ),
					height: '100%',
					zIndex: 100
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
					<p style={{ marginTop: '20px', fontFamily: 'monospace', fontSize: 12 }}>Instructor Panel</p>
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
							<ActionLog session={session} onFilter={ ( newHeader ) => {
								this.setState({
									actionLogHeader: newHeader
								});
							}} />
						</Panel>
						<Panel header="Messages" eventKey="3">
						Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
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


// EXPORTS //

export default InstructorView;
