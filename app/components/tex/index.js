// MODULES //

import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
import Popover from 'react-bootstrap/Popover';
import { select } from 'd3';
import katex from 'katex';
import NINF from '@stdlib/constants/math/float64-ninf';
import PINF from '@stdlib/constants/math/float64-pinf';
import NumberInput from 'components/input/number';
import { isPrimitive as isNumber } from '@stdlib/assert/is-number';


// VARIABLES //

let counter = 1;


// MAIN //

/**
* `TeX` is an ISLE element that can be used to display LaTeX equations. Under the hood, the component uses [KaTeX](https://github.com/Khan/KaTeX) for blazingly fast rendering.
*
* @property {(string|number)} raw - The literal LaTeX `string` to render. Also accepts `numbers`
* @property {boolean} displayMode - `boolean` indicating whether to display the equation inline or in display mode
* @property {boolean} numbered - controls whether to display an equation number for display mode equations
* @property {Object} style - `object` with CSS key-value pairs to be applied to the equation container
* @property {string} tag - Custom characters displayed for display equations at the right side. Defaults to the number of the equation inside the lesson
* @property {Object} elems - `object` with `keys` denoting LaTeX characters and their corresponding values being configuration `objects` to make them interactive. Setting a `tooltip` option will show a tooltip when hovering over the LaTeX characters. Setting a `variable` property will display an input slider to change the respective state variable; in this case, additional properties `legend`, `min`, `max`, and `step` are supported
* @property {string} popoverPlacement - popover position for the specified `elems`
* @property {Function} onClick - callback `function` invoked whenever a user clicks on the equation
*/
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
		this.registerElements();
	}

	componentDidUpdate() {
		this.registerElements();
	}

	componentWillUnmount() {
		counter = 1;
	}

	registerElements() {
		const dom = findDOMNode( this );
		const self = this;
		select( dom ).
			selectAll( '.mord' ).
			each( onMord );

		function onMord( d ) {
			const $this = select( this );
			if ( self.state.popoverTarget !== this ) {
				$this.style( 'color', 'black' );
			}
			Object.keys( self.props.elems ).forEach( ( prop ) => {
				let elem = self.props.elems[ prop ];
				if ( $this.text() === prop ) {
					if ( elem.variable ) {
						$this.style( 'cursor', 'pointer' );
						$this.style( 'color', 'blue' );
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
							$this.style( 'color', 'blue' );
						}
						if ( elem.tooltip ) {
							self.setState({
								showTooltip: false
							});
						}
					})
					.on( 'click', () => {
						if ( elem.variable ) {
							let config = {
								legend: elem.legend || elem.variable,
								min: elem.min || NINF,
								max: elem.max || PINF,
								step: elem.step || 'any'
							};
							if ( elem.onChange ) {
								config.onChange = elem.onChange;
								config.defaultValue = elem.defaultValue;
							} else {
								config.bind = elem.variable;
							}
							let showPopover;
							if ( self.state.popoverTarget !== this ) {
								showPopover = true;
							} else {
								showPopover = !self.state.showPopover;
							}
							self.setState({
								showTooltip: false,
								showPopover,
								popoverContent: elem.body,
								popoverTarget: this,
								config
							});
						}
					});
				}
			});
		}
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
				placement="top"
			>
				<Tooltip id="tooltip-top">{this.state.tooltipText}</Tooltip>
			</Overlay>
			<Overlay
				show={this.state.showPopover}
				container={document.body}
				target={this.state.popoverTarget}
				placement={this.props.popoverPlacement}
			>
				<Popover id="popover-top">
					<NumberInput
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

// PROPERTIES //

TeX.propTypes = {
	raw: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]).isRequired,
	displayMode: PropTypes.bool,
	numbered: PropTypes.bool,
	style: PropTypes.object,
	tag: PropTypes.string,
	elems: PropTypes.object,
	popoverPlacement: PropTypes.string,
	onClick: PropTypes.func
};

TeX.defaultProps = {
	displayMode: false,
	numbered: false,
	style: {},
	tag: null,
	elems: {},
	popoverPlacement: 'top',
	onClick() {}
};


// EXPORTS //

export default TeX;
