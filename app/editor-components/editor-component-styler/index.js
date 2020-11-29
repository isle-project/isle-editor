// MODULES //

import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import markdownit from 'markdown-it';
import replace from '@stdlib/string/replace';
import ComponentStyler from 'editor-components/component-styler';
import Draggable from 'components/draggable';
import './editor_component_styler.css';


// VARIABLES //

const debug = logger( 'isle:editor-component-styler' );
const RE_STYLE = /style={({[\s\S]*?})}/;
const RE_CLASSNAME = /className=(['"])([\s\S]+?)\1/;
const RE_TAG_START = /^(\s*|\s*['"]?[\da-z]+['"]?:\s*)<([a-z]+[0-9]*)/i;
const md = markdownit({
	html: true,
	xhtmlOut: true,
	breaks: true,
	typographer: false
});


// MAIN //

const EditorComponentStyler = ({ componentValue, elementRange, onChange }) => {
	const [ isShown, setIsShown ] = useState( false );
	const [ style, setStyle ] = useState({});
	const handleChange = useRef( () => {} );
	const handleClassTransform = useRef( () => {} );
	useEffect(() => {
		if ( componentValue ) {
			setIsShown( true );
			handleChange.current = ( style ) => {
				if ( !elementRange ) {
					return debug( 'No selection...');
				}
				let text;
				let value = componentValue;
				let match = value.match( RE_TAG_START );
				if ( !match ) {
					value = md.render( value );
				}
				if ( RE_STYLE.test( value ) ) {
					text = replace( value, RE_STYLE, `style={${JSON.stringify( style, null, 2 )}}` );
				} else {
					text = replace( value, RE_TAG_START, `$1<$2 style={${JSON.stringify( style, null, 2 )}}` );
				}
				onChange( text, elementRange );
			};
			handleClassTransform.current = ( className ) => {
				let value = componentValue;
				let match = value.match( RE_TAG_START );
				if ( !match ) {
					value = md.render( value );
				}
				value = replace( value, RE_STYLE, '' );
				if ( RE_CLASSNAME.test( value ) ) {
					value = replace( value, RE_CLASSNAME, 'className=$1$2 '+className+'$1' );
				} else {
					value = replace( value, RE_TAG_START, `$1<$2 className="${className}"` );
				}
				onChange( value, elementRange );
			};
			let newStyle;
			const matches = RE_STYLE.exec( componentValue );
			if ( !matches ) {
				newStyle = {};
			} else {
				newStyle = eval( `(${matches[ 1 ]})` ); // eslint-disable-line no-eval
			}
			setStyle( newStyle );
		}
	}, [ componentValue, elementRange, onChange ] );
	if ( !isShown ) {
		return null;
	}
	return ( <Draggable className="editor-component-styler" cancel=".popover" >
		<ComponentStyler
			componentStyle={style}
			show={isShown}
			onChange={handleChange.current}
			onClassTransform={handleClassTransform.current}
			onHide={() => {
				setIsShown( !isShown );
			}}
			style={{
				maxHeight: '90vh',
				overflowY: 'auto'
			}}
		/>
	</Draggable> );
};


// PROPERTIES //

EditorComponentStyler.defaultProps = {
	componentValue: '',
	elementRange: null
};

EditorComponentStyler.propTypes = {
	componentValue: PropTypes.string,
	elementRange: PropTypes.object,
	onChange: PropTypes.func.isRequired
};


// EXPORTS //

export default EditorComponentStyler;
