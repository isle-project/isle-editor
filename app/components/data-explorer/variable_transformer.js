// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/lib/Button';
import TextArea from 'components/text-area';
import TextInput from 'components/input/text';
import isObject from '@stdlib/assert/is-object';
import hasOwnProp from '@stdlib/assert/has-own-property';


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
					title: 'Too short',
					message: 'Please select a variable name with at least two characters',
					level: 'error',
					position: 'tr'
				});
			}
			const fun = new Function( 'datum', code ); // eslint-disable-line no-new-func
			const values = new Array( data.length );
			for ( let i = 0; i < data.length; i++ ) {
				values[ i ] = fun( data[ i ]);
			}
			this.props.logAction( 'DATA_EXPLORER:VARIABLE_TRANSFORMER', {
				code, name
			});
			this.props.onGenerate( name, values );
		};
	}

	render() {
		return ( <div>
			<TextInput legend="New Variable Name" onChange={this.handleNameChange} width={160} />
			<TextArea legend="Code" defaultValue={this.props.defaultCode} onChange={this.handleCodeChange} />
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
	data: PropTypes.array.isRequired,
	defaultCode: PropTypes.string,
	logAction: PropTypes.func,
	onGenerate: PropTypes.func,
	session: PropTypes.object
};


// EXPORTS //

export default Transformer;
