// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import platform from 'platform';
import logger from 'debug';
import ListGroup from 'react-bootstrap/ListGroup';
import FormControl from 'react-bootstrap/FormControl';
import FormLabel from 'react-bootstrap/FormLabel';
import FormGroup from 'react-bootstrap/FormGroup';
import Button from 'react-bootstrap/Button';
import Draggable from 'components/draggable';
import TextArea from 'components/input/text-area';
import Tooltip from 'components/tooltip';
import Panel from 'components/panel';
import AlertModal from 'components/internal/alert-modal';
import './ticketing.css';


// VARIABLES //

const debug = logger( 'isle:toolbar:ticketing' );


// MAIN //

class Ticketing extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			title: '',
			description: '',
			showAlert: false,
			files: []
		};
	}

	handleTitleChange = ( event ) => {
		this.setState({
			title: event.target.value
		});
	}

	handleDescriptionChange = ( text ) => {
		this.setState({
			description: text
		});
	}

	attachFile = () => {
		const { session, t } = this.props;
		if ( this.state.files.length >= 6 ) {
			return session.addNotification({
				title: t('maximum-num-attachments'),
				message: t('maximum-num-attachments-message'),
				level: 'warning',
				position: 'tr'
			});
		}
		const input = document.createElement( 'input' );
		input.type = 'file';
		input.onchange = ( e ) => {
			const files = e.target.files;
			const newFiles = [ ...this.state.files, ...files ];
			this.setState({
				files: newFiles
			});
		};
		input.click();
	}

	handleSubmit = () => {
		debug( 'Create ticket...' );
		const { session, t } = this.props;
		const promise = session.createTicket({
			title: this.state.title,
			description: this.state.description,
			platform: {
				name: platform.name,
				version: platform.version,
				product: platform.product,
				manufacturer: platform.manufacturer,
				os: platform.os,
				description: platform.description
			},
			files: this.state.files
		});
		promise.then( () => {
			this.setState({
				showAlert: true
			});
		})
		.catch( ( err ) => {
			session.addNotification({
				title: t('encountered-error'),
				message: err.message,
				level: 'error',
				position: 'tc'
			});
		});
	}

	removeFileFactory = ( idx ) => {
		return () => {
			const newFiles = this.state.files.slice();
			newFiles.splice( idx, 1 );
			this.setState({
				files: newFiles
			});
		};
	}

	renderAttachments() {
		if ( this.state.files.length === 0 ) {
			return null;
		}
		return (
			<Fragment>
				<span className="title">{this.props.t('attachments')}:</span>
				<ListGroup className="ticketing-attachment-list" >
					{this.state.files.map( ( file, idx ) => {
						return (
							<ListGroup.Item key={`file-${idx}`}>
								{file.name}
								<Button
									variant="danger"
									size="sm"
									onClick={this.removeFileFactory( idx )}
									style={{ float: 'right' }}
								>
									x
								</Button>
							</ListGroup.Item>
						);
					})}
				</ListGroup>
			</Fragment>
		);
	}

	render() {
		const { t, show } = this.props;
		if ( show ) {
			return (
				<Fragment>
					<Draggable dragHandleClassName="card-header" >
						<Panel
							header={<span>
								<span className="fa fa-lg fa-medkit" style={{ marginRight: 6 }} />
								{t('ticketing')}
							</span>}
							onHide={this.props.onHide}
							minimizable
							style={{ maxWidth: 560 }}
							bodyStyle={{ maxHeight: '75vh' }}
						>
							<p>{t('ticketing-intro')}</p>
							<FormGroup>
								<FormLabel>{t('title')}:</FormLabel>
								<FormControl
									type="text"
									placeholder="Select title..."
									onChange={this.handleTitleChange}
								/>
							</FormGroup>
							<TextArea
								legend={`${t('description')}:`}
								value={this.state.description}
								onChange={this.handleDescriptionChange}
								placeholder="Enter description..."
							/>
							{this.renderAttachments()}
							<Tooltip tooltip={t('attach-file')} >
								<Button onClick={this.attachFile} >
									<i className="fas fa-paperclip"></i>
								</Button>
							</Tooltip>
							<Button
								onClick={this.handleSubmit} style={{ float: 'right' }}
								disabled={!this.state.title || !this.state.description}
							>
								{t('create-ticket')}
							</Button>
						</Panel>
					</Draggable>
					<AlertModal
						title={t('ticket-created')}
						message={t('ticket-created-message')}
						show={this.state.showAlert}
						close={() => {
							this.setState({
								title: '',
								description: '',
								showAlert: false,
								files: []
							});
							this.props.onHide();
						}}
					/>
				</Fragment>
			);
		}
		return null;
	}
}


// PROPERTIES //

Ticketing.propTypes = {
	session: PropTypes.object.isRequired,
	onHide: PropTypes.func.isRequired
};


// EXPORTS //

export default Ticketing;
