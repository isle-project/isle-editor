/* eslint-disable camelcase */

// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { EOL } from 'os';
import logger from 'debug';
import SplitPane from 'react-split-pane';
import markdownit from 'markdown-it';
import debounce from 'lodash.debounce';
import Select from 'react-select';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Loadable from '@isle-project/components/internal/loadable';
const ReactJson = Loadable( () => import( 'react-json-view' ) );
import TextArea from '@isle-project/components/input/text-area';
import Checkbox from '@isle-project/components/input/checkbox';
import NumberInput from '@isle-project/components/input/number';
import SelectInput from '@isle-project/components/input/select';
import Playground from 'editor-components/playground';
import Provider from '@isle-project/components/internal/provider';
import { isPrimitive as isString } from '@stdlib/assert/is-string';
import isEmptyObject from '@stdlib/assert/is-empty-object';
import isPlainObject from '@stdlib/assert/is-plain-object';
import typeOf from '@stdlib/utils/type-of';
import objectKeys from '@stdlib/utils/keys';
import replace from '@stdlib/string/replace';
import removeLast from '@stdlib/string/remove-last';
import rtrim from '@stdlib/string/right-trim';
import endsWith from '@stdlib/string/ends-with';
import startsWith from '@stdlib/string/starts-with';
import lowercase from '@stdlib/string/lowercase';
import contains from '@stdlib/assert/contains';
import rescape from '@stdlib/utils/escape-regexp-string';
import { SCOPE } from 'editor-components/preview/create_scope.js';
import extractOptionsFromDescription from 'utils/extract-options-from-description';
import markdownToHTML from 'utils/markdown-to-html';
import COMPONENT_DOCS from '@isle-project/components/documentation.json';
import ComponentStyler from 'editor-containers/component-styler';
import { addResources } from '@isle-project/locales/editor';
import Session from '@isle-project/session';
const ConfiguratorTutorial = Loadable( () => import( './tutorial.js' ) );
const DateTimePicker = Loadable( () => import( './date_time_picker.js' ) );
import SearchBar from '../searchbar/index.js';
import './component_configurator.css';


// VARIABLES //

