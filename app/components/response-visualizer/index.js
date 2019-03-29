// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Popover from 'react-bootstrap/Popover';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Modal from 'react-bootstrap/Modal';
import hasOwnProperty from '@stdlib/assert/has-own-property';
import contains from '@stdlib/assert/contains';
import uncapitalize from '@stdlib/string/uncapitalize';
import Gate from 'components/gate';
import OverlayTrigger from 'components/overlay-trigger';
import Tooltip from 'components/tooltip';
import SessionContext from 'session/context.js';
import { RESPONSE_VISUALIZER_TOGGLE, RESPONSE_VISUALIZER_EXTENDED } from 'constants/actions.js';
import FullscreenActionDisplay from './fullscreen_action_display.js';
import extractValue from './extract_value.js';


// VARIABLES //

const debug = logger( 'isle:response-visualizer' );


// FUNCTIONS //

/**
* Extracts the second to last word of an action type, as these should be most informative about the nature of the action (recall that project convention is to use `_` to separate words in action types)
*
* @private
* @param {string} str - action type
* @param {string} substring of action type
*/
const extractSubstr = ( str ) => {
	return str.substr( str.lastIndexOf( '_', str.lastIndexOf( '_' ) - 1 ) + 1 );
};

const usersWithFocus = ( userFocuses, usersWithActions, id ) => {
	const out = [];
	for ( let key in userFocuses ) {
		if (
			hasOwnProperty( userFocuses, key ) && // user has component in focus
			!hasOwnProperty( usersWithActions, key ) // user has not already submitted an action
		) {
			const elemID = userFocuses[ key ];
			if ( elemID === id ) {
				out.push( key );
			}
		}
	}
	return out;
};


// MAIN //

/**
* Instructor panel for visualizing component responses.
*
* @property {string} buttonLabel - label of button to pull of action display
* @property {Object} buttonStyle - button CSS styles
* @property {Object} data - data type information to visualize
* @property {string} showID - whether to display the component ID
* @property {string} variant - button style variant
* @property {string} info - action identifier for info
* @property {string} success - action identifier for success
* @property {string} danger - action identifier for danger
*/
class ResponseVisualizer extends Component {
	constructor( props, context ) {
		super( props );

		this.state = {
			actions: [],
			nActions: 0,
			nSuccess: 0,
			nDanger: 0,
			nInfo: 0,
			showActions: false,
			showExtended: false,
			showDeleteModal: false,
			selectedAction: null,
			period: null,
			selectedCohort: null
		};

		if ( props.info && props.id ) {
			// Register response visualizer in session:
			context.responseVisualizers[ props.id ] = {
				type: props.info,
				ref: this
			};
		}
	}

	componentDidMount() {
		const session = this.context;
		this.addSessionActions();
		if ( session ) {
			this.unsubscribe = session.subscribe( ( type, action ) => {
				if ( type === 'retrieved_user_actions' ) {
					this.addSessionActions();
				}
				else if (
					type === 'member_action' &&
					action.id === this.props.id
				) {
					if (
						action.type === 'FOCUS_ELEMENT' ||
						action.type === 'LOSE_FOCUS_ELEMENT'
					) {
						this.forceUpdate();
					} else if (
						action.type === this.props.info ||
						action.type === this.props.success ||
						action.type === this.props.danger
					) {
						if (
							this.state.selectedCohort &&
							!contains( this.state.selectedCohort.members, action.email )
						) {
							return;
						}
						this.pushSessionAction( action );
					}
				}
			});
		}
	}

	componentWillUnmount() {
		if ( this.unsubscribe ) {
			this.unsubscribe();
		}
	}

	toggleActions = () => {
		const session = this.context;
		session.log({
			id: this.props.id+'_response_visualizer',
			type: RESPONSE_VISUALIZER_TOGGLE,
			value: !this.state.showActions
		});
		const newState = {
			showActions: !this.state.showActions
		};
		if ( newState.showActions ) {
			this.addSessionActions();
		} else {
			newState.period = null;
		}
		this.setState( newState );
	}

	toggleExtended = () => {
		this.setState({
			showExtended: !this.state.showExtended
		}, () => {
			const session = this.context;
			session.log({
				id: this.props.id+'_response_visualizer',
				type: RESPONSE_VISUALIZER_EXTENDED,
				value: this.state.showExtended
			});
		});
	}

	onPeriodChange = ( newPeriod ) => {
		this.setState({
			period: newPeriod
		}, this.addSessionActions );
	}

	onCohortChange = ( event ) => {
		const cohorts = this.context.cohorts;
		let cohort;
		for ( let i = 0; i < cohorts.length; i++ ) {
			if ( cohorts[ i ].title === event.target.value ) {
				cohort = cohorts[ i ];
				break;
			}
		}
		this.setState({
			selectedCohort: cohort
		}, this.addSessionActions );
	}

