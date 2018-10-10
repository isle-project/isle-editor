// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/lib/Button';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import FormControl from 'react-bootstrap/lib/FormControl';
import Dropdown from 'react-bootstrap/lib/Dropdown';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import TextArea from 'components/input/text-area';
import TextInput from 'components/input/text';
import isObject from '@stdlib/assert/is-object';
import hasOwnProp from '@stdlib/assert/has-own-property';


class CustomMenu extends Component {
	constructor( props, context ) {
		super( props, context );

		this.handleChange = this.handleChange.bind(this);

		this.state = {
			value: ''
		};
	}

	handleChange(e) {
		this.setState({ value: e.target.value.toLowerCase().trim() });
	}

	render() {
		const {
			children,
			style,
			className,
			'aria-labelledby': labeledBy
		} = this.props;

		const { value } = this.state;

		return (
		<div style={style} className={className} aria-labelledby={labeledBy}>
			<FormControl
				autoFocus
				className="mx-3 my-2 w-auto"
				placeholder="Type to filter..."
				onChange={this.handleChange}
				value={value}
			/>
			<ul className="list-unstyled">
			{React.Children.toArray( children )
				.filter( ( child, idx ) => {
					return child.props.children.toLowerCase().startsWith( value );
				})
				.filter( ( child, idx ) => idx < 10 )
			}
			</ul>
		</div>
		);
	}
}

// MAIN //

class Transformer extends Component {
	constructor( props ) {
		super( props );

		let data = [];
		for ( let key in props.data ) {
			if ( hasOwnProp( props.data, key ) ) {
				for ( let i = 0; i < props.data[ key ].length; i++ ) {
					if ( !isObject( data[ i ]) ) {
						data[ i ] = {};
					}
					data[ i ][ key ] = props.data[ key ][ i ];
				}
			}
		}

		this.state = {
			code: props.defaultCode,
			selection: null,
			data: data,
			name: ''
		};

		this.handleNameChange = ( value ) => {
			this.setState({
				name: value
			});
		};

		this.handleCodeChange = ( value ) => {
			this.setState({
				code: value
			});
		};

		this.handleGenerate = () => {
			const { data, code, name } = this.state;
			if ( name.length < 2 ) {
				return this.props.session.addNotification({
					title: 'Name is too short',
					message: 'Please select a variable name with at least two characters',
					level: 'error',
					position: 'tr'
				});
			}
			const fun = new Function( 'datum', code ); // eslint-disable-line no-new-func
			const values = new Array( data.length );
			try {
				for ( let i = 0; i < data.length; i++ ) {
					values[ i ] = fun( data[ i ]);
				}
			} catch ( err ) {
				return this.props.session.addNotification({
					title: 'Errored',
					message: 'Encountered the following error: '+err.message,
					level: 'error',
					position: 'tr'
				});
			}
			this.props.logAction( 'DATA_EXPLORER:VARIABLE_TRANSFORMER', {
				code, name
			});
			this.props.onGenerate( name, values );
		};
	}

	insertVarFactory = ( name ) => {
		return () => {
			let newCode = this.state.code.substring( 0, this.state.selection );
			const replacement = 'datum.'+name;
			newCode += replacement;
			newCode += this.state.code.substring( this.state.selection );
			this.setState({
				code: newCode,
				selection: this.state.selection + replacement.length
			});
		};
	}

	insertOperatorFactory = ( operator ) => {
		return () => {
			let newCode = this.state.code.substring( 0, this.state.selection );
			const replacement = ' '+operator+' ';
			newCode += replacement;
			newCode += this.state.code.substring( this.state.selection );
			this.setState({
				code: newCode,
				selection: this.state.selection + replacement.length
			});
		};
	}

	render() {
		return ( <div>
			<TextInput legend="New Variable Name" onChange={this.handleNameChange} width={160} />
			<ButtonToolbar>
				<Dropdown className="mr-2">
					<Dropdown.Toggle variant="light" as={Button} id="dropdown-custom-components">
						Continuous
					</Dropdown.Toggle>
					<Dropdown.Menu variant="light" as={CustomMenu} id="bg-nested-dropdown">
						{this.props.continuous.map( ( v, i ) => {
							return <Dropdown.Item key={i} onClick={this.insertVarFactory( v )} eventKey={i}>{v}</Dropdown.Item>;
						})}
					</Dropdown.Menu>
				</Dropdown>
				<Dropdown className="mr-2">
					<Dropdown.Toggle variant="light" as={Button} id="dropdown-custom-components">
						Categorical
					</Dropdown.Toggle>
					<Dropdown.Menu variant="light" as={CustomMenu} id="bg-nested-dropdown">
						{this.props.categorical.map( ( v, i ) => {
							return <Dropdown.Item key={i} onClick={this.insertVarFactory( v )} eventKey={i}>{v}</Dropdown.Item>;
						})}
					</Dropdown.Menu>
				</Dropdown>
				<ButtonGroup size="sm" className="mr-2" >
					<Button variant="light" onClick={this.insertOperatorFactory('<')} >{'<'}</Button>
					<Button variant="light" onClick={this.insertOperatorFactory('>')} >{'>'}</Button>
					<Button variant="light" onClick={this.insertOperatorFactory('<=')} >{'<='}</Button>
					<Button variant="light" onClick={this.insertOperatorFactory('>=')} >{'>='}</Button>
				</ButtonGroup>
				<ButtonGroup size="sm" className="mr-2" >
					<Button variant="light" onClick={this.insertOperatorFactory('(')} >(</Button>
					<Button variant="light" onClick={this.insertOperatorFactory(')')} >)</Button>
				</ButtonGroup>
				<ButtonGroup size="sm" className="mr-2" >
					<Button variant="light" onClick={this.insertOperatorFactory('+')} >+</Button>
					<Button variant="light" onClick={this.insertOperatorFactory('-')} >-</Button>
					<Button variant="light" onClick={this.insertOperatorFactory('*')} >*</Button>
					<Button variant="light" onClick={this.insertOperatorFactory('/')} >/</Button>
				</ButtonGroup>
			</ButtonToolbar>
			<TextArea ref={div => { this.textarea = div; }} legend="Code" value={this.state.code} onChange={this.handleCodeChange} onBlur={( event ) => {
				const selectionStart = event.target.selectionStart;
				this.setState({
					selection: selectionStart
				});
			}} />
			<Button onClick={this.handleGenerate} >Generate</Button>
		</div> );
	}
}


// DEFAULT PROPERTIES //

Transformer.defaultProps = {
	logAction() {},
	onGenerate() {},
	defaultCode: '',
	session: {}
};


// PROPERTY TYPES //

Transformer.propTypes = {
	categorical: PropTypes.array.isRequired,
	continuous: PropTypes.array.isRequired,
	data: PropTypes.object.isRequired,
	defaultCode: PropTypes.string,
	logAction: PropTypes.func,
	onGenerate: PropTypes.func,
	session: PropTypes.object
};


// EXPORTS //

export default Transformer;
