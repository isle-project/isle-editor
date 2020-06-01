// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDom from 'react-dom';
import {
	LiveProvider,
	LiveEditor,
	LiveError,
	LivePreview
} from 'react-live';
import isEmptyObject from '@stdlib/assert/is-empty-object';
import hasOwnProp from '@stdlib/assert/has-own-property';
import isArray from '@stdlib/assert/is-array';
import Provider from 'components/provider';
import { SessionContext } from 'session';
import styles from './styles.json';
import theme from './theme.js';
import './playground.css';


// MAIN //

/**
* Playground component to experiment with ISLE components.
*
* @property {number} value - code value (for controlled component)
* @property {number} defaultValue - value indicating the default code
* @property {Object} scope - scope object with variables / components which should be made available to the executed code; most often this is the name of the component you wish to display
* @property {Function} onChange - callback invoked with new code once code in editor changes
* @property {Object} style - CSS inline styles
*/
class Playground extends Component {
	constructor( props, context ) {
		super( props );

		this.state = {
			value: props.value || props.defaultValue,
			prevProps: props
		};
		const wrappedScope = {};
		for ( let key in props.scope ) {
			if ( hasOwnProp( props.scope, key ) ) {
				let Comp = props.scope[ key ];
				wrappedScope[ key ] = class Wrapper extends Component {
					render() {
						return ( <Provider session={context} >
							<Comp {...this.props} />
						</Provider> );
					}
				};
				Object.defineProperty( wrappedScope[ key ], 'name', {
					value: Comp.name
				});
			}
		}
		this.wrappedScope = wrappedScope;
	}

	static getDerivedStateFromProps( nextProps, prevState ) {
		const newState = {};
		const { prevProps } = prevState;
		if ( nextProps.defaultValue !== prevProps.defaultValue ) {
			newState.value = nextProps.defaultValue;
		}
		if ( !isEmptyObject( newState ) ) {
			newState.prevProps = nextProps;
			return newState;
		}
		return null;
	}

	componentDidUpdate() {
		const node = ReactDom.findDOMNode( this );
		let slide = node.closest ? node.closest( '.spectacle-content' ) : null;
		if ( slide ) {
			let computedStyle = window.getComputedStyle( slide );
			let transform = computedStyle.getPropertyValue( 'transform' );
			let match = /matrix\(([0-9.]*)/.exec( transform );
			if ( isArray( match ) && match.length > 1 ) {
				let scaleFactor = match[ 1 ];
				node.style.transform = `scale(${1/scaleFactor})`;
			}
		}
	}

	handleChange = ( value ) => {
		this.props.onChange( value );
		if ( !this.props.code ) {
			this.setState({
				value
			});
		}
	}

	render() {
		const scope = {
			React,
			...this.wrappedScope
		};
		let { value } = this.state;
		if ( this.props.value ) {
			value = this.props.value;
		}
		return (
			<div className="component-documentation" style={this.props.style} >
				<div className="playground-editable unselectable">EDITABLE SOURCE</div>
				<LiveProvider code={value} scope={scope} theme={theme} >
					<div className="playground-live-editor" >
						<LiveEditor
							onChange={this.handleChange}
							style={{
								fontSize: '1.25em',
								fontFamily: '\'Source Code Pro\', monospace'
							}}
						/>
					</div>
					<LivePreview
						className="Lesson"
						style={styles.livePreview}
					/>
					<LiveError
						style={styles.liveError}
					/>
				</LiveProvider>
			</div>
		);
	}
}


// PROPERTIES //

Playground.propTypes = {
	defaultValue: PropTypes.string,
	value: PropTypes.string,
	scope: PropTypes.object,
	onChange: PropTypes.func,
	style: PropTypes.object
};

Playground.defaultProps = {
	defaultValue: '',
	value: null,
	scope: {},
	onChange() {},
	style: {}
};

Playground.contextType = SessionContext;


// EXPORTS //

export default Playground;
