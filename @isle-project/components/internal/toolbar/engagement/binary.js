// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Draggable from '@isle-project/components/draggable';
import Gate from '@isle-project/components/gate';
import Panel from '@isle-project/components/panel';
import ResponsesTable from './responses_table.js';
import { SHARE_ENGAGEMENT } from '@isle-project/constants/actions.js';
import { MEMBER_ACTION } from '@isle-project/constants/events.js';


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
				message = this.props.t( 'answer-yes-no' );
			break;
			case 'too-slow:too-fast':
				leftButton = 'fas fa-backward';
				rightButton = 'fas fa-forward';
				message = this.props.t( 'answer-slow-fast' );
			break;
		}
		if ( !session.isOwner() ) {
			const notification = session.addNotification({
				title: this.props.t( 'poll' ),
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
								title: this.props.t( 'answer-recorded' ),
								message: this.props.t( 'answer-recorded-message' ),
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
								title: this.props.t( 'answer-recorded' ),
								message: this.props.t( 'answer-recorded-message' ),
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
	};

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
		const { t } = this.props;
		const table = <Table bordered size="sm">
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
		</Table>;
		return (
			<Fragment>
				<Draggable dragHandleClassName="card-header" >
					<Gate owner showOwnerInPresentationMode={false} banner={null} >
						<Panel header={t('poll')} hideTooltip={t('finish-poll')} onHide={this.props.onHide}
							className="engagement-meter-panel" minimizable trapFocus
						>
							{table}
							<Button
								variant="link"
								onClick={this.toggleResponses}
							>
								<small>{t('toggle-details')}</small>
							</Button>
						</Panel>
					</Gate>
					<Gate user notOwner header={t('poll')} banner={null} >
						<Panel
							header={t('poll')}
							className="engagement-meter-panel"
							minimizable trapFocus
						>
							{table}
						</Panel>
					</Gate>
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
			</Fragment>
		);
	}
}


// PROPERTIES //

EngagementBinary.propTypes = {
	session: PropTypes.object.isRequired,
	onHide: PropTypes.func.isRequired
};


// EXPORTS //

export default withTranslation( 'internal/toolbar' )( EngagementBinary );