	pushSessionAction = ( action ) => {
		action = extractValue( action );
		const filtered = this.state.actions;
		if ( this.state.period ) {
			const { from, to } = this.state.period;
			if ( action.absoluteTime > from && action.absoluteTime < to ) {
				filtered.unshift( action );
			}
		} else {
			filtered.unshift( action );
		}
		const newState = {
			actions: filtered,
			nActions: this.state.nActions + 1
		};
		if ( !this.emailHash[ action.email ] ) {
			this.emailHash[ action.email ] = action.type;
			if ( this.props.success && action.type === this.props.success ) {
				newState.nSuccess = this.state.nSuccess + 1;
			} else if ( this.props.danger && action.type === this.props.danger ) {
				newState.nDanger = this.state.nDanger + 1;
			} else if ( this.props.info && action.type === this.props.info ){
				newState.nInfo = this.state.nInfo + 1;
			}
		}
		this.setState( newState );
	}

	addSessionActions = () => {
		debug( 'Add session actions...' );
		const session = this.context;
		const actions = session.socketActions;
		const filtered = [];
		this.emailHash = {};
		for ( let i = 0; i < actions.length; i++ ) {
			let action = actions[ i ];
			if (
				action.id === this.props.id &&
				( action.type === this.props.info || action.type === this.props.success || action.type === this.props.danger )
			) {
				action = extractValue( action );
				this.emailHash[ action.email ] = action.type;
				if (
					this.state.selectedCohort &&
					!contains( this.state.selectedCohort.members, action.email )
				) {
					continue;
				}
				if ( this.state.period ) {
					const { from, to } = this.state.period;
					if ( action.absoluteTime > from && action.absoluteTime < to ) {
						filtered.push( action );
					}
				} else {
					filtered.push( action );
				}
			}
		}
		let newState = {
			nSuccess: 0,
			nDanger: 0,
			nInfo: 0,
			actions: filtered
		};
		if ( !this.state.period ) {
			// Attach total number of actions on initial call:
			newState.nActions = filtered.length;
		}
		const users = session.userList;
		for ( let i = 0; i < users.length; i++ ) {
			if ( hasOwnProperty( this.emailHash, users[ i ].email ) ) {
				const type = this.emailHash[ users[ i ].email ];
				if ( this.props.success && type === this.props.success ) {
					newState.nSuccess += 1;
				} else if ( this.props.danger && type === this.props.danger ) {
					newState.nDanger += 1;
				} else if ( this.props.info && type === this.props.info ) {
					newState.nInfo += 1;
				}
			}
		}
		this.setState( newState );
	}

	closeDeleteModal = () => {
		this.setState({
			showDeleteModal: false,
			selectedAction: null
		});
	}

	deleteFactory = ( idx ) => {
		return () => {
			this.setState({
				selectedAction: this.state.actions[ idx ],
				showDeleteModal: true
			});
		};
	}

	deleteSelectedAction = () => {
		const session = this.context;
		session.removeSessionElementFromDB( this.state.selectedAction.sessiondataID, ( err ) => {
			if ( !err ) {
				this.addSessionActions();
			}
			this.closeDeleteModal();
		});
	}

	renderTooltip() {
		const session = this.context;
		const nUsers = session.userList.length;
		const focusUsers = usersWithFocus( session.userFocuses, this.emailHash, this.props.id );
		let tooltip = 'Interaction rate for currently active students:\n\n';
		const table = <table className="table table-bordered table-condensed" >
			<thead>
				<tr>
					<th>Action Type</th>
					<th>Rate</th>
					<th>Color</th>
				</tr>
			</thead>
			<tbody>
				{ this.props.success ?
					<tr>
						<td>{extractSubstr( this.props.success )}</td>
						<td>{this.state.nSuccess} / {nUsers}</td>
						<td>Green</td>
					</tr> : null
				}
				{ this.props.danger ?
					<tr>
						<td>{extractSubstr( this.props.danger)}</td>
						<td>{this.state.nDanger} / {nUsers}</td>
						<td>Red</td>
					</tr> : null
				}
				{ this.props.info ?
					<tr>
						<td>{extractSubstr( this.props.info )}</td>
						<td>{this.state.nInfo} / {nUsers}</td>
						<td>Blue</td>
					</tr> : null
				}
				<tr>
					<td>Component in focus</td>
					<td>{focusUsers.length} / {nUsers}</td>
					<td>Orange</td>
				</tr>
			</tbody>
		</table>;

		tooltip = <Popover title={tooltip} style={{ fontSize: 12, textAlign: 'left', maxWidth: 1200 }} >
			{table}
			<p>The following users currently have the component in focus:</p>
			<p style={{ wordWrap: 'break-word' }} >{focusUsers.join( ', ')}</p>
		</Popover>;
		return tooltip;
	}

