// MODULES //

import React, { useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import markdownit from 'markdown-it';
import noop from '@stdlib/utils/noop';
import replace from '@stdlib/string/replace';
import isEmptyObject from '@stdlib/assert/is-empty-object';
import ComponentStyler from 'editor-components/component-styler';
import Draggable from '@isle-project/components/draggable';
import './editor_component_styler.css';


// VARIABLES //

const debug = logger( 'isle:editor-component-styler' );
const RE_STYLE = /style={({[\s\S]*?})}/;
const RE_CLASS_NAME = /className=(['"])([\s\S]+?)\1/;
const RE_TAG_START = /^(\s*|\s*['"]?[\da-z]+['"]?:\s*)<([a-z]+[0-9]*)/i;
const md = markdownit({
	html: true,
	xhtmlOut: true,
	breaks: true,
	typographer: false
});
const COMPONENT_STYLER_STYLE = {
	maxHeight: '90vh',
	overflowY: 'auto'
};


// MAIN //

const EditorComponentStyler = ({ componentValue, elementRange, show, onChange, onHide }) => {
	const [ isShown, setIsShown ] = useState( false );
	const [ style, setStyle ] = useState({});
	const [ component, setComponent ] = useState({});
	const handleChange = useRef( () => {} );
	const handleClassTransform = useRef( () => {} );
	const handleHide = useCallback( () => {
		setIsShown( false );
		onHide();
	}, [ onHide ] );
	useEffect( () => {
		let value = componentValue;
		if ( !value ) {
			return;
		}
		let match = value.match( RE_TAG_START );
		if ( !match ) {
			value = md.render( value );
			match = value.match( RE_TAG_START );
		}
		if ( match ) {
			setComponent({
				tagName: match[ 2 ],
				value: value
			});
		}
	}, [ componentValue ] );
	useEffect( () => {
		if ( show ) {
			setIsShown( show );
		}
	}, [ show ] );
	useEffect( () => {
		handleChange.current = ( style ) => {
			if ( !elementRange ) {
				return debug( 'No selection...');
			}
			let text;
			if ( RE_STYLE.test( component.value ) ) {
				if ( isEmptyObject( style ) ) {
					text = replace( component.value, RE_STYLE, '' );
				} else {
					text = replace( component.value, RE_STYLE, `style={${JSON.stringify( style, null, 2 )}}` );
				}
			} else {
				text = replace( component.value, RE_TAG_START, `$1<$2 style={${JSON.stringify( style, null, 2 )}}` );
			}
			onChange( text, elementRange );
		};
		handleClassTransform.current = ( className ) => {
			let value = component.value;
			value = replace( value, RE_STYLE, '' );
			if ( RE_CLASS_NAME.test( value ) ) {
				value = replace( value, RE_CLASS_NAME, 'className=$1$2 '+className+'$1' );
			} else {
				value = replace( value, RE_TAG_START, `$1<$2 className="${className}"` );
			}
			onChange( value, elementRange );
		};
		let newStyle;
		const matches = RE_STYLE.exec( component.value );
		if ( !matches ) {
			newStyle = {};
		} else {
			newStyle = eval( `(${matches[ 1 ]})` ); // eslint-disable-line no-eval
		}
		setStyle( newStyle );
	}, [ component, elementRange, onChange ] );
	if ( !isShown ) {
		return null;
	}
	return ( <Draggable className="editor-component-styler" cancel=".popover, .input" >
		<ComponentStyler
			tagName={component.tagName}
			componentStyle={style}
			show={isShown}
			onChange={handleChange.current}
			onClassTransform={handleClassTransform.current}
			onHide={handleHide}
			style={COMPONENT_STYLER_STYLE}
		/>
	</Draggable> );
};


// PROPERTIES //

EditorComponentStyler.defaultProps = {
	componentValue: '',
	elementRange: null,
	onHide: noop
};

EditorComponentStyler.propTypes = {
	componentValue: PropTypes.string,
	elementRange: PropTypes.object,
	onChange: PropTypes.func.isRequired,
	onHide: PropTypes.func
};


// EXPORTS //

export default EditorComponentStyler;
