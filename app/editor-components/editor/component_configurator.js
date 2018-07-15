// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import Button from 'react-bootstrap/lib/Button';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Modal from 'react-bootstrap/lib/Modal';
import isEmptyObject from '@stdlib/assert/is-empty-object';


// VARIABLES //

const debug = logger( 'isle-editor' );


// MAIN //

class ComponentConfigurator extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			componentClass: null,
			name: props.name,
			value: `<${props.name} />`
		};
	}

	static getDerivedStateFromProps( nextProps, prevState ) {
		let newState = {};
		if ( nextProps.name !== prevState.name ) {
			newState.name = nextProps.name;
			newState.value = `<${nextProps.name} />`;
			newState.componentClass = null;
		}
		if ( !isEmptyObject( newState ) ) {
			return newState;
		}
		return null;
	}

	componentDidUpdate() {
		const comp = this.props.scope[ this.state.name ];
		if ( comp && !this.state.componentClass ) {
			debug( `Preparing configuration menu for ${comp.name} component...` );
			if ( comp.name === 'LoadableComponent' ) {
				const { loader } = comp;
				debug( 'Loading component...' );
				let promise = loader();
				promise.then( loaded => {
					this.setState({
						componentClass: loaded
					});
				}).catch( err => {
					throw err;
				});
			} else {
				this.setState({
					componentClass: comp
				});
			}
		}
	}

	clickHide = () => {
		this.props.onHide();
	}

	/*
	* Event handler invoked when text area value changes. Updates `value` and invokes
	* `onChange` callback with the new text as its first argument
	*/
	handleChange = ( event ) => {
		const newValue = event.target.value;
		this.setState({
			value: newValue
		});
	};

	handleClick = () => {
		if ( this.state.value ) {
			this.props.onInsert( this.state.value );
		}
	}

	renderPropertyControls() {
		if ( !this.state.componentClass ) {
			return <span>Loading component specification...</span>;
		}
		return <div>{JSON.stringify( this.state.componentClass.defaultProps )}</div>;
	}

	render() {
		return (
			<Modal
				onHide={this.clickHide}
				show={this.props.show}
			>
				<Modal.Header closeButton>
					<Modal.Title>Configure Component</Modal.Title>
				</Modal.Header>
				<Modal.Body style={{ height: '300px' }}>
					<FormGroup style={{ width: '50%', float: 'left' }}>
						{this.renderPropertyControls()}
					</FormGroup>
					<FormGroup style={{ width: '50%', float: 'right' }}>
						<ControlLabel>Code:</ControlLabel>
						<FormControl
							componentClass="textarea"
							rows={10}
							value={this.state.value}
							onChange={this.handleChange}
						/>
					</FormGroup>
				</Modal.Body>
				<Modal.Footer>
					<Button
						block bsStyle="success"
						onClick={this.handleClick}
					>Insert</Button>
				</Modal.Footer>
			</Modal>
		);
	}
}


// PROPERTY TYPES //

ComponentConfigurator.propTypes = {
	name: PropTypes.string,
	onHide: PropTypes.func,
	onInsert: PropTypes.func,
	scope: PropTypes.object,
	show: PropTypes.bool.isRequired
};

ComponentConfigurator.defaultProps = {
	name: null,
	onHide() {},
	onInsert() {},
	scope: {}
};


// EXPORTS //

export default ComponentConfigurator;
