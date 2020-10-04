// MODULES //

import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { remote } from 'electron';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import FormGroup from 'react-bootstrap/FormGroup';
import FormText from 'react-bootstrap/FormText';
import Card from 'react-bootstrap/Card';
import FormLabel from 'react-bootstrap/FormLabel';
import startsWith from '@stdlib/string/starts-with';
import trim from '@stdlib/string/trim';
import electronStore from 'store/electron.js';


// FUNCTIONS //

const ErrorCard = ( props ) => {
	if ( !props.error ) {
		return null;
	}
	return (
		<Card style={{ marginTop: 20 }} border="danger">
			<Card.Header as="h4" >
				Error encountered
			</Card.Header>
			<Card.Body>
			The following error was encountered while connecting to <b>{props.server}</b>: <br />
			<code>{props.error.message}</code>
			</Card.Body>
		</Card>
	);
};


// MAIN //

class SettingsLogin extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			server: electronStore.get( 'server' ) || '',
			email: electronStore.get( 'email' ) || '',
			password: electronStore.get( 'password' ) || '',
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
			electronStore.set( name, value );
		});
	}

	unlink = () => {
		electronStore.delete( 'token' );
		this.forceUpdate();
	}

	unlinkGitHub = () => {
		electronStore.delete( 'githubAccessToken' );
		this.forceUpdate();
	}

	connectToServer = async () => {
		try {
			const res = await axios.post( this.state.server+'/login', {
				password: this.state.password,
				email: trim( this.state.email )
			});
			const body = res.data;
			try {
				if ( body === 'Password is not correct.' || body === 'No user with the given email address found.' ) {
					return this.setState({
						encounteredError: new Error( body )
					});
				}
				electronStore.set( 'token', body.token );
				this.setState({
					encounteredError: null
				});
			} catch ( error ) {
				this.setState({
					encounteredError: new Error( 'Couldn\'t login to server. Please check the address and port.' )
				});
			}
		}
		catch ( err ) {
			this.setState({
				encounteredError: err
			});
		}
	}

	connectToGitHub = async () => {
		const authWindow = new remote.BrowserWindow({
			width: 800,
			height: 600,
			show: true
		});
		const handleGitHubCallback = ( url ) => {
			const rawCode = /code=([^&]*)/.exec( url ) || null;
			const code = rawCode && rawCode.length > 1 ? rawCode[ 1 ] : null;
			const error = /\?error=(.+)$/.exec( url );
			if ( code ) {
				this.getGitHubToken( code );
			} else if ( error ) {
				this.setState({
					encounteredError: new Error( 'Something went wrong while connecting to GitHub. Please try again.' )
				});
			}
		};
		authWindow.removeMenu();
		const authResult = await axios.get( this.state.server+'/github_oauth_url' );
		authWindow.loadURL( authResult.data );

		authWindow.webContents.on( 'will-navigate', ( event, url ) => {
			event.preventDefault();
			if ( url.includes( 'oauth-callback' ) ) {
				handleGitHubCallback( url );
				authWindow.destroy();
			}
		});

		authWindow.webContents.on( 'will-redirect', ( event, url ) => {
			event.preventDefault();
			handleGitHubCallback( url );
			authWindow.destroy();
		});
	}

	getGitHubToken = async ( code ) => {
		try {
			let result = await axios.post( this.state.server+'/github_access_token', {
				code
			}, {
				headers: {
					'Authorization': 'JWT ' + electronStore.get( 'token' )
				}
			});
			result = result.data;
			if ( result.message !== 'ok' ) {
				throw new Error( 'Access token could not be retrieved.' );
			}
			electronStore.set( 'githubAccessToken', result.token );
			this.setState({
				encounteredError: null
			});
		}
		catch ( err ) {
			this.setState({
				encounteredError: err.message
			});
		}
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
		const hasToken = electronStore.has( 'token' );
		return (
			<Fragment>
				<Card>
					<Card.Header as="h5">
						Connect to ISLE server
					</Card.Header>
					<Card.Body>
						{ !hasToken ?
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
										Connect with your ISLE user account. If you do not have one yet, sign up at the ISLE dashboard, e.g. at <a tabIndex="-1" href="https://isle.stat.cmu.edu">https://isle.stat.cmu.edu</a>.
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
								<ErrorCard server={server} error={encounteredError} />
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
				<Card style={{ marginTop: 16 }}>
					<Card.Header as="h5">
						Connect to GitHub (optional)
					</Card.Header>
					<Card.Body>
						{!electronStore.has( 'githubAccessToken' ) ?
							<Fragment>
								{!hasToken ?
									<p>
										You will be able to link the ISLE editor to your GitHub account after authenticating with an ISLE Server.
									</p> :
									<p>
										You can link the ISLE editor with your GitHub account for enhanced GitHub integration.
									</p>
								}
								<Button
									style={{ float: 'right' }}
									onClick={this.connectToGitHub}
									disabled={!hasToken}
								>
									Connect
								</Button>
								<ErrorCard server={server} error={encounteredError} />
							</Fragment> :
							<Card border="success">
								<Card.Body>
									<p>You are connected to GitHub.</p>
									<Button
										variant="danger"
										size="sm"
										onClick={this.unlinkGitHub}
										style={{ float: 'right' }}
									>Unlink</Button>
								</Card.Body>
							</Card>
						}
					</Card.Body>
				</Card>
			</Fragment>
		);
	}
}


// EXPORTS //

export default SettingsLogin;
