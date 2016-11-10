// MODULES //

import Radium from 'radium';
import React, { Component, PropTypes } from 'react';
import katex from 'katex';
import isString from '@stdlib/utils/is-string';


// VARIABLES //

let counter = 1;


// LATEX //

class TeX extends Component {

	constructor( props ) {
		super( props );

		if ( props.displayMode === true ) {
			this.state = {
				id: counter
			};
			counter += 1;
		}

	}

	componentWillUnmount() {
		counter = 1;
	}

	/**
	* React component render method.
	*/
	render() {
		const input = isString( this.props.raw ) ? this.props.raw : this.props.raw.toString();
		let str;

		try {
			str = katex.renderToString( input, {
				displayMode: this.props.displayMode
			});
		} catch ( e ) {
			str = '';
		}
		let math = {
			__html: str
		};
		if ( this.props.displayMode === true ) {
			return (
				<div
					className="tex"
					style={[ this.props.style ]}
					onClick={this.props.onClick}
				>
					<div
						style={{
							float: 'right',
							marginTop: 5,
							marginRight: 5
						}}
					>
						{ this.props.tag !== null ? this.props.tag : '[' + this.state.id + ']' }
					</div>
					<span
						ref="katex"
						dangerouslySetInnerHTML={math}
						aria-hidden={!!math}
					/>
				</div>
			);
		}
		else {
			return (
				<span
					className="tex"
					style={[ this.props.style ]}
					onClick={this.props.onClick}
				>
					<span
						ref="katex"
						dangerouslySetInnerHTML={math}
						aria-hidden={!!math}
						style={{ whiteSpace: 'nowrap' }}
					/>
				</span>
			);
		}
	}
}

// PROPERTY TYPES //

TeX.propTypes = {
	raw: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]).isRequired,
	style: PropTypes.object,
	displayMode: PropTypes.bool,
	onClick: PropTypes.func,
	tag: PropTypes.string
};


// DEFAULT PROPERTIES //

TeX.defaultProps = {
	onClick: null,
	displayMode: false,
	tag: null,
	style: {}
};


// EXPORTS //

export default Radium( TeX );
