// MODULES //

import React, { Component } from 'react';
import NumberInput from 'components/input/number';
import request from 'request';
import Button from 'react-bootstrap/lib/Button';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Form from 'react-bootstrap/lib/Form';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Panel from 'react-bootstrap/lib/Panel';
import { Link } from 'react-router-dom';


// FUNCTIONS //

const handleFontSizeChange = ( number ) => {
	localStorage.setItem( 'fontSize', number );
	return number;
};


// COMPONENTS //

class Login extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			server: localStorage.getItem( 'server' ) || '',
			email: localStorage.getItem( 'email' ) || '',
			password: localStorage.getItem( 'password' ) || '',
			encounteredError: null
		};

		this.handleInputChange = ( event ) => {
			const target = event.target;
			const value = target.value;
			const name = target.name;
			this.setState({
				[ name ]: value
			}, () => {
				localStorage.setItem( name, value );
			});
		};

		this.unlink = () => {
			localStorage.removeItem( 'token' );
			this.forceUpdate();
		};

		this.connectToServer = () => {
			let form = {
				password: this.state.password,
				email: this.state.email
			};
			request.post( this.state.server+'/login', {
				form,
				rejectUnauthorized: false
			}, ( err, res ) => {
				if ( err ) {
					this.setState({
						encounteredError: err
					});
				} else {
					try {
						const body = JSON.parse( res.body );
						if ( body.type === 'incorrect_password' ) {
							return this.setState({
								encounteredError: new Error( body.message )
							});
						}
						localStorage.setItem( 'token', body.token );
						this.forceUpdate();
					} catch ( error ) {
						this.setState({
							encounteredError: 'Couldn\'t login to server. Please check the address and port.'
						});
					}
				}
			});
		};
	}

	render() {
		return (
			<Panel bsStyle="primary">
				<Panel.Heading>
					<Panel.Title componentClass="h1">
						Connect to ISLE server
					</Panel.Title>
				</Panel.Heading>
				<Panel.Body>
					{ localStorage.getItem( 'token' ) === null ?
						<Form>
							<FormGroup>
								<ControlLabel>Server Address</ControlLabel>
								<FormControl
									name="server"
									type="text"
									placeholder="Enter text"
									onChange={this.handleInputChange}
									value={this.state.server}
								/>
							</FormGroup>
							<FormGroup>
								<ControlLabel>Email</ControlLabel>
								<FormControl
									name="email"
									type="text"
									placeholder="Enter email address"
									onChange={this.handleInputChange}
									value={this.state.email}
								/>
							</FormGroup>
							<FormGroup>
								<ControlLabel>Password</ControlLabel>
								<FormControl
									name="password"
									type="password"
									placeholder="Enter password"
									onChange={this.handleInputChange}
									value={this.state.password}
								/>
							</FormGroup>
							<Button
								bsStyle="primary"
								bsSize="sm"
								block
								onClick={this.connectToServer}
							>Connect</Button>
							{ this.state.encounteredError ?
								<Panel style={{ marginTop: 20 }} bsStyle="danger">
									<Panel.Heading>
										<Panel.Title componentClass="h3">
											Error encountered
										</Panel.Title>
									</Panel.Heading>
									<Panel.Body>
									The following error was encountered while connecting to {this.state.server}: <br />{this.state.encounteredError.message}.
									</Panel.Body>
								</Panel> : null
							}
						</Form> :
						<Panel bsStyle="success">
							<Panel.Body>
								<p>You are linked to the ISLE server at {this.state.server}.</p>
								<Button
									bsStyle="danger"
									bsSize="sm"
									onClick={this.unlink}
									style={{ float: 'right' }}
								>Unlink</Button>
							</Panel.Body>
						</Panel>
					}
				</Panel.Body>
			</Panel>
		);
	}
}


// MAIN //

class Settings extends Component {
	render() {
		return (
			<div
				style={{
					marginLeft: '20px',
					marginTop: '20px',
					marginRight: '20px'
				}}
			>
				<Link
					to="/"
					style={{
						float: 'right',
						color: 'silver',
						position: 'absolute',
						top: '12px',
						right: '12px',
						fontSize: '26px',
						zIndex: 2
					}}
				>Back to Editor</Link>
				<br />
				<br />
				<Login />
				<Panel>
					<Panel.Heading>
						<Panel.Title componentClass="h1">
							Settings
						</Panel.Title>
					</Panel.Heading>
					<Panel.Body>
						<NumberInput
							description="Editor text height in pixels"
							legend="Font Size"
							onChange={handleFontSizeChange}
							min={8}
							max={56}
							step={1}
							defaultValue={parseInt( localStorage.getItem( 'fontSize' ), 10 ) || 14}
						/>
					</Panel.Body>
				</Panel>
			</div>
		);
	}
}


// EXPORTS //

export default Settings;
