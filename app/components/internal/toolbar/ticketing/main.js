// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import platform from 'platform';
import logger from 'debug';
import FormControl from 'react-bootstrap/FormControl';
import FormLabel from 'react-bootstrap/FormLabel';
import FormGroup from 'react-bootstrap/FormGroup';
import Button from 'react-bootstrap/Button';
import Draggable from 'components/draggable';
import TextArea from 'components/input/text-area';
import Panel from 'components/panel';
import AlertModal from 'components/internal/alert-modal';


// VARIABLES //

const debug = logger( 'isle:toolbar:ticketing' );


// MAIN //

class Ticketing extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			title: '',
			description: '',
			showAlert: false
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
			}
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
						>
							<p>{t('ticketing-intro')}</p>
							<FormGroup>
								<FormLabel>Title:</FormLabel>
								<FormControl
									type="text"
									placeholder="Select title..."
									onChange={this.handleTitleChange}
								/>
							</FormGroup>
							<TextArea
								legend="Description:"
								value={this.state.description}
								onChange={this.handleDescriptionChange}
								placeholder="Enter description..."
							/>
							<Button onClick={this.handleSubmit} >
								Create Ticket
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
								showAlert: false
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
