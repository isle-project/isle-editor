// MODULES //

import React, { Component } from 'react';
import logger from 'debug';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import pdfMake from 'pdfmake/build/pdfmake';
import innerText from 'react-innertext';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { isPrimitive as isString } from '@stdlib/assert/is-string';
import isEmptyObject from '@stdlib/assert/is-empty-object';
import isArray from '@stdlib/assert/is-array';
import round from '@stdlib/math/base/special/round';
import beforeUnload from '@isle-project/utils/before-unload';
import jumpToUnfinished from '@isle-project/utils/jump-to-unfinished';
import Signup from '@isle-project/components/internal/signup';
import Login from '@isle-project/components/internal/login';
import CheckboxInput from '@isle-project/components/input/checkbox';
import SessionContext from '@isle-project/session/context.js';
import { LOGGED_IN, LOGGED_OUT, RECEIVED_USER_RIGHTS } from '@isle-project/constants/events.js';
import { SUBMISSION } from '@isle-project/constants/actions.js';
import 'pdfmake/build/vfs_fonts.js';
import { withPropCheck } from '@isle-project/utils/prop-check';
import { withActionLogger } from '@isle-project/session/action_logger.js';
import createMessage from './create_message.js';


// VARIABLES //

const debug = logger( 'isle:lesson-submit' );


// MAIN //

