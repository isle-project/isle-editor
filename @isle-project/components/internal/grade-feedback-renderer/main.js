// MODULES //

import React, { Component, Fragment } from 'react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import SessionContext from '@isle-project/session/context.js';
import Badge from 'react-bootstrap/Badge';
import Overlay from 'react-bootstrap/Overlay';
import Button from 'react-bootstrap/Button';
import Tooltip from '@isle-project/components/tooltip';
import renderTime from '@isle-project/utils/render-time';
import './grade_feedback_renderer.css';
import './load_translations.js';


// MAIN //

class FeedbackRenderer extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			showMessages: false
		};
	}

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
							<Button variant="secondary" size="sm" onClick={() => {
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
	}

	render() {
		const session = this.context;
		if ( !session.user || !session.user.lessonGrades ) {
			return null;
		}
		const grades = session.user.lessonGrades[ session.lessonID ];
		if ( !grades || !grades[ this.props.for ] ) {
			return null;
		}
		const gradeMessages = session.user.lessonGradeMessages[ session.lessonID ];
		const hasMessages = gradeMessages && gradeMessages[ this.props.for ];
		return (
			<Fragment>
				<Badge variant="success" style={{ fontSize: '1em' }} >
					{this.props.t('your-points')}: {grades[ this.props.for ]} / {this.props.points}
				</Badge>
				{hasMessages ? <Tooltip tooltip={this.props.t('display-instructor-feedback')} >
					<Button
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
					</Button>
				</Tooltip> : null}
				{this.renderOverlay()}
			</Fragment>
		);
	}
}


// PROPERTIES //

FeedbackRenderer.propTypes = {
	points: PropTypes.number.isRequired,
	for: PropTypes.string.isRequired
};

FeedbackRenderer.contextType = SessionContext;


// EXPORTS //

export default withTranslation( 'grade-feedback-renderer' )( FeedbackRenderer );
