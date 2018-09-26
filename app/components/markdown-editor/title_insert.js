// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import noop from '@stdlib/utils/noop';
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';
import TextInput from 'components/input/text';
import './title_insert.css';


// MAIN //

class TitleInsert extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			title: '',
			name: '',
			advisor: ''
		};
	}

	closeWindow = () => {
		// Insert code here
		this.props.onHide();
	}

	handleTitleChange = ( value ) => {
		this.setState({
			title: value
		});
	}

	handleNameChange = ( value ) => {
		this.setState({
			name: value
		});
	}

	handleAdvisorChange = ( value ) => {
		this.setState({
			advisor: value
		});
	}

	insertClick = () => {
		// pass the entire state to onClick
		this.props.onClick(this.state);
		this.closeWindow();
	}

	render() {
		return ( <Modal
			onHide={this.closeWindow}
			show={this.props.show}
			dialogClassName="modal-50w"
		>
			<Modal.Header closeButton>
				<Modal.Title>Create a Title</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<TextInput
					onChange={this.handleTitleChange}
					legend="Title"
					defaulValue=''
					width={480}
				/>
				<hr />
				<TextInput
					onChange={this.handleNameChange}
					legend='Name'
					defaultValue=''
					width={480}
				/>
				<hr />
				<TextInput
					onChange={this.handleAdvisorChange}
					legend='Advisor'
					defaultValue=''
					width={480}
				/>
				<hr id='button_sep' />
				<Button
					onClick={this.insertClick}
					block
				>
					Insert Title
				</Button>
			</Modal.Body>
		</Modal> );
	}
}


// PROPERTY TYPES //

TitleInsert.propTypes = {
	onClick: PropTypes.func,
	onHide: PropTypes.func,
	show: PropTypes.bool.isRequired
};

TitleInsert.defaultProps = {
	onHide() {},
	onClick: noop
};


// EXPORTS //

export default TitleInsert;
