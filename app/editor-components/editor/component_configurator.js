// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import markdownit from 'markdown-it';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import TextArea from 'components/input/text-area';
import Checkbox from 'components/input/checkbox';
import NumberInput from 'components/input/number';
import Playground from 'components/playground';
import Provider from 'components/provider';
import { isPrimitive as isBoolean } from '@stdlib/assert/is-boolean';
import isEmptyObject from '@stdlib/assert/is-empty-object';
import typeOf from '@stdlib/utils/type-of';
import objectKeys from '@stdlib/utils/keys';
import replace from '@stdlib/string/replace';
import removeLast from '@stdlib/string/remove-last';
import rtrim from '@stdlib/string/right-trim';
import contains from '@stdlib/assert/contains';
import { SCOPE } from 'editor-components/preview/create_scope.js';
import COMPONENT_DOCS from './components_documentation.json';
import Session from 'session';
import './component_configurator.css';


// VARIABLES //

const RE_FUNCTION = /^[a-z0-9]*\(([^)]*)\)/i;
const RE_SNIPPET_PLACEHOLDER = /\${[0-9]:([^}]+)}/g;
const RE_SNIPPET_EMPTY_PLACEHOLDER = /\t*\${[0-9]:}\n?/g;
const RE_NEW_LINES = /\n{2,99}/g;
const RE_PROP_KEY_SELF_CLOSING = /(?=[ \t]*)([a-z]+)=([\s\S]*?)\s*( +|\t|\r?\n)(?=[a-z]+=|\/>)/gi;
const RE_PROP_KEY_NON_SELF_CLOSING = /(?=[ \t]*)([a-z]+)=([\s\S]*?)\s*( +|\t|\r?\n)(?=[a-z]+=|>)/gi;
const RE_EXTRACT_PROP = /^["{`]{1,2}([\s\S]*)[`"}]{1,2}/;
const SPACES_AFTER_NEW_LINE = /\n +(?=[^ ])/;
const SPACES_BEFORE_CLOSING_TAG = /\s*(\n\/?>)/;
const md = markdownit({
	html: true,
	xhtmlOut: true,
	breaks: true,
	typographer: false
});
const debug = logger('isle:editor:component-configurator');


// FUNCTIONS //

function generateReplacement( defaultValue ) {
	const match = RE_FUNCTION.exec(defaultValue);
	if ( match ) {
		// Convert to arrow function:
		defaultValue = replace( defaultValue, match[0], '(' + match[1] + ') => ' );
		return '{' + defaultValue + '}';
	}
	const type = typeOf( defaultValue );
	switch ( type ) {
		case 'boolean':
			return '{' + !defaultValue + '}';
		case 'object':
		case 'array':
			return '{' + JSON.stringify( defaultValue ) + '}';
		case 'string':
			if ( contains( defaultValue, '\n' ) ) {
				return '{`' + defaultValue + '`}';
			}
			return `"${defaultValue}"`;
		case 'number':
			return '{' + defaultValue + '}';
		default:
			return '{}';
	}
}

function generateDefaultString(defaultValue, isFunc) {
	if ( isFunc ) {
		return defaultValue;
	}
	if ( defaultValue === null || defaultValue === void 0 ) {
		return 'none';
	}
	return JSON.stringify(defaultValue, null, 2);
}

