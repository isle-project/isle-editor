// MODULES //

import React, { Component } from 'react';
import NumberInput from 'components/input/number';
import request from 'request';
import { Button, ControlLabel, Form, FormControl, FormGroup, Panel } from 'react-bootstrap';
import { Link } from 'react-router';


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
				form
			}, ( err, res ) => {
				if ( err ) {
					this.setState({
						encounteredError: err
					});
				} else {
					const body = JSON.parse( res.body );
					localStorage.setItem( 'token', body.token );
					this.forceUpdate();
				}
			});
		};
	}

	render() {
		return (
			<Panel header={<h1>Connect to ISLE server</h1>} bsStyle="primary">
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
							bsStyle="info"
							bsSize="sm"
							block
							onClick={this.connectToServer}
						>Connect</Button>
						{ this.state.encounteredError ?
							<Panel header={<h3>Error encountered</h3>} bsStyle="danger">
								The following error was encountered while connecting to {this.state.server}: <br />{this.state.encounteredError.message}.
							</Panel> : null
						}
					</Form> :
					<Panel bsStyle="success">
						You are linked to the ISLE server at {this.state.server}.
						<Button
							bsStyle="danger"
							bsSize="sm"
							onClick={this.unlink}
							style={{ float: 'right' }}
						>Unlink</Button>
					</Panel>
					}
			</Panel>
		);
	}
}

// SETTINGS //

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
				<Panel header={<h1>Settings</h1>}>
					<NumberInput
						description="Editor text height in pixels"
						legend="Font Size"
						onChange={handleFontSizeChange}
						min={8}
						max={56}
						step={1}
						defaultValue={parseInt( localStorage.getItem( 'fontSize' ) ) || 14}
					/>
				</Panel>
			</div>
		);
	}
}


// EXPORTS //

export default Settings;
