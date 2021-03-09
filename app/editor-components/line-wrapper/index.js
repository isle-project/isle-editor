// MODULES //

import React, { Fragment, useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { i18n } from '@isle-project/locales/editor';
import { useDrag } from 'react-dnd';
import logger from 'debug';
import { connect } from 'react-redux';
import { findDOMNode } from 'react-dom';
import { getEmptyImage } from 'react-dnd-html5-backend';
import vex from 'vex-js';
import PINF from '@stdlib/constants/math/float64-pinf';
import useIsMounted from 'hooks/is-mounted';
import { jumpToElementInEditor, switchWithNext, switchWithPrevious, toggleConfigurator } from 'actions';
import './line_wrapper.css';


// VARIABLES //

const debug = logger( 'isle:line-wrapper' );
const RE_LOADABLE = /(\s|^)isle-loadable(\s|$)/;
const RE_LINE_WRAPPER_BAR = /(\s|^)line-wrapper-bar(\s|$)/;
const RE_CONTEXT_MENU = /(\s|^)react-contextmenu(?:-wrapper)?(\s|$)/;
const LINE_WRAPPER = 'LINE_WRAPPER';


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
	const tagNameRef = useRef( null );
	const { tagName, startLineNumber, endLineNumber, startColumn, endColumn, jumpToElementInEditor, switchWithNext, switchWithPrevious } = props;
	const [ { opacity }, drag, preview ] = useDrag({
		type: LINE_WRAPPER,
		item: {
			type: 'component-wrapper',
			tagName,
			startLineNumber,
			endLineNumber,
			startColumn,
			endColumn
		},
		collect: monitor => ({
			opacity: monitor.isDragging() ? 0.2 : 1
		})
	});
	useEffect(() => {
		preview( getEmptyImage(), { captureDraggingState: true });
	}, [ preview ] );
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
			} else {
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
			}
		} else {
			window.requestIdleCallback( retrievePositioning );
		}
	}, [ isMounted, style ] );
	useEffect( () => {
		window.requestIdleCallback( retrievePositioning );
	}, [ retrievePositioning ] );

	const handleSwitchWithPrevious = useCallback( () => {
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
			switchWithPrevious({
				current: {
					startLineNumber,
					endLineNumber,
					startColumn,
					endColumn
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
	}, [ startLineNumber, endLineNumber, startColumn, endColumn, switchWithPrevious ] );
	const handleSwitchWithNext = useCallback( () => {
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
			switchWithNext({
				current: {
					startLineNumber,
					endLineNumber,
					startColumn,
					endColumn
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
	}, [ startLineNumber, endLineNumber, startColumn, endColumn, switchWithNext ] );
	const toggleComponentStyler = useCallback( () => {
		jumpToElementInEditor({
			startLineNumber,
			endLineNumber,
			startColumn,
			endColumn,
			elementRangeAction: 'trigger_component_styler'
		});
	}, [ startLineNumber, endLineNumber, startColumn, endColumn, jumpToElementInEditor ] );
	const deleteElement = useCallback( () => {
		vex.dialog.confirm({
			unsafeMessage: i18n.t('confirm-tag-deletion'),
			callback: ( value ) => {
				if ( value ) {
					jumpToElementInEditor({
						startLineNumber,
						endLineNumber,
						startColumn,
						endColumn,
						elementRangeAction: 'delete'
					});
				}
			}
		});
	}, [ startLineNumber, endLineNumber, startColumn, endColumn, jumpToElementInEditor ] );
	const handleDoubleClick = useCallback( ( event ) => {
		event.stopPropagation();
		jumpToElementInEditor({
			startLineNumber,
			endLineNumber,
			startColumn,
			endColumn,
			elementRangeAction: null
		});
	}, [ startLineNumber, endLineNumber, startColumn, endColumn, jumpToElementInEditor ] );
	const handleConfiguratorTrigger = useCallback( () => {
		jumpToElementInEditor({
			startLineNumber,
			endLineNumber,
			startColumn,
			endColumn,
			elementRangeAction: 'trigger_configurator'
		});
	}, [ startLineNumber, endLineNumber, startColumn, endColumn, jumpToElementInEditor ] );
	let outerTitle;
	if ( startLineNumber === endLineNumber ) {
		outerTitle = i18n.t('outer-title-single', { tagName, startLineNumber });
	}
	else {
		outerTitle += i18n.t('outer-title-multiline', { tagName, startLineNumber, endLineNumber });
	}
	const wrapperBar = <Fragment>
		<span className="line-wrapper-tagname" ref={tagNameRef} >
			{tagName}
			</span>
		<span
			role="button" tabIndex={0}
			className="line-wrapper-open-configurator fa fa-cogs"
			title={i18n.t('open-tag-wizard', { tagName })}
			onClick={handleConfiguratorTrigger}
			onKeyPress={handleConfiguratorTrigger}
		></span>
		<span
			role="button" tabIndex={0}
			className="line-wrapper-delete fa fa-palette"
			title={i18n.t('change-styling')}
			onClick={toggleComponentStyler}
			onKeyPress={toggleComponentStyler}
		></span>
		<span
			role="button" tabIndex={0}
			className="line-wrapper-delete fa fa-caret-up"
			title={i18n.t('switch-tag-previous', { tagName })}
			onClick={handleSwitchWithPrevious}
			onKeyPress={handleSwitchWithPrevious}
		></span>
		<span
			role="button" tabIndex={0}
			className="line-wrapper-delete fa fa-caret-down"
			title={i18n.t('switch-tag-next', { tagName })}
			onClick={handleSwitchWithNext}
			onKeyPress={handleSwitchWithNext}
		></span>
		<span
			role="button" tabIndex={0}
			className="line-wrapper-delete fa fa-trash"
			title={i18n.t('delete-tag', { tagName })}
			onClick={deleteElement}
			onKeyPress={deleteElement}
		></span>
	</Fragment>;
	if ( props.isInline ) {
		return (
			<span
				id={`line-${startLineNumber}-${startColumn}`}
				className="line-wrapper outer-element"
				onDoubleClick={handleDoubleClick}
				title={outerTitle}
				style={{ opacity, ...props.style, ...style }}
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
			style={{ opacity, ...props.style, ...style }}
			ref={( div ) => {
				lineWrapper.current = div;
				drag( div );
			}}
		>
			<div className={`line-wrapper-bar ${tagName}-bar`} >
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