function removePlaceholderMarkup(str) {
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
		let { name, value } = props.component;
		const doc = COMPONENT_DOCS[ name ] || {};
		const docProps = doc.props || [];
		const propValues = {};
		const propActive = {};
		const propertyTypes = {};
		value = removePlaceholderMarkup( value );
		for ( let i = 0; i < docProps.length; i++ ) {
			const p = docProps[ i ];
			propValues[ p.name ] = p.default;
			propertyTypes[ p.name ] = p.type;
			const RE_KEY_AROUND_WHITESPACE = new RegExp(`\\s+${p.name}\\s*=`);
			propActive[ p.name ] = RE_KEY_AROUND_WHITESPACE.test( value );
		}
		this.state = {
			name: name,
			value,
			propValues,
			propActive
		};
		this.propertyTypes = propertyTypes;
		this.docProps = docProps;
		this.session = new Session({}, props.currentMode === 'offline');
		this.description = md.render( doc.description || 'Component description is missing.' );
		this.selfClosing = contains( value, '/>' );
	}

	static getDerivedStateFromProps(nextProps, prevState) {
		let newState = {};
		if ( nextProps.component.name !== prevState.name ) {
			newState.name = nextProps.component.name;
			newState.value = removePlaceholderMarkup(nextProps.component.value);
		}
		if ( !isEmptyObject( newState ) ) {
			return newState;
		}
		return null;
	}

	componentDidMount() {
		this.calculateValuesFromText();
	}

	clickHide = () => {
		this.props.onHide();
	}

	handleChange = (newValue) => {
		this.setState({
			value: newValue
		});
	};

	calculateValuesFromText = () => {
		let match;
		const newValues = { ...this.state.propValues };
		const newActive = {};
		const keys = objectKeys( this.state.propActive );
		for ( let i = 0; i < keys.length; i++ ) {
			newActive[ keys[ i ] ] = false;
		}
		let RE;
		if ( this.selfClosing ) {
			RE = RE_PROP_KEY_SELF_CLOSING;
		} else {
			RE = RE_PROP_KEY_NON_SELF_CLOSING;
		}
		do {
			let propName;
			match = RE.exec( this.state.value );
			if ( match ) {
				propName = match[ 1 ];
				let val = replace( match[ 2 ], RE_EXTRACT_PROP, '$1' );
				const propertyType = this.propertyTypes[ propName ] || '';
				switch ( propertyType ) {
					case 'boolean':
						if ( val === 'true' ) {
							val = true;
						} else {
							val = false;
						}
						break;
					case 'number':
						val = Number( val );
						break;
					default:
						val = String( val );
				}
				newValues[ propName ] = val;
				newActive[ propName ] = true;
			}
		} while ( match );
		console.log(newValues);
		console.log(newActive);
		this.setState({
			propValues: newValues,
			propActive: newActive
		});
	}

	handleMouseOut = () => {
		this.calculateValuesFromText();
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

	replaceStringFactory = ( key ) => {
		let RE_FULL_KEY;
		if ( this.selfClosing ) {
			RE_FULL_KEY = new RegExp('([ \t]*)' + key + '=([\\s\\S]*?)( +|\t|\r?\n)(?=[a-z]+=|\\/>)', 'i');
		} else {
			RE_FULL_KEY = new RegExp('([ \t]*)' + key + '=([\\s\\S]*?)( +|\t|\r?\n)(?=[a-z]+=|>)', 'i');
		}
		return ( newValue ) => {
			let { value, propValues } = this.state;
			let replacement;
			if ( contains( newValue, '\n' )) {
				replacement = '\\{`' + newValue + '`\\}';
			} else {
				replacement = `"${newValue}"`;
			}
			const newPropValues = { ...propValues };
			newPropValues[key] = newValue;
			value = replace(value, RE_FULL_KEY, '$1' + key + '=' + replacement + '$3');
			this.setState({
				value,
				propValues: newPropValues
			});
		};
	}

	replaceNumberOrBooleanFactory = (key) => {
		const RE_FULL_KEY = new RegExp('([ \t]*)' + key + '=([\\s\\S]*?)( +|\t|\r?\n)', 'i');
		return ( newValue ) => {
			console.log( newValue );
			let { value, propValues } = this.state;
			const newPropValues = { ...propValues };
			newPropValues[ key ] = newValue;
			value = replace( value, RE_FULL_KEY, '$1' + key + '={' + newValue + '}$3' );
			this.setState({
				value,
				propValues: newPropValues
			});
		};
	}

	checkboxClickFactory = ( key, defaultValue ) => {
		const replacement = generateReplacement( defaultValue );
		let RE_FULL_KEY;
		if ( this.selfClosing ) {
			RE_FULL_KEY = new RegExp('[ \t]*' + key + '=[\\s\\S]*?( +|\t|\r?\n)(?=[a-z]+=|\\/>)', 'i');
		} else {
			RE_FULL_KEY = new RegExp('[ \t]*' + key + '=[\\s\\S]*?( +|\t|\r?\n)(?=[a-z]+=|>)', 'i');
		}
		const RE_KEY_AROUND_WHITESPACE = new RegExp(`\\s+${key}\\s*=`);
		return () => {
			let { value, propActive, propValues } = this.state;
			const newPropActive = { ...propActive };
			const newPropValues = { ...propValues };
			if ( !RE_KEY_AROUND_WHITESPACE.test( value ) ) {
				debug(`Insert ${key} attribute...`);
				newPropActive[ key ] = true;
				if ( this.selfClosing ) {
					value = value.substring( 0, value.length - 3 );
					value = rtrim(value) + `\n  ${key}=${replacement}\n/>`;
				} else {
					const idx = value.indexOf( '>' );
					const rest = value.substring(idx + 1);
					value = value.substring(0, idx);
					if ( value[ value.length - 1 ] === ' ' ) {
						value = removeLast(value);
					}
					value = rtrim( value ) + `\n  ${key}=${replacement}\n>`;
					value = value + rest;
				}
				if ( isBoolean( defaultValue ) ) {
					defaultValue = !defaultValue;
				}
				newPropValues[ key ] = defaultValue;
			} else {
				debug(`Remove ${key} attribute...`);
				newPropActive[ key ] = false;
				value = replace( value, RE_FULL_KEY, '\n$1' );
				value = replace( value, RE_NEW_LINES, '\n' );
				value = replace( value, SPACES_AFTER_NEW_LINE, '\n  ' );
				value = replace( value, SPACES_BEFORE_CLOSING_TAG, '$1' );
			}
			this.setState({
				value,
				propActive: newPropActive,
				propValues: newPropValues
			});
		};
	}

	renderPropertyControls() {
		const props = this.docProps;
		if ( props.length === 0 ) {
			return <div style={{ marginBottom: 15 }}>Component has no properties.</div>;
		}
		const controls = [];
		for ( let i = 0; i < props.length; i++ ) {
			const prop = props[i] || {};
			const { name, description, type } = prop;
			let isRequired = false;
			if ( type ) {
				isRequired = contains( type, '(required)' );
			}
			const isActive = this.state.propActive[ name ];
			const className = isActive ? 'success' : '';
			let input;
			const propValue = this.state.propValues[ name ];
			switch ( type ) {
				case 'number':
					input = <NumberInput value={propValue} step="any" onChange={this.replaceNumberOrBooleanFactory(name)} />;
					break;
				case 'string':
					input = <TextArea value={propValue} rows={2} onChange={this.replaceStringFactory(name)} />;
					break;
				case 'boolean':
					input = <Checkbox value={propValue} onChange={this.replaceNumberOrBooleanFactory(name)} />;
					break;
				default:
					input = <TextArea value={propValue} />;
			}
			const elem = <tr className={className} style={{ marginBottom: 5 }} key={i}>
				<td>
					{!isRequired ?
						<Checkbox className="configurator-checkbox" id={name} value={isActive} onChange={this.checkboxClickFactory(name, prop.default)} legend={name} /> :
						<Checkbox className="configurator-checkbox" id={name} value={true} disabled legend={name} />
					}
				</td>
				<td>{description}</td>
				<td>
					{isActive ? input : null}
				</td>
				<td>
					{type ? `${type}` : ''}
				</td>
				<td>
					{generateDefaultString(prop.default, contains(type, 'function'))}
				</td>
			</tr>;
			controls.push(elem);
		}
		return (
			<Fragment>
				<Card.Subtitle style={{ fontSize: '12px' }} className="mb-2 text-muted">Click on the box to add the respective options:</Card.Subtitle>
				<div style={{ height: '400px', overflowY: 'scroll' }}>
					<Table striped bordered size="sm" style={{ fontSize: '14px' }}>
						<thead>
							<tr>
								<th className="configurator-column" >Option</th>
								<th className="configurator-wide-column" >Description</th>
								<th className="configurator-wide-column" >Value</th>
								<th className="configurator-column" >Type</th>
								<th className="configurator-column" >Default</th>
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
		debug('Rendering component configurator modal...');
		const innerHTML = {
			'__html': this.description
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
						<Playground
							value={this.state.value}
							scope={SCOPE}
							onChange={this.handleChange}
							editorProps={{
								onMouseOut: this.handleMouseOut
							}}
							style={{
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
	onHide() { },
	onInsert() { }
};


// EXPORTS //

export default ComponentConfigurator;
