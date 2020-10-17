// MODULES //

import React, { Component } from 'react';
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


// VARIABLES //

const debug = logger( 'isle:toolbar:ticketing' );


// MAIN //

class Ticketing extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			title: '',
			description: ''
		};
	}

	handleTitleChange = ( event ) => {
		this.setState({
			title: event.target.value
		});
	}

	handleMessageChange = ( text ) => {
		this.setState({
			description: text
		});
	}

	handleSubmit = () => {
		debug( 'Create ticket...' );
		const { session } = this.props;
		session.createTicket({
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
	}

	render() {
		const { t, show } = this.props;
		if ( show ) {
			return (
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
							legend="Message"
							value={this.state.description}
							onChange={this.handleMessageChange}
							placeholder="Enter description..."
						/>
						<Button onClick={this.handleSubmit} >
							Create Ticket
						</Button>
					</Panel>
				</Draggable>
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
