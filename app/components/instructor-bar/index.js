// MODULES //

import React, { Component } from 'react';
import { Button, ButtonGroup, Collapse, Col, Grid, ListGroup, ListGroupItem, Modal, Panel, Row, Well } from 'react-bootstrap';
import PropTypes from 'prop-types';
import tabulate from '@stdlib/utils/tabulate';
import NINF from '@stdlib/math/constants/float64-ninf';
import Plotly from 'components/plotly';
import Gate from 'components/gate';
import TextArea from 'components/text-area';


// MAIN //

class InstructorBar extends Component {

	constructor() {
		super();

		this.state = {
			actions: [],
			counts: [],
			categories: [],
			receivedFeedbacks: [],
			actionsAreOpen: false,
			feedbackIsOpen: false,
			feedback: '',
			showExtended: false,
			showDeleteModal: false,
			selectedAction: null
		};
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
			showActions: !this.state.showActions,
		});
	}

	toggleExtended = () => {
		this.setState({
			showExtended: !this.state.showExtended
		});
	}

	addSessionActions = () => {
		const { session } = this.context;
		const actions = session.socketActions;
		const filtered = [];
		for ( let i = 0; i < actions.length; i++ ) {
			if ( actions[ i ].id === this.props.id ) {
				filtered.push( actions[ i ]);
			}
		}
		const values = filtered.map( x => x.value );
		const tabulated = tabulate( values );
		let maxVal = NINF;
		const counts = tabulated.map( d => {
			if ( d[ 1 ] > maxVal ) {
				maxVal = d[ 1 ];
			}
			return d[ 1 ];
		});
		const categories = tabulated.map( d => {
			return d[ 0 ];
		});
		this.setState({
			actions: filtered,
			counts: counts,
			categories: categories
		});
	}

	componentDidMount() {
		const { session } = this.context;

		this.unsubscribe = session.subscribe( ( type, action ) => {
			if ( type === 'member_action' ) {
				if ( action.type === 'COMPONENT_FEEDBACK' ) {
					if ( this.props.id === action.id  ) {
						const receivedFeedbacks = this.state.receivedFeedbacks.slice();
						console.log( action );
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

	componentWillUnmount() {
		this.unsubscribe();
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

	renderBarchart() {
		return (
			<div style={{ height: 0.80 * window.innerHeight }}>
				<Plotly
					data={[
						{
							y: this.state.categories,
							x: this.state.counts,
							type: 'bar',
							orientation: 'h'
						}
					]}
					fit
					layout={{
						xaxis: {
							title: 'Count'
						},
						yaxis: {
							title: 'Value'
						}
					}}
				/>
			</div>
		);
	}

	render() {

		const deleteModal = <Modal show={this.state.showDeleteModal}>
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
		</Modal>;

		if ( !this.props.id ) {
			return null;
		}
		return (
			<div>
				<Gate user>
					{ this.state.receivedFeedbacks.length > 0 ? <Panel header="Feedback">
						<ListGroup fill style={{ marginLeft: 0 }}>
							{this.state.receivedFeedbacks.map( elem =>
								<ListGroupItem style={{ padding: '2px 5px' }}>
									<p>{elem}</p>
								</ListGroupItem>
							)}
						</ListGroup>
					</Panel> : null }
				</Gate>
				<Gate owner>
					<div>
						<label>Component ID:</label>
						<span style={{ marginLeft: '5px' }}>{this.props.id}</span>
						<Modal
							show={this.state.showActions}
							onHide={this.toggleActions}
							dialogClassName="fullscreen-modal"
						>
							<Modal.Header closeButton>
								<Modal.Title>Actions</Modal.Title>
							</Modal.Header>
							<Modal.Body style={{ height: 0.80 * window.innerHeight }} >
								<Grid>
									<Row>
										<Col md={6}>
											{ this.state.actions.length > 0 ?
												<ListGroup fill style={{ marginLeft: 0, overflowY: 'scroll', height: 0.78 * window.innerHeight }}>
													{this.state.actions.map( ( elem, idx ) =>
														<ListGroupItem>
															{ this.state.showExtended ?
																<span style={{ textAlign: 'left' }}>
																	<b>{elem.name}:</b> {elem.value}
																</span> :
																<span style={{ textAlign: 'left' }}>
																	{elem.value}
																</span>
															}
															{ this.state.showExtended ?
																<Button
																	bsSize="xs"
																	style={{ float: 'right' }}
																	onClick={this.deleteFactory( idx )}
																>
																	<span>&times;</span>
																</Button> :
																null
															}
														</ListGroupItem>
													)}
												</ListGroup>
												:
												<Well>
													<h2>The data set is empty.</h2>
												</Well>
											}
										</Col>
										<Col md={6}>
											{ this.state.actions.length > 0 ?
												this.renderBarchart() :
												null
											}
										</Col>
									</Row>
								</Grid>
							</Modal.Body>
							<Modal.Footer>
								<Button onClick={this.toggleExtended}>{ this.state.showExtended ? 'Hide Extended' : 'Show Extended' }</Button>
								<Button onClick={this.toggleActions}>Close</Button>
							</Modal.Footer>
						</Modal>
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
					{deleteModal}
				</Gate>
			</div>
		);
	}
}


// PROPERTY TYPES //

InstructorBar.contextTypes = {
	session: PropTypes.object
};


// EXPORTS //

export default InstructorBar;
