// MODULES //

import React, { Component, Fragment } from 'react';
import { withTranslation, Trans } from 'react-i18next';
import axios from 'axios';
import logger from 'debug';
import { BrowserWindow } from '@electron/remote';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import FormGroup from 'react-bootstrap/FormGroup';
import FormText from 'react-bootstrap/FormText';
import Card from 'react-bootstrap/Card';
import FormLabel from 'react-bootstrap/FormLabel';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import startsWith from '@stdlib/string/starts-with';
import trim from '@stdlib/string/trim';
import electronStore from 'store/electron.js';


// VARIABLES //

const debug = logger( 'isle:settings' );
const ISLE_EXAMPLE_SERVER = 'https://isle.stat.cmu.edu';
const DEFAULT_LOGIN = {
	requireCredentials: true,
	label: 'Login with Credentials'
};


// FUNCTIONS //

const ErrorCard = ({ error, server, t }) => {
	if ( !error ) {
		return null;
	}
	return (
		<Card style={{ marginTop: 20 }} border="danger">
			<Card.Header as="h4">{t('error-encountered')}</Card.Header>
			<Card.Body>
			{t('error-encountered-message')}
			<b>{server}</b>: <br />
			<code>{error.response ? error.response.data : error.message}</code>
			</Card.Body>
		</Card>
	);
};


// MAIN //

