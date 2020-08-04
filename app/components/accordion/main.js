// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import isArray from '@stdlib/assert/is-array';
import Alert from 'react-bootstrap/Alert';
import Collapse from 'components/collapse';
import isLineButtons from 'utils/is-line-buttons';
import './accordion.css';


// VARIABLES //

const debug = logger( 'isle:accordion' );


// MAIN //

/**
* An accordion component controlling vertical sliders.
*
* @property {number} active - index of slider to be opened at the beginning
* @property {Array} headers - array of header names
* @property {boolean} canCloseAll - whether one can collapse all headers
* @property {string} headerClassName - this overrules the given class name of the headers
* @property {Object} headerStyle - one may also assign a style to the header bars
* @property {string} className - class name for outer div
* @property {Object} style - CSS inline styles for outer div
*/
class Accordion extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			active: props.active,
			prevActive: props.active
		};
	}

	static getDerivedStateFromProps( nextProps, prevState ) {
		if ( nextProps.active !== prevState.prevActive ) {
			const newState = {
				active: nextProps.active,
				prevActive: nextProps.active
			};
			return newState;
		}
		return null;
	}

	clickFactory = ( len, idx ) => {
		if ( this.props.canCloseAll ) {
			return () => {
				const active = ( this.state.active === idx ) ? null : idx;
				this.setState({ active });
			};
		}
		return () => {
			const active = ( this.state.active === idx ) ? (idx+1) % len : idx;
			debug( `Open accordion element at index ${active}...` );
			this.setState({
				active
			});
		};
	}

	render() {
		if ( !isArray( this.props.children ) ) {
			return <Alert variant="danger" >The accordion requires at least two child elements for it to be rendered.</Alert>;
		}
		const out = [];
		const headers = this.props.headers || [];
		let count = 0;
		for ( let i = 0; i < this.props.children.length; i++ ) {
			const child = this.props.children[ i ];
			if ( !isLineButtons( child ) ) {
				const style = {
					boxShadow: '0 0 -4px rgba(92, 92, 92, 0.5)'
				};
				if ( count === 1 ) {
					style.borderTopLeftRadius = 6;
					style.borderTopRightRadius = 6;
				}
				if ( i === this.state.active ) {
					style.background = 'rgba(201, 93, 10, 0.2)';
				}
				const elem = (
					<Collapse
						key={i}
						visible={i === this.state.active}
						header={headers[ count ] || `Header ${count}`}
						headerClassName={this.props.headerClassName}
						headerStyle={{
							...style,
							...this.props.headerStyle
						}}
						onClick={this.clickFactory( this.props.children.length, i )}
					>
						{child}
					</Collapse>
				);
				count += 1;
				out.push( elem );
			}
		}
		return (
			<div
				className={`accordion ${this.props.className}`}
				style={this.props.style}
			>
				{out}
			</div>
		);
	}
}


// PROPERTIES //

Accordion.defaultProps = {
	active: null,
	canCloseAll: false,
	headers: null,
	headerClassName: null,
	headerStyle: null,
	className: '',
	style: null
};

Accordion.propTypes = {
	active: PropTypes.number,
	canCloseAll: PropTypes.bool,
	headers: PropTypes.arrayOf( PropTypes.oneOfType([
		PropTypes.string, PropTypes.node
	]) ),
	headerStyle: PropTypes.object,
	headerClassName: PropTypes.string,
	className: PropTypes.string,
	style: PropTypes.object
};


// EXPORTS //

export default Accordion;
