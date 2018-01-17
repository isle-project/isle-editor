// MODULES //

import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import Overlay from 'react-bootstrap/lib/Overlay';
import Tooltip from 'react-bootstrap/lib/Tooltip';
import Popover from 'react-bootstrap/lib/Popover';
import { select } from 'd3';
import katex from 'katex';
import NumberInput from 'components/input/number';
import isNumber from '@stdlib/assert/is-number';


// VARIABLES //

let counter = 1;


// LATEX //

class TeX extends Component {
	constructor( props ) {
		super( props );
		let initialState = {
			legend: '',
			showTooltip: false,
			tooltipText: '',
			showPopover: false,
			popoverContent: null
		};

		if ( props.displayMode === true ) {
			initialState.id = counter;
			counter += 1;
		}
		this.state = initialState;
	}

	componentDidMount() {
		const dom = findDOMNode( this );
		const self = this;
		select( dom ).
			selectAll( '.mord' ).
			each( onMord );

		function onMord( d ) {
			const $this = select( this );
			Object.keys( self.props.elems ).forEach( ( prop ) => {
				let elem = self.props.elems[ prop ];
				if ( $this.text() === prop ) {
					if ( elem.variable ) {
						$this.style( 'cursor', 'pointer' );
					}
					$this.on( 'mouseover', () => {
						$this.style( 'color', 'red' );
						if ( elem.tooltip ) {
							self.setState({
								showTooltip: true,
								tooltipText: elem.tooltip,
								tooltipTarget: this
							});
						}
					}).on( 'mouseout', () => {
						if ( !self.state.showPopover ) {
							$this.style( 'color', 'black' );
						}
						if ( elem.tooltip ) {
							self.setState({
								showTooltip: false
							});
						}
					}).on( 'click', () => {
						if ( elem.variable ) {
							let config = {
								legend: elem.legend || elem.variable,
								min: elem.min || 0,
								max: elem.max || 100,
								step: elem.step || 'any'
							};
							self.setState({
								showTooltip: false,
								showPopover: !self.state.showPopover,
								popoverContent: elem.body,
								popoverTarget: this,
								targetVariable: elem.variable,
								config
							});
						}
					});
				}
			});
		}
	}

	componentWillUnmount() {
		counter = 1;
	}

	/**
	* React component render method.
	*/
	render() {
		const input = isNumber( this.props.raw ) ? this.props.raw.toString() : this.props.raw;
		let str;

		const overlays = <span>
			<Overlay
				show={this.state.showTooltip}
				container={document.body}
				target={this.state.tooltipTarget}
				placement="right"
			>
				<Tooltip id="tooltip-right">{this.state.tooltipText}</Tooltip>
			</Overlay>
			<Overlay
				show={this.state.showPopover}
				container={document.body}
				target={this.state.popoverTarget}
				placement="right"
			>
				<Popover id="popover-right">
					<NumberInput
						bind={this.state.targetVariable}
						{...this.state.config}
					/>
				</Popover>
			</Overlay>
		</span>;

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
					style={this.props.style}
					onClick={this.props.onClick}
				>
					{ this.props.numbered ?
						<div
							className="tag"
							style={{
								float: 'right',
								marginTop: 5,
								marginRight: 5
							}}
						>
							{ this.props.tag !== null ? this.props.tag : '[' + this.state.id + ']' }
						</div> : null
					}
					<span
						ref={( span ) => { this.katex = span; }}
						dangerouslySetInnerHTML={math} // eslint-disable-line react/no-danger
						aria-hidden={!!math}
					/>
					{overlays}
				</div>
			);
		}
		return (
			<span
				ref={( span ) => { this.katex = span; }}
				className="tex"
				style={this.props.style}
				onClick={this.props.onClick}
			>
				<span
					dangerouslySetInnerHTML={math} // eslint-disable-line react/no-danger
					aria-hidden={!!math}
					style={{ whiteSpace: 'nowrap' }}
				/>
				{overlays}
			</span>
		);
	}
}

// PROPERTY TYPES //

TeX.propTypes = {
	displayMode: PropTypes.bool,
	elems: PropTypes.object,
	numbered: PropTypes.bool,
	onClick: PropTypes.func,
	raw: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]).isRequired,
	style: PropTypes.object,
	tag: PropTypes.string
};


// DEFAULT PROPERTIES //

TeX.defaultProps = {
	onClick: null,
	displayMode: false,
	tag: null,
	numbered: false,
	style: {},
	elems: {}
};


// EXPORTS //

export default TeX;
