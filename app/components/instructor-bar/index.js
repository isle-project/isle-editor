// MODULES //

import React, { Component } from 'react';
import { Button, ButtonGroup, Collapse, Col, Grid, ListGroup, ListGroupItem, Modal, Panel, Row, Well } from 'react-bootstrap';
import PropTypes from 'prop-types';
import isString from '@stdlib/assert/is-string';
import tabulate from '@stdlib/utils/tabulate';
import trim from '@stdlib/string/trim';
import NINF from '@stdlib/math/constants/float64-ninf';
import Plotly from 'components/plotly';
import Gate from 'components/gate';
import TextArea from 'components/text-area';
import RangePicker from 'components/range-picker';


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
			selectedAction: null,
			period: null
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
			<div style={{ height: 0.75 * window.innerHeight }}>
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
						},
						margin: {
							l: 400
						}
					}}
				/>
			</div>
		);
	}

	renderHistogram() {
		return (
			<div style={{ height: 0.75 * window.innerHeight }}>
				<Plotly
					data={[
						{
							x: this.state.actions.map( x => x.value ),
							type: 'histogram',
							name: 'histogram'
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
								<RangePicker onChange={this.onPeriodChange} />
							</Modal.Header>
							<Modal.Body style={{ height: 0.75 * window.innerHeight }} >
								<Grid>
									<Row>
										<Col md={6}>
											{ this.state.actions.length > 0 ?
												<ListGroup fill style={{ marginLeft: 0, overflowY: 'scroll', height: 0.73 * window.innerHeight }}>
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
													<h2>There is no data for the selected time period</h2>
												</Well>
											}
										</Col>
										<Col md={6}>
											{ this.state.actions.length > 0 ?
												( this.props.dataType === 'text' ?
													this.renderBarchart() :
													this.renderHistogram()
												) :
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

InstructorBar.propTypes = {
	dataType: PropTypes.oneOf([
		'text', 'number'
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
