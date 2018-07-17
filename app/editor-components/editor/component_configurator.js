// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import Button from 'react-bootstrap/lib/Button';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Modal from 'react-bootstrap/lib/Modal';
import Panel from 'react-bootstrap/lib/Panel';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import isEmptyObject from '@stdlib/assert/is-empty-object';
import isFunction from '@stdlib/assert/is-function';
import typeOf from '@stdlib/utils/type-of';
import replace from '@stdlib/string/replace';
import removeLast from '@stdlib/string/remove-last';
import contains from '@stdlib/assert/contains';
import objectKeys from '@stdlib/utils/keys';


// VARIABLES //

const debug = logger( 'isle-editor' );


// FUNCTIONS //

function generateReplacement( defaultValue ) {
	const type = typeOf( defaultValue );
	switch ( type ) {
		case 'boolean':
			return '{'+!defaultValue+'}';
		case 'function':
			return '{() => {\n\n}}';
		case 'object':
		case 'array':
			return '{'+JSON.stringify( defaultValue )+'}';
		case 'string':
			if ( contains( defaultValue, '\n' ) ) {
				return '{`'+defaultValue+'`}';
			}
			return `"${defaultValue}"`;
		case 'number':
			return '{'+defaultValue+'}';
		default:
			return '{}';
	}
}

function generateDefaultString( defaultValue ) {
	if ( defaultValue === null || defaultValue === void 0 ) {
		return 'Default: none.';
	}
	if ( isFunction( defaultValue ) ) {
		return 'Default: '+defaultValue.toString()+'.';
	}
	return 'Default: '+JSON.stringify( defaultValue, null, 2 )+'.';
}

function extractType( fcn ) {
	if ( fcn === PropTypes.string ) {
		return 'string';
	}
	if ( fcn === PropTypes.number ) {
		return 'number';
	}
	if ( fcn === PropTypes.bool ) {
		return 'boolean';
	}
	if ( fcn === PropTypes.func ) {
		return 'function';
	}
	if ( fcn === PropTypes.object ) {
		return 'object';
	}
	if ( fcn === PropTypes.array ) {
		return 'array';
	}
	return null;
}


// MAIN //

class ComponentConfigurator extends Component {
	constructor( props ) {
		super( props );
		const { name, selfClosing } = props.component;
		this.state = {
			componentClass: null,
			name: name,
			value: selfClosing ?
				`<${name} />` :
				`<${name}>\n\n</${name}>`
		};
	}

	static getDerivedStateFromProps( nextProps, prevState ) {
		let newState = {};
		if ( nextProps.component.name !== prevState.name ) {
			newState.name = nextProps.component.name;
			newState.value = nextProps.component.selfClosing ?
				`<${nextProps.component.name} />` :
				`<${nextProps.component.name}>\n\n</${nextProps.component.name}>`;
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
				debug( `Loading ${this.state.name} component...` );
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

	handleReset = () => {
		const { name, selfClosing } = this.props.component;
		this.setState({
			value: selfClosing ?
				`<${name} />` :
				`<${name}>\n\n</${name}>`
		});
	}

	checkboxClickFactory = ( key, defaultValue ) => {
		const replacement = generateReplacement( defaultValue );
		return () => {
			let { value } = this.state;
			if ( !contains( value, key ) ) {
				if ( this.props.component.selfClosing ) {
					value = value.substring( 0, value.length - 3 );
					value += ` ${key}=${replacement} />`;
				} else {
					const idx = value.indexOf( '>' );
					const rest = value.substring( idx+1 );
					value = value.substring( 0, idx );
					if ( value[ value.length-1 ] === ' ' ) {
						value = removeLast( value );
					}
					value += ` ${key}=${replacement} >`;
					value = value + rest;
				}
			} else {
				let RE_KEY;
				if ( this.props.component.selfClosing ) {
					RE_KEY = new RegExp( key+'=[\\s\\S]*? (?=[a-z]+=|\\/>)', 'i' );
				} else {
					RE_KEY = new RegExp( key+'=[\\s\\S]*? (?=[a-z]+=|>)', 'i' );
				}
				value = replace( value, RE_KEY, '' );
			}
			this.setState({
				value
			});
		};
	}

	renderPropertyControls() {
		const { componentClass } = this.state;
		if ( !componentClass ) {
			return <span>Loading component specification...</span>;
		}
		const controls = [];
		const keys = objectKeys( componentClass.propTypes );
		for ( let i = 0; i < keys.length; i++ ) {
			let key = keys[ i ];
			let defaultValue = componentClass.defaultProps[ key ];
			let description = componentClass.propDescriptions ?
				componentClass.propDescriptions[ key ] : '';
			let type = extractType( componentClass.propTypes[ key ] );
			let elem = <Panel style={{ marginBottom: 5 }}><Row style={{ marginRight: 3, marginLeft: 3 }} key={i} >
					<Col sm={3} style={{ padding: 0 }}>
						<Checkbox checked={contains( this.state.value, key )} onClick={this.checkboxClickFactory( key, defaultValue )} style={{ marginTop: 0, marginBottom: 0 }} >{key}</Checkbox>
					</Col>
					<Col sm={5} style={{ padding: 0 }}>Description: {description}.</Col>
					<Col sm={2} style={{ padding: 0 }}>
						{ type ? `Type: ${type}.` : '' }
					</Col>
					<Col sm={2} style={{ padding: 0 }}>
						{generateDefaultString( defaultValue )}
					</Col>
				</Row></Panel>;
			controls.push( elem );
		}
		return controls;
	}

	render() {
		return (
			<Modal
				onHide={this.clickHide}
				show={this.props.show}
				bsSize="large"
			>
				<Modal.Header closeButton>
					<Modal.Title>Configure {this.props.component.name}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<FormGroup style={{ height: '280px', overflowY: 'scroll' }}>
						{this.renderPropertyControls()}
					</FormGroup>
					<FormGroup>
						<ControlLabel>Code:</ControlLabel>
						<FormControl
							componentClass="textarea"
							rows={10}
							value={this.state.value}
							onChange={this.handleChange}
							style={{ resize: 'none' }}
						/>
					</FormGroup>
				</Modal.Body>
				<Modal.Footer>
					<Button
						bsStyle="primary"
						onClick={this.handleReset}
					>Reset Code</Button>
					<Button
						bsStyle="success"
						onClick={this.handleClick}
					>Insert</Button>
					<Button
						onClick={this.clickHide}
					>Close</Button>
				</Modal.Footer>
			</Modal>
		);
	}
}


// PROPERTY TYPES //

ComponentConfigurator.propTypes = {
	component: PropTypes.object,
	onHide: PropTypes.func,
	onInsert: PropTypes.func,
	scope: PropTypes.object,
	show: PropTypes.bool.isRequired
};

ComponentConfigurator.defaultProps = {
	component: {},
	onHide() {},
	onInsert() {},
	scope: {}
};


// EXPORTS //

export default ComponentConfigurator;
