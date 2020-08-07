/* eslint-disable camelcase */

// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { EOL } from 'os';
import logger from 'debug';
import SplitPane from 'react-split-pane';
import markdownit from 'markdown-it';
import debounce from 'lodash.debounce';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Loadable from 'components/internal/loadable';
const ReactJson = Loadable( () => import( 'react-json-view' ) );
import TextArea from 'components/input/text-area';
import Checkbox from 'components/input/checkbox';
import NumberInput from 'components/input/number';
import Playground from 'editor-components/playground';
import Provider from 'components/provider';
import { isPrimitive as isString } from '@stdlib/assert/is-string';
import isEmptyObject from '@stdlib/assert/is-empty-object';
import typeOf from '@stdlib/utils/type-of';
import objectKeys from '@stdlib/utils/keys';
import replace from '@stdlib/string/replace';
import removeLast from '@stdlib/string/remove-last';
import rtrim from '@stdlib/string/right-trim';
import endsWith from '@stdlib/string/ends-with';
import contains from '@stdlib/assert/contains';
import rescape from '@stdlib/utils/escape-regexp-string';
import { SCOPE } from 'editor-components/preview/create_scope.js';
import markdownToHTML from 'utils/markdown-to-html';
import COMPONENT_DOCS from 'components/documentation.json';
import Session from 'session';
import './component_configurator.css';


// VARIABLES //

