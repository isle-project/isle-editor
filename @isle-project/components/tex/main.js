/* eslint-disable @babel/no-invalid-this */

// MODULES //

import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';
import NINF from '@stdlib/constants/float64/ninf';
import PINF from '@stdlib/constants/float64/pinf';
import replace from '@stdlib/string/replace';
import objectKeys from '@stdlib/utils/keys';
import rescape from '@stdlib/utils/escape-regexp-string';
import NumberInput from '@isle-project/components/input/number';
import { isPrimitive as isNumber } from '@stdlib/assert/is-number';
import { withPropCheck } from '@isle-project/utils/prop-check';
import './tex.css';


// VARIABLES //

let counter = 1;


// FUNCTIONS //

function processEquation( raw, elems, id ) {
	const keys = objectKeys( elems );
	for ( let i = 0; i < keys.length; i++ ) {
		const key = keys[ i ];
		const el = elems[ key ];
		const RE_KEY = new RegExp( '(^| )(\\\\)?'+rescape( key )+'($| )' );
		let replacement = '';
		if ( el.tooltip ) {
			replacement += `\\texttip{$2${key}}{${el.tooltip}}`; // eslint-disable-line i18next/no-literal-string
		} else {
			replacement = '$2'+key;
		}
		if ( el.onChange ) {
			replacement = `\\class{tex-clickable}{\\cssId{tex-${id}-${key}}{${replacement}}}`; // eslint-disable-line i18next/no-literal-string
		}
		replacement = '$1' + replacement + '$3';
		raw = replace( raw, RE_KEY, replacement );
	}
	return raw;
}


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
* @property {string} popoverPlacement - popover position for the specified `elems` (either `top`, `right`, `bottom`, or `left`)
* @property {Function} onPopover - callback `function` when a control popover is toggled on or off; receives the display status as a boolean as its sole argument
* @property {Function} onClick - callback `function` invoked whenever a user clicks on the equation
*/
const TeX = ({ raw, displayMode, numbered, style, tag, elems, popoverPlacement, onPopover, onClick }) => {
	const [ id ] = useState( counter );
	const eqRef = useRef( null );
	const [ popover, setPopover ] = useState( {} );
	const [ config, setConfig ] = useState( {} );
	useEffect( () => {
		let output = eqRef.current;
		if ( window.MathJax.texReset ) {
			window.MathJax.texReset();
		}
		const options = window.MathJax.getMetricsFor ? window.MathJax.getMetricsFor( output ) : {};
		options.display = displayMode;
		let input = isNumber( raw ) ? raw.toString() : raw;
		input = processEquation( input, elems, id );
		if ( !window.MathJax.tex2chtmlPromise ) {
			return;
		}
		window.MathJax.tex2chtmlPromise( input, options ).then( ( node ) => {
			output.innerHTML = '';
			output.appendChild( node );
			window.MathJax.startup.document.clear();
			window.MathJax.startup.document.updateDocument();

			const keys = objectKeys( elems );
			for ( let i = 0; i < keys.length; i++ ) {
				const key = keys[ i ];
				const el = elems[ key ];
				const node = document.getElementById( 'tex-'+id+'-'+key );
				if ( node ) {
					node.addEventListener( 'click', function onClick() {
						if ( el.variable ) {
							let newConfig = {
								legend: el.legend || el.variable,
								min: el.min || NINF,
								max: el.max || PINF,
								step: el.step || 'any'
							};
							if ( el.onChange ) {
								newConfig.onChange = el.onChange;
								newConfig.defaultValue = el.defaultValue;
							} else {
								newConfig.bind = el.variable;
							}
							if ( popover.name !== key ) {
								setConfig( newConfig );
								setPopover({
									show: true,
									target: node,
									name: key
								});
								onPopover( true );
							} else {
								setPopover({
									show: false,
									target: null,
									name: null
								});
								onPopover( false );
							}
						}
					});
				}
			}
		});
		counter += 1;
		return () => {
			counter = 1;
		};
	});
	const equation = <span ref={eqRef} ></span>;
	const overlay = <Overlay
		show={popover.show}
		target={eqRef.current}
		placement={popoverPlacement}
	>
		<Popover id="popover-top">
			<NumberInput
				inline
				{...config}
			/>
		</Popover>
	</Overlay>;
	if ( displayMode === true ) {
		const tagDiv = numbered ?
			<div
				className="tag"
				style={{
					float: 'right',
					marginTop: 5,
					marginRight: 5
				}}
			>
				{ tag !== null ? tag : '[' + id + ']' }
			</div> : null;
		if ( onClick ) {
			return (
				<div
					className="tex"
					role="button" tabIndex={0}
					style={style}
					onClick={onClick} onKeyPress={onClick}
					aria-label="Equation"
				>
					{tagDiv}
					{equation}
					{overlay}
				</div>
			);
		}
		return ( <div
			className="tex"
			style={style}
			aria-label="Equation"
		>
			{tagDiv}
			{equation}
			{overlay}
		</div> );
	}
	if ( onClick ) {
		return (
			<span
				className="tex"
				role="button" tabIndex={0}
				style={style}
				onClick={onClick} onKeyPress={onClick}
				aria-label="Equation"
			>
				{equation}
				{overlay}
			</span>
		);
	}
	return (
		<span
			className="tex"
			style={style}
			aria-label="Equation"
		>
			{equation}
			{overlay}
		</span>
	);
};


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
	onPopover: PropTypes.func,
	onClick: PropTypes.func
};

TeX.defaultProps = {
	displayMode: false,
	numbered: false,
	style: {},
	tag: null,
	elems: {},
	popoverPlacement: 'bottom',
	onPopover() {},
	onClick: null
};


// EXPORTS //

export default withPropCheck( TeX );
