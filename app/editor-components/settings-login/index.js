// MODULES //

import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import FormGroup from 'react-bootstrap/FormGroup';
import FormText from 'react-bootstrap/FormText';
import Card from 'react-bootstrap/Card';
import FormLabel from 'react-bootstrap/FormLabel';
import startsWith from '@stdlib/string/starts-with';
import trim from '@stdlib/string/trim';
import rendererStore from 'store/electron.js';


// MAIN //

class SettingsLogin extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			server: rendererStore.get( 'server' ) || '',
			email: rendererStore.get( 'email' ) || '',
			password: rendererStore.get( 'password' ) || '',
			encounteredError: null
		};
	}

	handleInputChange = ( event ) => {
		const target = event.target;
		const value = target.value;
		const name = target.name;
		this.setState({
			[ name ]: value
		}, () => {
			// Update server, email, or password in store:
			rendererStore.set( name, value );
		});
	}

	unlink = () => {
		rendererStore.delete( 'token' );
		this.forceUpdate();
	}

	connectToServer = () => {
		let form = {
			password: this.state.password,
			email: trim( this.state.email )
		};
		fetch( this.state.server+'/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify( form )
		})
		.then( res => {
			return res.text();
		})
		.then( body => {
			try {
				if ( body === 'Password is not correct.' || body === 'No user with the given email address found.' ) {
					return this.setState({
						encounteredError: new Error( body )
					});
				}
				body = JSON.parse( body );
				rendererStore.set( 'token', body.token );
				this.forceUpdate();
			} catch ( error ) {
				this.setState({
					encounteredError: 'Couldn\'t login to server. Please check the address and port.'
				});
			}
		})
		.catch( err => {
			this.setState({
				encounteredError: err
			});
		});
	}

	handleKeyPress = ( event ) => {
		if ( event.charCode === 13 ) {
			this.connectToServer( event );
		}
	}

	render() {
		const { server, email, password, encounteredError } = this.state;
		const inputsAreEntered = server.length > 6 && email.length > 3 && password.length > 3;
		const invalidServer = !startsWith( this.state.server, 'https://' ) &&
			!startsWith( this.state.server, 'http://' );
		return (
			<Card>
				<Card.Header as="h5">
					Connect to ISLE server
				</Card.Header>
				<Card.Body>
					{ rendererStore.get( 'token' ) === void 0 ?
						<Form>
							<FormGroup>
								<FormLabel>Server Address</FormLabel>
								<FormControl
									name="server"
									type="text"
									placeholder="Enter text"
									onChange={this.handleInputChange}
									value={server}
									onKeyPress={this.handleKeyPress}
									isInvalid={invalidServer}
								/>
								<FormText>
									The ISLE server address, e.g. <code>https://isle.stat.cmu.edu</code>.
								</FormText>
								<FormControl.Feedback type="invalid" >
									The server address must start with <code>http://</code> or <code>https://</code>.
								</FormControl.Feedback>
							</FormGroup>
							<FormGroup>
								<FormLabel>Email</FormLabel>
								<FormControl
									name="email"
									type="text"
									placeholder="Enter email address"
									onChange={this.handleInputChange}
									value={email}
									onKeyPress={this.handleKeyPress}
								/>
								<FormText>
									Connect with your ISLE user account. If you do not have one yet, sign up at the ISLE dashboard, e.g. at <a href="https://isle.stat.cmu.edu">https://isle.stat.cmu.edu</a>.
								</FormText>
							</FormGroup>
							<FormGroup>
								<FormLabel>Password</FormLabel>
								<FormControl
									name="password"
									type="password"
									placeholder="Enter password"
									onChange={this.handleInputChange}
									value={password}
									onKeyPress={this.handleKeyPress}
								/>
								<FormText>Enter the password associated with your ISLE account.</FormText>
							</FormGroup>
							<Button
								variant="primary"
								size="sm"
								block
								onClick={this.connectToServer}
								disabled={!inputsAreEntered || invalidServer}
							>Connect</Button>
							{ encounteredError ?
								<Card style={{ marginTop: 20 }} border="danger">
									<Card.Header as="h4" >
										Error encountered
									</Card.Header>
									<Card.Body>
									The following error was encountered while connecting to <b>{server}</b>: <br />
									<code>{encounteredError.message}</code>
									</Card.Body>
								</Card> : null
							}
						</Form> :
						<Card border="success">
							<Card.Body>
								<p>You are linked to the ISLE server at <b>{server}</b> with user <b>{email}</b>.</p>
								<Button
									variant="danger"
									size="sm"
									onClick={this.unlink}
									style={{ float: 'right' }}
								>Unlink</Button>
							</Card.Body>
						</Card>
					}
				</Card.Body>
			</Card>
		);
	}
}


// EXPORTS //

export default SettingsLogin;
