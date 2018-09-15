// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Badge from 'react-bootstrap/lib/Badge';
import Button from 'react-bootstrap/lib/Button';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import Modal from 'react-bootstrap/lib/Modal';
import isString from '@stdlib/assert/is-string';
import tabulate from '@stdlib/utils/tabulate';
import trim from '@stdlib/string/trim';
import NINF from '@stdlib/constants/math/float64-ninf';
import Gate from 'components/gate';
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
*/
class InstructorBar extends Component {
	constructor() {
		super();

		this.state = {
			actions: [],
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
				actions: filtered
			});
		}
		else if ( this.props.dataType === 'factor' ) {
			const { categories, counts } = this.tabulateValues( filtered );
			this.setState({
				actions: filtered,
				counts: counts,
				categories: categories
			});
		} else {
			// Case: props.dataType === 'number':
			this.setState({
				actions: filtered
			});
		}
	}

	addSessionActions = () => {
		const { session } = this.context;
		const actions = session.socketActions;
		const filtered = [];
		for ( let i = 0; i < actions.length; i++ ) {
			let action = actions[ i ];
			if ( action.id === this.props.id ) {
				action = extractValue( action );
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
		if ( this.props.dataType === 'text' ) {
			this.setState({
				actions: filtered
			});
		}
		else if ( this.props.dataType === 'factor' ) {
			const { categories, counts } = this.tabulateValues( filtered );
			this.setState({
				actions: filtered,
				counts: counts,
				categories: categories
			});
		} else {
			// Case: props.dataType === 'number':
			this.setState({
				actions: filtered
			});
		}
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
					bsStyle="warning"
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
			return <Gate owner><label>No ID supplied.</label></Gate>;
		}
		return (
			<Gate owner>
				{ this.props.showID ? <div>
					<label>Component ID:</label>
					<span style={{ marginLeft: '5px' }}>{this.props.id}</span>
				</div> : null }
				{this.renderFullscreenModal()}
				<ButtonGroup bsSize="small" >
					<Button
						onClick={this.toggleActions}
						style={{ ...this.props.buttonStyle }}
					>
						<span style={{ marginRight: '5px' }} >{this.props.buttonLabel}</span>
						<Badge style={{ fontSize: '10px' }}>{this.state.actions.length}</Badge>
					</Button>
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
	showID: PropTypes.bool
};

InstructorBar.defaultProps = {
	buttonLabel: 'Actions',
	buttonStyle: {},
	dataType: 'text',
	showID: true
};

InstructorBar.contextTypes = {
	session: PropTypes.object
};


// EXPORTS //

export default InstructorBar;
