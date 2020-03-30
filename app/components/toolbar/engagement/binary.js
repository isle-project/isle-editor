// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Draggable from 'components/draggable';
import Gate from 'components/gate';
import Panel from 'components/panel';
import Tooltip from 'components/tooltip';
import ResponsesTable from './responses_table.js';
import { SHARE_ENGAGEMENT } from 'constants/actions.js';
import { MEMBER_ACTION } from 'constants/events.js';


// VARIABLES //

const ENGAGEMENT_BINARY = 'ENGAGEMENT_BINARY';


// MAIN //

/**
* An ISLE component that displays an engagement meter with which the students can indicate how well they are following the class.
*/
class EngagementBinary extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			nLeft: 0,
			nRight: 0,
			responses: [],
			showResponses: false
		};
	}

	componentDidMount() {
		const session = this.props.session;
		if ( session ) {
			this.unsubscribe = session.subscribe( ( type, action ) => {
				if ( type === MEMBER_ACTION && action.id === ENGAGEMENT_BINARY ) {
					if ( action.type === SHARE_ENGAGEMENT ) {
						const responses = this.state.responses.slice();
						responses.push({
							name: action.name,
							email: action.email,
							value: action.value
						});
						if ( action.value === 1 ) {
							this.setState({
								nRight: this.state.nRight + 1,
								responses
							});
						} else if ( action.value === -1 ){
							this.setState({
								nLeft: this.state.nLeft + 1,
								responses
							});
						}
					}
				}
			});
		}
		let leftButton;
		let rightButton;
		let message;
		switch ( this.props.type ) {
			case 'yes:no':
				leftButton = 'fas fa-times';
				rightButton = 'fas fa-check';
				message = 'Please answer with "Yes" or "No".';
			break;
			case 'too-slow:too-fast':
				leftButton = 'fas fa-backward';
				rightButton = 'fas fa-forward';
				message = 'Is the speed "Too Slow" or "Too Fast"?';
			break;
		}
		if ( !session.isOwner() ) {
			const notification = session.addNotification({
				title: 'Poll',
				message,
				level: 'info',
				position: 'tc',
				dismissible: 'none',
				autoDismiss: 0,
				children: <div style={{ marginBottom: '40px', marginTop: '10px' }}>
					<Button
						variant="secondary" style={{ float: 'left' }}
						onClick={() => {
							session.log({
								id: ENGAGEMENT_BINARY,
								type: SHARE_ENGAGEMENT,
								value: -1
							});
							session.removeNotification( notification );
							session.addNotification({
								title: 'Answer recorded',
								message: 'Your answer was recorded successfully.',
								level: 'success',
								position: 'tc'
							});
						}}
					>
						<i className={leftButton} ></i>
					</Button>
					<Button
						variant="secondary" style={{ float: 'right' }}
						onClick={() => {
							session.log({
								id: ENGAGEMENT_BINARY,
								type: SHARE_ENGAGEMENT,
								value: 1
							});
							session.removeNotification( notification );
							session.addNotification({
								title: 'Answer recorded',
								message: 'Your answer was recorded successfully.',
								level: 'success',
								position: 'tc'
							});
						}}
					>
						<i className={rightButton}></i>
					</Button>
				</div>
			});
		}
	}

	toggleResponses = () => {
		this.setState({
			showResponses: !this.state.showResponses
		});
	}

	render() {
		let leftButton;
		let rightButton;
		switch ( this.props.type ) {
			case 'yes:no':
				leftButton = 'fas fa-times';
				rightButton = 'fas fa-check';
			break;
			case 'too-slow:too-fast':
				leftButton = 'fas fa-backward';
				rightButton = 'fas fa-forward';
			break;
		}
		return (
			<Gate owner>
				<Draggable>
					<Panel header={<span>
						<span className="unselectable" >Poll</span>
						{ this.props.onHide ?
							<Tooltip tooltip="Finish poll" >
								<button className="panel-hide-button fa fa-times" onClick={this.props.onHide} />
							</Tooltip>:
							null
						}
					</span>} className="engagement-meter-panel" >
						<Table bordered size="sm">
							<thead>
								<tr>
									<th><i className={leftButton}></i></th>
									<th><i className={rightButton}></i></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>{this.state.nLeft}</td>
									<td>{this.state.nRight}</td>
								</tr>
							</tbody>
						</Table>
						<Button
							variant="link"
							onClick={this.toggleResponses}
						>
							<small>Toggle Details</small>
						</Button>
					</Panel>
				</Draggable>
				{this.state.showResponses ? <ResponsesTable
					responses={this.state.responses}
					session={this.props.session}
					onHide={this.toggleResponses}
					renderValue={( row ) => {
						return ( row.value === -1 ?
							<i className={leftButton}></i> :
							<i className={rightButton}></i>
						);
					}}
				/> : null}
			</Gate>
		);
	}
}


// PROPERTIES //

EngagementBinary.propTypes = {
	session: PropTypes.object.isRequired,
	onHide: PropTypes.func.isRequired
};


// EXPORTS //

export default EngagementBinary;
