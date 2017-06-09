// MODULES //

import React, { Component } from 'react';
import {
	Button, Col, ControlLabel, FormControl, FormGroup,
	Form, Overlay, Modal, Popover
} from 'react-bootstrap';
import request from 'request';


// MAIN //

class Login extends Component {

	constructor( props ) {
		super( props );

		this.state = {
			email: '',
			password: ''
		};

		this.handleInputChange = ( event ) => {
			const target = event.target;
			const value = target.value;
			const name = target.name;

			this.setState({
				[ name ]: value
			});
		};

		this.handleSubmit = ( event ) => {
			event.preventDefault();
			let form = {
				password: this.state.password,
				email: this.state.email
			};
			if ( form.email === '' ) {
				this.setState({
					showInputOverlay: true,
					overlayTarget: this.emailInput,
					invalidInputMessage: 'Enter your email address.	'
				});
			}
			else if ( form.password === '' ) {
				this.setState({
					showInputOverlay: true,
					overlayTarget: this.passwordInput,
					invalidInputMessage: 'Enter your password.'
				});
			}
			else {
				request.post( server+'/login', {
					form
				}, ( err, res ) => {
					if ( !err ) {
						const { message, type, token, id } = JSON.parse( res.body );
						if ( message === 'ok' ) {
							this.props.handleLogin({ token, id });
						} else {
							this.setState({
								showInputOverlay: true,
								overlayTarget: type === 'no_user' ? this.emailInput : this.passwordInput,
								invalidInputMessage: message
							}, () => {
								setTimeout( () => {
									this.setState({
										showInputOverlay: false
									});
								}, 2000 );
							});
						}
					}
				});
			}
		};
	}

	render() {
        console.log( 'Close: ' + this.props.close )
		return (
			<Modal show={this.props.show} style={{ 
				position: 'fixed',
				width: '50%',
				height: '50%',
				left: 0,
				right: 0,
				margin: 'auto'
			}}>
				<Modal.Header>
					<Modal.Title>Login</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form horizontal>
						<FormGroup controlId="formHorizontalEmail">
							<Col componentClass={ControlLabel} sm={2}>
								Email
							</Col>
							<Col sm={10}>
								<FormControl
									name="email"
									type="email"
									placeholder="Email"
									onChange={this.handleInputChange}
									ref={ ( input ) => { this.emailInput = input; }}
								/>
							</Col>
						</FormGroup>
						<FormGroup controlId="formHorizontalPassword">
							<Col componentClass={ControlLabel} sm={2}>
								Password
							</Col>
							<Col sm={10}>
								<FormControl
									name="password"
									type="password"
									placeholder="Password"
									onChange={this.handleInputChange}
									ref={ ( input ) => { this.passwordInput = input; }}
								 />
							</Col>
						</FormGroup>
					</Form>
					<Overlay
						show={this.state.showInputOverlay}
						target={this.state.overlayTarget}
						placement="right"
						container={this}
						containerPadding={20}
					>
						<Popover id="popover-contained" title="Not valid">
							{this.state.invalidInputMessage}
						</Popover>
					</Overlay>
				</Modal.Body>
				<Modal.Footer>
					<Button
						bsStyle="primary"
						className="centered"
						type="submit"
						onClick={this.handleSubmit}
					>Sign in</Button>
					<Button onClick={this.props.onClose}>Close</Button>
				</Modal.Footer>
			</Modal>
		);
	}
}


// EXPORTS //

export default Login;
