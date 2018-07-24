// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import noop from '@stdlib/utils/noop';
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';
import Panel from 'react-bootstrap/lib/Panel';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import SelectInput from 'components/input/select';
import CheckboxInput from 'components/input/checkbox';
import NumberInput from 'components/input/number';
import TextInput from 'compponents/input/text';

// VARIABLES //


// MAIN //

class TitleInsert extends Component {
	constructor( props ) {
		super( props );

		this.state = {
            title: 'Default Title',
            name: '',
            advisors: ''
        };
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

    handleAdvisorChange = ( event ) => {
        this.setState({
            advisors: value
        });
    }

	render() {
		return ( <Modal
			onHide={this.props.insertFunction}
			show={this.props.show}
		>
			<Modal.Header closeButton>
				<Modal.Title>Insert Title</Modal.Title>
			</Modal.Header>
			<Modal.Body>
                <TextInput 
                    onChange={this.handleTitleChange( value )}
                    legend="Title: "
                    defaulValue=''
                />
			</Modal.Body>
		</Modal> );
	}
}


// PROPERTY TYPES //

TitleInsert.propTypes = {
	insertFunction: PropTypes.func.isRequired,
	onHide: PropTypes.func,
	show: PropTypes.bool.isRequired
};

TitleInsert.defaultProps = {
	onHide() {}
};


// EXPORTS //

export default TitleInsert;
