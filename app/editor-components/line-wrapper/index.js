// MODULES //

import React, { Fragment, useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useDrag } from 'react-dnd';
import logger from 'debug';
import { connect } from 'react-redux';
import { findDOMNode } from 'react-dom';
import vex from 'vex-js';
import PINF from '@stdlib/constants/math/float64-pinf';
import useIsMounted from 'hooks/is-mounted';
import { jumpToElementInEditor, switchWithNext, switchWithPrevious, toggleConfigurator } from 'actions';
import './line_wrapper.css';


// VARIABLES //

const debug = logger( 'isle:line-wrapper' );
const RE_LOADABLE = /(\s|^)isle-loadable(\s|$)/;
const RE_LINE_WRAPPER_BAR = /(\s|^)line-wrapper-bar(\s|$)/;
const RE_CONTEXT_MENU = /(\s|^)react-contextmenu(\s|$)/;


// FUNCTIONS //

function isDOMElement( elem ) {
	return elem instanceof Element || elem instanceof HTMLDocument;
}


// MAIN //

/**
* A line wrapper for use in the editor.
*/
const LineWrapper = ( props ) => {
	const [ style, setStyle ] = useState( null );
	const isMounted = useIsMounted();
	const lineWrapper = useRef( null );
	const [ , drag ] = useDrag({
		item: {
			type: 'component-wrapper',
			startLineNumber: props.startLineNumber,
			endLineNumber: props.endLineNumber,
			startColumn: props.startColumn,
			endColumn: props.endColumn
		}
	});
	const retrievePositioning = useCallback( () => {
		debug( 'Retrieve positioning...' );
		if ( !isMounted() || style ) {
			return;
		}
		const node = findDOMNode( lineWrapper.current );
		const child = node.lastChild;
		if (
			child &&
			!RE_LOADABLE.test( child.className ) &&
			!RE_LINE_WRAPPER_BAR.test( child.className )
		) {
			if ( RE_CONTEXT_MENU.test( child.className ) ) {
				setStyle({});
			}
			const style = isDOMElement( child ) ? window.getComputedStyle( child, null ) : {};
			if ( style.position === 'fixed' || style.position === 'absolute' ) {
				setStyle({
					position: style.position,
					top: style.top,
					left: style.left,
					bottom: style.bottom,
					right: style.right
				});
			}
		} else {
			window.requestIdleCallback( retrievePositioning );
		}
	}, [ isMounted, style ] );
	useEffect( () => {
		window.requestIdleCallback( retrievePositioning );
	}, [ retrievePositioning ] );

	const switchWithPrevious = () => {
		const el = lineWrapper.current;
		let previous;
		let sibling = el.previousElementSibling;
		while ( sibling ) {
			if ( sibling.classList && sibling.classList.contains( 'line-wrapper' ) ) {
				previous = sibling;
				break;
			}
			sibling = sibling.previousElementSibling;
		}
		if ( !previous ) {
			const elements = document.getElementsByClassName( 'line-wrapper' );
			for ( let i = 1; i < elements.length; i++ ){
				if ( elements[ i ] === el ) {
					previous = elements[ i - 1 ];
					while ( previous.contains( el ) && i > 0 ) {
						previous = elements[ i - 1 ];
						i -= 1;
					}
					break;
				}
			}
		}
		if ( previous && previous.dataset.startLineNumber ) {
			props.switchWithPrevious({
				current: {
					startLineNumber: props.startLineNumber,
					endLineNumber: props.endLineNumber,
					startColumn: props.startColumn,
					endColumn: props.endColumn
				},
				previous: {
					startLineNumber: Number( previous.dataset.startLineNumber ),
					endLineNumber: Number( previous.dataset.endLineNumber ),
					startColumn: Number( previous.dataset.startColumn ),
					endColumn: Number( previous.dataset.endColumn )
				},
				elementRangeAction: 'switch_previous'
			});
		}
	};
	const switchWithNext = () => {
		const el = lineWrapper.current;
		const elements = document.getElementsByClassName( 'line-wrapper' );
		let next;
		let sibling = el.nextElementSibling;
		while ( sibling ) {
			if ( sibling.classList && sibling.classList.contains( 'line-wrapper' ) ) {
				next = sibling;
				break;
			}
			sibling = sibling.nextElementSibling;
		}
		if ( !next ) {
			for ( let i = 0; i < elements.length - 1; i++ ){
				if ( elements[ i ] === el ) {
					next = elements[ i + 1 ];
					break;
				}
			}
		}
		if ( next && next.dataset.startLineNumber ) {
			props.switchWithNext({
				current: {
					startLineNumber: props.startLineNumber,
					endLineNumber: props.endLineNumber,
					startColumn: props.startColumn,
					endColumn: props.endColumn
				},
				next: {
					startLineNumber: Number( next.dataset.startLineNumber ),
					endLineNumber: Number( next.dataset.endLineNumber ),
					startColumn: Number( next.dataset.startColumn ),
					endColumn: Number( next.dataset.endColumn )
				},
				elementRangeAction: 'switch_next'
			});
		}
	};
	const deleteElement = () => {
		vex.dialog.confirm({
			unsafeMessage: 'Are you sure you want to delete this element from the lesson?',
			callback: ( value ) => {
				if ( value ) {
					props.jumpToElementInEditor({
						startLineNumber: props.startLineNumber,
						endLineNumber: props.endLineNumber,
						startColumn: props.startColumn,
						endColumn: props.endColumn,
						elementRangeAction: 'delete'
					});
				}
			}
		});
	};
	const handleDoubleClick = ( event ) => {
		event.stopPropagation();
		props.jumpToElementInEditor({
			startLineNumber: props.startLineNumber,
			endLineNumber: props.endLineNumber,
			startColumn: props.startColumn,
			endColumn: props.endColumn,
			elementRangeAction: null
		});
	};
	const handleConfiguratorTrigger = () => {
		props.jumpToElementInEditor({
			startLineNumber: props.startLineNumber,
			endLineNumber: props.endLineNumber,
			startColumn: props.startColumn,
			endColumn: props.endColumn,
			elementRangeAction: 'trigger_configurator'
		});
	};
	const { tagName, startLineNumber, endLineNumber, startColumn } = props;
	let outerTitle = `Double-click to highlight source code for <${tagName} />`;
	if ( startLineNumber === endLineNumber ) {
		outerTitle += ` (L${startLineNumber})`;
	}
	else {
		outerTitle += ` (L${startLineNumber}-${endLineNumber})`;
	}
	const wrapperBar = <Fragment>
		<span className="line-wrapper-tagname" >{tagName}</span>
		<span
			role="button" tabIndex={0}
			className="line-wrapper-delete fa fa-caret-up"
			title={`Switch <${tagName} /> with previous element`}
			onClick={switchWithPrevious}
			onKeyPress={switchWithPrevious}
		></span>
		<span
			role="button" tabIndex={0}
			className="line-wrapper-delete fa fa-caret-down"
			title={`Switch <${tagName} /> with next element`}
			onClick={switchWithNext}
			onKeyPress={switchWithNext}
		></span>
		<span
			role="button" tabIndex={0}
			className="line-wrapper-delete fa fa-trash"
			title={`Delete <${tagName} /> from lesson`}
			onClick={deleteElement}
			onKeyPress={deleteElement}
		></span>
		<span
			role="button" tabIndex={0}
			className="line-wrapper-open-configurator fa fa-cogs"
			title={`Click to open configurator menu for <${tagName} />`}
			onClick={handleConfiguratorTrigger}
			onKeyPress={handleConfiguratorTrigger}
		></span>
	</Fragment>;
	if ( props.isInline ) {
		return (
			<span
				id={`line-${startLineNumber}-${startColumn}`}
				className="line-wrapper outer-element"
				onDoubleClick={handleDoubleClick}
				title={outerTitle}
				style={{ ...props.style, ...style }}
				ref={( div ) => {
					lineWrapper.current = div;
					drag( div );
				}}
			>
				<span className="line-wrapper-bar" >
					{wrapperBar}
				</span>
				{props.children}
			</span>
		);
	}
	return (
		<div
			id={`line-${startLineNumber}-${startColumn}`}
			data-start-line-number={startLineNumber}
			data-start-column={startColumn}
			data-end-column={props.endColumn}
			data-end-line-number={props.endLineNumber}
			className="line-wrapper outer-element"
			onDoubleClick={handleDoubleClick}
			title={outerTitle}
			style={{ ...props.style, ...style }}
			ref={( div ) => {
				lineWrapper.current = div;
				drag( div );
			}}
		>
			<div className="line-wrapper-bar" >
				{wrapperBar}
			</div>
			{props.children}
		</div>
	);
};


// PROPERTIES //

LineWrapper.defaultProps = {
	isInline: false,
	startColumn: 1,
	endColumn: PINF,
	tagName: null,
	style: {}
};

LineWrapper.propTypes = {
	isInline: PropTypes.bool,
	jumpToElementInEditor: PropTypes.func.isRequired,
	endLineNumber: PropTypes.number.isRequired,
	startLineNumber: PropTypes.number.isRequired,
	startColumn: PropTypes.number,
	switchWithNext: PropTypes.func.isRequired,
	switchWithPrevious: PropTypes.func.isRequired,
	endColumn: PropTypes.number,
	tagName: PropTypes.string,
	style: PropTypes.object
};


// EXPORTS //

export default connect( mapStateToProps, {
	jumpToElementInEditor, switchWithNext, switchWithPrevious, toggleConfigurator
})( LineWrapper );

function mapStateToProps() {
	return {};
}
