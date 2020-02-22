// MODULES //

import React, { Component } from 'react';
import ReactDom from 'react-dom';
import {
	LiveProvider,
	LiveEditor,
	LiveError,
	LivePreview
} from 'react-live';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PropTypes from 'prop-types';
import hasOwnProp from '@stdlib/assert/has-own-property';
import isArray from '@stdlib/assert/is-array';
import Provider from 'components/provider';
import SessionContext from 'session/context.js';
import theme from './theme.js';
import './codemirror.css';
import './playground.css';


// MAIN //

/**
* Playground component to experiment with ISLE components.
*
* @property {string} code - code to be displayed in the playground box. This code will be editable by the user in the brower or lesson
* @property {Object} scope - scope object with variables / components which should be made available to the executed code; most often this is the name of the component you wish to display
* @property {Object} style - CSS inline styles
 */
class Playground extends Component {
	constructor( props, context ) {
		super( props );

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

	componentDidMount() {
		this.forceUpdate();
	}

	componentDidUpdate() {
		const node = ReactDom.findDOMNode( this );
		// Undo Spectacle scaling as it messes up the rendering of the ACE editor:
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

	render() {
		const scope = {
			React,
			...this.wrappedScope
		};
		return (
			<div className="component-documentation" style={this.props.style}>
				<div className="playground-editable unselectable">EDITABLE SOURCE</div>
				<LiveProvider code={this.props.code} scope={scope} theme={theme} >
					<Row>
						<Col>
							<LiveEditor
								onChange={this.props.onChange}
								style={{
									fontSize: '1.25em',
									background: '#42374a',
									fontFamily: '\'Source Code Pro\', monospace',
									height: '100%'
								}}
							/>
						</Col>
						<Col>
							<LiveError
								style={{
									padding: '10px',
									fontSize: '1.1em',
									color: 'white',
									background: '#F2777A'
								}}
							/>
							<LivePreview
								style={{
									overflowY: 'auto',
									overflowX: 'hidden'
								}}
							/>
						</Col>
					</Row>
				</LiveProvider>
			</div>
		);
	}
}


// DEFAULT PROPS //

Playground.defaultProps = {
	code: '',
	scope: {},
	onChange() {},
	style: {}
};


// PROPERTIES //

Playground.propTypes = {
	code: PropTypes.string,
	scope: PropTypes.object,
	onChange: PropTypes.func,
	style: PropTypes.object
};

Playground.contextType = SessionContext;


// EXPORTS //

export default Playground;
