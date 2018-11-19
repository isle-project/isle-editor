// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Badge from 'react-bootstrap/lib/Badge';
import Button from 'react-bootstrap/lib/Button';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import ProgressBar from 'react-bootstrap/lib/ProgressBar';
import Modal from 'react-bootstrap/lib/Modal';
import hasOwnProperty from '@stdlib/assert/has-own-property';
import isArray from '@stdlib/assert/is-array';
import uncapitalize from '@stdlib/string/uncapitalize';
import NINF from '@stdlib/constants/math/float64-ninf';
import Gate from 'components/gate';
import Tooltip from 'components/tooltip';
import SessionContext from 'session/context.js';
import FullscreenActionDisplay from './fullscreen_action_display.js';
import extractValue from './extract_value.js';


// FUNCTIONS //

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
			counts: [],
			showActions: false,
			showExtended: false,
			showDeleteModal: false,
			selectedAction: null,
			period: null
		};
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
		});
	}

	onPeriodChange = ( newPeriod ) => {
		this.setState({
			period: newPeriod
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
		if ( this.props.data.type === 'text' ) {
			this.setState( newState );
		}
		else if ( this.props.data.type === 'factor' ) {
			const counts = this.tabulateValues( filtered );
			newState.counts = counts;
			this.setState( newState );
		} else {
			// Case: props.data.type === 'number':
			this.setState( newState );
		}
	}

	addSessionActions = () => {
		const session = this.context;
		const actions = session.socketActions;
		const filtered = [];
		this.emailHash = {};
		for ( let i = 0; i < actions.length; i++ ) {
			let action = actions[ i ];
			if ( action.id === this.props.id ) {
				action = extractValue( action );
				this.emailHash[ action.email ] = action.type;
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
			nInfo: 0
		};
		if ( this.props.data.type === 'text' ) {
			newState.actions = filtered;
		}
		else if ( this.props.data.type === 'factor' ) {
			const counts = this.tabulateValues( filtered );
			newState = {
				...newState,
				actions: filtered,
				counts: counts
			};
		} else {
			// Case: props.data.type === 'number':
			newState.actions = filtered;
		}
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

	tabulateValues = ( actions ) => {
		const levels = this.props.data.levels;
		const table = {};
		for ( let i = 0; i < actions.length; i++ ) {
			const v = actions[ i ];
			if ( isArray( v.value ) ) {
				for ( let j = 0; j < v.value.length; j++ ) {
					const bool = v.value[ j ];
					if ( bool ) {
						const key = levels[ j ];
						if ( !table[ key ] ) {
							table[ key ] = 1;
						} else {
							table[ key ] += 1;
						}
					}
				}
			} else {
				const key = levels[ v.value ];
				if ( !table[ key ] ) {
					table[ key ] = 1;
				} else {
					table[ key ] += 1;
				}
			}
		}
		let maxVal = NINF;
		const counts = new Array( levels.length );
		for ( let i = 0; i < levels.length; i++ ) {
			if ( table[ levels[ i ] ] > maxVal ) {
				maxVal = table[ levels[ i ] ];
			}
			counts[ i ] = table[ levels[ i ] ];
		}
		return counts;
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
		return ( <FullscreenActionDisplay
			componentID={this.props.id}
			actions={this.state.actions}
			showExtended={this.state.showExtended}
			show={this.state.showActions}
			deleteFactory={this.deleteFactory}
			onPeriodChange={this.onPeriodChange}
			toggleExtended={this.toggleExtended}
			toggleActions={this.toggleActions}
			data={this.props.data}
			counts={this.state.counts}
			{...optionalProps}
		/> );
	}

	render() {
		const session = this.context;
		if ( !this.props.id ) {
			return <Gate owner><label style={{ marginLeft: 5 }}>No ID supplied.</label></Gate>;
		}
		const nUsers = session.userList.length;
		const focusUsers = usersWithFocus( session.userFocuses, this.emailHash, this.props.id );
		let successRate = this.state.nSuccess / nUsers;
		successRate *= 100.0;
		let dangerRate = this.state.nDanger / nUsers;
		dangerRate *= 100.0;
		let infoRate = this.state.nInfo / nUsers;
		infoRate *= 100.0;
		let focusRate = ( focusUsers.length - this.state.nInfo ) / nUsers;
		focusRate *= 100.0;
		let tooltip = 'Interaction rate for currently active students:\n\n';
		if ( this.props.success ) {
			tooltip += `${this.props.success}: ${this.state.nSuccess} / ${nUsers} (green)\n`;
		}
		if ( this.props.danger ) {
			tooltip += `${this.props.danger}: ${this.state.nDanger} / ${nUsers} (red)\n`;
		}
		if ( this.props.info ) {
			tooltip += `${this.props.info}: ${this.state.nInfo} / ${nUsers} (blue)\n`;
		}
		tooltip += `${focusUsers.length} / ${nUsers} users currently engaging with component (orange):\n`;
		tooltip += `${focusUsers.join( ', ')}`;
		return (
			<Gate owner>
				{this.renderFullscreenModal()}
				<ButtonGroup size="sm" vertical style={{ verticalAlign: 'inherit', ...this.props.style }} >
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
						>
							<span style={{ marginRight: '5px' }} >{this.props.buttonLabel}</span>
							<Badge variant="dark" style={{ fontSize: '10px' }}>{this.state.nActions}</Badge>
						</Button>
					</Tooltip>
					<Tooltip placement="top" tooltip={tooltip}>
						<ProgressBar style={{ width: '100%', marginTop: '3px', height: '0.7rem', boxShadow: '0 0 2px black' }}>
							<ProgressBar variant="info" now={infoRate} max={100} min={0} />
							<ProgressBar variant="warning" now={focusRate} max={100} min={0} />
							<ProgressBar variant="success" now={successRate} max={100} min={0} />
							<ProgressBar variant="danger" now={dangerRate} max={100} min={0} />
						</ProgressBar>
					</Tooltip>
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
			'factor', 'text', 'number', 'matrix'
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
