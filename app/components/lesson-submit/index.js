// MODULES //

import React, { Component, PropTypes } from 'react';
import { Button, Col, Form, HelpBlock, Modal, ControlLabel, FormControl, FormGroup } from 'react-bootstrap';
import request from 'request';
import isString from '@stdlib/utils/is-string';
import beforeUnload from 'utils/before-unload';


// VARIABLES //

const EMAIL_REGEX = /@/;


// LESSON SUBMIT //

class LessonSubmit extends Component {

	constructor( props ) {
		super( props );

		this.state = {
			showUserModal: false,
			user: '',
			email: '',
			disabled: true
		};

		this.pingServer = () => {
			if ( global.lesson && global.lesson.session && global.lesson.session.server ) {
				const { session } = global.lesson;
				request.get( session.server + '/ping', ( err, res, body ) => {
					if ( !err && body === 'live' ) {
						this.setState({ disabled: false });
						if ( !session.anonymous ) {
							session.updateDatabase();
						}
					}
				});
			}
		};

		this.closeUserModal = () => {
			this.setState({
				showUserModal: false
			});
		};

		this.finalizeSession = ( item ) => {
			global.lesson.session.finalize();
			global.lesson.addNotification({
				title: 'Completed',
				message: 'Lesson successfully completed. You will receive a confirmation email shortly.',
				level: 'success',
				position: 'tr'
			});
			if ( this.props.mail ) {
				global.lesson.sendMail( this.props.mail, global.lesson.session.user.email );
			}
			this.setState({
				disabled: true
			});
			window.removeEventListener( 'beforeunload', beforeUnload );
		};

		this.handleClick = () => {
			this.props.onClick();
			const str = 'ISLE_USER_' + ISLE.server;
			let item = localStorage.getItem( str );
			if ( !item ) {
				this.setState({
					showUserModal: true
				});
			}
			else {
				this.finalizeSession( item );
			}
		};

		this.handleEmailInput = ( e ) => {
			this.setState({ email: e.target.value });
		};

		this.handleUserInput = ( e ) => {
			this.setState({ user: e.target.value });
		};

		this.submitRegistration = () => {
			request.get({
				url: global.ISLE.server + '/user',
				qs: {
					email: this.state.email,
					name: this.state.user
				}
			}, ( error, response, body ) => {
				if ( error ) {
					console.log( error );
				} else {
					const str = 'ISLE_USER_' + ISLE.server;
					localStorage.setItem( str, body );
					this.closeUserModal();
					this.finalizeSession( body );
				}
			});
		};

		this.getEmailValidationState = () => {
			const val = this.state.email;
			if ( !val ) {
				return 'warning';
			}
			if ( isString( val ) && EMAIL_REGEX.test( val ) ) {
				return 'success';
			}
			return 'error';
		};

		this.getNameValidationState = () => {
			const val = this.state.user;
			if ( !val ) {
				return 'warning';
			}
			if ( isString( val ) && val.length > 2 ) {
				return 'success';
			}
			return 'error';
		};

	}

	componentWillMount() {
		this.pingServer();
	}

	render() {
		return (
			<div className="well" style={{
				maxWidth: 400,
				margin: '0 auto 10px',
				marginTop: '30px',
				fontFamily: 'Arial',
				...this.props.style
			}}>
				<Button disabled={this.state.disabled} bsStyle="primary" bsSize="large" onClick={this.handleClick} block>{this.props.label}</Button>
				<Modal show={this.state.showUserModal} onHide={this.closeUserModal}>
					<Modal.Header closeButton>
						<Modal.Title>User Registration</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<p>Please fill in the required information to set up an ISLE user account.
						When solving ISLE lessons in the future from the current browser, you will not have to fill out this form again.
						If you are already registered before, supplying your email address suffices.</p>
						<Form horizontal>
							<FormGroup
								validationState={this.getEmailValidationState()}
							>
								<Col componentClass={ControlLabel} sm={3}> Email Address </Col>
								<Col sm={9}>
									<FormControl
										type="text"
										value={this.state.email}
										placeholder="Enter text"
										onChange={this.handleEmailInput}
									/>
									<HelpBlock>Please enter your unversity email address.</HelpBlock>
								</Col>
							</FormGroup>
							<FormGroup
								validationState={this.getNameValidationState()}
							>
								<Col componentClass={ControlLabel} sm={3}> Full Name </Col>
								<Col sm={9}>
									<FormControl
										type="text"
										value={this.state.user}
										placeholder="Enter text"
										onChange={this.handleUserInput}
									/>
									<HelpBlock>Please enter your name.</HelpBlock>
								</Col>
							</FormGroup>
						</Form>
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={this.closeUserModal}>Close</Button>
						<Button
							bsStyle="primary"
							disabled={ this.getEmailValidationState() !== 'success' || this.getNameValidationState() !== 'success' }
							onClick={this.submitRegistration}>Submit</Button>
					</Modal.Footer>
				</Modal>
			</div>
		);
	}
}


// DEFAULT PROPERTIES //

LessonSubmit.defaultProps = {
	label: 'Finish lesson',
	mail: null,
	onClick() {}
};


// PROPERTY TYPES //

LessonSubmit.propTypes = {
	label: PropTypes.string,
	mail: PropTypes.string,
	onClick: PropTypes.func
};


// EXPORTS //

export default LessonSubmit;
