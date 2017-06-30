// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import TextArea from 'components/text-area';
import TextInput from 'components/input/text';
import isObject from '@stdlib/assert/is-object';


// MAIN //

class Transformer extends Component {

	constructor( props ) {
		super( props );

		let data = [];
		for ( let key in props.data ) {
			for ( let i = 0; i < props.data[ key ].length; i++ ) {
				if ( !isObject( data[ i ]) ) {
					data[ i ] = {};
				}
				data[ i ][ key ] = props.data[ key ][ i ];
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
			let { data, code, name } = this.state;
			if ( name.length < 2 ) {
				return 	global.lesson.addNotification({
					title: 'Too short',
					message: `Please select a variable name with at least two characters`,
					level: 'error',
					position: 'tr'
				});
			}
			let fun = new Function( 'datum', code );
			let values = new Array( data.length );
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
	onGenerate() {},
	defaultCode: ''
};


// PROPERTY TYPES //

Transformer.propTypes = {
	data: PropTypes.array.isRequired,
	onGenerate: PropTypes.func,
	defaultCode: PropTypes.string
};


// EXPORTS //

export default Transformer;
