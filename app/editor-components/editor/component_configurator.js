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
import isEmptyObject from '@stdlib/assert/is-empty-object';
import isFunction from '@stdlib/assert/is-function';
import typeOf from '@stdlib/utils/type-of';
import replace from '@stdlib/string/replace';
import removeLast from '@stdlib/string/remove-last';
import contains from '@stdlib/assert/contains';
import objectKeys from '@stdlib/utils/keys';


// VARIABLES //

const debug = logger( 'isle-editor' );
const RE_SNIPPET_PLACEHOLDER = /\${[0-9]:([^}]+)}/g;
const RE_SNIPPET_EMPTY_PLACEHOLDER = /\t*\${[0-9]:}\n?/g;


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
		return 'none';
	}
	if ( isFunction( defaultValue ) ) {
		return defaultValue.toString();
	}
	return JSON.stringify( defaultValue, null, 2 );
}

function extractType( fcn ) {
	if ( fcn === PropTypes.string.isRequired ) {
		return 'string (required)';
	}
	if ( fcn === PropTypes.string ) {
		return 'string';
	}
	if ( fcn === PropTypes.number.isRequired ) {
		return 'number (required)';
	}
	if ( fcn === PropTypes.number ) {
		return 'number';
	}
	if ( fcn === PropTypes.bool.isRequired ) {
		return 'boolean (required)';
	}
	if ( fcn === PropTypes.bool ) {
		return 'boolean';
	}
	if ( fcn === PropTypes.func.isRequired ) {
		return 'function (required)';
	}
	if ( fcn === PropTypes.func ) {
		return 'function';
	}
	if ( fcn === PropTypes.object.isRequired ) {
		return 'object (required)';
	}
	if ( fcn === PropTypes.object ) {
		return 'object';
	}
	if ( fcn === PropTypes.array.isRequired ) {
		return 'array (required)';
	}
	if ( fcn === PropTypes.array ) {
		return 'array';
	}
	return null;
}

function removePlaceholderMarkup( str ) {
	if ( !str ) {
		return '';
	}
	str = replace( str, RE_SNIPPET_EMPTY_PLACEHOLDER, '' );
	return replace( str, RE_SNIPPET_PLACEHOLDER, '$1' );
}


// MAIN //

class ComponentConfigurator extends Component {
	constructor( props ) {
		super( props );
		const { name, value } = props.component;
		this.state = {
			componentClass: null,
			name: name,
			value: removePlaceholderMarkup( value )
		};
	}

	static getDerivedStateFromProps( nextProps, prevState ) {
		let newState = {};
		if ( nextProps.component.name !== prevState.name ) {
			newState.name = nextProps.component.name;
			newState.value = removePlaceholderMarkup( nextProps.component.value );
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
			if ( comp.loader ) {
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
		this.setState({
			value: removePlaceholderMarkup( this.props.component.value )
		});
	}

	checkboxClickFactory = ( key, defaultValue ) => {
		const replacement = generateReplacement( defaultValue );
		let RE_FULL_KEY;
		if ( this.props.component.selfClosing ) {
			RE_FULL_KEY = new RegExp( '\\s*'+key+'=[\\s\\S]*?( |\t|\r?\n)(?=[a-z]+=|\\/>)', 'i' );
		} else {
			RE_FULL_KEY = new RegExp( '\\s*'+key+'=[\\s\\S]*?( |\t|\r?\n)(?=[a-z]+=|>)', 'i' );
		}
		const RE_KEY_AROUND_WHITESPACE = new RegExp( `\\s+${key}\\s*=` );
		return () => {
			let { value } = this.state;
			if ( !RE_KEY_AROUND_WHITESPACE.test( this.state.value ) ) {
				if ( this.props.component.selfClosing ) {
					value = value.substring( 0, value.length - 3 );
					value += ` ${key}=${replacement}\n/>`;
				} else {
					const idx = value.indexOf( '>' );
					const rest = value.substring( idx+1 );
					value = value.substring( 0, idx );
					if ( value[ value.length-1 ] === ' ' ) {
						value = removeLast( value );
					}
					value += ` ${key}=${replacement}\n>`;
					value = value + rest;
				}
			} else {
				value = replace( value, RE_FULL_KEY, ' ' );
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
			if ( key === 'children' ) {
				// Skip loop iteration for certain built-in props...
				continue;
			}
			const defaultValue = componentClass.defaultProps ?
				componentClass.defaultProps[ key ] : null;
			const description = componentClass.propDescriptions ?
				componentClass.propDescriptions[ key ] : '';
			const propType = componentClass.propTypes[ key ];
			const type = extractType( propType );
			let isRequired = false;
			if ( type ) {
				isRequired = contains( type, '(required)' );
			}
			let isActive = isRequired;
			if ( !isActive ) {
				const RE_KEY_AROUND_WHITESPACE = new RegExp( `\\s+${key}\\s*=` );
				isActive = RE_KEY_AROUND_WHITESPACE.test( this.state.value );
			}
			const className = isActive ? 'success' : '';
			const elem = <tr className={className} style={{ marginBottom: 5 }} key={i}>
					<td>
						{ !isRequired ? <Checkbox checked={isActive} onClick={this.checkboxClickFactory( key, defaultValue )} style={{ marginTop: 0, marginBottom: 0 }} >{key}</Checkbox> : <Checkbox checked disabled>{key}</Checkbox> }
					</td>
					<td>{description}</td>
					<td>
						{ type ? `${type}` : '' }
					</td>
					<td>
						{generateDefaultString( defaultValue )}
					</td>
				</tr>;
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
				style={{ right: '-20%' }}
			>
				<Modal.Header closeButton>
					<Modal.Title>Configure {this.props.component.name}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<label>Click on the box to add the respective options:</label>
					<div style={{ height: '350px', overflowY: 'scroll' }}>
						<table className="table table-bordered table-condensed">
							<thead>
								<tr>
									<th>Option</th>
									<th>Description</th>
									<th>Type</th>
									<th>Default</th>
								</tr>
							</thead>
							<tbody>
								{this.renderPropertyControls()}
							</tbody>
						</table>
					</div>
					<FormGroup>
						<ControlLabel>Code:</ControlLabel>
						<FormControl
							componentClass="textarea"
							rows={6}
							value={this.state.value}
							onChange={this.handleChange}
							style={{ resize: 'none' }}
						/>
					</FormGroup>
				</Modal.Body>
				<Modal.Footer>
					<Button
						bsStyle="success"
						onClick={this.handleClick}
					>Insert</Button>
					<Button
						bsStyle="primary"
						onClick={this.handleReset}
					>Reset</Button>
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