const RE_SNIPPET_PLACEHOLDER = /\${[0-9]:([^}]+)}/g;
const RE_SNIPPET_EMPTY_PLACEHOLDER = /\t*\${[0-9]:}\n?/g;
const RE_NEW_LINES = /\n{2,99}/g;
const RE_BEFORE_TAG = /^\s*['"]?[\da-z]+['"]?:/i;
const SPACES_AFTER_NEW_LINE = /\n +(?=[^ ])/;
const SPACES_BEFORE_CLOSING_TAG = /\s*(\n\/?>)/;
const md = markdownit({
	html: true,
	xhtmlOut: true,
	breaks: true,
	typographer: false
});
md.disable( 'code' );
const debug = logger('isle:editor:component-configurator');


// FUNCTIONS //

function extractType( type, defaultValue ) {
	type = replace( type, ' (required)', '' );
	switch ( type ) {
		case 'number':
		case 'string':
		case 'boolean':
		case 'array':
		case 'function':
		case 'object':
			return type;
		default:
			return typeOf( defaultValue );
	}
}

function generateReplacement( value, type ) {
	switch ( type ) {
		case 'boolean':
			return '{' + value + '}';
		case 'object':
			if ( !value ) {
				return '{{}}';
			}
			return '{' + JSON.stringify( value ) + '}';
		case 'array':
			if ( !value ) {
				return '{[]}';
			}
			return '{' + JSON.stringify( value ) + '}';
		case 'string':
			if ( value && contains( value, '\n' ) ) {
				return '{`' + value + '`}';
			}
			if ( !value ) {
				value = '';
			}
			return `"${value}"`;
		case 'number':
			return '{' + value + '}';
		case 'function':
			if ( !value ) {
				value = '() => {}';
			}
			return '{' + value + '}';
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
		let { name, value } = props.component;
		const doc = COMPONENT_DOCS[ name ] || {};
		const docProps = doc.props.slice() || [];
		docProps.push({
			name: 'id',
			type: 'string',
			defaultValue: '',
			description: 'Component identifier. Has to begin with a letter followed by letters, digits, hyphens ( - ), underscores ( _ ), colons ( : ), and periods ( . ).'
		});

		this.selfClosing = endsWith( rtrim( value ), '/>' );
		if ( this.selfClosing ) {
			this.RE_PROPERTY = new RegExp( '^\\s*<'+name+'\\s+(?:[ \\t]*)([a-z]+) *=? *(?:{`?([\\s\\S]*?)`?}|"([\\s\\S]*?)"|\'([\\s\\S]*?)\')?\\s*( +|\\t|\\r?\\n)?(?=[a-z]+=?|\\/>)', 'i' );
		} else {
			this.RE_PROPERTY = new RegExp( '^\\s*<'+name+'\\s+(?:[ \\t]*)([a-z]+) *=? *(?:{`?([\\s\\S]*?)`?}|"([\\s\\S]*?)"|\'([\\s\\S]*?)\')?\\s*( +|\\t|\\r?\\n)?(?=[a-z]+=?|>)', 'i' );
		}
		const propValues = {};
		const propActive = {};
		const propertyTypes = {};
		const isRequired = {};
		const defaultStrings = {};
		value = removePlaceholderMarkup( value );
		for ( let i = 0; i < docProps.length; i++ ) {
			const p = docProps[ i ];
			const { name, type, defaultValue } = p;
			propValues[ 'prop:'+name ] = defaultValue;
			propertyTypes[ p.name ] = extractType( type, defaultValue );
			const RE_KEY_AROUND_WHITESPACE = new RegExp( `\\s+${name}\\s*=` );
			propActive[ name ] = RE_KEY_AROUND_WHITESPACE.test( value );
			isRequired[ name ] = contains( type, '(required)' );
			defaultStrings[ name ] = generateDefaultString( defaultValue, contains( type, 'function' ) );
		}
		this.state = {
			name: name,
			value,
			propActive,
			...propValues
		};
		if ( !this.selfClosing ) {
			docProps.unshift({
				name: 'children',
				type: '(string|node)',
				defaultValue: '',
				description: 'Content between opening and closing tag'
			});
			this.RE_CHILDREN = new RegExp( '^\\s*<'+name+'\\s*>'+EOL+'?([\\s\\S]*?)'+EOL+'?</'+name+'>' );
			isRequired[ 'children' ] = true;
		}
		this.propertyTypes = propertyTypes;
		this.isRequired = isRequired;
		this.defaultStrings = defaultStrings;
		this.docProps = docProps;
		this.session = new Session( {}, props.currentMode === 'offline' );
		this.description = md.render( doc.description || 'Component description is missing.' );
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

	componentDidMount() {
		this.calculateValuesFromText();
	}

	clickHide = () => {
		this.props.onHide();
	}

	handleChange = ( newValue ) => {
		this.setState({
			value: newValue
		});
	};

	calculateValuesFromText = () => {
		let match;
		const newValues = {};
		const newActive = {};
		const keys = objectKeys( this.state.propActive );
		for ( let i = 0; i < keys.length; i++ ) {
			newActive[ keys[ i ] ] = false;
		}
		let value = this.state.value;
		value = replace( value, RE_BEFORE_TAG, '' );
		do {
			let propName;
			match = this.RE_PROPERTY.exec( value );
			if ( match ) {
				propName = match[ 1 ];
				let val = match[ 2 ] || match[ 3 ] || match[ 4 ] || '';
				value = replace( value, new RegExp( match[ 1 ]+'=["{\']`?'+rescape( val )+'`?["}\']', 'i' ), '' );
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
					case 'array':
					case 'object':
						try {
							val = eval(`(${val})` ); // eslint-disable-line no-eval
						} catch ( err ) {
							val = String( val );
						}
						break;
					case 'function':
						val = String( val );
						break;
					default:
						val = String( val );
				}
				newValues[ 'prop:'+propName ] = val;
				newActive[ propName ] = true;
			}
		} while ( match );
		if ( !this.selfClosing ) {
			const match = value.match( this.RE_CHILDREN );
			if ( match[ 1 ] ) {
				newValues[ 'prop:children' ] = match[ 1 ];
				newActive[ 'children' ] = true;
			}
		}
		this.setState({
			...newValues,
			propActive: newActive
		}, () => {
			const requiredKeys = objectKeys( this.isRequired );
			for ( let i = 0; i < requiredKeys.length; i++ ) {
				if (
					this.isRequired[ requiredKeys[ i ] ] &&
					!newActive[ requiredKeys[ i ] ] &&
					requiredKeys[ i ] !== 'children'
				) {
					debug( `Should insert ${requiredKeys[ i ]} attribute...` );
					this.insertAttribute( requiredKeys[ i ] );
				}
			}
		});
	}

	handleMouseOut = () => {
		this.calculateValuesFromText();
	}

	handleClick = () => {
		let value = this.state.value;
		if ( value ) {
			if ( this.props.component.context === 'preview' ) {
				value = EOL + value;
			}
			else if ( !endsWith( value, '\n' ) ) {
				value = value + EOL;
			}
			this.props.onInsert( value );
		}
	}

	handleReset = () => {
		this.setState({
			value: removePlaceholderMarkup( this.props.component.value )
		}, this.calculateValuesFromText );
	}

	replaceChildrenFactory = () => {
		let oldValue;
		const debouncedValueUpdate = debounce( ( newValue ) => {
			let { value, name } = this.state;
			value = replace( value, new RegExp( oldValue+'('+EOL+'?)</'+name+'>' ), newValue+'$1</'+name+'>' );
			this.setState({
				value
			});
			oldValue = null;
		}, 300 );
		return ( newValue ) => {
			if ( !oldValue ) {
				oldValue = this.state[ 'prop:children' ];
			}
			this.setState({
				'prop:children': newValue
			}, () => {
				debouncedValueUpdate( newValue );
			});
		};
	}

	replaceStringFactory = ( key ) => {
		let RE_FULL_KEY;
		if ( this.selfClosing ) {
			RE_FULL_KEY = new RegExp( '([ \t]*)' + key + '=([\\s\\S]*?)( +|\t|\r?\n)(?=[a-zA-Z]+=|\\/>)' );
		} else {
			RE_FULL_KEY = new RegExp( '([ \t]*)' + key + '=([\\s\\S]*?)( +|\t|\r?\n)(?=[a-zA-Z]+=|>)' );
		}
		const debouncedValueUpdate = debounce( ( newValue ) => {
			let { value } = this.state;
			let replacement;
			if ( contains( newValue, '\n' )) {
				replacement = '{`' + newValue + '`}';
			} else {
				replacement = `"${newValue}"`;
			}
			value = replace( value, RE_FULL_KEY, '$1' + key + '=' + replacement + '$3' );
			this.setState({ value });
		}, 300 );
		return ( newValue ) => {
			this.setState({
				[ 'prop:'+key ]: newValue
			}, () => {
				debouncedValueUpdate( newValue );
			});
		};
	}

	handleJSONChangeFactory = ( key ) => {
		let RE_FULL_KEY;
		if ( this.selfClosing ) {
			RE_FULL_KEY = new RegExp( '([ \t]*)' + key + '=([\\s\\S]*?)( +|\t|\r?\n)(?=[a-z]+=|\\/>)', 'i' );
		} else {
			RE_FULL_KEY = new RegExp( '([ \t]*)' + key + '=([\\s\\S]*?)( +|\t|\r?\n)(?=[a-z]+=|>)', 'i' );
		}
		return ({ updated_src }) => {
			let { value } = this.state;
			value = replace( value, RE_FULL_KEY, '$1' + key + '={' + JSON.stringify( updated_src, null, 2 ) + '}$3' );
			this.setState({
				value,
				[ 'prop:'+key ]: updated_src
			});
		};
	}

	replaceObjectFactory = ( key ) => {
		let RE_FULL_KEY;
		if ( this.selfClosing ) {
			RE_FULL_KEY = new RegExp( '([ \t]*)' + key + '=([\\s\\S]*?)( +|\t|\r?\n)(?=[a-z]+=|\\/>)', 'i' );
		} else {
			RE_FULL_KEY = new RegExp( '([ \t]*)' + key + '=([\\s\\S]*?)( +|\t|\r?\n)(?=[a-z]+=|>)', 'i' );
		}
		return ( newValue ) => {
			this.setState({
				[ 'prop:'+key ]: newValue
			}, () => {
				let { value } = this.state;
				value = replace( value, RE_FULL_KEY, '$1' + key + '={' + newValue + '}$3' );
				this.setState({ value });
			});
		};
	}

	replaceNumberOrBooleanFactory = ( key ) => {
		const RE_FULL_KEY = new RegExp( '([ \t]*)' + key + '=([\\s\\S]*?)( +|\t|\r?\n)', 'i' );
		return ( newValue ) => {
			let { value } = this.state;
			value = replace( value, RE_FULL_KEY, '$1' + key + '={' + newValue + '}$3' );
			this.setState({
				value,
				[ 'prop:'+key ]: newValue
			});
		};
	}

	insertAttribute = ( key ) => {
		const newPropActive = { ...this.state.propActive };
		let { value } = this.state;
		const type = this.propertyTypes[ key ];
		let defaultValue = this.state[ 'prop:'+key ];
		if ( defaultValue === false ) {
			defaultValue = true;
		}
		const replacement = generateReplacement( defaultValue, type );
		newPropActive[ key ] = true;
		if ( this.selfClosing ) {
			value = value.substring( 0, value.length - 2 );
			if ( value[ value.length - 1 ] === ' ' || value[ value.length - 1 ] === '/' ) {
				value = removeLast( value );
			}
			value = rtrim( value ) + `\n  ${key}=${replacement}\n/>`;
		} else {
			const idx = value.indexOf( '>' );
			const rest = value.substring( idx + 1 );
			value = value.substring( 0, idx );
			if ( value[ value.length - 1 ] === ' ' ) {
				value = removeLast( value );
			}
			value = rtrim( value ) + `\n  ${key}=${replacement}\n>`;
			value = value + rest;
		}
		this.setState({
			value,
			propActive: newPropActive,
			[ 'prop:'+key ]: defaultValue
		});
	}

	checkboxClickFactory = ( key ) => {
		let RE_FULL_KEY;
		if ( this.selfClosing ) {
			RE_FULL_KEY = new RegExp( '[ \\t]*' + key + '(?:=["{]`?[\\s\\S]*?`?["}]|)([ \\t\\r\\n]*)(?=[a-zA-Z]+=?|\\/>)' );
		} else {
			RE_FULL_KEY = new RegExp( '[ \\t]*' + key + '(?:=["{]`?[\\s\\S]*?`?["}]|)([ \\t\\r\\n]*)(?=[a-zA-Z]+=?|>)' );
		}
		const RE_KEY_AROUND_WHITESPACE = new RegExp( `\\s+${key}\\s*=?` );
		return () => {
			let { value, propActive } = this.state;
			if ( !RE_KEY_AROUND_WHITESPACE.test( value ) ) {
				debug(`Insert ${key} attribute...`);
				this.insertAttribute( key );
			} else {
				debug(`Remove ${key} attribute...`);
				const newPropActive = { ...propActive };
				newPropActive[ key ] = false;
				value = replace( value, RE_FULL_KEY, '\n$1' );
				value = replace( value, RE_NEW_LINES, '\n' );
				value = replace( value, SPACES_AFTER_NEW_LINE, '\n  ' );
				value = replace( value, SPACES_BEFORE_CLOSING_TAG, '$1' );
				this.setState({
					value,
					propActive: newPropActive
				});
			}
		};
	}

	renderPropertyControls() {
		debug( 'Rendering property controls...' );
		const props = this.docProps;
		if ( props.length === 0 ) {
			return <div style={{ marginBottom: 15 }}>Component has no properties.</div>;
		}
		const controls = [];
		for ( let i = 0; i < props.length; i++ ) {
			const prop = props[ i ] || {};
			const { name, description, type } = prop;
			const isActive = this.state.propActive[ name ];
			const isRequired = this.isRequired[ name ];
			const className = isActive ? 'configurator-tr-active' : '';
			let input;
			const propValue = this.state[ 'prop:'+name ];
			const propType = this.propertyTypes[ name ];
			if ( name === 'children' ) {
				input = <TextArea
					value={propValue}
					rows={3}
					placeholder="Enter content..."
					onChange={this.replaceChildrenFactory()}
					resizable="vertical"
				/>;
			} else {
				switch ( propType ) {
					case 'number':
						input = <NumberInput value={propValue} step="any" onChange={this.replaceNumberOrBooleanFactory(name)} />;
						break;
					case 'string':
						input = <TextArea
							value={propValue}
							rows={2}
							placeholder={`Enter ${name}...`}
							onChange={this.replaceStringFactory(name)}
							resizable="vertical"
						/>;
						break;
					case 'boolean':
						input = <Checkbox
							value={propValue}
							onChange={this.replaceNumberOrBooleanFactory(name)}
						/>;
						break;
					case 'array':
					case 'object': {
						if ( isString( propValue ) ) {
							// Case: Array or object contains JSX or other non-standard code
							input = <TextArea
								value={propValue}
								rows={3}
								placeholder={`Enter ${name}...`}
								onChange={this.replaceObjectFactory(name)}
								resizable="vertical"
							/>;
						} else {
							if ( !propValue ) {
								propValue = ( propType === 'array' ) ? [] : {};
							}
							const changeHandler = this.handleJSONChangeFactory( name );
							input = <ReactJson
								name={false}
								src={propValue}
								onAdd={changeHandler}
								onEdit={changeHandler}
								onDelete={changeHandler}
								enableClipboard={false}
								displayDataTypes={false}
								displayObjectSize={false}
							/>;
						}
						break;
					}
					case 'function':
					default:
						input = <TextArea
							value={propValue}
							rows={3}
							onChange={this.replaceObjectFactory(name)}
							placeholder={`Enter ${name}...`}
							resizable="vertical"
						/>;
				}
			}
			const elem = <tr className={className} style={{ marginBottom: 5 }} key={i}>
				<td>
					{!isRequired ?
						<Checkbox
							className="configurator-checkbox"
							id={name} value={isActive}
							onChange={this.checkboxClickFactory( name )}
							legend={name} /> :
						<Checkbox
							className="configurator-checkbox" id={name}
							value={true} disabled legend={name}
						/>
					}
				</td>
				<td>{description}</td>
				<td>
					{(isActive || isRequired ) ? input : null}
				</td>
				<td>
					{type ? `${type}` : ''}
				</td>
				<td>
					{this.defaultStrings[ name ]}
				</td>
			</tr>;
			controls.push( elem );
		}
		return (
			<Fragment>
				<Card.Subtitle style={{ fontSize: '12px' }} className="mb-2 text-muted">Click on the box to toggle the respective options on and off and set their values:</Card.Subtitle>
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
			</Fragment>
		);
	}

	render() {
		debug( 'Rendering component configurator modal...' );
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
					<SplitPane
						className="splitpane"
						split="horizontal"
						style={{ left: 0 }}
						defaultSize={window.innerHeight / 2.25}
					>
						<div style={{ width: '100%', overflowY: 'scroll', padding: 10 }} >
							{componentDescription}
							{this.renderPropertyControls()}
						</div>
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
									height: '100%',
									overflowX: 'hidden'
								}}
								transformCode={( code ) => {
									try {
										code = replace( code, RE_BEFORE_TAG, '' );
										let out = markdownToHTML( code );
										out = replace( out, /String.raw`([^`]+)`/g, ( m, p1 ) => {
											const raw = replace( p1, '\\', '\\\\' );
											return `String.raw({ raw: '${raw}' })`;
										});
										return out;
									} catch ( err ) {
										return err;
									}
								}}
							/>
						</Provider>
					</SplitPane>
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