	renderDeleteModal() {
		return ( <Modal
			show={this.state.showDeleteModal}
			style={{ zIndex: 2000 }}
			backdropClassName="modal-backdrop-second-order"
		>
			<Modal.Header>
				<Modal.Title>Delete user action?</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				Are you sure that you want to delete the selected user action?
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={this.closeDeleteModal}>Cancel</Button>
				<Button
					variant="warning"
					onClick={this.deleteSelectedAction}
				>
					Delete
				</Button>
			</Modal.Footer>
		</Modal> );
	}

	renderFullscreenModal() {
		const optionalProps = {};
		if ( this.props.buttonLabel ) {
			optionalProps.actionLabel = this.props.buttonLabel;
		}
		if ( !this.state.showActions ) {
			return null;
		}
		return ( <FullscreenActionDisplay
			componentID={this.props.id}
			actions={this.state.actions}
			showExtended={this.state.showExtended}
			deleteFactory={this.deleteFactory}
			onPeriodChange={this.onPeriodChange}
			toggleExtended={this.toggleExtended}
			toggleActions={this.toggleActions}
			data={this.props.data}
			selectedCohort={this.state.selectedCohort}
			onCohortChange={this.onCohortChange}
			{...optionalProps}
		/> );
	}

	render() {
		if ( !this.props.id ) {
			return <Gate owner><label style={{ marginLeft: 5 }}>No ID supplied.</label></Gate>;
		}
		const session = this.context;
		const nUsers = session.userList.length;
		const focusUsers = usersWithFocus( session.userFocuses, this.emailHash, this.props.id );
		let successRate = this.state.nSuccess / nUsers;
		successRate *= 100.0;
		let dangerRate = this.state.nDanger / nUsers;
		dangerRate *= 100.0;
		let infoRate = this.state.nInfo / nUsers;
		infoRate *= 100.0;
		let focusRate = focusUsers.length / nUsers;
		focusRate *= 100.0;
		return (
			<Gate owner>
				{this.renderFullscreenModal()}
				<ButtonGroup id={`${this.props.id}_response_visualizer`} size="sm" vertical style={{ verticalAlign: 'inherit', ...this.props.style }} >
					<Tooltip
						placement='top'
						tooltip={this.props.showID ? <span>
							Open {uncapitalize( this.props.buttonLabel )} for component with ID {this.props.id}
						</span> : null}
					>
						<Button
							onClick={this.toggleActions}
							style={{ ...this.props.buttonStyle }}
							variant={this.props.variant}
							size="sm"
							id={`${this.props.id}_answers_button`}
						>
							<span style={{ marginRight: '5px', pointerEvents: 'none' }} >{this.props.buttonLabel}</span>
							<Badge variant="dark" style={{ fontSize: '10px', pointerEvents: 'none' }}>{this.state.nActions}</Badge>
						</Button>
					</Tooltip>
					<OverlayTrigger
						trigger="hover"
						placement="top"
						overlay={this.renderTooltip()}
					>
						<ProgressBar style={{ width: '100%', marginTop: '3px', height: '0.7rem', boxShadow: '0 0 2px black' }}>
							<ProgressBar variant="info" now={infoRate} max={100} min={0} />
							<ProgressBar variant="warning" now={focusRate} max={100} min={0} />
							<ProgressBar variant="success" now={successRate} max={100} min={0} />
							<ProgressBar variant="danger" now={dangerRate} max={100} min={0} />
						</ProgressBar>
					</OverlayTrigger>
				</ButtonGroup>
				{this.renderDeleteModal()}
			</Gate>
		);
	}
}


// PROPERTIES //

ResponseVisualizer.propTypes = {
	buttonLabel: PropTypes.string,
	buttonStyle: PropTypes.object,
	data: PropTypes.shape({
		type: PropTypes.oneOf([
			'factor', 'text', 'number', 'matrix', 'range'
		]),
		levels: PropTypes.array
	}),
	showID: PropTypes.bool,
	success: PropTypes.string,
	danger: PropTypes.string,
	info: PropTypes.string,
	style: PropTypes.object,
	variant: PropTypes.oneOf([
		'primary', 'secondary', 'light', 'dark'
	])
};

ResponseVisualizer.defaultProps = {
	buttonLabel: 'Actions',
	buttonStyle: {},
	data: {
		type: 'text'
	},
	showID: true,
	success: null,
	danger: null,
	info: null,
	style: {},
	variant: 'secondary'
};

ResponseVisualizer.contextType = SessionContext;


// EXPORTS //

export default ResponseVisualizer;
