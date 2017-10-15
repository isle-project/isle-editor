// MODULES //

import React, { Component } from 'react';
import { Button, ButtonGroup, Collapse, Col, Grid, ListGroup, ListGroupItem, Modal, Panel, Row, Well } from 'react-bootstrap';
import { VictoryAxis, VictoryBar, VictoryChart } from 'victory';
import PropTypes from 'prop-types';
import tabulate from '@stdlib/utils/tabulate';
import Gate from 'components/gate';
import TextArea from 'components/text-area';


// MAIN //

class InstructorBar extends Component {

	constructor() {
		super();

		this.state = {
			actions: [],
			counts: [],
			receivedFeedbacks: [],
			actionsAreOpen: false,
			feedbackIsOpen: false,
			feedback: '',
			showExtended: false
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
		const counts = tabulated.map( d => {
			return {
				x: d[ 1 ],
				y: d[ 0 ]
			};
		});
		console.log( counts );
		this.setState({
			actions: filtered,
			counts: counts
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

	render() {
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
													{this.state.actions.map( elem =>
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
											<VictoryChart
												width={550} height={450}
												domainPadding={20}
											>
												<VictoryBar
													horizontal
													data={this.state.counts}
													x="x"
													y="y"
												/>
												<VictoryAxis
													label="Count"
												/>
												<VictoryAxis
													dependentAxis
													label="Answer"
												/>
											</VictoryChart>
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
