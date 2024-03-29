// MODULES //

import React, { Component, Fragment } from 'react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { isPrimitive as isNumber } from '@stdlib/assert/is-number';
import SessionContext from '@isle-project/session/context.js';
import Badge from 'react-bootstrap/Badge';
import Overlay from 'react-bootstrap/Overlay';
import Button from 'react-bootstrap/Button';
import Tooltip from '@isle-project/components/tooltip';
import renderTime from '@isle-project/utils/render-time';
import { APPEND_GRADE_MESSAGE } from '@isle-project/constants/actions.js';
import { MEMBER_ACTION } from '@isle-project/constants/events.js';
import './grade_feedback_renderer.css';


// MAIN //

class GradeFeedbackRenderer extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			showMessages: false
		};
	}

	componentDidMount() {
		const session = this.context;
		this.unsubscribe = session.subscribe( ( type, action ) => {
			if ( type === MEMBER_ACTION ) {
				if ( action.id !== this.props.for ) {
					return;
				}
				if ( action.type === APPEND_GRADE_MESSAGE ) {
					if ( action.id !== this.props.for ) {
						return;
					}
					if ( !session.user.lessonGradeMessages[ session.lessonID ] ) {
						session.user.lessonGradeMessages[ session.lessonID ] = {};
					}
					const gradeMessages = session.user.lessonGradeMessages[ session.lessonID ];
					if ( !gradeMessages[ this.props.for ] ) {
						gradeMessages[ this.props.for ] = [];
					}
					gradeMessages[ this.props.for ].push( action.value );
					const el = document.getElementById( this.props.for );
					session.addNotification({
						title: this.props.t( 'Feedback received' ),
						message: this.props.t( 'You have received feedback from ' + action.value.user + ' for question ' + this.props.for ),
						position: 'tl',
						level: 'info',
						autoDismiss: 0,
						children: ( el && el.offsetParent !== null ) ? <div style={{ marginBottom: '30px' }}>
							<button style={{
								float: 'right',
								border: '2px solid rgb(0, 123, 255)',
								backgroundColor: 'rgb(206 222 230)',
								borderRadius: '3px'
							}} onClick={this.scrollToQuestion} >
								{this.props.t( 'Scroll to the question' )}
							</button>
						</div> : null
					});
					this.forceUpdate();
				}
			}
		});
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	scrollToQuestion = () => {
		const question = document.getElementById( this.props.for );
		if ( question ) {
			question.scrollIntoView();
		}
	};

	renderMessages() {
		const session = this.context;
		const gradeMessages = session.user.lessonGradeMessages[ session.lessonID ];
		if ( !gradeMessages || !gradeMessages[ this.props.for ]) {
			return null;
		}
		return (
			<div className="grade-feedback-renderer-messages" >
				{gradeMessages[ this.props.for ].map( ( msg, idx ) => {
					return (
						<div className="grade-feedback-message" key={idx} >
							<img
								className="grade-feedback-picture unselectable"
								src={session.server + '/thumbnail/' + msg.picture}
								alt={this.props.t( 'profile-pic' )}
							/>
							<div className="grade-feedback-message-right" >
								<span className="grade-feedback-user">
									{msg.user}
								</span>
								{' - '}
								<span className="grade-feedback-time">{renderTime( msg.time )}</span>
								<br />
								<span className="grade-feedback-message-content" >
									{msg.content}
								</span>
							</div>
						</div>
					);
				})}
			</div>
		);
	}

	renderOverlay() {
		if ( !this.state.showMessages ) {
			return null;
		}
		return (
			<Overlay target={this.messagesButton} show={this.state.showMessages} placement="right" >
				{({ placement, arrowProps, show: _show, popper, ...props }) => (
					<div
						{...props}
						style={{
							backgroundColor: '#f8f9fa',
							padding: '2px 10px',
							color: 'darkslategrey',
							borderRadius: 6,
							border: '1px solid darkslategrey',
							width: '600px',
							boxShadow: '0px 0px 4px darkslategrey',
							zIndex: 1006,
							...props.style
						}}
					>
						<div style={{ marginTop: 6, marginBottom: 6 }}>
							{this.props.for}
							<Button aria-label={this.props.t('close')} variant="secondary" size="sm" onClick={() => {
								this.setState({
									showMessages: false
								});
							}} style={{ float: 'right', marginBottom: 4 }} >
								<i className="fas fa-times"></i>
							</Button>
						</div>
						<hr />
						{this.renderMessages()}
					</div>
				)}
			</Overlay>
		);
	}

	toggleMessages = () => {
		this.setState({
			showMessages: !this.state.showMessages
		});
	};

	render() {
		const session = this.context;
		if ( !session.user || !session.user.lessonGrades ) {
			return null;
		}
		const grades = session.user.lessonGrades[ session.lessonID ];
		const hasGrade = grades && isNumber( grades[ this.props.for ] );
		const gradeMessages = session.user.lessonGradeMessages[ session.lessonID ];
		const hasMessages = gradeMessages && gradeMessages[ this.props.for ];
		return (
			<Fragment>
				{hasGrade ? <Badge bg="success" style={{ fontSize: '1em' }} >
					{this.props.t('your-points')}: {grades[ this.props.for ]} / {this.props.points}
				</Badge> : null}
				{hasMessages ? <Tooltip tooltip={this.props.t('display-instructor-feedback')} >
					<Button
						aria-label={this.props.t('display-instructor-feedback')}
						ref={( button ) => {
							this.messagesButton = button;
						}}
						onClick={this.toggleMessages}
						size="small"
						variant="light"
						style={{ marginLeft: 12 }}
						className="grade-feedback-button"
					>
						<i className="fas fa-envelope-open" ></i>
						<Badge className="ms-2" pill bg="success" >
							{gradeMessages[ this.props.for ].length}
						</Badge>
					</Button>
				</Tooltip> : null}
				{this.renderOverlay()}
			</Fragment>
		);
	}
}


// PROPERTIES //

GradeFeedbackRenderer.propTypes = {
	points: PropTypes.number.isRequired,
	for: PropTypes.string.isRequired
};

GradeFeedbackRenderer.contextType = SessionContext;


// EXPORTS //

export default withTranslation( 'internal/grade-feedback-renderer' )( GradeFeedbackRenderer );
