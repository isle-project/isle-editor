// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Badge from 'react-bootstrap/lib/Badge';
import Button from 'react-bootstrap/lib/Button';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import ProgressBar from 'react-bootstrap/lib/ProgressBar';
import Modal from 'react-bootstrap/lib/Modal';
import hasOwnProperty from '@stdlib/assert/has-own-property';
import isString from '@stdlib/assert/is-string';
import tabulate from '@stdlib/utils/tabulate';
import trim from '@stdlib/string/trim';
import uncapitalize from '@stdlib/string/uncapitalize';
import NINF from '@stdlib/constants/math/float64-ninf';
import Gate from 'components/gate';
import Tooltip from 'components/tooltip';
import FullscreenActionDisplay from './fullscreen_action_display.js';
import extractValue from './extract_value.js';


// MAIN //

/**
* Instructor bar for accessing component actions.
*
* @property {string} buttonLabel - label of button to pull of action display
* @property {Object} buttonStyle - button CSS styles
* @property {string} dataType - type of data to visualize
* @property {string} showID - whether to display the component ID
* @property {string} variant - button style variant
*/
class InstructorBar extends Component {
	constructor( props, context ) {
		super( props );

		this.state = {
			actions: [],
			nActions: 0,
			completionPercentage: 0,
			counts: [],
			categories: [],
			showActions: false,
			showExtended: false,
			showDeleteModal: false,
			selectedAction: null,
			period: null
		};
	}

	componentDidMount() {
		const { session } = this.context;
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
					this.pushSessionAction( action );
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
		if ( !this.state.showActions ) {
			this.addSessionActions();
		}
		this.setState({
			showActions: !this.state.showActions
		});
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
		if ( this.props.dataType === 'text' ) {
			this.setState({
				actions: filtered,
				nActions: this.state.nActions + 1
			});
		}
		else if ( this.props.dataType === 'factor' ) {
			const { categories, counts } = this.tabulateValues( filtered );
			this.setState({
				actions: filtered,
				counts: counts,
				categories: categories,
				nActions: this.state.nActions + 1
			});
		} else {
			// Case: props.dataType === 'number':
			this.setState({
				actions: filtered,
				nActions: this.state.nActions + 1
			});
		}
	}

	addSessionActions = () => {
		const { session } = this.context;
		const actions = session.socketActions;
		const filtered = [];
		const emailHash = {};
		for ( let i = 0; i < actions.length; i++ ) {
			let action = actions[ i ];
			if ( action.id === this.props.id ) {
				action = extractValue( action );
				emailHash[ action.email ] = true;
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

		const users = session.userList;
		let completionPercentage = 0;
		for ( let i = 0; i < users.length; i++ ) {
			if ( hasOwnProperty( emailHash, users[ i ].email ) ) {
				completionPercentage += 1;
			}
		}
		completionPercentage /= session.userList.length;
		completionPercentage *= 100.0;

		let newState;
		if ( this.props.dataType === 'text' ) {
			newState = {
				actions: filtered,
				completionPercentage
			};
		}
		else if ( this.props.dataType === 'factor' ) {
			const { categories, counts } = this.tabulateValues( filtered );
			newState = {
				actions: filtered,
				counts: counts,
				categories: categories,
				completionPercentage
			};
		} else {
			// Case: props.dataType === 'number':
			newState = {
				actions: filtered,
				completionPercentage
			};
		}
		if ( !this.state.period ) {
			// Attach total number of actions on initial call:
			newState.nActions = filtered.length;
		}
		this.setState( newState );
	}

	tabulateValues = ( actions ) => {
		const values = actions.map( x => x.value );
		const tabulated = tabulate( values );
		let maxVal = NINF;
		const counts = tabulated.map( d => {
			if ( d[ 1 ] > maxVal ) {
				maxVal = d[ 1 ];
			}
			return d[ 1 ];
		});
		const categories = tabulated.map( d => {
			if ( !isString( d[ 0 ]) ) {
				return d[ 0 ];
			}
			// Trim whitespace from beginning and end:
			let out = trim( d[ 0 ]);

			// Remove extra whitespace:
			out = out.replace( /\s+/g, ' ' );

			// Cut off end if string is too long:
			out = out.substring( 0, 50 );
			if ( d[ 0 ].length > 50 ) {
				out += '...';
			}
			return out;
		});
		return {
			counts: counts,
			categories: categories
		};
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
		const { session } = this.context;
		session.removeSessionElementFromDatabase( this.state.selectedAction.sessiondataID, ( err ) => {
			if ( !err ) {
				this.addSessionActions();
			}
			this.closeDeleteModal();
		});
	}

	renderDeleteModal() {
		return ( <Modal show={this.state.showDeleteModal}>
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
		return ( <FullscreenActionDisplay
			actions={this.state.actions}
			actionLabel={this.props.buttonLabel}
			showExtended={this.state.showExtended}
			show={this.state.showActions}
			deleteFactory={this.deleteFactory}
			onPeriodChange={this.onPeriodChange}
			toggleExtended={this.toggleExtended}
			toggleActions={this.toggleActions}
			dataType={this.props.dataType}
			counts={this.state.counts}
			categories={this.state.categories}
		/> );
	}

	render() {
		if ( !this.props.id ) {
			return <Gate owner><label style={{ marginLeft: 5 }}>No ID supplied.</label></Gate>;
		}
		return (
			<Gate owner>
				{this.renderFullscreenModal()}
				<ButtonGroup size="sm" vertical style={{ verticalAlign: 'inherit', ...this.props.style }} >
					<Tooltip
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
					<Tooltip placement="top" tooltip={`Interaction rate for currently active students: ${this.state.completionPercentage}%`}>
						<ProgressBar style={{ width: '100%' }} variant="success" now={this.state.completionPercentage} max={100} min={0} />
					</Tooltip>
				</ButtonGroup>
				{this.renderDeleteModal()}
			</Gate>
		);
	}
}


// PROPERTIES //

InstructorBar.propTypes = {
	buttonLabel: PropTypes.string,
	buttonStyle: PropTypes.object,
	dataType: PropTypes.oneOf([
		'factor', 'text', 'number'
	]),
	showID: PropTypes.bool,
	style: PropTypes.object,
	variant: PropTypes.oneOf([
		'primary', 'secondary', 'light', 'dark'
	])
};

InstructorBar.defaultProps = {
	buttonLabel: 'Actions',
	buttonStyle: {},
	dataType: 'text',
	showID: true,
	style: {},
	variant: 'secondary'
};

InstructorBar.contextTypes = {
	session: PropTypes.object
};


// EXPORTS //

export default InstructorBar;