const RE_SNIPPET_PLACEHOLDER = /\${[0-9]:([^}]+)}/g;
const RE_SNIPPET_EMPTY_PLACEHOLDER = /\t*\${[0-9]:}\n?/g;
const RE_NEW_LINES = /\n{2,99}/g;
const RE_BEFORE_TAG = /^\s*['"]?[\da-z]+['"]?:/i;
const RE_STYLE_KEY = /([ \t]*)style=({{[\s\S]*?}})/;
const SPACES_AFTER_NEW_LINE = /\n +(?=[^ ])/;
const SPACES_BEFORE_CLOSING_TAG = /\s*(\n\/?>)/;
const RE_CLASSNAME = /className=(['"])[\s\S]+?\1/;
const RE_NUMBERS = /[+-]?[\d.]+e?[+-]?\d*/;
const md = markdownit({
	html: true,
	xhtmlOut: true,
	breaks: true,
	typographer: false
});
md.disable( 'code' );
const debug = logger('isle:editor:component-configurator');
const COMPONENT_STYLER_STYLE = {
	position: 'absolute',
	height: '50%',
	left: '1%',
	top: '60px',
	width: '40%'
};
const PLAYGROUND_STYLE = {
	marginTop: '12px',
	maxWidth: '100vw',
	height: '100%',
	overflowX: 'hidden'
};


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
	if ( isFunc && !isPlainObject( defaultValue ) ) {
		return String( defaultValue );
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

function checkPropType( value, propType ) {
	if ( !value ) {
		return null;
	}
	let msg;
	if ( propType === 'boolean' && value !== 'true' && value !== 'false' ) {
		msg = 'Value has to be a boolean';
	}
	else if ( propType === 'number' && !RE_NUMBERS.test( value ) ) {
		msg = 'Value has to be a number';
	}
	else if ( propType === 'array' && !startsWith( value, '[' ) ) {
		msg = 'Value has to be a an array';
	}
	if ( msg ) {
		msg += '. Current value: '+value+'.';
		return ( <Alert variant="danger">
			{msg}
		</Alert> );
	}
	return null;
}


// MAIN //

class ComponentConfigurator extends Component {
	constructor( props ) {
		super( props );
		let { name, value } = props.component;
		const doc = COMPONENT_DOCS[ name ] || {};
		const docProps = doc.props ? doc.props.slice() : [];
		docProps.push({
			name: 'id',
			type: 'string',
			defaultValue: '',
			description: this.props.t('id-description'),
			encounteredError: null,
			showProperties: null
		});

		this.selfClosing = endsWith( rtrim( value ), '/>' );
		if ( this.selfClosing ) {
			this.RE_PROPERTY = new RegExp( '^\\s*<'+name+'\\s+(?:[ \\t]*)([a-z]+) *=? *(?:{`([\\s\\S]*?)`}|{(\\[[\\s\\S]*?\\])}|{([\\s\\S]*?)}|"([\\s\\S]*?)"|\'([\\s\\S]*?)\')?\\s*( +|\\t|\\r?\\n)?(?=[a-z]+=?|\\/>)', 'i' );
		} else {
			this.RE_PROPERTY = new RegExp( '^\\s*<'+name+'\\s+(?:[ \\t]*)([a-z]+) *=? *(?:{`([\\s\\S]*?)`}|{(\\[[\\s\\S]*?\\])}|{([\\s\\S]*?)}|"([\\s\\S]*?)"|\'([\\s\\S]*?)\')?\\s*( +|\\t|\\r?\\n)?(?=[a-z]+=?|>)', 'i' );
		}
		const propValues = {};
		const propActive = {};
		const propertyTypes = {};
		const isRequired = {};
		const defaultStrings = {};
		value = removePlaceholderMarkup( value );
		for ( let i = 0; i < docProps.length; i++ ) {
			const p = docProps[ i ];
			const { name, type, defaultValue, description } = p;
			docProps[ i ].description = props.t( 'ComponentDocs:'+description );
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
			searchValue: '',
			propActive,
			showTutorial: false,
			showStyler: false,
			dateTimePicker: null,
			...propValues
		};
		if ( !this.selfClosing ) {
			docProps.unshift({
				name: 'children',
				type: '(string|node)',
				defaultValue: '',
				description: this.props.t('children-description')
			});
			this.RE_CHILDREN = new RegExp( '^\\s*<'+name+'\\s*>'+EOL+'?([\\s\\S]*?)'+EOL+'?</'+name+'>' );
			isRequired[ 'children' ] = true;
		}
		this.propertyTypes = propertyTypes;
		this.textPropertyValues = {};
		this.isRequired = isRequired;
		this.defaultStrings = defaultStrings;
		this.docProps = docProps;
		this.session = new Session( {}, props.currentMode === 'offline' );
		this.description = md.renderInline( doc.description ? props.t( 'ComponentDocs:'+doc.description ) : 'Component description is missing.' );
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
				debug( 'Handling property '+propName );
				let val = match[ 2 ] || match[ 3 ] || match[ 4 ] || match[ 5 ] || match[ 6 ] || '';
				const RE_ATTR = new RegExp( '(\\s)'+match[ 1 ]+'(?:=["{\'][`[]?'+rescape( val )+'[`\\]]?["}\']|\\s|)', 'gm' );
				const oldValue = value;
				value = replace( value, RE_ATTR, '$1' );
				if ( value === oldValue ) {
					break;
				}
				this.textPropertyValues[ propName ] = val;
				const propertyType = this.propertyTypes[ propName ] || '';
				switch ( propertyType ) {
					case 'boolean':
						if ( val === 'true' || val === '' ) {
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
			if ( match && match[ 1 ] ) {
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
			this.textPropertyValues[ name ] = null;
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
			this.textPropertyValues[ key ] = null;
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
			this.textPropertyValues[ key ] = null;
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
			this.textPropertyValues[ key ] = null;
			this.setState({
				[ 'prop:'+key ]: newValue
			}, () => {
				let { value } = this.state;
				value = replace( value, RE_FULL_KEY, '$1' + key + '={' + newValue + '}$3' );
				this.setState({ value });
			});
		};
	}

	replaceStyle = ( newValue ) => {
		this.textPropertyValues[ 'style' ] = null;
		this.setState({
			[ 'prop:style' ]: newValue
		}, () => {
			let { value } = this.state;
			if ( isEmptyObject( newValue ) ) {
				value = replace( value, RE_STYLE_KEY, '' );
			} else {
				value = replace( value, RE_STYLE_KEY, '$1style={' + JSON.stringify( newValue, null, 2 ) + '}' );
			}
			this.setState({ value });
		});
	}

	replaceDate = ( prop, newValue ) => {
		this.textPropertyValues[ prop ] = null;
		this.setState({
			[ 'prop:'+prop ]: newValue
		}, () => {
			let { value } = this.state;
			const RE = new RegExp('([ \\t]*)'+prop+'=({[\\s\\S]*?})( +|\t|\r?\n)(?=[a-zA-Z]+=|\\/>)' );
			value = replace( value, RE, '$1'+prop+'={' + newValue + '}$3' );
			this.setState({ value });
		});
	}

	handleClassTransform = ( className ) => {
		let { value } = this.state;
		value = replace( value, RE_STYLE_KEY, '' );
		value = replace( value, RE_CLASSNAME, '' );
		if ( !this.propertyTypes[ 'className' ] ) {
			this.propertyTypes[ 'className' ] = 'string';
		}
		this.setState({
			[ 'prop:style' ]: {},
			[ 'prop:className' ]: this.state[ 'prop:className' ] ? this.state[ 'prop:className' ] + ' ' + className : className,
			value
		}, () => {
			this.insertAttribute( 'className' );
		});
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
			value = rtrim( value ) + `\n  ${key}=${replacement}\n/>`; // eslint-disable-line i18next/no-literal-string
		} else {
			const idx = value.indexOf( '>' );
			const rest = value.substring( idx + 1 );
			value = value.substring( 0, idx );
			if ( value[ value.length - 1 ] === ' ' ) {
				value = removeLast( value );
			}
			value = rtrim( value ) + `\n  ${key}=${replacement}\n>`; // eslint-disable-line i18next/no-literal-string
			value = value + rest;
		}
		this.setState({
			value,
			propActive: newPropActive,
			[ 'prop:'+key ]: defaultValue
		});
	}

	toggleStyler = () => {
		this.setState({
			showStyler: !this.state.showStyler
		});
	}

	showDateTimePickerFactory = ( prop ) => {
		return () => {
			this.setState({
				dateTimePicker: prop
			});
		};
	}

	hideDateTimePicker = () => {
		this.setState({
			dateTimePicker: null
		});
	}

	toggleTutorial = () => {
		addResources( 'Tutorial' );
		this.setState({
			showTutorial: !this.state.showTutorial
		});
	}

	checkboxClickFactory = ( key ) => {
		let RE_FULL_KEY;
		if ( this.selfClosing ) {
			RE_FULL_KEY = new RegExp( '[ \\t]*' + key + '(?:="[\\s\\S]*?"|={`?[\\s\\S]*?`?}|)([ \\t\\r\\n]*)(?=[a-zA-Z]+=?|\\/>)' );
		} else {
			RE_FULL_KEY = new RegExp( '[ \\t]*' + key + '(?:="[\\s\\S]*?"|={`?[\\s\\S]*?`?}|)([ \\t\\r\\n]*)(?=[a-zA-Z]+=?|>)' );
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

	handleCodeTransform = ( code ) => {
		PropTypes.resetWarningCache();
		try {
			code = replace( code, RE_BEFORE_TAG, '' );
			let out = markdownToHTML( code );
			out = replace( out, /String.raw`([^`]+)`/g, ( m, p1 ) => {
				const raw = replace( p1, '\\', '\\\\' );
				return `String.raw({ raw: \`${raw}\` })`; // eslint-disable-line i18next/no-literal-string
			});
			return out;
		} catch ( err ) {
			return err;
		}
	}

	renderPropertyControls() {
		debug( 'Rendering property controls...' );
		const props = this.docProps;
		const { t } = this.props;
		const { searchValue, showProperties } = this.state;
		if ( props.length === 0 ) {
			return <div style={{ marginBottom: 15 }}>{t('component-no-properties')}</div>;
		}
		const controls = [];
		for ( let i = 0; i < props.length; i++ ) {
			const prop = props[ i ] || {};
			const { name, description, type } = prop;
			prop.description = this.props.t( 'ComponentDocs:'+description );
			const isActive = this.state.propActive[ name ];
			const isRequired = this.isRequired[ name ];
			if (
				showProperties &&
				(
					( showProperties.value === 'active' && !isActive ) ||
					( showProperties.value === 'inactive' && isActive )
				)
			) {
				continue;
			}
			if (
				searchValue &&
				!contains( lowercase( name || '' ), searchValue ) &&
				!contains( lowercase( description || '' ), searchValue ) &&
				!contains( type, searchValue )
			) {
				continue;
			}
			let input;
			let propValue = this.state[ 'prop:'+name ];
			const propType = this.propertyTypes[ name ];
			const typeMismatch = checkPropType( this.textPropertyValues[ name ], propType );
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
					case 'string': {
						const options = extractOptionsFromDescription( description );
						if ( options ) {
							input = <SelectInput
								options={options}
								value={propValue}
								style={{ background: 'white' }}
								onChange={this.replaceStringFactory( name )}
							/>;
						} else {
							input = <TextArea
								value={propValue}
								rows={2}
								placeholder={`Enter ${name}...`}
								onChange={this.replaceStringFactory( name )}
								resizable="vertical"
							/>;
						}
						break;
					}
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
							if ( !propValue || typeMismatch ) {
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
							value={String( propValue )}
							rows={3}
							onChange={this.replaceObjectFactory(name)}
							placeholder={`Enter ${name}...`}
							resizable="vertical"
						/>;
				}
			}
			let className;
			if ( isActive ) {
				if ( typeMismatch ) {
					className = 'configurator-tr-invalid';
				} else {
					className = 'configurator-tr-active';
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
				<td>
					{description}
					{typeMismatch ? <b>{typeMismatch}</b>: null}
				</td>
				<td style={{ position: 'relative' }} >
					{(isActive || isRequired ) ?
						<Fragment>
							{input}
							{ name === 'style' ?
								<Button className="style-button" variant="outline-secondary" onClick={this.toggleStyler} >
									<i className="fas fa-palette"></i>
								</Button> :
								null
							}
							{ type === 'Date' ?
								<Button className="style-button" variant="outline-secondary" onClick={this.showDateTimePickerFactory( name )} >
									<i className="far fa-clock"></i>
								</Button> :
								null
							}
						</Fragment> : null}
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
				<Table striped bordered size="sm" style={{ fontSize: '14px' }}>
					<thead>
						<tr>
							<th className="configurator-column" >{t('option')}</th>
							<th className="configurator-wide-column" >{t('description')}</th>
							<th className="configurator-wide-column" >{t('value')}</th>
							<th className="configurator-column" >{t('type')}</th>
							<th className="configurator-column" >{t('default')}</th>
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
		debug( 'Rendering component wizard modal...' );
		const innerHTML = {
			'__html': this.description
		};
		const { t } = this.props;

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
				enforceFocus={false}
			>
				<Modal.Header closeButton>
					<Modal.Title as="h5">
						{this.props.component.name} {t('component-wizard')}
						<Button variant="outline-secondary" size="sm" onClick={this.toggleTutorial} style={{ marginLeft: 6 }} >
							<i className="fas fa-info-circle"></i>
						</Button>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body className="configurator-body" >
					<SearchBar
						className="configurator-searchbar"
						value={this.state.searchValue}
						placeholder={t('search-for-options')}
						onChange={( event ) => {
							this.setState({
								searchValue: lowercase( event.target.value )
							});
						}}
						onClear={() => {
							this.setState({
								searchValue: ''
							});
						}}
					/>
					<div className="configurator-option-filter-select" >
						<Select
							options={[
								{
									label: t('only-active'),
									value: 'active'
								},
								{
									label: t('only-inactive'),
									value: 'inactive'
								}
							]}
							onChange={( x ) => {
								this.setState({
									showProperties: x
								});
							}}
							isClearable
						/>
					</div>
					{componentDescription}
					<Card.Subtitle className="configurator-instructions text-muted">
						{t('wizard-table-instructions')}
					</Card.Subtitle>
					<div style={{ position: 'relative', height: 'calc(100% - 40px)' }}>
						<SplitPane
							className="splitpane"
							split="horizontal"
							style={{ left: 0 }}
							defaultSize={window.innerHeight / 2.5}
						>
							<div style={{ width: '100%', overflowY: 'scroll', padding: 10 }} >
								{this.renderPropertyControls()}
							</div>
							{ this.state.encounteredError ?
								<div className="invalid-type-error">
									{this.state.encounteredError}
								</div> :
								<Provider session={this.session} currentRole={this.props.currentRole} >
									<Playground
										value={this.state.value}
										scope={SCOPE}
										onChange={this.handleChange}
										editorProps={{
											onMouseOut: this.handleMouseOut
										}}
										style={PLAYGROUND_STYLE}
										transformCode={this.handleCodeTransform}
									/>
								</Provider>
							}
						</SplitPane>
					</div>
				</Modal.Body>
				<Modal.Footer>
					<Button
						variant="success"
						onClick={this.handleClick}
					>{t('insert')}</Button>
					<Button
						variant="primary"
						onClick={this.handleReset}
					>{t('reset')}</Button>
					<Button
						onClick={this.clickHide}
					>{t('close')}</Button>
				</Modal.Footer>
				<ComponentStyler
					tagName={this.props.component.name}
					show={this.state.showStyler}
					onHide={this.toggleStyler}
					componentStyle={this.state[ 'prop:style' ]}
					onChange={this.replaceStyle}
					onClassTransform={this.handleClassTransform}
					style={COMPONENT_STYLER_STYLE}
				/>
				<DateTimePicker
					prop={this.state.dateTimePicker}
					onHide={this.hideDateTimePicker}
					onChange={this.replaceDate}
				/>
				{ this.state.showTutorial ? <ConfiguratorTutorial
					onFinish={this.toggleTutorial}
				/> : null }
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

export default withTranslation( 'Editor' )( ComponentConfigurator );
