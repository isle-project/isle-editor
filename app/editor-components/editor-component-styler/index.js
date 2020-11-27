// MODULES //

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ComponentStyler from 'editor-components/component-styler';
import Draggable from 'components/draggable';
import './editor_component_styler.css';


// MAIN //

const EditorComponentStyler = ({ componentValue }) => {
	const [ isShown, setIsShown ] = useState( false );
	useEffect(() => {
		if ( componentValue ) {
			setIsShown( true );
		} else {
			setIsShown( false );
		}
	}, [ componentValue ] );
	if ( !isShown ) {
		return null;
	}
	return ( <Draggable className="editor-component-styler" cancel=".popover" >
		<ComponentStyler
			style={{}}
			show={isShown}
			onChange={() => {}}
			onHide={() => {
				setIsShown( !isShown );
			}}
		/>
	</Draggable> );
};


// PROPERTIES //

EditorComponentStyler.defaultProps = {
	componentValue: '',
	show: false
};

EditorComponentStyler.propTypes = {
	endLineNumber: PropTypes.number.isRequired,
	startLineNumber: PropTypes.number.isRequired,
	startColumn: PropTypes.number,
	endColumn: PropTypes.number,
	componentValue: PropTypes.string,
	show: PropTypes.bool
};


// EXPORTS //

export default EditorComponentStyler;