class SettingsLogin extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			server: electronStore.get('server') || '',
			email: electronStore.get('email') || '',
			password: electronStore.get('password') || '',
			encounteredError: null,
			loginMethod: DEFAULT_LOGIN,
			loginChoices: [
				DEFAULT_LOGIN
			]
		};
	}

	componentDidMount() {
		this.checkLoginTypes();
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
	};

	unlink = () => {
		electronStore.delete( 'token' );
		this.forceUpdate();
	};

	unlinkGitHub = () => {
		electronStore.delete( 'githubAccessToken' );
		this.forceUpdate();
	};

	checkLoginTypes = async () => {
		try {
			const response = await axios.get( this.state.server + '/saml-xmw/login-choices' );
			this.setState({
				loginChoices: response.data,
				loginMethod: response.data[ response.data.length - 1 ]
			});
		} catch ( err ) {
			debug( 'Error checking login types: %o', err );
			this.setState({
				loginMethod: DEFAULT_LOGIN,
				loginChoices: [
					DEFAULT_LOGIN
				]
			});
		}
	};

	connectToServer = async () => {
		const { loginMethod, server, email, password } = this.state;
		try {
			if ( loginMethod.requireCredentials ) {
				const res = await axios.post( server + '/login', {
					password: password,
					email: trim( email )
				});
				const body = res.data;
				electronStore.set( 'token', body.token );
				this.setState({
					encounteredError: null
				});
			}
			else {
				debug( 'Open browser window to login: ' + loginMethod.url );
				const authWindow = new BrowserWindow({
					width: 800,
					height: 600,
					show: true,
					alwaysOnTop: true
				});
				authWindow.loadURL( loginMethod.url );
				authWindow.removeMenu();
				authWindow.webContents.on( 'will-redirect', async ( event, url ) => {
					debug( 'Redirecting to: ' + url );
					event.preventDefault();
					if ( url.includes( 'saml-xmw' ) || url.includes( 'dashboard' ) ) {
						authWindow.destroy();
						const res = await axios.get( server + '/saml-xmw/session' );
						electronStore.set( 'token', res.data.token );
						this.setState({
							encounteredError: null
						});
					}
				});
			}
		} catch ( err ) {
			this.setState({
				encounteredError: err
			});
		}
	};

	connectToGitHub = async () => {
		const authWindow = new BrowserWindow({
			width: 800,
			height: 600,
			show: true
		});
		const handleGitHubCallback = ( url ) => {
			debug( 'Handle URL: "' + url + '"' );
			const rawCode = /code=([^&]*)/.exec( url ) || null;
			const code = rawCode && rawCode.length > 1 ? rawCode[1] : null;
			debug( 'Extracted code from URL: ' + code );
			const error = /\?error=(.+)$/.exec( url );
			if ( code ) {
				this.getGitHubToken( code );
			} else if ( error ) {
				this.setState({
					encounteredError: new Error( this.props.t( 'github-connect-error' ) )
				});
			}
		};
		authWindow.removeMenu();
		const authResult = await axios.get( this.state.server + '/github_oauth_url' );
		authWindow.loadURL( authResult.data );

		authWindow.webContents.on( 'will-navigate', ( event, url ) => {
			event.preventDefault();
			if ( url.includes( 'oauth-callback' ) ) {
				handleGitHubCallback( url );
				authWindow.destroy();
			}
		});

		authWindow.webContents.on( 'will-redirect', ( event, url ) => {
			debug( 'Redirecting GitHub URL...' );
			event.preventDefault();
			if ( url.includes( 'oauth-callback' ) ) {
				handleGitHubCallback( url );
				authWindow.destroy();
			}
		});
	};

	getGitHubToken = async ( code ) => {
		try {
			let result = await axios.post(
			this.state.server + '/github_access_token', {
				code
			}, {
				headers: {
					Authorization: 'JWT ' + electronStore.get( 'token' )
				}
			});
			result = result.data;
			if ( result.message !== 'ok' ) {
				throw new Error( this.props.t( 'access-token-not-retrieved' ) );
			}
			electronStore.set( 'githubAccessToken', result.token );
			this.setState({
				encounteredError: null
			});
		} catch ( err ) {
			this.setState({
				encounteredError: err
			});
		}
	};

	handleKeyPress = ( event ) => {
		if ( event.charCode === 13 ) {
			this.connectToServer( event );
		}
	};

	setLoginMethod = ( method ) => {
		this.setState({
			loginMethod: method
		});
	};

	render() {
		const { t } = this.props;
		const { server, email, password, encounteredError } = this.state;
		const requireCredentials = this.state.loginMethod.requireCredentials;
		const inputsAreEntered =
			server.length > 6 && email.length > 3 && password.length > 3;
		const invalidServer = !startsWith( this.state.server, 'https://' );
		const hasToken = electronStore.has( 'token' );
		return (
			<Fragment>
				<Card>
					<Card.Header as="h5">{t('connect-to-isle-server')}</Card.Header>
					<Card.Body>
					{!hasToken ? (
						<Form>
						<FormGroup>
							<FormLabel>{t('server-address')}</FormLabel>
							<FormControl
								name="server"
								type="text"
								placeholder={t('form-control-server')}
								onChange={this.handleInputChange}
								onBlur={this.checkLoginTypes}
								value={server}
								onKeyPress={this.handleKeyPress}
								isInvalid={invalidServer}
							/>
							<FormText>
								<Trans i18nKey="isle-server" >
									The ISLE server address, e.g.
									<code>https://isle.stat.cmu.edu</code>.
								</Trans>
							</FormText>
							<FormControl.Feedback type="invalid">
								<Trans i18nKey="invalid-server" >
									The server address must start with <code>https://</code>.
								</Trans>
							</FormControl.Feedback>
						</FormGroup>
						<ToggleButtonGroup
							name="loginMethod"
							onChange={this.setLoginMethod}
							type="radio"
							size="small"
							value={this.state.loginMethod}
							style={{ paddingBottom: '1rem', paddingTop: '1rem' }}
						>
							{this.state.loginChoices.map( ( choice ) => {
								return ( <ToggleButton id={`login-${choice.label}`} value={choice} variant="outline-secondary" key={choice.url} >
									{choice.label}
								</ToggleButton> );
							})}
						</ToggleButtonGroup>
						{requireCredentials ?
							<Fragment>
								<FormGroup>
									<FormLabel>{t('email')}</FormLabel>
									<FormControl
										name="email"
										type="text"
										placeholder={t('email-placeholder')}
										onChange={this.handleInputChange}
										value={email}
										onKeyPress={this.handleKeyPress}
									/>
									<FormText>
									{t('form-control-connect-with-isle-account')}
									<a tabIndex="-1" href={ISLE_EXAMPLE_SERVER} >
										{ISLE_EXAMPLE_SERVER}
									</a>
									.
									</FormText>
								</FormGroup>
								<FormGroup>
									<FormLabel>{t('password')}</FormLabel>
									<FormControl
										name="password"
										type="password"
										placeholder={t('enter-password')}
										onChange={this.handleInputChange}
										value={password}
										onKeyPress={this.handleKeyPress}
									/>
									<FormText>{t('enter-password-isle-account')}</FormText>
								</FormGroup>
							</Fragment> : null }
						<div className="d-grid" >
							<Button
								variant="primary"
								size="sm"
								onClick={this.connectToServer}
								disabled={(requireCredentials && !inputsAreEntered ) || invalidServer}
							>
								{t('connect')}
							</Button>
						</div>
						<hr />
						<ErrorCard server={server} error={encounteredError} t={t} />
						</Form>
					) : (
						<Card border="success">
						<Card.Body>
							<p>
							<Trans i18nKey="linked-to-isle-server" values={{ server, email }} ns="Editor" >
								You are linked to the ISLE server at <b>{server}</b> with user <b>{email}</b>.
							</Trans>
							</p>
							<Button
								variant="danger"
								size="sm"
								onClick={this.unlink}
								style={{ float: 'right' }}
							>
								{t('unlink')}
							</Button>
						</Card.Body>
						</Card>
					)}
					</Card.Body>
				</Card>
				<Card style={{ marginTop: 16 }}>
					<Card.Header as="h5">{t('connect-to-github')}</Card.Header>
					<Card.Body>
					{!electronStore.has('githubAccessToken') ? (
						<Fragment>
						{!hasToken ? (
							<p>{t('link-to-github-account-authenticated')}</p>
						) : (
							<p>{t('link-to-github-account')}</p>
						)}
						<Button
							style={{ float: 'right' }}
							onClick={this.connectToGitHub}
							disabled={!hasToken}
						>
							{t('connect')}
						</Button>
						{hasToken ? (
							<ErrorCard server={server} error={encounteredError} t={t} />
						) : null}
						</Fragment>
					) : (
						<Card border="success" >
							<Card.Body>
								<p>{t('connected-to-github')}</p>
								<Button
									variant="danger"
									size="sm"
									onClick={this.unlinkGitHub}
									style={{ float: 'right' }}
								>
									{t('unlink')}
								</Button>
							</Card.Body>
						</Card>
					)}
				</Card.Body>
			</Card>
		</Fragment> );
	}
}


// EXPORTS //

export default withTranslation( 'Editor' )( SettingsLogin );
