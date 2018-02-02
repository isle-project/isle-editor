// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/lib/Button';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import Collapse from 'react-bootstrap/lib/Collapse';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import Modal from 'react-bootstrap/lib/Modal';
import Panel from 'react-bootstrap/lib/Panel';
import isString from '@stdlib/assert/is-string';
import tabulate from '@stdlib/utils/tabulate';
import trim from '@stdlib/string/trim';
import NINF from '@stdlib/constants/math/float64-ninf';
import Gate from 'components/gate';
import TextArea from 'components/text-area';
import FullscreenActionDisplay from './fullscreen_action_display.js';


// MAIN //

class InstructorBar extends Component {
	constructor() {
		super();

		this.state = {
			actions: [],
			counts: [],
			categories: [],
			receivedFeedbacks: [],
			feedbackIsOpen: false,
			feedback: '',
			showExtended: false,
			showDeleteModal: false,
			selectedAction: null,
			period: null
		};
	}

	componentDidMount() {
		const { session } = this.context;
		if ( session ) {
			this.unsubscribe = session.subscribe( ( type, action ) => {
				if ( type === 'member_action' ) {
					if ( action.type === 'COMPONENT_FEEDBACK' ) {
						if ( this.props.id === action.id ) {
							const receivedFeedbacks = this.state.receivedFeedbacks.slice();
							receivedFeedbacks.push( action.value );
							this.setState({
								receivedFeedbacks
							});
						}
					}
					this.forceUpdate();
				}
				else if ( type === 'retrieved_user_actions' ) {
					this.addSessionActions();
				}
			});
		}
	}

	componentWillUnmount() {
		if ( this.unsubscribe ) {
			this.unsubscribe();
		}
	}

	onFeedback = ( text ) => {
		this.setState({
			feedback: text
		});
	}

	toggleFeedback = () => {
		this.setState({
			feedbackIsOpen: !this.state.feedbackIsOpen
		});
	}

	sendFeedback = () => {
		const { session } = this.context;
		session.log({
			id: this.props.id,
			type: 'COMPONENT_FEEDBACK',
			value: this.state.feedback
		}, 'members' );
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

	addSessionActions = () => {
		const { session } = this.context;
		const actions = session.socketActions;
		const filtered = [];
		for ( let i = 0; i < actions.length; i++ ) {
			let action = actions[ i ];
			if ( action.id === this.props.id ) {
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
			<div>
				<Gate user>
					{ this.state.receivedFeedbacks.length > 0 ? <Panel>
						<Panel.Heading>Feedback</Panel.Heading>
						<Panel.Body>
							<ListGroup fill style={{ marginLeft: 0 }}>
								{this.state.receivedFeedbacks.map( ( elem, idx ) =>
									( <ListGroupItem key={idx} style={{ padding: '2px 5px' }}>
										<p>{elem}</p>
									</ListGroupItem> )
								)}
							</ListGroup>
						</Panel.Body>
					</Panel> : null }
				</Gate>
				<Gate owner>
					<div>
						<label>Component ID:</label>
						<span style={{ marginLeft: '5px' }}>{this.props.id}</span>
						{this.renderFullscreenModal()}
					</div>
					<ButtonGroup bsSize="small" >
						<Button onClick={this.toggleFeedback} >Feedback</Button>
						<Button onClick={this.toggleActions} >Actions</Button>
					</ButtonGroup>
					<Collapse in={this.state.feedbackIsOpen}>
						<div>
							<TextArea onChange={this.onFeedback} />
							<Button bsSize="small" onClick={this.sendFeedback} >Send Feedback to all</Button>
						</div>
					</Collapse>
					{this.renderDeleteModal()}
				</Gate>
			</div>
		);
	}
}


// PROPERTY TYPES //

InstructorBar.propTypes = {
	dataType: PropTypes.oneOf([
		'factor', 'text', 'number'
	])
};

InstructorBar.defaultProps = {
	dataType: 'text'
};

InstructorBar.contextTypes = {
	session: PropTypes.object
};


// EXPORTS //

export default InstructorBar;
