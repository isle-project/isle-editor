// MODULES //

import React, { Component } from 'react';
import { Button, Col, ControlLabel, FormControl, FormGroup, Form, HelpBlock, Modal, OverlayTrigger, Overlay, Popover, Tooltip } from 'react-bootstrap';
import PropTypes from 'prop-types';


// FUNCTIONS //

const createTooltip = ( str ) => {
	return <Tooltip id="tooltip">{str}</Tooltip>;
};


// MAIN //

class Signup extends Component {

	constructor( props ) {
		super( props );

		this.state = {
			name: '',
			email: '',
			password: '',
			passwordRepeat: ''
		};

		this.handleSubmit = ( event ) => {
			event.preventDefault();
			const { session } = this.context;
			if (
				this.getEmailValidationState() === 'success' &&
				this.getNameValidationState() === 'success' &&
				this.getPasswordValidationState() === 'success'
			) {
				session.registerUser( this.state, () => {
					this.props.onClose();
				});
			} else {
				this.setState({
					showSubmitOverlay: true,
					overlayTarget: event.target
				}, () => {
					setTimeout( () => {
						this.setState({
							showSubmitOverlay: false
						});
					}, 2000 );
				});
			}
			return false;
		};

		this.handleInputChange = ( event ) => {
			const target = event.target;
			const value = target.value;
			const name = target.name;

			this.setState({
				[ name ]: value
			});
		};

		this.getEmailValidationState = () => {
			const { email } = this.state;
			if ( email.includes( '@' ) ) {
				return 'success';
			}
			return 'warning';
		};

		this.getNameValidationState = () => {
			const { name } = this.state;
			if ( name.length > 3 ) {
				return 'success';
			}
			return 'warning';
		};

		this.getPasswordValidationState = () => {
			const { password, passwordRepeat } = this.state;
			if ( password.length < 6 || passwordRepeat.length === 0 ) {
				return 'warning';
			}
			if ( password !== passwordRepeat ) {
				 return 'error';
			}
			return 'success';
		};

	}

	render() {
		return (
			<Modal show={this.props.show} style={{
				position: 'fixed',
				top: '5%',
				height: 'auto',
				left: 0,
				right: 0,
				margin: 'auto'
			}}>
				<Modal.Header>
					<Modal.Title>Create User</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<p>Please fill in the required information to set up an ISLE user account.
						When solving ISLE lessons in the future from the current browser, you will not have to fill out this form again.
						If you are already registered before, supplying your email address suffices.</p>
					<Form horizontal>
						<OverlayTrigger placement="right" overlay={createTooltip( 'Please enter a valid email address.' )}>
							<FormGroup
								controlId="formHorizontalEmail"
								validationState={this.getEmailValidationState()}
							>
								<Col componentClass={ControlLabel} sm={2}>
									Email
								</Col>
								<Col sm={10}>
									<FormControl
										name="email"
										type="email"
										placeholder="Enter Email"
										onChange={this.handleInputChange}
									/>
									<FormControl.Feedback />
									<HelpBlock>Please enter your university email address.</HelpBlock>
								</Col>
							</FormGroup>
						</OverlayTrigger>
						<OverlayTrigger placement="right" overlay={createTooltip( 'Please enter your name (minimum three characters).' )}>
							<FormGroup
								controlId="formHorizontalName"
								validationState={this.getNameValidationState()}
							>
								<Col componentClass={ControlLabel} sm={2}>
									Name
								</Col>
								<Col sm={10}>
									<FormControl
										name="name"
										type="text"
										placeholder="Enter Name"
										onChange={this.handleInputChange}
									/>
									<FormControl.Feedback />
									<HelpBlock>Please enter your name.</HelpBlock>
								</Col>
							</FormGroup>
						</OverlayTrigger>
						<OverlayTrigger placement="right" overlay={createTooltip( 'Please enter a password of your choosing with at least six characters' )}>
							<FormGroup
								controlId="formHorizontalPassword"
								validationState={this.getPasswordValidationState()}
							>
								<Col componentClass={ControlLabel} sm={2}>
									Password
								</Col>
								<Col sm={10}>
									<FormControl
										name="password"
										type="password"
										placeholder="Choose Password"
										onChange={this.handleInputChange}
										maxLength={30}
										minLength={6}
									/>
									<FormControl.Feedback />
								</Col>
							</FormGroup>
						</OverlayTrigger>
						<FormGroup
							controlId="formHorizontalPassword"
							validationState={this.getPasswordValidationState()}
						>
							<Col componentClass={ControlLabel} sm={2}>
							</Col>
							<Col sm={10}>
								<FormControl
									name="passwordRepeat"
									type="password"
									placeholder="Confirm Password"
									onChange={this.handleInputChange}
									maxLength={30}
									minLength={6}
								/>
								<FormControl.Feedback />
							</Col>
						</FormGroup>
					</Form>
					<Overlay
						show={this.state.showSubmitOverlay}
						target={this.state.overlayTarget}
						placement="bottom"
						container={this}
						containerPadding={20}
					>
						<Popover id="popover-contained" title="Input fields are not valid">
							Please make sure that all input values are valid before submitting.
						</Popover>
					</Overlay>
				</Modal.Body>
				<Modal.Footer>
					<Button
						bsStyle="primary"
						className="centered"
						type="submit"
						onClick={this.handleSubmit}
					>Sign up</Button>
					<Button onClick={this.props.onClose}>Close</Button>
				</Modal.Footer>
			</Modal>
		);
	}
}

// TYPES //

Signup.contextTypes = {
	session: PropTypes.object
};

Signup.defaultProps = {
	onClose() {}
};

Signup.propTypes = {
	onClose: PropTypes.func,
	show: PropTypes.bool
};

// EXPORTS //

export default Signup;