/**
* A button to be displayed at the end of a lesson for students to click on. By default, a message confirming completion of the lesson is sent to their email address.
*
* @property {string} label - label of submit button
* @property {boolean} requireLogin - controls whether to require user to be signed in for button to be active (for anonymous users, no email confirmation is sent out)
* @property {boolean} sendConfirmationEmail - controls whether to send confirmation email upon lesson submission
* @property {string} message - message for confirmation email
* @property {Array<string>} coverage - list of identifiers to be submitted and included in the response document
* @property {string} className - class name
* @property {Object} style - CSS inline styles
* @property {Function} onClick - callback invoked when clicking on the submission button
*/
class LessonSubmit extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			showUserModal: false,
			visibleLogin: false,
			visibleSignup: false,
			onlyLatest: true
		};
	}

	componentDidMount() {
		const session = this.context;
		this.unsubscribe = session.subscribe( ( type ) => {
			if (
				type === RECEIVED_USER_RIGHTS ||
				type === LOGGED_IN ||
				type === LOGGED_OUT
			) {
				this.forceUpdate();
			}
		});
	}

	componentWillUnmount() {
		if ( this.unsubscribe ) {
			this.unsubscribe();
		}
	}

	createResponseSummaryDoc = () => {
		const session = this.context;
		const doc = {
			content: [
				{
					text: `${this.props.t('responses-header')} ${session.namespaceName+'/'+session.lessonName}`,
					style: 'header',
					alignment: 'center'
				}
			],
			styles: {
				header: {
					fontSize: 24,
					bold: true,
					margin: [0, 0, 0, 10]
				},
				author: {
					fontSize: 16,
					italics: true,
					margin: [0, 0, 0, 10],
					alignment: 'center'
				},
				date: {
					fontSize: 16,
					italics: true,
					alignment: 'right',
					margin: [0, 15, 0, 15]
				},
				elapsed: {
					fontSize: 16,
					italics: true,
					alignment: 'right',
					margin: [0, 15, 0, 15]
				},
				subheader: {
					fontSize: 18,
					bold: true,
					margin: [0, 30, 0, 10]
				},
				question: {
					fontSize: 15,
					margin: [0, 0, 0, 10],
					italics: true
				}
			}
		};
		if ( !isEmptyObject( session.user ) ) {
			doc.content.push({
				text: `${this.props.t('by')} ${session.user.name} (${session.user.email})`,
				style: 'author'
			});
		}
		const date = new Date();
		doc.content.push({
			text: `${date.toLocaleDateString()} - ${date.toLocaleTimeString()}`,
			style: 'date'
		});
		doc.content.push({
			text: `${this.props.t('elapsed')}: ${round( session.duration / 60000 )}min`, // eslint-disable-line i18next/no-literal-string
			style: 'elapsed'
		});
		if ( session.currentUserActions ) {
			let ids = session.responseVisualizerIds;
			if ( this.props.coverage ) {
				ids = ids.filter( id => this.props.coverage.includes( id ) );
			}
			for ( let i = 0; i < ids.length; i++ ) {
				const visualizer = session.responseVisualizers[ ids[ i ] ];
				doc.content.push({
					text: ids[ i ],
					style: 'subheader'
				});
				if ( visualizer ) {
					const { type } = visualizer;
					const question = visualizer.ref.props.data.question;
					const dataType = visualizer.ref.props.data.type;

					doc.content.push({
						text: isString( question ) ? question : innerText( question ),
						style: 'question'
					});
					let actions = session.currentUserActions[ ids[ i ] ];
					if ( actions ) {
						actions = actions.filter( x => x.type === type );
						actions = actions.sort( ( a, b ) => a.absoluteTime - b.absoluteTime );
						if ( this.state.onlyLatest ) {
							const lastAction = actions[ actions.length-1 ];
							this.addAction( lastAction, doc, dataType, visualizer );
						} else {
							actions.forEach( ( action, idx ) => {
								doc.content.push({
									text: this.props.t('submission') + ' #' + ( idx+1 ) + ':'
								});
								this.addAction( action, doc, dataType, visualizer );
							});
						}
					}
				}
			}
		}
		pdfMake.createPdf( doc ).download( 'responses.pdf' );
	};

	addAction = ( action, doc, dataType, visualizer ) => {
		if ( dataType === 'image' ) {
			doc.content.push({
				image: action.value,
				width: 500
			});
		}
		else if ( dataType === 'factor' ) {
			let levels = visualizer.ref.props.data.levels;
			levels = levels.map( ( x, i ) => {
				let out = isString( x ) ? x : innerText( x );
				if ( !out ) {
					out = `${this.props.t('choice')} ${i+1}`;
				}
				return out;
			});
			let text;
			if ( isArray( action.value ) ) {
				text = '';
				action.value.forEach( ( v, idx ) => {
					if ( v ) {
						if ( text ) {
							text += ', ';
						}
						text += levels[ idx ];
					}
				});
			} else {
				text = levels[ action.value ];
			}
			if ( !text ) {
				text = this.props.t( 'none' );
			}
			doc.content.push({ text });
		}
		else {
			doc.content.push({
				text: action.value
			});
		}
	};

	closeUserModal = () => {
		this.setState({
			showUserModal: false,
			visibleLogin: false,
			visibleSignup: false
		});
	};

	login = ( e ) => {
		e.stopPropagation();
		this.setState({
			visibleLogin: true,
			visibleSignup: false
		});
	};

	signup = ( e ) => {
		e.stopPropagation();
		this.setState({
			visibleSignup: true,
			visibleLogin: false
		});
	};

	closeSignup = () => {
		this.setState({
			visibleSignup: false,
			showUserModal: false
		});
	};

	closeLogin = () => {
		this.setState({
			visibleLogin: false,
			showUserModal: false
		});
	};

	handleLatestChange = () => {
		this.setState({ onlyLatest: !this.state.onlyLatest });
	};

	finalizeSession = () => {
		debug( 'Finalizing session...' );
		const session = this.context;
		let elems;
		if ( !this.props.coverage ) {
			elems = document.getElementsByClassName( 'submit-button' );
		} else {
			const query = this.props.coverage.map( id => `#${id} .submit-button` ).join( ', ' );
			elems = document.querySelectorAll( query );
		}
		for ( let i = 0; i < elems.length; i++ ) {
			if ( elems[ i ].innerText === this.props.t('submit') ) {
				elems[ i ].click();
			}
		}
		session.finalize();
		let notificationMessage = this.props.t( 'lesson-successfully-completed' );
		if ( !isEmptyObject( session.user ) && this.props.sendConfirmationEmail ) {
			notificationMessage += this.props.t('confirmation-email');
			const msg = createMessage( session, this.props.message, this.props.t );
			session.sendMail( msg, session.user.email );
		}
		let hasMultipleSubmissions = false;
		const ids = session.responseVisualizerIds || [];
		ids.forEach( ( id ) => {
			const actions = session.currentUserActions[ id ] || [];
			if ( actions.length > 1 ) {
				hasMultipleSubmissions = true;
			}
		});
		session.addNotification({
			title: this.props.t('completed'),
			message: notificationMessage,
			level: 'success',
			position: 'bc',
			autoDismiss: 0,
			dismissible: 'button',
			children: <div style={{ marginBottom: '40px' }}>
				{ hasMultipleSubmissions ? <CheckboxInput
					legend={this.props.t('only-latest')}
					defaultValue={this.state.onlyLatest}
					onChange={this.handleLatestChange}
				/> : null }
				<Button
					variant="success"
					size="sm" style={{ float: 'right', marginRight: '10px', marginTop: hasMultipleSubmissions ? '0px' : '10px' }}
					onClick={this.createResponseSummaryDoc}
				>{this.props.t('download-pdf')}</Button>
			</div>,
			onRemove: () => {
				this.setState({
					disabled: false
				});
			}
		});
		this.props.logAction( SUBMISSION );
		this.setState({
			disabled: true
		});
		window.removeEventListener( 'beforeunload', beforeUnload );
	};

	handleClick = () => {
		this.props.onClick();
		const session = this.context;
		if ( this.props.requireLogin && isEmptyObject( session.user ) ) {
			return this.setState({
				showUserModal: true
			});
		}
		if ( this.props.alertUnfinished && session.unfinished && session.unfinished.length > 0 ) {
			session.addNotification({
				title: this.props.t( 'unfinished' ),
				message: this.props.t( 'unfinished-lesson-msg' ),
				level: 'warning',
				position: 'bc',
				autoDismiss: 0,
				dismissible: 'both',
				children: <div style={{ marginBottom: '40px' }}>
					<Button
						variant="success"
						size="sm" style={{ float: 'right', marginRight: '10px', marginTop: '10px' }}
						onClick={this.finalizeSession}
					>{this.props.t('submit')}</Button>
					<Button
						variant="success"
						size="sm" style={{ float: 'right', marginRight: '10px', marginTop: '10px' }}
						onClick={() => {
							const session = this.context;
							const unfinished = session.unfinished;
							jumpToUnfinished( unfinished );
						}}
					>{this.props.t('show-unfinished')}</Button>
				</div>,
				onRemove: () => {
					this.setState({
						disabled: false
					});
				}
			});
		} else {
			this.finalizeSession();
		}
	};

	render() {
		const session = this.context;
		const disabled = !session.live || this.state.disabled;
		return (
			<div className={`bg-light ${this.props.className}`} style={{
				maxWidth: 400,
				margin: '0 auto 0px',
				padding: '20px',
				fontFamily: 'Arial',
				...this.props.style
			}}>
				<div className="d-grid gap-2">
					<Button
						disabled={disabled}
						variant="primary"
						size="large"
						onClick={this.handleClick}
					>
						{this.props.label ? this.props.label : this.props.t('finish-lesson')}
					</Button>
				</div>
				<Modal show={this.state.showUserModal} onHide={this.closeUserModal}>
					<Modal.Header closeButton>
						<Modal.Title>{this.props.t('authentication')}</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<p>
							{this.props.t('authentication-prompt')}
						</p>
					</Modal.Body>
					<Modal.Footer style={{ textAlign: 'center' }}>
						<Button variant="primary" onClick={this.login.bind( this )} style={{ marginRight: '10px' }}>{this.props.t('login')}</Button>
						<Button onClick={this.signup.bind( this )}>{this.props.t('signup')}</Button>
					</Modal.Footer>
				</Modal>
				<Login show={this.state.visibleLogin} onClose={this.closeLogin} />
				<Signup show={this.state.visibleSignup} onClose={this.closeSignup} />
			</div>
		);
	}
}


// PROPERTIES //

LessonSubmit.defaultProps = {
	alertUnfinished: false,
	coverage: null,
	label: null,
	message: '',
	requireLogin: true,
	sendConfirmationEmail: true,
	className: '',
	style: {},
	onClick() {}
};

LessonSubmit.propTypes = {
	alertUnfinished: PropTypes.bool,
	coverage: PropTypes.arrayOf( PropTypes.string ),
	label: PropTypes.string,
	message: PropTypes.string,
	requireLogin: PropTypes.bool,
	sendConfirmationEmail: PropTypes.bool,
	className: PropTypes.string,
	style: PropTypes.object,
	onClick: PropTypes.func
};

LessonSubmit.contextType = SessionContext;


// EXPORTS //

export default withActionLogger( 'LESSON_SUBMIT' )( withTranslation( 'lesson-submit' )( withPropCheck( LessonSubmit ) ) );
