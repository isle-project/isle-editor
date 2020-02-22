// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import markdownit from 'markdown-it';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Checkbox from 'components/input/checkbox';
import Playground from 'components/playground';
import Provider from 'components/provider';
import isEmptyObject from '@stdlib/assert/is-empty-object';
import typeOf from '@stdlib/utils/type-of';
import replace from '@stdlib/string/replace';
import removeLast from '@stdlib/string/remove-last';
import contains from '@stdlib/assert/contains';
import { SCOPE } from 'editor-components/preview/create_scope.js';
import COMPONENT_DOCS from './components_documentation.json';
import Session from 'session';
import './component_configurator.css';


// VARIABLES //

const RE_FUNCTION = /^[a-z0-9]*\(([^)]*)\)/i;
const RE_SNIPPET_PLACEHOLDER = /\${[0-9]:([^}]+)}/g;
const RE_INDENTED_ATTRS = /\t[a-z]+=/i;
const RE_SNIPPET_EMPTY_PLACEHOLDER = /\t*\${[0-9]:}\n?/g;
const md = markdownit({
	html: true,
	xhtmlOut: true,
	breaks: true,
	typographer: false
});
const debug = logger( 'isle:editor:component-configurator' );


// FUNCTIONS //

function generateReplacement( defaultValue ) {
	const match = RE_FUNCTION.exec( defaultValue );
	if ( match ) {
		// Convert to arrow function:
		defaultValue = replace( defaultValue, match[ 0 ], '('+match[1]+') => ' );
		return '{'+defaultValue+'}';
	}
	const type = typeOf( defaultValue );
	switch ( type ) {
		case 'boolean':
			return '{'+!defaultValue+'}';
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

function generateDefaultString( defaultValue, isFunc ) {
	if ( isFunc ) {
		return defaultValue;
	}
	if ( defaultValue === null || defaultValue === void 0 ) {
		return 'none';
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
		this.session = new Session( {}, props.currentMode === 'offline' );
	}

	static getDerivedStateFromProps( nextProps, prevState ) {
		let newState = {};
		if ( nextProps.component.name !== prevState.name ) {
			newState.name = nextProps.component.name;
			newState.value = removePlaceholderMarkup( nextProps.component.value );
		}
		if ( !isEmptyObject( newState ) ) {
			return newState;
		}
		return null;
	}

	clickHide = () => {
		this.props.onHide();
	}

	handleChange = ( newValue ) => {
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
		const selfClosing = contains( this.props.component.value, '/>' );
		if ( selfClosing ) {
			RE_FULL_KEY = new RegExp( '\n?(\\s*)'+key+'=[\\s\\S]*?( |\t|\r?\n)(?=[a-z]+=|\\/>)', 'i' );
		} else {
			RE_FULL_KEY = new RegExp( '\n?(\\s*)'+key+'=[\\s\\S]*?( |\t|\r?\n)(?=[a-z]+=|>)', 'i' );
		}
		const RE_KEY_AROUND_WHITESPACE = new RegExp( `\\s+${key}\\s*=` );
		return () => {
			let { value } = this.state;
			if ( !RE_KEY_AROUND_WHITESPACE.test( value ) ) {
				debug( `Insert ${key} attribute...` );
				const indentedAttrs = RE_INDENTED_ATTRS.test( value );
				if ( selfClosing ) {
					value = value.substring( 0, value.length - 3 );
					value += `\n${indentedAttrs ? '\t' : ' '}${key}=${replacement}\n/>`;
				} else {
					const idx = value.indexOf( '>' );
					const rest = value.substring( idx+1 );
					value = value.substring( 0, idx );
					if ( value[ value.length-1 ] === ' ' ) {
						value = removeLast( value );
					}
					value += `\n${indentedAttrs ? '\t' : ' '}${key}=${replacement}\n>`;
					value = value + rest;
				}
			} else {
				debug( `Remove ${key} attribute...` );
				value = replace( value, RE_FULL_KEY, '$1' );
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
						{ !isRequired ?
							<Checkbox className="configurator-checkbox" id={prop.name} defaultValue={isActive} onChange={this.checkboxClickFactory( prop.name, defaultValue )} legend={prop.name} /> :
							<Checkbox className="configurator-checkbox" id={prop.name} defaultValue={true} disabled legend={prop.name} />
						}
					</td>
					<td>{description}</td>
					<td>
						{ type ? `${type}` : '' }
					</td>
					<td>
						{generateDefaultString( defaultValue, contains( type, 'function' ) )}
					</td>
				</tr>;
			controls.push( elem );
		}
		return (
			<Fragment>
				<Card.Subtitle style={{ fontSize: '12px' }} className="mb-2 text-muted">Click on the box to add the respective options:</Card.Subtitle>
				<div style={{ height: '300px', overflowY: 'scroll' }}>
					<Table striped bordered size="sm" style={{ fontSize: '14px' }}>
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
					</Table>
				</div>
			</Fragment>
		);
	}

	render() {
		debug( 'Rendering component configurator modal...' );
		const doc = COMPONENT_DOCS[ this.props.component.name ] || {};
		const description = doc.description || 'Component description is missing.';
		const innerHTML = {
			'__html': md.render( description )
		};
		/* eslint-disable react/no-danger */
		const componentDescription = <div>
			<span className="configurator-title" dangerouslySetInnerHTML={innerHTML}></span>
		</div>;
		/* eslint-enable react/no-danger */
		return (
			<Modal
				onHide={this.clickHide}
				show={this.props.show}
				dialogClassName="modal-90w"
			>
				<Modal.Header closeButton>
					<Modal.Title as="h5">Configure {this.props.component.name}</Modal.Title>
				</Modal.Header>
				<Modal.Body style={{ height: '80vh', overflowY: 'auto' }}>
					{componentDescription}
					{this.renderPropertyControls()}
					<Provider session={this.session} currentRole={this.props.currentRole} >
						<Playground value={this.state.value} scope={SCOPE}
							onChange={this.handleChange} style={{
								marginTop: '12px',
								maxWidth: '100vw',
								height: 'calc(80vh - 300px)'
							}}
						/>
					</Provider>
				</Modal.Body>
				<Modal.Footer>
					<Button
						variant="success"
						onClick={this.handleClick}
					>Insert</Button>
					<Button
						variant="primary"
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


// PROPERTIES //

ComponentConfigurator.propTypes = {
	currentRole: PropTypes.string.isRequired,
	currentMode: PropTypes.string.isRequired,
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
