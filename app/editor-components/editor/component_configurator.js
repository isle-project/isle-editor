// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import markdownIt from 'markdown-it';
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
import COMPONENT_DOCS from './components_documentation.json';


// VARIABLES //

const RE_SNIPPET_PLACEHOLDER = /\${[0-9]:([^}]+)}/g;
const RE_SNIPPET_EMPTY_PLACEHOLDER = /\t*\${[0-9]:}\n?/g;
const md = markdownIt({
	html: true,
	xhtmlOut: true,
	breaks: true,
	typographer: false
});


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
		const doc = COMPONENT_DOCS[ this.props.component.name ] || {};
		const props = doc.props || [];
		if ( props.length === 0 ) {
			return <div style={{ marginBottom: 15 }}>Component has no properties.</div>;
		}
		const controls = [];
		for ( let i = 0; i < props.length; i++ ) {
			const prop = props[ i ] || {};
			const defaultValue = prop.default;
			const description = prop.description;
			const type = prop.type;
			let isRequired = false;
			if ( type ) {
				isRequired = contains( type, '(required)' );
			}
			let isActive = isRequired;
			if ( !isActive ) {
				const RE_KEY_AROUND_WHITESPACE = new RegExp( `\\s+${prop.name}\\s*=` );
				isActive = RE_KEY_AROUND_WHITESPACE.test( this.state.value );
			}
			const className = isActive ? 'success' : '';
			const elem = <tr className={className} style={{ marginBottom: 5 }} key={i}>
					<td>
						{ !isRequired ? <Checkbox checked={isActive} onClick={this.checkboxClickFactory( prop.name, defaultValue )} style={{ marginTop: 0, marginBottom: 0 }} >{prop.name}</Checkbox> : <Checkbox defaultChecked={true} disabled>{prop.name}</Checkbox> }
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
		return (
			<Fragment>
				<label>Click on the box to add the respective options:</label>
				<div style={{ height: '300px', overflowY: 'scroll' }}>
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
							{controls}
						</tbody>
					</table>
				</div>
			</Fragment>
		);
	}

	render() {
		const doc = COMPONENT_DOCS[ this.props.component.name ] || {};
		const description = doc.description || 'Component description is missing.';
		const innerHTML = {
			'__html': md.render( description )
		};
		/* eslint-disable react/no-danger */
		const componentDescription = <div>
			<label dangerouslySetInnerHTML={innerHTML}></label>
		</div>;
		/* eslint-enable react/no-danger */
		return (
			<Modal
				onHide={this.clickHide}
				show={this.props.show}
				bsSize="large"
				style={{ right: '-20%', top: '-5%' }}
			>
				<Modal.Header closeButton>
					<Modal.Title>Configure {this.props.component.name}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{componentDescription}
					{this.renderPropertyControls()}
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
	show: PropTypes.bool.isRequired
};

ComponentConfigurator.defaultProps = {
	component: {},
	onHide() {},
	onInsert() {}
};


// EXPORTS //

export default ComponentConfigurator;
